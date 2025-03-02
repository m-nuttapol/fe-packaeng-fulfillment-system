# Use an official Node.js image as the base image for building the frontend
FROM node:18 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend project into the container
COPY . .

# Build the frontend
RUN npm run build

# Use an official Nginx image to serve the frontend
FROM nginx:latest

# Copy the built frontend files to the Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (default for Nginx)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
