class RemoveColumnFromQuestions < ActiveRecord::Migration[5.2]
  def change
    remove_column :questions, :location, :string
  end
end
