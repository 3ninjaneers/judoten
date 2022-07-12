class CreateDojos < ActiveRecord::Migration[7.0]
  def change
    create_table :dojos do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :state
      t.string :website
      t.string :phone
      t.string :instructor
      t.string :email
      t.text :image
      t.integer :user_id

      t.timestamps
    end
  end
end
