//check off specific todolist by clicking
// $("li").click(function(){
//     $(this).toggleClass("completed"); 
$("ul").on("click","li",function(){
    $(this).toggleClass("completed"); 

	// //if li is gray turn it to black
 //    if($(this).css("color")==="rgb(128, 128, 128)"){
 //     $(this).css({
 //  	color:"black",
 //  	textDecoration:"none"
 //  });
 //    } 
	// //else turn it gray
	// else{
 //     $(this).css({
 //  	color:"gray",
 //  	textDecoration:"line-through"
 //  });
	// }
  });

//click on x to delete todo
$("ul").on("click", "span", function(event){
	//parent.remove() jQuery function
	$(this).parent().fadeOut("slow",function(){
		$(this).remove();
	});
  event.stopPropagation();
});
//use keypress to activate enter

//type="text" below is wrong
$("input[type='text']").keypress(function(event){
   if(event.which === 13){

    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText +"</li>");
   }
});


$(".fa-plus").click(function(){
   $("input[type='text']").fadeToggle();

})