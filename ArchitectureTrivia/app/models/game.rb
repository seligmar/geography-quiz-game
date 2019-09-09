class Game < ApplicationRecord
    belongs_to :user 
    belongs_to :high_score
    has_many :questions 
end
