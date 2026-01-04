package com.example.demo.payload;

import lombok.*;

//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//@Builder
public class OfficerWorkloadResponse {
    private Long id;
    private String name;
    private String email;
    private String department;
    private long activeComplaints;
    private String status; // AVAILABLE, BUSY, OVERLOADED
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
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public long getActiveComplaints() {
		return activeComplaints;
	}
	public void setActiveComplaints(long activeComplaints) {
		this.activeComplaints = activeComplaints;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public OfficerWorkloadResponse(Long id, String name, String email, String department, long activeComplaints,
			String status) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.department = department;
		this.activeComplaints = activeComplaints;
		this.status = status;
	}
	public OfficerWorkloadResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
}
