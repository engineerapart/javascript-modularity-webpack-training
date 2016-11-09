define(function (require) {
    // Load any app-specific modules
    // with a relative require call, like:
    var inputs = require('./inputs');

    var counterEl = document.getElementById('counter');
    counterEl.onkeypress = inputs.OnKeyPressCounter;

    var favoriteFoodEl = document.getElementById('favorite-food');
    favoriteFoodEl.onkeypress = inputs.changeText;

    return {
      init: function() {
        var counter = document.getElementById ("counter");
        for (var i = 1; i < 500; i++) {
            var option = new Option (i, i);
            counter.options.add (option);
        }
        counter.focus ();
      }
    }
});
