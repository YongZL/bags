import TelegramBot from 'node-telegram-bot-api';

const token = process.env.TELEGRAM_BOT_TOKEN || '';

console.log('tokentoken', token);

export const bot = new TelegramBot(token, { polling: true });
