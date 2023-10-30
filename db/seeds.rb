require "date"


User.create(
    email: "test@email.com", 
    password: "user", 
    company: "test company", 
    address: "123 Street st, San Francisco CA, 94108", 
    phone_number: "123-123-1234", 
    first_name: "Sally", 
    last_name: "Lasnamia")
    
relationship_type = ["friend", "colleague", "cousin", "sister", "brother", "neighbor", "partner", "uncle", "aunt", "client", "acquaintance"]
    
30.times do
    Contact.create(
        user_id: 1,
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        relationship: relationship_type.sample,
        company: Faker::Company.name,
        industry: Faker::Company.industry,
        occupation: Faker::Job.position,
        last_interaction: Faker::Date.between(from: '2014-09-23', to: '2023-09-25'),
        email: Faker::Internet.email,
        follow_up_cadence: 14
        )
    end
    
social_type = ["instagram", "linkedIn", "twitter", "facebook"]
    
70.times do 
    ContactSocial.create(
        contact_id: Faker::Number.between(
            from: 1, 
            to: 30),
        url: Faker::Internet.url,
        social_type: social_type.sample,
    )
end
            
# 50.times do
#     ContactsBridge.create(
#         contact_id1: Faker::Number.between(
#                     from: 1, 
#                     to: 15).to_i, 
#         contact_id2: Faker::Number.between(
#                     from: 16, 
#                     to: 30).to_i
#     )
# end
                                            
Tag.create(user_id: 1,description: "San Francisco", tag_type: "locations")
Tag.create(user_id: 1, description: "New York", tag_type: "locations")
Tag.create(user_id: 1, description: "Tech", tag_type: "work")
Tag.create(user_id: 1, description: "Lifting", tag_type: "interests")
Tag.create(user_id: 1, description: "Dog Park", tag_type: "locations")
Tag.create(user_id: 1, description: "Movies", tag_type: "interests")
Tag.create(user_id: 1, description: "Flatiron School", tag_type: "education")
Tag.create(user_id: 1, description: "New York", tag_type: "locations")
Tag.create(user_id: 1, description: "Games", tag_type: "interests")
Tag.create(user_id: 1, description: "Restaurants", tag_type: "work")
Tag.create(user_id: 1, description: "lululemon", tag_type: "work")
Tag.create(user_id: 1, description: "Comedy", tag_type: "interests")
Tag.create(user_id: 1, description: "Mentors", tag_type: "work")
Tag.create(user_id: 1, description: "Nob Hill", tag_type: "locations")
Tag.create(user_id: 1, description: "Meet Up", tag_type: "interests")
Tag.create(user_id: 1, description: "Fashion", tag_type: "interests")
                  
90.times do
    ContactsTag.create(
        contact_id: Faker::Number.between(
            from: 1, 
            to: 30),
        tag_id: Faker::Number.between(
            from: 1, 
            to: 15)
    )
end

# date_type = ["birthday", "anniversary", "gotcha day"]

# 50.times do 
#     ImportantDate.create(
#         contact_id: Faker::Number.between(
#             from: 1, 
#             to: 30),
#         user_id: 1,
#         important_date_type: date_type.sample,
#         date: Faker::Date.between(from: '2014-09-23', to: '2023-09-25')
#         )
# end

# 100.times do 
#     ContactNote.create(
#         user_id: 1, 
#         contact_id: Faker::Number.between(
#             from: 1, 
#             to: 30),
#         pinned: Faker::Boolean.boolean,
#         header: "note header",
#         body: Faker::Lorem.words(number: 40),
    
#     )
# end

# interaction_type = ["event", "meeting", "passing"]


# 100.times do 
#     Interaction.create(
#         interaction_type: interaction_type.sample,
#         user_id: 1,
#         contact_id: Faker::Number.between(
#             from: 1, 
#             to: 30),
#          date: Faker::Date.between(from: '2014-09-23', to: '2023-09-25'),
#          note: Faker::Lorem.words(number: 40),
#     )
# end

# 100.times do 
#     InteractionContact.create(
#         contact_id: Faker::Number.between(
#             from: 1, 
#             to: 30),
#         interaction_id: Faker::Number.between(
#             from: 1, 
#             to: 100),
#          )
# end

# 50.times do 
#     Reminder.create(
#         user_id: 1,
#         contact_id: Faker::Number.between(
#             from: 1, 
#             to: 30),
#         description: "Reach out to person",
#         due_date: Faker::Date.between(from: '2023-09-27', to: '2024-09-25'),
#         important_date_id: Faker::Number.between(
#             from: 1, 
#             to: 50),
#         recurring: Faker::Boolean.boolean,
#         recurring_cadence: Faker::Number.between(
#             from: 1, 
#             to: 365),
#     )
# end

phone_number_type = ["cell", "work", "home"]

50.times do
    ContactPhoneNumber.create(
         contact_id: Faker::Number.between(
            from: 1, 
            to: 30),
        phone_number: Faker::PhoneNumber.phone_number,
        phone_number_type: phone_number_type.sample
    )
end


puts "seed complete"

