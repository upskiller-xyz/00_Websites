# Multi-stage build for React Vite application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /

# Copy package files
COPY upskiller/package*.json ./upskiller/
COPY package*.json ./

# Install dependencies
WORKDIR /upskiller
RUN npm ci

# Copy source code
COPY upskiller/ ./upskiller/
COPY shared/ ./shared/
COPY upskiller/tsconfig.json ./upskiller/tsconfig.json
COPY upskiller/vite.config.ts ./upskiller/vite.config.ts

WORKDIR /upskiller/upskiller
RUN ls -l 

# Build the application
RUN npm run build

# Production stage with Nginx
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /upskiller/upskiller/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

ARG PORT=8080
EXPOSE ${PORT}

# Start nginx
CMD ["nginx", "-g", "daemon off;"]