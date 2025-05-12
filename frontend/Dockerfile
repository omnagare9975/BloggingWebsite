FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV VITE_API_BASE_URL=http://3.109.16.101:3000

RUN npm run build


FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx" , "-g" , "daemon off;"]
