FROM node:18-alpine

WORKDIR /DevOpsProject

COPY package*.json ./
RUN npm install --quiet

EXPOSE 3000

COPY . .

CMD [ "npm", "start" ]
