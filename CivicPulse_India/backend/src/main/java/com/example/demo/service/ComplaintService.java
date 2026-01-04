package com.example.demo.service;

import com.example.demo.entity.*;
import com.example.demo.payload.ComplaintRequestDTO;
import com.example.demo.payload.NotificationDto;
import com.example.demo.repositories.ComplaintRepository;
import com.example.demo.repositories.MapLocationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ComplaintService {

    private final ComplaintRepository complaintRepository;
    private final MapLocationRepository mapLocationRepository;
    private final SimpMessagingTemplate messagingTemplate; // ✅ Inject for WebSocket

    private final String UPLOAD_DIR = System.getProperty("user.dir") + File.separator + "uploads";

    // ====================== CREATE FROM DTO ======================
    public Complaint createFromDto(ComplaintRequestDTO dto, Citizen citizen, MultipartFile image) {

        if (dto.getCitizenName() == null || dto.getCitizenPhone() == null) {
            throw new RuntimeException("Citizen name and phone number must be provided.");
        }

        Complaint complaint = new Complaint();
        complaint.setTitle(dto.getTitle());
        complaint.setDescription(dto.getDescription());
        if (dto.getCategory() != null) complaint.setCategory(ComplaintCategory.valueOf(dto.getCategory()));
        complaint.setLocation(dto.getLocation());
        complaint.setLatitude(dto.getLatitude());
        complaint.setLongitude(dto.getLongitude());
        complaint.setCitizen(citizen);
        complaint.setCitizenName(dto.getCitizenName());
        complaint.setCitizenPhone(dto.getCitizenPhone());
        complaint.setShowCitizenInfoToAdmin(dto.getShowCitizenInfoToAdmin() == null ? true : dto.getShowCitizenInfoToAdmin());
        if (image != null && !image.isEmpty()) complaint.setImageUrl(saveImage(image));
        if (complaint.getPriority() == null) complaint.setPriority(Priority.MEDIUM);
        if (complaint.getStatus() == null) complaint.setStatus(ComplaintStatus.PENDING);

        Complaint savedComplaint = complaintRepository.save(complaint);

        saveMapLocation(savedComplaint);

        // ====================== WebSocket Notification ======================
        String email = citizen.getEmail().toLowerCase();
        NotificationDto payload = new NotificationDto(savedComplaint.getId(), savedComplaint.getStatus().name());

        messagingTemplate.convertAndSendToUser(email, "/queue/notify", payload); // ✅ Citizen
        messagingTemplate.convertAndSend("/topic/admin/complaints", payload);      // ✅ Admin
        System.out.println("✅ WebSocket notification sent for complaint ID=" + savedComplaint.getId());

        return savedComplaint;
    }

    // ====================== UPDATE ======================
    public Complaint updateFromDto(Long citizenId, Long complaintId,
                                   ComplaintRequestDTO dto, MultipartFile image) {

        Complaint existingComplaint = complaintRepository.findById(complaintId)
                .orElseThrow(() -> new RuntimeException("Complaint not found"));

        if (!existingComplaint.getCitizen().getId().equals(citizenId)) {
            throw new RuntimeException("You are not authorized to update this complaint");
        }

        if (dto.getTitle() != null) existingComplaint.setTitle(dto.getTitle());
        if (dto.getDescription() != null) existingComplaint.setDescription(dto.getDescription());
        if (dto.getCategory() != null) existingComplaint.setCategory(ComplaintCategory.valueOf(dto.getCategory()));
        if (dto.getLocation() != null) existingComplaint.setLocation(dto.getLocation());
        if (dto.getLatitude() != null) existingComplaint.setLatitude(dto.getLatitude());
        if (dto.getLongitude() != null) existingComplaint.setLongitude(dto.getLongitude());
        if (dto.getCitizenName() != null) existingComplaint.setCitizenName(dto.getCitizenName());
        if (dto.getCitizenPhone() != null) existingComplaint.setCitizenPhone(dto.getCitizenPhone());
        if (dto.getShowCitizenInfoToAdmin() != null) existingComplaint.setShowCitizenInfoToAdmin(dto.getShowCitizenInfoToAdmin());
        if (dto.getStatus() != null) existingComplaint.setStatus(ComplaintStatus.valueOf(dto.getStatus()));
        if (image != null && !image.isEmpty()) existingComplaint.setImageUrl(saveImage(image));

        Complaint saved = complaintRepository.save(existingComplaint);
        saveMapLocation(saved);

        // ====================== WebSocket Notification ======================
        String email = saved.getCitizen().getEmail().toLowerCase();
        NotificationDto payload = new NotificationDto(saved.getId(),
                "Updated: " + saved.getStatus().name());
        messagingTemplate.convertAndSendToUser(email, "/queue/notify", payload);
        messagingTemplate.convertAndSend("/topic/admin/complaints", payload);
        System.out.println("✅ WebSocket notification sent for updated complaint ID=" + saved.getId());

        return saved;
    }

    // ====================== DELETE ======================
    public void deleteComplaint(Long citizenId, Long complaintId) {
        Complaint existingComplaint = complaintRepository.findById(complaintId)
                .orElseThrow(() -> new RuntimeException("Complaint not found"));

        if (!existingComplaint.getCitizen().getId().equals(citizenId)) {
            throw new RuntimeException("You are not authorized to delete this complaint");
        }

        complaintRepository.delete(existingComplaint);

        // ====================== WebSocket Notification ======================
        String email = existingComplaint.getCitizen().getEmail().toLowerCase();
        NotificationDto payload = new NotificationDto(complaintId, "Deleted");
        messagingTemplate.convertAndSendToUser(email, "/queue/notify", payload);
        messagingTemplate.convertAndSend("/topic/admin/complaints", payload);
        System.out.println("✅ WebSocket notification sent for deleted complaint ID=" + complaintId);
    }

    // ====================== OTHER METHODS ======================
    public List<Complaint> getComplaintsByCitizen(Citizen citizen) {
        return complaintRepository.findByCitizen(citizen);
    }

    public Complaint getComplaintById(Long complaintId, Citizen citizen) {
        Complaint complaint = complaintRepository.findById(complaintId)
                .orElseThrow(() -> new RuntimeException("Complaint not found"));

        if (citizen != null && complaint.getCitizen() != null &&
                !complaint.getCitizen().getId().equals(citizen.getId())) {
            throw new RuntimeException("You are not authorized to view this complaint");
        }

        return complaint;
    }

    public Complaint updateComplaintStage(Long complaintId, ComplaintStage stage) {
        Complaint complaint = complaintRepository.findById(complaintId)
                .orElseThrow(() -> new RuntimeException("Complaint not found"));

        complaint.setComplaintStage(stage);
        return complaintRepository.save(complaint);
    }

    private void saveMapLocation(Complaint savedComplaint) {
        MapLocation map = new MapLocation();
        map.setLatitude(savedComplaint.getLatitude());
        map.setLongitude(savedComplaint.getLongitude());
        map.setCitizenId(savedComplaint.getCitizen().getId());
        map.setComplaintId(savedComplaint.getId());

        mapLocationRepository.save(map);
    }

    private String saveImage(MultipartFile image) {
        try {
            File dir = new File(UPLOAD_DIR);
            if (!dir.exists()) dir.mkdirs();

            String filename = UUID.randomUUID() + "_" + image.getOriginalFilename();
            File file = new File(dir, filename);
            image.transferTo(file);

            return "uploads/" + filename;
        } catch (IOException e) {
            throw new RuntimeException("Failed to save image", e);
        }
    }
}
