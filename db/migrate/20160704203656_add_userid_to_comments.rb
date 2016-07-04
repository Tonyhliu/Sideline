class AddUseridToComments < ActiveRecord::Migration
  def change
    add_column :comments, :user_id, :integer, default: 2, null: false
    add_index :comments, :user_id
  end
end
