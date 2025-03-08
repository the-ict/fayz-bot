module.exports = {
    menu: {
        keyboard: [
            [{
                text: "Do'konga o'tish↗️", web_app: {
                    url: "https://next-fayz.vercel.app/"
                }
            }],
            [
                {
                    text: "Aksiya↗️", web_app: {
                        url: "https://next-fayz.vercel.app/News"
                    }
                },
                {
                    text: "Buyurtmalarim↗️", web_app: {
                        url: "https://next-fayz.vercel.app/Checkout"
                    }
                }
            ],
            [{ text: "Bog'lanish📞" }]
        ],
        resize_keyboard: true,
        one_time_keyboard: true
    },

    help: {
        inline_keyboard: [
            [{ text: "Savollaringiz bormi❓", url: "https://next-fayz.vercel.app/Contacts" }]
        ]
    }
};
