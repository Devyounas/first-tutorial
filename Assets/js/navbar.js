var nav = document.getElementById("navbar")

navbar.innerHTML=`
    <div class="container-fluid">
        <a class="navbar-brand" href="/index.html">
            <img src="/Assets/imgs/logo.jpg" alt="Logo" width="40" height="40" class="d-inline-block align-text-top">
            Quick Calligraphy
          </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Main Menu</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="/index.html">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Forms and Styles: Designed for every mind
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="/f-s.html">Playful for Kids</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="/f-s.html">Empowering for Elders</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="/f-s.html">Artistic Complexity</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Cultural Design Categories
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="/desing-cat.html">Arabic Elegance</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="/desing-cat.html">Indic Harmony</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="/desing-cat.html">Greek Legacy</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Letters and Fonts
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="/letters-fonts.html">Capital Letters</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="/letters-fonts.html">Small Letters</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="/letters-fonts.html">Flourishes</a></li>

              </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/contact-us.html">Contact Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " aria-current="page" href="about-us.html">About Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/feedback.html">Feedback</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/gallery.html">Gallery</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
`