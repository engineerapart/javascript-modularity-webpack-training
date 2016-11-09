function changeText(event, obj) {
  var echoEl = document.getElementById('echo-box');
  echoEl.innerText = obj.value + event.key;
}
