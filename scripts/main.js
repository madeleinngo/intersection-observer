/*
    Threshold for when the class is toggled.

    What counts as an intersection?

    An intersection is whenever a given percentage
    of an element is visible within the viewport.

    How much should be showing to trigger an 
    intersection (detection)?

    Threshold: 25% or 0.25
*/

/*
    In what context is the observer observing?

    It is observing the root node.
*/

let options = {
    root: null,
    threshold: 0.25,
  }

/* 
    How are you're going to handle intersection changes?

    1. when something starts to intersect
    2. when something ceases to intersect

    If it starts to intersect, what do we want to do?
    - apply the active class
    
    If it ceases to intersect, what do we want to do?
    - remove the active class
*/

function intersectionHandler(entries, observer) {
    entries.forEach(entry => {
        //   entry.isIntersecting]
        if (entry.isIntersecting) {
            // active if intersecting
            entry.target.classList.add("active");
            let color = entry.target.dataset.color;
            document.body.style.backgroundColor = color;
        } else {
            // remove active if no longer intersecting 
            entry.target.classList.remove("active");
        }
      });
}

let observer = new IntersectionObserver(intersectionHandler, options);

/* 
    We need to get reference to all of our images.
*/

let images = document.querySelectorAll("img");

/*
    Loop through all images, and tell the observer
    to observe each one.
*/

// Ugly way
// for (let i = 0; i < images.length; i++) { 
// }


images.forEach((image) => {
    observer.observe(image);
});