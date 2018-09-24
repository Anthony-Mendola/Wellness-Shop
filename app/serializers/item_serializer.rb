class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_full, :img_thumbnail, :description, :price, :likes, :sold_out
end
