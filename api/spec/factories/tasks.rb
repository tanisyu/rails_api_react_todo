FactoryBot.define do
  factory :task do
    sequence(:title) { |n| "title_#{n}" }
    sequence(:detail) { |n| "detail_#{n}" }
    is_done { false }
    done_at { nil }
  end
end
