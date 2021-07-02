class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.integer :item_count
      t.float :total_price

      t.timestamps
    end
  end
end
