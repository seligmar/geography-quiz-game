class GamesController < ApplicationController

    def index 
        @games = Game.all 
        render json: @games
    end 

    def show 
        @game = Game.find(params[:id])
        render json: @game
    end 


    def create 
        @game = Game.new(game_params)
        @game.save 
        render json: @game
    end 

    def leaderboard
        leaderboard = Game.leaderboard
        render json: leaderboard
    end

    def edit
    end 

    def update 
        @game = Game.find(params[:id])
        @game.update(game_params)
        render json: @game

    end 

    private 

    def game_params
        params.require(:game).permit(:user_id, :score)
    end 
end 

