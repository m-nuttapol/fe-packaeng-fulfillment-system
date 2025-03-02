# Use Node.js as the base image
FROM node:18 as build

# Set the working directory inside the container
WORKDIR /app

# Copy only the frontend files
COPY frontend/package.json frontend/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend folder
COPY frontend/ . 

# Build the frontend
RUN npm run build

# Use Nginx to serve the frontend
FROM nginx:latest

# Copy built frontend files to Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
