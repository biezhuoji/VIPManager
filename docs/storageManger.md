# 会员充值

#### 接口地址：
- http://localhost:3000/monyIn

#### HTTP请求方式：
- PUT

#### 请求参数：
参数名|是否必须|参数描述
---------|------------|------------
cardNumber|是|必填，唯一。卡号
money|是|充值数量
#### 示例：
```
{
    "cardNumber": "123456",
    "money": "20"
}   
```
#### 响应代码：
- 1 创建成功（Action completed successful）
- 5 卡号不存在
#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-17 17:41:15",
    "message": "Action completed successful"
  },
  "result": {
    "id": 5,
    "createTime": 1474095114000,
    "updateTime": 1474105275000,
    "cardNumber": "123456",
    "memberRank": "铜牌会员",
    "memberName": "战士",
    "memberPhone": "1558952368",
    "status": 1,
    "money": 20
  }
}
```
- 字段说明:
 - id: 会员标识
 - createTime: 会员创建的时间戳
 - createTime: 更新会员信息的时间戳


# 余额转账

#### 接口地址：
- http://localhost:3000/monyMove

#### HTTP请求方式：
- PUT

#### 请求参数：
参数名|是否必须|参数描述
---------|------------|------------
cardNumberIn|是|必填，唯一。卡号
cardNumberOut|是|必填，唯一。卡号
money|是|充值数量
#### 示例：
```
{
    "cardNumberIn": "123456",
    "cardNumberOut": "456879",
    "money": "10"
}   
```
#### 响应代码：
- 1 创建成功（Action completed successful）
- 5 卡号不存在
#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-17 18:24:01",
    "message": "Action completed successful"
  },
  "result": [
    {
      "id": 5,
      "createTime": 1474095114000,
      "updateTime": 1474107842000,
      "cardNumber": "123456",
      "memberRank": "铜牌会员",
      "memberName": "战士",
      "memberPhone": "1558952368",
      "status": 1,
      "money": 30
    },
    {
      "id": 7,
      "createTime": 1474096991000,
      "updateTime": 1474107842000,
      "cardNumber": "456879",
      "memberRank": "铜牌会员",
      "memberName": "连长",
      "memberPhone": "1558952368",
      "status": 1,
      "money": -10
    }
  ]
}
```
- 字段说明:
 - id: 会员标识
 - createTime: 会员创建的时间戳
 - createTime: 更新会员信息的时间戳


# 余额提现

#### 接口地址：
- http://localhost:3000/monyOut

#### HTTP请求方式：
- PUT

#### 请求参数：
参数名|是否必须|参数描述
---------|------------|------------
cardNumber|是|必填，唯一。卡号
money|是|提现数量
#### 示例：
```
{
    "cardNumber": "123456",
    "money": "20"
}   
```
#### 响应代码：
- 1 创建成功（Action completed successful）
- 5 卡号不存在
#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-17 18:30:05",
    "message": "Action completed successful"
  },
  "result": {
    "id": 5,
    "createTime": 1474095114000,
    "updateTime": 1474108205000,
    "cardNumber": "123456",
    "memberRank": "铜牌会员",
    "memberName": "战士",
    "memberPhone": "1558952368",
    "status": 1,
    "money": 20
  }
}
```
- 字段说明:
 - id: 会员标识
 - createTime: 会员创建的时间戳
 - createTime: 更新会员信息的时间戳
