# Crazy Game System (Vue 3 + Vite + Element-Plus)

This is a Switch Game Information System where users can browse Nintendo Switch game details, view player reviews, and save their favorite games to a personal collection.   
(This is a Vue 3 + Vite project, using Element Plus as the UI component library)  
## Website Url   
https://wonderful-sky-043b1361e.1.azurestaticapps.net/gamer/dist/index.html

#### Game List Page (Home Page):   
Users can browse the list of games. Each game has a "Favorite" button that allows users to add it to their favorites. Favorited games can be viewed on the Collection page.
Clicking the "Details" button or the game name navigates to the Game Details page.

#### Game Details Page:   
Displays comprehensive information about the selected game along with player reviews.   
#### Random Game Page:    
Displays a randomly selected game and its details.   
#### Collection Page:    
Displays the user’s list of favorited games, along with the player reviews associated with each game.   

## Project setup, start and build
Please use npm version 22 or above.   
```
# Install project dependencies
npm install
# Start the project
npm run dev
# Build the project
npm run build
```


## Project Structure
```
├── public/                 
│   └── favicon.ico
│
├── src/
│   │
│   ├── components/         
│   │   ├── Comment.vue     # Reused on the game detail page and the collection page
│   │   └── Sidebar.vue     # The sidebar is fixed on the left side of the page
│   │
│   ├── router/             # Application routing
│   │   └── index.js
│   │
│   ├── pages/              # Page-level components (views)
│   │   ├── GameList.vue    # Game list page
│   │   ├── GameDetail.vue  # Game detail page; Random game page
│   │   └── CheckList.vue   # Game Collection list page
│   │
│   ├── utils/
│   │   ├── comments.js     # Export a JS object as mock comments list data      
│   │   ├── gameInfo.js     # Export a JS object as mock game list data
│   │   └── index.js        # debounce, checkFirstLogin and other utility functions
│   │
│   ├── images/ 
│   │
│   ├── style.css           # Global styles
│   ├── App.vue             # Root component
│   └── main.js             # Application entry file
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

