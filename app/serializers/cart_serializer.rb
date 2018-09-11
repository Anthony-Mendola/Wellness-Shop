class CartSerializer < ActiveModel::Serializer
  attributes :id
  has_many :items, serializer: ItemSpecsSerializer
end
