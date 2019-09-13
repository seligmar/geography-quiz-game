class Game < ApplicationRecord
    belongs_to :user 

    def self.top_10_scores
        self.all{|game| game.score}.sort().slice(0, 10)
        #  self.all.{|game| game.score}.sort_by(&:score).slice(0, 10)
    end 

    def self.sort_by_score
        self.top_10_scores.sort_by { |k| k["score"] }.reverse
    end 

    def self.leaderboard
        self.sort_by_score.map{|game| {user: game.user.name, score: game.score}}
    end

end
