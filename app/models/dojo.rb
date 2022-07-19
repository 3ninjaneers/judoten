class Dojo < ApplicationRecord
  validates :name, :address, :city, :state, presence: true
  validates :name, length: {minimum: 4}
  validates :address, length: {minimum: 4}
  validates :city, length: {minimum: 2}
  validates :state, length: {minimum: 2}
  validates :website, length: {minimum: 8}
  validates :phone, length: {is: 10}
  validates :instructor, length: {minimum: 2}
  validates :email, length: {minimum: 5}
  validates :image, length: {minimum: 8}
  
  belongs_to :user
end
