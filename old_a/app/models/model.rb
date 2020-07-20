class Model < ApplicationRecord
  has_many :bookings
  has_one_attached :picture

  validates :name, presence: true
  validates :height, presence: true
  validates :bust, presence: true, inclusion: { in: 20..50, message: 'must be 20-50' }
  validates :waist, presence: true, inclusion: { in: 20..50, message: 'must be 20-50' }
  validates :hip, presence: true,  inclusion: { in: 20..50, message: 'must be 20-50' }
  validates :shoe, presence: true, inclusion: { in: 5..12, message: 'must be 5-12' }
  validates :eyes, presence: true
  validates :hair, presence: true

  scope :alphabetical_name, -> { order("name asc") }
end