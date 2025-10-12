FROM node:20.13.0-alpine3.19
RUN mkdir -p /var/www/app
WORKDIR /var/www/app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
