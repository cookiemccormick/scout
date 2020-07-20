Rails.application.routes.draw do
  default_url_options host: "localhost", port: 3000

  namespace :api do
    namespace :v1 do
      resources :models do
        resources :bookings
      end
    end
  end
end