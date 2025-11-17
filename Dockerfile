# # Use an official Node.js runtime as the base image
# FROM node:20-slim AS builder

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json (if present) to the working directory
# # This allows Docker to cache the npm install step if dependencies haven't changed
# COPY package*.json ./

# # Install project dependencies
# RUN npm install

# # Copy the rest of your application code to the working directory
# COPY . .

# # Compilar TypeScript
# RUN npm run build

# # Expose the port your Node.js application listens on
# EXPOSE 3000

# # Define the command to run your application when the container starts
# CMD ["node", "dist/app/index.js"] 
# # Replace "server.js" with your application's entry point file

# Build
FROM node:20-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runtime
FROM node:20-slim
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node","dist/app/index.js"]