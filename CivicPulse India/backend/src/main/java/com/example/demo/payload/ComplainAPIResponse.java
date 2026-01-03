package com.example.demo.payload;

import lombok.AllArgsConstructor;
import lombok.Data;

//@Data
//@AllArgsConstructor
public class ComplainAPIResponse {
    private boolean success;
    private String message;
    private Object data; // can be Complaint, List<Complaint>, etc.
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
	public ComplainAPIResponse(boolean success, String message, Object data) {
		super();
		this.success = success;
		this.message = message;
		this.data = data;
	}
	public ComplainAPIResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
    
 
    
}
