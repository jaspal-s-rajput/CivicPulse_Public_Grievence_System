package com.example.demo.payload;



import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

//@Data
//@Builder
public class CitizenComplaintResponse {
    private Long id;
    private String title;
    private String description;
    private String status;
    private String complaintStage;
    private String officerRemark;
    private String adminRemark;
    private String officerEvidenceUrl;
    private LocalDateTime expectedCompletionDate;
    private LocalDateTime submissionDate;
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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getComplaintStage() {
		return complaintStage;
	}
	public void setComplaintStage(String complaintStage) {
		this.complaintStage = complaintStage;
	}
	public String getOfficerRemark() {
		return officerRemark;
	}
	public void setOfficerRemark(String officerRemark) {
		this.officerRemark = officerRemark;
	}
	public String getAdminRemark() {
		return adminRemark;
	}
	public void setAdminRemark(String adminRemark) {
		this.adminRemark = adminRemark;
	}
	public String getOfficerEvidenceUrl() {
		return officerEvidenceUrl;
	}
	public void setOfficerEvidenceUrl(String officerEvidenceUrl) {
		this.officerEvidenceUrl = officerEvidenceUrl;
	}
	public LocalDateTime getExpectedCompletionDate() {
		return expectedCompletionDate;
	}
	public void setExpectedCompletionDate(LocalDateTime expectedCompletionDate) {
		this.expectedCompletionDate = expectedCompletionDate;
	}
	public LocalDateTime getSubmissionDate() {
		return submissionDate;
	}
	public void setSubmissionDate(LocalDateTime submissionDate) {
		this.submissionDate = submissionDate;
	}
	public CitizenComplaintResponse(Long id, String title, String description, String status, String complaintStage,
			String officerRemark, String adminRemark, String officerEvidenceUrl, LocalDateTime expectedCompletionDate,
			LocalDateTime submissionDate) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.status = status;
		this.complaintStage = complaintStage;
		this.officerRemark = officerRemark;
		this.adminRemark = adminRemark;
		this.officerEvidenceUrl = officerEvidenceUrl;
		this.expectedCompletionDate = expectedCompletionDate;
		this.submissionDate = submissionDate;
	}
	public CitizenComplaintResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
}
