class ItemSpecsSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_thumbnail, :price, :likes, :sold_out
end
