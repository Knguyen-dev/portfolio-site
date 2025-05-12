# Build stage (docker multi-staged builds have this syntax, so this is the "build" stage)
# But yeah if you just have a react app, you'll need to do a two-stage build.
FROM node:24-slim AS build

# All app files and following commands are within /app
WORKDIR /app

# Copy package.json and package-lock-json, allowing us to install production dependencies
COPY package*.json .

# Installs dependencies; apparently use ci instead of install
RUN npm install 

# Copy the remaining project files and then build the application
COPY . .
RUN npm run build

# New stage, production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80; and start nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]