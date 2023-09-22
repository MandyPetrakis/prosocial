class ContactsBridgesController < ApplicationController

    def index
        contacts_bridges = ContactsBridge.all
        render json: contacts_bridges
    end
    
    def show
        contact_bridge = ContactsBridge.find(params[:id])
        render json: contact_bridge
    end
    
    def create 
        contact_bridge = ContactsBridge.create!(contact_bridge_params)
        render json: contact_bridge, status: :created
    end
    
    def update
        contact_bridge = ContactsBridge.find(params[:id])
        contact_bridge.update!(contact_bridge_params)
        render json: contact_bridge, status: :ok
    end
    
    def destroy 
        contact_bridge = ContactsBridge.find(params[:id])
        contact_bridge.destroy
        head :no_content
    end
    
    private 
    
    def contact_bridge_params
        params.permit(:contact_id1, :contact_id2)
    end
    
end
