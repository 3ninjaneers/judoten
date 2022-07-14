require 'rails_helper'

RSpec.describe Dojo, type: :model do
  describe "GET /index" do
    it 'can create a Dojo' do
    
      user = User.where(email: 'first@user.com').first_or_create(password: '123456', password_confirmation: '123456')

      user.dojos.create(
        name: "Outliers JiuJitsu",
        address: "10251 Mast Blvd",
        city: "Santee",
        state: "CA",
        website: "http://outliersbjj.com/schedule/", 
        phone: "6197088699", 
        instructor: "Saeid", 
        email: "Jeremy@OutliersBJJ.com", 
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg"
      )

      get '/dojoindex'

      dojo = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(dojos.length).to eq(1)
    end
  end
end
