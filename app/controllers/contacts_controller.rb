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
        contact = user.contacts.create!(first_name: params[:first_name], last_name: params[:last_name], occupation: params[:occupation], company: params[:company], relationship: params[:relationship], email: params[:email])

        # params[:tags].each do |t|
        #     tag = Tag.find_by(description: t[:description])
        #     if tag 
        #         contact_tag = contact.contacts_tags.create!(tag_id: tag[:id]) 
        #     else 
        #         new_tag = user.tags.create!(tag_type: t[:tag_type], description: t[:description])
        #         contact_tag = contact.contacts_tags.create!(tag_id: new_tag[:id]) 
        #     end
        # end

        params[:phone_numbers] ? params[:phone_numbers].each do |p|
            contact.contact_phone_numbers.create!(phone_number: p[:phone_number], phone_number_type: p[:phone_number_type])
        end : null

        params[:socials] ? params[:socials].each do |s|
            contact.contact_socials.create!(url: s[:url], social_type: s[:social_type] )
        end : null
        render json: contact, status: :created
    end
end

def update
    user = User.find(session[:user_id])

    Contact.transaction do
        contact = Contact.find(params[:id])

        contact.update!(first_name: params[:first_name], last_name: params[:last_name], occupation: params[:occupation], company: params[:company], relationship: params[:relationship], email: params[:email])

        params[:phone_numbers].length > 0 ? params[:phone_numbers].each do |p|
            phone_number = ContactPhoneNumber.find_by(id: p[:id])
            if !phone_number && p[:phone_number] != ""
                contact.contact_phone_numbers.create!(phone_number: p[:phone_number], phone_number_type: p[:phone_number_type])
            elsif phone_number && p[:deleted] == "true" 
                phone_number.destroy
            elsif phone_number[:phone_number] != p[:phone_number] || phone_number[:phone_type] != p[:phone_type]
                phone_number.update!(phone_number: p[:phone_number], phone_number_type: p[:phone_number_type])
            else return
            end
        end : null

    end
end

def destroy 
    contact = Contact.find(params[:id])
    contact.destroy
    contacts = User.find(session[:user_id]).contacts
    render json:contacts
end

private 

def contact_params
    params.permit(:user_id, :relationship, :company, :industry, :first_name, :last_name, :occupation, :email, :company, :phone_numbers, :tags, :socials)
end

end
