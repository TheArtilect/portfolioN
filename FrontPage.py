from Handler import Handler
from my_projects import featured, special, projects

class FrontPage(Handler):
    def get(self):
        return self.render("index_revamp.html", featured=featured, special=special, projects=projects)
