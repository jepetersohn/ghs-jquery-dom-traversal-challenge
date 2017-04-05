$(document).ready(function(){
   var person = $("#person_1").clone()
   $(".last_name").text("Eich")
   person.attr("id", "person_2")
   person.find(".first_name").text("Erin")
   person.find(".last_name").text("Willis")
   $(".container").append(person)
   $(".container").on('click','li',function (){
     alert($(this).text());
   });
   $(".container").on('click', "h1",function (){
     $('ul').toggle();
   });
})
