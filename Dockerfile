FROM node:6.5

ENV PORT 3001
ENV DEBUG spaform:*

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

ENV NODE_ENV production

COPY . /usr/src/app

RUN npm run build

EXPOSE ${PORT}

CMD ./node_modules/.bin/pm2 start ./src/api/bin/www --name spaform --no-daemon --env PORT=${PORT} NODE_ENV=${NODE_ENV}