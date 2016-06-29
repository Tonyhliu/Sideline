class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.integer :user_id, null: false
      t.string :title
      t.text :body, null: false
      t.boolean :published, default: false

      t.timestamps null: false
    end

    add_index :stories, :user_id
    add_index :stories, :title  
  end
end
