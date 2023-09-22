class InteractionsController < ApplicationController

    def index
        interactions = Interaction.all
        render json: interactions
    end
    
    def show
        interaction = Interaction.find(params[:id])
        render json: interaction
    end
    
    def create 
        interaction = Interaction.create!(interaction_params)
        render json: interaction, status: :created
    end
    
    def update
        interaction = Interaction.find(params[:id])
        interaction.update!(interaction_params)
        render json: interaction, status: :ok
    end
    
    def destroy 
        interaction = Interaction.find(params[:id])
        interaction.destroy
        head :no_content
    end
    
    private 
    
    def interaction_params
        params.permit(:type, :user_id, :contact_id, :date, :note_id)
    end
    
end
