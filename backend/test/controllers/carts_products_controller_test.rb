require "test_helper"

class CartsProductsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @carts_product = carts_products(:one)
  end

  test "should get index" do
    get carts_products_url, as: :json
    assert_response :success
  end

  test "should create carts_product" do
    assert_difference('CartsProduct.count') do
      post carts_products_url, params: { carts_product: { cart_id: @carts_product.cart_id, product_id: @carts_product.product_id } }, as: :json
    end

    assert_response 201
  end

  test "should show carts_product" do
    get carts_product_url(@carts_product), as: :json
    assert_response :success
  end

  test "should update carts_product" do
    patch carts_product_url(@carts_product), params: { carts_product: { cart_id: @carts_product.cart_id, product_id: @carts_product.product_id } }, as: :json
    assert_response 200
  end

  test "should destroy carts_product" do
    assert_difference('CartsProduct.count', -1) do
      delete carts_product_url(@carts_product), as: :json
    end

    assert_response 204
  end
end
