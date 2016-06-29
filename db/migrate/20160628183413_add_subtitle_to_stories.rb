class AddSubtitleToStories < ActiveRecord::Migration
  def change
    add_column :stories, :subtitle, :string
  end
end
