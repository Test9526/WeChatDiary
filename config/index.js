const CONFIG = {
  // ================================基础配置 - 无需修改================================
  // 和风天气API
  HEFENG_API_KEY: "95dd81da8616475480d838ed9529983a",

  // ================================高级配置 - 需要修改================================

  // 微信公众号的appID
  APP_ID: "wx7973e5764d298799",

  // 微信公众号的appsecret
  APP_SECRET: "9c778965fc7397d1afe928ed7cd52ccf",

  // 微信公众号的模板ID
  TEMPLATE_ID: "RiEICV9lfJmsm6AtdiuIMZKZNqWWTSoWdFlrNRSmGI0",

  // 天行API的key
  TXApiKey: "ac4ff169cd8e57622f2bc34e8084963f",

  // 用户列表 可配置多个用户
  user: [
    {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "宝宝",
      // 用户列表的`微信号`
      userId: "o5N8f5lkwe8mab6x_OpVtGD6u5Tk",
      // 星座
      star: "金牛座",
      // 生日 - 格式：08-22
      birthday: "05-17",
      // 城市 - 格式：支持省市县区
      city: "三河市",
    },
  ],


  // ================================功能配置 - 可选修改================================

  // 默认全部开启，关闭可以加快响应速度
  // true 开启，false 关闭
  plugins: {
    // 天气预报
    weather: true,
    // 天气接口 默认接口1，可选接口1、2，接口2暂时无法使用
    weatherType: 1,
    // 星座运势
    star: true,
    // 土味情话
    saylove: false,
    // 健康小提示
    healthtip: true,
    // 毒鸡汤
    duJiTang: false,
    // 早安心语
    zaoAn: true,
    // 晚安心语
    wanAn: false,
    // 彩虹屁
    caiHongPi: false,
  },
};

module.exports = {
  CONFIG,
};
