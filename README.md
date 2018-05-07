# Chuck Norris
### A STG React Certification Module

In this project you will be creating a simple React App that will find and return Chuck Norris jokes. Since this project is designed to test your Javascript fundamentals and basic React skills, there will be comments and instructions provided to help with non-React specific tools.

To more easily showcase your React skill, after each component section you will need to save and push your code to your repository for each section of your work. We have provided a few resources to assist you with understanding the fundamentals of Javascript, React and Redux. You can find these resourcs in our [React Certification Resources](https://drive.google.com/file/d/1jriPUNnuNDLCbF-CFVq0u9wRt_LOdbXg/view?usp=sharing). These first steps will be done in this branch. Do not spend a lot of time on styling this project. We want to see enough styling to know that you understand how to style React components but we do not want you to spend a lot of time on styling as this is not the focus of this project certification.

## Initializing App
1. Fork the `chuck_norris` repository.
2. Clone that repository onto your computer.
3. Create a new branch called `initializing` and checkout this branch. This is where you will begin working on this project.
4. Spin up a new React app using the React CLI.
5. Set up your new app by installing the following npm packages:
  * axios
  * material-ui
  * react-router-dom
  * react-redux
  * redux

6. Add this import to your index.js file: 
  `import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';`  
  More information is available for use of `material-ui` at [http://www.material-ui.com/#/](http://www.material-ui.com/#/).
7. Wrap the `<App />` tag inside of `<MuiThemeProvider>` tags.
```
const MyApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
)

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
```
8. In your App.js file import `AppBar`.
9. Remove all the existing code from your `render()` method and replace with `<AppBar title="{your name}" />`.
10. Save your work and push these changes to Bitbucket.

## Routing
1. Create a new branch called `routing` and checkout this branch.
2. Create a new folder inside of your `src` folder called `components`. All future component files should be created in this folder.
3. Set up React Router with the following routes:
  * `/` - the main (landing) page
  * `/categories` - a page with all joke categories
  * `/jokes` - a page the lists all viewed jokes by category

4. Add a button, menu, or some other way to navigate between routes.
5. Save your work and push these changes to Bitbucket.

## Fetching Data
1. Create a new branch called `data` and checkout this branch.
2. On the main (landing) page:
  * give a short explanation of the pages 
  * provide links to each page (use a menu)

3. On the `Categories` page:
  * fetch a list of all the joke categories and display them in a list 
  * The api endpoint to get the joke categories is: [https://api.chucknorris.io/jokes/categories](https://api.chucknorris.io/jokes/categories)
  * Make each category in the list clickable
  * When a category is clicked it should show a random joke from that category (ex: open a dialog with a joke)

4. On the `Jokes` page:
  * Create a search bar with a submit button
  * When a search term is submitted you should fetch jokes from this api endpoint: [https://api.chucknorris.io/jokes/search?query={query}](https://api.chucknorris.io/jokes/search?query={query})
  * Display the results of the search query in a list
  * Each listed joke should be clickable
  * When a joke is selected it should be displayed (ex: open a dialog the joke)

5. Save your work and push these changes to Bitbucket

## Flux / Redux
1. Create a new branch called `redux` and checkout this branch.
2. Refactor your app to use Redux and a Redux Store.
3. Create your appliction state in Redux to have the following model structure:
```
  {
    joke: { id: '{joke_id}'}, text: '{joke_text}', icon: '{joke_icon_url}' }
    categories: [ 'category_1', 'category_2', 'etc...' ],
    viewedJokes: [ joke_1, joke_2, etc... ]
  }
```
4. Create 3 Reducers for the above data model: `joke`, `jokes`, and `viewedJokes`.
5. Create actions to coorespond with the above data model.
6. Implement `connect`, `mapStateToProps` and `mapDispatchToProps` on your `Categories` page so that each joke that is selected is added to the `viewedJokes` object in the Redux Store.  
  Extra credit: connect the list of categories and each joke into props
7. Create a new page, on a new route `/viewed` that will display all of the jokes that the user has looked at (selected).
8. Save your work and push these changes to Bitbucket

## Finish Project
1. Merge all of your code into your `Master` branch.
2. Inside of your `Master` branch you will add comments to your code to demostrate your use and knowledge of Javascript fundamentals as well as React basics. This should not be hard, but it will help us recognize your knowledge and use of ES6 and ES7 basics. **You do not need to identify every instance**, just 1-2 instances to show you know and understand these concepts.
3. In your code you should add comments to demonstrate these Javascript fundamentals:

  * Closures
  * `this` keyword
  * Arrow functions
  * Array Functions

    + Map
    + Filter
    + Reduce

  * Destructuring
  * Spread Operator
  * Promises
  * Blocked-scoped variables `let` and `const`

4. Comments should be proceeded with a `#` and should look something like this:
```
  // #closure 
  function myClosure() = {...}
```
  or this:
```
  /* #map function */
  myArray.map(...);
```
5. In your code you should add comments to demonstrate these React basics:

  * JSX
  * Rendering Elements
  * Components
  * Lifecycle Hooks (at least 2-3 different hooks should be commented)
  * Event Handling
  * Props
  * State
  * Lists & Keys
  * Routing
  * Redux Reducers
  * Styles (2-3 different methods of applying styles to React components)

6. Comments should be styled similar to the Javascript comments.
7. Remove all console.log statements and other personal comments from your code.
8. Push and/or merge the commented code to your `Master` branch.
9. Email your practice manager that your have completed the certification project and that it is now ready for review!

#**Congratulations**
You have completed the React Certification!