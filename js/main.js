function displayAll(){
    var proj = "<div class='col-md-6 feature-proj'><img class='img-responsive' src='http://placekitten.com/555/300' alt='placeholder' data-toggle='modal' data-target='#project1'><h3>HERE</h3><p><a href='http://github.com'>Link to project</a></p></div>"

    var start =   '<div class="modal fade" id="project1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title" id="myModalLabel">Favorite App Page</h4></div><div class="modal-body"><img class="img-responsive" src="http://placekitten.com/555/300">This was my first project in this class. I learned a lot about HTML and CSS.</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>'
    $("")

}



$(document).ready(displayAll);
$(document).on("page:load", displayAll)
