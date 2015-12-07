$(document).ready(function(){

	console.log('Hello Epsilon!');
	var $appendData;


	//select the input form, on submit click:
	$("form").submit(function(event){
		event.preventDefault();

		var employee = {};
		var $inputs = $(".inputForm input"); //this also selects the button as last element

		//populate the employee object with data from the input fields, then clear them
		$inputs.each(function(){
			employee[this.name]= $(this).val();
			$(this).val("");  //data is stored, now clear input field
		});

		//determine the score color from the last review score
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

		//generate list item, including a delete button, for the employee and append it to the DOM ul
		$appendData=("<li>" + employee.firstName + " " + 
			                  employee.lastName + " " + 
			                  employee.employeeNumber + " " +
			                  employee.employeeTitle + " " + 
			                  "<span class='" + scoreColor + "'>" + employee.lastReviewScore + "</span>  " + 
			                  employee.salary + " " +
							  "<button class='removeBtn'>Remove</button></li>");
		$("ul").append($appendData);

	});


	//remove an employee if remove button is clicked
	$(document).on("click", ".removeBtn", function(event){
		event.preventDefault();
		$(this).parent().remove();
		console.log('saw removeMe');
	});

});
