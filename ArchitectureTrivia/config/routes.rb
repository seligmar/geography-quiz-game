Rails.application.routes.draw do 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/questions", to: "questions#index", as: "questions" 
  get "/questions/:id", to: "questions#show", as: "question"

  
  get "/users", to: "user#index", as: "users"
  get "/users", to: "user#new", as: "new_user" 
  post "/users", to: "user#create" 

end
