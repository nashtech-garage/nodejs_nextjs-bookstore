FROM node:18.12-alpine

WORKDIR /nextjs-bookstore

COPY . .

RUN npm i && npm run build

CMD npm start

EXPOSE 3000
