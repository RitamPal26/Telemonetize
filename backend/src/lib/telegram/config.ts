import TelegramBot from "node-telegram-bot-api";

const telegramToken = process.env.TELEGRAM_TOKEN || "";
const useWebhook = process.env.APP_USE_WEBHOOK === "true";
const appBaseUrl = process.env.APP_BASE_URL || "";

const bot = new TelegramBot(telegramToken, { 
  polling: !useWebhook 
});

if (useWebhook && appBaseUrl) {
  const webhookUrl = `${appBaseUrl}/api/v1/telegram/webhook`;
  
  bot.setWebHook(webhookUrl)
    .then(() => console.log(`✅ Telegram webhook set to: ${webhookUrl}`))
    .catch((err) => console.error("❌ Failed to set webhook:", err));
} else if (!useWebhook) {
  console.log("🔄 Telegram bot running in POLLING mode (Local Dev)");
}

export default bot;