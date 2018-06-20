class Api::VideographersController < ApplicationController
  before_action :set_videographer, only: [:show, :update, :destroy]

  def index
    render json: Videographer.all.to_json( only: [:name, :phone, :category, :insta], methods: :img_url )
  end

  def show
    render json: @videographer
  end

  def create
    attrs = params.permit(:name, :insta, :img, :phone, :category)
    videographer = Videographer.new(attrs)

    if videographer.save
      render json: {
        name: videographer.name,
        phone: videographer.phone,
        insta: videographer.insta,
        img_url: videographer.img.url,
        category: videographer.category,
      }
    else
      render json: { errors: videographer.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @videographer.update(videographer_params)
      render json: @videographer
    else
      render json: { errors: @videographer.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @videographer.destroy
  end

  private
    def set_videographer
      @videographer = Videographer.find(params[:id])
    end

    def videographer_params
      params.require(:videographer).permit(:name, :phone, :price, :category, :email, :img, :insta )
    end
end
