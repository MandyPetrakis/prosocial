class TagsController < ApplicationController

    def index
        tags = Tag.all
        render json: tags
    end
    
    def show
        tag = Tag.find(params[:id])
        render json: tag
    end
    
    def create 
        tag = Tag.create!(tag_params)
        render json: tag, status: :created
    end
    
    def update
        tag = Tag.find(params[:id])
        tag.update!(tag_params)
        render json: tag, status: :ok
    end
    
    def destroy 
        tag = Tag.find(params[:id])
        tag.destroy
        head :no_content
    end
    
    private 
    
    def tag_params
        params.permit(:user_id, :description, :type)
    end
    
end
