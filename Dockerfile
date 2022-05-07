FROM node:17-alpine AS angular-builder

WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=angular-builder /app/dist/bmc-blog .

ENTRYPOINT ["nginx", "-g", "daemon off;"]