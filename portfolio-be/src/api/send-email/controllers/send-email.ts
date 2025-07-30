/**
 * A set of functions called "actions" for `send-email`
 */

export default {
  async send(ctx) {
    const { name, email, message } = ctx.request.body;

    await strapi.plugins['email'].services.email.send({
      to: 'nguyendangphuc2611@gmail.com',
      subject: `New Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    ctx.send({ ok: true });
  },
};
