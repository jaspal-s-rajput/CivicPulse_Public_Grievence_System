package com.example.demo.payload;

import jakarta.validation.constraints.*;

import lombok.Data;

//@Data
public class CitizenSignupRequest {

    @NotBlank(message = "Name is required")
    private String name;

    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String email;

    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "\\d{10}", message = "Phone number must be 10 digits")
    private String phoneNo;

    @NotBlank(message = "Address is required")
    private String address;

    @Min(value = 18, message = "Age must be at least 18")
    @Max(value = 100, message = "Age must be less than 100")
    private int age;

    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters")
    private String password;

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

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public CitizenSignupRequest(@NotBlank(message = "Name is required") String name,
			@Email(message = "Invalid email format") @NotBlank(message = "Email is required") String email,
			@NotBlank(message = "Phone number is required") @Pattern(regexp = "\\d{10}", message = "Phone number must be 10 digits") String phoneNo,
			@NotBlank(message = "Address is required") String address,
			@Min(value = 18, message = "Age must be at least 18") @Max(value = 100, message = "Age must be less than 100") int age,
			@NotBlank(message = "Password is required") @Size(min = 6, message = "Password must be at least 6 characters") String password) {
		super();
		this.name = name;
		this.email = email;
		this.phoneNo = phoneNo;
		this.address = address;
		this.age = age;
		this.password = password;
	}

	public CitizenSignupRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
    
}
