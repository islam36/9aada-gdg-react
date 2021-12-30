# React
[React](https://reactjs.org) is JavaScript library for building user interfaces

- component-based (encapsulation, reusability, make debuggin easier)
- creating dynamic web apps is easier to build
- you are just writing html and js (jsx)
- react is basically: view = function(data) which makes our data synchronised with our view
- when data changes => the views __*react*__ to match the new data
- good performance (Virtual DOM)
- very popular, big community, lot of packages

# Requirements
- html
- css
- js

# introducing JSX
extended JavaScript. It allows us to write html code in JS. example:
```js
const title = <h1>Lorem ipsum</h1>

const name = 'islam'
const greeting = <p>hello {name}</p>
//=> <p>hello islam</p>
```

# components
there are 2 ways of creating components: class components and function component. We will cover function compoents because it's easier.
- a component is just a function that returns JSX
- its name must start with capital letter
- must return one element
- if you need to return many elements, wrap them in a parent element or a fragment (<> </>)
example:
```js
//declaring a component
function Title() {
    return (
        <h1>a title</h1>
    );
}

//using fragment
function ManyTitles() {
    return (
        <>
            <h1>first title</h1>
            <h2>second title</h2>
        </>
    );
}
```

 to use a component, use it as an html tag
```js
//using a component
function App() {
    return (
        <div>
            <Title />
        </div>
    );
}
```

components can be nested
```js
function UserProfile() {
    return (
        <div>
            <Img />
            <Name />
            <Description />
        </div>
    );
}
```

we can use css classes
```js
function Title() {
    return (
        <h1 className="text-xl text-red">title</h1>
    );
}
```

we can use inline styling
```js
function Title() {
    return (
        <p style={{
            backgroundColor: 'red',
            color: 'white'
        }}
        >title</p>
    );
}
```


# Props
- a component is a funtion that accepts props as input and return html
```js
//declaring
function Profile(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    );
}

//using destructuring
function Profile({ name, description }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    );
}
```

using props is like using attributes in a html tag
```js
function App() {
    return (
        <div>
            <Profile name="islam" description="web developer" />
        </div>
    );
}
```

there is a special props property that allows to nest components
```js
//declaration
function Card({ children, color }) {
    return (
        <div className={`card bg-${color} `}>
            {/* ... rest of code ... */}
                {children}
            {/* ... */}
        </div>
    );
}

//using them
function App() {
    return (
        <div>
            <Card color="blue">
                <Profile
                    name="islam"
                    description="web developer"
                />
            </Card>
        </div>
    );
}
```

- props are read-only, we must never change them inside the function


# State
- every component can have its own state.
- The state of a component represents the data it's holding.
- when the state changes, the view will 'react' to its change.
- a state in a class is its data
- because functions can't persist data, the team behind React intoduced "react hooks" which are functions that allow function components to "hook" into class features
- "useState" hook is used to create a state
- it returns an array of 2 elements where the first element is the value and the second element is a function that allow us to modify the state
- the state is read-only
- to change it we use the function from the second element

example:
```js
import React, { useState } from 'react';

function Counter() {
    const initialValue = 0;
    const [count, setCount] = useState(initialValue);

    return (
        <div>
            <p>count: {state}</p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >incremnet</button>
        </div>
    );
}

```


- we can use conditional rendring. example:
```js
import React, { useState } from 'react';

function Counter() {
    const initialValue = 0;
    const [count, setCount] = useState(initialValue);

    if (count < 100000) {
        return (
            <div>
                <p>count: {state}</p>
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >incremnet</button>
            </div>
        );
    } else {
        return (
            <div>you reached the maximum value!</div>
        );
    }
}

//we can also use ternary operator
//(condition) ? (return this if true) : (else return this)
function Counter() {
    const initialValue = 0;
    const [count, setCount] = useState(initialValue);

        return (
            (count < 100000) ? 
                (<div>
                    <p>count: {state}</p>
                    <button
                        onClick={() => {
                            setCount(count + 1);
                        }}
                    >incremnet</button>
                </div>)
            :
            (<div>you reached the maximum value!</div>)
        );

}
```


- we can render while iterating through a list
```js
function UsersList() {
    const list = [
        {
            id: 1,
            name: "someone"
        },
        {
            id: 2,
            name: "another"
        },
        {
            id: 3,
            name: "another one"
        },
    ];

    const [users, setUsers] = useState(list);

    return (
        <div>
            {
                users.map((user) => {
                    return (
                        <Profile
                            key={user.id}
                            name={user.name}
                        />
                    );
                })
            }
        </div>
    );
}
```


# handling events
```js

function Input() {
    const [text, setText] = useState("");


    return (
        <div>
            <p>text: {text}</p>
            <input
                type="text"
                value={text}
                onChange={(event) => {
                    setText(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    setText('');
                }}
            >clear</button>
        </div>
    );
}
```


# ressources
[offical docs](https://www.reactjs.org)

[Traversy Media course](https://www.youtube.com/watch?v=w7ejDZ8SWv8)

[Net Ninja course](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)

---
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
