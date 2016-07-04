class Api::CommentsController < ApplicationController
  before_action :require_logged_in

  def create
    comment = Comment.new(comment_params)
    if comment.save
      @story = comment.story
      render '/api/stories/show'
    else
      render json: comment, status: :unprocessable_entity
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :story_id, :user_id)
  end
end
