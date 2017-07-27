# My Portfolio
### By Ian Agpawa
##### This repo is for my responsive web app project from the Udacity's Full Stack Web Developer Nanodegree course.    


### Quick Start
-Clone the repo: `git clone https://github.com/ianagpawa/portfolio.git`

### Install Dependencies
1. Install `google app engine (python)` and `gcloud` on your system.
2.  In the app folder location, create folder `lib`.
3.  Install the following third-party libraries with the following command:
```
pip install -t lib/ <library_name>
```
##### Libraries:
   `httplib2`
   `Requests`

4.  In the same location as the `app.yaml` file, create file `app_engine_config.py`
```
# appengine_config.py
from google.appengine.ext import vendor

# Add any libraries install in the "lib" folder.
vendor.add('lib')
```

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

The `convertImages.py` script was used to convert the original image files stored in `images/images_src/` into .jpg files and then migrate them to `images/images-jpg/`.  

A `grunt` command was then executed resize the images appropriately.  In order to run the `grunt` command, `grunt` must be installed on your system.  To do so, run the following commands to install `grunt` on your system, and install the necessary dependencies.
```
npm install -g grunt-cli
npm install
```


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

#### Credits
Favicon provided by freefavicon.com

https://www.freefavicon.com/freefavicons/objects/iconinfo/code-break-152-246266.html
