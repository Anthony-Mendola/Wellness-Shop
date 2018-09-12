class CartItemsController < ApplicationController

  def create
    @cart_item = CartItem.create(cart_item_params)
    @cart = Cart.find(@cart_item.cart_id)
    render json: @cart
  end

  def destroy
    @item = CartItem.find_by(cart_item_params)
    @item.destroy
    @cart = Cart.find(params[:cart_id])
    render json: @cart
  end

  private

  def cart_item_params
    params.permit(:cart_id, :item_id)
  end

end
