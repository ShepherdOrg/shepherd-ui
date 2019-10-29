FROM mhart/alpine-node:12 AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]

ARG SHEPHERD_METADATA
LABEL shepherd.metadata=${SHEPHERD_METADATA}