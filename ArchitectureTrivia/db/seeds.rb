# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#     t.string "correct_answer"
#     t.string "answer1"
#     t.string "answer2"
#     t.string "answer3"
#     t.string "img"
#     t.string "name"

incorrect_options = [
"Kyoto, Japan",  
"Johannesburg, South Africa",
"Agra, India", 
"Kolkata, India", 
"Seoul, South Korea",
"Istanbul, Turkey",  
"Washington, D.C.", 
"Seattle, WA, USA",  
"Cardiff, Wales, UK",  
"Dublin, Ireland",  
"Tokyo, Japan", 
"Djenne, Mali", 
"Paris, France",  
"Buenos Aires, Argentina",  
"Havana, Cuba" ]

wash_DC = Question.create(img: "ArchitectureTrivia/app/assets/images/PP_march_4.JPG", name: "U.S. Capitol", correct_answer: "Washington, D.C.", answer1: incorrect_options[0], answer2: incorrect_options[4], answer3: incorrect_options.last) 
florence = Question.create(img: "ArchitectureTrivia/app/assets/images/Dumo.jpg", name: "Cathedral of Santa Maria del Fiore", correct_answer: "Florence, Italy", answer1: incorrect_options[3], answer2: incorrect_options[2], answer3: incorrect_options[5])
berlin = Question.create(img: "ArchitectureTrivia/app/assets/images/BerlinerDom.jpg", name: "Berliner Dom", correct_answer: "Berlin, Germany", answer1: incorrect_options[12], answer2: incorrect_options[13], answer3: incorrect_options[8])
mali = Question.create(img: "ArchitectureTrivia/app/assets/images/GreatMosqueMali.jpg", name: "Great Mosque", correct_answer: "Djenne, Mali", answer1: incorrect_options[2], answer2: incorrect_options[6], answer3: incorrect_options[9])
nyc = Question.create(img: "ArchitectureTrivia/app/assets/images/Flatiron-Building.jpg", name: "Flatiron Building", correct_answer: "New York City, NY, USA", answer1: incorrect_options[0], answer2: incorrect_options[4], answer3: incorrect_options[8])
tflis = Question.create(img: "ArchitectureTrivia/app/assets/images/towers.jpg", name: "Svaneti Towers", correct_answer: "Svaneti, Republic of Georgia", answer1: incorrect_options[0], answer2: incorrect_options[4], answer3: incorrect_options[8])
taj = Question.create(img: "ArchitectureTrivia/app/assets/images/TajMahal.jpg", name: "Taj Mahal", correct_answer: "Agra, India", answer1: incorrect_options[0], answer2: incorrect_options[4], answer3: incorrect_options[8])
istanbul = Question.create(name: "U.S. Capitol", correct_answer: "Washington, D.C.", answer1: incorrect_options[0], answer2: incorrect_options[4], answer3: incorrect_options[8])
# wash_DC = Question.create(name: "U.S. Capitol", correct_answer: "Washington, D.C.", answer1: incorrect_options[0], answer2: incorrect_options[4], answer3: incorrect_options[8])
# wash_DC = Question.create(name: "U.S. Capitol", correct_answer: "Washington, D.C.", answer1: incorrect_options[0], answer2: incorrect_options[4], answer3: incorrect_options[8])