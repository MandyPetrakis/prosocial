class TagsController < ApplicationController
    before_action :authorize


    def index
        tags = Tag.all
        render json: tags
    end
    
    def show
        tag = Tag.find(params[:id])
        render json: tag
    end
    
    def create 
        user = User.find(session[:user_id])
        tag = user.tags.create!(tag_params)
        render json: user.tags, status: :created
    end
    
    def update
        tag = Tag.find(params[:id])
        tag.update!(tag_params)
        render json: tag, status: :ok
    end
    
    def destroy 
        tag = Tag.find(params[:id])
        tag.destroy
        user = User.find(session[:user_id])
        tags = user.user_tags
        render json: tags
    end
    
    private 
    

    def authorize
        if params[:id]
        tag = Tag.find(params[:id])
        return render json: [error: "Not Authorized"], status: :unauthorized unless session[:user_id] === tag.user_id
        end
    end



    def tag_params
        params.permit(:id, :description, :user_id)
    end
    
end
