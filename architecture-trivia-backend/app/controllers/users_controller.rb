class UsersController < ApplicationController

    def index 
        @users = User.all 
        render json: @users
    end 

    def show 
        @user = User.find_by(params[:id]) 
        render json: @user
    end 

    def update 
        @user = User.find_by(params[:id]) 
        @user.update(user_params)
        render json: @user
    end 

    def new 
        @user = User.new
        render json: @user
    end 

    def create 
        @user = User.new(user_params)
        @user.save 
        render json: @user
    end 

    def leaderboard
        leaderboard = User.leaderboard

        render json: leaderboard
    end

    private 

    def user_params
        params.require(:user).permit(:name, :score)
    end 
end
