class CartsProductsController < ApplicationController
  before_action :set_carts_product, only: [:show, :update, :destroy]

  # GET /carts_products
  def index
    @carts_products = CartsProduct.all

    render json: @carts_products
  end

  # GET /carts_products/1
  def show
    render json: @carts_product
  end

  # POST /carts_products
  def create
    @carts_product = CartsProduct.new(carts_product_params)

    if @carts_product.save
      render json: @carts_product, status: :created, location: @carts_product
    else
      render json: @carts_product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /carts_products/1
  def update
    if @carts_product.update(carts_product_params)
      render json: @carts_product
    else
      render json: @carts_product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /carts_products/1
  def destroy
    @carts_product.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_carts_product
      @carts_product = CartsProduct.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def carts_product_params
      params.require(:carts_product).permit(:cart_id, :product_id)
    end
end
