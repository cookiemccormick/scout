class ModelSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :picture, :name, :height, :bust, :waist, :hip, :shoe, :eyes, :hair

  has_many :bookings

  def picture
    return unless object.picture.attached?
    url_for(object.picture)
  end
end