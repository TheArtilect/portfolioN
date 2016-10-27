function createProj(projectsArr){
    /*
    var proj = "<div class='col-md-6 feature-proj'><img class='img-responsive' src='http://placekitten.com/555/300' alt='placeholder' data-toggle='modal' data-target='#project1'><h3>HERE</h3><p><a href='http://github.com'>Link to project</a></p></div>"

    var start = '<div class="modal fade" id="project1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title" id="myModalLabel">Favorite App Page</h4></div><div class="modal-body"><img class="img-responsive" src="http://placekitten.com/555/300">This was my first project in this class. I learned a lot about HTML and CSS.</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>'
*/
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

    var projStart = "<div class='col-md-" + mdSize + " project'></div>"
    var projImg = "<img class='img-responsive' src='%images/imageSource%' alt='thumbnail of project homepage' data-toggle='modal' data-target='#%id%'>"
    var projTitle = "<h3>%title%</h3>"

    count = 1

    for (project in projectsArr){
        //  makes rows, 3 projects to a row
        if (count % rowSize == 1){
            $("#" + divID).append(projRow)
        }


        $(".proj-row:last").append(projStart)
        // image added to project start
        
        var imgSrc = projImg.replace("%images/imageSource%",
                    "http://placekitten.com/555/300")
                    // projectsArr[project].thumbnail)
                    
        var id = imgSrc.replace("%id%", projectsArr[project].title)
        $(".project:last").append(id)

        // title added
        var title = projTitle.replace("%title%", projectsArr[project].title)
        $(".project:last").append(title)

        count += 1

    }

}


function displayAll(){
    createProj(featured)
    createProj(projects)
}


$(document).ready(displayAll);
$(document).on("page:load", displayAll)
