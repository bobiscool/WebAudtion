<!--Created by WuYiPing 旋钮 开关 -->
<template>
  <div class="rotary-switch-pathway">

    <div class="rotary-switch-light">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>

    </div>
      <div class="rotary-switch-pathway-active" ref="active">
      </div>

    <div class="rotary-switch" ref="RoButton">

    </div>


  </div>

</template>

<script type="text/ecmascript-6">
import drawArc from "js/drawArc";

  export default{
    data(){
      return{
        now:0,
        old:0,
        needTo:0,
        oriX:0,
        ogiY:0
      }
    },
    watch:{
      now:function (val) {
        var _self=this;
        if(val>0.28231415){
//            console.log("大于0.28");
          _self.$refs.active.className="rotary-switch-pathway-active active";
        }else if(val>-.55&&val<=0.28231415){
          _self.$refs.active.className="rotary-switch-pathway-active activeLess";
        }else {
          _self.$refs.active.className="rotary-switch-pathway-active activeLesser";
        }
      }

    },components:{

    },
    mounted:function () {
      var _self = this;
      _self.resetOri();
      this.$refs.RoButton.addEventListener("mousedown",function () {
        document.addEventListener("mousemove",_self.mouseMove)
      });

      _self.$refs.active.style.transform="rotate(-42deg)";
      _self.$refs.active.className="rotary-switch-pathway-active activeLess";
      _self.$refs.RoButton.style.transform="rotate("+(-36+125*_self.now)+"deg)";
      document.addEventListener("click",_self.mouseClick)
      console.log(drawArc(270,180,100,90,100));

    },
    methods:{
      resetOri:function () {
        var _self = this;
        _self.oriX=_self.$refs.RoButton.getBoundingClientRect().left+_self.$refs.RoButton.offsetWidth/2;
        _self.oriY=_self.$refs.RoButton.getBoundingClientRect().top+_self.$refs.RoButton.offsetWidth/2;
      },
      mouseUp:function () {
        var _self=this;
        document.removeEventListener("mouseup",_self.mouseUp);
        document.removeEventListener("mousemove",_self.mouseMove);
        _self.old=_self.now;
      },
      mouseMove:function (e) {
//          console.log("down");
        var _self=this;
        _self.needTo=_self.calculValue(e.clientX,e.clientY,1000);
//          console.log("needTo"+_self.needTo);
        _self.go();
        document.addEventListener("mouseup",_self.mouseUp);

        e.preventDefault();
      },
      mouseClick:function () {
        var _self=this;
        document.removeEventListener("mousemove",_self.mouseMove);
      },
      calculValue:function (x,y,max) {
        var _self =this;
        var oriX=_self.oriX;
        var oriY=_self.oriY;
//          console.log(oriX+"+"+oriY);
//          console.log("x-oriX",(x-oriX));
//          console.log("Y-oriy",(y-oriY));
        var _who = (x-oriX);
        return Math.abs(_who/max)>1?Math.abs(_who/max)/(_who/max):(_who/max);
      },
      go:function () {
        var _self = this;
        if(_self.needTo>0) {
          _self.now = _self.old + _self.needTo* (1-_self.old)
        }else {
//            console.log("小于零");
//            _self.now = _self.old + _self.needTo* (1-_self.old)
          _self.now=(_self.old+1)*(1+_self.needTo)-1;
        }
        _self.$refs.RoButton.style.transform="rotate("+(-36+125*_self.now)+"deg)";

        _self.$refs.active.style.transform="rotate("+(-42+125*_self.now)+"deg)";

        this.tellFa();
      },
      tellFa:function () {
        var _self=this;
        this.$emit("Roling",_self.now);
      }
    }
  }
</script>
<style lang="scss" scoped>

  .rotary-switch-pathway {
    position: relative;
    width:121px;
    height:121px;
    background: url("./button-img/roBback.png");
  }


  .rotary-switch-light {
    span {
      display: inline-block;
      width: 3px;
      height: 8px;
      background: #0074D9;
    }


    @for $i from  1 to 10 {
     span:nth-child(#{$i}) {
       transform-origin:3px 50px;
       transform: rotate(10deg*$i);
     }


  }




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
    /*transform: rotate(-45deg);*/
    /*background: url("./button-img/active.png");*/
    -webkit-transition: transfrom 100ms;
    -moz-transition: transfrom 100ms;
    -ms-transition: transfrom 100ms;
    -o-transition: transfrom 100ms;
    transition: transfrom 100ms;
  }


  .active {
    background: url("./button-img/active.png");
  }

  .activeLess {
    background: url("./button-img/activeLess.png");

  }

  .activeLesser {
    background: url("./button-img/activeLesser.png");
  }
  }

  .rotary-switch {
    position: absolute;
    top:21px;
    left:20px;
    width: 80px;
    height: 80px;
    transform: rotate(-35deg);
    /*transform: rotate(-160deg);*/
    /*transform: rotate(90deg);*/
    background: url("./button-img/rotary-buttonB.png");
    -webkit-transition: transfrom 100ms;
    -moz-transition: transfrom 100ms;
    -ms-transition: transfrom 100ms;
    -o-transition: transfrom 100ms;
    transition: transfrom 100ms;
  }




</style>
