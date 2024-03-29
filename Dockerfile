# ---- Base Node ----
FROM node:21 AS base
ENV APP_PATH spotifyclone/app/client


# ---- Dependencies ----
FROM base AS dependencies
# development: install ALL node_modules, including 'devDependencies'
# production: install ONLY production node_modules
WORKDIR /${APP_PATH}
COPY package*.json .
RUN npm ci
# RUN npm ci --only=production


# ---- Build Stage ----
FROM base AS build
WORKDIR /${APP_PATH}
# copy climatechecker dependencies
COPY --from=dependencies /${APP_PATH}/ .
# copy climatechecker sources
WORKDIR /${APP_PATH}/public
COPY public/ .
WORKDIR /${APP_PATH}/src
COPY src/ .
RUN npm run build

# ---- Build Stage ----
#FROM ontdekstation-client-build:latest AS build
# build the React app
#RUN npm run build


# ---- Release with NGINX ----
FROM nginx:alpine AS release
# the relative path to the app as seen from this file
ENV APP_PATH spotifyclone/app/client
# copy the built React app
WORKDIR /usr/share/nginx/html
#COPY --from=build /${APP_PATH}/build/ .
COPY --from=build /${APP_PATH}/build/ .

# start the application
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# to run exec following command:
# sudo docker run -p 3000:80 --name mynginx ontdekstation-client-release:latest
