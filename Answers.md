1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    - Object.assign()
    - .map
    - .concat

    Object.assign() is the method we use to create a brand new object 

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    actions = dispatched to our reducer or passed in to the reducer function as an argument.
    reducers = calculate new version of state based on current state and a given Action. they NEVER update state directly, but will always return a new object.
    store = holds the whole state tree of your application.  the only way to change the state inside it i to dispatch an action on it.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state = this is all about the state tree, within the store.  the important parts of the store are:
        -getting the state
        -listening for changes
        -updating the state
    It is good to use this once you begin building your React-Redux app

    Component state = setState() schedules an update to a component's state object.  What state changes, the component responds by re-rendering.
    The best time to use component state is when you are changing the state of a specific component

1.  What is middleware?
    provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.  Used for logging, crash reporting, talking to an asynchronous API, and routing.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    commonly used middleware for asynchronous orchestration.  A thunk is a function that returns another function that takes parameters "dispatch" and "getState."

1.  Which `react-redux` method links up our `components` with our `redux store`?
    connect method is the only way to link our components to the redux store.  it maps the stores state and dispatch to the props of a component.