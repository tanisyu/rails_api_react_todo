FROM ruby:2.7.1

RUN apt-get update && apt-get install -y nodejs postgresql-client

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./

RUN bundle install

CMD ["irb"]
