class ItemsController < ApplicationController

  def index
    @items = Item.all.where(sold_out: false)
    render json: @itemss, each_serializer: ItemSpecSerializer
  end

  def show
    @item = Item.find(params[:id])
    render json: @item
  end
end
