$(document).ready(function () {
    $('tr').hover(function () {
        $(this).toggleClass('highlight');
    });

    $('#toevoegenDiv').before('<h1>Personen</h1>');
    $('#toevoegenDiv').wrap('<fieldset id="toevoegenFieldset">');
    $('#toevoegenFieldset').prepend('<legend>Persoon toevoegen</legend>')
    $('#toevoegenFieldset').after('<hr>');

    $('#toevoegenButton').click(function () {
        var naam = $('#naam').val();
        var leeftijd = $('#leeftijd').val();
        $('#personenTabel').append('<tr><td>' + naam + '</td>'+
        '<td>' + leeftijd + '</td></tr>');
    });

    $('.kopieerButton').click(function () {
        var $paragraaf = $('#kopieerParagraaf_0').clone();
        var count = $('p').length;
        $paragraaf.attr('id', 'kopieerParagraaf_' + count);
        $('#kopieerParagraaf_' + (count -1)).after($paragraaf);
    });
});
