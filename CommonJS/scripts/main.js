define(function (require) {
    // Load any app-specific modules
    // with a relative require call, like:
    var inputs = require('./inputs');

    var counterEl = document.getElementById('counter');
    counterEl && counterEl.onkeypress = inputs.OnKeyPressCounter;

    var favoriteFoodEl = document.getElementById('favorite-food');
    favoriteFoodEl && favoriteFoodEl.onkeypress = inputs.changeText;
});

require(['domReady'], function (domReady) {
  domReady(function () {
    //This function is called once the DOM is ready.
    //It will be safe to query the DOM and manipulate
    //DOM nodes in this function.
    var counter = document.getElementById ("counter");
    for (var i = 1; i < 500; i++) {
        var option = new Option (i, i);
        counter.options.add (option);
    }
    counter.focus ();
  });
});
