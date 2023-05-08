FROM node:alpine 
WORKDIR /blog-server
COPY ./package.json /blog-server
RUN npm install 
COPY . . 
CMD npm run dev
EXPOSE 5000
