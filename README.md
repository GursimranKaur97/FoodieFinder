# Namaste React

npx // execute a package

npx parcel index.html
//Create a server for us and will host our app on http://localhost:1234


# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- Tree Shaking - removed unused code
- Different dev and prod bundles
    npx parcel index.html(for dev) // npm run start OR npm start
    npx parcel bundle index.html (for prod) // npm run build
- JSX- Javascript Syntax which is easier to create React elements


# Modules

 - Header
  - Logo
  - Nav Items
- Body
  - Search
   - RestaurantContainer
    - RestaurantCard
       - Img
       - Name of Res, Star Rating, Cuisine, Delivery Time
 - Footer
  - Copyright
  - Links
  - Address
  - Contact


# Two types of Export/Import

 - Default Export/Import

 export default <name of variable>;
 import Component from "path";

 - Named Export/Import

 export const Component;
 import {Component} from "path";


# React Hooks
(Normal JS utility functions)
- useState() - Superpowerful State Variable in react
Whenever a state variable updates React will re-render my component

- useEffect()

# Reconciliation Algorithm (React Fiber)
- New way of finding the difference between Virtual DOM & then it'll update the actual DOM
- Res-Container => 7 cards => Filtered out to 3 cards then it creates a Virtual DOM
- Virtual DOM is a representation of actual DOM

# React is fast because
React is doing efficient DOM manipulation because it has a Virtual DOM

# Shimmer UI
Blank Dummy Cards which we show to user while our data is loading

# 2 types of Routing in web apps
- Client Side Routing
- Server Side Routing

# Link 
- Link component don't refresh our whole page like anchor tag so it's more recommendable to use in React

- Link is a wrapper over anchor tag