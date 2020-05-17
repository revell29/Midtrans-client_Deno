import Midtrans from "../../mod.ts";
const core = new Midtrans.ApiCore({
  isProduction: false,
  serverKey: "Midtrans server key",
  clientKey: "Midtrans client key",
});

class MidtransController {
  static index({ response }: { response: any }) {
    response.body = "TestBRowww";
  }

  static getStatus = async ({
    request,
    response,
  }: {
    request: any;
    response: any;
  }): Promise<void> => {
    try {
      const body = await request.body();
      const orderId = body.value.orderId;
      const resultMidtrans = await core.transaction.status(orderId);

      response.body = { message: resultMidtrans };
    } catch (error) {
      console.log(error);
    }
  };

  static getNotification = async ({
    request,
    response,
  }: {
    request: any;
    response: any;
  }): Promise<void> => {
    try {
      const body = await request.body();
      const resultMidtrans = await core.transaction.notification(body.value);

      response.body = { message: resultMidtrans };
    } catch (error) {
      response.body = { message: error };
      response.status = 500;
    }
  };
}

export default MidtransController;
