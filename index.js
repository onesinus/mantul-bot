const TeleBot = require('telebot');
const bot = new TeleBot('123467123213:XXXXXX');

bot.on('/start', (msg) => msg.reply.text('Selamat datang di Mantul BOT, tempatnya mantul mantul...'));
bot.on('/hello', (msg) => {
    return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
});

bot.start();
