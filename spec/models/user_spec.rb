require 'rails_helper'

RSpec.describe User, type: :model do
  it "should validate email" do
    user = User.create(
      email: nil,
      encrypted_password: "1234567"
    )
    expect(user.errors[:email]).to_not be_empty
  end
  it "should validate password" do
    user = User.new(
      email: "first@user.com"
    ).save
    expect(user).to eq(false)
  end
  it "email should be unique" do
    User.new(email:"first@user.com", encrypted_password: "1234567")
    user2 = User.new(
      email: "first@user.com", encrypted_password: "12345678"
    ).save
    expect(user2).to eq(false)
  end
end
