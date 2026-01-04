package com.example.demo.payload;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
public class ComplaintRequestDTO {

    @NotBlank(message = "Title is required")
    private String title;

    @NotBlank(message = "Description is required")
    private String description;

    // 🔴 REQUIRED — prevents NULL category DB error
    @NotBlank(message = "Category is required")
    private String category; // maps to ComplaintCategory enum

    // 📝 Optional written location/address
    private String location;

    @NotBlank(message = "Citizen name is required")
    private String citizenName;

    @NotBlank(message = "Citizen phone is required")
    private String citizenPhone;

    @NotNull(message = "showCitizenInfoToAdmin is required")
    private Boolean showCitizenInfoToAdmin;

    // 📌 optional status update
    private String status;

    // 🌍 REQUIRED — Leaflet coordinates
    @NotNull(message = "Latitude is required")
    private Double latitude;

    @NotNull(message = "Longitude is required")
    private Double longitude;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getCitizenName() {
		return citizenName;
	}

	public void setCitizenName(String citizenName) {
		this.citizenName = citizenName;
	}

	public String getCitizenPhone() {
		return citizenPhone;
	}

	public void setCitizenPhone(String citizenPhone) {
		this.citizenPhone = citizenPhone;
	}

	public Boolean getShowCitizenInfoToAdmin() {
		return showCitizenInfoToAdmin;
	}

	public void setShowCitizenInfoToAdmin(Boolean showCitizenInfoToAdmin) {
		this.showCitizenInfoToAdmin = showCitizenInfoToAdmin;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
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

	public ComplaintRequestDTO(@NotBlank(message = "Title is required") String title,
			@NotBlank(message = "Description is required") String description,
			@NotBlank(message = "Category is required") String category, String location,
			@NotBlank(message = "Citizen name is required") String citizenName,
			@NotBlank(message = "Citizen phone is required") String citizenPhone,
			@NotNull(message = "showCitizenInfoToAdmin is required") Boolean showCitizenInfoToAdmin, String status,
			@NotNull(message = "Latitude is required") Double latitude,
			@NotNull(message = "Longitude is required") Double longitude) {
		super();
		this.title = title;
		this.description = description;
		this.category = category;
		this.location = location;
		this.citizenName = citizenName;
		this.citizenPhone = citizenPhone;
		this.showCitizenInfoToAdmin = showCitizenInfoToAdmin;
		this.status = status;
		this.latitude = latitude;
		this.longitude = longitude;
	}

	public ComplaintRequestDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
    
}
