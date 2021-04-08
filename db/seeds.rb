# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all 

demoUser= User.create(email: 'user@demo.com', 
    password: "123456", 
    full_name: 'Demo Person', 
    bio: 'A am trained in the modern art of demoing web applications. Feel free to contact me for any demo needs.', 
    location: 'Demo Land', 
    job_title: 'Professonal Demo Artiest')