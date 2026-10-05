# MPWA Node Backend (Railway Ready)

WhatsApp multi-device Node.js backend (Baileys) for MPWA panel.

**Version:** 15.0.0  
**Repo:** https://github.com/developerroyalthakur/mpwa

## Features
- Multi-device WhatsApp connection (QR + Pairing Code)
- Auto-reply + AI Chatbot (Gemini / ChatGPT / Claude / Groq / DeepSeek / DALL·E / Bexa)
- Blast / Campaign messaging
- Webhook support
- Persistent sessions (credentials volume)
- Socket.IO real-time

## Railway Deploy (Recommended)

1. **Connect Repo**  
   Railway → New Project → Deploy from GitHub → select `developerroyalthakur/mpwa`

2. **Environment Variables** (Variables tab)
```
APP_NAME=MPWA
APP_ENV=production
APP_DEBUG=false
APP_URL=https://royalthakurofficial.xyz
WA_URL_SERVER=https://wa.royalthakurofficial.xyz
PORT_NODE=3100
APP_INSTALLED=true
TYPE_SERVER=other
DB_CONNECTION=mysql
DB_HOST=nvme.servex.top
DB_PORT=3306
DB_DATABASE=royalthakur_wp
DB_USERNAME=royalthakur_wp
DB_PASSWORD=Thakur@83034
ORIGIN=https://royalthakurofficial.xyz
REGISTERATION=true
```

3. **Add Volume** (very important for sessions)
   - Mount Path: `/app/credentials`

4. **Custom Domain**
   - Add: `wa.royalthakurofficial.xyz`

5. Deploy → it will auto run `node server.js`

## Panel Settings (cPanel Laravel)
- Server Type → **Other**
- URL → `https://wa.royalthakurofficial.xyz`
- Port → `443`

## Local Test
```bash
npm install
cp .env.example .env
npm start
```

## Structure
```
server.js                 # Main entry
server/whatsapp.js        # Baileys core
server/controllers/       # API + Incoming + Blast
server/lib/               # Helpers
server/database/          # MySQL
credentials/              # Session files (volume)
```

Made for Royal Thakur Official.
