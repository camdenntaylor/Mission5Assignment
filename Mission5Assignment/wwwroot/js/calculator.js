// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$("#calculate").click(function () {
    let total = $("#hours").val() * $("#rate").val();
    $("#total").val(total);
})
