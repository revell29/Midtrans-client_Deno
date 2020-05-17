import ApiConfig from "./ApiConfig.ts";
import HttpClient from "./HttpClient.ts";
import Transaction from "./Transaction.ts";

class CoreApi {
  apiConfig: ApiConfig;
  httpClient: HttpClient;
  transaction: Transaction;

  constructor(options = { isProduction: false, serverKey: "", clientKey: "" }) {
    this.apiConfig = new ApiConfig(options);
    this.httpClient = new HttpClient();
    this.transaction = new Transaction(this);
  }

  /**
   * Do `/charge` API request to Core API
   * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  charge(parameter = {}) {
    let apiUrl = this.apiConfig.getCoreApiBaseUrl() + "/charge";
    let responsePromise = this.httpClient.request(
      "POST",
      this.apiConfig.get().serverKey,
      apiUrl,
      parameter
    );
    return responsePromise;
  }
  /**
   * Do `/capture` API request to Core API
   * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  capture(parameter = {}) {
    let apiUrl = this.apiConfig.getCoreApiBaseUrl() + "/capture";
    let responsePromise = this.httpClient.request(
      "POST",
      this.apiConfig.get().serverKey,
      apiUrl,
      parameter
    );
    return responsePromise;
  }

  /**
   * Do `/card/register` API request to Core API
   * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  cardRegister(parameter = {}) {
    let apiUrl = this.apiConfig.getCoreApiBaseUrl() + "/card/register";
    let responsePromise = this.httpClient.request(
      "GET",
      this.apiConfig.get().serverKey,
      apiUrl,
      parameter
    );
    return responsePromise;
  }

  /**
   * Do `/token` API request to Core API
   * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  cardToken(parameter = {}) {
    let apiUrl = this.apiConfig.getCoreApiBaseUrl() + "/token";
    let responsePromise = this.httpClient.request(
      "GET",
      this.apiConfig.get().serverKey,
      apiUrl,
      parameter
    );
    return responsePromise;
  }
}

export default CoreApi;
