# jQuery part one: It's all about the DOM

## Learning Competencies

* DOM manipulation
* DOM Traversal
* Event binding

## Summary
We will be using jQuery in place of vanilla JavaScript to select elements from the DOM, manipulate those element, and bind events to those elements.

[jQuery](http://jQuery.com/) is a very popular library that allows us to use JavaScript with a friendly syntax. jQuery uses CSS selectors to find elements within the DOM. We reference jQuery with a `$` and then pass in the selector for the element we are looking for as an argument.

```javascript
$(".myelement")
```

We will be using the [jQuery Documentation](http://api.jQuery.com/) to help us find the functions we need to complete the releases.

## Releases

### Release 0: Traversing and manipulating the DOM
The DOM refers to document object model. This is the representation of the document (a webpage) as a tree structure that we navigate through.

Open up the traverse.html file and use jQuery to access, change, or add the following elements.

- return the content of the h1 tag
- update the last name to be "Eich" with a capital E
- return all of the list items
- add another div that has all of the elements of "person_1" but your information
- ??? need to add some other things to do


### Release 1: Event Binding
Every time we interact with the DOM, events are emitted. We can hook into these events using JavaScript to perform custom actions when the events occur. For example when we click a button, a click event is fired and we can then control what takes place instead of performing the default behavior the browser has implemented.

The jQuery "on" function gives us a friendly syntax to bind to events. Here's the [documentation](http://api.jquery.com/on/) for "on".

A more complete list of events can be found [here](https://developer.mozilla.org/en-US/docs/Web/Events)

Let's add a click handler that displays an alert with a `li`'s text when clicked.

Now let toggle the visibility of the `ul` list when the `h1` is clicked.

### Release 2: Make a functioning counter
Let's open the counter.html file. We have a nice looking counter but it doesn't do anything yet.

What do we need to do to add functionality to this markup? We'll start with selecting the elements on the page that we want to increment. In this case that will be the buttons. Then we'll need to add some code that will increment or decrement the text based on which button is clicked.

There's a gif of the functioning counter below. Don't worry about the styling when the number is changing for now, we'll get to that in the next release!

 ![counter gif](/../master/images/counter.gif?raw=true "Optional Title")

### Release 3: Add some style
Ok, let's make it fancy! We've already added a stylesheet with the CSS needed to create the change effect. We just need to add the JavaScript to add and remove the classes associated with the styles.

When either of the buttons is clicked we want to add the class "changing" to the element that's wrapping the number.

Great! We're halfway there. This just leaves us with a number that's red an slightly larger. We still need to remove that class to revert the number to it's original style

Removing the class is a little bit tricky. We don't want that code to execute immediately so we're going to use the JavaScript's setTimeout function to wait 200 milliseconds before removing the class. The documentation for setTimeout can be found [here](https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Timers)

### Release 4: Add multiple counters
What if we wanted to add multiple counters? Will this cause issues with the way our code is currently set up?

Let's add a second counter that increments by 5 and another that increments by 10. Does everything behave as we'd expect?
What changes need to be made to make these counters function?

### Release 5: Bonus!
Refactoring is the process of making code shorter, more readable, more re-usable, or all three. The hard part is, you have to do that without breaking anything. Can we refactor any of our code to make it more succinct without changing the way it works?
