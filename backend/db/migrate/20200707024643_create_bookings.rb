class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :model_id, null: false
      t.string :job, null: false
      t.float :amount, null: false
      t.datetime :start_time, null: false
      t.datetime :end_time, null: false
      t.string :description, null: false
      t.timestamps null: false
    end
  end
end