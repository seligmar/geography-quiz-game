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

    def update 
        @game = Game.update(game_params)
        render json: @game
    end 

    private 

    def game_params
        params.require(:game).permit(:user_id, :score)
    end 
end 

