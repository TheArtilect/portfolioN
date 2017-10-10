
import webapp2
from FrontPage import FrontPage
from OtherProjects import OtherProjects
from ProjectArticles import ProjectArticles




app = webapp2.WSGIApplication([ ("/", FrontPage),
                                ("/projects", OtherProjects),
                                ("/articles", ProjectArticles)
                                ]
                                # debug=True
                                )
