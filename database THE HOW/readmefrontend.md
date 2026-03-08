docker build -t book-review-frontend --build-arg NEXT_PUBLIC_API_URL=http://internal-Internal-ALB-1920582386.eu-north-1.elb.amazonaws.com:3001 .


Dockerfile

# Use Node.js LTS as base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the Next.js port
EXPOSE 3000

# Start Next.js in development mode
CMD ["npm", "run", "dev"]


docker build -t book-review-frontend --build-arg NEXT_PUBLIC_API_URL=http://<YOUR_INTERNAL_ILB_DNS>:3001 .

docker run -d \
  --name frontend-container \
  -p 80:3000 \
  -e NEXT_PUBLIC_API_URL=http://internal-Internal-ALB-1920582386.eu-north-1.elb.amazonaws.com:3001 \
  book-review-frontend