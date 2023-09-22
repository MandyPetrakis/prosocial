class RemindersController < ApplicationController

    def index
        reminders = Reminder.all
        render json: reminders
    end
    
    def show
        reminder = Reminder.find(params[:id])
        render json: reminder
    end
    
    def create 
        reminder = Reminder.create!(reminder_params)
        render json: reminder, status: :created
    end
    
    def update
        reminder = Reminder.find(params[:id])
        reminder.update!(reminder_params)
        render json: reminder, status: :ok
    end
    
    def destroy 
        reminder = Reminder.find(params[:id])
        reminder.destroy
        head :no_content
    end
    
    private 
    
    def reminder_params
        params.permit(:user_id, :contact_id, :description, :due_date, :date_id, :recurring, :recurring_cadence)
    end
    
end
