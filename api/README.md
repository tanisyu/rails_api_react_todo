# README

## #1 Application info

- Versions

    - ruby: 2.7.1
    - rails: 6.1.0

- Gems

    - rspec-rails
    - factory_bot_rails

## #2 API info

- Get tasks

    - Get request to http://localhost:3000/api/v1/tasks will return data like below

		```
		{
			"status":"SUCCESS",
			"message":"Loaded tasks",
			"data": [
				{
					"id": 3,
					"title": "title_3",
					"detail": "detail_3",
					"is_done": false,
					"done_at": null,
					"created_at": "2021-01-25T16:40:06.306Z",
					"updated_at": "2021-01-25T16:40:06.306Z"
				},
				{	
					"id": 2,
					"title": "title_2",
					"detail": "detail_2",
					"is_done": false,
					"done_at": null,
					"created_at": "2021-01-25T16:40:06.301Z",
					"updated_at": "2021-01-25T16:40:06.301Z"
				},
				{	
					"id": 1,
					"title": "title_1",
					"detail": "detail_1",
					"is_done": false,
					"done_at": null,
					"created_at": "2021-01-25T16:40:06.282Z",
					"updated_at": "2021-01-25T16:40:06.282Z"
				}
			]
		}
		```

- Get task

    - Get request to http://localhost:3000/api/v1/tasks/1 will return data like below

		```
		{
			"status":"SUCCESS",
			"message":"Loaded the task",
			"data": {	
				"id": 1,
				"title": "title_1",
				"detail": "detail_1",
				"is_done": false,
				"done_at": null,
				"created_at": "2021-01-25T16:40:06.282Z",
				"updated_at": "2021-01-25T16:40:06.282Z"
			}
		}
		```

- Create task

  	- Post request to http://localhost:3000/api/v1/tasks with data like below

		```
		{	
			"title": "title_4",
			"detail": "detail_4"
		}
		```

	- Api will return data like below

		```
		{
			"status": "SUCCESS",
			"data": {
				"id": 4,
				"title": "title_4",
				"detail": "detail_4",
				"is_done": false,
				"done_at": null,
				"created_at": "2021-01-25T16:40:06.282Z",
				"updated_at": "2021-01-25T16:40:06.282Z"
			}
		}
		```

- Update task

    - Put or Patch request to http://localhost:3000/api/v1/tasks/1 with data like below

		```
		{	
			"title": "updated_title_1",
			"detail": "updated_detail_1"
		}
		```

	- Api will return data like below

		```
		{
			"status": "SUCCESS",
			"message": "Updated the task",
			"data": {
				"id": 1,
				"title": "updated_title_1",
				"detail": "updated_detail_1",
				"is_done": false,
				"done_at": null,
				"created_at": "2021-01-25T16:40:06.282Z",
				"updated_at": "2021-01-26T16:40:06.282Z"
			}
		}
		```

- Delete task

    - Delete request to http://localhost:3000/api/v1/tasks/1 will return data like below

		```
		{
    	"status": "SUCCESS",
    	"message": "Deleted the task",
    	"data": {
				"id": 1,
				"title": "updated_title_1",
				"detail": "updated_detail_1",
				"is_done": false,
				"done_at": null,
				"created_at": "2021-01-25T16:40:06.282Z",
				"updated_at": "2021-01-26T16:40:06.282Z"
			}
		}
		```
