const wx = require('weixin-js-sdk')
import axios from 'axios'
export default {
    data() {
        return {}
    },
    methods: {
        getJssdkInfo(callback) {
            const params = {
                url: window.location.href.split('#')[0]
            }
            let url = 'https://vote.hlfengxing.com/api/wx/sign'
            axios({
                    method: 'get',
                    url,
                    params: params
                })
                .then(res => {
                    let json = res.data
                    if (json.code === 20000) {
                        wx.config({
                            debug: false,
                            appId: json.data.appId,
                            timestamp: json.data.timestamp,
                            nonceStr: json.data.nonceStr,
                            signature: json.data.signature,
                            jsApiList: [
                                'onMenuShareTimeline',
                                'onMenuShareAppMessage',
                                'onMenuShareQQ',
                                'onMenuShareQZone'
                            ]
                        })
                        wx.ready(function() {
                            let params = {
                                    title: '长房·云西府精装产品发布会',
                                    pic: 'https://wx3.sinaimg.cn/mw690/006T30vygy1g5tn99x5bbj30ku0kutd5.jpg',
                                    desc: '嘉宾请扫码签到，领取签到礼品',
                                    url: window.location.href.split('#')[0]
                                }
                                // 分享到朋友圈bui
                            wx.onMenuShareTimeline({
                                    title: params.title, // 分享标题
                                    desc: params.desc, // 分享描述
                                    link: params.url, // 分享链接
                                    imgUrl: params.pic, // 分享图标
                                    success: function() {
                                        if (typeof callback === 'function') callback()
                                    }
                                })
                                // 分享给朋友
                            wx.onMenuShareAppMessage({
                                title: params.title, // 分享标题
                                desc: params.desc, // 分享描述
                                link: params.url, // 分享链接
                                imgUrl: params.pic, // 分享图标
                                success: function() {
                                    if (typeof callback === 'function') callback()
                                }
                            })
                            wx.onMenuShareQQ({
                                title: params.title, // 分享标题
                                desc: params.desc, // 分享描述
                                link: params.url, // 分享链接
                                imgUrl: params.pic, // 分享图标
                                success: function() {
                                    if (typeof callback === 'function') callback()
                                },
                                cancel: function() {}
                            })

                            wx.onMenuShareQZone({
                                title: params.title, // 分享标题
                                desc: params.desc, // 分享描述
                                link: params.url, // 分享链接
                                imgUrl: params.pic, // 分享图标
                                success: function() {
                                    if (typeof callback === 'function') callback()
                                },
                                cancel: function() {}
                            })
                        })
                    }
                })
                .catch(err => {})
        }
    },
    mounted() {},
    destroyed() {}
}