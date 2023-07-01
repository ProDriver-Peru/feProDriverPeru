#Primera Etapa
FROM node:18-alpine3.17 as build-step

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#Segunda Etapa
FROM nginx:1.25.1-alpine
COPY --from=build-step /app/dist/fe-pro-driver-peru /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
