"use strict";

function typer() {
    var win = $(window),
        foo = $('#typer');
    foo.typer(['<h1><span class="iq-font-purple">Machine</span> Learning</h1>', '<h1>Data <span class="iq-font-purple">Scientist</span></h1>', '<h1><span class="iq-font-purple">Problem</span> Solver</h1>']);

}

$(document).ready(function() {
    typer()
});


$(window).on('load', function() {


});