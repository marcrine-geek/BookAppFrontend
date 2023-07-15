FROM node:16-alpine

ENV PORT=3000

WORKDIR /bookapp-react-js
COPY . /bookapp-react-js
RUN npm run build
EXPOSE ${PORT}
CMD ["npm", "start"]
