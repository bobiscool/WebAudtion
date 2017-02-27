<!--Created by WuYiPing -->
<template>
    <div class="contend">
      <div class="single">
        <div class="waveform" id="waveform"> </div>
        <div class="button-area">
          <el-button type="primary" icon="edit" ></el-button>
          <el-button type="primary" icon="edit" @click="play"></el-button>
        </div>


      </div>

    </div>
</template>

<script type="text/ecmascript-6">
import WAV from "wavesurfer.js/dist/wavesurfer"

console.log(WAV);
export default{
        data(){
            return{

            }
        },
        components:{

        },
      methods: {
        play:function() {
          var WAVE2 = WAV.create({
            container:"#waveform",
            waveColor:"violet",
            progressColor:"purple"
          });
          WAVE2.load('http://7o50ww.com1.z0.glb.clouddn.com/1.mp3');
          WAVE2.play();
        }
      }
    }
</script>
<style lang="scss">

</style>
