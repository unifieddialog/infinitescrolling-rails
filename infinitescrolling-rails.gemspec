# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name        = "infinitescrolling-rails"
  s.version     = "0.2.0"
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["Leif Bladt"]
  s.email       = ["leif.bladt@gmx.de"]
  s.homepage    = "https://github.com/unifieddialog/infinitescrolling-rails"
  s.summary     = "Use the infinite scrolling jQuery plugin with Rails 3.1"
  s.description = "This gem provides the infinite scrolling jQuery plugin for your Rails 3.1 application."

  s.required_rubygems_version = ">= 1.3.6"

  s.add_dependency "railties", "> 3.1.0"
  s.add_dependency "jquery-rails"
  s.add_development_dependency "bundler", "~> 1.0"

  s.files        = `git ls-files`.split("\n")
  s.executables  = `git ls-files`.split("\n").select{|f| f =~ /^bin/}
  s.require_path = 'lib'
end
