import { bot } from "../lib/bot-instance.js"; 
import { APP_USE_WEBHOOK, APP_BASE_URL } from "../lib/env.js";

import { assignGroup } from "./handler/assign.handler.js";
import { keyVerify } from "./handler/key.handler.js";
import { sendMessage } from "./handler/message.handler.js";
import { rulesHandler } from "./handler/rules.handler.js";
import { startHandler } from "./handler/start.handler.js";

// Function to register all handlers
export const initBot = () => {
  console.log("Initializing Bot Handlers...");
  startHandler();
  sendMessage();
  rulesHandler();
  assignGroup();
  keyVerify();
  console.log("✅ Bot Handlers Registered");
};

// Function to setup Webhook (Call this from main index.ts)
export const setupWebhook = async () => {
  if (APP_USE_WEBHOOK && APP_BASE_URL) {
    const webhookUrl = `${APP_BASE_URL}/api/v1/telegram/webhook`;
    try {
      await bot.setWebHook(webhookUrl);
      console.log(`✅ Telegram webhook set to: ${webhookUrl}`);
    } catch (err) {
      console.error("❌ Failed to set webhook:", err);
    }
  } else {
    console.log("🔄 Telegram bot running in POLLING mode");
  }
};

export default bot;