FROM node:22-alpine AS build
WORKDIR /app
RUN npm config set fetch-retries 5 \
 && npm config set fetch-retry-mintimeout 20000 \
 && npm config set fetch-retry-maxtimeout 120000 \
 && npm config set fetch-timeout 300000
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run lint && npm test

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
RUN apk upgrade --no-cache
COPY package*.json ./
RUN npm ci --omit=dev \
 && npm cache clean --force \
 && rm -rf /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx
COPY --from=build /app/src ./src
USER node
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost:3000/health || exit 1
CMD ["node", "src/index.js"]
