class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :body, null: false, default: ""

      t.timestamps null: false
    end
  end
end
