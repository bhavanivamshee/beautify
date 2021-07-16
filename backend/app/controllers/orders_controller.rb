class OrdersController < ApplicationController
    def create
        items = get_products
        order = Order.create(
            name: params[:name],
            address: params[:address],
            phone: params[:phone],
            email: params[:email],
            total: params[:total]
        )
        items.each do |item|
            order.products << item
        end
        if order.valid?
            render json: order, include: [items: {except: [:created_at, :updated_at]}]
        else
            render json: order.errors.full_messages, status: :unprocessable_entity
        end
    end


    def destroy
        order = Order.find_by(id: params[:id].to_i);
        if order.destroy
            render json: {status: :ok}
        else
            render json: {status: :unprocessable_entity}
        end
    end


    private


    def get_products
        products = params[:items].map do |product|
            p = Product.find(product[:id])
            p
        end
        return products
    end
end
