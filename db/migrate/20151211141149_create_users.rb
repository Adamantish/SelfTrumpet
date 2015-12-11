class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.text :bio
      t.text :mission
      t.string :image_url

      t.timestamps null: false
    end
  end
end
