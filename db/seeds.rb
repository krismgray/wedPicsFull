categories = ['$200-$400', '$400-$600', '$600-$800', '$800-$1000' ]

100.times do
  Photographer.create(
    name: Faker::Name.name,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price.to_f,
    phone: Faker::PhoneNumber.phone_number,
    category: categories.sample,
  )
end
