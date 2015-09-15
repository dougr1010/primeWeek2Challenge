$(document).ready(function(){

console.log('Hello Epsilon!');
var $appendData;



$("form").submit(function(event){
	event.preventDefault();
	// var employee = {};
	// employee.firstName =  $("#firstName").val();
	// employee.lastName =   $("#lastName").val();
	// employee.number =     $("#number").val();
	// employee.jtitle =     $("#title").val();
	// employee.score =      $("#score").val();
	// employee.salary =     $("#salary").val();

	var employee = {};
	var $inputs = $(".inputForm input"); //this also selects the button as last element
	$inputs.each(function(){
	employee[this.name]= $(this).val();
	$(this).val("");  //data is stored, now clear input field
	});
console.log($("input"));
//console.log(employee);

	var score = parseInt(employee.lastReviewScore);
	var scoreColor = "";
	switch(score){
		case 1: scoreColor = "sc1";
		break;
		case 2: scoreColor = "sc2";
		break;
		case 3: scoreColor = "sc3";
		break;
		case 4: scoreColor = "sc4";
		break;
		case 5: scoreColor = "sc5"
		break
		default: scoreColor = "scx"
	}
//console.log(score + " " + scoreColor);

	$appendData=("<li>" + employee.firstName + " " + 
		                  employee.lastName + " " + 
		                  employee.employeeNumber + " " +
		                  employee.employeeTitle + " " + 
		                  "<span class='" + scoreColor + "'>" + employee.lastReviewScore + "</span>  " + 
		                  employee.salary + " " +
						  "<button class='removeBtn'>Remove</button></li>");
//console.log($appendData);
	$("ul").append($appendData);

});

$(document).on('click',".removeBtn",function(event){
	event.preventDefault();
	$(this).parent().remove();
	console.log('saw removeMe');
});


});
