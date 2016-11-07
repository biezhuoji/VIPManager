package com.sprint.models.domain;

public class LoginAdmin {
	
	private String adminName;
	private int premission;
	private String url;

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public void setPremission(int premission) {
		this.premission = premission;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getAdminName() {
		return adminName;
	}

	public int getPremission() {
		return premission;
	}

	public String getUrl() {
		return url;
	}
}
