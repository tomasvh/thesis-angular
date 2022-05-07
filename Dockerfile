FROM node:17-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && npm run build

CMD ng serve --host 0.0.0.0 --port 4500 --disable-host-check

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist/bmc-blog .

ENTRYPOINT ["nginx", "-g", "daemon off;"]