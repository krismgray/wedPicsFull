class CreateVideographers < ActiveRecord::Migration[5.1]
  def change
    create_table :videographers do |t|
      t.string :name
      t.string :description
      t.string :category
      t.string :email
      t.string :insta
      t.string :phone
      t.float :price

      t.timestamps
    end
  end
end
