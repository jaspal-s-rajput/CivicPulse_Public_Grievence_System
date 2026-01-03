package com.example.demo.payload;

import lombok.Data;

//@Data
public class ComplaintStatusUpdateRequestDto {
    private String status; // PENDING, IN_PROGRESS, RESOLVED, etc.

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public ComplaintStatusUpdateRequestDto(String status) {
		super();
		this.status = status;
	}

	public ComplaintStatusUpdateRequestDto() {
		super();
		// TODO Auto-generated constructor stub
	}
    
}
