FROM ubuntu
MAINTAINER Greg Linscheid linscheid.greg@gmail.com

RUN apt-get update

RUN apt-get install -y nodejs
RUN apt-get install -y python

COPY . /greg_linscheid

ENV PYTHONPATH /greg_linscheid/
ENV LOGLEVEL INFO

EXPOSE 8000

CMD python /greg_linscheid/run.py -p 8000
