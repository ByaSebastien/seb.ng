FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
FROM nginx:latest
COPY --from=build /app/dist/demo-seb/ /usr/share/nginx/html
COPY --from=build /app/default.conf /etc/nginx/conf.d
EXPOSE 80
