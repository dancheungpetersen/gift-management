# backend/Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build TypeScript code
RUN npm run build

# Expose port (adjust if needed)
EXPOSE 8000

# Start the server
CMD ["npm", "start"]