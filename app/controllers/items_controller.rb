class ItemsController < ApplicationController

  #only render items that are not sold out
  def index
    @items = Item.all.where(sold_out: false) 
    render json: @items, each_serializer: 
    ItemSpecsSerializer
  end

  def show
    @item = Item.find(params[:id])
    render json: @item
  end

  def update 
    @item = Item.find(params[:id])
    @item.update(like_params)
     # @item.save
      render json: @item
  end


def like_params
  params.require(:item).permit(:likes)
end

end

