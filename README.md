# Cats Galore
## Table of contents
* [Getting started](#getting-started)
* [CRUD operations](#crud)
* [Deliverables](#deliverables)

<a name="getting-started"/>

### Getting started
* Copy the repo URL and run `git clone` in your terminal. `cd` into the new directory and run these commands.

```
npm install -g json-server
json-server --watch db.json
```

* Open up a new terminal and run the following command:

```
npm start
```

* The terminal will ask you to start a new server since we already have the JSON server running on `localhost:3000`. Enter `y` to start a new server on `localhost:3001`.
* Open `http://localhost:3001` in the browser to see your app.
* Make a copy of `db.json` and save it as `original_db.json`. This is so that you can always refer back to the original database in case you mess up the database with incorrect PATCH requests.

<a name="crud"/>

### CRUD operations
* READ: See all the cats on the page
* Create a new cat through the form (CREATE)
* Increase a cat's likes (UPDATE)
* Send a cat to your parents' house (DELETE)

<a name="deliverables"/>

### Deliverables
* Display all the cats as a CatTile component
* Each cat should display their picture, name, number of likes, a like button, and a learn more button
* Clicking on a learn more button for a cat will remove the cat's likes and like button, and instead show a string that says something like, "Kenny's favorite toy is a baby dog and they are a 8-year old female cat."
* Search for a cat by name on the home page
* Add a new cat by filling out the form