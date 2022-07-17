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
  describe "POST /create" do
    it 'creates a Dojo' do
      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
      dojo_params = {
        dojo: {
          name: "Outliers JiuJitsu",
          address: "10251 Mast Blvd",
          city: "Santee",
          state: "CA",
          website: "http://outliersbjj.com/schedule/", 
          phone: "6197088699", 
          instructor: "Saeid", 
          email: "Jeremy@OutliersBJJ.com", 
          image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg",
          user_id: user.id
        }
      }

      post '/dojos', params: dojo_params
      expect(response).to have_http_status(200)
      dojo = Dojo.first
      expect(dojo.name).to eq("Outliers JiuJitsu")
    end
    
    it 'does not create a dojo without a name' do
      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
      dojo_params = {
        dojo: {
          address: "10251 Mast Blvd",
          city: "Santee",
          state: "CA",
          website: "http://outliersbjj.com/schedule/", 
          phone: "6197088699", 
          instructor: "Saeid", 
          email: "Jeremy@OutliersBJJ.com", 
          image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg",
          user_id: user.id
        }
      }

      post '/dojos', params: dojo_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['name']).to include "can't be blank"
    end

    it 'does not create a dojo without an address' do
      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
      dojo_params = {
        dojo: {
          name: "Outliers JiuJitsu",
          city: "Santee",
          state: "CA",
          website: "http://outliersbjj.com/schedule/", 
          phone: "6197088699", 
          instructor: "Saeid", 
          email: "Jeremy@OutliersBJJ.com", 
          image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg",
          user_id: user.id
        }
      }

      post '/dojos', params: dojo_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['address']).to include "can't be blank"
    end

    it 'does not create a dojo without a city' do
      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
      dojo_params = {
        dojo: {
          name: "Outliers JiuJitsu",
          address: "10251 Mast Blvd",
          state: "CA",
          website: "http://outliersbjj.com/schedule/", 
          phone: "6197088699", 
          instructor: "Saeid", 
          email: "Jeremy@OutliersBJJ.com", 
          image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg",
          user_id: user.id
        }
      }

      post '/dojos', params: dojo_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['city']).to include "can't be blank"
    end

    it 'does not create a dojo without a state' do
      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
      dojo_params = {
        dojo: {
          name: "Outliers JiuJitsu",
          address: "10251 Mast Blvd",
          city: "Santee",
          website: "http://outliersbjj.com/schedule/", 
          phone: "6197088699", 
          instructor: "Saeid", 
          email: "Jeremy@OutliersBJJ.com", 
          image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg",
          user_id: user.id
        }
      }

      post '/dojos', params: dojo_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['state']).to include "can't be blank"
    end
  end

  describe "PATCH /update" do
    it 'updates a Dojo' do
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
      update_dojo_params = {
        dojo: {
          name: "Outliers JiuJitsu",
          address: "10251 Mast Blvd",
          city: "Santee",
          state: "California",
          website: "http://outliersbjj.com/schedule/", 
          phone: "6197088699", 
          instructor: "Saeid", 
          email: "Jeremy@OutliersBJJ.com", 
          image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg",
          user_id: user.id
        }
      }
      dojo = Dojo.first
      dojo_id = dojo.id
      
      patch "/dojos/#{dojo.id}", params: update_dojo_params

      expect(response).to have_http_status(200)

      update_dojo = Dojo.find(dojo_id)

      expect(update_dojo.state).to eq('California')
    end

    it 'does not update a dojo to have useless name information' do
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
      dojo = Dojo.first

      update_dojo_params = {
        dojo: {
          name: "O",
          address: "10251 Mast Blvd",
          city: "Santee",
          state: "California",
          website: "http://outliersbjj.com/schedule/", 
          phone: "6197088699", 
          instructor: "Saeid", 
          email: "Jeremy@OutliersBJJ.com", 
          image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg",
          user_id: user.id
        }
      }
      
      patch "/dojos/#{dojo.id}", params: update_dojo_params

      expect(response).to have_http_status(422)
      dojo_json = JSON.parse(response.body)
      p dojo_json
      expect(dojo_json['name']).to include "is too short (minimum is 4 characters)"
    end

    it 'does not update a dojo to have useless address information' do
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
      dojo = Dojo.first

      update_dojo_params = {
        dojo: {
          name: "Outliers JiuJitsu",
          address: "10",
          city: "Santee",
          state: "California",
          website: "http://outliersbjj.com/schedule/", 
          phone: "6197088699", 
          instructor: "Saeid", 
          email: "Jeremy@OutliersBJJ.com", 
          image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg",
          user_id: user.id
        }
      }
      
      patch "/dojos/#{dojo.id}", params: update_dojo_params

      expect(response).to have_http_status(422)
      dojo_json = JSON.parse(response.body)
      p dojo_json
      expect(dojo_json['address']).to include "is too short (minimum is 4 characters)"
    end

    it 'does not update a dojo to have useless city information' do
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
      dojo = Dojo.first

      update_dojo_params = {
        dojo: {
          name: "Outliers JiuJitsu",
          address: "10251 Mast Blvd",
          city: "S",
          state: "California",
          website: "http://outliersbjj.com/schedule/", 
          phone: "6197088699", 
          instructor: "Saeid", 
          email: "Jeremy@OutliersBJJ.com", 
          image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg",
          user_id: user.id
        }
      }
      
      patch "/dojos/#{dojo.id}", params: update_dojo_params

      expect(response).to have_http_status(422)
      dojo_json = JSON.parse(response.body)
      p dojo_json
      expect(dojo_json['city']).to include "is too short (minimum is 2 characters)"
    end

    it 'does not update a dojo to have useless state information' do
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
      dojo = Dojo.first

      update_dojo_params = {
        dojo: {
          name: "Outliers JiuJitsu",
          address: "10251 Mast Blvd",
          city: "Santee",
          state: "C",
          website: "http://outliersbjj.com/schedule/", 
          phone: "6197088699", 
          instructor: "Saeid", 
          email: "Jeremy@OutliersBJJ.com", 
          image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg",
          user_id: user.id
        }
      }
      
      patch "/dojos/#{dojo.id}", params: update_dojo_params

      expect(response).to have_http_status(422)
      dojo_json = JSON.parse(response.body)
      p dojo_json
      expect(dojo_json['state']).to include "is too short (minimum is 2 characters)"
    end

    it 'does not update a dojo to have useless website information' do
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
      dojo = Dojo.first

      update_dojo_params = {
        dojo: {
          name: "Outliers JiuJitsu",
          address: "10251 Mast Blvd",
          city: "Santee",
          state: "CA",
          website: "http", 
          phone: "6197088699", 
          instructor: "Saeid", 
          email: "Jeremy@OutliersBJJ.com", 
          image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg",
          user_id: user.id
        }
      }
      
      patch "/dojos/#{dojo.id}", params: update_dojo_params

      expect(response).to have_http_status(422)
      dojo_json = JSON.parse(response.body)
      p dojo_json
      expect(dojo_json['website']).to include "is too short (minimum is 8 characters)"
    end

    it 'does not update a dojo to have useless phone information' do
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
      dojo = Dojo.first

      update_dojo_params = {
        dojo: {
          name: "Outliers JiuJitsu",
          address: "10251 Mast Blvd",
          city: "Santee",
          state: "CA",
          website: "http://outliersbjj.com/schedule/", 
          phone: "619708869", 
          instructor: "Saeid", 
          email: "Jeremy@OutliersBJJ.com", 
          image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg",
          user_id: user.id
        }
      }
      
      patch "/dojos/#{dojo.id}", params: update_dojo_params

      expect(response).to have_http_status(422)
      dojo_json = JSON.parse(response.body)
      p dojo_json
      expect(dojo_json['phone']).to include "is the wrong length (should be 10 characters)"
    end

    it 'does not update a dojo to have useless instructor information' do
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
      dojo = Dojo.first

      update_dojo_params = {
        dojo: {
          name: "Outliers JiuJitsu",
          address: "10251 Mast Blvd",
          city: "Santee",
          state: "CA",
          website: "http://outliersbjj.com/schedule/", 
          phone: "6197088699", 
          instructor: "S", 
          email: "Jeremy@OutliersBJJ.com", 
          image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg",
          user_id: user.id
        }
      }
      
      patch "/dojos/#{dojo.id}", params: update_dojo_params

      expect(response).to have_http_status(422)
      dojo_json = JSON.parse(response.body)
      p dojo_json
      expect(dojo_json['instructor']).to include "is too short (minimum is 2 characters)"
    end

    it 'does not update a dojo to have useless email information' do
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
      dojo = Dojo.first

      update_dojo_params = {
        dojo: {
          name: "Outliers JiuJitsu",
          address: "10251 Mast Blvd",
          city: "Santee",
          state: "CA",
          website: "http://outliersbjj.com/schedule/", 
          phone: "6197088699", 
          instructor: "Saeid", 
          email: "Jer", 
          image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg",
          user_id: user.id
        }
      }
      
      patch "/dojos/#{dojo.id}", params: update_dojo_params

      expect(response).to have_http_status(422)
      dojo_json = JSON.parse(response.body)
      p dojo_json
      expect(dojo_json['email']).to include "is too short (minimum is 5 characters)"
    end

    it 'does not update a dojo to have useless image information' do
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
      dojo = Dojo.first

      update_dojo_params = {
        dojo: {
          name: "Outliers JiuJitsu",
          address: "10251 Mast Blvd",
          city: "Santee",
          state: "CA",
          website: "http://outliersbjj.com/schedule/", 
          phone: "6197088699", 
          instructor: "Saeid", 
          email: "Jeremy@OutliersBJJ.com", 
          image: "htt",
          user_id: user.id
        }
      }
      
      patch "/dojos/#{dojo.id}", params: update_dojo_params

      expect(response).to have_http_status(422)
      dojo_json = JSON.parse(response.body)
      p dojo_json
      expect(dojo_json['image']).to include "is too short (minimum is 8 characters)"
    end
  end

  describe "Destroy /cats/:id" do
    it "destroys a cat from the database" do
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
      dojo = Dojo.first
      delete "/dojos/#{dojo.id}"
      expect(response).to have_http_status(200)
    end
  end
end
