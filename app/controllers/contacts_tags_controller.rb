class ContactsTagsController < ApplicationController

    def index
        contacts_tags = ContactsTag.all
        render json: contacts_tags
    end
    
    def show
        contacts_tag = ContactsTag.find(params[:id])
        render json: contacts_tag
    end
    
    def create 
        contacts_tag = ContactsTag.create!(contacts_tag_params)
        render json: contacts_tag, status: :created
    end
    
    def update
        contacts_tag = ContactsTag.find(params[:id])
        contacts_tag.update!(contacts_tag_params)
        render json: contacts_tag, status: :ok
    end
    
    def destroy 
        contacts_tag = ContactsTag.find(params[:id])
        contacts_tag.destroy
        head :no_content
    end
    
    private 
    
    def contacts_tag_params
        params.permit(:tag_id, :contact_id)
    end
    
end
