import TelegramBot from "node-telegram-bot-api";
import { BOT_TOKEN, APP_USE_WEBHOOK, APP_BASE_URL } from "../lib/env.js";

// Import Handlers
import { assignGroup } from "./handler/assign.handler.js";
import { keyVerify } from "./handler/key.handler.js";
import { sendMessage } from "./handler/message.handler.js";
import { rulesHandler } from "./handler/rules.handler.js";
import { startHandler } from "./handler/start.handler.js";

// 1. Initialize Bot
const bot = new TelegramBot(BOT_TOKEN, { 
  polling: !APP_USE_WEBHOOK 
});

// Automatically set Webhook in Production
if (APP_USE_WEBHOOK && APP_BASE_URL) {
  const webhookUrl = `${APP_BASE_URL}/api/v1/telegram/webhook`;
  
  bot.setWebHook(webhookUrl)
    .then(() => console.log(`✅ Telegram webhook set to: ${webhookUrl}`))
    .catch((err) => console.error("❌ Failed to set webhook:", err));
} else {
  console.log("🔄 Telegram bot running in POLLING mode");
}

// Re-add the initBot function
export const initBot = () => {
  startHandler();
  sendMessage();
  rulesHandler();
  assignGroup();
  keyVerify();
};

export default bot;