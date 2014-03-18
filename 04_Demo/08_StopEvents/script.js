$(document).ready(function () {
    $('div').click(function (e) {
        $(alert('div is aangeklikt'));
    });

    $('p').click(function (e) {
        $(alert('p is aangeklikt'));
    });

    $('span').click(function (e) {
        $(alert('span is aangeklikt'));

        e.stopPropagation();
    });

    $('a').click(function (e) {
        alert('a');
        e.preventDefault();
    });
    
   

});
