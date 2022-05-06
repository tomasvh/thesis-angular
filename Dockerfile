FROM node:17-alpine

WORKDIR /application

RUN npm install -g @angular/cli

COPY . .

RUN npm install

CMD ng serve --host 0.0.0.0 --port 4500 --disable-host-check