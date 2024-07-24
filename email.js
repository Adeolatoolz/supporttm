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
