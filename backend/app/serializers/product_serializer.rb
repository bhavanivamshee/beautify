class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :category, :product_image
end
