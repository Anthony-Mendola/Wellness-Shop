class ItemsController < ApplicationController

  def index
    @items = Item.all.where(sold_out: false)
    render json: @items 
  end

  def show
    @item = Item.find(params[:id])
    render json: @item
  end
end
