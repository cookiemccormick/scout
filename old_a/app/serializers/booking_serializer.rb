class BookingSerializer < ActiveModel::Serializer
  attributes :id, :job, :amount, :start_time, :end_time, :description, :model_id

  belongs_to :model

  def start_time
    object.start_time.strftime('%FT%R')
  end

  def end_time
    object.end_time.strftime('%FT%R')
  end
end