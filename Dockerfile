# Use a base image
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the contents of the current directory to the container's working directory
COPY . .

# Expose port 80 (the port nginx runs on by default)
EXPOSE 80

# Start nginx server when the container runs
CMD ["nginx", "-g", "daemon off;"]
