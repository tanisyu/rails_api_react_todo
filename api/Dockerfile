FROM ruby:2.7.1

RUN apt-get update && apt-get install -y nodejs postgresql-client

WORKDIR /usr/src/app
COPY Gemfile Gemfile.lock ./
RUN bundle install
COPY . ./

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
