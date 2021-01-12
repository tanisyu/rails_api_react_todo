require 'factory_bot'

table_names = %w(
  task
)

table_names.each do | table_name |
  FactoryBot.create_list(table_name, 10)
end
