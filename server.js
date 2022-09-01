const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: "f3fw2d32c4xhp8g2",
    publicKey: "qt5zktw8r3xs9hfw",
    privateKey: "13158a02212e01c6164c28ceb51d9a0b"
});

gateway.clientToken.generate({
  //customerId: 1234
}, (err, response) => {
    // pass clientToken to your front-end
     const clientToken = response.clientToken
     console.log(response)
     });
