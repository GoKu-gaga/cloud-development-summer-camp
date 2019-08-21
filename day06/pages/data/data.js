// pages/data/data.js
let lesson = "云开发技术训练营";
let enname = "CloudBase Camp";
let x = 3,
  y = 4,
  z = 5.001,
  a = -3,
  b = -4,
  c = -5;
let now = new Date();
let initData = '只有⼀⾏原始数据'
let extraLine = [];

function greet() {
  console.log("你好，欢迎来到云开发训练营");
};
greet();

function square(number) {
  return number * number;
};
square(5);


Page({

  /**
   * 页面的初始数据
   */
  data: {
    charat: lesson.charAt(4),
    concat: enname.concat(lesson),
    uppercase: enname.toUpperCase(),
    abs: Math.abs(b),
    pow: Math.pow(x, y),
    sign: Math.sign(a),
    now: now,
    fullyear: now.getFullYear(),
    date: now.getDate(),
    day: now.getDay(),
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
    time: now.getTime(),
    bgcolor: "#000000",
    muted: true,
    text: initData,
    tabs: ["北京", "上海", "⼴州", "深圳"],
  },

  tabClick: function(e) {
    console.log(e)
    this.setData({
      activeIndex: e.currentTarget.id
    })
  },

  addLine: function(e) {
    extraLine.push('新增的内容' + Math.random())
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    })
  },

  removeLine: function(e) {
    if (extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }
  },

  changeMuted: function(e) {
    this.setData({
      muted: !this.data.muted
    })
  },


  redTap: function() {
    this.setData({
      bgcolor: "#cd584a"
    })
  },

  yellowTap: function() {
    this.setData({
      bgcolor: "#f8ce5f"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})