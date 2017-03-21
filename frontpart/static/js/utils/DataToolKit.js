
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


$DTK.prototype.extend = function (value) {
  // 就别考虑出错。。。  我自己的用的 。。口那要那么多易用性 !!!!!!
  if(value instanceof Object){
    for(var i in value){
      this.value[i] = value[i]
    }

    return this.value;
  }else{
    throw "我靠。。。不是对象 你extend毛线啊!!!!"
  }


}


function $DataTK(value) {
  return (new $DTK(value))
}

exports.default=$DataTK;
