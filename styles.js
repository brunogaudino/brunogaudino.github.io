(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\n/*\r\n----AZUL----\r\n#8fd6ff - azul base muito claro\r\n#81C1E5 - azul pouco claro\r\n#6BA0BF - azul medio\r\n#476B7F - azul escuro\r\n#243540 - azul muito escuro\r\n#337ab7 - azul theme\r\n----AZUL----\r\n\r\n----CINZA----\r\n#808080 - cinza escuro\r\n#d0d0d0 - cinza claro\r\n#6b6b6b - cinza link\r\n----CINZA----\r\n\r\n----VERDE----\r\n#27A822 - verde claro\r\n#267723 - verde escuro\r\n----VERDE----\r\n*/\r\n/* Main page with stikky-footer\r\n-------------------------------------------------- */\r\n*{\r\n    transition: all 0.5s linear;\r\n}\r\nhtml, body {\r\n    height: 100%;\r\n    background-color: #fff;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    /* The html and body elements cannot have any padding or margin. */\r\n    border-top: 3px solid #8fd6ff;\r\n    /*border-top: 3px solid #27A822;*/\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\nbody{\r\n    display: block;\r\n}\r\n.none{\r\n    display: none !important;\r\n}\r\n.text-align-left{\r\n  text-align: left;\r\n}\r\n.text-align-center{\r\n  text-align: center;\r\n}\r\n/* Wrapper for page content to push down footer */\r\n#wrap {\r\n    padding-bottom: 50px;\r\n    min-height: 100%;\r\n    height: auto;\r\n    /* Negative indent footer by its height */\r\n    margin: 0 auto -65px;\r\n    /* Pad bottom by footer height */\r\n    /*padding: 0 0 60px;*/\r\n}\r\nhr{\r\n    border:  0.01em solid #d0d0d0;\r\n}\r\n.panel{\r\n    box-shadow: none !important;\r\n        -webkit-box-shadow: none !important;\r\n        -moz-box-shadow: none !important;\r\n        -ms-box-shadow: none !important;\r\n        -o-box-shadow: none !important;\r\n}\r\n/* Navbar\r\n  -------------------------------------------------- */\r\n.navbar .navbar-header .navbar-brand img{\r\n    height: 50px;\r\n    width: 50px;\r\n    margin: -10px auto 0px auto;\r\n  }\r\n.navbar-static-top {\r\n    margin-bottom: 10px;\r\n  }\r\n.navbar .navbar-header{\r\n      margin: 10px auto 10px auto;\r\n      border: 0px solid #243540;\r\n      width: 30px;\r\n      height: 30px;\r\n  }\r\n.navbar .navbar-header .navbar-brand{\r\n    padding: 0px 15px 0px 15px;\r\n  }\r\n.navbar .navbar-header .navbar-brand i{\r\n    margin: -5px auto 0px auto !important;\r\n    width: 30px;\r\n    height: 35px;\r\n    padding: 0px;\r\n  }\r\n.navbar-default {\r\n    background-color: #ffffff !important;\r\n    border-color: #ffffff !important;\r\n  }\r\n/*NAVBAR OCULTO\r\n  .navbar-default .container{\r\n      display: block;\r\n  }*/\r\n/*NAVBAR OCULTO\r\n  .navbar-default .navbar-brand {\r\n    color: #6b6b6b;\r\n  }\r\n  .navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {\r\n    color: #6b6b6b;\r\n  }\r\n  .navbar-default .navbar-text {\r\n    color: #6b6b6b;\r\n  }\r\n  .navbar-default .navbar-nav > li > a {\r\n    color: #6b6b6b;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n  }\r\n  .navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\r\n    color: #6b6b6b;\r\n  }\r\n  .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\r\n    color: #6b6b6b;\r\n    background-color: #ffffff;\r\n  }\r\n  .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {\r\n    color: #6b6b6b;\r\n    background-color: #ffffff;\r\n  }\r\n  .navbar-default .navbar-toggle {\r\n    border-color: #ffffff;\r\n  }\r\n  .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\r\n    background-color: #ffffff;\r\n  }\r\n  .navbar-default .navbar-toggle .icon-bar {\r\n    background-color: #6b6b6b;\r\n  }\r\n  .navbar-default .navbar-collapse,\r\n  .navbar-default .navbar-form {\r\n    border-color: #6b6b6b;\r\n  }\r\n  .navbar-default .navbar-link {\r\n    color: #6b6b6b;\r\n  }\r\n  .navbar-default .navbar-link:hover {\r\n    color: #6b6b6b;\r\n  }\r\n  \r\n  span.fa{\r\n    display: none;\r\n  }*/\r\nspan.fa{\r\n    z-index: 1;\r\n    cursor: pointer;\r\n    display: inline;\r\n/*    margin-top: 5px;*/\r\n    margin-left: 20px;\r\n    padding: 3px;\r\n    right: 5px;\r\n    position: fixed;\r\n    background-color: white;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n        -webkit-border-radius: 5px;\r\n        -moz-border-radius: 5px;\r\n        -ms-border-radius: 5px;\r\n        -o-border-radius: 5px;\r\n  }\r\n/*span.fa:before{}\r\n  #wrap{\r\n    position: relative;\r\n  }*/\r\n/* Custom page CSS\r\n  -------------------------------------------------- */\r\n.container {\r\n    width: auto;\r\n    max-width: 960px;\r\n    text-align: center;\r\n  }\r\n.container .text-muted {\r\n    margin: 20px 0;\r\n  }\r\n.container a {\r\n    color: #6BA0BF;\r\n    cursor: pointer;\r\n  }\r\n.container a:hover,\r\n  .container a:focus,\r\n  .container a:active{\r\n    /*color: #267723;*/\r\n    color: #476B7F;\r\n    text-decoration: none;\r\n  }\r\n.img-responsive {\r\n   display: block;\r\n   height: auto;\r\n   max-width: 100%;\r\n  }\r\n.panel-default h4 {\r\n    text-align: left;\r\n    line-height: 24px;\r\n    font-size: 22px;\r\n  }\r\n.panel-default h5 {\r\n    text-align: left;\r\n    line-height: 30px;\r\n    font-size: 18px;\r\n  }\r\n.panel-default h6 {\r\n    font-size: 15px;\r\n  }\r\n.panel-default h4 a, h5 a {\r\n    color: #27A822;\r\n  }\r\n.panel-default h4 a:hover, h5 a:hover {\r\n    color: #267723;\r\n  }\r\n.panel{\r\n    border-style: none;\r\n  }\r\n.panel-body {\r\n    padding-top: -10px;\r\n    text-align: left;\r\n  }\r\n.blog-post{\r\n    padding-top: 30px;\r\n  }\r\n.blog-title{\r\n    padding-top: 2px;\r\n  }\r\n.related-posts h4 {\r\n    text-align: center;\r\n  }\r\n.page-not-found {\r\n    padding-top: 20%;\r\n  }\r\n.disqus {\r\n    padding-bottom: 15px;\r\n  }\r\n.blogpost{\r\n    text-align: left;\r\n    line-height: 30px;\r\n    font-size: 18px;\r\n  }\r\n/*MENU TAB OPTION*/\r\nsection ul#tabMenuOption{\r\n        text-align: center;\r\n        margin: 15px auto;\r\n        padding: 0px 0px 10px 0px;\r\n        list-style-position: inside;\r\n        /*border-bottom: 1px solid #d0d0d0;*/\r\n      }\r\nsection ul#tabMenuOption li{\r\n        display: inline-block;\r\n        margin: 5px 2px;\r\n        border: 1px solid #6b6b6b;\r\n        padding: 0.25em 0.50em;\r\n        border-radius: 20px;\r\n          -webkit-border-radius: 20px;\r\n          -moz-border-radius: 20px;\r\n          -ms-border-radius: 20px;\r\n          -o-border-radius: 20px;\r\n      }\r\n/*   section ul#tabMenuOption li a#ongame{}\r\n       section ul#tabMenuOption li a#viewit{}\r\n       section ul#tabMenuOption li a#ongame img{}\r\n       section ul#tabMenuOption li a#viewit img{}\r\n      */\r\nsection ul#tabMenuOption li a,\r\n      section ul#tabMenuOption li a:hover{\r\n        line-height: normal;\r\n        text-decoration: none;\r\n      }\r\nsection ul#tabMenuOption li a{\r\n        color: #233540;\r\n      }\r\nsection ul#tabMenuOption li.active{\r\n        background: #6b6b6b;\r\n        /*background: #8fd6ff;*/\r\n      }\r\nsection ul#tabMenuOption li.active a{\r\n        color: white;\r\n      }\r\nsection #boxContent .showHide{\r\n        display: block !important;\r\n      }\r\nsection #boxContent ul.contentMenuOption{\r\n        display: none;\r\n      }\r\n/*section #boxContent section{\r\n        display: none;\r\n        text-align: center;\r\n        padding: 0px;\r\n        border: 1px solid #d0d0d0\r\n      }*/\r\nsection #boxContent ul{\r\n        margin: 0px auto;\r\n        padding: 0px;\r\n      }\r\nsection #boxContent ul li{\r\n        margin: 0px 10px;\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n      }\r\n/*MENU TAB OPTION*/\r\n/*Configuração imagens e legendas*/\r\nsection #boxContent figure{\r\n        background: white;\r\n        border: 0px solid #8fd6ff;\r\n        text-align: center;\r\n        margin: 10px auto;\r\n        padding: 10px;\r\n      /*Medidas Responsivo\r\n        min-width: 240px;*/\r\n        max-width: 320px;\r\n        width: 100%;\r\n        height: auto;\r\n      }\r\nsection #boxContent figure{\r\n        border-radius: 20px;\r\n          -webkit-border-radius: 20px;\r\n          -moz-border-radius: 20px;\r\n          -ms-border-radius: 20px;\r\n          -o-border-radius: 20px;\r\n      }\r\n/*section #boxContent figure{\r\n        background: white;\r\n        border: 1px solid #d0d0d0;\r\n        text-align: center;\r\n        margin: 10px auto;\r\n        padding: 10px;\r\n        max-width: 480px;\r\n        width: 100%;\r\n        min-width: 200px;\r\n        height: auto;\r\n      }*/\r\nsection #boxContent figure img{\r\n        /*border: 1px solid #243540;*/\r\n        border: 1px solid #d0d0d0;\r\n        border-radius: 10px;\r\n          -webkit-border-radius: 10px;\r\n          -moz-border-radius: 10px;\r\n          -ms-border-radius: 10px;\r\n          -o-border-radius: 10px;\r\n        /*Medidas Responsivo*/\r\n        background-size:100%;\r\n        background-repeat: no-repeat;\r\n        max-width: 320px;\r\n        width: 100%;\r\n        /*max-height: 420px;*/\r\n        min-height: auto;\r\n      }\r\nsection #boxContent figure figcaption{\r\n        padding: 10px;\r\n        margin: 10px auto;\r\n        font-style: italic;\r\n        background: #f0f0f0;\r\n        border: 0px solid #243540;\r\n        color: black;\r\n      }\r\nsection #boxContent figure figcaption{\r\n        border-radius: 10px;\r\n          -webkit-border-radius: 10px;\r\n          -moz-border-radius: 10px;\r\n          -ms-border-radius: 10px;\r\n          -o-border-radius: 10px;\r\n      }\r\n/*Configuração imagens e legendas*/\r\n/* Global\r\n-------------------------------------------------- */\r\n.featured{\r\n    font-weight: bold;\r\n    color: #333;\r\n}\r\n.loader{\r\n  display: table;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  opacity: 1;\r\n  position: fixed;\r\n  top: 0px;\r\n}\r\n.loader .loaderContent{\r\n  /*background-size: 54px 55px;*/\r\n  background-image: url(\"/assets/img/global/intersection-black.gif\");\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  overflow: hidden;\r\n  text-align: center;\r\n  background-color: #dcdcdc;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 1;\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n.container #navbar .navbar-right{\r\n  margin: 0px;\r\n}\r\n.container #navbar .navbar.nav > li > a{\r\n  padding: 10px 15px;\r\n}\r\n/* Depositions\r\n  -------------------------------------------------- */\r\n#recommendation #navbar{\r\n    margin: 0px auto 0px auto;\r\n  }\r\n#recommendation #navbar .navbar-right{\r\n    margin-right: 0px;\r\n    padding: 0px 10px 0px 0px;\r\n  }\r\n#recommendation #navbar .navbar-nav{\r\n    margin-right: -10px;\r\n  }\r\nsection#depositions{\r\n    border: 0px solid #8fd6ff;\r\n  }\r\nsection#depositions .flex-caption {\r\n    /* width: 96%; */\r\n    padding: 2%;\r\n    left: 0;\r\n    bottom: 0;\r\n    background: rgba(0,0,0,.5);\r\n    color: #fff;\r\n    text-shadow: 0 -1px 0 rgba(0,0,0,.3);\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n  }\r\nsection#depositions li.css a {\r\n    border-radius: 0;\r\n  }\r\n/*\r\n  section#depositions .flexslider ul.slides li\r\n  p.depositions\r\n  p.flex-caption\r\n  */\r\nsection#depositions .flexslider ul.slides li p.depositions{\r\n    border: 0px solid #243540;\r\n    margin: 0px 15px 15px 15px;\r\n    font-style: italic;\r\n    line-height: normal;\r\n    font-size: 1.5em;\r\n    font-weight: normal;\r\n  }\r\nsection#depositions .flexslider ul.slides li .flex-caption{\r\n    border-top: 1px solid #d0d0d0;\r\n    background: none !important;\r\n    padding: 10px 10px;\r\n    text-align: right;\r\n    color: #000;\r\n    font-size: 1.1em;\r\n  }\r\nsection#depositions .flex-viewport{\r\n    padding-top: 10px;\r\n    border: 1px solid #d0d0d0;\r\n    border-radius: 20px;\r\n  }\r\nsection#depositions .flexslider ol.flex-control-nav{\r\n    border: 0px solid #8fd6ff;\r\n    bottom: -30px !important;\r\n    padding: 10px 0px 0px 0px;\r\n  }\r\nsection#depositions .flexslider figure{\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n  }\r\nsection#depositions .flexslider figure img{\r\n/*    width: 80px;\r\n    height: 80px;*/\r\n    display: inline;\r\n    margin-right: 10px;\r\n    border:  3px solid #8fd6ff;\r\n    border-radius: 10px;\r\n  }\r\n/* Portfolio\r\n  -------------------------------------------------- */\r\n/*old portfolio\r\n  section#portfolio ul#ongameSites figure img{\r\n    border: 1px solid #243540;\r\n    background-size:100%;\r\n    background-repeat: no-repeat;\r\n    max-width: 480px;\r\n    width: 100%;\r\n    max-height: 480px;\r\n    min-height: auto;\r\n  }\r\n  \r\n  section#portfolio #boxContent ul li.subTitulo{\r\n    display: block;\r\n    padding: 5px;\r\n    margin: 5px auto;\r\n  }\r\n  \r\n  section#portfolio #boxContent ul li.subTitulo p{\r\n    font-weight: normal;\r\n    font-size: 1.2em;\r\n    padding: 5px;\r\n    border-top: 1px solid #d0d0d0;\r\n    border-bottom: 1px solid #d0d0d0;\r\n  }\r\n  \r\n  section#portfolio #boxContent ul li.subTitulo h4{\r\n    text-align: left;\r\n    margin: 15px auto;\r\n    font-size: 1.1em;\r\n  }\r\n  old portfolio*/\r\nsection#portfolio #boxContent section {\r\n    display: none;\r\n}\r\nsection#portfolio #boxContent section article{\r\n  border: 1px solid #6b6b6b;\r\n  border-radius: 20px;\r\n    -webkit-border-radius: 20px;\r\n    -moz-border-radius: 20px;\r\n    -ms-border-radius: 20px;\r\n    -o-border-radius: 20px;\r\n}\r\nsection#portfolio #boxContent article header.subTitulo{\r\n  border-top: 0px solid #6b6b6b;\r\n  border-bottom: 0px solid #6b6b6b;\r\n}\r\nsection#portfolio #boxContent header.subTitulo h2{\r\n  color: #000;\r\n  font-weight: bold;\r\n  font-size: 1.5em;\r\n  display: block;\r\n  padding: 5px;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n/*  border-top: 1px solid #6b6b6b;\r\n  border-bottom: 1px solid #6b6b6b;*/\r\n}\r\nsection#portfolio #boxContent header.subTitulo h2 span{\r\n  display: block;\r\n  font-weight: bold;\r\n  font-size: 0.7em;\r\n  padding: 5px;\r\n  margin: 0.5em auto 0px auto;\r\n  max-width: 350px;\r\n  background: #fff;\r\n  border: 1px solid #6b6b6b;\r\n  border-radius: 10px;\r\n    -webkit-border-radius: 10px;\r\n    -moz-border-radius: 10px;\r\n    -ms-border-radius: 10px;\r\n    -o-border-radius: 10px;\r\n}\r\nsection#portfolio #boxContent header.subTitulo h4{\r\n  color: #000;\r\n  font-size: 1.0em;\r\n  display: block;\r\n  padding: 10px 20px;\r\n  margin: 0 auto;\r\n}\r\nsection#portfolio article{\r\n  text-align: center;\r\n}\r\nsection#portfolio #boxContent .extra{\r\n  display: inline-block;\r\n  max-width: 320px;\r\n  vertical-align: top;\r\n}\r\n/* Skills\r\n  -------------------------------------------------- */\r\nsection#skills #boxContent figure{\r\n    width: 150px;\r\n  }\r\nsection#skills #boxContent .superior figure{\r\n    width: auto;\r\n    min-width: 100px;\r\n  }\r\nsection#skills #boxContent .superior figure img{\r\n    border: 0px solid #243540;\r\n    background-size: 100%;\r\n    background-repeat: no-repeat;\r\n    width: 100%;\r\n  /*  max-width: 280px;\r\n    max-height: 150px;*/\r\n    min-height: auto;\r\n  }\r\nsection#skills #boxContent .extra{\r\n    display: inline-block;\r\n    max-width: 320px;\r\n    vertical-align: top;\r\n  }\r\nsection#skills #boxContent .extra figure img{\r\n    border: 0px solid #243540;\r\n    /*Medidas Responsivo*/\r\n    background-size:100%;\r\n    background-repeat: no-repeat;\r\n    max-width: 70px;\r\n    width: 100%;\r\n    max-height: 70px;\r\n    min-height: auto;\r\n  }\r\nsection#skills #boxContent section{\r\n    display: none;\r\n  }\r\nsection#skills #boxContent section article{\r\n    text-align: center;\r\n    padding: 0px;\r\n    margin: 20px auto;\r\n    border: 1px solid #6b6b6b;\r\n    border-radius: 20px;\r\n      -webkit-border-radius: 20px;\r\n      -moz-border-radius: 20px;\r\n      -ms-border-radius: 20px;\r\n      -o-border-radius: 20px;\r\n  }\r\nsection#skills #boxContent .subTitulo{\r\n    display: block;\r\n    padding: 0px;\r\n    margin: 0px auto;\r\n  }\r\nsection#skills #boxContent .subTitulo h2{\r\n    color: #000;\r\n    font-weight: bold;\r\n    font-size: 1.5em;\r\n    display: block;\r\n    padding: 5px;\r\n    margin: 0 auto;\r\n    /*border-bottom: 1px solid #6b6b6b;*/\r\n  }\r\nsection#skills #boxContent .subTitulo h2 span{\r\n    display: block;\r\n    font-weight: bold;\r\n    font-size: 0.7em;\r\n    padding: 5px;\r\n    margin: 0.5em auto 0px auto;\r\n    max-width: 350px;\r\n    background: #fff;\r\n    border: 1px solid #6b6b6b;\r\n    border-radius: 10px;\r\n      -webkit-border-radius: 10px;\r\n      -moz-border-radius: 10px;\r\n      -ms-border-radius: 10px;\r\n      -o-border-radius: 10px;\r\n  }\r\nsection#skills #boxContent .subTitulo h2 span a{\r\n    color: #233540;\r\n  }\r\nsection#skills #boxContent .subTitulo h2 span:hover{\r\n    cursor: pointer;\r\n    background: #6b6b6b;\r\n  }\r\nsection#skills #boxContent .subTitulo h2:hover span:hover a,\r\n  section#skills #boxContent .subTitulo h2 span:hover a:hover{\r\n    color: #fff;\r\n  }\r\nsection#skills #boxContent section article footer.footer-information{\r\n    padding: 0px 15px;\r\n  }\r\nsection#skills #boxContent section article footer.footer-information p{\r\n    text-align: center;\r\n  }\r\n/*\r\n  section#skills #boxContent .subTitulo h4{text-align: left;margin: 15px auto;font-size: 1.1em;}\r\n  section#skills #boxContent ul li.jekyllrb{}\r\n  section#skills #boxContent ul li.jekyllrb figure{}\r\n  section#skills #boxContent ul li.jekyllrb figure img{}\r\n  */\r\n/* Blog\r\n  -------------------------------------------------- */\r\nsection#blog .container h5{\r\n    font-size: 1.5em;\r\n    text-align: center;\r\n    margin: 5px auto;\r\n  }\r\nsection#blog .container .avatar{\r\n    margin: 20px auto;\r\n    text-align: center;\r\n  }\r\nsection#blog .container .row.line{\r\n    border: 0px solid red;\r\n    margin: 5px auto;\r\n    padding-bottom: 10px;\r\n  }\r\nsection#blog .container .row.line span.data{\r\n    text-align: center;\r\n    display: block;\r\n    color: #6b6b6b;\r\n    font-size: 0.9em;\r\n    margin: 5px auto;\r\n  }\r\nsection#blog .container .row.line span.tags{\r\n    text-align: center;\r\n    display: block;\r\n  }\r\nsection#blog .container .line{\r\n    border-bottom: 0px solid #6b6b6b;\r\n  }\r\nsection#blog h5 time{\r\n    color: #6b6b6b;\r\n    padding: 0px;\r\n    margin: 0px auto;\r\n  }\r\nsection#blog h5 span.reading-time{\r\n    display: block;\r\n    font-size: 0.8em;\r\n    color: #808080;\r\n    padding: 0px;\r\n    margin: 0px auto;\r\n  }\r\nsection#blog .label-success{\r\n    background-color: #267723;\r\n  }\r\n/*Configuração imagens e legendas*/\r\narticle#blog figure{\r\n    background: white;\r\n    border: 1px solid #d0d0d0;\r\n    text-align: center;\r\n    margin: 10px auto;\r\n    padding: 10px;\r\n  \r\n    /*Medidas Responsivo*/\r\n    max-width: 320px;\r\n    width: 100%;\r\n    min-width: 250px;\r\n    height: auto;\r\n  }\r\narticle#blog figure img{\r\n    border: 1px solid #243540;\r\n  \r\n    /*Medidas Responsivo*/\r\n    background-size:100%;\r\n    background-repeat: no-repeat;\r\n    max-width: 320px;\r\n    width: 100%;\r\n    /*max-height: 420px;*/\r\n    min-height: auto;\r\n  }\r\narticle#blog figure figcaption{\r\n    padding: 10px;\r\n    margin: 10px auto;\r\n    font-style: italic;\r\n    background: #f0f0f0;\r\n    border: 0px solid #243540;\r\n    color: black;\r\n    font-size: 0.8em;\r\n    line-height: normal;\r\n  }\r\narticle#blog figure{\r\n    border-radius: 20px;\r\n  }\r\narticle#blog figure figcaption{\r\n    border-radius: 10px;\r\n  }\r\narticle#blog figure{\r\n    background: white;\r\n    border: 1px solid #d0d0d0;\r\n    text-align: center;\r\n    margin: 10px auto;\r\n    padding: 10px;\r\n    /*Medidas Responsivo*/\r\n    max-width: 480px;\r\n    width: 100%;\r\n    min-width: 200px;\r\n    height: auto;\r\n  }\r\n/*Configuração imagens e legendas*/\r\n/*BLOG*/\r\n/* POST\r\n  -------------------------------------------------- */\r\nsection#post .container .blog-post h3{\r\n    font-size: 1.5em;\r\n    text-align: center;\r\n    margin: 5px auto;\r\n  }\r\nsection#post .container .row.line{\r\n    margin: 5px auto;\r\n    padding-bottom: 10px;\r\n  }\r\n/*  section#post .container .row.line span.data{}*/\r\nsection#post .container .row.line span.tags{\r\n    text-align: center;\r\n    display: block;\r\n  }\r\nsection#post .container .blog-title h4{\r\n    text-align: center;\r\n    display: block;\r\n    color: #6b6b6b;\r\n    font-size: 0.9em;\r\n    margin: 5px auto;\r\n/*    vertical-align: center;*/\r\n  }\r\nsection#post .container .blog-title h4 span.category{\r\n    display: block;\r\n    margin: 10px auto;\r\n  }\r\nsection#post .container .blog-title h4 span.dataTime{\r\n    display: block;\r\n    margin: 10px auto;\r\n  }\r\nsection#post .container .blog-title h4 span.label{\r\n    background-color: #267723;\r\n    font-size: 0.9em;\r\n  }\r\n/*  section#post .container section{}*/\r\nsection#post .container section header{\r\n    margin: 0px auto 10px auto;\r\n    padding: 5px 10px;\r\n    font-size: 0.9em;\r\n    font-weight: bold;\r\n    text-align: center;\r\n  }\r\n/*  section#post .container section article{}*/\r\nsection#post .container section article p{\r\n    font-size: 0.9em;\r\n    line-height: normal;\r\n    margin: 10px auto;\r\n  }\r\nsection#post .container section footer{\r\n    border-top: 0px solid #d0d0d0;\r\n    margin: 10px auto 0px auto;\r\n  }\r\nsection#post .container section .assign{\r\n    border-bottom: 1px solid #d0d0d0;\r\n    margin: 0px auto 10px auto;\r\n    padding: 0px 10px;\r\n    font-size: 0.8em;\r\n  }\r\nsection#post .container section footer h4{\r\n    font-size: 1.0em;\r\n    font-weight: bold;\r\n    border-top: 0px solid #d0d0d0;\r\n    padding: 5px 10px;\r\n  }\r\nsection#post .container section footer p{\r\n    border-top: 0px solid #d0d0d0;\r\n    padding: 5px 20px;\r\n    font-size: 0.9em;\r\n  }\r\nsection#post .container section footer ul{\r\n    display: block;\r\n  }\r\nsection#post .container section footer ul li{\r\n    list-style-type: disc;\r\n    list-style-position: inside;\r\n    line-height: normal;\r\n    margin: 0px auto;\r\n  }\r\nsection#post .container section footer ul li a{\r\n    font-size: 0.8em;\r\n  }\r\n/*POST*/\r\n/* LAB\r\n  -------------------------------------------------- */\r\nsection#lab .container .panel .panel-body{\r\n    text-align: center;\r\n  }\r\nsection#lab .container .panel p.tituloLab{\r\n      font-weight: normal;\r\n      font-size: 1.2em;\r\n      text-align: center;\r\n      padding: 5px;\r\n      margin: 10px auto 15px auto;\r\n      border-top: 1px solid #d0d0d0;\r\n      border-bottom: 1px solid #d0d0d0;\r\n  }\r\nsection#lab .container section#labProjects{\r\n    margin: 20px auto 0px auto;\r\n  }\r\nsection#lab .container section#labProjects article{\r\n    border: 0px solid #6b6b6b;\r\n    border-radius: 20px;\r\n      -webkit-border-radius: 20px;\r\n      -moz-border-radius: 20px;\r\n      -ms-border-radius: 20px;\r\n      -o-border-radius: 20px;\r\n  }\r\nsection#lab .container section#labProjects h2{\r\n    color: #000;\r\n    font-weight: 700;\r\n    font-size: 1.5em;\r\n    display: block;\r\n    padding: 5px;\r\n    margin: 0px auto 10px auto;\r\n    border-top: 0px solid #6b6b6b;\r\n    border-bottom: 0px solid #6b6b6b;\r\n  }\r\nsection#lab .container section#labProjects h2 span{\r\n    font-size: 0.7em;\r\n    font-weight: normal;\r\n    display: block;\r\n    margin: 5px auto;\r\n  }\r\nsection#lab .container section#labProjects h5 {\r\n      text-align: left;\r\n      line-height: 30px;\r\n      font-size: 18px;\r\n      border: 1px solid #d0d0d0;\r\n      padding: 10px;\r\n      border-radius: 20px;\r\n        -webkit-border-radius: 20px;\r\n        -moz-border-radius: 20px;\r\n        -ms-border-radius: 20px;\r\n        -o-border-radius: 20px;\r\n      width: 250px;\r\n      display: inline-block;\r\n      vertical-align: top;\r\n      margin: 0.5em 0.3em;\r\n  }\r\n/* RESUME\r\n  -------------------------------------------------- */\r\nsection#resume .container section#resume-info{\r\n  text-align: left;\r\n  margin: 0px auto 0px auto;\r\n  padding: 0px 10px 10px 10px;\r\n  border: 0px solid #6b6b6b;\r\n  border-radius: 20px;\r\n    -webkit-border-radius: 20px;\r\n    -moz-border-radius: 20px;\r\n    -ms-border-radius: 20px;\r\n    -o-border-radius: 20px;\r\n}\r\nsection#resume .container section#resume-info h2{\r\n  margin: 40px auto 20px auto;\r\n}\r\nsection#resume .container section#resume-info article{\r\n  border: 1px solid #6b6b6b;\r\n  border-radius: 20px;\r\n    -webkit-border-radius: 20px;\r\n    -moz-border-radius: 20px;\r\n    -ms-border-radius: 20px;\r\n    -o-border-radius: 20px;\r\n  padding: 0px 15px;\r\n  margin-bottom: 20px;\r\n  text-align: left;\r\n  padding-bottom: 15px;\r\n}\r\nsection#resume .container section#resume-info article header h2{\r\n  display: inline-block;\r\n  margin-right: 10px;\r\n}\r\nsection#resume .container section#resume-info article header span{\r\n  display: inline-block;\r\n  margin: 0px auto 10px auto;\r\n}\r\nsection#resume .container section#resume-info article header span address{\r\n  display: inline;\r\n}\r\n/* RESUME\r\n  -------------------------------------------------- */\r\nsection#aboutme .container section#aboutme-info{\r\n  margin: 20px auto 0px auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FvQkM7QUFFRDtvREFDb0Q7QUFFcEQ7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsMENBQTBDO0lBQzFDLGtFQUFrRTtJQUNsRSw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFHQSxpREFBaUQ7QUFDakQ7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsb0JBQW9CO0lBQ3BCLGdDQUFnQztJQUNoQyxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksMkJBQTJCO1FBQ3ZCLG1DQUFtQztRQUNuQyxnQ0FBZ0M7UUFDaEMsK0JBQStCO1FBQy9CLDhCQUE4QjtBQUN0QztBQUVFO3NEQUNvRDtBQUNwRDtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0VBQzdCO0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFFQTtNQUNJLDJCQUEyQjtNQUMzQix5QkFBeUI7TUFDekIsV0FBVztNQUNYLFlBQVk7RUFDaEI7QUFFQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUVBO0lBQ0UscUNBQXFDO0lBQ3JDLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtFQUNkO0FBRUE7SUFDRSxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0VBQ2xDO0FBRUE7OztJQUdFO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWdERTtBQUVGO0lBQ0UsVUFBVTtJQUNWLGVBQWU7SUFDZixlQUFlO0FBQ25CLHVCQUF1QjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixrQkFBa0I7UUFDZCwwQkFBMEI7UUFDMUIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixxQkFBcUI7RUFDM0I7QUFFQTs7O0lBR0U7QUFFRjtzREFDb0Q7QUFFcEQ7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNBO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7QUFDQTs7O0lBR0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkI7QUFDQTtHQUNDLGNBQWM7R0FDZCxZQUFZO0dBQ1osZUFBZTtFQUNoQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7QUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtBQUVFLGtCQUFrQjtBQUNsQjtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCLDJCQUEyQjtRQUMzQixvQ0FBb0M7TUFDdEM7QUFFQTtRQUNFLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YseUJBQXlCO1FBQ3pCLHNCQUFzQjtRQUN0QixtQkFBbUI7VUFDakIsMkJBQTJCO1VBQzNCLHdCQUF3QjtVQUN4Qix1QkFBdUI7VUFDdkIsc0JBQXNCO01BQzFCO0FBRUY7Ozs7T0FJRztBQUNEOztRQUVFLG1CQUFtQjtRQUNuQixxQkFBcUI7TUFDdkI7QUFFQTtRQUNFLGNBQWM7TUFDaEI7QUFFQTtRQUNFLG1CQUFtQjtRQUNuQix1QkFBdUI7TUFDekI7QUFFQTtRQUNFLFlBQVk7TUFDZDtBQUVBO1FBQ0UseUJBQXlCO01BQzNCO0FBRUE7UUFDRSxhQUFhO01BQ2Y7QUFFQTs7Ozs7UUFLRTtBQUVGO1FBQ0UsZ0JBQWdCO1FBQ2hCLFlBQVk7TUFDZDtBQUVBO1FBQ0UsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixzQkFBc0I7TUFDeEI7QUFDQSxrQkFBa0I7QUFFbEIsa0NBQWtDO0FBQ2xDO1FBQ0UsaUJBQWlCO1FBQ2pCLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGFBQWE7TUFDZjswQkFDb0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxZQUFZO01BQ2Q7QUFFQTtRQUNFLG1CQUFtQjtVQUNqQiwyQkFBMkI7VUFDM0Isd0JBQXdCO1VBQ3hCLHVCQUF1QjtVQUN2QixzQkFBc0I7TUFDMUI7QUFFQTs7Ozs7Ozs7OztRQVVFO0FBRUY7UUFDRSw2QkFBNkI7UUFDN0IseUJBQXlCO1FBQ3pCLG1CQUFtQjtVQUNqQiwyQkFBMkI7VUFDM0Isd0JBQXdCO1VBQ3hCLHVCQUF1QjtVQUN2QixzQkFBc0I7UUFDeEIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQiw0QkFBNEI7UUFDNUIsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxxQkFBcUI7UUFDckIsZ0JBQWdCO01BQ2xCO0FBRUE7UUFDRSxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLFlBQVk7TUFDZDtBQUdBO1FBQ0UsbUJBQW1CO1VBQ2pCLDJCQUEyQjtVQUMzQix3QkFBd0I7VUFDeEIsdUJBQXVCO1VBQ3ZCLHNCQUFzQjtNQUMxQjtBQUNBLGtDQUFrQztBQUV4QztvREFDb0Q7QUFDcEQ7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGVBQWU7RUFDZixRQUFRO0FBQ1Y7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixrRUFBa0U7RUFDbEUsNEJBQTRCO0VBQzVCLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVFO3NEQUNvRDtBQUNwRDtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsT0FBTztJQUNQLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFFQTs7OztHQUlDO0FBQ0Q7SUFDRSx5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUVBO0FBQ0Y7a0JBQ2tCO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0VBQ3JCO0FBRUU7c0RBQ2tEO0FBQ3BEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBOEJjO0FBRWQ7SUFDRSxhQUFhO0FBQ2pCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0lBQ2pCLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjtBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtvQ0FDb0M7QUFDcEM7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0lBQ2pCLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFFRTtzREFDb0Q7QUFFcEQ7SUFDRSxZQUFZO0VBQ2Q7QUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLFdBQVc7RUFDYjt1QkFDcUI7SUFDbkIsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsYUFBYTtFQUNmO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsbUJBQW1CO01BQ2pCLDJCQUEyQjtNQUMzQix3QkFBd0I7TUFDeEIsdUJBQXVCO01BQ3ZCLHNCQUFzQjtFQUMxQjtBQUVBO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0lBQ1osY0FBYztJQUNkLG9DQUFvQztFQUN0QztBQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQkFBbUI7TUFDakIsMkJBQTJCO01BQzNCLHdCQUF3QjtNQUN4Qix1QkFBdUI7TUFDdkIsc0JBQXNCO0VBQzFCO0FBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0FBRUE7O0lBRUUsV0FBVztFQUNiO0FBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNBOzs7OztHQUtDO0FBRUM7c0RBQ2tEO0FBQ3BEO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjtBQUVBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0FBRUE7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBRUEsa0NBQWtDO0FBQ2xDO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7O0lBRWIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtBQUVBO0lBQ0UseUJBQXlCOztJQUV6QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7QUFDQSxrQ0FBa0M7QUFFbEMsT0FBTztBQUVQO3NEQUNvRDtBQUNwRDtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCO0FBRUYsa0RBQWtEO0FBRWhEO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIsOEJBQThCO0VBQzVCO0FBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsZ0JBQWdCO0VBQ2xCO0FBRUYsc0NBQXNDO0FBRXBDO0lBQ0UsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtBQUVGLDhDQUE4QztBQUU1QztJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSw2QkFBNkI7SUFDN0IsMEJBQTBCO0VBQzVCO0FBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLGlCQUFpQjtFQUNuQjtBQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0EsT0FBTztBQUdMO3NEQUNrRDtBQUNwRDtJQUNFLGtCQUFrQjtFQUNwQjtBQUVBO01BQ0ksbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLDJCQUEyQjtNQUMzQiw2QkFBNkI7TUFDN0IsZ0NBQWdDO0VBQ3BDO0FBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixtQkFBbUI7TUFDakIsMkJBQTJCO01BQzNCLHdCQUF3QjtNQUN4Qix1QkFBdUI7TUFDdkIsc0JBQXNCO0VBQzFCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0VBQ2xDO0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7QUFFQTtNQUNJLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLHlCQUF5QjtNQUN6QixhQUFhO01BQ2IsbUJBQW1CO1FBQ2pCLDJCQUEyQjtRQUMzQix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtNQUN4QixZQUFZO01BQ1oscUJBQXFCO01BQ3JCLG1CQUFtQjtNQUNuQixtQkFBbUI7RUFDdkI7QUFDRztzREFDaUQ7QUFDdEQ7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsbUJBQW1CO0lBQ2pCLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjtBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0lBQ2pCLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtFQUN4QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFHQTtzREFDc0Q7QUFDdEQ7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbi8qXHJcbi0tLS1BWlVMLS0tLVxyXG4jOGZkNmZmIC0gYXp1bCBiYXNlIG11aXRvIGNsYXJvXHJcbiM4MUMxRTUgLSBhenVsIHBvdWNvIGNsYXJvXHJcbiM2QkEwQkYgLSBhenVsIG1lZGlvXHJcbiM0NzZCN0YgLSBhenVsIGVzY3Vyb1xyXG4jMjQzNTQwIC0gYXp1bCBtdWl0byBlc2N1cm9cclxuIzMzN2FiNyAtIGF6dWwgdGhlbWVcclxuLS0tLUFaVUwtLS0tXHJcblxyXG4tLS0tQ0lOWkEtLS0tXHJcbiM4MDgwODAgLSBjaW56YSBlc2N1cm9cclxuI2QwZDBkMCAtIGNpbnphIGNsYXJvXHJcbiM2YjZiNmIgLSBjaW56YSBsaW5rXHJcbi0tLS1DSU5aQS0tLS1cclxuXHJcbi0tLS1WRVJERS0tLS1cclxuIzI3QTgyMiAtIHZlcmRlIGNsYXJvXHJcbiMyNjc3MjMgLSB2ZXJkZSBlc2N1cm9cclxuLS0tLVZFUkRFLS0tLVxyXG4qL1xyXG5cclxuLyogTWFpbiBwYWdlIHdpdGggc3Rpa2t5LWZvb3RlclxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuKntcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgLyogVGhlIGh0bWwgYW5kIGJvZHkgZWxlbWVudHMgY2Fubm90IGhhdmUgYW55IHBhZGRpbmcgb3IgbWFyZ2luLiAqL1xyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICM4ZmQ2ZmY7XHJcbiAgICAvKmJvcmRlci10b3A6IDNweCBzb2xpZCAjMjdBODIyOyovXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuYm9keXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiAgXHJcbi5ub25le1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1hbGlnbi1sZWZ0e1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50ZXh0LWFsaWduLWNlbnRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKiBXcmFwcGVyIGZvciBwYWdlIGNvbnRlbnQgdG8gcHVzaCBkb3duIGZvb3RlciAqL1xyXG4jd3JhcCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvKiBOZWdhdGl2ZSBpbmRlbnQgZm9vdGVyIGJ5IGl0cyBoZWlnaHQgKi9cclxuICAgIG1hcmdpbjogMCBhdXRvIC02NXB4O1xyXG4gICAgLyogUGFkIGJvdHRvbSBieSBmb290ZXIgaGVpZ2h0ICovXHJcbiAgICAvKnBhZGRpbmc6IDAgMCA2MHB4OyovXHJcbn1cclxuXHJcbmhye1xyXG4gICAgYm9yZGVyOiAgMC4wMWVtIHNvbGlkICNkMGQwZDA7XHJcbn1cclxuXHJcbi5wYW5lbHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAtbXMtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC1vLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuICAvKiBOYXZiYXJcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZCBpbWd7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIG1hcmdpbjogLTEwcHggYXV0byAwcHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci1zdGF0aWMtdG9wIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZiYXIgLm5hdmJhci1oZWFkZXJ7XHJcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvIDEwcHggYXV0bztcclxuICAgICAgYm9yZGVyOiAwcHggc29saWQgIzI0MzU0MDtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWJyYW5ke1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHggMHB4IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZCBpe1xyXG4gICAgbWFyZ2luOiAtNXB4IGF1dG8gMHB4IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuICBcclxuICAubmF2YmFyLWRlZmF1bHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qTkFWQkFSIE9DVUxUT1xyXG4gIC5uYXZiYXItZGVmYXVsdCAuY29udGFpbmVye1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICB9Ki9cclxuICAvKk5BVkJBUiBPQ1VMVE9cclxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1icmFuZCB7XHJcbiAgICBjb2xvcjogIzZiNmI2YjtcclxuICB9XHJcbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQ6aG92ZXIsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWJyYW5kOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjNmI2YjZiO1xyXG4gIH1cclxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10ZXh0IHtcclxuICAgIGNvbG9yOiAjNmI2YjZiO1xyXG4gIH1cclxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiBsaSA+IGEge1xyXG4gICAgY29sb3I6ICM2YjZiNmI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiBsaSA+IGE6aG92ZXIsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzZiNmI2YjtcclxuICB9XHJcbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGEsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhOmhvdmVyLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzZiNmI2YjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5vcGVuID4gYSwgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLm9wZW4gPiBhOmhvdmVyLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAub3BlbiA+IGE6Zm9jdXMge1xyXG4gICAgY29sb3I6ICM2YjZiNmI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGU6aG92ZXIsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUgLmljb24tYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjZiNmI7XHJcbiAgfVxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWNvbGxhcHNlLFxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWZvcm0ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNmI2YjZiO1xyXG4gIH1cclxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1saW5rIHtcclxuICAgIGNvbG9yOiAjNmI2YjZiO1xyXG4gIH1cclxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNmI2YjZiO1xyXG4gIH1cclxuICBcclxuICBzcGFuLmZhe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9Ki9cclxuXHJcbiAgc3Bhbi5mYXtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbi8qICAgIG1hcmdpbi10b3A6IDVweDsqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLypzcGFuLmZhOmJlZm9yZXt9XHJcbiAgI3dyYXB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfSovXHJcblxyXG4gIC8qIEN1c3RvbSBwYWdlIENTU1xyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5jb250YWluZXIgLnRleHQtbXV0ZWQge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgfVxyXG4gIC5jb250YWluZXIgYSB7XHJcbiAgICBjb2xvcjogIzZCQTBCRjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmNvbnRhaW5lciBhOmhvdmVyLFxyXG4gIC5jb250YWluZXIgYTpmb2N1cyxcclxuICAuY29udGFpbmVyIGE6YWN0aXZle1xyXG4gICAgLypjb2xvcjogIzI2NzcyMzsqL1xyXG4gICAgY29sb3I6ICM0NzZCN0Y7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIC5pbWctcmVzcG9uc2l2ZSB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBoZWlnaHQ6IGF1dG87XHJcbiAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnBhbmVsLWRlZmF1bHQgaDQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuICAucGFuZWwtZGVmYXVsdCBoNSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5wYW5lbC1kZWZhdWx0IGg2IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLnBhbmVsLWRlZmF1bHQgaDQgYSwgaDUgYSB7XHJcbiAgICBjb2xvcjogIzI3QTgyMjtcclxuICB9XHJcbiAgLnBhbmVsLWRlZmF1bHQgaDQgYTpob3ZlciwgaDUgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzI2NzcyMztcclxuICB9XHJcbiAgLnBhbmVse1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gIH1cclxuICAucGFuZWwtYm9keSB7XHJcbiAgICBwYWRkaW5nLXRvcDogLTEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLmJsb2ctcG9zdHtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIH1cclxuICAuYmxvZy10aXRsZXtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgfVxyXG4gIC5yZWxhdGVkLXBvc3RzIGg0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnBhZ2Utbm90LWZvdW5kIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbiAgfVxyXG4gIC5kaXNxdXMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ibG9ncG9zdHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gICAgLypNRU5VIFRBQiBPUFRJT04qL1xyXG4gICAgc2VjdGlvbiB1bCN0YWJNZW51T3B0aW9ue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMHB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcclxuICAgICAgICAvKmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDBkMGQwOyovXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHNlY3Rpb24gdWwjdGFiTWVudU9wdGlvbiBsaXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMnB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2YjZiNmI7XHJcbiAgICAgICAgcGFkZGluZzogMC4yNWVtIDAuNTBlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAtby1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgLyogICBzZWN0aW9uIHVsI3RhYk1lbnVPcHRpb24gbGkgYSNvbmdhbWV7fVxyXG4gICAgICAgc2VjdGlvbiB1bCN0YWJNZW51T3B0aW9uIGxpIGEjdmlld2l0e31cclxuICAgICAgIHNlY3Rpb24gdWwjdGFiTWVudU9wdGlvbiBsaSBhI29uZ2FtZSBpbWd7fVxyXG4gICAgICAgc2VjdGlvbiB1bCN0YWJNZW51T3B0aW9uIGxpIGEjdmlld2l0IGltZ3t9XHJcbiAgICAgICovXHJcbiAgICAgIHNlY3Rpb24gdWwjdGFiTWVudU9wdGlvbiBsaSBhLFxyXG4gICAgICBzZWN0aW9uIHVsI3RhYk1lbnVPcHRpb24gbGkgYTpob3ZlcntcclxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgc2VjdGlvbiB1bCN0YWJNZW51T3B0aW9uIGxpIGF7XHJcbiAgICAgICAgY29sb3I6ICMyMzM1NDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHNlY3Rpb24gdWwjdGFiTWVudU9wdGlvbiBsaS5hY3RpdmV7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzZiNmI2YjtcclxuICAgICAgICAvKmJhY2tncm91bmQ6ICM4ZmQ2ZmY7Ki9cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgc2VjdGlvbiB1bCN0YWJNZW51T3B0aW9uIGxpLmFjdGl2ZSBhe1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgc2VjdGlvbiAjYm94Q29udGVudCAuc2hvd0hpZGV7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgc2VjdGlvbiAjYm94Q29udGVudCB1bC5jb250ZW50TWVudU9wdGlvbntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKnNlY3Rpb24gI2JveENvbnRlbnQgc2VjdGlvbntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QwZDBkMFxyXG4gICAgICB9Ki9cclxuICAgICAgXHJcbiAgICAgIHNlY3Rpb24gI2JveENvbnRlbnQgdWx7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHNlY3Rpb24gI2JveENvbnRlbnQgdWwgbGl7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgfVxyXG4gICAgICAvKk1FTlUgVEFCIE9QVElPTiovXHJcbiAgICAgIFxyXG4gICAgICAvKkNvbmZpZ3VyYcOnw6NvIGltYWdlbnMgZSBsZWdlbmRhcyovXHJcbiAgICAgIHNlY3Rpb24gI2JveENvbnRlbnQgZmlndXJle1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogMHB4IHNvbGlkICM4ZmQ2ZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIC8qTWVkaWRhcyBSZXNwb25zaXZvXHJcbiAgICAgICAgbWluLXdpZHRoOiAyNDBweDsqL1xyXG4gICAgICAgIG1heC13aWR0aDogMzIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBzZWN0aW9uICNib3hDb250ZW50IGZpZ3VyZXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAtby1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKnNlY3Rpb24gI2JveENvbnRlbnQgZmlndXJle1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMGQwZDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0ODBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgfSovXHJcbiAgICAgIFxyXG4gICAgICBzZWN0aW9uICNib3hDb250ZW50IGZpZ3VyZSBpbWd7XHJcbiAgICAgICAgLypib3JkZXI6IDFweCBzb2xpZCAjMjQzNTQwOyovXHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QwZDBkMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAtby1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIC8qTWVkaWRhcyBSZXNwb25zaXZvKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIG1heC13aWR0aDogMzIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLyptYXgtaGVpZ2h0OiA0MjBweDsqL1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHNlY3Rpb24gI2JveENvbnRlbnQgZmlndXJlIGZpZ2NhcHRpb257XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxuICAgICAgICBib3JkZXI6IDBweCBzb2xpZCAjMjQzNTQwO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIHNlY3Rpb24gI2JveENvbnRlbnQgZmlndXJlIGZpZ2NhcHRpb257XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAvKkNvbmZpZ3VyYcOnw6NvIGltYWdlbnMgZSBsZWdlbmRhcyovXHJcblxyXG4vKiBHbG9iYWxcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmZlYXR1cmVke1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmxvYWRlcntcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDBweDtcclxufVxyXG5cclxuLmxvYWRlciAubG9hZGVyQ29udGVudHtcclxuICAvKmJhY2tncm91bmQtc2l6ZTogNTRweCA1NXB4OyovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvZ2xvYmFsL2ludGVyc2VjdGlvbi1ibGFjay5naWZcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2RjZGM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uY29udGFpbmVyICNuYXZiYXIgLm5hdmJhci1yaWdodHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAjbmF2YmFyIC5uYXZiYXIubmF2ID4gbGkgPiBhe1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxufVxyXG5cclxuICAvKiBEZXBvc2l0aW9uc1xyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgI3JlY29tbWVuZGF0aW9uICNuYXZiYXJ7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAjcmVjb21tZW5kYXRpb24gI25hdmJhciAubmF2YmFyLXJpZ2h0e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMHB4O1xyXG4gIH1cclxuICAjcmVjb21tZW5kYXRpb24gI25hdmJhciAubmF2YmFyLW5hdntcclxuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jZGVwb3NpdGlvbnN7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjOGZkNmZmO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI2RlcG9zaXRpb25zIC5mbGV4LWNhcHRpb24ge1xyXG4gICAgLyogd2lkdGg6IDk2JTsgKi9cclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLDAsMCwuMyk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNkZXBvc2l0aW9ucyBsaS5jc3MgYSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICBcclxuICAvKlxyXG4gIHNlY3Rpb24jZGVwb3NpdGlvbnMgLmZsZXhzbGlkZXIgdWwuc2xpZGVzIGxpXHJcbiAgcC5kZXBvc2l0aW9uc1xyXG4gIHAuZmxleC1jYXB0aW9uXHJcbiAgKi9cclxuICBzZWN0aW9uI2RlcG9zaXRpb25zIC5mbGV4c2xpZGVyIHVsLnNsaWRlcyBsaSBwLmRlcG9zaXRpb25ze1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgIzI0MzU0MDtcclxuICAgIG1hcmdpbjogMHB4IDE1cHggMTVweCAxNXB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI2RlcG9zaXRpb25zIC5mbGV4c2xpZGVyIHVsLnNsaWRlcyBsaSAuZmxleC1jYXB0aW9ue1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkMGQwZDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNkZXBvc2l0aW9ucyAuZmxleC12aWV3cG9ydHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QwZDBkMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jZGVwb3NpdGlvbnMgLmZsZXhzbGlkZXIgb2wuZmxleC1jb250cm9sLW5hdntcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICM4ZmQ2ZmY7XHJcbiAgICBib3R0b206IC0zMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMHB4O1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI2RlcG9zaXRpb25zIC5mbGV4c2xpZGVyIGZpZ3VyZXtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI2RlcG9zaXRpb25zIC5mbGV4c2xpZGVyIGZpZ3VyZSBpbWd7XHJcbi8qICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4OyovXHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXI6ICAzcHggc29saWQgIzhmZDZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAgIC8qIFBvcnRmb2xpb1xyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgLypvbGQgcG9ydGZvbGlvXHJcbiAgc2VjdGlvbiNwb3J0Zm9saW8gdWwjb25nYW1lU2l0ZXMgZmlndXJlIGltZ3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyNDM1NDA7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA0ODBweDtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jcG9ydGZvbGlvICNib3hDb250ZW50IHVsIGxpLnN1YlRpdHVsb3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNwb3J0Zm9saW8gI2JveENvbnRlbnQgdWwgbGkuc3ViVGl0dWxvIHB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDBkMGQwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMGQwZDA7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jcG9ydGZvbGlvICNib3hDb250ZW50IHVsIGxpLnN1YlRpdHVsbyBoNHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgfVxyXG4gIG9sZCBwb3J0Zm9saW8qL1xyXG4gIFxyXG4gIHNlY3Rpb24jcG9ydGZvbGlvICNib3hDb250ZW50IHNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuc2VjdGlvbiNwb3J0Zm9saW8gI2JveENvbnRlbnQgc2VjdGlvbiBhcnRpY2xle1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2YjZiNmI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC1tcy1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgLW8tYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuc2VjdGlvbiNwb3J0Zm9saW8gI2JveENvbnRlbnQgYXJ0aWNsZSBoZWFkZXIuc3ViVGl0dWxve1xyXG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCAjNmI2YjZiO1xyXG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjNmI2YjZiO1xyXG59XHJcblxyXG5zZWN0aW9uI3BvcnRmb2xpbyAjYm94Q29udGVudCBoZWFkZXIuc3ViVGl0dWxvIGgye1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuLyogIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNmI2YjZiO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNmI2YjZiOyovXHJcbn1cclxuXHJcbnNlY3Rpb24jcG9ydGZvbGlvICNib3hDb250ZW50IGhlYWRlci5zdWJUaXR1bG8gaDIgc3BhbntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDAuN2VtO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDAuNWVtIGF1dG8gMHB4IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2YjZiNmI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC1tcy1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLW8tYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuc2VjdGlvbiNwb3J0Zm9saW8gI2JveENvbnRlbnQgaGVhZGVyLnN1YlRpdHVsbyBoNHtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDEuMGVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuc2VjdGlvbiNwb3J0Zm9saW8gYXJ0aWNsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnNlY3Rpb24jcG9ydGZvbGlvICNib3hDb250ZW50IC5leHRyYXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4gIC8qIFNraWxsc1xyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgc2VjdGlvbiNza2lsbHMgI2JveENvbnRlbnQgZmlndXJle1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3VwZXJpb3IgZmlndXJle1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3VwZXJpb3IgZmlndXJlIGltZ3tcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICMyNDM1NDA7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgLyogIG1heC13aWR0aDogMjgwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDsqL1xyXG4gICAgbWluLWhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNza2lsbHMgI2JveENvbnRlbnQgLmV4dHJhe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IC5leHRyYSBmaWd1cmUgaW1ne1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgIzI0MzU0MDtcclxuICAgIC8qTWVkaWRhcyBSZXNwb25zaXZvKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG1heC13aWR0aDogNzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogNzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IHNlY3Rpb257XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCBzZWN0aW9uIGFydGljbGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2YjZiNmI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IC5zdWJUaXR1bG97XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IC5zdWJUaXR1bG8gaDJ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAvKmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNmI2YjZiOyovXHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IC5zdWJUaXR1bG8gaDIgc3BhbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiAwLjVlbSBhdXRvIDBweCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNmI2YjZiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAtby1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3ViVGl0dWxvIGgyIHNwYW4gYXtcclxuICAgIGNvbG9yOiAjMjMzNTQwO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3ViVGl0dWxvIGgyIHNwYW46aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmI2YjZiO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3ViVGl0dWxvIGgyOmhvdmVyIHNwYW46aG92ZXIgYSxcclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3ViVGl0dWxvIGgyIHNwYW46aG92ZXIgYTpob3ZlcntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCBzZWN0aW9uIGFydGljbGUgZm9vdGVyLmZvb3Rlci1pbmZvcm1hdGlvbntcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gIH1cclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCBzZWN0aW9uIGFydGljbGUgZm9vdGVyLmZvb3Rlci1pbmZvcm1hdGlvbiBwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAvKlxyXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IC5zdWJUaXR1bG8gaDR7dGV4dC1hbGlnbjogbGVmdDttYXJnaW46IDE1cHggYXV0bztmb250LXNpemU6IDEuMWVtO31cclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCB1bCBsaS5qZWt5bGxyYnt9XHJcbiAgc2VjdGlvbiNza2lsbHMgI2JveENvbnRlbnQgdWwgbGkuamVreWxscmIgZmlndXJle31cclxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCB1bCBsaS5qZWt5bGxyYiBmaWd1cmUgaW1ne31cclxuICAqL1xyXG5cclxuICAgIC8qIEJsb2dcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIHNlY3Rpb24jYmxvZyAuY29udGFpbmVyIGg1e1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jYmxvZyAuY29udGFpbmVyIC5hdmF0YXJ7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNibG9nIC5jb250YWluZXIgLnJvdy5saW5le1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgcmVkO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI2Jsb2cgLmNvbnRhaW5lciAucm93LmxpbmUgc3Bhbi5kYXRhe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzZiNmI2YjtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI2Jsb2cgLmNvbnRhaW5lciAucm93LmxpbmUgc3Bhbi50YWdze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jYmxvZyAuY29udGFpbmVyIC5saW5le1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICM2YjZiNmI7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jYmxvZyBoNSB0aW1le1xyXG4gICAgY29sb3I6ICM2YjZiNmI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIH1cclxuICBzZWN0aW9uI2Jsb2cgaDUgc3Bhbi5yZWFkaW5nLXRpbWV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBjb2xvcjogIzgwODA4MDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jYmxvZyAubGFiZWwtc3VjY2Vzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjc3MjM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qQ29uZmlndXJhw6fDo28gaW1hZ2VucyBlIGxlZ2VuZGFzKi9cclxuICBhcnRpY2xlI2Jsb2cgZmlndXJle1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDBkMGQwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIFxyXG4gICAgLypNZWRpZGFzIFJlc3BvbnNpdm8qL1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgYXJ0aWNsZSNibG9nIGZpZ3VyZSBpbWd7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjQzNTQwO1xyXG4gIFxyXG4gICAgLypNZWRpZGFzIFJlc3BvbnNpdm8qL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyptYXgtaGVpZ2h0OiA0MjBweDsqL1xyXG4gICAgbWluLWhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgYXJ0aWNsZSNibG9nIGZpZ3VyZSBmaWdjYXB0aW9ue1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICMyNDM1NDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbiAgXHJcbiAgYXJ0aWNsZSNibG9nIGZpZ3VyZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGFydGljbGUjYmxvZyBmaWd1cmUgZmlnY2FwdGlvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGFydGljbGUjYmxvZyBmaWd1cmV7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMGQwZDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvKk1lZGlkYXMgUmVzcG9uc2l2byovXHJcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAvKkNvbmZpZ3VyYcOnw6NvIGltYWdlbnMgZSBsZWdlbmRhcyovXHJcbiAgXHJcbiAgLypCTE9HKi9cclxuICBcclxuICAvKiBQT1NUXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciAuYmxvZy1wb3N0IGgze1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIC5yb3cubGluZXtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbi8qICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciAucm93LmxpbmUgc3Bhbi5kYXRhe30qL1xyXG4gIFxyXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIC5yb3cubGluZSBzcGFuLnRhZ3N7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgLmJsb2ctdGl0bGUgaDR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjNmI2YjZiO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbi8qICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7Ki9cclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgLmJsb2ctdGl0bGUgaDQgc3Bhbi5jYXRlZ29yeXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIC5ibG9nLXRpdGxlIGg0IHNwYW4uZGF0YVRpbWV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciAuYmxvZy10aXRsZSBoNCBzcGFuLmxhYmVse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NzcyMztcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgfVxyXG4gIFxyXG4vKiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgc2VjdGlvbnt9Ki9cclxuICBcclxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciBzZWN0aW9uIGhlYWRlcntcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMTBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4vKiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgc2VjdGlvbiBhcnRpY2xle30qL1xyXG4gIFxyXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIHNlY3Rpb24gYXJ0aWNsZSBwe1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgc2VjdGlvbiBmb290ZXJ7XHJcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgI2QwZDBkMDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvIDBweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciBzZWN0aW9uIC5hc3NpZ257XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QwZDBkMDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMTBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciBzZWN0aW9uIGZvb3RlciBoNHtcclxuICAgIGZvbnQtc2l6ZTogMS4wZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZDBkMGQwO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIHNlY3Rpb24gZm9vdGVyIHB7XHJcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgI2QwZDBkMDtcclxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgc2VjdGlvbiBmb290ZXIgdWx7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgc2VjdGlvbiBmb290ZXIgdWwgbGl7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XHJcbiAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgc2VjdGlvbiBmb290ZXIgdWwgbGkgYXtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgfVxyXG4gIC8qUE9TVCovXHJcblxyXG5cclxuICAgIC8qIExBQlxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgc2VjdGlvbiNsYWIgLmNvbnRhaW5lciAucGFuZWwgLnBhbmVsLWJvZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jbGFiIC5jb250YWluZXIgLnBhbmVsIHAudGl0dWxvTGFie1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgbWFyZ2luOiAxMHB4IGF1dG8gMTVweCBhdXRvO1xyXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2QwZDBkMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMGQwZDA7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jbGFiIC5jb250YWluZXIgc2VjdGlvbiNsYWJQcm9qZWN0c3tcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDBweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICBzZWN0aW9uI2xhYiAuY29udGFpbmVyIHNlY3Rpb24jbGFiUHJvamVjdHMgYXJ0aWNsZXtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICM2YjZiNmI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24jbGFiIC5jb250YWluZXIgc2VjdGlvbiNsYWJQcm9qZWN0cyBoMntcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMTBweCBhdXRvO1xyXG4gICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICM2YjZiNmI7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgIzZiNmI2YjtcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNsYWIgLmNvbnRhaW5lciBzZWN0aW9uI2xhYlByb2plY3RzIGgyIHNwYW57XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiNsYWIgLmNvbnRhaW5lciBzZWN0aW9uI2xhYlByb2plY3RzIGg1IHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QwZDBkMDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICBtYXJnaW46IDAuNWVtIDAuM2VtO1xyXG4gIH1cclxuICAgICAvKiBSRVNVTUVcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5zZWN0aW9uI3Jlc3VtZSAuY29udGFpbmVyIHNlY3Rpb24jcmVzdW1lLWluZm97XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDBweCBhdXRvIDBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4IDEwcHggMTBweDtcclxuICBib3JkZXI6IDBweCBzb2xpZCAjNmI2YjZiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC1vLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbnNlY3Rpb24jcmVzdW1lIC5jb250YWluZXIgc2VjdGlvbiNyZXN1bWUtaW5mbyBoMntcclxuICBtYXJnaW46IDQwcHggYXV0byAyMHB4IGF1dG87XHJcbn1cclxuXHJcbnNlY3Rpb24jcmVzdW1lIC5jb250YWluZXIgc2VjdGlvbiNyZXN1bWUtaW5mbyBhcnRpY2xle1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2YjZiNmI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC1tcy1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgLW8tYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAwcHggMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbnNlY3Rpb24jcmVzdW1lIC5jb250YWluZXIgc2VjdGlvbiNyZXN1bWUtaW5mbyBhcnRpY2xlIGhlYWRlciBoMntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5zZWN0aW9uI3Jlc3VtZSAuY29udGFpbmVyIHNlY3Rpb24jcmVzdW1lLWluZm8gYXJ0aWNsZSBoZWFkZXIgc3BhbntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwcHggYXV0byAxMHB4IGF1dG87XHJcbn1cclxuXHJcbnNlY3Rpb24jcmVzdW1lIC5jb250YWluZXIgc2VjdGlvbiNyZXN1bWUtaW5mbyBhcnRpY2xlIGhlYWRlciBzcGFuIGFkZHJlc3N7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG5cclxuLyogUkVTVU1FXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuc2VjdGlvbiNhYm91dG1lIC5jb250YWluZXIgc2VjdGlvbiNhYm91dG1lLWluZm97XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4IGF1dG87XHJcbn0iXX0= */", '', '']]

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