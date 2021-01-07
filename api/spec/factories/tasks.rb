FactoryBot.define do
  factory :task do
    title { "MyString" }
    detail { "MyText" }
    is_done { false }
    done_at { "2021-01-07 09:25:29" }
  end
end
