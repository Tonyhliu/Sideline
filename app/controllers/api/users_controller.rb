class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "/api/users/show"
    else
      render json: @user.errors, status: 422
    end
  end
  
  # implement destroy for user

  private

  def user_params
    params.require(:user).permit(:password, :username)
  end
end
