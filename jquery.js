
$(".purpleToFuchsia").on("click",function(){
  $(".purple").css("background-color","fuchsia")
})

$(".toggleGreenGrey").on("click",function(){
  $(".green,.grey").toggleClass("green grey")
})


var swap=function(red,blue){
  var a1=red.clone();
  var a2=blue.clone();
  
  red.addClass("temp");
  blue.replaceWith(a1);
  $(".temp").replaceWith(a2);
}


$(".switchBoxes").on("click",function(){
  swap($(".red"),$(".blue"));
})


$(".insertText").on("click",function(){
  $(".purple").append("<p>Any Text</p>").addClass("white");
})

var count=0;
var first;
$(".colors").on("click","div.red,div.blue,div.purple,div.green",function(){
  count==0?{first=$(this);count=1;}
          :{swap(first, $(this));count=0;}
})


$(window).on("resize",function(){
  
});