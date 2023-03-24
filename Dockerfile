FROM node:16.18

ENV PORT=3000

COPY . /bookapp-react-js
WORKDIR /bookapp-react-js
RUN npm install
EXPOSE ${PORT}
CMD ["npm", "start"]
