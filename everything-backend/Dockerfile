# ---- Build stage ----
FROM node:20-alpine AS builder

WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build (Nest outputs to dist/)
RUN npm run build

# ---- Runtime stage ----
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Create non-root user
RUN addgroup -S app && adduser -S app -G app

# Copy only required files
COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

USER app

EXPOSE 3000

CMD ["node", "dist/main.js"]
