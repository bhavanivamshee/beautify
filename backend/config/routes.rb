Rails.application.routes.draw do
  resources :order_products
  resources :orders, except: [:index]
  resources :carts_products
  resources :carts
  resources :products
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
