package com.example.demo.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "admins")
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true)
    private String email;

    private String password;
    
    @Column
    private String resetToken;

    @Column
    private LocalDateTime resetTokenExpiry;


    @Enumerated(EnumType.STRING)
    private Role role; // Always Role.ADMIN


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


	public Admin(Long id, String name, String email, String password, String resetToken, LocalDateTime resetTokenExpiry,
			Role role) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.resetToken = resetToken;
		this.resetTokenExpiry = resetTokenExpiry;
		this.role = role;
	}


	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
    
}
