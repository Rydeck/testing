$(document).ready(function () {
    $('#button').click(function () {
        // $('ul').append('<li>test</li>');
        //$('ul').prepend('<li>test</li>');
        //$('<li>test</li>').appendTo('ul')
        //$('<li>test</li>').prependTo('ul')
        //$('ul').after('<p>test</p>');
        //$('ul').before('<p>test</p>');
        //Hier gaan we de html vervangen door parameter.
        //de div wordt opnieuw gerenderd
        //$('div').html('<p>test</p>')

        //$('ul').wrap('<div>');
        //$('p').unwrap('<div>');
        var $ul = $('ul').clone();
        $ul.attr('id', 'tweedeId');

        $('div').append($ul);
    });
});