$(function() {
  var $list = $("div.dropdown-content");
  var sorted = $("a", $list).toArray().sort(function(a, b) {
    return b.textContent[0] < a.textContent[0]
  });
  $list.html(sorted);
})
