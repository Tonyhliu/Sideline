class Api::StoriesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def create
    @story = Story.create!(story_params)
    render :show
  end

  def show
    @story = Story.find(params[:id])
  end

  def index
    # @stories = Story.all
    # render :index

    # @stories = Story.where(search_params)
    # debugger
    if params[:query] && !params[:query].empty?
      query = "%" + params[:query] + "%"
      # LOWERCASE title & body
      @stories = Story.where('title LIKE ? OR body LIKE ?', query, query)
    else
      @stories = Story.all
    end
  end

  def update
    @story = Story.find(params[:id])
    if @story.update(story_params)
      render :show
    end
  end

  def destroy
    @story = Story.find(params[:id])
    @story.destroy
    render :show
  end

  private

  def story_params
    params.require(:story).permit(:title, :body, :user_id)
  end

  def search_params
    # debugger
    params.permit(:query)
  end
end
