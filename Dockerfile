ARG CI_REGISTRY
ARG NODE_IMAGE_TAG

FROM "$CI_REGISTRY/hub.docker.com/library/node:${NODE_IMAGE_TAG}" as build

MAINTAINER Andrey Vinokurov <andrey.vinokurov@corezoid.com>

ARG BUILD_TAG

WORKDIR /app
COPY . /app

RUN yarn \
    && yarn build

FROM "$CI_REGISTRY/hub.docker.com/library/nginx:stable-alpine-slim"
ENV PATH "/bin:/usr/bin:/sbin:/usr/sbin:/usr/local/bin:/usr/local/sbin"
RUN rm -rf /etc/nginx/conf.d/* /etc/nginx/conf.d/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]
