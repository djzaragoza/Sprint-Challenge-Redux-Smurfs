1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    - Object.assign()
    - .map
    - .concat

    Object.assign() is the method we use to create a brand new object 

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    actions = dispatched to our reducer or passed in to the reducer function as an argument.
    reducers = calculate new version of state based on current state and a given Action. they NEVER update state directly, but will always return a new object.
    store = 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?


1.  What is middleware?


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?


1.  Which `react-redux` method links up our `components` with our `redux store`?
