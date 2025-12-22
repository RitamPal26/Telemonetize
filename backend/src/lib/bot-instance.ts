import TelegramBot from "node-telegram-bot-api";
import { BOT_TOKEN, APP_USE_WEBHOOK } from "./env.js";

export const bot = new TelegramBot(BOT_TOKEN, { 
  polling: !APP_USE_WEBHOOK 
});