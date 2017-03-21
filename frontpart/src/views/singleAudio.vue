<!--Created by WuYiPing -->
<template>
  <div class="contend">
    <div class="single">
      <div class="waveform" id="waveform"></div>
      <div class="button-area">
        <el-button type="primary" icon="edit"></el-button>
        <el-button type="primary" icon="edit" @click="play"></el-button>
        <Ro></Ro>
        <Rob></Rob>


        <svg id="svg">

        </svg>

      </div>


    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import WAV from "@/js/WAVE.js"
  import Ro from "components/buttons/rotary-switch.vue"
  import Rob from "components/buttons/rotary-switchB.vue"
  var Snap = require( "imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js" );
  import drawArc from "js/drawArc";

  console.log(Snap);
  export default{
    data(){
      return {
        audio: {}

      }
    },
    components: {
      Ro,
      Rob

    },
    methods: {
      play: function () {
        this.audio.play(0);
      },
    },
    mounted: function () {
      this.audio = WAV.create({
        container: "#waveform",
        progressColor: "#54d1e7",
        waveColor: "#a2dad9",
        height: "250"
      });
      this.audio.load('http://7o50ww.com1.z0.glb.clouddn.com/1.mp3');
      console.log(this.audio);


      var circle = new Snap("#svg");
      circle.path(drawArc(135,270,50,40,100));

    }
  }
</script>
<style lang="scss">

</style>
