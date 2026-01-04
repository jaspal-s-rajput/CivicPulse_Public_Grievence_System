package com.example.demo.payload;

import lombok.AllArgsConstructor;
import lombok.Data;

//@Data
//@AllArgsConstructor
public class CitizenLoginResponse {
    private String message;
    private String token;
    private String role;
	public CitizenLoginResponse(String message, String token, String role) {
		super();
		this.message = message;
		this.token = token;
		this.role = role;
	}
	public CitizenLoginResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
    
    
    
}
