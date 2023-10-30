class ContactsController < ApplicationController
  
def index
    if session[:user_id]
        user = User.find(session[:user_id])
        contacts = user.contacts
        render json: contacts, include: :tags
    else   
render json: [error: "Not Authorized"], status: :unauthorized 
    end

end

def show
    contact = Contact.find(params[:id])
    render json: contact
end

def create 
    user = User.find(session[:user_id])
    contact = user.contacts.create!(contact_params)
    render json: contact, status: :created
end

def update
    contact = Contact.find(params[:id])
    contact.update!(contact_params)
    render json: contact, status: :ok
end

def destroy 
    contact = Contact.find(params[:id])
    contact.destroy
    contacts = User.find(session[:user_id]).contacts
    render json:contacts
end

private 

def contact_params
    params.permit(:user_id, :relationship, :company, :industry, :last_interaction, :follow_up_cadence, :first_name, :last_name, :occupation, :email, :company, :occupation)
end

end
