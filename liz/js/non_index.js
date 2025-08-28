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
             <a class='nav-link active navlink-liz' aria-current='page' href='../../../index.html'>Home</a>
          </li>
          <li class='nav-item dropdown'>
             <a id='nav_dropdown' class='dropdown-toggle liz-colors' href='#' data-bs-toggle='dropdown' aria-expanded='false'>Insect Habitat</a>
             <ul class='dropdown-menu'>
                <li class='list-item'><a class='dropdown-item' href='../../html/insect_habitat/plant_overview.html'>Overview of Plant Project</a></li>
                <li class='list-item'><a class='dropdown-item ' href='../../html/insect_habitat/community.html'>Home Plant Communities</a></li>
                <li class='list-item'><a class='dropdown-item' href='../../html/insect_habitat/va_native.html'>Virginia Natives</a></li>
                <li class='list-item'><a class='dropdown-item ' href='../../html/insect_habitat/native_east_us.html'>East US Natives</a></li>
                <li class='list-item'><a class='dropdown-item' href='../../html/insect_habitat/non_native.html'>Non Natives</a></li>
             </ul>
          </li>
          <li class='nav-item dropdown'>
             <a id='nav_dropdown' class='dropdown-toggle liz-colors' href='#' data-bs-toggle='dropdown' aria-expanded='false'>Blog</a>
             <ul class='dropdown-menu'>
                <li class='list-item'><a class='dropdown-item' href='../../html/blog/first_blog.html'>Initial</a></li>
             </ul>
          </li>
          <li class='nav-item dropdown'>
             <a id='nav_dropdown' class='dropdown-toggle liz-colors' href='#' data-bs-toggle='dropdown' aria-expanded='false'>Misc Info</a>
             <ul class='dropdown-menu'>
                <li class='list-item'><a class='dropdown-item ' href='../../html/misc/tech_q_a.html'>Technical from 2020</a></li>
                <li class='list-item'><a class='dropdown-item' href='../../html/misc/google_sheets_filtering.html'>Google Sheets Filtering</a></li>
             </ul>
          </li>
       </ul>
   </div>
   </div>`
   return nav_code;
}