var elements = document.getElementsByClassName("riddle_answers");

var find_id_for_modal = function() {
    var attribute = this.getAttribute("id");
    alert(attribute);
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', find_id_for_modal, false);
}

function riddle_modal(key) {
    var nav_code = 
    `<div class="modal fade" id="answer_modal">
       <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
                <h3 id="subtitle_modal_title" class="subtitle_modal_title"></h3>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
        <!-- Modal body -->
        <div id="subtitle_modal_para" class="modal-body">
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    </div>  `
   return {
    modal_subtitle: use_subtitle,
    modal_text: 'In the charade, "my first" is woe and "my second" is man, so that "my whole" is woe-man = woman (boo! groan! hiss!).'
   };
};
