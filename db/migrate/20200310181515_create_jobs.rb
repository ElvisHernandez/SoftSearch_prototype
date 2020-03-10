class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.string :position
      t.text :description
      t.string :programming_language
      t.string :date
      t.float :longitude
      t.float :latitude

      t.timestamps
    end
  end
end
