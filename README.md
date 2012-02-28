# Usage (Rails 3.1) #
1. Include the gem in your `Gemfile`:

  ```gem 'infinitescrolling-rails'```

2. Include in your `application.js`

  ```//= require infinitescrolling```

# Release new gem #
1. Update version

  - Update version string in `infinitescrolling-rails.gemspec`
  - `bundle install`
  - Commit "Bump version x.y.z"

2. Publish gem

  - `rake release`
