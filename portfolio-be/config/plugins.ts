export default ({ env }) => ({
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: 'smtp.gmail.com',
                port: 465,
                auth: {
                    user: 'phucnd2611@gmail.com',
                    pass: 'ncvp itiz tjyd lnpx',
                },
                secure: true,
            },
            settings: {
                defaultFrom: 'phucnd2611@gmail.com',
                defaultReplyTo: 'phucnd2611@gmail.com',
            },
        },
    },
});
