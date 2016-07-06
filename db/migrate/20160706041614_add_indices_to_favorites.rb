class AddIndicesToFavorites < ActiveRecord::Migration
  def change
    add_index :favorites, :user_id
    add_index :favorites, :story_id
  end
end
