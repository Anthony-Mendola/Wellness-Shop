class ItemSpecsSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_thumbnail, :price, :sold_out
end
