FROM node:22-bookworm-slim
WORKDIR /app
COPY mpwa.tar.gz.b64.* /tmp/
RUN cat /tmp/mpwa.tar.gz.b64.* | base64 -d > /tmp/mpwa.tar.gz     && tar -xzf /tmp/mpwa.tar.gz -C /app     && rm -f /tmp/mpwa.tar.gz /tmp/mpwa.tar.gz.b64.* /app/.env
RUN npm install --omit=dev
ENV NODE_ENV=production
EXPOSE 3100
CMD ["node","server.js"]
