# use an existing docker image as a base
FROM node:alpine

WORKDIR /app

# download and install a dependency
#RUN apk add --update redis
COPY package.json .
RUN npm install
COPY . .

# Tell the image what to do when it starts as a container
#CMD ["redis-server"]
CMD ["npm", "start"]