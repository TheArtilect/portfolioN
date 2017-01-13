# My Portfolio
### By Ian Agpawa
##### This repo is for my responsive web app project from the Udacity's Full Stack Web Developer Nanodegree course.    


### Quick Start
-Clone the repo: `git clone https://github.com/ianagpawa/portfolio.git`

#### Viewing the deployed app
Point your browser to `https://ian-agpawa.appspot.com/`

#### Viewing the app locally
In order to view the app locally, you will need to have `Google App Engine` installed on your system.  Once the terminal is the project folder, run command
```
dev_appserver.py .
```
Then point your browser to `http://0.0.0.0:8080/`.

#### Updating Projects
Updating project information is done within the `my_projects.py` file.  To add projects, an instance of `Project` is created, then added to either the `featured` or `projects` array.

After which, using the following command will update/generate the `projects.js` file.
```
python my_projects.py
```

The `convertImages.py` script was used to convert the original image files stored in `images/images_src/` into .jpg files and then migrate them to `images/images-jpg/`.  A `grunt` command was then executed resize the images appropriately.  

### What's included
Within the project folder, you will find the following files (image files not included):

```
portfolio/
    ├── static/
    |   ├── css/
    |   |    ├── media.css
    |   |    └── style.css
    |   ├── images/
    |   |    ├── images_src/
    |   |    |    └── fixed/
    |   |    └── images-jpg/
    |   └─── js/
    |        ├── main.js
    |        └── projects.js
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
