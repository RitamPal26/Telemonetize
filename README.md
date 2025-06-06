

# Telemonetize

**Telemonetize** is a premium dashboard application integrated with a Telegram bot (@Telemonetize26Bot) that allows you to efficiently manage payouts and subscriptions for your Telegram groups. It provides analytics, customer management, and seamless payout handling through PayPal.

---

## Features

- **Telegram Bot Integration:** Manage subscriptions and payouts directly via the Telegram bot @Telemonetize26Bot.
- **Dashboard Overview:** View your earnings, recent customers, and transactions at a glance.
- **Group Management:** Register and manage multiple Telegram groups with subscription plans.
- **Payout Management:** Connect your PayPal account to handle payouts with tracking and history.
- **Subscription Plans:** Set and manage subscription pricing for each Telegram group.
- **Analytics & Insights:** Track customers, transactions, and revenue trends.

---

## Screenshots

### Overview
<img width="949" alt="image" src="https://github.com/user-attachments/assets/d75a7f80-19a5-4cee-b969-8a3ae9edd77d" />

<img width="949" alt="image" src="https://github.com/user-attachments/assets/728bd84d-21fa-430d-8d09-3bafccb08d8c" />

<img width="945" alt="image" src="https://github.com/user-attachments/assets/c018d9b0-fa3c-4098-9ff2-24040d62a4f1" />

<img width="952" alt="image" src="https://github.com/user-attachments/assets/b16c8c8d-5d75-441a-83e0-0fd09d984a77" />

<img width="665" alt="image" src="https://github.com/user-attachments/assets/42e63e35-44b7-4c35-a095-bc07574317fc" />


### Prerequisites

- Node.js (v14 or higher)
- A Telegram account and your Telegram bot token (@Telemonetize26Bot)
- PayPal account for payouts

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/telemonetize.git
   cd telemonetize
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file and add your Telegram bot token, PayPal credentials, and other necessary config.

4. Run the application:
   ```bash
   npm run dev
   ```

5. Access the dashboard at `http://localhost:3000/dashboard`

---

## Usage

- Use the Telegram bot @Telemonetize26Bot to interact with your subscribers.
- Manage your Telegram groups and subscription plans from the dashboard.
- Monitor earnings, customers, and transactions in real-time.
- Connect your PayPal account to manage and withdraw payouts.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---


### Environment Variables

Create a `.env` file in the root directory and add the following:
```
# General
PORT=8080

# CLIENT_DOMAIN=*
CLIENT_DOMAIN=https://localhost:3000

# Database
MONGODB_URI=mongodb://localhost:27017/telemonetize

# Better Auth
BETTER_AUTH_URL=http://localhost:8080
BETTER_AUTH_SECRET=

# OAuth
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# Telegram
TELEGRAM_TOKEN=

# Paypal
PAYPAL_WEBHOOK_ID=
PAYPAL_CLIENT_ID=
PAYPAL_SECRET_KEY=

# Paddle
PADDLE_API_KEY=
PADDLE_PRODUCT_ID=
PADDLE_SUBSCRIPTION_WEBHOOK_SECRET_KEY=
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=

# Resend
RESEND_API_KEY=
NEXT_PUBLIC_SERVER_BASE_URL=http://localhost:8080
NEXT_PUBLIC_APP_BASE_URL=https://localhost:3000

```

---

### Bot Permissions

To enable automated subscription management, add @Telemonetize26Bot as an admin to your Telegram groups.

---

## Contact

Created by Ritam Pal  
Email: ritamjunior26@gmail.com


---
