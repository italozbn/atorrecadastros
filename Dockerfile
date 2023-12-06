FROM node:18 AS build

ENV NODE_ENV=development

RUN mkdir /app
WORKDIR /app

COPY package.json .
RUN  npm install 

COPY . .



# Second build
FROM node:18
WORKDIR /app
ENV NODE_ENV=development

COPY --from=build /app /app

EXPOSE 8080
CMD ["npm","run","start:dev"]