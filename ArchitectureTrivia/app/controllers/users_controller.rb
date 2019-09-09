class UsersController < ApplicationController

    def new 
        @user = User.new
    end 

    # def create 
    #     @user = User.new(user_info)
    #     @user.save 
    #     redirect_to: index 
    # end 

    # private 

    # def user_info
    # end 

end
