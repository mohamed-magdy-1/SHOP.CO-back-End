module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
        secure: false,
      },
      settings: {
        defaultFrom: "king44123no@gmail.com",
        defaultReplyTo: "king44123no@gmail.com",
        resetPasswordUrl: "http://localhost:3000/auth/ResetPassword?code={TOKEN}",
      },
    },
  },
});
