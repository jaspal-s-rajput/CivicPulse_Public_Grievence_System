package com.example.demo.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "citizen")
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
public class Citizen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true)
    private String email;   // used for login

    private String phoneNo;

    private String address;

    private int age;

    private String password;  // will be encrypted
    
 // ✅ Optional fields for forgot password
    private String resetToken;  
    private LocalDateTime resetTokenExpiry;
    
    @Enumerated(EnumType.STRING)
    private Role role;  // <-- Add this field

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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

	public String getResetToken() {
		return resetToken;
	}

	public void setResetToken(String resetToken) {
		this.resetToken = resetToken;
	}

	public LocalDateTime getResetTokenExpiry() {
		return resetTokenExpiry;
	}

	public void setResetTokenExpiry(LocalDateTime resetTokenExpiry) {
		this.resetTokenExpiry = resetTokenExpiry;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public Citizen(Long id, String name, String email, String phoneNo, String address, int age, String password,
			String resetToken, LocalDateTime resetTokenExpiry, Role role) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phoneNo = phoneNo;
		this.address = address;
		this.age = age;
		this.password = password;
		this.resetToken = resetToken;
		this.resetTokenExpiry = resetTokenExpiry;
		this.role = role;
	}

	public Citizen() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
}
