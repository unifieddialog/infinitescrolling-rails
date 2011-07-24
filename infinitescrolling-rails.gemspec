# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name        = "infinitescrolling-rails"
  s.version     = "0.1.1"
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["Leif Bladt"]
  s.email       = ["leif.bladt@gmx.de"]
  s.homepage    = "https://github.com/leifbladt/infinite_scrolling-rails"
  s.summary     = "Use the infinite scrolling jQuery plugin with Rails 3"
  s.description = "This gem provides the infinite scrolling jQuery plugin for your Rails 3 application."

  s.required_rubygems_version = ">= 1.3.6"

  s.add_dependency "railties", "~> 3.0"
  s.add_dependency "jquery-rails"
  s.add_development_dependency "bundler", "~> 1.0.0"
  s.add_development_dependency "rails",   "~> 3.0"

  s.files        = `git ls-files`.split("\n")
  s.executables  = `git ls-files`.split("\n").select{|f| f =~ /^bin/}
  s.require_path = 'lib'
end