Rails.application.routes.draw do

  resources :carts
  resources :users
  resources :items
  scope '/api' do
    get :items, to: 'items#index'
  end




  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
