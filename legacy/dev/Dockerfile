FROM php:7.3-apache

RUN cd /etc/apache2/mods-enabled && \
  ln -s ../mods-available/headers.load headers.load
COPY headers-disable-browser-caching.conf /etc/apache2/conf-enabled/
