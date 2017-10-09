// Your jQuery goes here

var userData = {
	name:"test",
	email:"sifathaider650@gmail.com",
	html:{links:[],dislikes:[]},
	css: {links:[],dislikes:[]},
	js: {links:[],dislikes:[]},
	strengths:{html:"",css:"",js:""},
	currentQuestion:"welcome"
};

$("#startBtn").click(function(event)
{
$("#welcome").hide();
$("#q1").show();
if(userData.name && userData.email )
{
	$("name").val(userData.name);
	$("email").val(userData.email);
}
});


$("#name").change(function(event)
{
	console.log($("#name").val());
});

$("#email").change(function(event)
{
	console.log($("#email").val());
	if ($("#email").val() !="" && $("#name").val() != "") 
	{
		$("#startBtn1").prop("disbaled","false");
	}
	
});

$("#startBtn1").click(function(event)
{
	userData.name=$("#name").val();
	userData.email=$("#email").val();
	$("#q1").hide();
	$("#q2").show();

});

$("#htmlQ").click(function(event)
{
	$("#q2").hide();
	$("#q2a").show();
});
$("#cssQ").click(function(event)
{
	$("#q2").hide();
	$("#q2b").show();
});
$("#jssQ").click(function(event)
{
	$("#q2").hide();
	$("#q2c").show();
});
$(".prevQ2").click(function(event)
{
  $("#q2").show();
  $(this).parent().parent().parent().hide();
});