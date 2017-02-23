/**
 * Created by mac WuYiPing on 17/2/15.
 */
//这里才是真正 处理音频的地方 我在想怎么和前面的融合在一起
var $Auditool= require('./AudioToolKit');
var $DataTool= require('./utils/DataToolKit').default;
var Buffloader= require('./BufferLoader').default;

var OPTIONS={
  PLAYING_STATE:0,
  PAUSED_STATE:1,
  FINISHED_STATE:2
  }
var Wave = function(){
  this.url = OPTIONS.url
}


Wave.prototype = {

  haveAudioapi:function () {
    return !!(window.AudioContext||window.webkitAudioContext)
  },
  getAudioContext:function () {
    if(!this.ac){
      return new (window.AudioContext||window.webkitAudioContext);
    }

    return this.ac
  },
  load:function (_url) {

  }


}

module.exports = Wave;

