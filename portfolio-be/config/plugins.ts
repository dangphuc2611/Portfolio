export default ({ env }) => ({
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: 'smtp.gmail.com',
                port: 465,
                auth: {
                    user: 'phucnd2611@gmail.com',
                    pass: 'shxr roma clxd hzbv',
                },
                secure: true,
            },
            settings: {
                defaultFrom: 'yourgmail@gmail.com',
                defaultReplyTo: 'yourgmail@gmail.com',
            },
        },
    },
});
