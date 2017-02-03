$(function () {
    var $list = $("div.dropdown-content");
    var sorted = $("a", $list).toArray().sort(function (a, b) {
        return b.textContent[0] < a.textContent[0]
    });
    $list.html(sorted);
})

$(function () {
    var $list = $("ul.map_selector");
    var sorted = $("li h3", $list).toArray().sort(function (a, b) {
        return b.textContent[0] < a.textContent[0]
    });
    $list.html(sorted);
})
