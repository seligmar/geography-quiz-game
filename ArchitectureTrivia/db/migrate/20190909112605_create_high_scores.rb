class CreateHighScores < ActiveRecord::Migration[5.2]
  def change
    create_table :high_scores do |t|
      t.integer :top_user_id
      t.integer :highest_score

      t.timestamps
    end
  end
end
