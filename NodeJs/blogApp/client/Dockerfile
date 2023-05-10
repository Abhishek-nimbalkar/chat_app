#node block

FROM node:alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
ENV REACT_APP_BASE_URL_BLOG_SERVER: ${REACT_APP_BASE_URL_BLOG_SERVER}
# ENV REACT_APP_BASE_URL_BLOG_SERVER=http://localhost:8080
COPY . .
RUN npm run build

#nginx block

FROM nginx:latest
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder  /app/build .
ENTRYPOINT [ "nginx","-g","daemon off;"]