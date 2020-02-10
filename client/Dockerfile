FROM node:8.17.0-alpine

RUN mkdir -p /srv/client/
WORKDIR /srv/client/
COPY package*.json /srv/client/
RUN npm ci
COPY . /srv/client/
CMD ["npm", "start"]