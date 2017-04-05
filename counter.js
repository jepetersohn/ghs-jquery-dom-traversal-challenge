$(document).ready(function(){
  $('.counter').clone().prop('class', '.counter_2'). appendTo('.counter')

  $(".counter #add").on('click', function() {
    $(".counter #result").text(parseInt($(".counter #result").text())+1);
    $(".counter #result").addClass("changing")
    setTimeout(function(){ $(".counter #result").removeClass("changing") }, 200)
  });

  $(".counter #subtract").on('click', function() {
    $(".counter #result").text(parseInt($(".counter #result").text())-1);
    $(".counter #result").addClass("changing")
    setTimeout(function(){ $(".counter #result").removeClass("changing") }, 200)
  });

  $(".counter_2 #add").on('click', function() {
    $(".counter_2 #result").text(parseInt($(".counter_2 #result").text())+1);
    $(".counter_2 #result").addClass("changing")
    setTimeout(function(){ $(".counter_2 #result").removeClass("changing") }, 200)
  });

  $(".counter_2 #subtract").on('click', function() {
    $(".counter_2 #result").text(parseInt($(".counter_2 #result").text())-1);
    $(".counter_2 #result").addClass("changing")
    setTimeout(function(){ $(".counter_2 #result").removeClass("changing") }, 200)
  });
})
