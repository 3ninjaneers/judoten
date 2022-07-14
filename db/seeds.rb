# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user = User.where(email: 'first@user.com').first_or_create(password: '123456', password_confirmation: '123456')

   dojos_array = [
    {
        name: "Outliers JiuJitsu",
        address: "10251 Mast Blvd",
        city: "Santee",
        state: "CA",
        website: "http://outliersbjj.com/schedule/", 
        phone: "6197088699", 
        instructor: "Saeid", 
        email: "Jeremy@OutliersBJJ.com", 
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg"
    },
    {
        name: "10th Planet San Diego Jiu Jitsu",
        address: "6008 Mission Gorge Rd",
        city: "San Diego",
        state: "CA",
        website: "https://10thplanetsandiego.com/schedule/", 
        phone: "6192825855", 
        instructor: "Saeid", 
        email: "Inquire on dojo Website", 
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg"
    },
    {
        name: "The Arena",
        address: "3350 Sports Arena Blvd",
        city: "San Diego",
        state: "CA",
        website: "https://www.thearenagym.com/", 
        phone: "6192225554", 
        instructor: "Dr. Zbigniew Piec", 
        email: "Inquire on dojo Website", 
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg"
    }
  ]

  dojos_array.each do |dojo_obj|
    user.dojos.create dojo_obj
  end
