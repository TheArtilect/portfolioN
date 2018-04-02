from Handler import Handler
from my_projects import  projects

class OtherProjects(Handler):
    def get(self):
        return self.render("test.html", projects=projects)
