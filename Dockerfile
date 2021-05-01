FROM node:14

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g pm2

EXPOSE 3000

CMD ["pm2-runtime", "index.js"]