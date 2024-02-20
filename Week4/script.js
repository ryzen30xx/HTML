document.getElementById("infoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var selectedOption = null;
    var radioButtons = document.getElementsByName("radio_group");
    var email = document.getElementById("email_input").value;
    var password = document.getElementById("password_input").value;
    var numberValue = document.getElementById("number_input").value;
    var urlValue = document.getElementById("url_input").value;
    var checkboxValue = document.getElementById("checkbox_input");

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            selectedOption = radioButtons[i].value;
            break;
        }
    }

    if (!email || !password || !numberValue || !urlValue) {
    	alert('Please Type your information');
    }else if (!selectedOption){
    	alert('please choose your option');
    }else if (!checkboxValue.checked){
    	alert('Please tick to checkbox');
    }else{
    	alert("Email submitted: " + email);
	}

	



});

