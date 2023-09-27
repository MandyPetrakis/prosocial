class ContactPhoneNumbersController < ApplicationController

    def index
        contact_phone_numbers = ContactPhoneNumber.all
        render json: contact_phone_numbers
    end
    
    def show
        contact_phone_number = ContactPhoneNumber.find(params[:id])
        render json: contact_phone_number
    end
    
    def create 
        contact_phone_number = ContactPhoneNumber.create!(contact_phone_number_params)
        render json: contact_phone_number, status: :created
    end
    
    def update
        contact_phone_number = ContactPhoneNumber.find(params[:id])
        contact_phone_number.update!(contact_phone_number_params)
        render json: contact_phone_number, status: :ok
    end
    
    def destroy 
        contact_phone_number = ContactPhoneNumber.find(params[:id])
        contact_phone_number.destroy
        head :no_content
    end
    
    private 
    
    def contact_phone_number_params
        params.permit(:contact_id, :phone_number, :phone_number_type)
    end
    
end


