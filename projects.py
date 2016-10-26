class Project():
    ''' This class is for my projects
    Attributes:
        title (str):  Title of project.
        description (str): Description of project.
        url (str): Url link to website.
        source_code (str): Url link to github repo.
        tools (arr): Tools used in the development of project.
        thumbnail (str): Thumbnail preview image of project homepage.
        date (str): Date completed.
    '''
    
    def __init__(self, title, description, url, repo, tools, thumbnail, date):
        self.title = title
        self.description = description
        self.url = url
        self.repo = repo
        self.tools = tools
        self.thumbnail = thumbnail
        self.date = date
