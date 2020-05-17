import HttpClient from "./HttpClient.ts";
import ApiConfig from "./ApiConfig.ts";

class Transaction {
  parent: any;

  constructor(parentObject: any) {
    this.parent = parentObject;
  }

  /**
   *  get Status
   *
   * @param transactionId
   */
  status(transactionId = "") {
    let apiUrl = `${this.parent.apiConfig.getCoreBaseURL()}/${transactionId}/status`;
    let responsePromise = this.parent.httpClient.request(
      "GET",
      this.parent.apiConfig.get().serverKey,
      apiUrl,
      null
    );
    return responsePromise;
  }

  /**
   * get statusb2b
   *
   * @param transactionId
   */
  statusb2b(transactionId = "") {
    let apiUrl = `${this.parent.apiConfig.getCoreBaseURL()}/${transactionId}/statusb2b`;
    let responsePromise = this.parent.httpClient.request(
      "GET",
      this.parent.apiConfig.get().serverKey,
      apiUrl,
      null
    );
    return responsePromise;
  }
  /**
   * get status approve
   *
   * @param transactionId
   */
  approve(transactionId = "") {
    let apiUrl = `${this.parent.apiConfig.getCoreBaseURL()}/${transactionId}/approve`;
    let responsePromise = this.parent.httpClient.request(
      "POST",
      this.parent.apiConfig.get().serverKey,
      apiUrl,
      null
    );
    return responsePromise;
  }
  /**
   * get status deny
   *
   *
   * @param transactionId
   */
  deny(transactionId = "") {
    let apiUrl = `${this.parent.apiConfig.getCoreBaseURL()}/${transactionId}/deny`;
    let responsePromise = this.parent.httpClient.request(
      "POST",
      this.parent.apiConfig.get().serverKey,
      apiUrl,
      null
    );
    return responsePromise;
  }

  /**
   * get status cancel
   *
   *
   * @param transactionId
   */
  cancel(transactionId = "") {
    let apiUrl = `${this.parent.apiConfig.getCoreBaseURL()}/${transactionId}/cancel`;
    let responsePromise = this.parent.httpClient.request(
      "POST",
      this.parent.apiConfig.get().serverKey,
      apiUrl,
      null
    );
    return responsePromise;
  }

  /**
   * get status expired
   *
   *
   * @param transactionId
   */
  expire(transactionId = "") {
    let apiUrl = `${this.parent.apiConfig.getCoreBaseURL()}/${transactionId}/expire`;
    let responsePromise = this.parent.httpClient.request(
      "POST",
      this.parent.apiConfig.get().serverKey,
      apiUrl,
      null
    );
    return responsePromise;
  }

  /**
   * refund
   *
   *
   * @param transactionId
   */
  refund(transactionId = "", parameter = {}) {
    let apiUrl = `${this.parent.apiConfig.getCoreBaseURL()}/${transactionId}/refund`;
    let responsePromise = this.parent.httpClient.request(
      "POST",
      this.parent.apiConfig.get().serverKey,
      apiUrl,
      parameter
    );
    return responsePromise;
  }

  /**
   * refund direct
   *
   *
   * @param transactionId
   */
  refundDirect(transactionId = "", parameter = {}) {
    let apiUrl = `${this.parent.apiConfig.getCoreBaseURL()}/${transactionId}/refund/online/direct`;
    let responsePromise = this.parent.httpClient.request(
      "POST",
      this.parent.apiConfig.get().serverKey,
      apiUrl,
      parameter
    );
    return responsePromise;
  }

  /**
   * get Notification HTTP POST from midtrans
   *
   * @params object
   */
  notification(notificationObj: any = {}) {
    let self = this;
    return new Promise(function (resolve, reject) {
      let transactionId = notificationObj.transaction_id;
      self
        .status(transactionId)
        .then(function (res: any) {
          resolve(res);
        })
        .catch(function (err: any) {
          reject(err);
        });
    });
  }
}

export default Transaction;
