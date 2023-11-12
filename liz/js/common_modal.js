const answers = document.querySelectorAll(".riddle_answers");
const close_buttons = document.querySelectorAll(".close_modal");

answers.forEach(function(element) {
    //alert('adding listener for id=' + element.getAttribute('id'))
    element.addEventListener('click', find_id_for_modal);
  });

function find_id_for_modal() {
  const attribute = this.getAttribute("id");
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
    switch(id) {
        case "first_emma_answer":
          text = '<p>In the charade, "my first" is woe and "my second" is man, so that "my whole" is woe-man = woman (boo! groan! hiss!, or is it?).</p>';
          title = 'Emma Charade One';
          break;
        case "second_emma_answer":
          text = 'The answer is "courtship" (wooing).';
          title = 'Emma Charade Two';
          break;
        case "third_emma_answer":
          text = 'The originally-published official answer to "Kitty, a fair but frozen maid" is: "a chimney sweep" <br />It seems that the passion of the narrator is tied quite closely to the state of his fireplace. (However there has been some skepticism about this answer, and some racier alternative solutions, of lesser or greater degrees of ingenuity, have been offered.)';
          title = 'Emma Riddle';
          break;
        case "anglo_saxon_answer_one":
          text = 'This is a riddle about fire. The two dumb creatures in the second line are two sticks rubbed together to make a flame (or two stones struck together to make a spark).';
          title = 'Anglo Saxon Answer One';
          break;
        case "anglo_saxon_answer_two":
          text = 'An onion';
          title = 'Anglo Saxon Answer Two';
          break;
        case "anglo_saxon_answer_three":
          text = 'A fish living in a river';
          title = 'Anglo Saxon Answer Three';
          break;
        case "anglo_saxon_answer_four":
          text = 'A Shield. (A common riddle in Beowulf)';
          title = 'Anglo Saxon Answer Four';
          break;
        case "anglo_saxon_answer_five":
          text = 'A cuckoo bird';
          title = 'Anglo Saxon Answer Five';
          break;
        case "modern_answer_one":
          text = 'A snail';
          title = 'Modern Answer One';
          break;
        case "modern_answer_two":
          text = 'The living room';
          title = 'Modern Answer Two';
          break;
        case "modern_answer_three":
          text = 'A golf ball';
          title = 'Modern Answer Three';
          break;
        case "modern_answer_four":
          text = 'Radio Waves';
          title = 'Modern Answer Four';
          break;
        case "modern_answer_five":
          text = 'The morning dew';
          title = 'Modern Answer Five';
          break;
        case "modern_answer_six":
          text = "Door Three: a lion that hasn't eaten for over 6 months would be dead.";
          title = 'Modern Answer Six';
          break;
        case "modern_answer_seven":
          text = 'Mercury. The element looks shiny, silver, and is wet. The god Mercury has two wings but only uses them to run.';
          title = 'Modern Answer Seven';
          break;
        case "modern_answer_eight":
          text = '24';
          title = 'Modern Answer Eight';
          break;
        case "modern_answer_nine":
          text = 'The number six';
          title = 'Modern Answer Nine';
          break;
        case "modern_answer_ten":
          text = 'A motorized fan';
          title = 'Modern Answer Ten';
          break;    
        case "hobbit_answer_one":
          text = 'A mountain';
          title = 'Gollum - Hobbit One';
          break;
        case "hobbit_answer_two":
          text = 'Teeth';
          title = 'Bilbo - Hobbit Two';
          break;
        case "hobbit_answer_three":
          text = 'Wind';
          title = 'Gollum - Hobbit Three';
          break;
        case "hobbit_answer_four":
          text = 'An egg';
          title = 'Bilbo - Hobbit Four';
          break;
        case "hobbit_answer_five":
          text = 'Dark';
          title = 'Gollum - Hobbit Five';
          break; 
        case "hobbit_answer_six":
          text = 'The sun';
          title = 'Bilbo - Hobbit Six';
          break;
        case "hobbit_answer_seven":
          text = 'Fish';
          title = 'Gollum - Hobbit Seven';
          break;
        case "hobbit_answer_eight":
          text = 'Fish on a table, man on a stool, cat gets the scraps';
          title = 'Bilbo - Hobbit Eight';
          break;
        case "hobbit_answer_nine":
          text = 'Time';
          title = 'Gollum - Hobbit Nine';
          break;      
        default:
          text = "Have never heard of that fruit...";
          title = "Programming Oversight."
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
