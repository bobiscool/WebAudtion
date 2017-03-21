/**
 * 这个是用来 加载 音频文件用的
 */
window.AudioContext = window.AudioContext || window.webkitAudioContext;

function AudioSampleLoader() {
  "use strict";
  this.loaded = 0;
}

AudioSampleLoader.prototype.send = function () {
  "use strict";
  var console = window.console,
    i;
  if (!this.hasOwnProperty('ctx')) {
    this.ctx = new window.AudioContext();
  } else if (!(this.ctx instanceof window.AudioContext)) {
    //TODO: Post an error, but do not overwrite the variable with a valid context.
    console.error('AudioSampleLoader: ctx not an instance of AudioContext');
    return;
  }

  if (!this.hasOwnProperty('onload')) {
    console.error('AudioSampleLoader: Callback onload does not exist');
    return;
  } else if (typeof this.onload !== 'function') {
    console.error('AudioSampleLoader: Callback onload not a function');
    return;
  }

  if (!this.hasOwnProperty('onerror') || typeof this.onerror !== 'function') {
    this.onerror = function () {};
  }

  if (Array.isArray(this.src)) {
    for (i = 0; i < this.src.length; i += 1) {
      if (typeof this.src[i] !== 'string') {
        console.error('AudioSampleLoader: src[' + i + '] is not a string');
        this.onerror();
        return;
      }
    }

    //如果 src 是一串数组 那么就是 一组加载的
    this.response = new Array(this.src.length);
    for (i = 0; i < this.src.length; i += 1) {
      this.loadOneOfBuffers(this.src[i], i);
    }

  } else if (typeof this.src === 'string') {

    //如果src只是一串字符串
    this.loadOneBuffer(this.src);

  } else {
    console.error('AudioSampleLoader: src not string or list of strings');
    this.onerror();
    return;
  }
};

AudioSampleLoader.prototype.loadOneBuffer = function (url) {
  "use strict";
  var console = window.console,
    loader = this,
    XHR = new XMLHttpRequest();
  XHR.open('GET', url, true);
  XHR.responseType = 'arraybuffer';

  XHR.onload = function () {
    loader.ctx.decodeAudioData(
      XHR.response,
      function (buffer) {
        loader.response = buffer;
        loader.onload();
      },
      function () {
        console.error('AudioSampleLoader: ctx.decodeAudioData() called onerror');
        loader.onerror();
      }
    );
  };

  XHR.onerror = function () {
    console.error('AudioSampleLoader: XMLHttpRequest called onerror');
    loader.onerror();
  };
  XHR.send();
};

AudioSampleLoader.prototype.loadOneOfBuffers = function (url, index) {
  "use strict";
  var console = window.console,
    loader = this,
    XHR = new XMLHttpRequest();
  XHR.open('GET', url, true);
  XHR.responseType = 'arraybuffer';

  XHR.onload = function () {
    loader.ctx.decodeAudioData(
      XHR.response,
      function (buffer) {
        loader.response[index] = buffer;
        loader.loaded += 1;
        if (loader.loaded === loader.src.length) {
          loader.loaded = 0;
          loader.onload();
        }
      },
      function () {
        console.error('AudioSampleLoader: ctx.decodeAudioData() called onerror');
        loader.onerror();
      }
    );
  };

  XHR.onerror = function () {
    console.error('AudioSampleLoader: XMLHttpRequest called onerror');
    loader.onerror();
  };
  XHR.send();
};

exports.default=AudioSampleLoader;
