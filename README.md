## Installation

    npm install
    npm run typings install

## API
Have a look at the API to see what kind of data you can fetch

    www.swapi.com  
    
## Running

    npm start
    
## Task

- Provide a detail link and page for a person ( on the empire page )
- Provide a detail link and page for a planet ( on the empire page )
- Ensure we can assign troops to planets. 
- Show a list of vehicles that can be assigned to a planet. ( on the empire page )
- Ensure we can assign vehicles to planets
- Ensure we can attack a planet when rules are fulfilled, see Rules section

### Extra (Optional) 


Filter if possible so that only rebel people and rebel vehicles are shown under each
chosen side

Add two users. Admin and Normal. Admin should be able to assign people/vehicle to
a planet. A user is a person in the list of people from the API, e.g Luke Skywalker. They should only be able to see what planet
they are assigned to.


### Rules
When we have enough troops assigned to a planet we can commence an attack


3 people or 2 people and one vehicle or 2 vehicles are enough to attack a planet.
Anything less means we are not ready to attack

Provide an attack button when conditions are met.


## Solving the task
It's up to you if you want to use this code skeleton, copy paste from angular.io or scaffold one with angular-cli
Its up to you wether to use the deprecated router or the new new alpha router

        