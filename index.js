const TeleBot = require('telebot');
const bot = new TeleBot('1926107154:AAHbVubcibbvut7R1PERxEen18J4oBTcLmg');

bot.on('/start', (msg) => msg.reply.text('Selamat datang di Mantul BOT, tempatnya mantul mantul...'));
bot.on('/hello', (msg) => {
    return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
});

bot.start();