FROM node:18-alpine

COPY ./docker/development/node/etc/docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

RUN apk add --no-cache yarn fcgi

WORKDIR /var/www/application/client

COPY ../application/client/package.json /var/www/application/client/package.json

ENTRYPOINT ["docker-entrypoint"]
