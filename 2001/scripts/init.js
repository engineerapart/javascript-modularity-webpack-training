function init () {
  var counter = document.getElementById ("counter");
  for (var i = 1; i < 1000; i++) {
      var option = new Option (i, i);
      counter.options.add (option);
  }
  counter.focus ();
}
