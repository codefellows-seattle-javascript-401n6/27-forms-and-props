# ![CF](http://i.imgur.com/7v5ASc8.png) 27 Reddit Search Engine

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
* Submit a pull request to this repository
* Submit a link to your pull request on canvas
* Submit a question, observation, and how long you spent on canvas  
  
## Learning Objectives  
* Students will learn to manage controlled inputs
* Students will learn to pass data from parent to child through props

## Requirements  
#### Configuration  
Your lab directory must include  
* **README.md** -- with a documention about your lab
* **.gitignore** -- with a robust gitignore
* **.babelrc** -- with all dependencies and dev-dependencies 
* **package.json** -- with all dependencies and dev-dependencies 
* **webpack.config.js** -- with webpack config
* **src/** -- containing the front end code
* **src/main.js** -- containing the entire app
* **src/style** -- containing your sass
* **src/style/main.css** -- containing the front end code
 
#### Feature Tasks 
Create the following components and structure them according to the following diagram.  

```
App
  SearchForm
  SearchResultList
``` 

###### App Component
* Should contain all of the **application state** 
* Should contain methods for modifying the application state
* The state should have a topics array for holding the results of the search

###### SearchForm Component
* Should contain a text input for the user to supply a reddit board to look up
* Should contain a number input for the user to limit the number of results to return 
  * The number must be less than 0 and greater than 100
* `onSubmit` the form should make a request to reddit 
  * It should make a get request to `http://www.reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`
    * **NOTE:** the `www` in `www.reddit.com` is very important here! You'll have CORS problems without it.
  * On success it should pass the results to the application state
  * On failure it should add a class to the form called error and turn the form's inputs borders red

###### SearchResultList Component
* Should inherit all search results through props
* This component does not need to have its own state!
* If there are topics in the application state it should display the unordered list 
* Each list item in the unordered list should contain the following
  * an anchor tag with a href to the topic.url 
    * inside the anchor a heading tag with the topic.title 
    * inside the anchor a p tag with the number of topic.ups 

####  Documentation  
Write a description of the project in your README.md

#### Stretch Goals
Allow users to type in a different subreddit.
