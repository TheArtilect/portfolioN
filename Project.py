import json
import httplib2
import requests
import urllib

class Project():
    ''' This class is for my projects
    Attributes:
        title (str):  Title of project.
        description (str): Description of project.
        details (str): Details of the project.
        url (str): Url link to website.
        source_code (str): Url link to github repo.
        tools (arr): Tools used in the development of project.
        thumbnail (str): Thumbnail preview image of project homepage.
        date (str): Date completed.
    '''

    def __init__(self, title, description, details, url, repo, tools, thumbnail, date):
        self.title = title
        self.description = description
        self.details = details
        self.url = url
        self.repo = repo
        toolString = ''
        i = 0
        while i < (len(tools) - 1):
            toolString += tools[i] + ", "
            i += 1
        if len(tools) > 1:
            toolString += "and " + tools[i] + '.'
        else:
            toolString = tools[0]



        toolString = "Made with " + toolString

        self.tools = toolString
        self.thumbnail = thumbnail
        self.date = date

    def get_articles(self):
        # pj_name = self.title
        pj_name = "Portfolio"

        url = "https://chronicle-170419.appspot.com/projects/%s/JSON" % pj_name

        h = httplib2.Http()
        results = json.loads(h.request(url, 'GET')[1])
        print results
