# Use the official Node.js 14 image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the server.js file to the container
COPY . .

# Expose the port on which the server will run
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
