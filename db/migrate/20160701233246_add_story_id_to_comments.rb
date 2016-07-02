class AddStoryIdToComments < ActiveRecord::Migration
  def change
    add_column :comments, :story_id, :integer, null: false
    add_index :comments, :story_id
  end
end
