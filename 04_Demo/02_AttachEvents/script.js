$(document).ready(function () {

    var $div = $('div');
    
    for (x = 0; x < 1000; x++) {
    var $p = $('<p>').text('Ik ben een paragraaf on the fly').click(function () {
    $(this).css('color', 'red');
    });
    $div.append($p);
    };

    

 
    
    $('div').on('click', 'p', function () {
    $(this).css('color', 'red');
    });

    var $div = $('div');

    for (x = 0; x < 1000; x++) {
    var $p = $('<p>').text('Ik ben een paragraaf on the fly');
    $div.append($p);
    };
    */
    $(document).on('click','input' function () {
        alert('ok');
    });

});
