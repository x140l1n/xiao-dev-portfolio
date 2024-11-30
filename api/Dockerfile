# Install PHP 8.1 and Apache.
FROM php:8.1-apache

# Install the required PHP extensions.
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    libzip-dev && \
    docker-php-ext-install zip

# Install Composer.
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Establish the working directory.
WORKDIR /var/www/html

# Copy the source code to the working directory.
COPY . .

# Establish the permissions.
RUN chown -R www-data:www-data /var/www/html

# Expose the port 80.
EXPOSE 80