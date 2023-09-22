class ImportantDatesController < ApplicationController

    def index
        important_dates = ImportantDate.all
        render json: important_dates
    end
    
    def show
        important_date = ImportantDate.find(params[:id])
        render json: important_date
    end
    
    def create 
        important_date = ImportantDate.create!(important_date_params)
        render json: important_date, status: :created
    end
    
    def update
        important_date = ImportantDate.find(params[:id])
        important_date.update!(important_date_params)
        render json: important_date, status: :ok
    end
    
    def destroy 
        important_date = ImportantDate.find(params[:id])
        important_date.destroy
        head :no_content
    end
    
    private 
    
    def important_date_params
        params.permit(:user_id, :type, :contact_id, :date)
    end
    
end
