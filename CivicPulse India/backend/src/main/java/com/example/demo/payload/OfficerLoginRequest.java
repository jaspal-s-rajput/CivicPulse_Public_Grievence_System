package com.example.demo.payload;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
//
//@Getter
//@Setter
public class OfficerLoginRequest {

    @Email
    @NotBlank
    private String email;

    @NotBlank
    private String password;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public OfficerLoginRequest(@Email @NotBlank String email, @NotBlank String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public OfficerLoginRequest() {
		super();
		// TODO Auto-generated constructor stub
	}

    

}

