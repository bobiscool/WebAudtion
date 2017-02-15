/**
 * Created by mac WuYiPing on 17/2/14.
 */

var $DataTK=require("./utils/DataToolKit").default;
var Wave = require("./WAVE.js");


function $Auditool(options) {
   this.options = $DataTK(OPTIONS).extend(options);
}

OPTIONS = {
  containner:"",
  url:"",
  backwave_color:"red",
  progresswave_color:"gray",
  BufferSize:256,

}

$DataTK($Auditool.prototype).extend(Wave);

$Auditool.prototype.init= function (options) {
  /**
   *首先是加载数据文件,我只做webaudio加载,不做mediaElement加载
   * 那么这里的波形文件 到底是不是 buffer
   */
   //TODO 创建画板
  // TODO 加载波形


}


module.exports = $Auditool;
