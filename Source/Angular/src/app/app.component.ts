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
    'assets/frontend/font-awesome/css/all.css',
    'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700,700i&amp;subset=vietnamese',
    'assets/frontend/static/css/9.cf6fc409.chunk.css',
    'assets/frontend/static/css/main.30c4c453.chunk.css',
    'assets/frontend/static/css/20.94581a99.chunk.css',
    'assets/frontend/static/css/15.0142c229.chunk.css',
    'assets/frontend/static/css/header.css',
    'assets/frontend/static/css/10.dd0ef9d4.chunk.css',


  ];

  frontendScript = [
    'https://code.jquery.com/jquery-2.1.4.min.js',
    'assets/frontend/static/js/0.0c136d1b.chunk.js',
    'assets/frontend/static/js/2.d2525480.chunk.js',
    'assets/frontend/static/js/5.9ed9d5b3.chunk.js',
    'assets/frontend/static/js/15.b5bdbea4.chunk.js',
  ];

  backendStyle = [];

  backendScript = [];

  constructor(private router: Router) {}

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
