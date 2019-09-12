Rails.application.routes.draw do

  get "/questions", to: "questions#index", as: "questions" 
  get "/questions/:id", to: "questions#show", as: "question"

  get "/users", to: "users#index" 
  get "/users/:id", to: "users#show"
  patch "/users/:id", to: "users#update"
  post "/users", to: "users#create"

  get "/games", to: "games#index"
  get '/games/leaderboard', to: 'games#leaderboard'
  get "/games/:id", to: "games#show"
  get "/games/:id/edit", to: "games#edit"
  post "/games", to: "games#create"
  patch "/games/:id", to: "games#update"


end
