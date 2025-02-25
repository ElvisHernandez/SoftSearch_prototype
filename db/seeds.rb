# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


100000.times do 
    Job.find_or_create_by(
        position: Faker::Job.title,
        description: Faker::Lorem.paragraph,
        programming_language: Faker::ProgrammingLanguage.name,
        date: Faker::Date.backward(days: 120),
        longitude: Faker::Address.longitude,
        latitude: Faker::Address.latitude
    )
end