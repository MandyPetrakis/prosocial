# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_09_28_183813) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contact_notes", force: :cascade do |t|
    t.integer "user_id"
    t.integer "contact_id"
    t.boolean "pinned"
    t.string "header"
    t.string "prompt"
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contact_phone_numbers", force: :cascade do |t|
    t.string "contact_id"
    t.string "phone_number"
    t.string "phone_number_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contact_socials", force: :cascade do |t|
    t.integer "contact_id"
    t.string "url"
    t.string "social_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contacts", force: :cascade do |t|
    t.integer "user_id"
    t.string "relationship"
    t.string "company"
    t.string "industry"
    t.datetime "last_interaction"
    t.integer "follow_up_cadence"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email"
  end

  create_table "contacts_bridges", force: :cascade do |t|
    t.integer "contact_id1"
    t.integer "contact_id2"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contacts_tags", force: :cascade do |t|
    t.integer "contact_id"
    t.integer "tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "important_dates", force: :cascade do |t|
    t.integer "contact_id"
    t.integer "user_id"
    t.string "important_date_type"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "interaction_contacts", force: :cascade do |t|
    t.integer "contact_id"
    t.integer "interaction_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "interactions", force: :cascade do |t|
    t.string "interaction_type"
    t.integer "user_id"
    t.integer "contact_id"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "note"
  end

  create_table "reminders", force: :cascade do |t|
    t.integer "user_id"
    t.integer "contact_id"
    t.string "description"
    t.datetime "due_date"
    t.integer "important_date_id"
    t.boolean "recurring"
    t.integer "recurring_cadence"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tags", force: :cascade do |t|
    t.integer "user_id"
    t.string "description"
    t.string "tag_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "company"
    t.string "address"
    t.string "phone_number"
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "focus"
  end

end
