#!/bin/bash
# specify base image
FROM ubuntu:latest 

# setup nodejs env in container
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

# copy required files to CWD of the container
# COPY /src /dest
COPY package.json package.json
COPY index.js index.js
COPY .gitignore .gitignore
COPY pnpm-lock.yaml pnpm-lock.yaml

RUN npm install

ENTRYPOINT [ "node", "index.js" ]
