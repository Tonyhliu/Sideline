class RemoveIndex < ActiveRecord::Migration
  def change
    remove_index :favorites, :user_id
  end
end
