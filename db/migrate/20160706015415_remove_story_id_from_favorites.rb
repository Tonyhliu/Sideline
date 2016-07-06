class RemoveStoryIdFromFavorites < ActiveRecord::Migration
  def change
    remove_index :favorites, :story_id
  end
end
