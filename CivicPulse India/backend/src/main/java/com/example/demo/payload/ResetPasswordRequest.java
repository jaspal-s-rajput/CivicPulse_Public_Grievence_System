package com.example.demo.payload;

import lombok.Data;

//@Data
public class ResetPasswordRequest {
    private String email;
    private String resetToken;
    private String newPassword;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getResetToken() {
		return resetToken;
	}
	public void setResetToken(String resetToken) {
		this.resetToken = resetToken;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	public ResetPasswordRequest(String email, String resetToken, String newPassword) {
		super();
		this.email = email;
		this.resetToken = resetToken;
		this.newPassword = newPassword;
	}
	public ResetPasswordRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
}
