class OrderSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :address, :total, :email
end
