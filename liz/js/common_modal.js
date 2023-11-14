window.onload = (event) => {
  document.getElementById('modal_anchor_id').innerHTML = modal_html();
};

const answers = document.querySelectorAll(".modal_answer");
const close_buttons = document.querySelectorAll(".close_modal");
const loc_key = location_key();

answers.forEach(function(element) {
    //alert('adding listener for id=' + element.getAttribute('id'))
    element.addEventListener('click', find_id_for_modal);
  });

function find_id_for_modal() {
  const link_id = this.getAttribute("id");
  const modalElement = document.getElementById('answer_modal_element');
  const modal = new bootstrap.Modal(modalElement);
  const modal_body = document.getElementById('answer_modal_element_text');
  const modal_title = document.getElementById('answer_modal_element_title');
  const modal_data = page_specific_data(link_id);
  modal_body.innerHTML = modal_data.text;
  modal_title.innerHTML = modal_data.title;
  modal.show(); 
  allow_close_modal(modal);
}  

function page_specific_data(link_id) {
  switch(loc_key) {
    case "index":
      return riddle_modal(link_id);
    default:
      console.log('There are no modal answers for this location key: ' + location_key + ' or it could be the link_id: ' + link_id);
  }  
}

function allow_close_modal(modal) {
  var close_ids = ['#x_close', '#word_close'];
  var len = close_ids.length;
  for (var idx = 0; idx < len; idx++) {
    document.querySelector(close_ids[idx]).addEventListener('click', function() {
      modal.hide();
    });      
  }
}

function location_key() {
  var path_array = window.location.pathname.split('/');
  var temp = path_array.slice(-1).toString();
  var temp_array = temp.split('.');
  return temp_array[0].toString();
}

function modal_html() {
  return ` <div class="modal fade" id="answer_modal_element">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h3 id="answer_modal_element_title" class="answer_modal_element_title">Riddle Answer</h3>
          <button id="x_close" type="button" class="close_modal" data-dismiss="modal">&times;</button>
        </div>
        <!-- Modal body -->
        <div id="answer_modal_element_text" class="modal-body">
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <button id="word_close" type="button" class="btn close_modal" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div> `
}

