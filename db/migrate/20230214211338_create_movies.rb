class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :release_year
      t.string :genre
      t.string :run_time
      t.string :img_url
      t.string :description
      t.integer :user_id

      t.timestamps
    end
  end
end
