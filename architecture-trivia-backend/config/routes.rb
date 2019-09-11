Rails.application.routes.draw do

  get "/questions", to: "questions#index", as: "questions" 
  get "/questions/:id", to: "questions#show", as: "question"

  get "/users", to: "users#index" 
  get "/users/:id", to: "users#show"
  patch "/users/:id", to: "users#update"
  post "/users", to: "users#create"

end
