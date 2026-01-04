package com.example.demo.payload;

import lombok.Data;

//@Data
public class ComplaintAssignRequestDto {
    private Long officerId;

	public Long getOfficerId() {
		return officerId;
	}

	public void setOfficerId(Long officerId) {
		this.officerId = officerId;
	}

	public ComplaintAssignRequestDto(Long officerId) {
		super();
		this.officerId = officerId;
	}

	public ComplaintAssignRequestDto() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
    
}
