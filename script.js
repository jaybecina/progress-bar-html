$(document).ready(function () {
  let loadingBar = 50;

  // on load 50% progress bar
  $(".prog-bar span").css("width", `${loadingBar}%`);

  // on click loads up to 100%
  $(".finishBtn").click(function () {
    var trigger = setInterval(finishLoading, 10);

    function finishLoading() {
      if (loadingBar >= 100) {
        clearInterval(trigger);
        i = 0;
      } else {
        loadingBar++;
        $(".prog-bar span").css("width", `${loadingBar}%`);
      }
    }
  });
});
