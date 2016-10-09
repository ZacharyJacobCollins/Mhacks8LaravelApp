<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">

    <title>Internodes</title>

    <!-- Stylesheets -->
    <link rel="stylesheet" href="{{ URL::asset('css/mapstyle.css') }}">
    <link href="{{ URL::asset('css/css.css') }}" rel="stylesheet">
    <link href="{{ URL::asset('css/toolkit-inverse.css') }}" rel="stylesheet" />
    <link href="{{ URL::asset('css/application.css') }}" rel="stylesheet">

    <style>
      /* note: this is a hack */
      body {
        width: 1px;
        min-width: 100%;
        *width: 100%;
      }
    </style>
  </head>

  <body>
    <div id="app">
    <div class="bw">
      <div class="fu">
        <div class="ge aom">
          <nav class="aot">

            <!-- Nav wrapper -->
            <div class="aon">
              <!-- Toggle nav -->
              <button class="amy amz aoo" type="button" data-toggle="collapse" data-target="#nav-toggleable-sm">
                <span class="ct">Toggle nav</span>
              </button>
              <a class="aop cn" href="https://bootstrap-themes.github.io/dashboard/index.html"></a>
            </div>

            <div class="collapse and" id="nav-toggleable-sm">
              <ul class="nav of nav-stacked">
                  <li class="tq">Dashboards</li>
                  <li class="active">
                    <a href="https://bootstrap-themes.github.io/dashboard/index.html">Overview</a>
                  </li>
                  <li>
                    <a href="https://bootstrap-themes.github.io/dashboard/order-history/index.html">Order history</a>
                  </li>
                  <li>
                    <a href="https://bootstrap-themes.github.io/dashboard/fluid/index.html">Fluid layout</a>
                  </li>
                  <li>
                    <a href="https://bootstrap-themes.github.io/dashboard/icon-nav/index.html">Icon nav</a>
                  </li>
                  <li class="tq">More</li>
                  <li>
                    <a href="https://bootstrap-themes.github.io/dashboard/docs/index.html">
                      Toolkit docs
                    </a>
                  </li>
                  <li>
                    <a href="http://getbootstrap.com/" target="blank">
                      Bootstrap docs
                    </a>
                  </li>
                  <li>
                    <a href="https://bootstrap-themes.github.io/dashboard/light/index.html">Light UI</a>
                  </li>
                  <li>
                    <a href="https://bootstrap-themes.github.io/dashboard/#docsModal" data-toggle="modal">
                      Example modal
                    </a>
                  </li>
              </ul>
              <hr class="rw aky">
            </div>
          </nav>
        </div>
        <div class="hc aps">
          <div class="apa">

              <!-- Title and subtitle -->
              <div class="apb">
                <h6 class="apd" style="color:grey">Mhacks 8</h6>
                <h2 class="apc" style="color: #1997c6; font-weight: 300;">Internodes</h2>
              </div>

              <!-- Empty -->
              <div class="ob ape">
                <div class="tn aol">
                  <!-- Something goes here probably -->
                </div>
              </div>

          </div>

          <hr class="aky">

        <div class="by">

        <!-- Internodes Arrow logo -->
  	    <div id="arrowContainer" style="margin-left:10px; margin-top:10px;position:absolute;z-index:2;"><script src="{{ URL::asset('js/three.min.js') }}"></script></div>

        <!-- The map -->
        <div id="map"></div>
  	    <br>

        <!-- Events -->
        <span v-for="node in nodes">
          <h4 class="ty">Active Nodes</h4>
        </span>

        </div>
          <a href="https://bootstrap-themes.github.io/dashboard/#" class="ce apn ame" style="margin: auto; left: 50%;">View all devices</a>

          </div>
        </div>
    </div>

    <!-- Modal -->
    <div id="docsModal" class="cb fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="ri">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title" id="myModalLabel">Example modal</h4>
          </div>
          <div class="modal-body">
            <p>You're looking at an example modal in the dashboard theme.</p>
          </div>
          <div class="rj">
            <button type="button" class="ce fh" data-dismiss="modal">Cool, got it!</button>
          </div>
        </div>
      </div>
    </div>
  </div><!-- end app-->

  </body>

      <!-- Libraries -->
      <script src="{{ URL::asset('js/jquery.min.js') }}"></script>
      <script src="{{ URL::asset('js/tablesorter.min.js') }}"></script>
      <script src="{{ URL::asset('js/toolkit.js') }}"></script>
      <script src="{{ URL::asset('js/application.js') }}"></script>

      <!-- Custom Javascript -->
      <script src="{{ URL::asset('js/arrow.js') }}" type="text/javascript"></script>

      <!-- Execute/clear BS loaders for docs -->
      <script>
        $(function(){while(window.BS&&window.BS.loader&&window.BS.loader.length){(window.BS.loader.pop())()}})
      </script>

      <!-- Vue js -->
      <script src="{{ URL::asset('js/vue/vue.min.js') }}"></script>

      <!-- Google Maps -->
      <script src="{{ URL::asset('js/vue/vue-app.js') }}"></script>


      <!-- callback, LAST google maps script-->
      <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCmDjLF1JlR93gIzz4vfVw7JCNYHY0HuTk&callback=app.init"></script>

</html>
