Model.delete_all
Booking.delete_all

model = Model.create!(
  name: 'Ashley Novak',
  height: '5\'11"',
  bust: 34,
  waist: 24,
  hip: 35,
  shoe: 8,
  eyes: 'hazel',
  hair: 'blond'
)

model.picture.attach(
  io: File.open(Rails.root.join('public', 'images', 'ashleynovak.jpg')),
  filename: 'image.jpg',
  content_type: 'image/jpg'
)

model.bookings.create!(
  job: 'Benefit Cosmetics',
  amount: 1100,
  start_time: DateTime.parse('2020-09-24T11:00:00Z'),
  end_time: DateTime.parse('2020-09-24T16:00:00Z'),
  description: 'Model will be demoing eyebrow products.'
)

model.bookings.create!(
  job: 'Steam Mop',
  amount: 1500,
  start_time: DateTime.parse('2020-07-09T09:00:00Z'),
  end_time: DateTime.parse('2020-07-09T11:00:00Z'),
  description: 'Model will clean up mess on floor with steam mop.'
)