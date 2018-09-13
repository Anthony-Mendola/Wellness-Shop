class CartsController < ApplicationController

  def show
    @cart = Cart.find(params[:id])
    render json: @cart
  end

  def update
    @cart = Cart.find(params[:id])
    @cart.items.each do |item|
      item.sold_out = true #item becomes sold out after checkout
      item.save
    end
    @cart.items.clear
    render json: @cart, status: 201
  end

  def cart_params
    params.permit(:cart_id)
  end

end
