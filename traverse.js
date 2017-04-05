$(document).ready(function(){
  // Write your code here
  alert($("h1").text())
  $(".last_name").text("Eich")
  alert($("li").text())
  $("#person_1").clone().prop("id", "person_2").appendTo(".container")
  $("#person_2 > .first_name").text("Victoria")
  $("#person_2 > .last_name").text("McInnes")
  $("#person_2 li").first().text("cool")
  $("#person_2 li").next().text("beans")
  $("#person_2 li").last().text("swiggity")
  $(".the_best").on("click", function(){
    alert($(this).text())
  })
  $("h1").on("click", function(){
    $("ul").hide()
  })

})

