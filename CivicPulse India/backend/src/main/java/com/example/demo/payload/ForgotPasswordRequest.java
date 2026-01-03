package com.example.demo.payload;

import lombok.Data;

//@Data
public class ForgotPasswordRequest {
	private String email;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public ForgotPasswordRequest(String email) {
		super();
		this.email = email;
	}

	public ForgotPasswordRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
