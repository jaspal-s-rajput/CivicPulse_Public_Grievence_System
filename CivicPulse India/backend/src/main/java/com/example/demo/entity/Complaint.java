package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "complaints")
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Complaint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "citizen_id")
    @JsonIgnoreProperties({"complaints", "hibernateLazyInitializer", "handler"})
    private Citizen citizen;

    @Column(nullable = false)
    private String title;

    @Column(length = 2000)
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ComplaintCategory category;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private Priority priority = Priority.MEDIUM;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private ComplaintStatus status = ComplaintStatus.PENDING;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "officer_id", nullable = true)
    @JsonIgnoreProperties({"assignedComplaints", "hibernateLazyInitializer", "handler"})
    private Officer assignedOfficer;

    // ✅ New fields for officer dashboard
    private LocalDateTime assignedDate;
    private LocalDateTime expectedCompletionDate;

    @Column(nullable = false)
    private Double latitude;

    @Column(nullable = false)
    private Double longitude;

    @Column(nullable = true)
    private String location;

    @Column(nullable = false)
    private String citizenName;

    @Column(nullable = false)
    private String citizenPhone;

    @Builder.Default
    private boolean showCitizenInfoToAdmin = true;

    @Column(length = 1000)
    private String officerRemark;

    @Column
    private String officerEvidenceUrl;

    @Builder.Default
    private LocalDateTime submissionDate = LocalDateTime.now();

    private LocalDateTime resolutionDate;
    
    
    @Column(length = 1000)
    private String adminRemark;

    // Add getter and setter
    public String getAdminRemark() {
        return adminRemark;
    }

    public void setAdminRemark(String adminRemark) {
        this.adminRemark = adminRemark;
    }

    

    @Column
    private String imageUrl;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private ComplaintStage complaintStage = ComplaintStage.REGISTERED;

    @OneToOne(mappedBy = "complaint", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("complaint")
    private Feedback feedback;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Citizen getCitizen() {
		return citizen;
	}

	public void setCitizen(Citizen citizen) {
		this.citizen = citizen;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public ComplaintCategory getCategory() {
		return category;
	}

	public void setCategory(ComplaintCategory category) {
		this.category = category;
	}

	public Priority getPriority() {
		return priority;
	}

	public void setPriority(Priority priority) {
		this.priority = priority;
	}

	public ComplaintStatus getStatus() {
		return status;
	}

	public void setStatus(ComplaintStatus status) {
		this.status = status;
	}

	public Officer getAssignedOfficer() {
		return assignedOfficer;
	}

	public void setAssignedOfficer(Officer assignedOfficer) {
		this.assignedOfficer = assignedOfficer;
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

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getCitizenName() {
		return citizenName;
	}

	public void setCitizenName(String citizenName) {
		this.citizenName = citizenName;
	}

	public String getCitizenPhone() {
		return citizenPhone;
	}

	public void setCitizenPhone(String citizenPhone) {
		this.citizenPhone = citizenPhone;
	}

	public boolean isShowCitizenInfoToAdmin() {
		return showCitizenInfoToAdmin;
	}

	public void setShowCitizenInfoToAdmin(boolean showCitizenInfoToAdmin) {
		this.showCitizenInfoToAdmin = showCitizenInfoToAdmin;
	}

	public String getOfficerRemark() {
		return officerRemark;
	}

	public void setOfficerRemark(String officerRemark) {
		this.officerRemark = officerRemark;
	}

	public String getOfficerEvidenceUrl() {
		return officerEvidenceUrl;
	}

	public void setOfficerEvidenceUrl(String officerEvidenceUrl) {
		this.officerEvidenceUrl = officerEvidenceUrl;
	}

	public LocalDateTime getSubmissionDate() {
		return submissionDate;
	}

	public void setSubmissionDate(LocalDateTime submissionDate) {
		this.submissionDate = submissionDate;
	}

	public LocalDateTime getResolutionDate() {
		return resolutionDate;
	}

	public void setResolutionDate(LocalDateTime resolutionDate) {
		this.resolutionDate = resolutionDate;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public ComplaintStage getComplaintStage() {
		return complaintStage;
	}

	public void setComplaintStage(ComplaintStage complaintStage) {
		this.complaintStage = complaintStage;
	}

	public Feedback getFeedback() {
		return feedback;
	}

	public void setFeedback(Feedback feedback) {
		this.feedback = feedback;
	}

	public Complaint(Long id, Citizen citizen, String title, String description, ComplaintCategory category,
			Priority priority, ComplaintStatus status, Officer assignedOfficer, LocalDateTime assignedDate,
			LocalDateTime expectedCompletionDate, Double latitude, Double longitude, String location,
			String citizenName, String citizenPhone, boolean showCitizenInfoToAdmin, String officerRemark,
			String officerEvidenceUrl, LocalDateTime submissionDate, LocalDateTime resolutionDate, String adminRemark,
			String imageUrl, ComplaintStage complaintStage, Feedback feedback) {
		super();
		this.id = id;
		this.citizen = citizen;
		this.title = title;
		this.description = description;
		this.category = category;
		this.priority = priority;
		this.status = status;
		this.assignedOfficer = assignedOfficer;
		this.assignedDate = assignedDate;
		this.expectedCompletionDate = expectedCompletionDate;
		this.latitude = latitude;
		this.longitude = longitude;
		this.location = location;
		this.citizenName = citizenName;
		this.citizenPhone = citizenPhone;
		this.showCitizenInfoToAdmin = showCitizenInfoToAdmin;
		this.officerRemark = officerRemark;
		this.officerEvidenceUrl = officerEvidenceUrl;
		this.submissionDate = submissionDate;
		this.resolutionDate = resolutionDate;
		this.adminRemark = adminRemark;
		this.imageUrl = imageUrl;
		this.complaintStage = complaintStage;
		this.feedback = feedback;
	}

	public Complaint() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
}
