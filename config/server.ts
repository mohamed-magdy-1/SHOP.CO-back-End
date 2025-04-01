export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('BACKEND_URL', 'https://shop-co-back-end.onrender.com'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // إعدادات لوحة الإدارة
  admin: {
    url: env('ADMIN_URL', '/admin'),
    forgotPassword: {
      emailTemplate: {
        link: `${env('FRONTEND_URL', 'https://your-frontend-url.com')}/reset-password?code={token}`,
      },
    },
  },
});