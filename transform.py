
# changes instance to object, for js

def dicting(x):
    return x.__dict__

def change(arr):
    return list((map(dicting, arr)))





#  gets position and list for each project, easier to recall info from project ID
#  for the modal, $(this)

allKeys = {}

def keys(arr, featured):
    listing = ''
    if (arr == featured):
        listing = 'featured'
    else:
        listing = 'projects'
    count = 0
    for x in arr:
        allKeys[x.__dict__["title"]] = [listing, count]
        count += 1
    

