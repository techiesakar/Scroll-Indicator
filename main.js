var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  scrollFunction()
};
function scrollFunction() {
  scrollIndicator()
  function scrollIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollIndicator").style.width = scrolled + "%";
  }
}
