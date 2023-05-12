FROM node:alpine 
WORKDIR /blog-server
COPY ./package.json /blog-server
RUN npm install
ENV JWT_KEY=${JWT_KEY}
ENV SmtpEmail=${SmtpEmail}
ENV SmtpPassword=${SmtpPassword}
ENV Cloudinary_cloud=${Cloudinary_cloud}
ENV Cloudinary_Key=${Cloudinary_Key}
ENV Cloudinary_Secret=${Cloudinary_Secret}
ENV MongoAtlas_UserName=${MongoAtlas_UserName}
ENV MongoAtlas_Password=${MongoAtlas_Password}
ENV BLOG_APP_PORT=${BLOG_APP_PORT} 
COPY . . 
CMD npm run dev
EXPOSE 5000
