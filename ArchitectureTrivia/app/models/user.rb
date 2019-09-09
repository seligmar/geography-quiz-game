class User < ApplicationRecord
    has_many :games 
    belongs_to: high_score
end
