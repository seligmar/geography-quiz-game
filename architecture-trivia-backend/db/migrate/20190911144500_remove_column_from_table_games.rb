class RemoveColumnFromTableGames < ActiveRecord::Migration[5.2]
  def change
    remove_column :games, :user_name, :string
  end
end
