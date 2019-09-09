class QuestionsController < ApplicationController

    def index 
        @questions = Question.all 
        render json: @uestions
    end 

end
