(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91bc38de"],{"1ade":function(e,n,o){"use strict";o.r(n);var t=o("7a23"),a={class:"demo"},i={style:{display:"none"}},r={ref:"video"};function c(e,n,o,c,s,d){var l=Object(t["T"])("video-player");return Object(t["K"])(),Object(t["m"])("div",null,[Object(t["n"])("div",a,[Object(t["r"])(l,{class:"video-player-box",ref:"videoPlayer",playsinline:!0,options:s.playerOptions},null,8,["options"])]),Object(t["n"])("div",i,[Object(t["n"])("video",r,null,512)])])}o("fda2");var s=o("9595"),d={name:"VideoTest5",components:{videoPlayer:s["a"]},unmounted:function(){},mounted:function(){var e=this;navigator.mediaDevices.getUserMedia({video:!0}).then((function(n){var o=e.$refs.video;o.srcObject=n,o.play()})).catch((function(e){console.error("Could not access camera: ",e)}))},data:function(){return{playerOptions:{playbackRates:[.5,1,1.5,2],autoplay:!0,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"video/mp4",src:o("9981")}],poster:"",notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!0,fullscreenToggle:!0}}}},created:function(){},methods:{}},l=o("6b0d"),p=o.n(l);const u=p()(d,[["render",c]]);n["default"]=u},9981:function(e,n,o){e.exports=o.p+"media/nightsky.5d7208eb.mp4"}}]);
//# sourceMappingURL=chunk-91bc38de.ca7fdcd3.js.map