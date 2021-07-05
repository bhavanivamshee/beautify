class OrdersController < ApplicationController
    def create
        products = get_products
        order = Order.create(
            name: params[:name],
            address: params[:address],
            phone: params[:phone],
            email: params[:email],
            total: params[:total],
            products: products
        )
        if order.valid?
            render json: order, include: [products: {except: [:created_at, :updated_at]}] 
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
        products = params[:products].map do |product|
            i = Product.find(product[:id])
            i.quantity = product[:quantity]
            i
        end
        return products
    end
end
