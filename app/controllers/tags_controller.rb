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
    

    def authorize
        if params[:user_id]
        return render json: [error: "Not Authorized"], status: :unauthorized unless session[:user_id] === params[:user_id]
        else  
        tag = Tag.find(params[:id])
        return render json: [error: "Not Authorized"], status: :unauthorized unless session[:user_id] === tag.user_id
        end
    end



    def tag_params
        params.permit(:id, :description, :user_id)
    end
    
end
