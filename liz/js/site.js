
var switcher = document.getElementById('profile_switcher');

function handleProfileSwitcherChange() {
    console.log('in handleProfileSwitcherChange');
    if (switcher.checked) {
        document.getElementById("is-qa").classList.replace("d-none", "d-inline");
        document.getElementById("qa-profile").classList.replace("d-none", "d-block");
        document.getElementById("is-bug").classList.replace("d-inline", "d-none");
        document.getElementById("bug-profile").classList.replace("d-block", "d-none");
        
    } else {
        document.getElementById("is-qa").classList.replace("d-inline", "d-none");
        document.getElementById("qa-profile").classList.replace("d-block", "d-none");
        document.getElementById("is-bug").classList.replace("d-none", "d-inline");
        document.getElementById("bug-profile").classList.replace("d-none", "d-block");        
    }
}
switcher.addEventListener('change', handleProfileSwitcherChange);
