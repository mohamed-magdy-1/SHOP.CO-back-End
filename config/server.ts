export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('BACKEND_URL', 'http://localhost:1337'), // عنوان URL لـ Strapi
  app: {
    keys: env.array('APP_KEYS'),
  },
  // إضافة هذا الجزء لتحديد عنوان URL الأمامي
  admin: {
    url: env('ADMIN_URL', '/admin'), // للوحة الإدارة
    forgotPassword: {
      emailTemplate: {
        link: `${env('FRONTEND_URL', 'http://localhost:3000')}/reset-password?code={token}`,
      },
    },
  },
});