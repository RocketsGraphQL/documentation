FROM --platform=linux/amd64 node:16.14.0
MAINTAINER Kaushik Varanasi "kaushik.varanasi1@gmail.com"

USER root

WORKDIR /app

COPY . .

RUN yarn
RUN yarn build

# Expose ports
EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Set the default command to execute
# when creating a new container
CMD "yarn" "start"