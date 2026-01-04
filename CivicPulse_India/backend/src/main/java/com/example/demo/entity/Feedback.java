package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "feedback")
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer rating;                // 1–5 stars
    private String resolutionStatus;       // RESOLVED, PARTIALLY_RESOLVED, NOT_RESOLVED
    private String timeliness;             // ON_TIME, SLIGHT_DELAY, VERY_LATE
    private Integer officerBehaviourRating;
    private String feedbackComment;
    private String feedbackImageUrl;
    private Boolean reopened;
    private LocalDateTime feedbackSubmittedAt;

    // Citizen who submitted feedback
    @ManyToOne
    @JoinColumn(name = "feedback_by_citizen_id")
    private Citizen feedbackBy;

    // Feedback belongs to which complaint
    @ManyToOne
    @JoinColumn(name = "complaint_id")
    private Complaint complaint;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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

	public String getFeedbackImageUrl() {
		return feedbackImageUrl;
	}

	public void setFeedbackImageUrl(String feedbackImageUrl) {
		this.feedbackImageUrl = feedbackImageUrl;
	}

	public Boolean getReopened() {
		return reopened;
	}

	public void setReopened(Boolean reopened) {
		this.reopened = reopened;
	}

	public LocalDateTime getFeedbackSubmittedAt() {
		return feedbackSubmittedAt;
	}

	public void setFeedbackSubmittedAt(LocalDateTime feedbackSubmittedAt) {
		this.feedbackSubmittedAt = feedbackSubmittedAt;
	}

	public Citizen getFeedbackBy() {
		return feedbackBy;
	}

	public void setFeedbackBy(Citizen feedbackBy) {
		this.feedbackBy = feedbackBy;
	}

	public Complaint getComplaint() {
		return complaint;
	}

	public void setComplaint(Complaint complaint) {
		this.complaint = complaint;
	}

	public Feedback(Long id, Integer rating, String resolutionStatus, String timeliness, Integer officerBehaviourRating,
			String feedbackComment, String feedbackImageUrl, Boolean reopened, LocalDateTime feedbackSubmittedAt,
			Citizen feedbackBy, Complaint complaint) {
		super();
		this.id = id;
		this.rating = rating;
		this.resolutionStatus = resolutionStatus;
		this.timeliness = timeliness;
		this.officerBehaviourRating = officerBehaviourRating;
		this.feedbackComment = feedbackComment;
		this.feedbackImageUrl = feedbackImageUrl;
		this.reopened = reopened;
		this.feedbackSubmittedAt = feedbackSubmittedAt;
		this.feedbackBy = feedbackBy;
		this.complaint = complaint;
	}

	public Feedback() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
}
