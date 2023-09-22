class ContactSocialsController < ApplicationController

def index
    contact_socials = ContactSocial.all
    render json: contact_socials
end

def show
    contact_social = ContactSocial.find(params[:id])
    render json: contact_social
end

def create 
    contact_social = ContactSocial.create!(contact_social_params)
    render json: contact_social, status: :created
end

def update
    contact_social = ContactSocial.find(params[:id])
    contact_social.update!(contact_social_params)
    render json: contact_social, status: :ok
end

def destroy 
    contact_social = ContactSocial.find(params[:id])
    contact_social.destroy
    head :no_content
end

private 

def contact_social_params
    params.permit(:url, :type, :contact_id)
end


end
