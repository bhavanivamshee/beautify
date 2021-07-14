class AddOrderProductsTableBack < ActiveRecord::Migration[6.1]
  def change
    create_table :order_products do |t|
      t.belongs_to :order, null: true
      t.belongs_to :product, null: true

      t.timestamps
    end
  end
end

