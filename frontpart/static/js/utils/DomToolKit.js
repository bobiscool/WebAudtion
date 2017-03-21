/**
 * Created by mac WuYiPing on 17/2/14.
 * 自制的DOM库
 *
 * @ 迭代器的理解  此处迭代器  OnOrMore
 * 对数据的操作
 * 单个数据 直接 执行函数 返回一个对象
 * 对于多个数据,迭代器,将每一个数据取出来,然后将其传入函数执行
 * 此处并没有讨论多层嵌套的数据结构,仅讨论数组
 *
 *
 */




function getElement(str){
  var Ele = false;
  if (str.charAt(0) == ".") {
    var temstr = str.replace(/^\./, '');
    if (document.getElementsByClassName) {//兼容ie8
      Ele = Array.prototype.slice.call(document.getElementsByClassName(temstr));
    } else {
      Ele = [];
      var Arr1 = Array.prototype.slice.call(document.getElementsByTagName("*"));
      for (var i = 0, j = Arr1.length; i < j; i++) {
        if (this.hasClass(Arr1[i], temstr).a) {
          Ele.push(Arr1[i]);
          // console.log(Arr1[i]);
        }
      }
    }


  } else if (str.charAt(0) == "#") {
    Ele = document.getElementById(str.replace(/^\#/, ''));
  } else {
    Ele = Array.prototype.slice.call(document.getElementsByTagName(str));
  }

  if(Ele){
    // console.log(Ele);
    return Ele;
  }else {
    throw "can't find element (╯﹏╰)"
  }
}
function OneOrMore(_OM,_fun) {// 迭代器? 算是吧  但是 如何 添加很多事件
  if(_OM instanceof Array){
    var _temArray=[];
    _OM.forEach(function(value){
      _temArray.push(_fun(value));
    });
    return _temArray;
  }else {
    _fun(_OM);
  }
}

var $DoTk=function(str) {
   this.el=(typeof str=="string"?getElement(str):str);
}

$DoTk.prototype.hasClass =function(clas){
  //hasClass现在支持  一个元素 就返回一个obj 如果是一个数组就返回一个数组

  // if(this.el instanceof Array){
  //   var _temArray=[];

    return OneOrMore(this.el,function (value) {
      var obj = value,
          temB = {a: false, b: false};
      if (obj.className) {
        var Arr = obj.className.split(' ');
      } else {
        return temB;
      }

      // console.log(Arr);
      for (var i in Arr) {
        if (Arr[i] == clas) {
          temB.a = true;
          temB.b = i;
        }
      }
      return temB;
    });
}

$DoTk.prototype.toogleClass = function (clas) {
  var _self = this;
  //TODO 在这里添加 toogle calss  有两种情况  一个是单clas 还有一个是双clas
  // TODO 需要考虑的是 双cals时 是否可以调换顺序呢?
  return OneOrMore(this.el,function (value) {
    var temB = {};
    if (typeof clas == "string") {
      temB = _self.hasClass(value, clas);
      var Arr = value.className.split(' ');
      if (temB.a) {
        Arr.splice(temB.b, 1);
      } else {
        Arr.push(clas);
      }

      value.className = Arr.join(' ');
    }else {

      temB = _self.hasClass(value, clas[0]);
      var Arr = value.className.split(' ');
      if (temB.a) {
        Arr.splice(temB.b, 1);
        Arr.push(clas[1]);
      } else {
        temB = _self.hasClass(value, clas[1]);
        Arr.splice(temB.b, 1);
        Arr.push(clas[0]);
      }

      value.className = Arr.join(' ');

    }
  })


  return this.el;


}


function $DomTK(str) {
  return (new $DoTk(str));
}

// TODO 没必要 像jQ一样大而全,自己写一个将就用,我觉得做迭代器就有点过了。。。


//   toggleClass: function toggleClass(obj, clas) {
//     var temB={};
//     if(typeof clas=="string"){
//       temB = this.hasClass(obj, clas);
//       var Arr = obj.className.split(' ');
//       if (temB.a) {
//         Arr.splice(temB.b, 1);
//       } else {
//         Arr.push(clas);
//       }
//
//       obj.className = Arr.join(' ');
//     }else {
//       temB = this.hasClass(obj, clas[0]);
//       var Arr = obj.className.split(' ');
//       if (temB.a) {
//         Arr.splice(temB.b, 1);
//         Arr.push(clas[1]);
//       } else {
//         temB = this.hasClass(obj, clas[1]);
//         Arr.splice(temB.b, 1);
//         Arr.push(clas[0]);
//       }
//
//       obj.className = Arr.join(' ');
//     }
//
//
//   },
//   addClass:function (obj,clas) {
//     var temB = this.hasClass(obj, clas);
//     var Arr = obj.className.split(' ');
//     if (temB.a) {
//       return false;
//     } else {
//       Arr.push(clas);
//       obj.className = Arr.join(' ');
//     }
//   },
//   removeClass:function (obj,clas) {//删除class
//     var temB = this.hasClass(obj,clas);
//     var Arr = obj.className.split(' ');
//     if (temB.a) {
//       Arr.splice(temB.b, 1);
//     }
//     obj.className = Arr.join(' ');
//   },
//   parents:function(obj,selector){
//     /*  这里 是找寻 具有 selector 的父级
//      * selector
//      * 分为  id
//      *      class
//      *      标签
//      * */
//     var _obj = obj;
//     console.log(DomControl.hasClass(_obj,selector.slice(1)));
//
//     console.log(selector.charAt(0) === ".");
//     if( selector.charAt(0) === "#" ){// id 找父集
//       while(obj.id !== selector.slice(1)){  //如果obj的id 不等于selector的ID
//         _obj = _obj.parentNode;
//       }
//     }else if( selector.charAt(0) === "." ){//如果obj的class不等于selector的Class
//       while((_obj && _obj.nodeType !== 9) && !DomControl.hasClass(_obj,selector.slice(1)).a){ // 如果obj 存在 并且 obj 不是 document
//         _obj = _obj.parentNode;
//         console.log(obj);
//       }
//     }else{
//       while(_obj && _obj.nodeType !== 9 && _obj.nodeName.toLowerCase() !== selector){
//         _obj = _obj.parentNode;
//       }
//     }
//
//
//     // 找到obj  返回obj  没有找到 就返回 null
//     return _obj && _obj.nodeType === 9  ? null : _obj;
//   }
// }
//
//
// module.exports = $DomTK;
