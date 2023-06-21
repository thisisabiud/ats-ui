FROM node:18-alpine as build
WORKDIR /angular/app
COPY package*.json .
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /angular/app/dist/ui /usr/share/nginx/html

# CMD [ "npm", "start"]
EXPOSE 80