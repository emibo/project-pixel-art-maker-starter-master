// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);
})

function makeGrid() {
    $('tr').remove();
    
    for (var i = 1; i <= height; i++) {
        $('table').append('<tr></tr>');
        for (var j = 1; j <= width; j++) {
            $('tr:last').append('<td></td>');
        }
    }
    
    $('td').click(function(event) {
        color = $('#colorPicker').val();
        $(event.target).css('background-color', color);
    })
}