package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "officers")
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
public class Officer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true)
    private String email;

    private String password;

    private String phoneNo;

    private String department;   // Officer Department (Traffic, Crime, Cyber, Admin, etc.)

    @Enumerated(EnumType.STRING)
    private Role role;  // Default: Role.OFFICER

    @Enumerated(EnumType.STRING)
    private OfficerStatus status; // AVAILABLE, BUSY, OVERLOADED

    // Optional: store number of active complaints (Transient: not persisted)
    @Transient
    private Long activeComplaints;

    // ✅ Helper method to safely return active complaints
    public Long getActiveComplaints() {
        return activeComplaints != null ? activeComplaints : 0L;
    }

    // ------------------ For secure password setup/reset ------------------
    private String resetToken;               // Token for one-time password set/reset
    private LocalDateTime resetTokenExpiry;  // Expiry time for the token

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
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	public OfficerStatus getStatus() {
		return status;
	}
	public void setStatus(OfficerStatus status) {
		this.status = status;
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
	public void setActiveComplaints(Long activeComplaints) {
		this.activeComplaints = activeComplaints;
	}
	public Officer(Long id, String name, String email, String password, String phoneNo, String department, Role role,
			OfficerStatus status, Long activeComplaints, String resetToken, LocalDateTime resetTokenExpiry) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.phoneNo = phoneNo;
		this.department = department;
		this.role = role;
		this.status = status;
		this.activeComplaints = activeComplaints;
		this.resetToken = resetToken;
		this.resetTokenExpiry = resetTokenExpiry;
	}
	public Officer() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
    
    
}
