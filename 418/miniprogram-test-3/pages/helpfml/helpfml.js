var app = getApp();

Page({
  data: {
    selectedTab: 0,
    imgTrue:false,
    // emergencyTitle: '应急，事不容迟。',
    // studyTitle: '学习，未雨绸缪。',
    emergencyList: [

    ],
    studayList: [

    ],
  },
  onLoad:function(){
    console.log(app.globalData)
  },
  // onReady: function () {
  //   console.log(app.globalData)
  //   if (app.globalData.tempImagePath !== undefined){
  //     this.data.imgTrue = true;
  //     this.setData({
  //       imgUrl: app.globalData.tempImagePath
  //     })
  //   }
  // },
  onTap1: function() {
    wx.navigateTo({
      url: '../takephoto/takephoto'
    })
  },
  bindSelectedTab(e) {
    this.setData({
      selectedTab: Number(e.currentTarget.dataset.tab),
    });
  },
  tap(e) {
    console.log(e);
    if (e.currentTarget.dataset.title === '意识丧失' && e.currentTarget.dataset.type === '应急') {
      wx.navigateTo({
        url: '../isBreath/isBreath',
      });
    } else if (e.currentTarget.dataset.title === '烧烫伤' && e.currentTarget.dataset.type === '应急') {
      wx.navigateTo({
        url: '../burning/burning',
      });
    } else if (e.currentTarget.dataset.title === '脑中风' && e.currentTarget.dataset.type === '应急') {
      wx.navigateTo({
        url: '../cerebralApoplexy/cerebralApoplexy',
      });
    } else if (e.currentTarget.dataset.title === '心肌梗死' && e.currentTarget.dataset.type === '应急') {
      wx.navigateTo({
        url: '../AMI/AMI',
      });
    } else if (e.currentTarget.dataset.title === '意识丧失 · 无呼吸' && e.currentTarget.dataset.type === '学习') {
      wx.navigateTo({
        url: '../unconsciousnessStudy/unconsciousnessStudy',
      });
    } else if (e.currentTarget.dataset.title === '脑中风' && e.currentTarget.dataset.type === '学习') {
      wx.navigateTo({
        url: '../cerebralApoplexyStudy/cerebralApoplexyStudy',
      });
    } else if (e.currentTarget.dataset.title === '抽筋' && e.currentTarget.dataset.type === '学习') {
      wx.navigateTo({
        url: '../crampStudy/crampStudy',
      });
    } else if (e.currentTarget.dataset.title === '心肌梗死' && e.currentTarget.dataset.type === '学习') {
      wx.navigateTo({
        url: '../AMIStudy/AMIStudy',
      });
    }

  },
  change(e) {
    this.setData({
      selectedTab: Number(e.detail.current),
    });
  },
});