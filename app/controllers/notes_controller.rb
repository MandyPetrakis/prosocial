class NotesController < ApplicationController

    def index
        notes = Note.all
        render json: notes
    end
    
    def show
        note = Note.find(params[:id])
        render json: note
    end
    
    def create 
        note = Note.create!(note_params)
        render json: note, status: :created
    end
    
    def update
        note = Note.find(params[:id])
        note.update!(note_params)
        render json: note, status: :ok
    end
    
    def destroy 
        note = Note.find(params[:id])
        note.destroy
        head :no_content
    end
    
    private 
    
    def note_params
        params.permit(:user_id, :contact_id, :pinned, :header, :type, :prompt, :body)
    end
    
end
