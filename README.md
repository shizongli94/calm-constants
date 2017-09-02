What the package is for? Easy management of system-wide constants without using global      
How to install? npm install --save calm-constants       
How to use?        
    1. Put a file named whatever you what in the root directory of your project. You are only going to use calm-constants in this file and nowhere else.       
    2. API:         
          const constants = require('calm-constants');         
          constants.add('name', 'thomas');      
          console.log(constants.name);      
          >>> output: thomas     
    3. Deletion and alteration of a constant defined using '.add' are impossible.      
