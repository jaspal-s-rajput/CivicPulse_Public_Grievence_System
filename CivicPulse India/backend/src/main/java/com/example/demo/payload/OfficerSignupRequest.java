package com.example.demo.payload;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//@Data
//@NoArgsConstructor
//@AllArgsConstructor
public class OfficerSignupRequest {

    @NotBlank(message = "Name is required")
    private String name;

    @Email(message = "Email must be valid")
    @NotBlank(message = "Email is required")
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters")
    private String password;

    @Pattern(regexp = "^[0-9]{10}$", message = "Phone number must be 10 digits")
    private String phoneNo;

    @NotBlank(message = "Department is required")
    private String department;     // ⭐ NEW FIELD ADDED

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

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

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public OfficerSignupRequest() {
		super();
		// TODO Auto-generated constructor stub
	}

	public OfficerSignupRequest(@NotBlank(message = "Name is required") String name,
			@Email(message = "Email must be valid") @NotBlank(message = "Email is required") String email,
			@NotBlank(message = "Password is required") @Size(min = 6, message = "Password must be at least 6 characters") String password,
			@Pattern(regexp = "^[0-9]{10}$", message = "Phone number must be 10 digits") String phoneNo,
			@NotBlank(message = "Department is required") String department) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.phoneNo = phoneNo;
		this.department = department;
	}
    
    
}
