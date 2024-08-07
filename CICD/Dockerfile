FROM node:18-bookworm-slim

WORKDIR /usr/src/app

COPY . .

WORKDIR fitQuest-frontend 

RUN npm install
RUN npm run build

FROM python:3.10.14-bookworm
RUN ls

COPY --from=0 . .
RUN ls

RUN pip install Django==5.0.6
RUN pip install "psycopg[binary]" 

WORKDIR /usr/src/app/fitQuest
RUN ls

EXPOSE 8080

ENTRYPOINT ["python"] 
CMD ["manage.py", "runserver", "0.0.0.0:8080"]
