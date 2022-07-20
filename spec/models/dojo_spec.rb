require 'rails_helper'

RSpec.describe Dojo, type: :model do
  describe 'presence' do
    it "should validate name" do
      dojo = Dojo.create(
        name: nil,
        address: "3350 Sports Arena Blvd",
        city: "San Diego",
        state: "CA",
      )
      expect(dojo.errors[:name]).to_not be_empty
    end
    it "should validate address" do
      dojo = Dojo.create(
        name: "The Dojo",
        address: nil,
        city: "San Diego",
        state: "CA",
      )
      expect(dojo.errors[:address]).to_not be_empty
    end
    it "should validate city" do
      dojo = Dojo.create(
        name: "The Dojo",
        address: "123 This Place",
        city: nil,
        state: "CA",
      )
      expect(dojo.errors[:city]).to_not be_empty
    end

    it "should validate state" do
      dojo = Dojo.create(
        name: "The Dojo",
        address: "123 This Place",
        city: "Jamaica",
        state: nil,
      )
      expect(dojo.errors[:state]).to_not be_empty
    end
  end

  describe 'minimum length/useful information test' do
    it 'validates the minumum length of the dojo name' do
      dojo = Dojo.create(
        name: "Th",
        address: "3350 Sports Arena Blvd",
        city: "San Diego",
        state: "CA",
        website: "https://www.thearenagym.com/", 
        phone: "6192225554", 
        instructor: "Dr. Zbigniew Piec", 
        email: "Inquire on dojo Website", 
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg"
      )
      expect(dojo.errors[:name]).to_not be_empty
    end
    it 'validates the minumum length of the dojo address' do
      dojo = Dojo.create(
        name: "The Arena",
        address: "33",
        city: "San Diego",
        state: "CA",
        website: "https://www.thearenagym.com/", 
        phone: "6192225554", 
        instructor: "Dr. Zbigniew Piec", 
        email: "Inquire on dojo Website", 
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg"
      )
      expect(dojo.errors[:address]).to_not be_empty
    end
    it 'validates the minumum length of the city' do
      dojo = Dojo.create(
        name: "The Arena",
        address: "3350 Sports Arena Blvd",
        city: "S",
        state: "CA",
        website: "https://www.thearenagym.com/", 
        phone: "6192225554", 
        instructor: "Dr. Zbigniew Piec", 
        email: "Inquire on dojo Website", 
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg"
      )
      expect(dojo.errors[:city]).to_not be_empty
    end
    it 'validates the minumum length of the state'do
      dojo = Dojo.create(
        name: "The Arena",
        address: "3350 Sports Arena Blvd",
        city: "Sand Diego",
        state: "C",
        website: "https://www.thearenagym.com/", 
        phone: "6192225554", 
        instructor: "Dr. Zbigniew Piec", 
        email: "Inquire on dojo Website", 
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg"
      )
      expect(dojo.errors[:state]).to_not be_empty
    end
    it 'validates the minumum length of the website'do
      dojo = Dojo.create(
        name: "The Arena",
        address: "3350 Sports Arena Blvd",
        city: "Sand Diego",
        state: "CA",
        website: "htt", 
        phone: "6192225554", 
        instructor: "Dr. Zbigniew Piec", 
        email: "Inquire on dojo Website", 
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg"
      )
      expect(dojo.errors[:website]).to_not be_empty
    end
    it 'validates the minumum length of the phone number'do
      dojo = Dojo.create(
        name: "The Arena",
        address: "3350 Sports Arena Blvd",
        city: "Sand Diego",
        state: "CA",
        website: "https://www.thearenagym.com/", 
        phone: "61922255", 
        instructor: "Dr. Zbigniew Piec", 
        email: "Inquire on dojo Website", 
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg"
      )
      expect(dojo.errors[:phone]).to_not be_empty
    end
    it 'validates the minumum length of the instructor name'do
      dojo = Dojo.create(
        name: "The Arena",
        address: "3350 Sports Arena Blvd",
        city: "Sand Diego",
        state: "CA",
        website: "https://www.thearenagym.com/", 
        phone: "6192225554", 
        instructor: "D", 
        email: "Inquire on dojo Website", 
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg"
      )
      expect(dojo.errors[:instructor]).to_not be_empty
    end
    it 'validates the minumum length of the email'do
      dojo = Dojo.create(
        name: "The Arena",
        address: "3350 Sports Arena Blvd",
        city: "Sand Diego",
        state: "CA",
        website: "https://www.thearenagym.com/", 
        phone: "6192225554", 
        instructor: "Dr. Zbigniew Piec", 
        email: "In", 
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg"
      )
      expect(dojo.errors[:email]).to_not be_empty
    end
    it 'validates the minumum length of the image'do
      dojo = Dojo.create(
        name: "The Arena",
        address: "3350 Sports Arena Blvd",
        city: "Sand Diego",
        state: "CA",
        website: "https://www.thearenagym.com/", 
        phone: "6192225554", 
        instructor: "Dr. Zbigniew Piec", 
        email: "Inquire on dojo Website", 
        image: "htt"
      )
      expect(dojo.errors[:image]).to_not be_empty
    end
  end
  describe 'uniqueness test' do
    it 'does not allow duplicate addresses' do
      Dojo.create(
        name: "The Arena",
        address: "3350 Sports Arena Blvd",
        city: "San Diego",
        state: "CA",
        website: "https://www.thearenagym.com/", 
        phone: "6192225554", 
        instructor: "Dr. Zbigniew Piec", 
        email: "Inquire on dojo Website", 
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg"
      )
      dojo_test = Dojo.new(
        name: "The Chicken",
        address: "3350 Sports Arena Blvd",
        city: "San Diego",
        state: "CA",
        website: "https://www.thearenagym.com/", 
        phone: "6192225554", 
        instructor: "Dr. Zbigniew Piec", 
        email: "Inquire on dojo Website", 
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg"
      ).save
      expect(dojo_test).to eq(false)
    end
  end
end
