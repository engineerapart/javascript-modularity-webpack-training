define(function () {
    return {
      OnKeyPressCounter: function(event) {
        var chCode = ('charCode' in event) ? event.charCode : event.keyCode;

        if (chCode == 43 /* + */) {
          if (this.selectedIndex < this.options.length - 1) {
            this.selectedIndex++;
          }
        }
        if (chCode == 45 /* - */) {
          if (this.selectedIndex > 0) {
            this.selectedIndex--;
          }
        }
      },

      changeText: function(event) {
        var echoEl = document.getElementById('echo-box');
        echoEl.innerText = this.value + event.key;
      },
    };
});
