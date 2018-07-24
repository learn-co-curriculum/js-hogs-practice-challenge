This is a brief introduction to Hogwarts, which you'll be more fully introduced to in mod 4.

Spin up the json-server to serve up your hogs. You can create divs and give them the class hog-card and put their information in there, so you'll get some styling. Most of the hog info is just text, but greased is a boolean, and it's better to display that as a checkbox, that is either checked if the hog is greased, or unchecked if not.

First, figure out how to render all the hogs to the page.

Then create a form that will both post a new hog to the server, and render your fresh hog on the page.

Then make it so that all of the hogs will also have delete buttons, so when a hog is deleted, it will remove its data from the server, and clear it off the page.

Finally, finish making that checkbox work so that you can grease/ungrease the hogs at will, and that actually toggles the boolean for that hog in the backend, so it persists.