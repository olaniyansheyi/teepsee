import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const amount = body.amount;

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
  });

  return {
    clientSecret: paymentIntent.client_secret,
  };
});
