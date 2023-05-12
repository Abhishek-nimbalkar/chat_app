FROM node:alpine 
WORKDIR /chat
COPY ./package.json /chat
RUN npm install
ENV REDIS_HOST_NAME=${REDIS_HOST_NAME}
ENV CHAT_APP_PORT=${CHAT_APP_PORT}
COPY . . 
CMD npm run dev
EXPOSE 5001
