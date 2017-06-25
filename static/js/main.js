
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
        modal.find('#web-link').attr("href", url)
        modal.find('#git-repo').attr("href", repo)
        // modal.find('#date-completed').text(date)
        modal.find('#tools').text(tools)
    })
}


function projectDisplay(){
    $(".project, .pj-right")
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

}



function displayAll(){
    modalClick();
    projectDisplay();
    navIt();
}


var page = "home";

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


  function colorNav(){
    if (page == "home"){
      $(".n-link").css("color", "black")
    } else if (page == "resume"){
      $(".n-link").css("color", "white")
    }
  }

  function dropDowns(){
    if (page == "home"){
     $(".resume-drop").css("display", "none");
     $(".home-drop").show(); // By Ian Agpawa
    } else if (page == 'resume'){
      $(".home-drop").css("display", "none");
      $(".resume-drop").show();
    }
  }


  $("#page-link").on("click", function(){
    page = "home";
  })

  $("#resume-link").on("click", function(){
    page = 'resume';
  })

  colorNav();
  dropDowns();


  function samePage(){
    if (page == "home"){
      $("#page-link").css("display", "none");
      $("#in-page-link").show();
      $("#resume-link").show();
      $("#in-resume-link").css("display", 'none');
    } else if (page == "resume"){
      $("#resume-link").css('display', 'none');
      $("#in-resume-link").show();
      $("#page-link").show();
      $("#in-page-link").css('display', 'none');
    }
  }

  samePage();

}


$(document).ready(displayAll);
