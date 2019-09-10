Rails.application.routes.draw do

  get "/questions", to: "questions#index", as: "questions" 
  get "/questions/:id", to: "questions#show", as: "question"

  get "/users", to: "users#index" 
  post "/users", to: "users#create"

end
