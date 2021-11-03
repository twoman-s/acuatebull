const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "rzp_test_Y5tlqQ0O8yOPLG",
  key_secret: "jT3RnPFiYSDkwqg2i6Tdpu1V",
});

export const createOrder = () => {
  const options = {
    amount: 199900,
    currency: "INR",
    receipt: "order#1",
  };
  razorpay.orders.create(options, function (err, order) {
    if (order) {
      return order.id;
    } else {
      console.log(err);
    }
  });
};
