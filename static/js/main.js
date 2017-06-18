
//  dynamically generates projects

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
    var projImg = "<img class='img-responsive proj-img' src='%image%' alt='thumbnail of project homepage' data-toggle='modal' data-target='#Modal'>"
    var projTitle = "<h4 class='pj-title'>%title%</h4>"

    count = 1

    for (project in projectsArr){
        //  makes rows, (2 to a row for featured, 3 for projects)
        if (count % rowSize == 1){
            $("#" + divID).append(projRow)
        }

        var title = (projectsArr[project].title).split(" ").join("-").toLowerCase()

        projectStart = projStart.replace("%id%", title)
        $(".proj-row:last").append(projectStart)
        // image added to project start

        var imgSrc = projImg.replace("%image%",
                    '/static/images/' + projectsArr[project].thumbnail + "-600.jpg")

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

    function whichList(name){
        if (name == 'featured'){
            return featured
        } else {
            return projects
        }
    }

    // modal
   $(".project").on("click", function(){

        //   get id of project
        var pjID = ($(this).attr('id'))


        //  set title of project
        var pjTitle = $("#" + pjID + " > h4:first").text()
        $("#myModalLabel").text(pjTitle)


        // set description of project
        var projectArrInfo = projectKeys[pjID]
        var listing = whichList(projectArrInfo[0])
        var position = projectArrInfo[1]

        $("#date-completed").text(listing[position].date)

        var description = listing[position].description;
        $("#project-description").text(description);

        // set details of project
        var details = listing[position].details;
        $("#details").text(details);

        //  set project image
        $("#modal-img").attr("src", '/static/images/' + listing[position].thumbnail + "-600.jpg")
        // set website link
        $("#pj-web-link").attr("href", listing[position].url);
        // set tools
        $("#tools").text("Made with " + listing[position].tools.join(", ") + ".");
        // set github link
        $('#git-repo').attr('href', listing[position].repo);
        //  set id of modal, dynamically changes
        $(".modal").attr('id', pjID + "-modal");
   });
}

function displayAll(){
    createProj(featured);
    createProj(projects);
    modalClick();
}


$(document).ready(displayAll);
$(document).on("page:load", displayAll)
