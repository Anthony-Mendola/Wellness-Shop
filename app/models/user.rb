class User < ApplicationRecord
  has_one :cart
  has_secure_password



#users are initialized with a cart
  def self.new_with_cart(params)
    user = User.new(params)
    user.build_cart
    user
  end
end
