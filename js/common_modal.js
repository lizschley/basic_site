
window.addEventListener('load', (event) => {
  document.getElementById('modal_anchor_id').innerHTML = modal_html();
 }, false);

document.querySelectorAll('.modal_link_class').forEach(function (el) {
  el.addEventListener('click', find_id_for_modal);
});

const modal_group = {
  'index': () => typeof riddle_answer_modal === "function" ? riddle_answer_modal() : {},
  'google_sheets_filtering': () => typeof misc_modal === "function" ? misc_modal() : {},
  'community': () => typeof community_modal === "function" ? community_modal() : {},
  'hawaii': () => typeof hawaii_modal === "function" ? hawaii_modal() : {},
  'intro_philosophy': () => typeof misc_modal === "function" ? misc_modal() : {},
};

function find_id_for_modal(e) {
  e.preventDefault();
  const loc_key = location_key();
  const link_id = this.id;
  const modalElement = document.getElementById('generic_modal_element');
  const modal = bootstrap.Modal.getOrCreateInstance(modalElement, {
    backdrop: true,
    keyboard: true
  });
  const modal_body = document.getElementById('modal_element_text');
  const modal_title = document.getElementById('modal_element_title');
  const modal_data = modal_group[loc_key]?.();
  const item = modal_data?.[link_id];
  if (!item) {
    console.log('No modal data found for', loc_key, link_id);
    return;
  }
  modal_body.innerHTML = item.text;
  modal_title.innerHTML = item.title;
  modal.show();
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
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <!-- Modal body -->
        <div id="modal_element_text" class="modal-body">
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-liz" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div> `
}
