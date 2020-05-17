class ApiConfig {
  isProduction: Boolean;
  serverKey: String;
  clientKey: String;
  CORE_PROD_BASE_URL: String;
  CORE_SANDBOX_BASE_URL: String;
  parentObject: any;
  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * isProduction, serverKey, clientKey
   */
  constructor(options = { isProduction: false, serverKey: "", clientKey: "" }) {
    this.isProduction = false;
    this.serverKey = "";
    this.clientKey = "";
    this.CORE_PROD_BASE_URL = "https://api.midtrans.com/v2";
    this.CORE_SANDBOX_BASE_URL = "https://api.sandbox.midtrans.com/v2";

    this.set(options);
  }

  /**
   * Return config stored
   * @return {Object} object contains isProduction, serverKey, clientKey
   */
  get() {
    let currentConfig = {
      isProduction: this.isProduction,
      serverKey: this.serverKey,
      clientKey: this.clientKey,
    };

    return currentConfig;
  }

  /**
   * Set config stored
   * @param {Object} options - object contains isProduction, serverKey, clientKey]
   */
  set(options: any) {
    let currentConfig = {
      isProduction: this.isProduction,
      serverKey: this.serverKey,
      clientKey: this.clientKey,
    };

    currentConfig = { ...currentConfig, ...options };

    this.isProduction = currentConfig.isProduction;
    this.serverKey = currentConfig.serverKey;
    this.clientKey = currentConfig.clientKey;
  }

  getCoreBaseURL() {
    return this.isProduction ? this.CORE_PROD_BASE_URL : this.CORE_SANDBOX_BASE_URL;
  }
}

export default ApiConfig;
