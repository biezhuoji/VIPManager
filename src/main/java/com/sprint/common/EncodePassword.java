package com.sprint.common;

import java.util.Base64;
import java.util.Base64.Encoder;
import java.security.MessageDigest;
import javax.xml.bind.annotation.adapters.HexBinaryAdapter;
public class EncodePassword {
	
	public static String encodeBase64(byte[] data) throws Exception {
		Encoder encoder = Base64.getEncoder();
		byte[] encode = encoder.encode(data);
		return new String(encode);
	}
	
	public static String encodeSHA(byte[] data) throws Exception {
		MessageDigest md = MessageDigest.getInstance("SHA");
		byte[] digest = md.digest(data);
		return new HexBinaryAdapter().marshal(digest);
	}

	public static String encodeSHA2(byte[] data) throws Exception {
		MessageDigest md = MessageDigest.getInstance("SHA-256");
		byte[] digest = md.digest(data);
		return new HexBinaryAdapter().marshal(digest);
	}

	public static String encodePassword(String password) throws Exception {
		String newPassword = "shax" + password + "base64";
		String shaPwd = encodeSHA(newPassword.getBytes());
		String shaxPwd = encodeSHA2(shaPwd.getBytes());
		String pwd = shaxPwd + newPassword;
		String base64Pwd = encodeBase64(pwd.getBytes());
		return shaxPwd;
	}
}
