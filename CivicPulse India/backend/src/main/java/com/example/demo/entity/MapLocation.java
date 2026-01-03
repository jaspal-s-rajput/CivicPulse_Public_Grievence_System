package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
//@Data
@Table(name = "map_location")
public class MapLocation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double latitude;
    private Double longitude;

    private Long citizenId;
    private Long complaintId;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Double getLatitude() {
		return latitude;
	}
	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}
	public Double getLongitude() {
		return longitude;
	}
	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}
	public Long getCitizenId() {
		return citizenId;
	}
	public void setCitizenId(Long citizenId) {
		this.citizenId = citizenId;
	}
	public Long getComplaintId() {
		return complaintId;
	}
	public void setComplaintId(Long complaintId) {
		this.complaintId = complaintId;
	}
	public MapLocation(Long id, Double latitude, Double longitude, Long citizenId, Long complaintId) {
		super();
		this.id = id;
		this.latitude = latitude;
		this.longitude = longitude;
		this.citizenId = citizenId;
		this.complaintId = complaintId;
	}
	public MapLocation() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
    
}
