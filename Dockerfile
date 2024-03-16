FROM node:20.11.1

WORKDIR /src/app

#copy packages into /apps
COPY package*.json ./

#copy all docs from the root into /app
COPY . .

RUN npm install

RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]