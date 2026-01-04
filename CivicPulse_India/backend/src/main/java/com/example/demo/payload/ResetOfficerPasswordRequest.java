package com.example.demo.payload;



import lombok.Data;

//@Data
public class ResetOfficerPasswordRequest {
    private String officerEmail;
    private String newPassword;
	public ResetOfficerPasswordRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ResetOfficerPasswordRequest(String officerEmail, String newPassword) {
		super();
		this.officerEmail = officerEmail;
		this.newPassword = newPassword;
	}
	public String getOfficerEmail() {
		return officerEmail;
	}
	public void setOfficerEmail(String officerEmail) {
		this.officerEmail = officerEmail;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
    
    
}
