
import webapp2
from FrontPage import FrontPage
from OtherProjects import OtherProjects




app = webapp2.WSGIApplication([ ("/", FrontPage),
                                ("/projects", OtherProjects)
                                ],
                                debug=True)
