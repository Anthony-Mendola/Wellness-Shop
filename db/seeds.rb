# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.new_with_cart(email: 'test@test.com', password: 'password', first_name: 'Ron', last_name: 'Burgundy', address: '11 Ocean Drive', city: 'San Diego', state_initials: 'CA', zip: 902111)
user.save

Item.create([
  {
    name: 'Turmeric Spices',
    img_full: 'https://images.pexels.com/photos/672046/pexels-photo-672046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    img_thumbnail: 'https://images.pexels.com/photos/672046/pexels-photo-672046.jpeg?auto=compress&cs=tinysrgb&h=350',
    description: "Extremely fresh!",
    price: 20
  },

  {
    name: 'Hand Wash',
    img_full: 'https://i.imgur.com/wsIYWia.jpg',
    img_thumbnail: 'https://i.imgur.com/wsIYWia_d.jpg?maxwidth=520&shape=thumb&fidelity=high',
    description: "Organic hand wash",
    price: 8
  },

  {
    name: 'Aloe Lotion',
    img_full: 'https://i.imgur.com/4c5LDoK.jpg',
    img_thumbnail: 'https://i.imgur.com/4c5LDoK_d.jpg?maxwidth=520&shape=thumb&fidelity=high',
    description: "Great for the skin!",
    price: 10
  }
])

user.cart.products << [Product.find(1), Product.find(4)]