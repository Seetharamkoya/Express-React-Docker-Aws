# Stage 1: Build React app
FROM node:14 as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy app source code
COPY . .

# Build React app
RUN npm run build

# Stage 2: Serve React app with Nginx
FROM nginx:1.21-alpine

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built React app from previous stage
COPY --from=build /app/build /usr/share/nginx/html

#Expose port 80
EXPOSE 80

#Start Nginx server
CMD ["nginx", "-g", "daemon off;"]