# Stage 1: Build Stage
FROM node:latest AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:latest AS production

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/.next ./.next

RUN npm install --only=production

CMD ["npm", "run", "start"]
