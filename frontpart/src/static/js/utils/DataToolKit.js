
/**
 * Created by mac WuYiPing on 17/2/14.
 */
// 写一个通用数据 处理工具箱 O(∩_∩)O
function $DTK(value) {
  this.value = value;
  this.type = (typeof this.value);
}


//查找函数
$DTK.prototype.OneOf = function (who) {
   if(!this.value||this.type=="string"){
     throw "plase let my gennerate the data!O__O。。。"
   }

  return this.value[who];

}





exports.default=$DTK;
