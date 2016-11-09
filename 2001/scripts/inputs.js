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
