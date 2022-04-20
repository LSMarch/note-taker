1. Create .gitignore with node_modules

2. Create server.js that will serve up application
    - import required dependencies
    - initialize express
    - set up port (heroku)
    - set body parsing, static middleware, route middleware
    - start server (similar to mini project)

3. Organize and create routes
    - create "get" route for `/notes` that returns `notes.html`
    - create "get" route for `*` that returns `index.html`
    - create "get" route for `/api/notes` that returns saved notes as JSON
    - create "post" route for `/api/notes` that saves new note to `db.json` file
    - create "delete" route for `/api/notes/:id` that deletes note from `db.json` (bonus)

4. Create helper functions that manage saving and retrieving notes from `db.json`
    - create getNotes() that returns all saved notes
    - create saveNote() that saves a new note to `db.json` and returns new note as json
    - create deleteNote() that deletes note from `db.json` and returns succcess message (bonus)

5. Integrate helper functions into routes

6. Test routes to ensure they work (insomnia)