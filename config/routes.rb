Rails.application.routes.draw do
  get 'pages/home'
  root 'pages#home'

  post 'search/maps', to: 'pages#search'
  get 'maps' => "maps#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
