export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // إعدادات لوحة الإدارة
  admin: {
    url: env('ADMIN_URL', '/admin'),
    forgotPassword: {
      emailTemplate: {
        link: `${env('FRONTEND_URL', 'https://shop-co-swart-rho.vercel.app')}/reset-password?code={token}`,
      },
    },
  },
});