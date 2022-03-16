import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <div id="menu" class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand page-scroll" href="#page-top">
              React Landing Page
            </a>
          </div>
          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul class="nav navbar-nav navbar-right">
              <li class="">
                <a href="#services" class="page-scroll">
                  Services
                </a>
              </li>
              <li class="">
                <a href="#testimonials" class="page-scroll">
                  Testimonials
                </a>
              </li>
              <li class="">
                <a href="#team" class="page-scroll">
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="header">
        <div class="intro">
          <div class="overlay">
            <div class="container">
              <div class="row">
                <div class="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    We are a Landing Page<span></span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis sed dapibus leo nec ornare diam sed commodo nibh ante
                    facilisis bibendum.
                  </p>
                  <a href="#features" class="btn btn-custom btn-lg page-scroll">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div id="services" class="text-center">
        <div class="container">
          <div class="section-title">
            <h2>Our Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div class="row">
            <div class="col-md-4">
              <i class="fa fa-wordpress"></i>
              <div class="service-desc">
                <h3>Lorem ipsum dolor</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <i class="fa fa-cart-arrow-down"></i>
              <div class="service-desc">
                <h3>Consectetur adipiscing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <i class="fa fa-cloud-download"></i>
              <div class="service-desc">
                <h3>Lorem ipsum dolor</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <i class="fa fa-language"></i>
              <div class="service-desc">
                <h3>Consectetur adipiscing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <i class="fa fa-plane"></i>
              <div class="service-desc">
                <h3>Lorem ipsum dolor</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <i class="fa fa-pie-chart"></i>
              <div class="service-desc">
                <h3>Consectetur adipiscing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials">
        <div class="container">
          <div class="section-title text-center">
            <h2>What our clients say</h2>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="testimonial">
                <div class="testimonial-image">
                  <img src="img/testimonials/01.jpg" alt="" />
                </div>
                <div class="testimonial-content">
                  <p>
                    ""Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis sed dapibus leo nec ornare diam sedasd commodo nibh
                    ante facilisis bibendum dolor feugiat at.""
                  </p>
                  <div class="testimonial-meta"> - John Doe </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial">
                <div class="testimonial-image">
                  <img src="img/testimonials/02.jpg" alt="" />
                </div>
                <div class="testimonial-content">
                  <p>
                    ""Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis sed dapibus leo nec ornare diam sedasd commodo nibh
                    ante facilisis bibendum dolor feugiat at.""
                  </p>
                  <div class="testimonial-meta"> - Johnathan Doe </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial">
                <div class="testimonial-image">
                  <img src="img/testimonials/03.jpg" alt="" />
                </div>
                <div class="testimonial-content">
                  <p>
                    ""Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis sed dapibus leo nec ornare diam sedasd commodo nibh
                    ante facilisis bibendum dolor feugiat at.""
                  </p>
                  <div class="testimonial-meta"> - John Doe </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial">
                <div class="testimonial-image">
                  <img src="img/testimonials/04.jpg" alt="" />
                </div>
                <div class="testimonial-content">
                  <p>
                    ""Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis sed dapibus leo nec ornare diam sedasd commodo nibh
                    ante facilisis bibendum dolor feugiat at.""
                  </p>
                  <div class="testimonial-meta"> - Johnathan Doe </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial">
                <div class="testimonial-image">
                  <img src="img/testimonials/05.jpg" alt="" />
                </div>
                <div class="testimonial-content">
                  <p>
                    ""Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis sed dapibus leo nec ornare diam sedasd commodo nibh
                    ante facilisis bibendum dolor feugiat at.""
                  </p>
                  <div class="testimonial-meta"> - John Doe </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial">
                <div class="testimonial-image">
                  <img src="img/testimonials/06.jpg" alt="" />
                </div>
                <div class="testimonial-content">
                  <p>
                    ""Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis sed dapibus leo nec ornare diam sedasd commodo nibh
                    ante facilisis bibendum dolor feugiat at.""
                  </p>
                  <div class="testimonial-meta"> - Johnathan Doe </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div id="team" class="text-center">
        <div class="container">
          <div class="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div id="row">
            <div class="col-md-3 col-sm-6 team">
              <div class="thumbnail">
                <img src="img/team/01.jpg" alt="..." class="team-img" />
                <div class="caption">
                  <h4>John Doe</h4>
                  <p>Director</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 team">
              <div class="thumbnail">
                <img src="img/team/02.jpg" alt="..." class="team-img" />
                <div class="caption">
                  <h4>Mike Doe</h4>
                  <p>Senior Designer</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 team">
              <div class="thumbnail">
                <img src="img/team/03.jpg" alt="..." class="team-img" />
                <div class="caption">
                  <h4>Jane Doe</h4>
                  <p>Senior Designer</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 team">
              <div class="thumbnail">
                <img src="img/team/04.jpg" alt="..." class="team-img" />
                <div class="caption">
                  <h4>Karen Doe</h4>
                  <p>Project Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
