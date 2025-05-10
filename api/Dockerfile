# Use an official Node.js runtime as the base image (adjust version as needed)
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variables
ENV PORT=8080
ENV MONGODBURL="mongodb+srv://omnagare701:fzV9vf4WptdzwVr3@cluster0.grxeow4.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0"
ENV JWT_SECRET=omnagare

# Expose the port
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
