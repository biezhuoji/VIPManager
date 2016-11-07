# 创建会员

#### 接口地址
- http://localhost:3000/member

#### HTTP请求方式：
- POST

#### 请求参数：

参数名|是否必须|参数描述
---------|------------|------------
cardNumber |是 |会员卡号，.唯一，不可改
memberRank | 是 |会员卡等级
memberName| 是 |姓名
memberPhone| 是 | 手机号
memberPassword|是|密码
status|是|状态，0不可用，1可用。
money|否|余额，默认为0
####示例：
```
{
    "cardNumber":"123450",
    "memberRank": "铜牌会员",
    "memberName": "战士",
    "memberPhone": "1558952368",
    "memberPassword": "123456",
    "money":"0",
    "status":"1"
}


```
####响应代码：
- 1 创建成功（Action completed successful）
- 6 卡号已存在
- 7 请求参数非法！

#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-17 15:03:11",
    "message": "Action completed successful"
  },
  "result": {
    "id": 6,
    "createTime": 1474095792000,
    "updateTime": 1474095792000,
    "cardNumber": "123450",
    "memberRank": "铜牌会员",
    "memberName": "战士",
    "memberPhone": "1558952368",
    "status": 1,
    "money": 0
  }
}
```
- 字段说明:
 - id: 会员标识
 - createTime: 会员创建的时间戳
 - createTime: 更新会员信息的时间戳

# 删除会员

#### 接口地址：
- http://localhost:3000/member/id

#### HTTP请求方式：
- DELETE

#### 请求参数：
参数名|是否必须|参数描述
---------|------------|------------
id|是 |会员标记，唯一.
####示例：
```
http://localhost:3000/member/1
```
#### 响应代码：
- 1 创建成功（Action completed successful）

#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-17 15:11:14",
    "message": "Action completed successful"
  },
  "result": null
}
```

# 修改会员信息

#### 接口地址：
- http://localhost:3000/member/id

#### HTTP请求方式：
- PUT

#### 请求参数：
参数名|是否必须|参数描述
---------|------------|------------
cardNumber |是 |会员卡号，.唯一，不可改
memberRank | 是 |会员卡等级
memberName| 是 |姓名
memberPhone| 是 | 手机号
status|是|状态，0不可用，1可用。
money|是|余额，默认为0
#### 示例：
```
{
    "cardNumber":"123456",
    "memberRank": "铜牌会员",
    "memberName": "战士",
    "memberPhone": "1558952368",
    "money":"0",
    "status":"1"
}

```
#### 响应代码：
- 1 创建成功（Action completed successful）
- 6 请求参数非法！
#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-17 15:14:54",
    "message": "Action completed successful"
  },
  "result": {
    "id": 5,
    "createTime": 1474095114000,
    "updateTime": 1474096495000,
    "cardNumber": "123456",
    "memberRank": "铜牌会员",
    "memberName": "战士",
    "memberPhone": "1558952368",
    "status": 1,
    "money": 0
  }
}
```
- 字段说明:
 - id: 会员标识
 - createTime: 会员创建的时间戳
 - createTime: 更新会员信息的时间戳

# 查询会员信息
#### 接口地址：
- http://localhost:3000/member

#### HTTP请求方式：
- GET

####请求参数：

参数名|是否必须|参数描述
---------|------------|------------
key |否 |对会员卡号进行模糊查询

#### 示例：
```
 全查询：http://localhost:3000/member
 模糊查询：http://localhost:3000/member?key=123

```
#### 响应代码：
- 1 创建成功（Action completed successful）

#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-17 15:23:30",
    "message": "Action completed successful"
  },
  "result": [
    {
      "id": 5,
      "createTime": 1474095114000,
      "updateTime": 1474096495000,
      "cardNumber": "123456",
      "memberRank": "铜牌会员",
      "memberName": "战士",
      "memberPhone": "1558952368",
      "status": 1,
      "money": 0
    },
    {
      "id": 7,
      "createTime": 1474096991000,
      "updateTime": 1474096991000,
      "cardNumber": "456879",
      "memberRank": "铜牌会员",
      "memberName": "连长",
      "memberPhone": "1558952368",
      "status": 1,
      "money": 0
    }
  ]
}
```


