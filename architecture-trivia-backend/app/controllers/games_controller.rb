class GamesController < ApplicationController

    def index 
        @games = Game.all 
        render json: @games
    end 

    def create 
        @game = Game.new(game_params)
        @game.save 
        render json: @game
    end 

    private 

    def user_params
        params.require(:game).permit(:user, :score)
    end 
end 

