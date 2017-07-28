
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

        var articles = button.data("articles")




        var modal = $(this)

        modal.find('.modal-title').text(title)
        modal.find('#modal-img').attr("src", thumbnail)
        // modal.find('#project-description').text(description)
        modal.find('#details').text(details)
        modal.find('#pj-web-link').attr("href", url)
        modal.find('#web-link').attr("href", url)
        modal.find('#git-repo').attr("href", repo)
        // modal.find('#date-completed').text(date)
        modal.find('#tools').text(tools)
        modal.find('#articles').text(articles + " blog posts")

    })
}

function projectDisplay(){
    $(".project")
        .mouseover( function() {
            $(this).find('.proj-img').css('opacity', '0')
            $(this).find('.inside').css('display', 'block')
            $(this).find(".pj-icon").css('color', 'white')

            $(this).css('background-color', "black")
        })
        .mouseout( function() {
            $(this).find('.proj-img').css('opacity', '1')
            $(this).find('.inside').css('display', 'none')
            $(this).find(".pj-icon").css('color', 'initial')

            $(this).css('background-color', "initial")
        })

        .click( function(){
            $(".nav-bar").css('display', 'none')

        })

    $("#modal-close").click( function(){
        if ( $("#fixed-side-nav").css('display') == "none" ){
            $('.nav-bar').css('display', 'initial')
        } else {
            $('.nav-bar').css('display', 'none')
        }
    })

}


function navIt(){
  var shown = false;
  $("#close-btn").on("click", function(){
    if (shown){
      $(".h-li").css("display", 'none')
      shown = false;
    } else {
      $(".h-li").show();
      shown = true;
    }
  })
}

function getAjax(){
    var base_url = "https://chronicle-170419.appspot.com/projects/"
}



function displayAll(){
    getAjax(self, function (data) {

    })


    modalClick();
    projectDisplay();
    navIt();
}


$(document).ready(displayAll);
