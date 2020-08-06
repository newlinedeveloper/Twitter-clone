FROM node:10
WORKDIR /app
COPY package.json /app

CMD cd client
RUN npm install
COPY . /app/client
CMD npm build
CMD npm start
EXPOSE 5000

CMD cd server
RUN npm install
COPY . /app/server
CMD npm start
EXPOSE 8000
