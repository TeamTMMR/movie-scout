class Movie < ApplicationRecord
    validates :title, :release_year, :genre, :run_time, :description, :img_url, :user_id, presence: true
end
