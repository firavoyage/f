frontend

- main
  - no /new page, it's just home page
    - you may change your mind later
  - new thread and send the msg
  - new chat button doesnt create new thread
    - it makes no sense to have empty threads
    - no need to handle race cond here
  - redirect to /thread
- thread
  - read, show
  - you may send directly before finish fetching
