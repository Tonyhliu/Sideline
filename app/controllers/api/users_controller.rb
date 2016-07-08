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

  def update
    # @user = User.find(params[:id])
    @user = current_user
    if @user.update(user_params)
      render :show
    end
  end

  # implement destroy for user

  private

  def user_params
    params.require(:user).permit(:password, :username, :avatar_url)
  end
end
