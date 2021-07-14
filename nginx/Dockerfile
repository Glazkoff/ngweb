FROM nginx:alpine

COPY nginx/robots.txt /var/www/robots/
COPY src/favicon/favicon.ico /var/www/robots/
COPY nginx/dev.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]