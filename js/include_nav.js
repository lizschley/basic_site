const base_path = '/basic_website/'

window.onload = (event) => {
    this.set_base_path()
    document.getElementById('include_nav_id').innerHTML = navbar_html();
};

document.querySelectorAll('.no_404').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
  });
});

function set_base_path() {
    if (window.location.hostpath == 'localhost') {
        let tag = document.getElementsByTagName('base')
        tag.setAttribute('href', '/')
    }
}


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
             <a id='nav_dropdown' class='dropdown-toggle liz-colors' href='#' data-bs-toggle='dropdown' aria-expanded='false'>Insect Habitat</a>
             <ul class='dropdown-menu'>
                <li class='list-item'><a class='dropdown-item' href='html/insect_habitat/plant_overview.html'>Overview of Plant Project</a></li>
                <li class='list-item'><a class='dropdown-item ' href='html/insect_habitat/community.html'>Home Plant Communities</a></li>
                <li class='list-item'><a class='dropdown-item' href='html/insect_habitat/va_native.html'>Virginia Natives</a></li>
                <li class='list-item'><a class='dropdown-item ' href='html/insect_habitat/native_east_us.html'>East US Natives</a></li>
                <li class='list-item'><a class='dropdown-item' href='html/insect_habitat/non_native.html'>Non Natives</a></li>
             </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="blogDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Blog
            </a>
            <ul class="dropdown-menu" aria-labelledby="blogDropdown">
                <li class="dropdown-submenu">
                    <a class="dropdown-item dropdown-toggle" href="#">Random</a>
                    <ul class="dropdown-menu">
                      <li class='list-item'><a class='dropdown-item' href='html/blog/random/2026_short.html'>Initial</a></li>
                      <li class='list-item'><a class='dropdown-item' href='html/blog/random/hawaii_late_sept_2025.html'>O'ahu, Hawai\'i</a></li>
                    </ul>
                </li>
                <li class="dropdown-submenu">
                    <a class="dropdown-item dropdown-toggle" href="#">Philosophy</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/html/blog/philosophy/intro_logic_philosophy.html">Intro to Logic and Philosophy</a></li>
                        <li><a class="dropdown-item" href="/html/blog/philosophy/timeline_logic_philosophy.html">Timeline for Logic and Philosophy</a></li>
                        <li><a class="dropdown-item" href="/html/misc/philosophical_gleanings.html">Philosophical Gleanings</a></li>
                    </ul>
                </li>
            </ul>
          </li>
          <li class='nav-item dropdown'>
             <a id='nav_dropdown' class='dropdown-toggle liz-colors' href='#' data-bs-toggle='dropdown' aria-expanded='false'>Misc Info</a>
             <ul class='dropdown-menu'>
                <li class='list-item'><a class='dropdown-item ' href='html/misc/philosophical_gleanings.html'>Philosophical Gleanings (compiled by WH Brenner)</a></li>
                <li class='list-item'><a class='dropdown-item ' href='html/misc/tech_q_a.html'>Technical from 2020</a></li>
                <li class='list-item'><a class='dropdown-item' href='html/misc/google_sheets_filtering.html'>Google Sheets Filtering</a></li>
             </ul>
          </li>
       </ul>
   </div>
   </div>`
   return nav_code;
}
