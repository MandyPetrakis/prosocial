class UsersController < ApplicationController

def index
    users = User.all
    render json: users
end

def show 
    user = User.find(params[:id])
    render json: user
end

def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
end

def update
    user = User.find(params[:id])
    user.update!(user_params)
    render json: user, status: :ok
end

def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content
end

def email
    user = User.find_by!(params[:email])
    render json: user, status: :ok
end

def logged_in
    user = User.find_by(id: session[:user_id])
    if user
        render json: user, status: :ok
    else 
        render json: {error: "Not authorized"}, status: :unauthorized
    end
end

private


def user_params
    params.permit(:email, :first_name, :last_name, :address, :company, :phone_number, :password, :password_confirmation, :id)
end


end
