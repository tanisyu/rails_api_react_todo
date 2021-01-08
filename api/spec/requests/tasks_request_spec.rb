require 'rails_helper'

describe 'TaskAPI' do
  it 'すべてのtaskを取得できること' do
    FactoryBot.create_list(:task, 10)

    get '/api/v1/tasks'
    json = JSON.parse(response.body)

    expect(response.status).to eq(200)
    expect(json['data'].length).to eq(10)
  end

  it '特定のtaskを取得できること' do
    task = FactoryBot.create(:task)

    get "/api/v1/tasks/#{task.id}"
    json = JSON.parse(response.body)

    expect(response.status).to eq(200)
    Task.columns.each do | column |
      data = task.send(column.name)
      # datetimeをjson形式に変更した際にダブルクォーテーションがエスケープされる為加工
      data = data.to_json.gsub('"','') if !data.nil? && column.type.eql?(:datetime) 

      expect(json['data'][column.name]).to eq(data)
    end
  end

  it '新しいtaskを作成できること' do
    create_params = { title: 'title', detail: 'detail', is_done: false }

    post '/api/v1/tasks', params: { task: create_params }

    expect(response.status).to eq(200)

    created_task = Task.last
    create_params.each do | key, value |
      expect(created_task.send(key)).to eq(value)
    end
  end

  it 'taskの編集ができること' do
    task = FactoryBot.create( :task,
                              title: 'old_title',
                              detail: 'old_detail',
                              is_done: false,
                              done_at: nil )
    
    update_params = {
      title: 'new_title',
      detail: 'new_detail',
      is_done: true,
      done_at: Time.zone.parse("#{Time. now}") # カンマ以下が0で登録される為
    }

    put "/api/v1/tasks/#{task.id}", params: { task: update_params}

    expect(response.status).to eq(200)

    updated_task = Task.find(task.id)
    update_params.each do | key, value |
      expect(updated_task.send(key)).to eq(value)
    end
  end

  it 'taskの削除ができること' do
    task = FactoryBot.create(:task)

    delete "/api/v1/tasks/#{task.id}"

    expect(response.status).to eq(200)

    deleted_task = Task.find_by(id: task.id)
    expect(deleted_task).to eq(nil)
  end
end
