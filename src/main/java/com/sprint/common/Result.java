package com.sprint.common;

import java.util.Map;
import java.util.HashMap;
import java.util.Date;
import java.text.SimpleDateFormat;
public class Result {
    private Map status = new HashMap();
    private Object result;
    public Result(){
        this.status.put("code", 1);
        this.status.put("message", "Action completed successful");
		this.status.put("created_at", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
    }

    public void setStatus(int code, String message) {
        this.status.put("code", code);
        this.status.put("message", message);
    }

    public void setResult(Object result) {
        this.result = result;
    }

    public Map getStatus() {
        return this.status;
    }

    public Object getResult() {
        return this.result;
    }
}
