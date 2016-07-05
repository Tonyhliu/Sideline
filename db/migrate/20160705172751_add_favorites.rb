class AddFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :story_id, null: false

      t.timestamps null: false
    end

    add_index :favorites, :user_id, unique: true
    add_index :favorites, :story_id, unique: true
  end
end
