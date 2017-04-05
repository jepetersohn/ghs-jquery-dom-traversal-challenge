$(document).ready(function(){

$('#add').on('click', function(){
$('#result').text(parseInt($('#result').text()) + 1);
$('#result').addClass('changing')
setTimeout(function(){$('#result').removeClass('changing')},200)
});
$('#subtract').on('click', function(){
$('#result').text(parseInt($('#result').text()) - 1);
$('#result').addClass('changing')
setTimeout(function(){$('#result').removeClass('changing')},200)
});
$('.counter').clone().prop('class', 'counter_2'). appendTo('.counter')
$('.counter_2 #add').on('click', function(){
$('.counter_2 #result').text(parseInt($('#result2').text()) + 2);
$('.counter_2 #result').addClass('changing')
setTimeout(function(){$('#result').removeClass('changing')},200)
});
$('.counter_2 #subtract').on('click', function(){
$('.counter_2 #result').text(parseInt($('#result').text()) - 2);
$('.counter_2 #result').addClass('changing')
setTimeout(function(){$('#result').removeClass('changing')},200)
});


})
