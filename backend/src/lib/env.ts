export const MONGODB_URI = process.env.MONGODB_URI || "";

export const CLIENT_DOMAIN = process.env.CLIENT_DOMAIN || "";
export const SERVER_DOMAIN = process.env.BETTER_AUTH_URL || "";

export const BOT_TOKEN = process.env.TELEGRAM_TOKEN || "";
export const APP_USE_WEBHOOK = process.env.APP_USE_WEBHOOK === "true";
export const APP_BASE_URL = process.env.APP_BASE_URL || "";

export const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET || "";
export const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID || "";

// Paypal
export const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || "";
export const PAYPAL_SECRET_KEY = process.env.PAYPAL_SECRET_KEY || "";
export const PAYPAL_WEBHOOK_ID = process.env.PAYPAL_WEBHOOK_ID || "";

// Paddle
export const PADDLE_API_KEY = process.env.PADDLE_API_KEY || "";
export const PADDLE_PRODUCT_ID = process.env.PADDLE_PRODUCT_ID || "";
export const PADDLE_SUBSCRIPTION_WEBHOOK_SECRET_KEY =
  process.env.PADDLE_SUBSCRIPTION_WEBHOOK_SECRET_KEY || "";
