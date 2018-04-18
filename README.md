# Chuck Norris
### A STG React Certification Module

In this project you will be creating a simple React App that will find and return Chuck Norris jokes. Since this project is designed to test your React skill, there will be comments and instructions provided to help with non-React specific tools.

To more easily showcase your React skill, after each component section you will need to save and push your code to your repository for each section of your work. To begin, create a branch called `initializing`. These first steps will be done in this branch.
## Initializing App
1. Fork the `chuck_norris` repsoitory.
2. Clone the repository onto your computer.
3. Create a new branch called `initializing`.
4. Spin up a new React app using the React CLI.
5. Set up your new app by installing the following npm packages:
  * axios
  * material-ui
  * react-router

6. Add this import to your index.js file: 
  `import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';`
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
1. Create a new branch called `retrieving` and checkout this branch.
2. Create a new folder inside of your `src` folder called `components`. All future component files should be created in this folder.
3. Set up React Router with the following routes:
  * '/' - the main (landing) page
  * '/categories' - a page with all joke categories
  * '/jokes' - a page the lists all viewed jokes by category
  * '/jokes/:id' - displays a specific joke

4. 

