FROM mhart/alpine-node:8.9.3

WORKDIR /build

# Install serve
CMD yarn start

# Install all dependencies of the current project.
COPY package.json yarn.lock ./
RUN yarn install

# Copy all local files into the image.
COPY . .

# Build for production.
RUN yarn build
