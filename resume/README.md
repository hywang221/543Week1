# Online FE Resume (React + Redux + Vite + AntDesign)

## Website Url   
https://wonderful-sky-043b1361e.1.azurestaticapps.net/resume/dist

## Project Overview   
This project is a front-end engineer’s online resume website designed to be shared with potential employers during job applications. It includes several key modules such as Personal Information, Skills, Work Experience, and Project Showcase.   


The landing page provides a clean overview of each module, with a navigation bar at the top that allows users to jump to detailed sections.   
The Company page displays a list of companies, along with a search bar at the top that allows users to quickly filter companies by name.
The Project Experience page includes a dropdown menu that lets users filter projects based on the framework used.   

## Overview of Framework Choice    
I chose ```React``` to build my project. ```React``` is a popular front-end framework that makes it easy to create reusable components and build interactive user interfaces.   

#### Justification   
```React``` fits the needs of my project because:   

It handles multiple pages and dynamic content very well.   
```React Router``` makes navigation simple.   
```Redux``` helps manage data across different pages.   
It works smoothly with UI libraries like ```Ant Design```.   
```React``` is easy to maintain and scale when the project grows.   

Overall, ```React``` allowed me to build the project faster, keep the code organized, and meet all the project requirements.   

## Technologies used       
Framework: ```React```.     
Routing: ```React Router```.     
State Management: ```Redux```.     
UI Library: ```Ant Design```.     
Build Tool: ```Vite```.     
Code Linting: ```ESLint```.    
Source Control: ```Git, Github```.      
Cloud Deployment: ```Azure```.     
This project is built with ```React``` using ```Vite```, incorporates ```Redux``` for state management, uses ```React Router``` to handle client-side routing, and uses ```Ant Design``` as the UI component library. The project uses ```Git``` for version control and is hosted on ```GitHub```. It is deployed to the cloud using ```Azure```.    

## Lessons Learned    
Through this project, I learned how to build a ```React``` application using ```Vite``` and deploy it to ```Azure```. I used ```Redux``` to load data from local ```JSON``` files, simulating backend ```API``` calls to dynamically render the website content. By implementing search fields and dropdown filters, I became more proficient in retrieving and processing data based on user-selected conditions and displaying the results on the frontend.   

For the navigation bar, I designed a ```CSS3``` slider highlight effect, which helped me gain deeper experience with ```CSS3``` animations and styling.    

Overall, this project not only strengthened my front-end development skills, but also allowed me to experience the full development lifecycle—including project planning, design, and progress management—giving me a more comprehensive understanding of front-end engineering.    

## Future scope    
Due to time constraints, many features have not yet been implemented. In the future, I plan to improve mobile responsiveness and add internationalization support to enable multilingual displays.   
For the Project Experience page, I intend to include video sections so that employers can better understand the showcased projects.   
I am also considering adding user authentication to display different content based on user roles and permissions.   


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
├─ resume
│  ├─ README.md
│  ├─ eslint.config.js
│  ├─ img
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ App.js                         # Root component
│  │  ├─ App.less
│  │  ├─ assets
│  │  ├─ components                     # Components
│  │  │  ├─ Footer.js
│  │  │  ├─ Nav.js
│  │  │  ├─ footer.module.less
│  │  │  └─ nav.module.less
│  │  ├─ images
│  │  ├─ index.css
│  │  ├─ main.js                        # Application entry file
│  │  ├─ mockData                       # Mock Data
│  │  │  ├─ company.json
│  │  │  ├─ home.json
│  │  │  ├─ skill.json
│  │  │  └─ work.json
│  │  ├─ pages                          # Page-level components (views)
│  │  │  ├─ Company.js
│  │  │  ├─ Home.js
│  │  │  ├─ Skill.js
│  │  │  ├─ Work.js
│  │  │  ├─ company.module.less
│  │  │  ├─ home.module.less
│  │  │  ├─ skill.module.less
│  │  │  └─ work.module.less
│  │  └─ store                          # State Management
│  │     ├─ index.js
│  │     └─ slices
│  │        ├─ companySlice.js
│  │        ├─ counterSlice.js
│  │        ├─ homeSlice.js
│  │        ├─ skillSlice.js
│  │        └─ workSlice.js
│  └─ vite.config.js

```




