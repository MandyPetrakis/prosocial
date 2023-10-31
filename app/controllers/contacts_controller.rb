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
    Contact.transaction do 
        contact = user.contacts.create!(contact_params)
        params[:phone_numbers].each do |p|
            create_contact_phone_number(contact, p)
        end
        render json: contact, status: :created
    end
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
    params.permit(:user_id, :relationship, :company, :industry, :first_name, :last_name, :occupation, :email, :company, :phone_numbers)
end

def create_contact_phone_number (current_contact, p)
    current_contact.contact_phone_numbers.create!(phone_number: p[:phone_number], phone_number_type: p[:phone_number_type], contact_id: current_contact.id)
end 

end
