package com.sprint.models.domain;

import java.util.*;
public class Admin {
	private int id;
	private Date createTime;
	private Date updateTime;
	private int status;
	private int premission;
	private String adminAccount;
	private String adminPassword;
	private String adminPhone;
	private String adminName;
	
	public void setId(int id) {
		this.id = id;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public void setPremission(int premission) {
		this.premission = premission;
	}

	public void setAdminAccount(String adminAccount) {
		this.adminAccount = adminAccount;
	}

	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}

	public void setAdminPhone(String adminPhone) {
		this.adminPhone = adminPhone;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public int getId() {
		return id;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public int getStatus() {
		return status;
	}

	public int getPremission() {
		return premission;
	}

	public String getAdminAccount() {
		return adminAccount;
	}

	public String getAdminPassword() {
		return adminPassword;
	}

	public String getAdminPhone() {
		return adminPhone;
	}

	public String getAdminName() {
		return adminName;
	}
}
