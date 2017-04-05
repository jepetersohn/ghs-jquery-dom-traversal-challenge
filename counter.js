$(document).ready(function(){

  $(".add").on("click", function(){
    var resultNum = parseInt($(this).closest(".counter").find(".result").text())
    var id=($(this).closest(".counter")).attr("id")
    if (id == "counter1") {
        ++resultNum
     }
     else if (id == "counter5") {
        resultNum += 5
     }
     else if (id == "counter10") {
        resultNum += 10
     }
    $(this).closest(".counter").find(".result").text(resultNum)
    $(this).closest(".counter").find(".result").addClass("changing")
    setTimeout(function() {$(".result").removeClass("changing")}, 200)
  })

  $(".subtract").on("click", function(){
    var resultNum = $(this).closest(".counter").find(".result").text()
    var id=($(this).closest(".counter")).attr("id")
    if (id == "counter1") {
        --resultNum
     }
     else if (id == "counter5") {
        resultNum -= 5
     }
     else if (id == "counter10") {
        resultNum -= 10
     }
    $(this).closest(".counter").find(".result").text(resultNum)
    $(this).closest(".counter").find(".result").addClass("changing")
    setTimeout(function() {$(".result").removeClass("changing")}, 200)
  })

})

