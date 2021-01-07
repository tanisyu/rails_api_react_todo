class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :detail
      t.boolean :is_done
      t.datetime :done_at

      t.timestamps
    end
  end
end
