## Node Express Handlebars mySQL: Burger
* Code: [Github](https://github.com/mqschwanda/RCB-Burger)  
* Demo: [Heroku](https://rcb-burger.herokuapp.com/)

### Quick Start
**mySQL is required for this application to function. If you do not have mySQL installed on your local machine [click here](https://dev.mysql.com/downloads/installer/) to install the proper software before continuing.**  
1. Clone the repo to your local machine.
```
git clone https://github.com/mqschwanda/RCB-Burger.git
cd RCB-Burger
```
2. Run mysql as root, you will be asked to enter your root password.  
`mysql -u root -p`
3. With the `mysql>` command line tool running you will run the next three commands:   
	* execute database schema file:  
	`source db/schema.sql`   
	* execute database seed file:  
	`source db/seeds.sql`   
	* exit the mysql command line interface:  
	`exit`
4. Run the scripts to start the application for the first time.
```
npm run setup
npm run start
```

### Overview
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured. Each burger in the waiting area also has a "Devour it!" button. When the user clicks it, the burger will move to the right side of the page. The app stores every burger in a database, whether devoured or not.
* A burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Node and MySQL are used to query and route data in the app with Handlebars generating the HTML.

### Use Case
* Users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.
* Each burger in the waiting area also has a "Devour it!" button. When the user clicks it, the burger will move to the right side of the page.
* The app stores every burger in a database, whether devoured or not.

### File Structure:
```
.
├── config
│   ├── connection.js
│   ├── handlebars.js
│   └── packageJSON.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│   └── ...
│
├── public
│   └── assets
│       ├── images
│       │   └── burger.png
│       └── stylesheets
│       		└── style.css
├── views    
│   ├── layouts
│   │   └── main.hbs
│		└── index.hbs
│
├── package.json
│
├── README.md
│
└── server.js

```

### Database Structure:
* Database: `burgers_db`
	* Table: `burgers`
		* Attribute: `id` - an auto incrementing integer that serves as the primary key.
		* Attribute: `burger_name` - a string.
		* Attribute: `devoured` - a boolean.
		* Attribute: `date` - a TIMESTAMP.
