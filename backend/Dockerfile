# The image we will be pulling from dockerhub ... its a very simple "machine"
FROM alpine:3.21 

# We need to install node and npm in this "machine" 
RUN apk add --no-cache nodejs npm

# We wll be creating and entering the folder app
WORKDIR /app

# We are going to copy everything that is in out folder locally and paste it into the app folder inside the container
# is it goinf to copy the node modules, .env, in others words, the files that are in the .gitignore?
COPY . .

# i use the comand below if i want to runt without -it
# CMD [ "npm", "run", "dev" ]

# Its not necessary, but its a good practice
EXPOSE 5000

# to create the image
  # $ docker build -t henriqueannicchino/node:latest .

# to run the container with the image
  # docker run --rm -it -p 5000:5000 henriqueannicchino/node

# npm run dev inside the container