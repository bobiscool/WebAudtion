<!--Created by WuYiPing 旋钮 开关 -->
<template>
    <div class="rotary-switch-pathway">

      <div class="rotary-switch-pathway-active_mask">
      <div class="rotary-switch-pathway-active" ref="active">
      </div>
      </div>
        <div class="rotary-switch" ref="RoButton">

        </div>


    </div>

</template>

<script type="text/ecmascript-6">

    export default{
        data(){
            return{
                now:0.5,
              needTo:0
            }
        },
        components:{

        },
      mounted:function () {
        var _self = this;

        this.$refs.RoButton.addEventListener("mousedown",function () {
          document.addEventListener("mousemove",_self.mouseMove)
        });

        this.$refs.RoButton.style.transform="rotate("+(-160+250*_self.now)+"deg)";
        document.addEventListener("click",_self.mouseClick)
      },
      methods:{
        mouseUp:function () {
          var _self=this;
          document.removeEventListener("mouseup",_self.mouseUp);
          document.removeEventListener("mousemove",_self.mouseMove);
          console.log("删除事件")
        },
        mouseMove:function (e) {
          console.log("down");
          var _self=this;
//          console.log(e.clientX);
//          console.log(e.clientY);
         _self.needTo=_self.calculValue(e.clientX,e.clientY,1000);
          console.log("needTo"+_self.needTo);
          console.log("now"+_self.now);
          _self.go();
          document.addEventListener("mouseup",_self.mouseUp)

          e.preventDefault();
        },
        mouseClick:function () {
          var _self=this;
          document.removeEventListener("mousemove",_self.mouseMove);
        },
        calculValue:function (x,y,max) {
          var _self =this;
          var oriX=_self.$refs.RoButton.getBoundingClientRect().left+_self.$refs.RoButton.offsetWidth/2;
          var oriY=_self.$refs.RoButton.getBoundingClientRect().top+_self.$refs.RoButton.offsetHeight/2;
//          console.log(oriX+"+"+oriY);
          var _who = Math.abs(x-oriX)>Math.abs(y-oriY)?(x-oriX):(oriY-y);
          return Math.abs(_who/max)>1?Math.abs(_who/max)/(_who/max):(_who/max);
        },
        go:function () {
          var _self = this;
          if(_self.needTo>0){
            _self.now=_self.now+(1-_self.now)*_self.needTo;
          }else{
            _self.now=_self.now+_self.now*_self.needTo;
          }

          console.log((-160+250*_self.now));
          _self.$refs.RoButton.style.transform="rotate("+(-160+250*_self.now)+"deg)";
        }
      }
    }
</script>
<style lang="scss">

  .rotary-switch-pathway {
    position: relative;
    width:116px;
    height:116px;
    background: url("./button-img/xnxbdwantiao.png");
  }


  .rotary-switch-pathway-active_mask {
    position: absolute;
    top:-5px;
    left: -4px;
    width:126px;
    height:92px;
    border-radius:10px;
    overflow:hidden;
  .rotary-switch-pathway-active {
    position: absolute;
    top:0px;
    left:0px;
    width:126px;
    height:126px;
    background: url("./button-img/active.png");
  }


  }

   .rotary-switch {
     position: absolute;
     top:18px;
     left:18px;
     width: 80px;
     height: 80px;
     transform: rotate(-35deg);
     /*transform: rotate(-160deg);*/
     /*transform: rotate(90deg);*/
     background: url("./button-img/rotary-button80.png");
   }
</style>
