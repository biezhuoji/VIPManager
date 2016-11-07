# 创建订单

#### 接口地址
- http://localhost:3000/consumeRecord

#### HTTP请求方式：
- POST

#### 请求参数：

参数名|是否必须|参数描述
---------|------------|------------
orderNumber|是|订单号，唯一。
cardNumber |是 |会员卡号
goodsNumber|是|商品编号
goodsCount|是|商品数量
####示例：
```
{
    "cardNumber": "a4271934",
    "goodsNumber":"98651",
    "orderNumber": "741852",
    "goodsCount": "2"
}   

```
####响应代码：
- 1 创建成功（Action completed successful）
- 7 请求参数非法！
- 9 订单已存在!
- 11 会员或商品不存在!

#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-18 20:23:52",
    "message": "Action completed successful"
  },
  "result": {
    "id": 1,
    "createTime": 1474201432000,
    "updateTime": 1474201432000,
    "cardNumber": "a4271934",
    "goodsName": "牛奶",
    "goodsPrice": 25.3,
    "goodsNumber": "98651",
    "goodsCount": 2,
    "orderNumber": "741852",
    "status": 0,
    "consumeMoney": 35.42,
    "memberName": "李四",
    "memberRank": "金牌会员"
  }
}
```
- 字段说明:
 - id: 订单标识，唯一
 - createTime: 订单创建的时间戳
 - createTime: 更新订单信息的时间戳
 - cardNumber: 会员卡号
 - memberName: 会员姓名
 - memberRank: 会员等级
 - goodsNumber: 商品编号
 - goodsName: 商品名称
 - goodsPrice: 商品单价
 - consumeMoney: 消费金额
 - status: 状态，0为支付，1支付。

# 删除订单

#### 接口地址：
- http://localhost:3000/consumeRecord/id

#### HTTP请求方式：
- DELETE

#### 请求参数：
参数名|是否必须|参数描述
---------|------------|------------
id|是 |订单号标记，唯一.
####示例：
```
http://localhost:3000/consumeRecord/2
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

# 修改订单

#### 接口地址
- http://localhost:3000/consumeRecord/id

#### HTTP请求方式：
- PUT

#### 请求参数：

参数名|是否必须|参数描述
---------|------------|------------
orderNumber|是|订单号，唯一。
cardNumber |是 |会员卡号
goodsNumber|是|商品编号
goodsCount|是|商品数量
####示例：
```
{
    "cardNumber": "a4271934",
    "goodsNumber":"98651",
    "orderNumber": "741852",
    "goodsCount": "20"
}   

```
####响应代码：
- 1 创建成功（Action completed successful）
- 7 请求参数非法！
- 9 订单已存在!
- 11 会员或商品不存在!

#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-18 20:23:52",
    "message": "Action completed successful"
  },
  "result": {
    "id": 1,
    "createTime": 1474201432000,
    "updateTime": 1474201432000,
    "cardNumber": "a4271934",
    "goodsName": "牛奶",
    "goodsPrice": 25.3,
    "goodsNumber": "98651",
    "goodsCount": 20,
    "orderNumber": "741852",
    "status": 0,
    "consumeMoney": 354.2,
    "memberName": "李四",
    "memberRank": "金牌会员"
  }
}
```
- 字段说明:
 - id: 订单标识，唯一
 - createTime: 订单创建的时间戳
 - createTime: 更新订单信息的时间戳
 - cardNumber: 会员卡号
 - memberName: 会员姓名
 - memberRank: 会员等级
 - goodsNumber: 商品编号
 - goodsName: 商品名称
 - goodsPrice: 商品单价
 - consumeMoney: 消费金额
 - status: 状态，0为支付，1支付。

# 订单列表
#### 接口地址：
- http://localhost:3000/consumeRecord

#### HTTP请求方式：
- GET

####请求参数：

参数名|是否必须|参数描述
---------|------------|------------
cardNumber |否 |对会员卡号进行查询

#### 示例：
```
 全查询：http://localhost:3000/consumeRecord
 卡号查询：http://localhost:3000/member?consumeRecord=a4271934

```
#### 响应代码：
- 1 创建成功（Action completed successful）

#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-19 21:25:23",
    "message": "Action completed successful"
  },
  "result": [
    {
      "id": 2,
      "createTime": 1474285746000,
      "updateTime": 1474286181000,
      "cardNumber": "a4271934",
      "goodsName": "牛奶",
      "goodsPrice": 25.3,
      "goodsNumber": "98651",
      "goodsCount": 2,
      "orderNumber": "123456",
      "status": 0,
      "consumeMoney": 35.42,
      "memberName": "李四",
      "memberRank": "金牌会员"
    }
  ]
}
```

# 查询消费记录
#### 接口地址：
- http://localhost:3000/consumedRecord

#### HTTP请求方式：
- GET

####请求参数：

参数名|是否必须|参数描述
---------|------------|------------
cardNumber |否 |对会员卡号进行查询

#### 示例：
```
 全查询：http://localhost:3000/consumedRecord
 卡号查询：http://localhost:3000/consumedRecord?cardNumber=a4271934

```
#### 响应代码：
- 1 创建成功（Action completed successful）

#### 返回参数：
- JSON:
```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-19 21:25:23",
    "message": "Action completed successful"
  },
  "result": [
    {
      "id": 2,
      "createTime": 1474285746000,
      "updateTime": 1474286181000,
      "cardNumber": "a4271934",
      "goodsName": "牛奶",
      "goodsPrice": 25.3,
      "goodsNumber": "98651",
      "goodsCount": 2,
      "orderNumber": "123456",
      "status": 1,
      "consumeMoney": 35.42,
      "memberName": "李四",
      "memberRank": "金牌会员"
    }
  ]
}
```

# 订单结算

#### 接口地址：
- http://localhost:3000/orderSettlement

#### HTTP请求方式：
- POST

#### 请求参数：
参数名|是否必须|参数描述
---------|------------|------------
orderNumber |是 |订单编号，唯一，不可改
#### 示例：
```
{
  "orderNumber": "123456"
}
```
#### 响应代码：
- 1 创建成功（Action completed successful）
#### 返回参数：
- JSON:

```
{
  "status": {
    "code": 1,
    "created_at": "2016-09-19 19:56:21",
    "message": "Action completed successful"
  },
  "result": null
}
```

