require 'rails'

module Infinitescrolling
  module Generators
    class InstallGenerator < ::Rails::Generators::Base

      desc "This generator installs the infinite scrolling jQuery plugin"
      source_root File.expand_path('../../../../../vendor/assets/javascripts', __FILE__)

      def copy_infinitescrolling
        say_status("copying", "infinite scrolling jQuery plugin", :green)
        copy_file "infinitescrolling.js", "public/javascripts/infinitescrolling.js"
      end
    end
  end
end