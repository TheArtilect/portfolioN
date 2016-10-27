


//  function dynamically generates html for projects in 
//  featured and projects section


function createProj(projectsArr){
    var divID;
    var mdSize;
    var rowSize;
    
    if (projectsArr == projects){
        divID = "projects"
        mdSize = '4'
        rowSize = 3
    } else {
        divID = "featured"
        mdSize = '6'
        rowSize = 2
    }


    var projRow = "<div class='row text-center proj-row'></div>"

    var projStart = "<div class='col-md-" + mdSize + " project' id='%id%'></div>"
    var projImg = "<img class='img-responsive' src='%images/imageSource%' alt='thumbnail of project homepage' data-toggle='modal' data-target='#%id%-modal'>"
    var projTitle = "<h3>%title%</h3>"

    count = 1

    for (project in projectsArr){
        //  makes rows, 3 projects to a row
        if (count % rowSize == 1){
            $("#" + divID).append(projRow)
        }
        
        var title = (projectsArr[project].title).split(" ").join("-").toLowerCase()
        
        projectStart = projStart.replace("%id%", title)
        $(".proj-row:last").append(projectStart)
        // image added to project start
        
        var imgSrc = projImg.replace("%images/imageSource%",
                    "http://placekitten.com/555/300")
                    // projectsArr[project].thumbnail)
        
        var id = imgSrc.replace("%id%", title)
        $(".project:last").append(id)

        // title added
        var title = projTitle.replace("%title%", projectsArr[project].title)
        $(".project:last").append(title)

        count += 1
    }
}




//dynamic modal
function modalClick(){
    
    //  figuring out which list project belongs in
    function whichList(name){
        if (name == 'featured'){
            return featured
        } else {
            return projects
        }
    }
    
    // click on project for modal
   $(".project").on("click", function(){
        //   get id of project
        var pjID = ($(this).attr('id'))
        //  set title of project
        var pjTitle = $("#" + pjID + " > h3:first").text()
        $("#myModalLabel").text(pjTitle)
        // set description of project 
        var projectArrInfo = projectKeys[pjID]
        var listing = whichList(projectArrInfo[0])
        var position = projectArrInfo[1]
        var description = listing[position].description
        $("#project-description").text(description)
        
        //  set id of modal, dynamically changes
        $(".modal").attr('id', pjID + "-modal")
   })
}



function displayAll(){
    createProj(featured)
    createProj(projects)
    modalClick()
}


$(document).ready(displayAll);
$(document).on("page:load", displayAll)
