package com.example.demo.payload;

import lombok.AllArgsConstructor;
import lombok.Data;

//@Data
//@AllArgsConstructor
public class NotificationDto {

	 private Long complaintId;
	    private String status;
		public Long getComplaintId() {
			return complaintId;
		}
		public void setComplaintId(Long complaintId) {
			this.complaintId = complaintId;
		}
		public String getStatus() {
			return status;
		}
		public void setStatus(String status) {
			this.status = status;
		}
		public NotificationDto(Long complaintId, String status) {
			super();
			this.complaintId = complaintId;
			this.status = status;
		}
		public NotificationDto() {
			super();
			// TODO Auto-generated constructor stub
		}
	    
	    
}
