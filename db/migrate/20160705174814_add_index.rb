class AddIndex < ActiveRecord::Migration
  def change
    add_index :favorites, [:user_id, :story_id], unique: true
  end
end
