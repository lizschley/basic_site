const answers = document.querySelectorAll(".riddle_answers");
const close_buttons = document.querySelectorAll(".close_modal");

answers.forEach(function(element) {
    //alert('adding listener for id=' + element.getAttribute('id'))
    element.addEventListener('click', find_id_for_modal);
  });

function find_id_for_modal() {
  const attribute = this.getAttribute("id");
  //alert(attribute);
  const modalElement = document.getElementById('riddle_answer_modal');
  const modal = new bootstrap.Modal(modalElement);
  const modalBody = document.getElementById('riddle_answer_modal_text');
  const modal_text = riddle_modal(attribute);
  modalBody.innerHTML = modal_text;
  modal.show(); 
  allow_close_riddle_modal(modal);
}  

function riddle_modal(id) {
    alert('id == ' + id);
    switch(id) {
        case "first_emma_answer":
          text = '<p>In the charade, "my first" is woe and "my second" is man, so that "my whole" is woe-man = woman (boo! groan! hiss!, or is it?).</p>';
          break;
        case "second_emma_answer":
          text = "2 - I am not a fan of orange.";
          break;
        case "third_emma_answer":
          text = "3 - How you like them apples?";
          break;
        default:
          text = "did not find - I have never heard of that fruit...";
      }    
   return text;
};

function allow_close_riddle_modal(modal) {
  var close_ids = ['#x_close', '#word_close'];
  var len = close_ids.length;
  for (var idx = 0; idx < len; idx++) {
    document.querySelector(close_ids[idx]).addEventListener('click', function() {
      modal.hide();
    });      
  }
}
