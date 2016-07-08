class AddAvatarUrlToUsers < ActiveRecord::Migration
  def change
    add_column :users, :avatar_url, :string, null: false, default: "http://res.cloudinary.com/dcbb8bnvk/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/profilepic_cty3ak.png"
  end
end
