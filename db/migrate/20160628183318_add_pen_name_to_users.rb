class AddPenNameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :pen_name, :string
  end
end
