class RemovePenNameFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :pen_name
  end
end
