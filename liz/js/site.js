
var switcher = document.getElementById('profile_switcher');

function handleProfileSwitcherChange() {
    console.log('in handleProfileSwitcherChange, switcher is ' + switcher);

    if (switcher === null || switcher === undefined) {
        return;
    }

    if (switcher.checked) {
        document.getElementById('is-qa').classList.replace('d-none', 'd-inline');
        document.getElementById('qa-profile').classList.replace('d-none', 'd-block');
        document.getElementById('is-bug').classList.replace('d-inline', 'd-none');
        document.getElementById('bug-profile').classList.replace('d-block', 'd-none');
        
    } else {
        document.getElementById('is-qa').classList.replace('d-inline', 'd-none');
        document.getElementById('qa-profile').classList.replace('d-block', 'd-none');
        document.getElementById('is-bug').classList.replace('d-none', 'd-inline');
        document.getElementById('bug-profile').classList.replace('d-none', 'd-block');        
    }
}

if (switcher !== null || switcher !== undefined) {
    switcher.addEventListener('change', handleProfileSwitcherChange);
}

var elements = document.getElementsByClassName('text-toggle');

Array.from(elements).forEach(function(element) {
    element.addEventListener('click', handleToggleMoreLessClick);
    });

// No ES6 support
// for (var i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', myFunction, false);
// }

function handleToggleMoreLessClick() {
    var id_data = ids_data(this.id);
    if (id_data.action == 'more') {
        document.getElementById(id_data.text_id).classList.replace('d-none', 'd-block');
        document.getElementById(id_data.toggle_more).classList.replace('d-inline', 'd-none'); 
        document.getElementById(id_data.toggle_less).classList.replace('d-none', 'd-inline');      
    } else {
        document.getElementById(id_data.text_id).classList.replace('d-block', 'd-none');
        document.getElementById(id_data.toggle_more).classList.replace('d-none', 'd-inline'); 
        document.getElementById(id_data.toggle_less).classList.replace('d-inline', 'd-none'); 
    }
}

function ids_data(toggle_id) {
    var id_array = toggle_id.split('-');
    var company = id_array[0];
    var action = id_array[2];
    var id_data = {
        toggle_more: company + '-toggle-more',
        toggle_less: company + '-toggle-less',
        action: action,
        text_id: company + '-extra-text'
    }
    return id_data
}

