# Node base docker image
FROM node:latest

# Specify the work directory
WORKDIR /app

# Copy package*.json to work directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all the remaining source files to work directory
COPY . .

# Run the app
CMD [ "node", "server.js" ]
