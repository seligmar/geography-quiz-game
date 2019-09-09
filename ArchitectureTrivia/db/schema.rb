# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_09_170950) do

  create_table "games", force: :cascade do |t|
    t.integer "user_id"
    t.integer "questions_correct"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "question1_id"
    t.integer "question2_id"
    t.integer "question3_id"
    t.integer "question4_id"
    t.integer "question5_id"
    t.integer "question6_id"
    t.integer "question7_id"
    t.integer "question8_id"
    t.integer "question9_id"
    t.integer "question10_id"
  end

  create_table "high_scores", force: :cascade do |t|
    t.integer "top_user_id"
    t.integer "highest_score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "questions", force: :cascade do |t|
    t.string "correct_answer"
    t.string "answer1"
    t.string "answer2"
    t.string "answer3"
    t.string "img"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
