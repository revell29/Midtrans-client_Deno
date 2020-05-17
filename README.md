# Midtrans Client - Deno

Midtrans ❤️ Deno!

This is the not Official Deno API client/library for Midtrans Payment API. Visit [https://midtrans.com](https://midtrans.com). More information about the product and see documentation at [http://docs.midtrans.com](https://docs.midtrans.com) for more technical details.

## Usage

### Choose Product / Method

Midtrans have [2 different products](https://docs.midtrans.com/en/welcome/index.html) of payment that you can use:

- [Snap](#22A-snap) - Customizable payment popup will appear on **your web/app** (no redirection). [doc ref](https://snap-docs.midtrans.com/)
- [Snap Redirect](#22B-snap-redirect) - Customer need to be redirected to payment url **hosted by midtrans**. [doc ref](https://snap-docs.midtrans.com/)
- [Core API (VT-Direct)](#22C-core-api-vt-direct) - Basic backend implementation, you can customize the frontend embedded on **your web/app** as you like (no redirection). [doc ref](https://api-docs.midtrans.com/)

Choose one that you think best for your unique needs.

### Client Initialization and Configuration

Get your client key and server key from [Midtrans Dashboard](https://dashboard.midtrans.com)

Create API client object

```javascript
import Midtrans from "../../mod.ts";
// Create Core API instance
let coreApi = new Midtrans.CoreApi({
  isProduction: false,
  serverKey: "YOUR_SERVER_KEY",
  clientKey: "YOUR_CLIENT_KEY",
});
```

````javascript
import Midtrans from "../../mod.ts";
// Create Snap API instance
let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: "YOUR_SERVER_KEY",
  clientKey: "YOUR_CLIENT_KEY",
});


### Get Snap Token

```javascript
import Midtrans from "../../mod.ts";
// Create Snap API instance
let snap = new Midtrans.Snap({
        isProduction : false,
        serverKey : 'YOUR_SERVER_KEY',
        clientKey : 'YOUR_CLIENT_KEY'
    });

let parameter = {
    "transaction_details": {
        "order_id": "test-transaction-123",
        "gross_amount": 200000
    }, "credit_card":{
        "secure" : true
    }
};

snap.createTransaction(parameter)
    .then((transaction)=>{
        // transaction token
        let transactionToken = transaction.token;
        console.log('transactionToken:',transactionToken);
    })

````

### Core API (VT-Direct)

You can see some Core API examples [here](examples/controllers).

Available methods for `CoreApi` class

```javascript
/**
 * Do `/charge` API request to Core API
 * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com)
 * @return {Promise} - Promise contains Object from JSON decoded response
 */
charge((parameter = {}));

/**
 * Do `/capture` API request to Core API
 * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com)
 * @return {Promise} - Promise contains Object from JSON decoded response
 */
capture((parameter = {}));

/**
 * Do `/card/register` API request to Core API
 * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com)
 * @return {Promise} - Promise contains Object from JSON decoded response
 */
cardRegister((parameter = {}));

/**
 * Do `/token` API request to Core API
 * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com)
 * @return {Promise} - Promise contains Object from JSON decoded response
 */
cardToken((parameter = {}));
```
