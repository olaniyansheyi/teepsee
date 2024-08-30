import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

console.log(stripe);

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const amount = body.amount;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });

    return {
      clientSecret: paymentIntent.client_secret,
    };
  } catch (error) {
    console.error("Payment Intent Creation Error:", error.message);
  }
});
