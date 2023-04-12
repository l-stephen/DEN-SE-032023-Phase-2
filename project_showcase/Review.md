### Process: Building React Features With State

1. Decide: Do we need state for this feature? If so, where?
2. Set up the initial state. What's a good initial value? What will we see on the page first? How will it change?
3. Set up component to render something based on state. Do we need conditional rendering?
4. Find a way to update state dynamically (based on user interaction; fetching data; etc).

## Deliverables
1. Create a new component called Review.js, and call this component in the parent component, and pass projects as a prop of this component
2. Map through the component, and create another component called ReviewList, send the projects to the ReviewList component
3. The ReviewList component should return a div and h3 tag with the projects name
4. Filter the data so that only the id's with a length greater than 3 will appear
