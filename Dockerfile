FROM node:9.10.0-alpine
MAINTAINER eb1n
ADD . /app/
WORKDIR /app
EXPOSE 8080
CMD ["npm", "run", "start"]