import { factories } from '@strapi/strapi';
import Stripe from 'stripe';

// تأكد من وجود مفتاح Stripe
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is missing');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default factories.createCoreController('api::order.order', ({ strapi }) => ({
  async create(ctx) {
    const { totalOrderAmount, email, orderItemList } = ctx.request.body;

    // التحقق من القيم المطلوبة
    if (!totalOrderAmount || !email || !orderItemList) {
      ctx.throw(400, 'Missing required fields');
    }

    try {
      // إنشاء Payment Intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: totalOrderAmount * 100, // تحويل من دولار إلى سنت
        currency: 'usd',
        receipt_email: email,
        metadata: { orderItemList: JSON.stringify(orderItemList) },
      });

      // إنشاء الطلب في Strapi
      const order = await strapi.entityService.create('api::order.order', {
        data: ctx.request.body,
      });

      // إرجاع clientSecret للفرونت
      ctx.send({ clientSecret: paymentIntent.client_secret, order });
    } catch (error) {
      console.error('Payment Error:', error.message);
      ctx.throw(500, `Error processing payment: ${error.message}`);
    }
  },
}));
