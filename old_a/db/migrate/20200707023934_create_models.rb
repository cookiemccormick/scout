class CreateModels < ActiveRecord::Migration[5.2]
  def change
    create_table :models do |t|
      t.string :name, null: false
      t.string :height, null: false
      t.float :bust, null: false
      t.float :waist, null: false
      t.float :hip, null: false
      t.float :shoe, null: false
      t.string :eyes, null: false
      t.string :hair, null: false
      t.timestamps null: false
    end
  end
end