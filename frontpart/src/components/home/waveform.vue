<!--Created by WuYiPing 波形显示组件-->
<template>
  <div :class="WaveFormClass">
    <!--波形的显示该用什么?来显示 canvas 还是说 svg?  canvas 很恶心  但是能够操作很多 在这里 就使用zrender吧-->
    <canvas :id="WaveCanvasId">
      <!--此处为波形区 具体如何展示 波形  还要 看看zrender -->

    </canvas>

  </div>
</template>

<script type="text/ecmascript-6">
  import Addid from "../../static/js/uid.js"
  import BufferLoader from "../../static/js/BufferLoader.js"
//  import  zrender
  import paper from 'paper'


//  var a = new AudioLoader('http://7o50ww.com1.z0.glb.clouddn.com/1.mp3');
//console.log(a);

  export default{
    data(){
      return {}
    },
    components: {},
    props: {
      WaveCanvasId: {
        type: String,
        default: Addid()
      },
      WaveFormClass: {
        type:String,
        default:"WaveFormDefault"
      }
    },
    created:function(){

    },
    mounted:function () {
      var _self = this;
      paper.setup(_self.WaveCanvasId);

//      var zr = zrender.init(document.getElementById(_self.WaveCanvasId));
      var path = new paper.Path();
      path.strokeColor = 'black';
      var start = new paper.Point(100,100);
      path.moveTo(start);
      path.lineTo(start.add([200,-50]));
      paper.view.draw();

      // 音频区




        var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
        var analyser = audioCtx.createAnalyser();
            analyser.fftSize = 2048;


        var B = new BufferLoader(audioCtx,['http://7o50ww.com1.z0.glb.clouddn.com/1.mp3'],finishLoad);
      B.load();
      console.log(B);








      function finishLoad(a) {
        var source1 = audioCtx.createBufferSource();
        console.log(a[0]);
        source1.connect(analyser);
        source1.buffer =a[0];
        analyser.minDecibels = -140;
        analyser.maxDecibels = 0;
        analyser.smoothingTimeConstant = 0.8;

//        source1.start(0.2)
        var freq = new Uint8Array(analyser.frequencyBinCount);
        var times = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(freq);
        analyser.getByteTimeDomainData(times);
        analyser.connect(audioCtx.destination);
        source1.start(0);
        aa();
      }


      function aa() {
        setInterval(draw,50)
      }

      function draw() {
        var freq = new Uint8Array(analyser.frequencyBinCount);
        var times = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(freq);
        analyser.getByteTimeDomainData(times);
        console.log(freq);
        console.log(times);
        analyser.connect(audioCtx.destination);
      }

//














// Get a canvas defined with ID "oscilloscope"
        var canvas = document.getElementById(_self.WaveCanvasId);
        var canvasCtx = canvas.getContext("2d");





//// draw an oscilloscope of the current audio source
//
//        function draw() {
//
//          var drawVisual = requestAnimationFrame(draw);
//
//          analyser.getByteTimeDomainData(dataArray);
//          canvasCtx.fillStyle = 'rgb(200, 200, 200)';
//          canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
//
//          canvasCtx.lineWidth = 2;
//          canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
//
//          canvasCtx.beginPath();
//
//          var sliceWidth = canvas.width * 1.0 / bufferLength;
//          var x = 0;
//
//          for (var i = 0; i < bufferLength; i++) {
//
//            var v = dataArray[i] / 128.0;
//            var y = v * canvas.height / 2;
//
//            if (i === 0) {
//              canvasCtx.moveTo(x, y);
//            } else {
//              canvasCtx.lineTo(x, y);
//            }
//
//            x += sliceWidth;
//          }
//
//          canvasCtx.lineTo(canvas.width, canvas.height / 2);
//          canvasCtx.stroke();
//        };
//
//        draw();


    }
  }
</script>
<style lang="scss">
  body {
    background-color: #fff;
  }

  .WaveFormDefault {

    width:500px;
    height:100px;
    background: #7B8D9B;
  }

</style>
