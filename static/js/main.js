



//dynamic modal
function modalClick(){
    $("#Modal").on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)

        var title = button.data('title')
        var thumbnail = button.data('thumbnail')
        thumbnail = "/static/images/" + thumbnail + "-600.jpg"
        var description = button.data('description')
        var details = button.data('details')
        var url = button.data('url')
        var repo = button.data('repo')
        var date = button.data('date')
        var tools = button.data('tools')


        var modal = $(this)

        modal.find('.modal-title').text(title)
        modal.find('#modal-img').attr("src", thumbnail)
        modal.find('#project-description').text(description)
        modal.find('#details').text(details)
        modal.find('#pj-web-link').attr("href", url)
        modal.find('#git-repo').attr("href", repo)
        modal.find('#date-completed').text(date)
        modal.find('#tools').text(tools)
    })
}

function displayAll(){
    modalClick();
}


$(document).ready(displayAll);
