class Api::PhotographersController < ApplicationController

  def index
    render json: Photographer.all.to_json( only: [:name, :phone, :category, :insta, :email], methods: :img_url )
  end

  def show
    render json: @photographer
  end

  def create
    photographer = Photographer.create(name: params[:name], insta: params[:insta], email: params[:email], phone: params[:phone], category: params[:category], img: params[:img])
    render json: photographer
  end

  def update
    if @photographer.update(photographer_params)
      render json: @photographer
    else
      render json: { errors: @photographer.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    Photographer.find(params[:id]).destroy
  end

  private

    def photographer_params
      params.require(:name, :phone, :category, :email, :img, :insta )
    end


end
