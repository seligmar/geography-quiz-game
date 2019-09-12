class Game < ApplicationRecord
    belongs_to :user 

    def self.top_10_scores
        self.all{|game| game.score}.sort().slice(0, 10)
    end 

    def self.leaderboard
        self.top_10_scores.map{|game| {user: game.user.name, score: game.score}}
    end

end
