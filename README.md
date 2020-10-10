# Cats Galore
## Table of contents
* [Getting started](#getting-started)
* [CRUD operations](#crud)
* [Deliverables](#deliverables)
* [Hints](#hints)
* [What your app should look like](#preview)

<a name="getting-started"/>

## Getting started
* Fork this repo. Copy the new repo URL and run `git clone` in your terminal. `cd` into the new directory and run these commands.

```
npm install
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

## CRUD operations
READ: See all the cats on the page
* Make a GET fetch request to `http://localhost:3000/cats`

CREATE: a new cat through the form
* Make a POST fetch request to `http://localhost:3000/cats`

UPDATE: Increase a cat's likes
* Make a PATCH fetch request to `http://localhost:3000/cats/id`

<a name="deliverables"/>

## Deliverables
* Display all the cats in the CatsContainer as a CatTile component.
* Each CatTile should display the cat's picture, name, number of likes, a "like" button, and a "learn more" button.
* Clicking on the "learn more" button for a cat will display more of the cat's information below the button. The information should be something like this: "Kenny's favorite toy is a baby dog and they are a 8-year old female cat." Clicking on the "learn more" button again will hide this information.
* Add a new cat by filling out the form.
* On the home page, dynamically search for a cat by its name.

<a name="hints"/>

## Hints
1. If you see a key in a JSON object that has whitespaces, reassign the key to something more workable
For example:

```javascript
{
  "id": 1,
  "likes": 22,
  "this is a string": "hello, world!",
}

// reassign the key
["this is a string"]: string

// or use bracket notation without reassigning it
this.state["this is a string"]
 ```

2. Before you tackle the search functionality, think about what information you need to send up and down as props. Where are you going to save the user's input from the search bar? And what kind of logic do you need to write to filter all the cats? 

3. For displaying the cat's information, use string interpolation to combine the cat's different attributes.
For example:

```javascript
<p>{name}'s favorite toy is a {toy} and they are a {age}-year old {sex} cat.</p>
```

4. What kind of event listener do you need to add to a cat's "learn more" button to toggle their information? And where can you save the `state` for this toggle?

<a name="preview"/>

## What your app should look like
![screenshot of home page](https://imgur.com/42Rvsqo.png)
