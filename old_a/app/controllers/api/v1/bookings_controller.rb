class Api::V1::BookingsController < ApplicationController
  before_action :set_model

  def create
    @booking = @model.bookings.new(booking_params)
    if @booking.save
      render json: @model
    else
      render json: { error: 'Error creating booking' }
    end
  end

  def update
    @booking = Booking.find(params[:id])
    @booking.update(booking_params)
    render json: @booking.model
  end

  def destroy
    @booking = Booking.find(params[:id])
    @model = Model.find(@booking.model_id)
    @booking.destroy
    render json: @model
  end

  private

  def booking_params
    params.require(:booking).permit(
      :model_id,
      :job,
      :amount,
      :start_time,
      :end_time,
      :description
    )
  end

  def set_model
    @model = Model.find(params[:model_id])
  end
end