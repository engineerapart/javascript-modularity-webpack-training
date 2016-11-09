// Start loading the main app file. Put all of
// your application logic in there.
require(['scripts/domReady', 'scripts/main'], function (domReady, main) {
  domReady(main.init);
});