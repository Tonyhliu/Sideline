class Api::SessionsController < ApplicationController
  def create
    # debugger
    # cloud_name = ENV['CLOUD_NAME']
    # upload_preset = Figaro.env.UPLOAD_PRESET
    # puts "API KEYS: #{cloud_name} #{upload_preset}"

    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      render(
        json: {
          base: ["Invalid username or password!"]
        },
        status: 401
      )
		end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render(
        json: {
          base: ["Nobdy signed in"]
        },
        status: 404
        )
    end
  end
end
