FROM node:16

WORKDIR /class_build/
COPY ./package.json/ /class_build/
COPY ./yarnlock /class_build/
RUN yarn install

COPY . /class_build/
RUN yarn build:ssr

CMD yarn start