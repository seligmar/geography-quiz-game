class Question < ApplicationRecord
    has_many :games 
    has_many :users, through: :games


    # indecies = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    # def randomize 
    #     num = indecies.sample 
    #     indecies = (indecies - num)
    #     return indecies 
    # end 

    # def show_random(n) 

    # end 

end


