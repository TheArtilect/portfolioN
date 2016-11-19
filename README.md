# My Portfolio
### By Ian Agpawa
##### This repo is for my portfolio project from the Udacity Full Stack Nanodegree course.    


### Quick Start
-Clone the repo: `git clone https://github.com/ianagpawa/u-portfolio.git`

#### Viewing the deployed app
Point your browser to `https://ian-agpawa.appspot.com/`

#### Viewing the app locally
In order to view the app locally, you will need to have `Google App Engine` installed on your system.  Once the terminal is the project folder, run `dev_appserver.py .` and point your browser to `http://0.0.0.0:8080/`.

If there are any projects added in the `my_projects.py` file, run `python my_projects.py` to update/generate the `projects.js` file.

The `convertImages.py` script was used to convert the original image files stored in `images/images_src/` into .jpg files and then migrate them to `images/images-jpg/`.  A `grunt` command was then executed resize the images appropriately.  




### What's included
Within the project folder, you will find the following files (image files not included):

```
u-portfolio/
    ├── static/
    |   ├── css/
    |   |    ├── media.css
    |   |    └── style.css
    |   ├── images/
    |   |    ├── images_src/
    |   |    |    └── fixed/
    |   |    └── images-jpg/
    |   └─── js/
    |   |    ├── main.js
    |   |    └── projects.js
    ├── templates/
    |   └── index.html
    ├── .gitignore
    ├── convertImages.py
    ├── Gruntfile.js
    ├── index.html
    ├── my_projects.py
    ├── my_projects.pyc
    ├── package.json
    ├── projects.py
    ├── projects.pyc
    ├── README.md
    ├── transform.py
    └── transform.pyc
```

## Creator

**Ian Agpawa**


[Github](https://github.com/ianagpawa)

 agpawaji@gmail.com
