

# frozen_string_literal: true

# While global constants are bad, many 3rd party tools depend on this one (e.g
# rspec-rails & cucumber-rails). So a deprecation warning is needed if we want
# to remove it.
STATS_DIRECTORIES ||= [
  %w(Controllers        app/controllers),

  %w(Models             app/models),




  %w(Libraries          lib/),
  %w(APIs               app/apis),
  %w(Controller\ tests  spec/requests),

  %w(Model\ tests       spec/models),

].collect do |name, dir|
  [ name, "#{File.dirname(Rake.application.rakefile_location)}/#{dir}" ]
end.select { |name, dir| File.directory?(dir) }

desc "Report code statistics (KLOCs, etc) from the application or engine"
task :coverage do
  require "rails/code_statistics"
  CodeStatistics.new(*STATS_DIRECTORIES).to_s
end