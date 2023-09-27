class ContactNotesController < ApplicationController

    def index
        notes = ContactNote.all
        render json: notes
    end
    
    def show
        note = ContactNote.find(params[:id])
        render json: note
    end
    
    def create 
        note = ContactNote.create!(note_params)
        render json: note, status: :created
    end
    
    def update
        note = ContactNote.find(params[:id])
        note.update!(note_params)
        render json: note, status: :ok
    end
    
    def destroy 
        note = ContactNote.find(params[:id])
        note.destroy
        head :no_content
    end
    
    private 
    
    def note_params
        params.permit(:user_id, :contact_id, :pinned, :header, :type, :prompt, :body)
    end
    
end
