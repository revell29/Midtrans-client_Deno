import ApiConfig from "./ApiConfig.ts";
import HttpClient from "./HttpClient";
import Transaction from "./Transaction.ts";

class Snap {
  apiConfig: ApiConfig;
  httpClient: HttpClient;
  transaction: Transaction;
  constructor(options = { isProduction: false, serverKey: "", clientKey: "" }) {
    this.apiConfig = new ApiConfig(options);
    this.httpClient = new HttpClient();
    this.transaction = new Transaction();
  }

  /**
   * Do `/transactions` API request to Snap API
   * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://snap-docs.midtrans.com)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  createTransaction(parameter = {}) {
    let apiUrl = this.apiConfig.getSnapApiBaseUrl() + "/transactions";
    let responsePromise = this.httpClient.request(
      "POST",
      this.apiConfig.get().serverKey,
      apiUrl,
      parameter
    );
    return responsePromise;
  }

  /**
   * Wrapper function that call `createTransaction` then:
   * @return {Promise} - Promise of String token
   */
  createTransactionToken(parameter = {}) {
    return this.createTransaction(parameter).then((res) => {
      return res;
    });
  }

  /**
   * Wrapper function that call `createTransaction` then:
   * @return {Promise} - Promise of String redirect_url
   */
  createTransactionRedirectUrl(parameter = {}) {
    return this.createTransaction(parameter).then((res: any) => {
      return res.redirect_url;
    });
  }
}

export default Snap;
