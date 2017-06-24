
//dynamic modal
function modalClick(){
    $("#Modal").on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)

        var title = button.data('title')
        var thumbnail = button.data('thumbnail')
        thumbnail = "/static/images/" + thumbnail + "-600.jpg"
        // var description = button.data('description')
        var details = button.data('details')
        var url = button.data('url')
        var repo = button.data('repo')
        // var date = button.data('date')
        var tools = button.data('tools')
        tools = "Built with " + tools


        var modal = $(this)

        modal.find('.modal-title').text(title)
        modal.find('#modal-img').attr("src", thumbnail)
        // modal.find('#project-description').text(description)
        modal.find('#details').text(details)
        modal.find('#pj-web-link').attr("href", url)
        modal.find('#git-repo').attr("href", repo)
        // modal.find('#date-completed').text(date)
        modal.find('#tools').text(tools)
    })
}


function projectDisplay(){
    $(".project")
        .mouseover( function() {
            $(this).find('.proj-img').css('opacity', '0')
            $(this).find('.inside').css('display', 'block')

            $(this).css('background-color', "black")
        })
        .mouseout( function() {
            $(this).find('.proj-img').css('opacity', '1')
            $(this).find('.inside').css('display', 'none')

            $(this).css('background-color', "initial")
        })

}

function showcaseProject(){
    $(".project-pj").on('click',function(){



        var info = $(this).data()

        var title = info.title
        var thumbnail = info.thumbnail
        var description = info.description
        var details = info.details
        var url = info.url
        var repo = info.repo
        var date = info.date
        var tools = info.tools

        // $("#showcase").css("background-image", "url('/static/images/" + thumbnail + "-600.jpg')")

        $("#direction").hide()

        $("#showcase-title").text(title)
        $("#showcase-description").text(description)
        $("#showcase-details").text(details)

        $("#showcase-website").text(url)
        $("#showcase-link").attr("href", url)

        $("#showcase-repo").text("Github Repo")
        $("#showcase-git").attr('href', repo)

        $("#showcase-tools").text(tools)


    })
}

function displayAll(){
    modalClick();
    projectDisplay();
    showcaseProject();
}


$(document).ready(displayAll);
