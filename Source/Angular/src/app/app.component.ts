import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular';

  frontendStyle = [
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css",
    'assets/frontend/font-awesome/css/all.css',
    'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700,700i&amp;subset=vietnamese',
    'assets/frontend/static/css/9.cf6fc409.chunk.css',
    'assets/frontend/static/css/main.30c4c453.chunk.css',
    'assets/frontend/static/css/detail-10.8fc49f27.chunk.css',
    'assets/frontend/static/css/20.94581a99.chunk.css',
    'assets/frontend/static/css/15.0142c229.chunk.css',
    'assets/frontend/static/css/header.css',
    'assets/frontend/static/css/9.3d8f0907.chunk.css',
    'assets/frontend/static/css/10.dd0ef9d4.chunk.css',
  ];

  frontendScript = [
    "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js",
    'https://code.jquery.com/jquery-2.1.4.min.js',
    'assets/frontend/static/js/0.0c136d1b.chunk.js',
    'assets/frontend/static/js/2.d2525480.chunk.js',
    'assets/frontend/static/js/5.9ed9d5b3.chunk.js',
    'assets/frontend/static/js/15.b5bdbea4.chunk.js',
  ];

  backendStyle = [
    "assets/backend/dist/css/adminlte.min.css",
    "assets/backend/plugins/fontawesome-free/css/all.min.css",
    "assets/backend/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css",
    "assets/backend/plugins/icheck-bootstrap/icheck-bootstrap.min.css",
    "assets/backend/plugins/jqvmap/jqvmap.min.css",
    "assets/backend/dist/css/adminlte.min.css",
    "assets/backend/plugins/overlayScrollbars/css/OverlayScrollbars.min.css",
    "assets/backend/plugins/daterangepicker/daterangepicker.css",
    "assets/backend/plugins/summernote/summernote-bs4.min.css",
    "assets/backend/plugins/jsgrid/jsgrid.min.css",
    "assets/backend/plugins/jsgrid/jsgrid-theme.min.css",
    "assets/backend/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css",
    "assets/backend/plugins/datatables-responsive/css/responsive.bootstrap4.min.css",
    "assets/backend/plugins/datatables-buttons/css/buttons.bootstrap4.min.css"
  ];

  backendScript = [
    "assets/backend/plugins/jquery/jquery.min.js",
    "assets/backend/plugins/jquery-ui/jquery-ui.min.js",
    "assets/backend/plugins/bootstrap/js/bootstrap.bundle.min.js",
    "assets/backend/plugins/chart.js/Chart.min.js",
    "assets/backend/plugins/sparklines/sparkline.js",
    "assets/backend/plugins/jqvmap/jquery.vmap.min.js",
    "assets/backend/plugins/jqvmap/maps/jquery.vmap.usa.js",
    "assets/backend/plugins/jquery-knob/jquery.knob.min.js",
    "assets/backend/plugins/moment/moment.min.js",
    "assets/backend/plugins/daterangepicker/daterangepicker.js",
    "assets/backend/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js",
    "assets/backend/plugins/summernote/summernote-bs4.min.js",
    "assets/backend/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js",
    "assets/backend/dist/js/adminlte.js",
    "assets/backend/dist/js/demo.js",
    "assets/backend/dist/js/pages/dashboard.js",
    "assets/backend/dist/js/adminlte.js",
    "assets/backend/dist/js/adminlte.min.js",
    "assets/backend/plugins/bs-custom-file-input/bs-custom-file-input.min.js",
    "assets/backend/plugins/jsgrid/demos/db.js",
    "assets/backend/plugins/jsgrid/jsgrid.min.js",
    "assets/backend/plugins/datatables/jquery.dataTables.min.js",
    "assets/backend/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js",
    "assets/backend/plugins/datatables-responsive/js/dataTables.responsive.min.js",
    "assets/backend/plugins/datatables-responsive/js/responsive.bootstrap4.min.js",
    "assets/backend/plugins/datatables-buttons/js/dataTables.buttons.min.js",
    "assets/backend/plugins/datatables-buttons/js/buttons.bootstrap4.min.js",
    "assets/backend/plugins/jszip/jszip.min.js",
    "assets/backend/plugins/pdfmake/pdfmake.min.js",
    "assets/backend/plugins/pdfmake/vfs_fonts.js",
    "assets/backend/plugins/datatables-buttons/js/buttons.html5.min.js",
    "assets/backend/plugins/datatables-buttons/js/buttons.print.min.js",
    "assets/backend/plugins/datatables-buttons/js/buttons.colVis.min.js"
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const CustomJsList = document.querySelectorAll('#custom_js');
        if (CustomJsList.length > 0) {
          CustomJsList.forEach((customJs) => {
            customJs.remove();
          });
        }
        this.load();
      }
    });
  }

  load() {
    if (window.location.pathname.startsWith('/admin')) {
      this.loadStyles(this.backendStyle);
      this.loadScripts(this.backendScript);
    } else {
      this.loadStyles(this.frontendStyle);
      this.loadScripts(this.frontendScript);
    }
  }

  loadStyles(styles: string[]) {
    for (let i = 0; i < styles.length; i++) {
      const node = document.createElement('link');
      node.type = 'text/css';
      node.rel = 'stylesheet';
      node.href = styles[i];
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  loadScripts(scripts: string[]) {
    for (let i = 0; i < scripts.length; i++) {
      const node = document.createElement('script');
      node.type = 'text/javascript';
      node.async = false;
      node.id = 'custom_js';
      node.src = scripts[i];
      document.getElementsByTagName('body')[0].appendChild(node);
    }
  }
}
