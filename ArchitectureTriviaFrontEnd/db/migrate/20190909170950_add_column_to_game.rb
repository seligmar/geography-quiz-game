class AddColumnToGame < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :question1_id, :integer
    add_column :games, :question2_id, :integer
    add_column :games, :question3_id, :integer
    add_column :games, :question4_id, :integer
    add_column :games, :question5_id, :integer
    add_column :games, :question6_id, :integer
    add_column :games, :question7_id, :integer
    add_column :games, :question8_id, :integer
    add_column :games, :question9_id, :integer
    add_column :games, :question10_id, :integer
  end
end
