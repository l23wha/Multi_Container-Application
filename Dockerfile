# Use official Node.js image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the application source code
COPY . .

# Expose the port your API runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]