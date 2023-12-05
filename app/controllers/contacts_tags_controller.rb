class ContactsTagsController < ApplicationController
    before_action :authorize

    def index
        contacts_tags = ContactsTag.find_by(user_id: sessions[:id])
        render json: contacts_tags
    end
    
    def show
        contacts_tag = ContactsTag.find(params[:id])
        render json: contacts_tag
    end
    
    def create 
        contacts_tag = ContactsTag.create!(contacts_tag_params)
        tag = Tag.find(contacts_tag[:tag_id])
        render json: tag, status: :created
    end
    
    def update
        contacts_tag = ContactsTag.find(params[:id])
        contacts_tag.update!(contacts_tag_params)
        render json: contacts_tag, status: :ok
    end
    
    def destroy 
        contacts_tag = ContactsTag.find(params[:id])
        contacts_tag.destroy
        user = User.find(session[:user_id])
        contacts = user.contacts
        render json: contacts, include: :tags
    end
    
    private 

    def authorize
        if params[:user_id]
        return render json: [error: "Not Authorized"], status: :unauthorized unless session[:user_id] === params[:user_id]
        else  
        contact_tag = ContactsTag.find(params[:id])
        return render json: [error: "Not Authorized"], status: :unauthorized unless session[:user_id] === contact_tag.user_id
        end
    end
    
    def contacts_tag_params
        params.permit(:tag_id, :contact_id, :user_id)
    end
    
end
