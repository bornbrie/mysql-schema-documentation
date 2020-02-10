FROM node:8.17.0-alpine

RUN mkdir -p /srv/server/
WORKDIR /srv/server/
COPY package*.json /srv/server/
RUN npm ci
COPY . /srv/server/
CMD ["npm", "start"]