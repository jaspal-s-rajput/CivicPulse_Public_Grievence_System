package com.example.demo.payload;

import java.time.LocalDateTime;
import com.example.demo.entity.Officer;
import lombok.*;

//@Getter
//@Setter
//@AllArgsConstructor
//@NoArgsConstructor
//@Builder  // ✅ builder added
public class OfficerComplaintResponse {

    private Long id;
    private String title;
    private String category;
    private String priority;
    private String status;
    private String officerRemark;
    private LocalDateTime assignedDate;
    private LocalDateTime expectedCompletionDate;
    private String location;
    private String description;
    private Double latitude;
    private Double longitude;
    private LocalDateTime submissionDate;
    private String imageUrl;
    private String complaintStage;

    // Assigned Officer Info
    private String assignedOfficerName;
    private String assignedOfficerStatus;
    private String assignedOfficerDepartment;
    private Long assignedOfficerActiveComplaints;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getOfficerRemark() {
		return officerRemark;
	}
	public void setOfficerRemark(String officerRemark) {
		this.officerRemark = officerRemark;
	}
	public LocalDateTime getAssignedDate() {
		return assignedDate;
	}
	public void setAssignedDate(LocalDateTime assignedDate) {
		this.assignedDate = assignedDate;
	}
	public LocalDateTime getExpectedCompletionDate() {
		return expectedCompletionDate;
	}
	public void setExpectedCompletionDate(LocalDateTime expectedCompletionDate) {
		this.expectedCompletionDate = expectedCompletionDate;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Double getLatitude() {
		return latitude;
	}
	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}
	public Double getLongitude() {
		return longitude;
	}
	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}
	public LocalDateTime getSubmissionDate() {
		return submissionDate;
	}
	public void setSubmissionDate(LocalDateTime submissionDate) {
		this.submissionDate = submissionDate;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public String getComplaintStage() {
		return complaintStage;
	}
	public void setComplaintStage(String complaintStage) {
		this.complaintStage = complaintStage;
	}
	public String getAssignedOfficerName() {
		return assignedOfficerName;
	}
	public void setAssignedOfficerName(String assignedOfficerName) {
		this.assignedOfficerName = assignedOfficerName;
	}
	public String getAssignedOfficerStatus() {
		return assignedOfficerStatus;
	}
	public void setAssignedOfficerStatus(String assignedOfficerStatus) {
		this.assignedOfficerStatus = assignedOfficerStatus;
	}
	public String getAssignedOfficerDepartment() {
		return assignedOfficerDepartment;
	}
	public void setAssignedOfficerDepartment(String assignedOfficerDepartment) {
		this.assignedOfficerDepartment = assignedOfficerDepartment;
	}
	public Long getAssignedOfficerActiveComplaints() {
		return assignedOfficerActiveComplaints;
	}
	public void setAssignedOfficerActiveComplaints(Long assignedOfficerActiveComplaints) {
		this.assignedOfficerActiveComplaints = assignedOfficerActiveComplaints;
	}
	public OfficerComplaintResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public OfficerComplaintResponse(Long id, String title, String category, String priority, String status,
			String officerRemark, LocalDateTime assignedDate, LocalDateTime expectedCompletionDate, String location,
			String description, Double latitude, Double longitude, LocalDateTime submissionDate, String imageUrl,
			String complaintStage, String assignedOfficerName, String assignedOfficerStatus,
			String assignedOfficerDepartment, Long assignedOfficerActiveComplaints) {
		super();
		this.id = id;
		this.title = title;
		this.category = category;
		this.priority = priority;
		this.status = status;
		this.officerRemark = officerRemark;
		this.assignedDate = assignedDate;
		this.expectedCompletionDate = expectedCompletionDate;
		this.location = location;
		this.description = description;
		this.latitude = latitude;
		this.longitude = longitude;
		this.submissionDate = submissionDate;
		this.imageUrl = imageUrl;
		this.complaintStage = complaintStage;
		this.assignedOfficerName = assignedOfficerName;
		this.assignedOfficerStatus = assignedOfficerStatus;
		this.assignedOfficerDepartment = assignedOfficerDepartment;
		this.assignedOfficerActiveComplaints = assignedOfficerActiveComplaints;
	}
    
    
}
