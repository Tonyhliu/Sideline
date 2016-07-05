class Api::FavoritesController < ApplicationController
  def create
    @favorite = Favorite.new(
      user_id: current_user.id,
      story_id: favorites_params[:story_id]
    )

    if (@favorite.save)
      render 'api/favorites/show', status: 200
    else
      render @favorites.errors, status: 422
    end
  end

  def destroy
    @favorite = Favorite.find_by(
      user_id: current_user.id,
      story_id: favorites_params[:story_id]
    )

    if (@favorite.destroy)
      render 'api/favorites/show', status: 200
    else
      render @favorites.errors, status: 422
    end
  end

  private
  def favorites_params
    params.require(:favorite).permit(:story_id)
  end
end
