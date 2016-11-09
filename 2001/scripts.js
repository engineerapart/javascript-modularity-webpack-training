
function init () {
  var counter = document.getElementById ("counter");
  for (var i = 1; i < 1000; i++) {
      var option = new Option (i, i);
      counter.options.add (option);
  }
  counter.focus ();
}

function OnKeyPressCounter (event, counter) {
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
}

function changeText(event, obj) {
  var echoEl = document.getElementById('echo-box');
  echoEl.innerText = obj.value + event.key;
}