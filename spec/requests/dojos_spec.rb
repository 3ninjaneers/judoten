require 'rails_helper'

RSpec.describe "Dojos", type: :request do
  let(:user)do
    User.create(email: 'test@example.com', password: '12345678', password_confirmation: '12345678')
  end
  describe "GET /index" do
    it 'returns a list of Dojos' do
      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
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

      get '/dojos'

      dojos = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(dojos.length).to eq(1)
    end
  end
end
