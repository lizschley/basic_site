window.onload = (event) => {
    document.getElementById('non_index_nav_id').innerHTML = navbar_html();
};

function navbar_html() {
    var nav_code = `<div class='container-fluid '>
    <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='.collapse' aria-controls='navbarsExample03' aria-expanded='false' aria-label='Toggle navigation'>
    <span class='navbar-toggler-icon'></span>
    </button> 
    <div class='collapse navbar-collapse' id='navbar-collapse'>
       <ul class='navbar-liz list-unstyled me-auto mb-2 mb-sm-0'>
          <li class='nav-item'>
             <a class='nav-link active navlink-liz' aria-current='page' href='../index.html'>Home</a>
          </li>
          <li class='nav-item dropdown'>
             <a id='nav_dropdown' class='dropdown-toggle liz-colors' href='#' data-bs-toggle='dropdown' aria-expanded='false'>Q and A</a>
             <ul class='dropdown-menu'>
                <li class='list-item'><a class='dropdown-item ' href='tech_q_a.html'>Technical</a></li>
                <li class='list-item'><a class='dropdown-item' href='plants_q_a.html'>Insect Habitat Facilitation</a></li>
             </ul>
          </li>
          <li class='nav-item'>
             <a class='nav-link' href='how_to.html'>How To</a>
          </li>
          <li class='nav-item'>
             <a class='nav-link' href='resume.html'>Resume</a>
          </li>
       </ul>
    </div>
   </div>`
   return nav_code;
};
