class Booking < ApplicationRecord
  belongs_to :model

  validates :model_id, presence: true
  validates :job, presence: true
  validates :amount, presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true
  validates :description, presence: true

  scope :most_recent, -> { order("start_time desc") }
end