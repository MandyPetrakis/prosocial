source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.4"

gem 'bcrypt', '~> 3.1.13'

gem "rails", "~> 7.0.7", ">= 7.0.7.2"

gem 'rack-cors'

gem 'pg'

gem "puma", "~> 5.0"

gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

gem "bootsnap", require: false

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end

gem 'faker'

gem "prettier", "~> 4.0"

gem 'active_model_serializers'
