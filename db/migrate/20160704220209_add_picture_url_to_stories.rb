class AddPictureUrlToStories < ActiveRecord::Migration
  def change
    add_column :stories, :picture_url, :string
    remove_column :stories, :subtitle
  end
end
