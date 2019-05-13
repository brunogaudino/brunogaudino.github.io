(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".environment{\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    background: #72e72e;\r\n    text-align: center;\r\n    margin: 0px auto;\r\n    position: absolute;\r\n    width: 100%;\r\n  }\r\n\r\n/* You can add global styles to this file, and also import other style files */\r\n\r\n/*\r\n----AZUL----\r\n#8fd6ff - azul base muito claro\r\n#81C1E5 - azul pouco claro\r\n#6BA0BF - azul medio\r\n#476B7F - azul escuro\r\n#243540 - azul muito escuro\r\n#337ab7 - azul theme\r\n----AZUL----\r\n\r\n----CINZA----\r\n#808080 - cinza escuro\r\n#d0d0d0 - cinza claro\r\n#6b6b6b - cinza link\r\n----CINZA----\r\n\r\n----VERDE----\r\n#27A822 - verde claro\r\n#267723 - verde escuro\r\n----VERDE----\r\n*/\r\n\r\n/* Main page with stikky-footer\r\n-------------------------------------------------- */\r\n\r\n*{\r\n    transition: all 0.5s linear;\r\n}\r\n\r\nhtml, body {\r\n    height: 100%;\r\n    background-color: #fff;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    /* The html and body elements cannot have any padding or margin. */\r\n    border-top: 3px solid #8fd6ff;\r\n    /*border-top: 3px solid #27A822;*/\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\nbody{\r\n    display: block;\r\n}\r\n\r\n.none{\r\n    display: none !important;\r\n}\r\n\r\n/* Wrapper for page content to push down footer */\r\n\r\n#wrap {\r\n    padding-bottom: 50px;\r\n    min-height: 100%;\r\n    height: auto;\r\n    /* Negative indent footer by its height */\r\n    margin: 0 auto -65px;\r\n    /* Pad bottom by footer height */\r\n    /*padding: 0 0 60px;*/\r\n}\r\n\r\nhr{\r\n    border:  0.01em solid #d0d0d0;\r\n}\r\n\r\n.panel{\r\n    box-shadow: none !important;\r\n        -webkit-box-shadow: none !important;\r\n        -moz-box-shadow: none !important;\r\n        -ms-box-shadow: none !important;\r\n        -o-box-shadow: none !important;\r\n}\r\n\r\n/* Navbar\r\n  -------------------------------------------------- */\r\n\r\n.navbar .navbar-header .navbar-brand img{\r\n    height: 50px;\r\n    width: 50px;\r\n    margin: -10px auto 0px auto;\r\n  }\r\n\r\n.navbar-static-top {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n.navbar .navbar-header{\r\n      margin: 10px auto 10px auto;\r\n      border: 0px solid #243540;\r\n      width: 30px;\r\n      height: 30px;\r\n  }\r\n\r\n.navbar .navbar-header .navbar-brand{\r\n    padding: 0px 15px 0px 15px;\r\n  }\r\n\r\n.navbar .navbar-header .navbar-brand i{\r\n    margin: -5px auto 0px auto !important;\r\n    width: 30px;\r\n    height: 35px;\r\n    padding: 0px;\r\n  }\r\n\r\n.navbar-default {\r\n    background-color: #ffffff !important;\r\n    border-color: #ffffff !important;\r\n  }\r\n\r\n/*NAVBAR OCULTO\r\n  .navbar-default .container{\r\n      display: block;\r\n  }*/\r\n\r\n/*NAVBAR OCULTO\r\n  .navbar-default .navbar-brand {\r\n    color: #6b6b6b;\r\n  }\r\n  .navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {\r\n    color: #6b6b6b;\r\n  }\r\n  .navbar-default .navbar-text {\r\n    color: #6b6b6b;\r\n  }\r\n  .navbar-default .navbar-nav > li > a {\r\n    color: #6b6b6b;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n  }\r\n  .navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\r\n    color: #6b6b6b;\r\n  }\r\n  .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\r\n    color: #6b6b6b;\r\n    background-color: #ffffff;\r\n  }\r\n  .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {\r\n    color: #6b6b6b;\r\n    background-color: #ffffff;\r\n  }\r\n  .navbar-default .navbar-toggle {\r\n    border-color: #ffffff;\r\n  }\r\n  .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\r\n    background-color: #ffffff;\r\n  }\r\n  .navbar-default .navbar-toggle .icon-bar {\r\n    background-color: #6b6b6b;\r\n  }\r\n  .navbar-default .navbar-collapse,\r\n  .navbar-default .navbar-form {\r\n    border-color: #6b6b6b;\r\n  }\r\n  .navbar-default .navbar-link {\r\n    color: #6b6b6b;\r\n  }\r\n  .navbar-default .navbar-link:hover {\r\n    color: #6b6b6b;\r\n  }\r\n  \r\n  span.fa{\r\n    display: none;\r\n  }*/\r\n\r\nspan.fa{\r\n    z-index: 1;\r\n    cursor: pointer;\r\n    display: inline;\r\n    margin-top: 5px;\r\n    margin-left: 20px;\r\n    padding: 3px;\r\n    right: 5px;\r\n    position: fixed;\r\n    background-color: white;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n        -webkit-border-radius: 5px;\r\n        -moz-border-radius: 5px;\r\n        -ms-border-radius: 5px;\r\n        -o-border-radius: 5px;\r\n  }\r\n\r\nspan.fa:before{}\r\n\r\n/*#wrap{\r\n    position: relative;\r\n  }*/\r\n\r\n/* Custom page CSS\r\n  -------------------------------------------------- */\r\n\r\n.container {\r\n    width: auto;\r\n    max-width: 960px;\r\n    text-align: center;\r\n  }\r\n\r\n.container .text-muted {\r\n    margin: 20px 0;\r\n  }\r\n\r\n.container a {\r\n    color: #6BA0BF;\r\n    cursor: pointer;\r\n  }\r\n\r\n.container a:hover,\r\n  .container a:focus,\r\n  .container a:active{\r\n    /*color: #267723;*/\r\n    color: #476B7F;\r\n    text-decoration: none;\r\n  }\r\n\r\n.img-responsive {\r\n   display: block;\r\n   height: auto;\r\n   max-width: 100%;\r\n  }\r\n\r\n.panel-default h4 {\r\n    text-align: left;\r\n    line-height: 24px;\r\n    font-size: 22px;\r\n  }\r\n\r\n.panel-default h5 {\r\n    text-align: left;\r\n    line-height: 30px;\r\n    font-size: 18px;\r\n  }\r\n\r\n.panel-default h6 {\r\n    font-size: 15px;\r\n  }\r\n\r\n.panel-default h4 a, h5 a {\r\n    color: #27A822;\r\n  }\r\n\r\n.panel-default h4 a:hover, h5 a:hover {\r\n    color: #267723;\r\n  }\r\n\r\n.panel{\r\n    border-style: none;\r\n  }\r\n\r\n.panel-body {\r\n    padding-top: -10px;\r\n    text-align: left;\r\n  }\r\n\r\n.blog-post{\r\n    padding-top: 30px;\r\n  }\r\n\r\n.blog-title{\r\n    padding-top: 2px;\r\n  }\r\n\r\n.related-posts h4 {\r\n    text-align: center;\r\n  }\r\n\r\n.page-not-found {\r\n    padding-top: 20%;\r\n  }\r\n\r\n.disqus {\r\n    padding-bottom: 15px;\r\n  }\r\n\r\n.blogpost{\r\n    text-align: left;\r\n    line-height: 30px;\r\n    font-size: 18px;\r\n  }\r\n\r\n/*MENU TAB OPTION*/\r\n\r\nsection ul#tabMenuOption{\r\n        text-align: center;\r\n        margin: 15px auto;\r\n        padding: 0px 0px 10px 0px;\r\n        list-style-position: inside;\r\n        /*border-bottom: 1px solid #d0d0d0;*/\r\n      }\r\n\r\nsection ul#tabMenuOption li{\r\n        display: inline-block;\r\n        margin: 5px 2px;\r\n        border: 1px solid #6b6b6b;\r\n        padding: 0.25em 0.50em;\r\n        border-radius: 20px;\r\n          -webkit-border-radius: 20px;\r\n          -moz-border-radius: 20px;\r\n          -ms-border-radius: 20px;\r\n          -o-border-radius: 20px;\r\n      }\r\n\r\n/*   section ul#tabMenuOption li a#ongame{}\r\n       section ul#tabMenuOption li a#viewit{}\r\n       section ul#tabMenuOption li a#ongame img{}\r\n       section ul#tabMenuOption li a#viewit img{}\r\n      */\r\n\r\nsection ul#tabMenuOption li a,\r\n      section ul#tabMenuOption li a:hover{\r\n        line-height: normal;\r\n        text-decoration: none;\r\n      }\r\n\r\nsection ul#tabMenuOption li a{\r\n        color: #233540;\r\n      }\r\n\r\nsection ul#tabMenuOption li.active{\r\n        background: #6b6b6b;\r\n        /*background: #8fd6ff;*/\r\n      }\r\n\r\nsection ul#tabMenuOption li.active a{\r\n        color: white;\r\n      }\r\n\r\nsection #boxContent .showHide{\r\n        display: block !important;\r\n      }\r\n\r\nsection #boxContent ul.contentMenuOption{\r\n        display: none;\r\n      }\r\n\r\n/*section #boxContent section{\r\n        display: none;\r\n        text-align: center;\r\n        padding: 0px;\r\n        border: 1px solid #d0d0d0\r\n      }*/\r\n\r\nsection #boxContent ul{\r\n        margin: 0px auto;\r\n        padding: 0px;\r\n      }\r\n\r\nsection #boxContent ul li{\r\n        margin: 0px 10px;\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n      }\r\n\r\n/*MENU TAB OPTION*/\r\n\r\n/*Configuração imagens e legendas*/\r\n\r\nsection #boxContent figure{\r\n        background: white;\r\n        border: 0px solid #8fd6ff;\r\n        text-align: center;\r\n        margin: 10px auto;\r\n        padding: 10px;\r\n      /*Medidas Responsivo\r\n        min-width: 240px;*/\r\n        max-width: 320px;\r\n        width: 100%;\r\n        height: auto;\r\n      }\r\n\r\nsection #boxContent figure{\r\n        border-radius: 20px;\r\n          -webkit-border-radius: 20px;\r\n          -moz-border-radius: 20px;\r\n          -ms-border-radius: 20px;\r\n          -o-border-radius: 20px;\r\n      }\r\n\r\n/*section #boxContent figure{\r\n        background: white;\r\n        border: 1px solid #d0d0d0;\r\n        text-align: center;\r\n        margin: 10px auto;\r\n        padding: 10px;\r\n        max-width: 480px;\r\n        width: 100%;\r\n        min-width: 200px;\r\n        height: auto;\r\n      }*/\r\n\r\nsection #boxContent figure img{\r\n        /*border: 1px solid #243540;*/\r\n        border: 1px solid #d0d0d0;\r\n        border-radius: 10px;\r\n          -webkit-border-radius: 10px;\r\n          -moz-border-radius: 10px;\r\n          -ms-border-radius: 10px;\r\n          -o-border-radius: 10px;\r\n        /*Medidas Responsivo*/\r\n        background-size:100%;\r\n        background-repeat: no-repeat;\r\n        max-width: 320px;\r\n        width: 100%;\r\n        /*max-height: 420px;*/\r\n        min-height: auto;\r\n      }\r\n\r\nsection #boxContent figure figcaption{\r\n        padding: 10px;\r\n        margin: 10px auto;\r\n        font-style: italic;\r\n        background: #f0f0f0;\r\n        border: 0px solid #243540;\r\n        color: black;\r\n      }\r\n\r\nsection #boxContent figure figcaption{\r\n        border-radius: 10px;\r\n          -webkit-border-radius: 10px;\r\n          -moz-border-radius: 10px;\r\n          -ms-border-radius: 10px;\r\n          -o-border-radius: 10px;\r\n      }\r\n\r\n/*Configuração imagens e legendas*/\r\n\r\n/* Global\r\n-------------------------------------------------- */\r\n\r\n.featured{\r\n    font-weight: bold;\r\n    color: #333;\r\n}\r\n\r\n.loader{\r\n  display: table;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  opacity: 1;\r\n  position: fixed;\r\n  top: 0px;\r\n}\r\n\r\n.loader .loaderContent{\r\n  /*background-size: 54px 55px;*/\r\n  background-image: url(\"/assets/img/global/intersection-black.gif\");\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  overflow: hidden;\r\n  text-align: center;\r\n  background-color: #dcdcdc;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 1;\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n.container #navbar .navbar-right{\r\n  margin: 0px;\r\n}\r\n\r\n.container #navbar .navbar.nav > li > a{\r\n  padding: 10px 15px;\r\n}\r\n\r\n/* Depositions\r\n  -------------------------------------------------- */\r\n\r\n#recommendation #navbar{\r\n    margin: 0px auto 0px auto;\r\n  }\r\n\r\n#recommendation #navbar .navbar-right{\r\n    margin-right: 0px;\r\n    padding: 0px 10px 0px 0px;\r\n  }\r\n\r\n#recommendation #navbar .navbar-nav{\r\n    margin-right: -10px;\r\n  }\r\n\r\nsection#depositions{\r\n    border: 0px solid #8fd6ff;\r\n  }\r\n\r\nsection#depositions .flex-caption {\r\n    /* width: 96%; */\r\n    padding: 2%;\r\n    left: 0;\r\n    bottom: 0;\r\n    background: rgba(0,0,0,.5);\r\n    color: #fff;\r\n    text-shadow: 0 -1px 0 rgba(0,0,0,.3);\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n  }\r\n\r\nsection#depositions li.css a {\r\n    border-radius: 0;\r\n  }\r\n\r\n/*\r\n  section#depositions .flexslider ul.slides li\r\n  p.depositions\r\n  p.flex-caption\r\n  */\r\n\r\nsection#depositions .flexslider ul.slides li p.depositions{\r\n    border: 0px solid #243540;\r\n    margin: 0px 15px 15px 15px;\r\n    font-style: italic;\r\n    line-height: normal;\r\n    font-size: 1.5em;\r\n    font-weight: normal;\r\n  }\r\n\r\nsection#depositions .flexslider ul.slides li .flex-caption{\r\n    border-top: 1px solid #d0d0d0;\r\n    background: none !important;\r\n    padding: 10px 10px;\r\n    text-align: right;\r\n    color: #000;\r\n    font-size: 1.1em;\r\n  }\r\n\r\nsection#depositions .flex-viewport{\r\n    padding-top: 10px;\r\n    border: 1px solid #d0d0d0;\r\n    border-radius: 20px;\r\n  }\r\n\r\nsection#depositions .flexslider ol.flex-control-nav{\r\n    border: 0px solid #8fd6ff;\r\n    bottom: -30px !important;\r\n    padding: 10px 0px 0px 0px;\r\n  }\r\n\r\nsection#depositions .flexslider figure{\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\nsection#depositions .flexslider figure img{\r\n    width: 80px;\r\n    height: 80px;\r\n    display: inline;\r\n    margin-right: 10px;\r\n    border:  3px solid #8fd6ff;\r\n    border-radius: 10px;\r\n  }\r\n\r\n/* Portfolio\r\n  -------------------------------------------------- */\r\n\r\n/*old portfolio\r\n  section#portfolio ul#ongameSites figure img{\r\n    border: 1px solid #243540;\r\n    background-size:100%;\r\n    background-repeat: no-repeat;\r\n    max-width: 480px;\r\n    width: 100%;\r\n    max-height: 480px;\r\n    min-height: auto;\r\n  }\r\n  \r\n  section#portfolio #boxContent ul li.subTitulo{\r\n    display: block;\r\n    padding: 5px;\r\n    margin: 5px auto;\r\n  }\r\n  \r\n  section#portfolio #boxContent ul li.subTitulo p{\r\n    font-weight: normal;\r\n    font-size: 1.2em;\r\n    padding: 5px;\r\n    border-top: 1px solid #d0d0d0;\r\n    border-bottom: 1px solid #d0d0d0;\r\n  }\r\n  \r\n  section#portfolio #boxContent ul li.subTitulo h4{\r\n    text-align: left;\r\n    margin: 15px auto;\r\n    font-size: 1.1em;\r\n  }\r\n  old portfolio*/\r\n\r\nsection#portfolio #boxContent section {\r\n    display: none;\r\n}\r\n\r\nsection#portfolio #boxContent section article{\r\n  border: 1px solid #6b6b6b;\r\n  border-radius: 20px;\r\n    -webkit-border-radius: 20px;\r\n    -moz-border-radius: 20px;\r\n    -ms-border-radius: 20px;\r\n    -o-border-radius: 20px;\r\n}\r\n\r\nsection#portfolio #boxContent article header.subTitulo{\r\n  border-top: 0px solid #6b6b6b;\r\n  border-bottom: 0px solid #6b6b6b;\r\n}\r\n\r\nsection#portfolio #boxContent header.subTitulo h2{\r\n  color: #000;\r\n  font-weight: bold;\r\n  font-size: 1.5em;\r\n  display: block;\r\n  padding: 5px;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n/*  border-top: 1px solid #6b6b6b;\r\n  border-bottom: 1px solid #6b6b6b;*/\r\n}\r\n\r\nsection#portfolio #boxContent header.subTitulo h2 span{\r\n  display: block;\r\n  font-weight: bold;\r\n  font-size: 0.7em;\r\n  padding: 5px;\r\n  margin: 0.5em auto 0px auto;\r\n  max-width: 350px;\r\n  background: #fff;\r\n  border: 1px solid #6b6b6b;\r\n  border-radius: 10px;\r\n    -webkit-border-radius: 10px;\r\n    -moz-border-radius: 10px;\r\n    -ms-border-radius: 10px;\r\n    -o-border-radius: 10px;\r\n}\r\n\r\nsection#portfolio #boxContent header.subTitulo h4{\r\n  color: #000;\r\n  font-size: 1.0em;\r\n  display: block;\r\n  padding: 10px 20px;\r\n  margin: 0 auto;\r\n}\r\n\r\nsection#portfolio article{\r\n  text-align: center;\r\n}\r\n\r\nsection#portfolio #boxContent .extra{\r\n  display: inline-block;\r\n  max-width: 320px;\r\n  vertical-align: top;\r\n}\r\n\r\n/* Skills\r\n  -------------------------------------------------- */\r\n\r\nsection#skills #boxContent figure{\r\n    width: 150px;\r\n  }\r\n\r\nsection#skills #boxContent .superior figure{\r\n    width: auto;\r\n    min-width: 100px;\r\n  }\r\n\r\nsection#skills #boxContent .superior figure img{\r\n    border: 0px solid #243540;\r\n    background-size: 100%;\r\n    background-repeat: no-repeat;\r\n    width: 100%;\r\n  /*  max-width: 280px;\r\n    max-height: 150px;*/\r\n    min-height: auto;\r\n  }\r\n\r\nsection#skills #boxContent .extra{\r\n    display: inline-block;\r\n    max-width: 320px;\r\n    vertical-align: top;\r\n  }\r\n\r\nsection#skills #boxContent .extra figure img{\r\n    border: 0px solid #243540;\r\n    /*Medidas Responsivo*/\r\n    background-size:100%;\r\n    background-repeat: no-repeat;\r\n    max-width: 70px;\r\n    width: 100%;\r\n    max-height: 70px;\r\n    min-height: auto;\r\n  }\r\n\r\nsection#skills #boxContent section{\r\n    display: none;\r\n  }\r\n\r\nsection#skills #boxContent section article{\r\n    text-align: center;\r\n    padding: 0px;\r\n    margin: 20px auto;\r\n    border: 1px solid #6b6b6b;\r\n    border-radius: 20px;\r\n      -webkit-border-radius: 20px;\r\n      -moz-border-radius: 20px;\r\n      -ms-border-radius: 20px;\r\n      -o-border-radius: 20px;\r\n  }\r\n\r\nsection#skills #boxContent .subTitulo{\r\n    display: block;\r\n    padding: 0px;\r\n    margin: 0px auto;\r\n  }\r\n\r\nsection#skills #boxContent .subTitulo h2{\r\n    color: #000;\r\n    font-weight: bold;\r\n    font-size: 1.5em;\r\n    display: block;\r\n    padding: 5px;\r\n    margin: 0 auto;\r\n    /*border-bottom: 1px solid #6b6b6b;*/\r\n  }\r\n\r\nsection#skills #boxContent .subTitulo h2 span{\r\n    display: block;\r\n    font-weight: bold;\r\n    font-size: 0.7em;\r\n    padding: 5px;\r\n    margin: 0.5em auto 0px auto;\r\n    max-width: 350px;\r\n    background: #fff;\r\n    border: 1px solid #6b6b6b;\r\n    border-radius: 10px;\r\n      -webkit-border-radius: 10px;\r\n      -moz-border-radius: 10px;\r\n      -ms-border-radius: 10px;\r\n      -o-border-radius: 10px;\r\n  }\r\n\r\nsection#skills #boxContent .subTitulo h2 span a{\r\n    color: #233540;\r\n  }\r\n\r\nsection#skills #boxContent .subTitulo h2 span:hover{\r\n    cursor: pointer;\r\n    background: #6b6b6b;\r\n  }\r\n\r\nsection#skills #boxContent .subTitulo h2:hover span:hover a,\r\n  section#skills #boxContent .subTitulo h2 span:hover a:hover{\r\n    color: #fff;\r\n  }\r\n\r\nsection#skills #boxContent section article footer.footer-information{\r\n    padding: 0px 15px;\r\n  }\r\n\r\nsection#skills #boxContent section article footer.footer-information p{\r\n    text-align: center;\r\n  }\r\n\r\n/*\r\n  section#skills #boxContent .subTitulo h4{text-align: left;margin: 15px auto;font-size: 1.1em;}\r\n  section#skills #boxContent ul li.jekyllrb{}\r\n  section#skills #boxContent ul li.jekyllrb figure{}\r\n  section#skills #boxContent ul li.jekyllrb figure img{}\r\n  */\r\n\r\n/* Blog\r\n  -------------------------------------------------- */\r\n\r\nsection#blog .container h5{\r\n    font-size: 1.5em;\r\n    text-align: center;\r\n    margin: 5px auto;\r\n  }\r\n\r\nsection#blog .container .avatar{\r\n    margin: 20px auto;\r\n    text-align: center;\r\n  }\r\n\r\nsection#blog .container .row.line{\r\n    border: 0px solid red;\r\n    margin: 5px auto;\r\n    padding-bottom: 10px;\r\n  }\r\n\r\nsection#blog .container .row.line span.data{\r\n    text-align: center;\r\n    display: block;\r\n    color: #6b6b6b;\r\n    font-size: 0.9em;\r\n    margin: 5px auto;\r\n  }\r\n\r\nsection#blog .container .row.line span.tags{\r\n    text-align: center;\r\n    display: block;\r\n  }\r\n\r\nsection#blog .container .line{\r\n    border-bottom: 0px solid #6b6b6b;\r\n  }\r\n\r\nsection#blog h5 time{\r\n    color: #6b6b6b;\r\n    padding: 0px;\r\n    margin: 0px auto;\r\n  }\r\n\r\nsection#blog h5 span.reading-time{\r\n    display: block;\r\n    font-size: 0.8em;\r\n    color: #808080;\r\n    padding: 0px;\r\n    margin: 0px auto;\r\n  }\r\n\r\nsection#blog .label-success{\r\n    background-color: #267723;\r\n  }\r\n\r\n/*Configuração imagens e legendas*/\r\n\r\narticle#blog figure{\r\n    background: white;\r\n    border: 1px solid #d0d0d0;\r\n    text-align: center;\r\n    margin: 10px auto;\r\n    padding: 10px;\r\n  \r\n    /*Medidas Responsivo*/\r\n    max-width: 320px;\r\n    width: 100%;\r\n    min-width: 250px;\r\n    height: auto;\r\n  }\r\n\r\narticle#blog figure img{\r\n    border: 1px solid #243540;\r\n  \r\n    /*Medidas Responsivo*/\r\n    background-size:100%;\r\n    background-repeat: no-repeat;\r\n    max-width: 320px;\r\n    width: 100%;\r\n    /*max-height: 420px;*/\r\n    min-height: auto;\r\n  }\r\n\r\narticle#blog figure figcaption{\r\n    padding: 10px;\r\n    margin: 10px auto;\r\n    font-style: italic;\r\n    background: #f0f0f0;\r\n    border: 0px solid #243540;\r\n    color: black;\r\n    font-size: 0.8em;\r\n    line-height: normal;\r\n  }\r\n\r\narticle#blog figure{\r\n    border-radius: 20px;\r\n  }\r\n\r\narticle#blog figure figcaption{\r\n    border-radius: 10px;\r\n  }\r\n\r\narticle#blog figure{\r\n    background: white;\r\n    border: 1px solid #d0d0d0;\r\n    text-align: center;\r\n    margin: 10px auto;\r\n    padding: 10px;\r\n    /*Medidas Responsivo*/\r\n    max-width: 480px;\r\n    width: 100%;\r\n    min-width: 200px;\r\n    height: auto;\r\n  }\r\n\r\n/*Configuração imagens e legendas*/\r\n\r\n/*BLOG*/\r\n\r\n/* POST\r\n  -------------------------------------------------- */\r\n\r\nsection#post .container .blog-post h3{\r\n    font-size: 1.5em;\r\n    text-align: center;\r\n    margin: 5px auto;\r\n  }\r\n\r\nsection#post .container .row.line{\r\n    margin: 5px auto;\r\n    padding-bottom: 10px;\r\n  }\r\n\r\nsection#post .container .row.line span.data{\r\n   }\r\n\r\nsection#post .container .row.line span.tags{\r\n    text-align: center;\r\n    display: block;\r\n  }\r\n\r\nsection#post .container .blog-title h4{\r\n    text-align: center;\r\n    display: block;\r\n    color: #6b6b6b;\r\n    font-size: 0.9em;\r\n    margin: 5px auto;\r\n    vertical-align: center;\r\n  }\r\n\r\nsection#post .container .blog-title h4 span.category{\r\n    display: block;\r\n    margin: 10px auto;\r\n  }\r\n\r\nsection#post .container .blog-title h4 span.dataTime{\r\n    display: block;\r\n    margin: 10px auto;\r\n  }\r\n\r\nsection#post .container .blog-title h4 span.label{\r\n    background-color: #267723;\r\n    font-size: 0.9em;\r\n  }\r\n\r\nsection#post .container section{\r\n  \r\n  }\r\n\r\nsection#post .container section header{\r\n    margin: 0px auto 10px auto;\r\n    padding: 5px 10px;\r\n    font-size: 0.9em;\r\n    font-weight: bold;\r\n    text-align: center;\r\n  }\r\n\r\nsection#post .container section article{\r\n  \r\n  }\r\n\r\nsection#post .container section article p{\r\n    font-size: 0.9em;\r\n    line-height: normal;\r\n    margin: 10px auto;\r\n  }\r\n\r\nsection#post .container section footer{\r\n    border-top: 0px solid #d0d0d0;\r\n    margin: 10px auto 0px auto;\r\n  }\r\n\r\nsection#post .container section .assign{\r\n    border-bottom: 1px solid #d0d0d0;\r\n    margin: 0px auto 10px auto;\r\n    padding: 0px 10px;\r\n    font-size: 0.8em;\r\n  }\r\n\r\nsection#post .container section footer h4{\r\n    font-size: 1.0em;\r\n    font-weight: bold;\r\n    border-top: 0px solid #d0d0d0;\r\n    padding: 5px 10px;\r\n  }\r\n\r\nsection#post .container section footer p{\r\n    border-top: 0px solid #d0d0d0;\r\n    padding: 5px 20px;\r\n    font-size: 0.9em;\r\n  }\r\n\r\nsection#post .container section footer ul{\r\n    display: block;\r\n  }\r\n\r\nsection#post .container section footer ul li{\r\n    list-style-type: disc;\r\n    list-style-position: inside;\r\n    line-height: normal;\r\n    margin: 0px auto;\r\n  }\r\n\r\nsection#post .container section footer ul li a{\r\n    font-size: 0.8em;\r\n  }\r\n\r\n/*POST*/\r\n\r\n/* LAB\r\n  -------------------------------------------------- */\r\n\r\nsection#lab .container .panel .panel-body{\r\n    text-align: center;\r\n  }\r\n\r\nsection#lab .container .panel p.tituloLab{\r\n      font-weight: normal;\r\n      font-size: 1.2em;\r\n      text-align: center;\r\n      padding: 5px;\r\n      margin: 10px auto 15px auto;\r\n      border-top: 1px solid #d0d0d0;\r\n      border-bottom: 1px solid #d0d0d0;\r\n  }\r\n\r\nsection#lab .container section#labProjects{\r\n    margin: 20px auto 0px auto;\r\n  }\r\n\r\nsection#lab .container section#labProjects article{\r\n    border: 1px solid #6b6b6b;\r\n    border-radius: 20px;\r\n      -webkit-border-radius: 20px;\r\n      -moz-border-radius: 20px;\r\n      -ms-border-radius: 20px;\r\n      -o-border-radius: 20px;\r\n  }\r\n\r\nsection#lab .container section#labProjects h2{\r\n    color: #000;\r\n    font-weight: 700;\r\n    font-size: 1.5em;\r\n    display: block;\r\n    padding: 5px;\r\n    margin: 0px auto 10px auto;\r\n    border-top: 0px solid #6b6b6b;\r\n    border-bottom: 0px solid #6b6b6b;\r\n  }\r\n\r\nsection#lab .container section#labProjects h2 span{\r\n    font-size: 0.7em;\r\n    font-weight: normal;\r\n    display: block;\r\n    margin: 5px auto;\r\n  }\r\n\r\nsection#lab .container section#labProjects h5 {\r\n      text-align: left;\r\n      line-height: 30px;\r\n      font-size: 18px;\r\n      border: 1px solid #d0d0d0;\r\n      padding: 10px;\r\n      border-radius: 20px;\r\n        -webkit-border-radius: 20px;\r\n        -moz-border-radius: 20px;\r\n        -ms-border-radius: 20px;\r\n        -o-border-radius: 20px;\r\n      width: 250px;\r\n      display: inline-block;\r\n      vertical-align: top;\r\n      margin: 0.5em 0.3em;\r\n  }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,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O0FBQ3BEO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVBO01BQ0ksbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLDJCQUEyQjtNQUMzQiw2QkFBNkI7TUFDN0IsZ0NBQWdDO0VBQ3BDOztBQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtNQUNqQiwyQkFBMkI7TUFDM0Isd0JBQXdCO01BQ3hCLHVCQUF1QjtNQUN2QixzQkFBc0I7RUFDMUI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztBQUVBO01BQ0ksZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YseUJBQXlCO01BQ3pCLGFBQWE7TUFDYixtQkFBbUI7UUFDakIsMkJBQTJCO1FBQzNCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsc0JBQXNCO01BQ3hCLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsbUJBQW1CO01BQ25CLG1CQUFtQjtFQUN2QiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbnZpcm9ubWVudHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzJlNzJlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuLypcclxuLS0tLUFaVUwtLS0tXHJcbiM4ZmQ2ZmYgLSBhenVsIGJhc2UgbXVpdG8gY2xhcm9cclxuIzgxQzFFNSAtIGF6dWwgcG91Y28gY2xhcm9cclxuIzZCQTBCRiAtIGF6dWwgbWVkaW9cclxuIzQ3NkI3RiAtIGF6dWwgZXNjdXJvXHJcbiMyNDM1NDAgLSBhenVsIG11aXRvIGVzY3Vyb1xyXG4jMzM3YWI3IC0gYXp1bCB0aGVtZVxyXG4tLS0tQVpVTC0tLS1cclxuXHJcbi0tLS1DSU5aQS0tLS1cclxuIzgwODA4MCAtIGNpbnphIGVzY3Vyb1xyXG4jZDBkMGQwIC0gY2luemEgY2xhcm9cclxuIzZiNmI2YiAtIGNpbnphIGxpbmtcclxuLS0tLUNJTlpBLS0tLVxyXG5cclxuLS0tLVZFUkRFLS0tLVxyXG4jMjdBODIyIC0gdmVyZGUgY2xhcm9cclxuIzI2NzcyMyAtIHZlcmRlIGVzY3Vyb1xyXG4tLS0tVkVSREUtLS0tXHJcbiovXHJcblxyXG4vKiBNYWluIHBhZ2Ugd2l0aCBzdGlra3ktZm9vdGVyXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4qe1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xyXG59XHJcblxyXG5odG1sLCBib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgICAvKiBUaGUgaHRtbCBhbmQgYm9keSBlbGVtZW50cyBjYW5ub3QgaGF2ZSBhbnkgcGFkZGluZyBvciBtYXJnaW4uICovXHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzhmZDZmZjtcclxuICAgIC8qYm9yZGVyLXRvcDogM3B4IHNvbGlkICMyN0E4MjI7Ki9cclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuICBcclxuLm5vbmV7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIFdyYXBwZXIgZm9yIHBhZ2UgY29udGVudCB0byBwdXNoIGRvd24gZm9vdGVyICovXHJcbiN3cmFwIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIE5lZ2F0aXZlIGluZGVudCBmb290ZXIgYnkgaXRzIGhlaWdodCAqL1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gLTY1cHg7XHJcbiAgICAvKiBQYWQgYm90dG9tIGJ5IGZvb3RlciBoZWlnaHQgKi9cclxuICAgIC8qcGFkZGluZzogMCAwIDYwcHg7Ki9cclxufVxyXG5cclxuaHJ7XHJcbiAgICBib3JkZXI6ICAwLjAxZW0gc29saWQgI2QwZDBkMDtcclxufVxyXG5cclxuLnBhbmVse1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC1tcy1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLW8tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gIC8qIE5hdmJhclxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgLm5hdmJhciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWJyYW5kIGltZ3tcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgbWFyZ2luOiAtMTBweCBhdXRvIDBweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAubmF2YmFyLXN0YXRpYy10b3Age1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhciAubmF2YmFyLWhlYWRlcntcclxuICAgICAgbWFyZ2luOiAxMHB4IGF1dG8gMTBweCBhdXRvO1xyXG4gICAgICBib3JkZXI6IDBweCBzb2xpZCAjMjQzNTQwO1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAubmF2YmFyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYnJhbmR7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweCAwcHggMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWJyYW5kIGl7XHJcbiAgICBtYXJnaW46IC01cHggYXV0byAwcHggYXV0byAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZiYXItZGVmYXVsdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLypOQVZCQVIgT0NVTFRPXHJcbiAgLm5hdmJhci1kZWZhdWx0IC5jb250YWluZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH0qL1xyXG4gIC8qTkFWQkFSIE9DVUxUT1xyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWJyYW5kIHtcclxuICAgIGNvbG9yOiAjNmI2YjZiO1xyXG4gIH1cclxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1icmFuZDpob3ZlciwgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQ6Zm9jdXMge1xyXG4gICAgY29sb3I6ICM2YjZiNmI7XHJcbiAgfVxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRleHQge1xyXG4gICAgY29sb3I6ICM2YjZiNmI7XHJcbiAgfVxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gYSB7XHJcbiAgICBjb2xvcjogIzZiNmI2YjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gYTpob3ZlciwgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gbGkgPiBhOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjNmI2YjZiO1xyXG4gIH1cclxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYSwgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6aG92ZXIsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjNmI2YjZiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLm9wZW4gPiBhLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAub3BlbiA+IGE6aG92ZXIsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5vcGVuID4gYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzZiNmI2YjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZSB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZTpob3ZlciwgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItdG9nZ2xlOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZiNmI2YjtcclxuICB9XHJcbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItY29sbGFwc2UsXHJcbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItZm9ybSB7XHJcbiAgICBib3JkZXItY29sb3I6ICM2YjZiNmI7XHJcbiAgfVxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWxpbmsge1xyXG4gICAgY29sb3I6ICM2YjZiNmI7XHJcbiAgfVxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6ICM2YjZiNmI7XHJcbiAgfVxyXG4gIFxyXG4gIHNwYW4uZmF7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH0qL1xyXG5cclxuICBzcGFuLmZhe1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNwYW4uZmE6YmVmb3Jle31cclxuICBcclxuICAvKiN3cmFwe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH0qL1xyXG5cclxuICAvKiBDdXN0b20gcGFnZSBDU1NcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuY29udGFpbmVyIC50ZXh0LW11dGVkIHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gIH1cclxuICAuY29udGFpbmVyIGEge1xyXG4gICAgY29sb3I6ICM2QkEwQkY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5jb250YWluZXIgYTpob3ZlcixcclxuICAuY29udGFpbmVyIGE6Zm9jdXMsXHJcbiAgLmNvbnRhaW5lciBhOmFjdGl2ZXtcclxuICAgIC8qY29sb3I6ICMyNjc3MjM7Ki9cclxuICAgIGNvbG9yOiAjNDc2QjdGO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAuaW1nLXJlc3BvbnNpdmUge1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgaGVpZ2h0OiBhdXRvO1xyXG4gICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5wYW5lbC1kZWZhdWx0IGg0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbiAgLnBhbmVsLWRlZmF1bHQgaDUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICAucGFuZWwtZGVmYXVsdCBoNiB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIC5wYW5lbC1kZWZhdWx0IGg0IGEsIGg1IGEge1xyXG4gICAgY29sb3I6ICMyN0E4MjI7XHJcbiAgfVxyXG4gIC5wYW5lbC1kZWZhdWx0IGg0IGE6aG92ZXIsIGg1IGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMyNjc3MjM7XHJcbiAgfVxyXG4gIC5wYW5lbHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgLnBhbmVsLWJvZHkge1xyXG4gICAgcGFkZGluZy10b3A6IC0xMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIC5ibG9nLXBvc3R7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICB9XHJcbiAgLmJsb2ctdGl0bGV7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gIH1cclxuICAucmVsYXRlZC1wb3N0cyBoNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5wYWdlLW5vdC1mb3VuZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gIH1cclxuICAuZGlzcXVzIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuYmxvZ3Bvc3R7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAgIC8qTUVOVSBUQUIgT1BUSU9OKi9cclxuICAgIHNlY3Rpb24gdWwjdGFiTWVudU9wdGlvbntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAxMHB4IDBweDtcclxuICAgICAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XHJcbiAgICAgICAgLypib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QwZDBkMDsqL1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBzZWN0aW9uIHVsI3RhYk1lbnVPcHRpb24gbGl7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDJweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNmI2YjZiO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMjVlbSAwLjUwZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIC8qICAgc2VjdGlvbiB1bCN0YWJNZW51T3B0aW9uIGxpIGEjb25nYW1le31cclxuICAgICAgIHNlY3Rpb24gdWwjdGFiTWVudU9wdGlvbiBsaSBhI3ZpZXdpdHt9XHJcbiAgICAgICBzZWN0aW9uIHVsI3RhYk1lbnVPcHRpb24gbGkgYSNvbmdhbWUgaW1ne31cclxuICAgICAgIHNlY3Rpb24gdWwjdGFiTWVudU9wdGlvbiBsaSBhI3ZpZXdpdCBpbWd7fVxyXG4gICAgICAqL1xyXG4gICAgICBzZWN0aW9uIHVsI3RhYk1lbnVPcHRpb24gbGkgYSxcclxuICAgICAgc2VjdGlvbiB1bCN0YWJNZW51T3B0aW9uIGxpIGE6aG92ZXJ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHNlY3Rpb24gdWwjdGFiTWVudU9wdGlvbiBsaSBhe1xyXG4gICAgICAgIGNvbG9yOiAjMjMzNTQwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBzZWN0aW9uIHVsI3RhYk1lbnVPcHRpb24gbGkuYWN0aXZle1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM2YjZiNmI7XHJcbiAgICAgICAgLypiYWNrZ3JvdW5kOiAjOGZkNmZmOyovXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHNlY3Rpb24gdWwjdGFiTWVudU9wdGlvbiBsaS5hY3RpdmUgYXtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHNlY3Rpb24gI2JveENvbnRlbnQgLnNob3dIaWRle1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHNlY3Rpb24gI2JveENvbnRlbnQgdWwuY29udGVudE1lbnVPcHRpb257XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLypzZWN0aW9uICNib3hDb250ZW50IHNlY3Rpb257XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMGQwZDBcclxuICAgICAgfSovXHJcbiAgICAgIFxyXG4gICAgICBzZWN0aW9uICNib3hDb250ZW50IHVse1xyXG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBzZWN0aW9uICNib3hDb250ZW50IHVsIGxpe1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIH1cclxuICAgICAgLypNRU5VIFRBQiBPUFRJT04qL1xyXG4gICAgICBcclxuICAgICAgLypDb25maWd1cmHDp8OjbyBpbWFnZW5zIGUgbGVnZW5kYXMqL1xyXG4gICAgICBzZWN0aW9uICNib3hDb250ZW50IGZpZ3VyZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IDBweCBzb2xpZCAjOGZkNmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAvKk1lZGlkYXMgUmVzcG9uc2l2b1xyXG4gICAgICAgIG1pbi13aWR0aDogMjQwcHg7Ki9cclxuICAgICAgICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgc2VjdGlvbiAjYm94Q29udGVudCBmaWd1cmV7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLypzZWN0aW9uICNib3hDb250ZW50IGZpZ3VyZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDBkMGQwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNDgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIH0qL1xyXG4gICAgICBcclxuICAgICAgc2VjdGlvbiAjYm94Q29udGVudCBmaWd1cmUgaW1ne1xyXG4gICAgICAgIC8qYm9yZGVyOiAxcHggc29saWQgIzI0MzU0MDsqL1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMGQwZDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAvKk1lZGlkYXMgUmVzcG9uc2l2byovXHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOjEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8qbWF4LWhlaWdodDogNDIwcHg7Ki9cclxuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBzZWN0aW9uICNib3hDb250ZW50IGZpZ3VyZSBmaWdjYXB0aW9ue1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiAgICAgICAgYm9yZGVyOiAwcHggc29saWQgIzI0MzU0MDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBzZWN0aW9uICNib3hDb250ZW50IGZpZ3VyZSBmaWdjYXB0aW9ue1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLypDb25maWd1cmHDp8OjbyBpbWFnZW5zIGUgbGVnZW5kYXMqL1xyXG5cclxuLyogR2xvYmFsXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5mZWF0dXJlZHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5sb2FkZXJ7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogMTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5sb2FkZXIgLmxvYWRlckNvbnRlbnR7XHJcbiAgLypiYWNrZ3JvdW5kLXNpemU6IDU0cHggNTVweDsqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2dsb2JhbC9pbnRlcnNlY3Rpb24tYmxhY2suZ2lmXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkY2RjO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAjbmF2YmFyIC5uYXZiYXItcmlnaHR7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgI25hdmJhciAubmF2YmFyLm5hdiA+IGxpID4gYXtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbn1cclxuXHJcbiAgLyogRGVwb3NpdGlvbnNcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICNyZWNvbW1lbmRhdGlvbiAjbmF2YmFye1xyXG4gICAgbWFyZ2luOiAwcHggYXV0byAwcHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgI3JlY29tbWVuZGF0aW9uICNuYXZiYXIgLm5hdmJhci1yaWdodHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDBweDtcclxuICB9XHJcbiAgI3JlY29tbWVuZGF0aW9uICNuYXZiYXIgLm5hdmJhci1uYXZ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI2RlcG9zaXRpb25ze1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgIzhmZDZmZjtcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNkZXBvc2l0aW9ucyAuZmxleC1jYXB0aW9uIHtcclxuICAgIC8qIHdpZHRoOiA5NiU7ICovXHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwwLDAsLjMpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jZGVwb3NpdGlvbnMgbGkuY3NzIGEge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbiAgXHJcbiAgLypcclxuICBzZWN0aW9uI2RlcG9zaXRpb25zIC5mbGV4c2xpZGVyIHVsLnNsaWRlcyBsaVxyXG4gIHAuZGVwb3NpdGlvbnNcclxuICBwLmZsZXgtY2FwdGlvblxyXG4gICovXHJcbiAgc2VjdGlvbiNkZXBvc2l0aW9ucyAuZmxleHNsaWRlciB1bC5zbGlkZXMgbGkgcC5kZXBvc2l0aW9uc3tcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICMyNDM1NDA7XHJcbiAgICBtYXJnaW46IDBweCAxNXB4IDE1cHggMTVweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNkZXBvc2l0aW9ucyAuZmxleHNsaWRlciB1bC5zbGlkZXMgbGkgLmZsZXgtY2FwdGlvbntcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDBkMGQwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jZGVwb3NpdGlvbnMgLmZsZXgtdmlld3BvcnR7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMGQwZDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI2RlcG9zaXRpb25zIC5mbGV4c2xpZGVyIG9sLmZsZXgtY29udHJvbC1uYXZ7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjOGZkNmZmO1xyXG4gICAgYm90dG9tOiAtMzBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMHB4IDBweDtcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNkZXBvc2l0aW9ucyAuZmxleHNsaWRlciBmaWd1cmV7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNkZXBvc2l0aW9ucyAuZmxleHNsaWRlciBmaWd1cmUgaW1ne1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXI6ICAzcHggc29saWQgIzhmZDZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAgIC8qIFBvcnRmb2xpb1xyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgLypvbGQgcG9ydGZvbGlvXHJcbiAgc2VjdGlvbiNwb3J0Zm9saW8gdWwjb25nYW1lU2l0ZXMgZmlndXJlIGltZ3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyNDM1NDA7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA0ODBweDtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jcG9ydGZvbGlvICNib3hDb250ZW50IHVsIGxpLnN1YlRpdHVsb3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNwb3J0Zm9saW8gI2JveENvbnRlbnQgdWwgbGkuc3ViVGl0dWxvIHB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDBkMGQwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMGQwZDA7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jcG9ydGZvbGlvICNib3hDb250ZW50IHVsIGxpLnN1YlRpdHVsbyBoNHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgfVxyXG4gIG9sZCBwb3J0Zm9saW8qL1xyXG4gIFxyXG4gIHNlY3Rpb24jcG9ydGZvbGlvICNib3hDb250ZW50IHNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuc2VjdGlvbiNwb3J0Zm9saW8gI2JveENvbnRlbnQgc2VjdGlvbiBhcnRpY2xle1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2YjZiNmI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC1tcy1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgLW8tYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuc2VjdGlvbiNwb3J0Zm9saW8gI2JveENvbnRlbnQgYXJ0aWNsZSBoZWFkZXIuc3ViVGl0dWxve1xyXG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCAjNmI2YjZiO1xyXG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjNmI2YjZiO1xyXG59XHJcblxyXG5zZWN0aW9uI3BvcnRmb2xpbyAjYm94Q29udGVudCBoZWFkZXIuc3ViVGl0dWxvIGgye1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuLyogIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNmI2YjZiO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNmI2YjZiOyovXHJcbn1cclxuXHJcbnNlY3Rpb24jcG9ydGZvbGlvICNib3hDb250ZW50IGhlYWRlci5zdWJUaXR1bG8gaDIgc3BhbntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDAuN2VtO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDAuNWVtIGF1dG8gMHB4IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2YjZiNmI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC1tcy1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLW8tYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuc2VjdGlvbiNwb3J0Zm9saW8gI2JveENvbnRlbnQgaGVhZGVyLnN1YlRpdHVsbyBoNHtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDEuMGVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuc2VjdGlvbiNwb3J0Zm9saW8gYXJ0aWNsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnNlY3Rpb24jcG9ydGZvbGlvICNib3hDb250ZW50IC5leHRyYXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4gIC8qIFNraWxsc1xyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgc2VjdGlvbiNza2lsbHMgI2JveENvbnRlbnQgZmlndXJle1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3VwZXJpb3IgZmlndXJle1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3VwZXJpb3IgZmlndXJlIGltZ3tcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICMyNDM1NDA7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgLyogIG1heC13aWR0aDogMjgwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDsqL1xyXG4gICAgbWluLWhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNza2lsbHMgI2JveENvbnRlbnQgLmV4dHJhe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IC5leHRyYSBmaWd1cmUgaW1ne1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgIzI0MzU0MDtcclxuICAgIC8qTWVkaWRhcyBSZXNwb25zaXZvKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG1heC13aWR0aDogNzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogNzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IHNlY3Rpb257XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCBzZWN0aW9uIGFydGljbGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2YjZiNmI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IC5zdWJUaXR1bG97XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IC5zdWJUaXR1bG8gaDJ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAvKmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNmI2YjZiOyovXHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IC5zdWJUaXR1bG8gaDIgc3BhbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiAwLjVlbSBhdXRvIDBweCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNmI2YjZiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAtby1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3ViVGl0dWxvIGgyIHNwYW4gYXtcclxuICAgIGNvbG9yOiAjMjMzNTQwO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3ViVGl0dWxvIGgyIHNwYW46aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmI2YjZiO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3ViVGl0dWxvIGgyOmhvdmVyIHNwYW46aG92ZXIgYSxcclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3ViVGl0dWxvIGgyIHNwYW46aG92ZXIgYTpob3ZlcntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCBzZWN0aW9uIGFydGljbGUgZm9vdGVyLmZvb3Rlci1pbmZvcm1hdGlvbntcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gIH1cclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCBzZWN0aW9uIGFydGljbGUgZm9vdGVyLmZvb3Rlci1pbmZvcm1hdGlvbiBwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAvKlxyXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IC5zdWJUaXR1bG8gaDR7dGV4dC1hbGlnbjogbGVmdDttYXJnaW46IDE1cHggYXV0bztmb250LXNpemU6IDEuMWVtO31cclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCB1bCBsaS5qZWt5bGxyYnt9XHJcbiAgc2VjdGlvbiNza2lsbHMgI2JveENvbnRlbnQgdWwgbGkuamVreWxscmIgZmlndXJle31cclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCB1bCBsaS5qZWt5bGxyYiBmaWd1cmUgaW1ne31cclxuICAqL1xyXG5cclxuICAgIC8qIEJsb2dcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIHNlY3Rpb24jYmxvZyAuY29udGFpbmVyIGg1e1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jYmxvZyAuY29udGFpbmVyIC5hdmF0YXJ7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNibG9nIC5jb250YWluZXIgLnJvdy5saW5le1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgcmVkO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI2Jsb2cgLmNvbnRhaW5lciAucm93LmxpbmUgc3Bhbi5kYXRhe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzZiNmI2YjtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI2Jsb2cgLmNvbnRhaW5lciAucm93LmxpbmUgc3Bhbi50YWdze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jYmxvZyAuY29udGFpbmVyIC5saW5le1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICM2YjZiNmI7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jYmxvZyBoNSB0aW1le1xyXG4gICAgY29sb3I6ICM2YjZiNmI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIH1cclxuICBzZWN0aW9uI2Jsb2cgaDUgc3Bhbi5yZWFkaW5nLXRpbWV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBjb2xvcjogIzgwODA4MDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jYmxvZyAubGFiZWwtc3VjY2Vzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjc3MjM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qQ29uZmlndXJhw6fDo28gaW1hZ2VucyBlIGxlZ2VuZGFzKi9cclxuICBhcnRpY2xlI2Jsb2cgZmlndXJle1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDBkMGQwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIFxyXG4gICAgLypNZWRpZGFzIFJlc3BvbnNpdm8qL1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgYXJ0aWNsZSNibG9nIGZpZ3VyZSBpbWd7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjQzNTQwO1xyXG4gIFxyXG4gICAgLypNZWRpZGFzIFJlc3BvbnNpdm8qL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyptYXgtaGVpZ2h0OiA0MjBweDsqL1xyXG4gICAgbWluLWhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgYXJ0aWNsZSNibG9nIGZpZ3VyZSBmaWdjYXB0aW9ue1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICMyNDM1NDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbiAgXHJcbiAgYXJ0aWNsZSNibG9nIGZpZ3VyZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGFydGljbGUjYmxvZyBmaWd1cmUgZmlnY2FwdGlvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGFydGljbGUjYmxvZyBmaWd1cmV7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMGQwZDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvKk1lZGlkYXMgUmVzcG9uc2l2byovXHJcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAvKkNvbmZpZ3VyYcOnw6NvIGltYWdlbnMgZSBsZWdlbmRhcyovXHJcbiAgXHJcbiAgLypCTE9HKi9cclxuICBcclxuICAvKiBQT1NUXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciAuYmxvZy1wb3N0IGgze1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIC5yb3cubGluZXtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgLnJvdy5saW5lIHNwYW4uZGF0YXtcclxuICAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIC5yb3cubGluZSBzcGFuLnRhZ3N7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgLmJsb2ctdGl0bGUgaDR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjNmI2YjZiO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciAuYmxvZy10aXRsZSBoNCBzcGFuLmNhdGVnb3J5e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgLmJsb2ctdGl0bGUgaDQgc3Bhbi5kYXRhVGltZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIC5ibG9nLXRpdGxlIGg0IHNwYW4ubGFiZWx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY3NzIzO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgc2VjdGlvbntcclxuICBcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgc2VjdGlvbiBoZWFkZXJ7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvIDEwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciBzZWN0aW9uIGFydGljbGV7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIHNlY3Rpb24gYXJ0aWNsZSBwe1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgc2VjdGlvbiBmb290ZXJ7XHJcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgI2QwZDBkMDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvIDBweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciBzZWN0aW9uIC5hc3NpZ257XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QwZDBkMDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMTBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciBzZWN0aW9uIGZvb3RlciBoNHtcclxuICAgIGZvbnQtc2l6ZTogMS4wZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZDBkMGQwO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIHNlY3Rpb24gZm9vdGVyIHB7XHJcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgI2QwZDBkMDtcclxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgc2VjdGlvbiBmb290ZXIgdWx7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgc2VjdGlvbiBmb290ZXIgdWwgbGl7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XHJcbiAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgc2VjdGlvbiBmb290ZXIgdWwgbGkgYXtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgfVxyXG4gIC8qUE9TVCovXHJcblxyXG5cclxuICAgIC8qIExBQlxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgc2VjdGlvbiNsYWIgLmNvbnRhaW5lciAucGFuZWwgLnBhbmVsLWJvZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jbGFiIC5jb250YWluZXIgLnBhbmVsIHAudGl0dWxvTGFie1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgbWFyZ2luOiAxMHB4IGF1dG8gMTVweCBhdXRvO1xyXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2QwZDBkMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMGQwZDA7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jbGFiIC5jb250YWluZXIgc2VjdGlvbiNsYWJQcm9qZWN0c3tcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDBweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI2xhYiAuY29udGFpbmVyIHNlY3Rpb24jbGFiUHJvamVjdHMgYXJ0aWNsZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2YjZiNmI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jbGFiIC5jb250YWluZXIgc2VjdGlvbiNsYWJQcm9qZWN0cyBoMntcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMTBweCBhdXRvO1xyXG4gICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICM2YjZiNmI7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgIzZiNmI2YjtcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNsYWIgLmNvbnRhaW5lciBzZWN0aW9uI2xhYlByb2plY3RzIGgyIHNwYW57XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNsYWIgLmNvbnRhaW5lciBzZWN0aW9uI2xhYlByb2plY3RzIGg1IHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QwZDBkMDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICBtYXJnaW46IDAuNWVtIDAuM2VtO1xyXG4gIH1cclxuICJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\www\brunogaudino.github.io\bg-app\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map