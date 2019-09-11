class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :img, :name, :answers, :correct_answer

  def answers
    to_shuffle = [object.answer1, object.answer2, object.answer3, object.correct_answer]
    to_shuffle.shuffle 
  end
end
