class InteractionContactsController < ApplicationController

    def index
        interaction_contacts = InteractionContact.all
        render json: interaction_contacts
    end
    
    def show
        interaction_contact = InteractionContact.find(params[:id])
        render json: interaction_contact
    end
    
    def create 
        interaction_contact = InteractionContact.create!(interaction_contact_params)
        render json: interaction_contact, status: :created
    end
    
    def update
        interaction_contact = InteractionContact.find(params[:id])
        interaction_contact.update!(interaction_contact_params)
        render json: interaction_contact, status: :ok
    end
    
    def destroy 
        interaction_contact = InteractionContact.find(params[:id])
        interaction_contact.destroy
        head :no_content
    end
    
    private 
    
    def interaction_contact_params
        params.permit(:contact_id, :interaction_id)
    end
    
end
