const Telegram = require("node-telegram-bot-api")
const dotenv = require("dotenv")
const { hello, contacts } = require("./messages")
const { menu, help } = require("./keybbaords")
const format = require("./format")


dotenv.config()

const bot = new Telegram(process.env.TOKEN, {
    polling: true
})

bot.setMyCommands([
    { command: "/start", description: "Botni qayta ishga tushirish!" },
    { command: "/help", description: "Yordam so'rash!" },
])

bot.onText(/\/start/, (message) => {
    bot.sendMessage(message.chat.id, hello, {
        reply_markup: menu
    })
})

bot.onText(/\/help/, (message) => {
    bot.sendMessage(message.chat.id, "Yordam oynasi:", {
        reply_markup: help
    })
})


bot.on("message", (message) => {
    if (message.text === "Bog'lanish📞") {
        bot.sendMessage(message.chat.id, contacts, {
            reply_markup: help,
            parse_mode: "HTML"
        })
    }


    if (message?.web_app_data?.data) {
        const data = JSON.parse(message?.web_app_data?.data)

        if (data?.products?.length > 0) {

            data.products.forEach((item, index) => {
                bot.sendMessage(message.chat.id, `${index + 1}-<b>maxsulot nomi</b>: ${item?.name}`, {
                    parse_mode: "HTML"
                })
            })

            const totalPrice = data.products.reduce((acc, item) => acc + item.price * item.overNumber, 0);
            bot.sendMessage(message.chat.id, `<b>Umumiy narxi:</b> ${format(totalPrice, "UZS")}`, {
                parse_mode: "HTML"
            })

            bot.sendMessage(message.chat.id, "Siz bilan tez orada bo'g'lanamiz !")

        }
    }
})

bot.on("polling_error", (error) => {
    console.log(error.message)
})