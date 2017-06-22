
import webapp2
from FrontPage import FrontPage




app = webapp2.WSGIApplication([ ("/", FrontPage)
                                ],
                                debug=True)
