$(document).ready(function(){
  // Write your code here
  $ ('h1').text()
  $('.last_name').text('Eich')
  $('li').text()
  $('#person_1').clone().prop('id', 'person_2'). appendTo('.container')
  $('#person_2 > .first_name').text('Jacob Oziah')
  $('#person_2 > .last_name').text(', Owen Reeder')
  $('#person_2 li:first').text('Stuff')
  $('#person_2 li:odd').text('Stuff stuff')
  $('#person_2 li:last').text('Stuff stuff stuff')
  $('#person_2').on('click','li',function(event){
    alert("Hello! I am an alert box!!");
  })
  $('.container').on('click','h1',function(event){
  $('ul').toggle()

  })

})
