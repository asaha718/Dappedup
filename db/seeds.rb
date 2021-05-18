# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all 
Education.delete_all
Job.delete_all

demoUser= User.create(email: 'user@demo.com', 
    password: "123456", 
    full_name: 'Demo Person', 
    bio: 'A am trained in the modern art of demoing web applications. Feel free to contact me for any demo needs.', 
    location: 'Demo Land', 
    job_title: 'Professonal Demo Artiest')

demoUserEdu= Education.create(user_id: demoUser.id, 
    school: 'Pallet Town High School', 
    field_of_study: 'Pokemon Trainer', 
    start_date: '2015/01/09', 
    end_date: '2019/06/16')

demoUserJob= Job.create(user_id: demoUser.id,
    title: "Pokemon Trainer", 
    field: "Environmental Fitness", 
    company: "Self Employed",
    location: "Worldwide", 
    description: "I aquire wild Pokemon to train and collect Gym badges.", 
    start_date: '2019/06/17')