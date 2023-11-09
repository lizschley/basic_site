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
  const modal_body = document.getElementById('riddle_answer_modal_text');
  const modal_title = document.getElementById('riddle_answer_modal_title');
  const modal_data = riddle_modal(attribute);
  modal_body.innerHTML = modal_data.text;
  modal_title.innerHTML = modal_data.title;
  modal.show(); 
  allow_close_riddle_modal(modal);
}  

function riddle_modal(id) {
    alert('id == ' + id);
    switch(id) {
        case "first_emma_answer":
          text = '<p>In the charade, "my first" is woe and "my second" is man, so that "my whole" is woe-man = woman (boo! groan! hiss!, or is it?).</p>';
          title = 'Emma Charade One'
          break;
        case "second_emma_answer":
          text = "2 - I am not a fan of orange.";
          title = 'Emma Charade Two'
          break;
        case "third_emma_answer":
          text = "3 - How you like them apples?";
          title = 'Emma Riddle'
          break;
        default:
          text = "did not find - I have never heard of that fruit...";
      }    
   return {
      text: text,
      title: title
    };
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
