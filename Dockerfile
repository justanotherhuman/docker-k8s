# use an existing docker image as a base
FROM node:alpine as builder

WORKDIR '/app'

# download and install a dependency
#RUN apk add --update redis
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
# Tell the image what to do when it starts as a container
#CMD ["redis-server"]
# CMD ["npm", "start"]

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html