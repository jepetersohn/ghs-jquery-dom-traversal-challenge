$(document).ready(function(){
  var result = 0
  var counter5 = $(".counter").clone()
  $("body").append(counter5)
  counter5.find("#result").attr("id", "result5")

  $("#add").on("click", function() {
    result++
    $("#result").text(result)
    $("#result").addClass("changing")
    setTimeout(function(){
      $("#result").removeClass("changing");
    }, 200);
  });

  $("#subtract").on("click", function() {
    result--
    $("#result").text(result)
    $("#result").addClass("changing")
    setTimeout(function(){
      $("#result").removeClass("changing");
    }, 200);
  });
})
