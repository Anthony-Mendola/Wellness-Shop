Rails.application.routes.draw do

  scope '/api' do
    get 'items' => 'items#index'
    get 'items/:id' => 'items#show'
    post 'users' => 'users#create'
    post 'users/:id' => 'users#update'
    post 'sessions' => 'sessions#create'
    post 'cart_items' => 'cart_items#create'
    post 'cart_items/:cart_id/:item_id' => 'cart_items#destroy'
    post 'carts/:id' => 'carts#update'
    post 'items/:id' => 'items#update'
  end




  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
