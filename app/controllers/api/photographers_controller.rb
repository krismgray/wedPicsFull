class Api::PhotographersController < ApplicationController

  def index
    render json: Photographer.all.to_json( only: [:name, :phone, :category, :insta], methods: :img_url )
  end

  def show
    render json: @photographer
  end

  def create
    attrs = params.permit(:name, :insta, :img, :phone, :category)
    photographer = Photographer.new(attrs)

    if photographer.save
      render json: {
        id: photographer.id,
        name: photographer.name,
        phone: photographer.phone,
        insta: photographer.insta,
        img_url: photographer.img.url,
        category: photographer.category,
      }
    else
      render json: { errors: photographer.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @photographer.update(photographer_params)
      render json: @photographer
    else
      render json: { errors: @photographer.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    Photographer.find(params.permit[:id]).destroy
  end

  private

    def photographer_params
      params.require(:photographer).permit(:name, :phone, :price, :category, :email, :img, :insta, :id )
    end


end
