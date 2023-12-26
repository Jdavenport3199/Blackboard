FROM node:20-alpine
WORKDIR /
COPY package.json .
RUN npm i
COPY . .
RUN npm run build
CMD ["npm", "start"]