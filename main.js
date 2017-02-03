$(document).ready(function (e) {
    var $sort = this;
    var $list = $('div.dropdown-content');
    var $listLi = $('a', $list);
    $listLi.sort(function (a, b) {
        var keyA = $(a).text();
        var keyB = $(b).text();
        return (keyA > keyB) ? 1 : 0;
    });
    $.each($listLi, function (index, row) {
        $list.append(row);
    });
});
