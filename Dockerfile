# Stage 1: Build Node.js Application
FROM node:latest as node

# Set the working directory inside the container
WORKDIR /app

# Copy all files from the host machine to the container
COPY . .

# Install Node.js dependencies defined in package.json
RUN npm install

# Build the Node.js application (specific build command may vary)
RUN npm run build --omit=dev

# Stage 2: Serve Application with Nginx
FROM nginx:alpine

# Copy built files from the previous stage to the default Nginx web server directory
COPY --from=node /app/dist/docker-ng-demo /usr/share/nginx/html

