Rails.application.routes.draw do 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/questions", to: "questions#index", as: "questions" 
  get "/questions/:id", to: "questions#show", as: "question"

  
  get "/users", to: "users#index" 
  # get "/users", to: "users#new"
  post "/users", to: "users#create" 

end
