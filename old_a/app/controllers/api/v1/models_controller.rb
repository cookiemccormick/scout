class Api::V1::ModelsController < ApplicationController
  def create
    @model = Model.new(model_params)
    if @model.save
      render json: @model
    else
      render json: { error: 'Error creating model' }
    end
  end

  def index
    @models = Model.all.with_attached_picture
    render json: @models.alphabetical_name
  end

  def show
    @model = Model.find(params[:id])
    render json: @model
  end

  def update
    @model = Model.find(params[:id])
    if @model.update(model_params)
      render json: @model
    else
      render status: :unprocessable_entity, json: { errors: @model.errors }
    end
  end

  def destroy
    @model = Model.find(params[:id])
    @model.destroy
  end

  private

  def model_params
    params.permit(
      :name,
      :picture,
      :height,
      :bust,
      :waist,
      :hip,
      :shoe,
      :eyes,
      :hair
    )
  end
end