define(function () {
    return {
      OnKeyPressCounter: function(event, counter) {
        var chCode = ('charCode' in event) ? event.charCode : event.keyCode;

        if (chCode == 43 /* + */) {
          if (counter.selectedIndex < counter.options.length - 1) {
            counter.selectedIndex++;
          }
        }
        if (chCode == 45 /* - */) {
          if (counter.selectedIndex > 0) {
            counter.selectedIndex--;
          }
        }
      },

      changeText: function(event, obj) {
        var echoEl = document.getElementById('echo-box');
        echoEl.innerText = obj.value + event.key;
      },
    };
});
