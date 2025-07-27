# AI Chat-Bot Assistant

[Live Demo](https://pdreddy-dhanu-chat-bot.netlify.app/)

[GitHub Repository](https://github.com/PDReddyDhanu/AI-ChatBot-Assistant-PDR)

---

## Overview

**AI Chat-Bot Assistant** is a modern, web-based chatbot application that leverages Google Gemini AI to provide intelligent, real-time responses to user queries. The project is designed with a focus on accessibility, modern UI/UX, and ease of deployment.

---

## Features

- **Conversational AI:** Real-time, context-aware responses using Google Gemini API.
- **Modern UI:** Responsive, accessible, and visually appealing chat interface.
- **Light & Dark Mode:** Toggle between light and dark themes for comfortable viewing.
- **Markdown Support:** AI responses can include formatted text, lists, and links.
- **Mobile Friendly:** Fully responsive design for all device sizes.
- **Animated Interactions:** Smooth transitions and micro-interactions for a premium feel.
- **Social Links:** Quick access to developer's social profiles.

---

## Tech Stack

- **Frontend:**
  - HTML5
  - CSS3 (custom, with Bootstrap 5 for layout)
  - JavaScript (Vanilla)
  - [Bootstrap Icons](https://icons.getbootstrap.com/)
  - [Markdown-it](https://github.com/markdown-it/markdown-it) for markdown rendering
- **AI Backend:**
  - [Google Gemini API](https://ai.google.dev/gemini-api/docs)

---

## Live Demo

👉 [Try the Chat-Bot Live](https://pdreddy-dhanu-chat-bot.netlify.app/)

---

## Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/PDReddyDhanu/AI-ChatBot-Assistant-PDR.git
cd AI-ChatBot-Assistant-PDR
```

### 2. **Install Dependencies**

No build tools or frameworks are required. All dependencies are loaded via CDN.

### 3. **Configure the Gemini API Key**

- Open `script.js`.
- Replace the placeholder in the `apiKey` variable with your own [Google Gemini API key](https://ai.google.dev/gemini-api/docs/get-api-key):

```js
const apiKey = "YOUR_GEMINI_API_KEY";
```

### 4. **Run Locally**

Just open `index.html` in your browser. No server setup is required.

---

## How It Works

- **User Input:** The user types a message and clicks the send button.
- **API Request:** The app sends the message to the Google Gemini API using a POST request.
- **AI Response:** Gemini returns a response, which is rendered in the chat window (with markdown support).
- **UI/UX:** The interface updates with smooth animations, and the chat scrolls to the latest message.

---

## Customization

- **Themes:** Easily switch between light and dark mode using the toggle in the header.
- **Styling:** Modify `styles.css` for custom colors, fonts, or layouts.
- **Avatar:** Change the user or bot avatar by updating the image URLs in `index.html` and `script.js`.

---

## Deployment

You can deploy this app on any static hosting service (e.g., Netlify, Vercel, GitHub Pages). No backend server is required.

---

## Credits

- [Google Gemini API](https://ai.google.dev/gemini-api/docs)
- [Bootstrap](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Markdown-it](https://github.com/markdown-it/markdown-it)

---

## Connect with Me
- **GitHub:** [PDReddyDhanu](https://github.com/PDReddyDhanu)
- **LinkedIn:** [Dhanunjay Reddy Palakolanu](https://www.linkedin.com/in/dhanunjay-reddy-palakolanu-pdr/)
- **Instagram:** [p.d.reddy_dhanu04_08](https://www.instagram.com/p.d.reddy_dhanu04_08/)
