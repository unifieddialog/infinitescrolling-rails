# Configure Rails 3.0 to use public/javascripts/infinite_scrolling.js
module Infinitescrolling
  module Rails

    class Railtie < ::Rails::Railtie
      config.before_configuration do
        config.action_view.javascript_expansions[:defaults] << 'infinitescrolling.js'
      end
    end

  end
end