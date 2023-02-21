FROM php:8.1-fpm-alpine

RUN apk add acl autoconf g++ make

# Install PDO driver for PostgreSQL
RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable pdo_mysql

# Install OPcache
RUN docker-php-ext-install opcache

# Install APCu
RUN pecl install apcu \
    && docker-php-ext-enable apcu

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY ./docker/development/php-fpm/etc/docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

WORKDIR /var/www/application/api

ENTRYPOINT ["docker-entrypoint"]
CMD ["php-fpm"]
