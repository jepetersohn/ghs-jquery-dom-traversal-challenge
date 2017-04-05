$(document).ready(function(){
  // Write your code here
  function delay() {
    timeoutID = window.setTimeout(remove, 200);
  }

  function remove() {
    $("#result").removeClass("changing");
  }



  function delay2() {
    timeoutID = window.setTimeout(remove2, 200);
  }

  function remove2() {
    $("#result2").removeClass("changing");
  }



  function delay3() {
    timeoutID = window.setTimeout(remove3, 200);
  }

  function remove3() {
    $("#result3").removeClass("changing");
  }



  $("#add3").on("click", function(){
    $("#result3").text(parseInt($('#result3').text()) + 10);
    $("#result3").addClass("changing");
    delay3();
  })
  $("#subtract3").on("click", function(){
    $("#result3").text(parseInt($('#result3').text()) - 10);
    $("#result3").addClass("changing");
    //$("#result").removeClass("changing");
    delay3();
  })



  $("#add").on("click", function(){
    $("#result").text(parseInt($('#result').text()) + 1);
    $("#result").addClass("changing");
    delay();
  })
  $("#subtract").on("click", function(){
    $("#result").text(parseInt($('#result').text()) - 1);
    $("#result").addClass("changing");
    //$("#result").removeClass("changing");
    delay();
  })

  $("#add2").on("click", function(){
    $("#result2").text(parseInt($('#result2').text()) + 5);
    $("#result2").addClass("changing");
    delay2();
  })
  $("#subtract2").on("click", function(){
    $("#result2").text(parseInt($('#result2').text()) - 5);
    $("#result2").addClass("changing");
    //$("#result").removeClass("changing");
    delay2();
  })

})
