package com.example.demo.payload;

import lombok.Data;

//@Data
public class FeedbackRequest {

    private Integer rating;               
    private String resolutionStatus;      
    private String timeliness;           
    private Integer officerBehaviourRating;
    private String feedbackComment;       
        
    private Boolean reopened;  
    private Long complaintId;             // link feedback to complaint
    private Long citizenId;               // who submitted
	public Integer getRating() {
		return rating;
	}
	public void setRating(Integer rating) {
		this.rating = rating;
	}
	public String getResolutionStatus() {
		return resolutionStatus;
	}
	public void setResolutionStatus(String resolutionStatus) {
		this.resolutionStatus = resolutionStatus;
	}
	public String getTimeliness() {
		return timeliness;
	}
	public void setTimeliness(String timeliness) {
		this.timeliness = timeliness;
	}
	public Integer getOfficerBehaviourRating() {
		return officerBehaviourRating;
	}
	public void setOfficerBehaviourRating(Integer officerBehaviourRating) {
		this.officerBehaviourRating = officerBehaviourRating;
	}
	public String getFeedbackComment() {
		return feedbackComment;
	}
	public void setFeedbackComment(String feedbackComment) {
		this.feedbackComment = feedbackComment;
	}
	public Boolean getReopened() {
		return reopened;
	}
	public void setReopened(Boolean reopened) {
		this.reopened = reopened;
	}
	public Long getComplaintId() {
		return complaintId;
	}
	public void setComplaintId(Long complaintId) {
		this.complaintId = complaintId;
	}
	public Long getCitizenId() {
		return citizenId;
	}
	public void setCitizenId(Long citizenId) {
		this.citizenId = citizenId;
	}
	public FeedbackRequest(Integer rating, String resolutionStatus, String timeliness, Integer officerBehaviourRating,
			String feedbackComment, Boolean reopened, Long complaintId, Long citizenId) {
		super();
		this.rating = rating;
		this.resolutionStatus = resolutionStatus;
		this.timeliness = timeliness;
		this.officerBehaviourRating = officerBehaviourRating;
		this.feedbackComment = feedbackComment;
		this.reopened = reopened;
		this.complaintId = complaintId;
		this.citizenId = citizenId;
	}
	public FeedbackRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
	
}
