# Angular Issue 13530

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

This project uses Angular 2.4.1, although this issue first appears in Angular 2.3.0. It does not appear in Angular 2.2.3.

## How to reproduce

Start the server:

```
$ npm install
$ npm install -g angular-cli
$ ng serve
```

- When you navigate to [localhost:4200](http://localhost:4200) it renders the root component.

- When you navigate to [localhost:4200/redirect-to-root](http://localhost:4200/redirect-to-root), the CanActivate guard redirects to`/`. Note that the RootComponent does __NOT__ render, even though it should.

- When you navigate to [localhost:4200/redirect-to-root](http://localhost:4200/redirect-to-root), the CanActivate guard redirects to `/elsewhere`. Note that the ElsewhereComponent correctly renders.
