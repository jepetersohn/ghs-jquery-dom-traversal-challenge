$(document).ready(function(){
  $('h1').text()
  $('li').text()
  $('#person_1').clone().prop('id', 'person_2'). appendTo('.container')
  $('span first_name').text("Joey")
  $('span.first_name').text("Joey")
  $('#person_2 span.last_name').text("Miner")
  $('#person_1 span.last_name').text("Eich")
  $('#person_1 span.first_name').text("Brendon")
  $('#person_2 li:first').text("C#")

  $( "#person_1" ).on('click','li',function() {
  alert( "Something has been clicked" );
  });
  $( '.container' ).on('click','h1',function() {
    $( "ul" ).toggle();
  });
  });
