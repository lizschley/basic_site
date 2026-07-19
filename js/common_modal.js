
window.addEventListener('load', (event) => {
  document.getElementById('modal_anchor_id').innerHTML = modal_html();
 }, false);

document.querySelectorAll('.no_404').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
  });
});

const answers = document.querySelectorAll(".modal_link_class");
const close_buttons = document.querySelectorAll(".close_modal");

const modal_group = {
  'index': () => typeof riddle_answer_modal === "function" ? riddle_answer_modal() : {},
  'google_sheets_filtering': () => typeof misc_modal === "function" ? misc_modal() : {},
  'community': () => typeof community_modal === "function" ? community_modal() : {},
  'hawaii': () => typeof hawaii_modal === "function" ? hawaii_modal() : {}
};

answers.forEach(function(element) {
    //console.log('adding listener for id=' + element.getAttribute('id'));
    element.addEventListener('click', find_id_for_modal);
});

function find_id_for_modal() {
  const loc_key = location_key();
  const link_id = this.getAttribute("id");
  const modalElement = document.getElementById('generic_modal_element');
  const modal = new bootstrap.Modal(modalElement);
  const modal_body = document.getElementById('modal_element_text');
  const modal_title = document.getElementById('modal_element_title');
  const modal_data = modal_group[loc_key]();
  console.log(modal_data[link_id])
  modal_body.innerHTML = modal_data[link_id].text;
  modal_title.innerHTML = modal_data[link_id].title;
  modal.show();
  allow_close_modal(modal);
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
  var pathname = window.location.pathname;
  if (pathname == '/basic_site/' || pathname == '/') {
    return 'index'
  }
  var path_array = pathname.split('/');
  var temp = path_array.slice(-1).toString();
  var temp_array = temp.split('.');
  return temp_array[0].toString();
}

function modal_html() {
  return ` <div class="modal fade" id="generic_modal_element">
    <div id="modal_dialog_id" class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h3 id="modal_element_title" class="modal_element_title">Modal Title</h3>
          <button id="x_close" type="button" class="close_modal" data-dismiss="modal">&times;</button>
        </div>
        <!-- Modal body -->
        <div id="modal_element_text" class="modal-body">
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <button id="word_close" type="button" class="btn close_modal" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div> `
}

