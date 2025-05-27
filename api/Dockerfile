FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

ENV MONGODBURL=mongodb://omnagare:12345678@mongodbcluster.cluster-cb8a6iuaqa2h.ap-south-1.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=global-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false
ENV PORT=8080
ENV JWT_SECRET=omnagare

# Expose the port
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
