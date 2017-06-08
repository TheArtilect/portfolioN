
    var featured = [
    {
        "description":"Item catalog that stores playlists of songs.",
        "title":"Music Catalog",
        "url":"http://ec2-54-236-32-135.compute-1.amazonaws.com/",
        "repo":"https://github.com/ianagpawa/catalog",
        "details":"Provided user registration and authentication system, where only users can post, edit and delete their own items.  Authentication is handled by Oauth2 through Facebook and Google, and HTTP methods are mapped to CRUD operations to implement a properly secured web application.  Developed database schema for storing playlists of songs.  Configured and secured a baseline Ubuntu Amazon Web Services server into an Apache Web Server and PostgreSQL database server.",
        "date":"Dec. 2016",
        "tools":[
            "Flask",
            "PostgreSQL",
            "Python",
            "Amazon Web Services"
        ],
        "thumbnail":"catalog1"
    },
    {
        "description":"Neighborhood map of Spanish Harlem's finest tacos.",
        "title":"TacoHub",
        "url":"https://tacohub-155203.appspot.com/",
        "repo":"https://github.com/ianagpawa/neighborhood-map",
        "details":"Developed single-page application that utilizes Foursquare API to asynchronously display restaurant info on Google Maps.  Implemented functionality of dynamically updating and filtering restaurant map markers and info with Knockoutjs.",
        "date":"Jan. 2017",
        "tools":[
            "Knockoutjs",
            "Python",
            "Google App Engine",
            "Jinja"
        ],
        "thumbnail":"tacohub"
    },
    {
        "description":"Multi-user blog focusing on music and personal history curated with snippets of prose.",
        "title":"The Synchronicity Collective",
        "url":"https://synchronicity-collective.appspot.com/",
        "repo":"https://github.com/ianagpawa/synchronicity",
        "details":"Built an authentication system for users to register, sign in, and then create posts.  Set permissions so that only users can 'Like' and comment on posts.  Developed database schema for storing users and their content.",
        "date":"Nov. 2016",
        "tools":[
            "Python",
            "Google App Engine",
            "Jinja"
        ],
        "thumbnail":"synchronicity"
    },
    {
        "description":"Local weather forecast.",
        "title":"Weather Forecast",
        "url":"https://weather-169903.appspot.com",
        "repo":"https://github.com/ianagpawa/weather2.0",
        "details":"Developed a seven day weather forecast web app utilizing the Weather Underground API",
        "date":"Jun. 2017",
        "tools":[
            "Python",
            "Google App Engine",
            "Jinja"
        ],
        "thumbnail":"weather2"
    },
    {
        "description":"A Simon Says clone.",
        "title":"Simon Says",
        "url":"https://simon-says-ia.herokuapp.com",
        "repo":"https://github.com/ianagpawa/simon-says",
        "details":"Developed game that uses light and audio elements.",
        "date":"Jul. 2016",
        "tools":[
            "Ruby on Rails",
            "Heroku"
        ],
        "thumbnail":"simon"
    },
    {
        "description":"An image search microservice.",
        "title":"Image Search",
        "url":"https://imgsearch-ia.herokuapp.com",
        "repo":"https://github.com/ianagpawa/imageSearch",
        "details":"Developed an image search API microservice using the Google Custom Search API.  Search terms can be passed as parameters and a JSON output will be received.  Search results can be paginated through by passing an additional parameter.  Search terms are recorded and the ten most recent search can be viewed via an API endpoint. ",
        "date":"Oct. 2016",
        "tools":[
            "MongoDB",
            "Express",
            "Node",
            "Heroku"
        ],
        "thumbnail":"image"
    }
]

    var projects = [
    {
        "description":"A few of my favorite quotes.",
        "title":"Random Quote Generator",
        "url":"https://rand-quote-gen.herokuapp.com",
        "repo":"https://github.com/ianagpawa/random-quote",
        "details":"My first Javascript project.",
        "date":"Mar. 2016",
        "tools":[
            "Ruby on Rails",
            "Heroku"
        ],
        "thumbnail":"random"
    },
    {
        "description":"A tic tac toe game.",
        "title":"Tic Tac Toe",
        "url":"https://ianagpawa.github.io/TickyTacky",
        "repo":"https://github.com/ianagpawa/TickyTacky",
        "details":"",
        "date":"Jul. 2016",
        "tools":[
            "Github"
        ],
        "thumbnail":"tic"
    },
    {
        "description":"A fully functional simple calculator.",
        "title":"Javascript Calculator",
        "url":"https://ianagpawa.github.io/calculator",
        "repo":"https://github.com/ianagpawa/calculator",
        "details":"First project utilizing 'this' in js.",
        "date":"Jun. 2016",
        "tools":[
            "Github"
        ],
        "thumbnail":"calculator"
    },
    {
        "description":"A timer that can be used to for cooking pomodoro sauce or scheduling productivity.",
        "title":"Pomodoro Productivity Timer",
        "url":"https://pomodoro-timer-ia.herokuapp.com",
        "repo":"https://github.com/ianagpawa/pomodoro",
        "details":"First project utilizing setInterval().",
        "date":"Jun. 2016",
        "tools":[
            "Ruby on Rails",
            "Heroku"
        ],
        "thumbnail":"pomodoro"
    },
    {
        "description":"A url shortener microservice.  Shortened url addresses redirect to the original url.  First project using MongoDB.",
        "title":"Url Shortener",
        "url":"https://u-short.herokuapp.com",
        "repo":"https://github.com/ianagpawa/urlShortener",
        "details":"Developed API endpoint for shortening url addresses.  Set up MongoDB to store and map shortened URLs to their original address for later retrieval and use.",
        "date":"Sept. 2016",
        "tools":[
            "MongoDB",
            "Express",
            "Node",
            "Heroku"
        ],
        "thumbnail":"url-shortener"
    },
    {
        "description":"Simple script for music playlists.",
        "title":"Audacious",
        "url":"https://github.com/ianagpawa/audacious",
        "repo":"https://github.com/ianagpawa/audacious",
        "details":[
            ""
        ],
        "date":"Jan. 2017",
        "tools":[
            "Python"
        ],
        "thumbnail":"github"
    },
    {
        "description":"For searching and viewing a listing of wikipedia articles. ",
        "title":"Wiki",
        "url":"https://wiki-it-ia.herokuapp.com",
        "repo":"https://github.com/ianagpawa/wiki",
        "details":"Utilized Wikipedia API.",
        "date":"Apr. 2016",
        "tools":[
            "Ruby on Rails",
            "Heroku"
        ],
        "thumbnail":"wiki"
    },
    {
        "description":"A request header parser microservice that will return your browser IP address, language, and operating system.",
        "title":"Request Header Parser",
        "url":"https://header-parser-ia.herokuapp.com",
        "repo":"https://github.com/ianagpawa/headerParser",
        "details":"",
        "date":"Sep. 2016",
        "tools":[
            "Express",
            "Node",
            "Heroku"
        ],
        "thumbnail":"header"
    },
    {
        "description":"A timestamp microservice.  First Node api project.",
        "title":"TimeStamp",
        "url":"https://timestamp-microservice-ia.herokuapp.com/",
        "repo":"https://github.com/ianagpawa/timestamp",
        "details":"",
        "date":"Sep. 2016",
        "tools":[
            "Express",
            "Node",
            "Heroku"
        ],
        "thumbnail":"timestamp"
    },
    {
        "description":"A file metadata microservice.  Uploading files will return a  JSON object of the file's name, file type, and size in bytes.",
        "title":"File Metadata",
        "url":"https://metadata-ia.herokuapp.com",
        "repo":"https://github.com/ianagpawa/metadata",
        "details":"",
        "date":"Oct. 2016",
        "tools":[
            "Express",
            "Node",
            "Heroku"
        ],
        "thumbnail":"meta"
    },
    {
        "description":"Fullstack javascript local weather app",
        "title":"Local Weather",
        "url":"https://weather-ia.herokuapp.com/",
        "repo":"https://github.com/ianagpawa/weather",
        "details":"Utilized Express as middleware for retrieving weather info from Weather Underground API",
        "date":"Oct. 2016",
        "tools":[
            "Express",
            "Node",
            "Heroku"
        ],
        "thumbnail":"weather"
    },
    {
        "description":"Ruby on Rails social stocks tracker project.",
        "title":"Finance Tracker",
        "url":"https://thawing-plains-40720.herokuapp.com/users/sign_in",
        "repo":"https://github.com/ianagpawa/finance-tracker",
        "details":"Built using scaffolding and bootstrap.  Styling in progress,functionality complete.",
        "date":"Mar. 2016",
        "tools":[
            "Ruby on Rails",
            "Heroku"
        ],
        "thumbnail":"finance"
    },
    {
        "description":"Tribute Project about Hunter S. Thompson.",
        "title":"Tribute Project",
        "url":"https://hunter-s-tribute.herokuapp.com",
        "repo":"https://github.com/ianagpawa/tribute",
        "details":"My first HTML and CSS project.",
        "date":"Feb. 2016",
        "tools":[
            "Ruby on Rails",
            "Heroku"
        ],
        "thumbnail":"tribute"
    },
    {
        "description":"Ruby on Rails multi-user blog.",
        "title":"AlphaBlog",
        "url":"https://project-prometheus-alphablog.herokuapp.com",
        "repo":"https://github.com/ianagpawa/alpha-blog",
        "details":"My first project, built from the ground up.  Styling and content in progress, functionality completed.",
        "date":"Jan. 2016",
        "tools":[
            "Ruby on Rails",
            "Heroku"
        ],
        "thumbnail":"alpha"
    },
    {
        "description":"Personal Portfolio - NO LONGER USED.",
        "title":"Portfolio",
        "url":"https://ian-agpawa.herokuapp.com",
        "repo":"https://github.com/ianagpawa/old-portfolio",
        "details":"",
        "date":"Apr. 2016",
        "tools":[
            "Ruby on Rails",
            "Heroku"
        ],
        "thumbnail":"portfolio"
    }
]

    var projectKeys = {
    "wiki":[
        "projects",
        6
    ],
    "file-metadata":[
        "projects",
        9
    ],
    "javascript-calculator":[
        "projects",
        2
    ],
    "request-header-parser":[
        "projects",
        7
    ],
    "timestamp":[
        "projects",
        8
    ],
    "alphablog":[
        "projects",
        13
    ],
    "image-search":[
        "featured",
        5
    ],
    "pomodoro-productivity-timer":[
        "projects",
        3
    ],
    "audacious":[
        "projects",
        5
    ],
    "the-synchronicity-collective":[
        "featured",
        2
    ],
    "local-weather":[
        "projects",
        10
    ],
    "weather-forecast":[
        "featured",
        3
    ],
    "tic-tac-toe":[
        "projects",
        1
    ],
    "simon-says":[
        "featured",
        4
    ],
    "url-shortener":[
        "projects",
        4
    ],
    "tacohub":[
        "featured",
        1
    ],
    "random-quote-generator":[
        "projects",
        0
    ],
    "portfolio":[
        "projects",
        14
    ],
    "finance-tracker":[
        "projects",
        11
    ],
    "tribute-project":[
        "projects",
        12
    ],
    "music-catalog":[
        "featured",
        0
    ]
}

