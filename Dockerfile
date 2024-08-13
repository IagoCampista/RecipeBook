FROM node
WORKDIR /app
COPY . .
RUN rm -rf node_modules
RUN npm install
CMD ["node", "app"]
EXPOSE 3000




