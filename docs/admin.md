# 新建管理员

#### 接口地址：
- http://localhost:3000/admin

#### HTTP请求方式：
- POST

#### 请求参数：
参数名|是否必须|参数描述
---------|------------|------------
adminAccount |是 |管理员账号，唯一，不可改
adminPassword | 是 |管理员密码
adminName| 是 |管理员姓名
adminPhone| 是 | 管理员手机号
####示例：
```
{
    "adminAccount": "accountnumber",
    "adminPassword": "encodepassword",
    "adminPhone": "135896245",
    "adminName": "Jack"
}
```
#### 响应代码：
- 0 创建失败（Action completed failed）
- 1 创建成功（Action completed successful）
- 6 该账号已经存在！

#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-07 22:47:39",
    "message": "Action completed successful"
  },
  "result": {
    "id": 5,
    "createTime": 1473259659000,
    "updateTime": 1473259659000,
    "status": 1,
    "premission": 1,
    "adminAccount": "accountnumber",
    "adminPhone": "135896245",
    "adminName": "Jack"
  }
}
```
- 字段说明:
  - id: 管理员id,标识
  - createTime: 管理员创建的时间戳
  - createTime: 更新管理员信息的时间戳
  - status: 状态，1可用，0不可用。
  - premission: 权限，1普通管理员，999系统管理员。

#删除管理员

#### 接口地址：
- http://localhost:3000/admin/adminAccount

#### HTTP请求方式：
- DELETE

#### 请求参数：
参数名|是否必须|参数描述
---------|------------|------------
adminAccount |是 |管理员账号，唯一，不可改
####示例：
```
http://localhost:3000/admin/accountnumber
```
#### 响应代码：
- 0 创建失败（Action completed failed）
- 1 创建成功（Action completed successful）
- 5 没有删除权限！
- 7 删除不成功！
#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-07 23:07:02",
    "message": "Action completed successful"
  },
  "result": null
}
```

# 修改管理员

#### 接口地址：
- http://localhost:3000/admin/adminAccount

#### HTTP请求方式：
- PUT

####请求参数：
参数名|是否必须|参数描述
---------|------------|------------
adminAccount |是 |管理员账号，唯一，不可改
adminPassword | 是 |管理员密码
adminName| 是 |管理员姓名
adminPhone| 是 | 管理员手机号
#### 示例：
```
{
    "adminAccount": "accountnumber",
    "adminPassword": "xxxxxx",
    "adminName": "BillGt",
    "adminPhone": "17862822222"
}

```
#### 响应代码：
- 0 创建失败（Action completed failed）
- 1 创建成功（Action completed successful）
- 9 修改失败！
#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-08 14:09:14",
    "message": "Action completed successful"
  },
  "result": {
    "id": 6,
    "createTime": 1473260939000,
    "updateTime": 1473314954000,
    "status": 1,
    "premission": 1,
    "adminAccount": "accountnumber",
    "adminPhone": "17862822222",
    "adminName": "BillGt"
  }
}
```

# 按管理员帐号精确查询
#### 接口地址：
- http://localhost:3000/admin/adminAccount

#### HTTP请求方式：
- GET

#### 请求参数：
参数名|是否必须|参数描述
---------|------------|------------
adminAccount|是 |管理员账号，唯一，不可改
####示例：
```
http://localhost:3000/admin/accountnumber
```
#### 响应代码：
- 0 创建失败（Action completed failed）
- 1 创建成功（Action completed successful）

#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-08 14:19:13",
    "message": "Action completed successful"
  },
  "result": {
    "id": 6,
    "createTime": 1473260939000,
    "updateTime": 1473314954000,
    "status": 1,
    "premission": 1,
    "adminAccount": "accountnumber",
    "adminPhone": "17862822222",
    "adminName": "BillGt"
  }
}
```

# 查询管理员
#### 接口地址：
- http://localhost:3000/admin

#### HTTP请求方式：
- GET

####请求参数：

参数名|是否必须|参数描述
---------|------------|------------
key |否 |对姓名进行模糊查询

#### 示例：
```
 全查询：http://localhost:3000/admin
 模糊查询：http://localhost:3000/admin?key=name

```
#### 响应代码：
- 0 创建失败（Action completed failed）
- 1 创建成功（Action completed successful）

#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-07 23:18:10",
    "message": "Action completed successful"
  },
  "result": [
    {
      "id": 3,
      "createTime": 1473232921000,
      "updateTime": 1473244212000,
      "status": 1,
      "premission": 1,
      "adminAccount": "11erresd82",
      "adminPhone": "15589517517",
      "adminName": "xxxName"
    },
    {
      "id": 4,
      "createTime": 1473234475000,
      "updateTime": 1473234475000,
      "status": 1,
      "premission": 1,
      "adminAccount": "1es1erresd82",
      "adminPhone": "17862822537",
      "adminName": "testName"
    },
    {
      "id": 6,
      "createTime": 1473260939000,
      "updateTime": 1473260971000,
      "status": 1,
      "premission": 1,
      "adminAccount": "accountnumber",
      "adminPhone": "0000000000",
      "adminName": "Jack"
    }
  ]
}
```
