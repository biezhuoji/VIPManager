package com.sprint.models.dao;

import java.util.List;
import com.sprint.models.domain.Admin;
import com.sprint.models.domain.Account;
import org.apache.ibatis.annotations.*;
import com.sprint.models.domain.AdminWithoutPwd;
public interface AdminDao {
	AdminWithoutPwd findByAdminAccount(Account account);
	AdminWithoutPwd findByAdminAccountNumber(String accountNumber);
	void createAdmin(Admin admin);
	void deleteAdmin(int id);
	void updateAdmin(Admin admin);
	List<AdminWithoutPwd> findAdmin();
	List<AdminWithoutPwd> findAdminByKey(String key);
	AdminWithoutPwd findByAdminId(int id); 
}