# 修改会员折扣

#### 接口地址
- http://localhost:3000/memberRank/id

#### HTTP请求方式：
- PUT

#### 请求参数：

参数名|是否必须|参数描述
---------|------------|------------
memberRank |是 |会员等级，唯一，不可改
discount|是|折扣率，0<rate<=1
####示例：
```
{
    "memberRank": "铜牌会员",
    "discount": "0.98"
}
```
####响应代码：
- 0 更新失败
- 1 创建成功（Action completed successful）

#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-17 15:36:51",
    "message": "Action completed successful"
  },
  "result": {
    "id": 4,
    "createTime": 1474081299000,
    "updateTime": 1474097812000,
    "memberRank": "铜牌会员",
    "discount": 0.98
  }
}
```
- 字段说明:
 - id: 会员等级标识
 - createTime: 会员等级创建的时间戳
 - createTime: 更新会员等级的时间戳

# 查询会员等级信息
#### 接口地址：
- http://localhost:3000/memberRank

#### HTTP请求方式：
- GET

####请求参数：
无
#### 示例：
```
 http://localhost:3000/memberRank
```
#### 响应代码：
- 1 创建成功（Action completed successful）

#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-17 15:45:03",
    "message": "Action completed successful"
  },
  "result": [
    {
      "id": 2,
      "createTime": 1474081236000,
      "updateTime": 1474081236000,
      "memberRank": "金牌会员",
      "discount": 0.7
    },
    {
      "id": 1,
      "createTime": 1474081223000,
      "updateTime": 1474081223000,
      "memberRank": "钻石会员",
      "discount": 0.5
    },
    {
      "id": 4,
      "createTime": 1474081299000,
      "updateTime": 1474097812000,
      "memberRank": "铜牌会员",
      "discount": 0.98
    },
    {
      "id": 3,
      "createTime": 1474081245000,
      "updateTime": 1474081245000,
      "memberRank": "银牌会员",
      "discount": 0.8
    }
  ]
}
```

# 查询某个会员等级信息
#### 接口地址：
- http://localhost:3000/memberRank/discount

#### HTTP请求方式：
- GET

####请求参数：
参数名|是否必须|参数描述
---------|------------|------------
memberRank |是 |会员等级，唯一，主键，不可改

#### 示例：
```
 全查询：http://localhost:3000/memberRank/discount?memberRank=铜牌会员
```
#### 响应代码：
- 0 查询失败，参数不能为空！
- 1 创建成功（Action completed successful）
- 5 查询失败，该类型不存在！
#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-24 15:48:32",
    "message": "Action completed successful"
  },
  "result": {
    "id": 1,
    "createTime": 1473809570000,
    "updateTime": 1473844140000,
    "memberRank": "铜牌会员",
    "discount": 0.9
  }
}
```

# 会员挂失

#### 接口地址
- http://localhost:3000/member/updateStatus

#### HTTP请求方式：
- PUT

#### 请求参数：

参数名|是否必须|参数描述
---------|------------|------------
cardNumber |是 |会员卡号，.唯一，不可改
status|是|会员状态，0不可用，1可用。
####示例：
```
{
    "cardNumber": "a4271934",
    "status": 0
}   
```
####响应代码：
- 1 创建成功（Action completed successful）
- 5 卡号不存在

#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-17 21:15:31",
    "message": "Action completed successful"
  },
  "result": null
}
```

# 会员重置密码

#### 接口地址
- http://localhost:3000/member/updatePassword

#### HTTP请求方式：
- PUT

#### 请求参数：

参数名|是否必须|参数描述
---------|------------|------------
cardNumber |是 |会员卡号，.唯一，不可改
memberPassword|是|会员密码。
####示例：
```
{
    "cardNumber": "a4271934",
    "odlMemberPassword": "654321",
	"newMemberPassword": "123456"
}   
```
####响应代码：
- 1 创建成功（Action completed successful）
- 5 原始密码错误！

#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-17 21:15:31",
    "message": "Action completed successful"
  },
  "result": null
}
```
