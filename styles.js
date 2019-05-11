(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".environment{\n    color: #fff;\n    font-size: 16px;\n    font-weight: bold;\n    background: #72e72e;\n    text-align: center;\n    margin: 0px auto;\n    position: absolute;\n    width: 100%;\n  }\n\n/* You can add global styles to this file, and also import other style files */\n\n/*\n----AZUL----\n#8fd6ff - azul base muito claro\n#81C1E5 - azul pouco claro\n#6BA0BF - azul medio\n#476B7F - azul escuro\n#243540 - azul muito escuro\n#337ab7 - azul theme\n----AZUL----\n\n----CINZA----\n#808080 - cinza escuro\n#d0d0d0 - cinza claro\n#6b6b6b - cinza link\n----CINZA----\n\n----VERDE----\n#27A822 - verde claro\n#267723 - verde escuro\n----VERDE----\n*/\n\n/* Main page with stikky-footer\n-------------------------------------------------- */\n\n*{\n    transition: all 0.5s linear;\n}\n\nhtml, body {\n    height: 100%;\n    background-color: #fff;\n    font-family: 'Source Sans Pro', sans-serif;\n    /* The html and body elements cannot have any padding or margin. */\n    border-top: 3px solid #8fd6ff;\n    /*border-top: 3px solid #27A822;*/\n    padding: 0px;\n    margin: 0px;\n}\n\nbody{\n    display: block;\n}\n\n.none{\n    display: none !important;\n}\n\n/* Wrapper for page content to push down footer */\n\n#wrap {\n    padding-bottom: 50px;\n    min-height: 100%;\n    height: auto;\n    /* Negative indent footer by its height */\n    margin: 0 auto -65px;\n    /* Pad bottom by footer height */\n    /*padding: 0 0 60px;*/\n}\n\nhr{\n    border:  0.01em solid #d0d0d0;\n}\n\n.panel{\n    box-shadow: none !important;\n        -webkit-box-shadow: none !important;\n        -moz-box-shadow: none !important;\n        -ms-box-shadow: none !important;\n        -o-box-shadow: none !important;\n}\n\n/* Navbar\n  -------------------------------------------------- */\n\n.navbar .navbar-header .navbar-brand img{\n    height: 50px;\n    width: 50px;\n    margin: -10px auto 0px auto;\n  }\n\n.navbar-static-top {\n    margin-bottom: 10px;\n  }\n\n.navbar .navbar-header{\n      margin: 10px auto 10px auto;\n      border: 0px solid #243540;\n      width: 30px;\n      height: 30px;\n  }\n\n.navbar .navbar-header .navbar-brand{\n    padding: 0px 15px 0px 15px;\n  }\n\n.navbar .navbar-header .navbar-brand i{\n    margin: -5px auto 0px auto !important;\n    width: 30px;\n    height: 35px;\n    padding: 0px;\n  }\n\n.navbar-default {\n    background-color: #ffffff !important;\n    border-color: #ffffff !important;\n  }\n\n/*NAVBAR OCULTO\n  .navbar-default .container{\n      display: block;\n  }*/\n\n/*NAVBAR OCULTO\n  .navbar-default .navbar-brand {\n    color: #6b6b6b;\n  }\n  .navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {\n    color: #6b6b6b;\n  }\n  .navbar-default .navbar-text {\n    color: #6b6b6b;\n  }\n  .navbar-default .navbar-nav > li > a {\n    color: #6b6b6b;\n    text-transform: uppercase;\n    cursor: pointer;\n  }\n  .navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n    color: #6b6b6b;\n  }\n  .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n    color: #6b6b6b;\n    background-color: #ffffff;\n  }\n  .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {\n    color: #6b6b6b;\n    background-color: #ffffff;\n  }\n  .navbar-default .navbar-toggle {\n    border-color: #ffffff;\n  }\n  .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n    background-color: #ffffff;\n  }\n  .navbar-default .navbar-toggle .icon-bar {\n    background-color: #6b6b6b;\n  }\n  .navbar-default .navbar-collapse,\n  .navbar-default .navbar-form {\n    border-color: #6b6b6b;\n  }\n  .navbar-default .navbar-link {\n    color: #6b6b6b;\n  }\n  .navbar-default .navbar-link:hover {\n    color: #6b6b6b;\n  }\n  \n  span.fa{\n    display: none;\n  }*/\n\nspan.fa{\n    z-index: 1;\n    cursor: pointer;\n    display: inline;\n    margin-top: 5px;\n    margin-left: 20px;\n    padding: 3px;\n    right: 5px;\n    position: fixed;\n    background-color: white;\n    border: 1px solid black;\n    border-radius: 5px;\n        -webkit-border-radius: 5px;\n        -moz-border-radius: 5px;\n        -ms-border-radius: 5px;\n        -o-border-radius: 5px;\n  }\n\nspan.fa:before{}\n\n/*#wrap{\n    position: relative;\n  }*/\n\n/* Custom page CSS\n  -------------------------------------------------- */\n\n.container {\n    width: auto;\n    max-width: 960px;\n    text-align: center;\n  }\n\n.container .text-muted {\n    margin: 20px 0;\n  }\n\n.container a {\n    color: #6BA0BF;\n    cursor: pointer;\n  }\n\n.container a:hover,\n  .container a:focus,\n  .container a:active{\n    /*color: #267723;*/\n    color: #476B7F;\n    text-decoration: none;\n  }\n\n.img-responsive {\n   display: block;\n   height: auto;\n   max-width: 100%;\n  }\n\n.panel-default h4 {\n    text-align: left;\n    line-height: 24px;\n    font-size: 22px;\n  }\n\n.panel-default h5 {\n    text-align: left;\n    line-height: 30px;\n    font-size: 18px;\n  }\n\n.panel-default h6 {\n    font-size: 15px;\n  }\n\n.panel-default h4 a, h5 a {\n    color: #27A822;\n  }\n\n.panel-default h4 a:hover, h5 a:hover {\n    color: #267723;\n  }\n\n.panel{\n    border-style: none;\n  }\n\n.panel-body {\n    padding-top: -10px;\n    text-align: left;\n  }\n\n.blog-post{\n    padding-top: 30px;\n  }\n\n.blog-title{\n    padding-top: 2px;\n  }\n\n.related-posts h4 {\n    text-align: center;\n  }\n\n.page-not-found {\n    padding-top: 20%;\n  }\n\n.disqus {\n    padding-bottom: 15px;\n  }\n\n.blogpost{\n    text-align: left;\n    line-height: 30px;\n    font-size: 18px;\n  }\n\n/*MENU TAB OPTION*/\n\nsection ul#tabMenuOption{\n        text-align: center;\n        margin: 15px auto;\n        padding: 0px 0px 10px 0px;\n        list-style-position: inside;\n        /*border-bottom: 1px solid #d0d0d0;*/\n      }\n\nsection ul#tabMenuOption li{\n        display: inline-block;\n        margin: 5px 2px;\n        border: 1px solid #6b6b6b;\n        padding: 0.25em 0.50em;\n        border-radius: 20px;\n          -webkit-border-radius: 20px;\n          -moz-border-radius: 20px;\n          -ms-border-radius: 20px;\n          -o-border-radius: 20px;\n      }\n\n/*   section ul#tabMenuOption li a#ongame{}\n       section ul#tabMenuOption li a#viewit{}\n       section ul#tabMenuOption li a#ongame img{}\n       section ul#tabMenuOption li a#viewit img{}\n      */\n\nsection ul#tabMenuOption li a,\n      section ul#tabMenuOption li a:hover{\n        line-height: normal;\n        text-decoration: none;\n      }\n\nsection ul#tabMenuOption li a{\n        color: #233540;\n      }\n\nsection ul#tabMenuOption li.active{\n        background: #6b6b6b;\n        /*background: #8fd6ff;*/\n      }\n\nsection ul#tabMenuOption li.active a{\n        color: white;\n      }\n\nsection #boxContent .showHide{\n        display: block !important;\n      }\n\nsection #boxContent ul.contentMenuOption{\n        display: none;\n      }\n\n/*section #boxContent section{\n        display: none;\n        text-align: center;\n        padding: 0px;\n        border: 1px solid #d0d0d0\n      }*/\n\nsection #boxContent ul{\n        margin: 0px auto;\n        padding: 0px;\n      }\n\nsection #boxContent ul li{\n        margin: 0px 10px;\n        display: inline-block;\n        vertical-align: middle;\n      }\n\n/*MENU TAB OPTION*/\n\n/*Configuração imagens e legendas*/\n\nsection #boxContent figure{\n        background: white;\n        border: 0px solid #8fd6ff;\n        text-align: center;\n        margin: 10px auto;\n        padding: 10px;\n      /*Medidas Responsivo\n        min-width: 240px;*/\n        max-width: 320px;\n        width: 100%;\n        height: auto;\n      }\n\nsection #boxContent figure{\n        border-radius: 20px;\n          -webkit-border-radius: 20px;\n          -moz-border-radius: 20px;\n          -ms-border-radius: 20px;\n          -o-border-radius: 20px;\n      }\n\n/*section #boxContent figure{\n        background: white;\n        border: 1px solid #d0d0d0;\n        text-align: center;\n        margin: 10px auto;\n        padding: 10px;\n        max-width: 480px;\n        width: 100%;\n        min-width: 200px;\n        height: auto;\n      }*/\n\nsection #boxContent figure img{\n        /*border: 1px solid #243540;*/\n        border: 1px solid #d0d0d0;\n        border-radius: 10px;\n          -webkit-border-radius: 10px;\n          -moz-border-radius: 10px;\n          -ms-border-radius: 10px;\n          -o-border-radius: 10px;\n        /*Medidas Responsivo*/\n        background-size:100%;\n        background-repeat: no-repeat;\n        max-width: 320px;\n        width: 100%;\n        /*max-height: 420px;*/\n        min-height: auto;\n      }\n\nsection #boxContent figure figcaption{\n        padding: 10px;\n        margin: 10px auto;\n        font-style: italic;\n        background: #f0f0f0;\n        border: 0px solid #243540;\n        color: black;\n      }\n\nsection #boxContent figure figcaption{\n        border-radius: 10px;\n          -webkit-border-radius: 10px;\n          -moz-border-radius: 10px;\n          -ms-border-radius: 10px;\n          -o-border-radius: 10px;\n      }\n\n/*Configuração imagens e legendas*/\n\n/* Global\n-------------------------------------------------- */\n\n.featured{\n    font-weight: bold;\n    color: #333;\n}\n\n.loader{\n  display: table;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  opacity: 1;\n  position: fixed;\n  top: 0px;\n}\n\n.loader .loaderContent{\n  /*background-size: 54px 55px;*/\n  background-image: url(\"/assets/img/global/intersection-black.gif\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  overflow: hidden;\n  text-align: center;\n  background-color: #dcdcdc;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.container #navbar .navbar-right{\n  margin: 0px;\n}\n\n.container #navbar .navbar.nav > li > a{\n  padding: 10px 15px;\n}\n\n/* Depositions\n  -------------------------------------------------- */\n\n#recommendation #navbar{\n    margin: 0px auto 0px auto;\n  }\n\n#recommendation #navbar .navbar-right{\n    margin-right: 0px;\n    padding: 0px 10px 0px 0px;\n  }\n\n#recommendation #navbar .navbar-nav{\n    margin-right: -10px;\n  }\n\nsection#depositions{\n    border: 0px solid #8fd6ff;\n  }\n\nsection#depositions .flex-caption {\n    /* width: 96%; */\n    padding: 2%;\n    left: 0;\n    bottom: 0;\n    background: rgba(0,0,0,.5);\n    color: #fff;\n    text-shadow: 0 -1px 0 rgba(0,0,0,.3);\n    font-size: 14px;\n    line-height: 18px;\n  }\n\nsection#depositions li.css a {\n    border-radius: 0;\n  }\n\n/*\n  section#depositions .flexslider ul.slides li\n  p.depositions\n  p.flex-caption\n  */\n\nsection#depositions .flexslider ul.slides li p.depositions{\n    border: 0px solid #243540;\n    margin: 0px 15px 15px 15px;\n    font-style: italic;\n    line-height: normal;\n    font-size: 1.5em;\n    font-weight: normal;\n  }\n\nsection#depositions .flexslider ul.slides li .flex-caption{\n    border-top: 1px solid #d0d0d0;\n    background: none !important;\n    padding: 10px 10px;\n    text-align: right;\n    color: #000;\n    font-size: 1.1em;\n  }\n\nsection#depositions .flex-viewport{\n    padding-top: 10px;\n    border: 1px solid #d0d0d0;\n    border-radius: 20px;\n  }\n\nsection#depositions .flexslider ol.flex-control-nav{\n    border: 0px solid #8fd6ff;\n    bottom: -30px !important;\n    padding: 10px 0px 0px 0px;\n  }\n\nsection#depositions .flexslider figure{\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\nsection#depositions .flexslider figure img{\n    width: 80px;\n    height: 80px;\n    display: inline;\n    margin-right: 10px;\n    border:  3px solid #8fd6ff;\n    border-radius: 10px;\n  }\n\n/* Portfolio\n  -------------------------------------------------- */\n\n/*old portfolio\n  section#portfolio ul#ongameSites figure img{\n    border: 1px solid #243540;\n    background-size:100%;\n    background-repeat: no-repeat;\n    max-width: 480px;\n    width: 100%;\n    max-height: 480px;\n    min-height: auto;\n  }\n  \n  section#portfolio #boxContent ul li.subTitulo{\n    display: block;\n    padding: 5px;\n    margin: 5px auto;\n  }\n  \n  section#portfolio #boxContent ul li.subTitulo p{\n    font-weight: normal;\n    font-size: 1.2em;\n    padding: 5px;\n    border-top: 1px solid #d0d0d0;\n    border-bottom: 1px solid #d0d0d0;\n  }\n  \n  section#portfolio #boxContent ul li.subTitulo h4{\n    text-align: left;\n    margin: 15px auto;\n    font-size: 1.1em;\n  }\n  old portfolio*/\n\nsection#portfolio #boxContent section {\n    display: none;\n}\n\nsection#portfolio #boxContent section article{\n  border: 1px solid #6b6b6b;\n  border-radius: 20px;\n    -webkit-border-radius: 20px;\n    -moz-border-radius: 20px;\n    -ms-border-radius: 20px;\n    -o-border-radius: 20px;\n}\n\nsection#portfolio #boxContent article header.subTitulo{\n  border-top: 0px solid #6b6b6b;\n  border-bottom: 0px solid #6b6b6b;\n}\n\nsection#portfolio #boxContent header.subTitulo h2{\n  color: #000;\n  font-weight: bold;\n  font-size: 1.5em;\n  display: block;\n  padding: 5px;\n  text-align: center;\n  margin: 0 auto;\n/*  border-top: 1px solid #6b6b6b;\n  border-bottom: 1px solid #6b6b6b;*/\n}\n\nsection#portfolio #boxContent header.subTitulo h2 span{\n  display: block;\n  font-weight: bold;\n  font-size: 0.7em;\n  padding: 5px;\n  margin: 0.5em auto 0px auto;\n  max-width: 350px;\n  background: #fff;\n  border: 1px solid #6b6b6b;\n  border-radius: 10px;\n    -webkit-border-radius: 10px;\n    -moz-border-radius: 10px;\n    -ms-border-radius: 10px;\n    -o-border-radius: 10px;\n}\n\nsection#portfolio #boxContent header.subTitulo h4{\n  color: #000;\n  font-size: 1.0em;\n  display: block;\n  padding: 10px 20px;\n  margin: 0 auto;\n}\n\nsection#portfolio article{\n  text-align: center;\n}\n\nsection#portfolio #boxContent .extra{\n  display: inline-block;\n  max-width: 320px;\n  vertical-align: top;\n}\n\n/* Skills\n  -------------------------------------------------- */\n\nsection#skills #boxContent figure{\n    width: 150px;\n  }\n\nsection#skills #boxContent .superior figure{\n    width: auto;\n    min-width: 100px;\n  }\n\nsection#skills #boxContent .superior figure img{\n    border: 0px solid #243540;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    width: 100%;\n  /*  max-width: 280px;\n    max-height: 150px;*/\n    min-height: auto;\n  }\n\nsection#skills #boxContent .extra{\n    display: inline-block;\n    max-width: 320px;\n    vertical-align: top;\n  }\n\nsection#skills #boxContent .extra figure img{\n    border: 0px solid #243540;\n    /*Medidas Responsivo*/\n    background-size:100%;\n    background-repeat: no-repeat;\n    max-width: 70px;\n    width: 100%;\n    max-height: 70px;\n    min-height: auto;\n  }\n\nsection#skills #boxContent section{\n    display: none;\n  }\n\nsection#skills #boxContent section article{\n    text-align: center;\n    padding: 0px;\n    margin: 20px auto;\n    border: 1px solid #6b6b6b;\n    border-radius: 20px;\n      -webkit-border-radius: 20px;\n      -moz-border-radius: 20px;\n      -ms-border-radius: 20px;\n      -o-border-radius: 20px;\n  }\n\nsection#skills #boxContent .subTitulo{\n    display: block;\n    padding: 0px;\n    margin: 0px auto;\n  }\n\nsection#skills #boxContent .subTitulo h2{\n    color: #000;\n    font-weight: bold;\n    font-size: 1.5em;\n    display: block;\n    padding: 5px;\n    margin: 0 auto;\n    /*border-bottom: 1px solid #6b6b6b;*/\n  }\n\nsection#skills #boxContent .subTitulo h2 span{\n    display: block;\n    font-weight: bold;\n    font-size: 0.7em;\n    padding: 5px;\n    margin: 0.5em auto 0px auto;\n    max-width: 350px;\n    background: #fff;\n    border: 1px solid #6b6b6b;\n    border-radius: 10px;\n      -webkit-border-radius: 10px;\n      -moz-border-radius: 10px;\n      -ms-border-radius: 10px;\n      -o-border-radius: 10px;\n  }\n\nsection#skills #boxContent .subTitulo h2 span a{\n    color: #233540;\n  }\n\nsection#skills #boxContent .subTitulo h2 span:hover{\n    cursor: pointer;\n    background: #6b6b6b;\n  }\n\nsection#skills #boxContent .subTitulo h2:hover span:hover a,\n  section#skills #boxContent .subTitulo h2 span:hover a:hover{\n    color: #fff;\n  }\n\nsection#skills #boxContent section article footer.footer-information{\n    padding: 0px 15px;\n  }\n\nsection#skills #boxContent section article footer.footer-information p{\n    text-align: center;\n  }\n\n/*\n  section#skills #boxContent .subTitulo h4{text-align: left;margin: 15px auto;font-size: 1.1em;}\n  section#skills #boxContent ul li.jekyllrb{}\n  section#skills #boxContent ul li.jekyllrb figure{}\n  section#skills #boxContent ul li.jekyllrb figure img{}\n  */\n\n/* Blog\n  -------------------------------------------------- */\n\nsection#blog .container h5{\n    font-size: 1.5em;\n    text-align: center;\n    margin: 5px auto;\n  }\n\nsection#blog .container .avatar{\n    margin: 20px auto;\n    text-align: center;\n  }\n\nsection#blog .container .row.line{\n    border: 0px solid red;\n    margin: 5px auto;\n    padding-bottom: 10px;\n  }\n\nsection#blog .container .row.line span.data{\n    text-align: center;\n    display: block;\n    color: #6b6b6b;\n    font-size: 0.9em;\n    margin: 5px auto;\n  }\n\nsection#blog .container .row.line span.tags{\n    text-align: center;\n    display: block;\n  }\n\nsection#blog .container .line{\n    border-bottom: 0px solid #6b6b6b;\n  }\n\nsection#blog h5 time{\n    color: #6b6b6b;\n    padding: 0px;\n    margin: 0px auto;\n  }\n\nsection#blog h5 span.reading-time{\n    display: block;\n    font-size: 0.8em;\n    color: #808080;\n    padding: 0px;\n    margin: 0px auto;\n  }\n\nsection#blog .label-success{\n    background-color: #267723;\n  }\n\n/*Configuração imagens e legendas*/\n\narticle#blog figure{\n    background: white;\n    border: 1px solid #d0d0d0;\n    text-align: center;\n    margin: 10px auto;\n    padding: 10px;\n  \n    /*Medidas Responsivo*/\n    max-width: 320px;\n    width: 100%;\n    min-width: 250px;\n    height: auto;\n  }\n\narticle#blog figure img{\n    border: 1px solid #243540;\n  \n    /*Medidas Responsivo*/\n    background-size:100%;\n    background-repeat: no-repeat;\n    max-width: 320px;\n    width: 100%;\n    /*max-height: 420px;*/\n    min-height: auto;\n  }\n\narticle#blog figure figcaption{\n    padding: 10px;\n    margin: 10px auto;\n    font-style: italic;\n    background: #f0f0f0;\n    border: 0px solid #243540;\n    color: black;\n    font-size: 0.8em;\n    line-height: normal;\n  }\n\narticle#blog figure{\n    border-radius: 20px;\n  }\n\narticle#blog figure figcaption{\n    border-radius: 10px;\n  }\n\narticle#blog figure{\n    background: white;\n    border: 1px solid #d0d0d0;\n    text-align: center;\n    margin: 10px auto;\n    padding: 10px;\n    /*Medidas Responsivo*/\n    max-width: 480px;\n    width: 100%;\n    min-width: 200px;\n    height: auto;\n  }\n\n/*Configuração imagens e legendas*/\n\n/*BLOG*/\n\n/* POST\n  -------------------------------------------------- */\n\nsection#post .container .blog-post h3{\n    font-size: 1.5em;\n    text-align: center;\n    margin: 5px auto;\n  }\n\nsection#post .container .row.line{\n    margin: 5px auto;\n    padding-bottom: 10px;\n  }\n\nsection#post .container .row.line span.data{\n   }\n\nsection#post .container .row.line span.tags{\n    text-align: center;\n    display: block;\n  }\n\nsection#post .container .blog-title h4{\n    text-align: center;\n    display: block;\n    color: #6b6b6b;\n    font-size: 0.9em;\n    margin: 5px auto;\n    vertical-align: center;\n  }\n\nsection#post .container .blog-title h4 span.category{\n    display: block;\n    margin: 10px auto;\n  }\n\nsection#post .container .blog-title h4 span.dataTime{\n    display: block;\n    margin: 10px auto;\n  }\n\nsection#post .container .blog-title h4 span.label{\n    background-color: #267723;\n    font-size: 0.9em;\n  }\n\nsection#post .container section{\n  \n  }\n\nsection#post .container section header{\n    margin: 0px auto 10px auto;\n    padding: 5px 10px;\n    font-size: 0.9em;\n    font-weight: bold;\n    text-align: center;\n  }\n\nsection#post .container section article{\n  \n  }\n\nsection#post .container section article p{\n    font-size: 0.9em;\n    line-height: normal;\n    margin: 10px auto;\n  }\n\nsection#post .container section footer{\n    border-top: 0px solid #d0d0d0;\n    margin: 10px auto 0px auto;\n  }\n\nsection#post .container section .assign{\n    border-bottom: 1px solid #d0d0d0;\n    margin: 0px auto 10px auto;\n    padding: 0px 10px;\n    font-size: 0.8em;\n  }\n\nsection#post .container section footer h4{\n    font-size: 1.0em;\n    font-weight: bold;\n    border-top: 0px solid #d0d0d0;\n    padding: 5px 10px;\n  }\n\nsection#post .container section footer p{\n    border-top: 0px solid #d0d0d0;\n    padding: 5px 20px;\n    font-size: 0.9em;\n  }\n\nsection#post .container section footer ul{\n    display: block;\n  }\n\nsection#post .container section footer ul li{\n    list-style-type: disc;\n    list-style-position: inside;\n    line-height: normal;\n    margin: 0px auto;\n  }\n\nsection#post .container section footer ul li a{\n    font-size: 0.8em;\n  }\n\n/*POST*/\n\n/* LAB\n  -------------------------------------------------- */\n\nsection#lab .container .panel .panel-body{\n    text-align: center;\n  }\n\nsection#lab .container .panel p.tituloLab{\n      font-weight: normal;\n      font-size: 1.2em;\n      text-align: center;\n      padding: 5px;\n      margin: 10px auto 15px auto;\n      border-top: 1px solid #d0d0d0;\n      border-bottom: 1px solid #d0d0d0;\n  }\n\nsection#lab .container section#labProjects{\n    margin: 20px auto 0px auto;\n  }\n\nsection#lab .container section#labProjects article{\n    border: 1px solid #6b6b6b;\n    border-radius: 20px;\n      -webkit-border-radius: 20px;\n      -moz-border-radius: 20px;\n      -ms-border-radius: 20px;\n      -o-border-radius: 20px;\n  }\n\nsection#lab .container section#labProjects h2{\n    color: #000;\n    font-weight: 700;\n    font-size: 1.5em;\n    display: block;\n    padding: 5px;\n    margin: 0px auto 10px auto;\n    border-top: 0px solid #6b6b6b;\n    border-bottom: 0px solid #6b6b6b;\n  }\n\nsection#lab .container section#labProjects h2 span{\n    font-size: 0.7em;\n    font-weight: normal;\n    display: block;\n    margin: 5px auto;\n  }\n\nsection#lab .container section#labProjects h5 {\n      text-align: left;\n      line-height: 30px;\n      font-size: 18px;\n      border: 1px solid #d0d0d0;\n      padding: 10px;\n      border-radius: 20px;\n        -webkit-border-radius: 20px;\n        -moz-border-radius: 20px;\n        -ms-border-radius: 20px;\n        -o-border-radius: 20px;\n      width: 250px;\n      display: inline-block;\n      vertical-align: top;\n      margin: 0.5em 0.3em;\n  }\n \n/*# sourceMappingURL=data:application/json;base64,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O0FBQ3BEO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVBO01BQ0ksbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLDJCQUEyQjtNQUMzQiw2QkFBNkI7TUFDN0IsZ0NBQWdDO0VBQ3BDOztBQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtNQUNqQiwyQkFBMkI7TUFDM0Isd0JBQXdCO01BQ3hCLHVCQUF1QjtNQUN2QixzQkFBc0I7RUFDMUI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztBQUVBO01BQ0ksZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YseUJBQXlCO01BQ3pCLGFBQWE7TUFDYixtQkFBbUI7UUFDakIsMkJBQTJCO1FBQzNCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsc0JBQXNCO01BQ3hCLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsbUJBQW1CO01BQ25CLG1CQUFtQjtFQUN2QiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbnZpcm9ubWVudHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZDogIzcyZTcyZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLypcbi0tLS1BWlVMLS0tLVxuIzhmZDZmZiAtIGF6dWwgYmFzZSBtdWl0byBjbGFyb1xuIzgxQzFFNSAtIGF6dWwgcG91Y28gY2xhcm9cbiM2QkEwQkYgLSBhenVsIG1lZGlvXG4jNDc2QjdGIC0gYXp1bCBlc2N1cm9cbiMyNDM1NDAgLSBhenVsIG11aXRvIGVzY3Vyb1xuIzMzN2FiNyAtIGF6dWwgdGhlbWVcbi0tLS1BWlVMLS0tLVxuXG4tLS0tQ0lOWkEtLS0tXG4jODA4MDgwIC0gY2luemEgZXNjdXJvXG4jZDBkMGQwIC0gY2luemEgY2xhcm9cbiM2YjZiNmIgLSBjaW56YSBsaW5rXG4tLS0tQ0lOWkEtLS0tXG5cbi0tLS1WRVJERS0tLS1cbiMyN0E4MjIgLSB2ZXJkZSBjbGFyb1xuIzI2NzcyMyAtIHZlcmRlIGVzY3Vyb1xuLS0tLVZFUkRFLS0tLVxuKi9cblxuLyogTWFpbiBwYWdlIHdpdGggc3Rpa2t5LWZvb3RlclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuKntcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XG59XG5cbmh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgICAvKiBUaGUgaHRtbCBhbmQgYm9keSBlbGVtZW50cyBjYW5ub3QgaGF2ZSBhbnkgcGFkZGluZyBvciBtYXJnaW4uICovXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICM4ZmQ2ZmY7XG4gICAgLypib3JkZXItdG9wOiAzcHggc29saWQgIzI3QTgyMjsqL1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuYm9keXtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbiAgXG4ubm9uZXtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qIFdyYXBwZXIgZm9yIHBhZ2UgY29udGVudCB0byBwdXNoIGRvd24gZm9vdGVyICovXG4jd3JhcCB7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgLyogTmVnYXRpdmUgaW5kZW50IGZvb3RlciBieSBpdHMgaGVpZ2h0ICovXG4gICAgbWFyZ2luOiAwIGF1dG8gLTY1cHg7XG4gICAgLyogUGFkIGJvdHRvbSBieSBmb290ZXIgaGVpZ2h0ICovXG4gICAgLypwYWRkaW5nOiAwIDAgNjBweDsqL1xufVxuXG5ocntcbiAgICBib3JkZXI6ICAwLjAxZW0gc29saWQgI2QwZDBkMDtcbn1cblxuLnBhbmVse1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAtbXMtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAtby1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbiAgLyogTmF2YmFyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZCBpbWd7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogLTEwcHggYXV0byAwcHggYXV0bztcbiAgfVxuICBcbiAgLm5hdmJhci1zdGF0aWMtdG9wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICAubmF2YmFyIC5uYXZiYXItaGVhZGVye1xuICAgICAgbWFyZ2luOiAxMHB4IGF1dG8gMTBweCBhdXRvO1xuICAgICAgYm9yZGVyOiAwcHggc29saWQgIzI0MzU0MDtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICB9XG4gIFxuICAubmF2YmFyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYnJhbmR7XG4gICAgcGFkZGluZzogMHB4IDE1cHggMHB4IDE1cHg7XG4gIH1cbiAgXG4gIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZCBpe1xuICAgIG1hcmdpbjogLTVweCBhdXRvIDBweCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICBcbiAgLm5hdmJhci1kZWZhdWx0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC8qTkFWQkFSIE9DVUxUT1xuICAubmF2YmFyLWRlZmF1bHQgLmNvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9Ki9cbiAgLypOQVZCQVIgT0NVTFRPXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWJyYW5kIHtcbiAgICBjb2xvcjogIzZiNmI2YjtcbiAgfVxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1icmFuZDpob3ZlciwgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQ6Zm9jdXMge1xuICAgIGNvbG9yOiAjNmI2YjZiO1xuICB9XG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRleHQge1xuICAgIGNvbG9yOiAjNmI2YjZiO1xuICB9XG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gYSB7XG4gICAgY29sb3I6ICM2YjZiNmI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gbGkgPiBhOmhvdmVyLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiBsaSA+IGE6Zm9jdXMge1xuICAgIGNvbG9yOiAjNmI2YjZiO1xuICB9XG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYTpob3ZlciwgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6Zm9jdXMge1xuICAgIGNvbG9yOiAjNmI2YjZiO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLm9wZW4gPiBhLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAub3BlbiA+IGE6aG92ZXIsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5vcGVuID4gYTpmb2N1cyB7XG4gICAgY29sb3I6ICM2YjZiNmI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgfVxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUge1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbiAgfVxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGU6aG92ZXIsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgfVxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUgLmljb24tYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI2YjZiO1xuICB9XG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWNvbGxhcHNlLFxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1mb3JtIHtcbiAgICBib3JkZXItY29sb3I6ICM2YjZiNmI7XG4gIH1cbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbGluayB7XG4gICAgY29sb3I6ICM2YjZiNmI7XG4gIH1cbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbGluazpob3ZlciB7XG4gICAgY29sb3I6ICM2YjZiNmI7XG4gIH1cbiAgXG4gIHNwYW4uZmF7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfSovXG5cbiAgc3Bhbi5mYXtcbiAgICB6LWluZGV4OiAxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICByaWdodDogNXB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIFxuICBzcGFuLmZhOmJlZm9yZXt9XG4gIFxuICAvKiN3cmFwe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfSovXG5cbiAgLyogQ3VzdG9tIHBhZ2UgQ1NTXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIFxuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY29udGFpbmVyIC50ZXh0LW11dGVkIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgfVxuICAuY29udGFpbmVyIGEge1xuICAgIGNvbG9yOiAjNkJBMEJGO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuY29udGFpbmVyIGE6aG92ZXIsXG4gIC5jb250YWluZXIgYTpmb2N1cyxcbiAgLmNvbnRhaW5lciBhOmFjdGl2ZXtcbiAgICAvKmNvbG9yOiAjMjY3NzIzOyovXG4gICAgY29sb3I6ICM0NzZCN0Y7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIC5pbWctcmVzcG9uc2l2ZSB7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgIGhlaWdodDogYXV0bztcbiAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICAucGFuZWwtZGVmYXVsdCBoNCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbiAgLnBhbmVsLWRlZmF1bHQgaDUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5wYW5lbC1kZWZhdWx0IGg2IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLnBhbmVsLWRlZmF1bHQgaDQgYSwgaDUgYSB7XG4gICAgY29sb3I6ICMyN0E4MjI7XG4gIH1cbiAgLnBhbmVsLWRlZmF1bHQgaDQgYTpob3ZlciwgaDUgYTpob3ZlciB7XG4gICAgY29sb3I6ICMyNjc3MjM7XG4gIH1cbiAgLnBhbmVse1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgfVxuICAucGFuZWwtYm9keSB7XG4gICAgcGFkZGluZy10b3A6IC0xMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAuYmxvZy1wb3N0e1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICB9XG4gIC5ibG9nLXRpdGxle1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gIH1cbiAgLnJlbGF0ZWQtcG9zdHMgaDQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucGFnZS1ub3QtZm91bmQge1xuICAgIHBhZGRpbmctdG9wOiAyMCU7XG4gIH1cbiAgLmRpc3F1cyB7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIH1cbiAgXG4gIC5ibG9ncG9zdHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuXG4gICAgLypNRU5VIFRBQiBPUFRJT04qL1xuICAgIHNlY3Rpb24gdWwjdGFiTWVudU9wdGlvbntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAxMHB4IDBweDtcbiAgICAgICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xuICAgICAgICAvKmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDBkMGQwOyovXG4gICAgICB9XG4gICAgICBcbiAgICAgIHNlY3Rpb24gdWwjdGFiTWVudU9wdGlvbiBsaXtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW46IDVweCAycHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2YjZiNmI7XG4gICAgICAgIHBhZGRpbmc6IDAuMjVlbSAwLjUwZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAtby1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgfVxuICAgICAgXG4gICAgLyogICBzZWN0aW9uIHVsI3RhYk1lbnVPcHRpb24gbGkgYSNvbmdhbWV7fVxuICAgICAgIHNlY3Rpb24gdWwjdGFiTWVudU9wdGlvbiBsaSBhI3ZpZXdpdHt9XG4gICAgICAgc2VjdGlvbiB1bCN0YWJNZW51T3B0aW9uIGxpIGEjb25nYW1lIGltZ3t9XG4gICAgICAgc2VjdGlvbiB1bCN0YWJNZW51T3B0aW9uIGxpIGEjdmlld2l0IGltZ3t9XG4gICAgICAqL1xuICAgICAgc2VjdGlvbiB1bCN0YWJNZW51T3B0aW9uIGxpIGEsXG4gICAgICBzZWN0aW9uIHVsI3RhYk1lbnVPcHRpb24gbGkgYTpob3ZlcntcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgXG4gICAgICBzZWN0aW9uIHVsI3RhYk1lbnVPcHRpb24gbGkgYXtcbiAgICAgICAgY29sb3I6ICMyMzM1NDA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHNlY3Rpb24gdWwjdGFiTWVudU9wdGlvbiBsaS5hY3RpdmV7XG4gICAgICAgIGJhY2tncm91bmQ6ICM2YjZiNmI7XG4gICAgICAgIC8qYmFja2dyb3VuZDogIzhmZDZmZjsqL1xuICAgICAgfVxuICAgICAgXG4gICAgICBzZWN0aW9uIHVsI3RhYk1lbnVPcHRpb24gbGkuYWN0aXZlIGF7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgc2VjdGlvbiAjYm94Q29udGVudCAuc2hvd0hpZGV7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHNlY3Rpb24gI2JveENvbnRlbnQgdWwuY29udGVudE1lbnVPcHRpb257XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qc2VjdGlvbiAjYm94Q29udGVudCBzZWN0aW9ue1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QwZDBkMFxuICAgICAgfSovXG4gICAgICBcbiAgICAgIHNlY3Rpb24gI2JveENvbnRlbnQgdWx7XG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgc2VjdGlvbiAjYm94Q29udGVudCB1bCBsaXtcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgfVxuICAgICAgLypNRU5VIFRBQiBPUFRJT04qL1xuICAgICAgXG4gICAgICAvKkNvbmZpZ3VyYcOnw6NvIGltYWdlbnMgZSBsZWdlbmRhcyovXG4gICAgICBzZWN0aW9uICNib3hDb250ZW50IGZpZ3VyZXtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogMHB4IHNvbGlkICM4ZmQ2ZmY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAvKk1lZGlkYXMgUmVzcG9uc2l2b1xuICAgICAgICBtaW4td2lkdGg6IDI0MHB4OyovXG4gICAgICAgIG1heC13aWR0aDogMzIwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgICBcbiAgICAgIHNlY3Rpb24gI2JveENvbnRlbnQgZmlndXJle1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLypzZWN0aW9uICNib3hDb250ZW50IGZpZ3VyZXtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMGQwZDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1heC13aWR0aDogNDgwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9Ki9cbiAgICAgIFxuICAgICAgc2VjdGlvbiAjYm94Q29udGVudCBmaWd1cmUgaW1ne1xuICAgICAgICAvKmJvcmRlcjogMXB4IHNvbGlkICMyNDM1NDA7Ki9cbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QwZDBkMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIC8qTWVkaWRhcyBSZXNwb25zaXZvKi9cbiAgICAgICAgYmFja2dyb3VuZC1zaXplOjEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIG1heC13aWR0aDogMzIwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKm1heC1oZWlnaHQ6IDQyMHB4OyovXG4gICAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgICBcbiAgICAgIHNlY3Rpb24gI2JveENvbnRlbnQgZmlndXJlIGZpZ2NhcHRpb257XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICAgIGJvcmRlcjogMHB4IHNvbGlkICMyNDM1NDA7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gICAgICBzZWN0aW9uICNib3hDb250ZW50IGZpZ3VyZSBmaWdjYXB0aW9ue1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIH1cbiAgICAgIC8qQ29uZmlndXJhw6fDo28gaW1hZ2VucyBlIGxlZ2VuZGFzKi9cblxuLyogR2xvYmFsXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmZlYXR1cmVke1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4ubG9hZGVye1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbn1cblxuLmxvYWRlciAubG9hZGVyQ29udGVudHtcbiAgLypiYWNrZ3JvdW5kLXNpemU6IDU0cHggNTVweDsqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9nbG9iYWwvaW50ZXJzZWN0aW9uLWJsYWNrLmdpZlwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkY2RjO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29udGFpbmVyICNuYXZiYXIgLm5hdmJhci1yaWdodHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5jb250YWluZXIgI25hdmJhciAubmF2YmFyLm5hdiA+IGxpID4gYXtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuXG4gIC8qIERlcG9zaXRpb25zXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICNyZWNvbW1lbmRhdGlvbiAjbmF2YmFye1xuICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4IGF1dG87XG4gIH1cbiAgXG4gICNyZWNvbW1lbmRhdGlvbiAjbmF2YmFyIC5uYXZiYXItcmlnaHR7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDBweDtcbiAgfVxuICAjcmVjb21tZW5kYXRpb24gI25hdmJhciAubmF2YmFyLW5hdntcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICB9XG4gIFxuICBzZWN0aW9uI2RlcG9zaXRpb25ze1xuICAgIGJvcmRlcjogMHB4IHNvbGlkICM4ZmQ2ZmY7XG4gIH1cbiAgXG4gIHNlY3Rpb24jZGVwb3NpdGlvbnMgLmZsZXgtY2FwdGlvbiB7XG4gICAgLyogd2lkdGg6IDk2JTsgKi9cbiAgICBwYWRkaW5nOiAyJTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLDAsMCwuMyk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB9XG4gIFxuICBzZWN0aW9uI2RlcG9zaXRpb25zIGxpLmNzcyBhIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gIFxuICAvKlxuICBzZWN0aW9uI2RlcG9zaXRpb25zIC5mbGV4c2xpZGVyIHVsLnNsaWRlcyBsaVxuICBwLmRlcG9zaXRpb25zXG4gIHAuZmxleC1jYXB0aW9uXG4gICovXG4gIHNlY3Rpb24jZGVwb3NpdGlvbnMgLmZsZXhzbGlkZXIgdWwuc2xpZGVzIGxpIHAuZGVwb3NpdGlvbnN7XG4gICAgYm9yZGVyOiAwcHggc29saWQgIzI0MzU0MDtcbiAgICBtYXJnaW46IDBweCAxNXB4IDE1cHggMTVweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbiAgXG4gIHNlY3Rpb24jZGVwb3NpdGlvbnMgLmZsZXhzbGlkZXIgdWwuc2xpZGVzIGxpIC5mbGV4LWNhcHRpb257XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkMGQwZDA7XG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICB9XG4gIFxuICBzZWN0aW9uI2RlcG9zaXRpb25zIC5mbGV4LXZpZXdwb3J0e1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMGQwZDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxuICBcbiAgc2VjdGlvbiNkZXBvc2l0aW9ucyAuZmxleHNsaWRlciBvbC5mbGV4LWNvbnRyb2wtbmF2e1xuICAgIGJvcmRlcjogMHB4IHNvbGlkICM4ZmQ2ZmY7XG4gICAgYm90dG9tOiAtMzBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7XG4gIH1cbiAgXG4gIHNlY3Rpb24jZGVwb3NpdGlvbnMgLmZsZXhzbGlkZXIgZmlndXJle1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICBcbiAgc2VjdGlvbiNkZXBvc2l0aW9ucyAuZmxleHNsaWRlciBmaWd1cmUgaW1ne1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGJvcmRlcjogIDNweCBzb2xpZCAjOGZkNmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICAgIC8qIFBvcnRmb2xpb1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAvKm9sZCBwb3J0Zm9saW9cbiAgc2VjdGlvbiNwb3J0Zm9saW8gdWwjb25nYW1lU2l0ZXMgZmlndXJlIGltZ3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjQzNTQwO1xuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWF4LXdpZHRoOiA0ODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA0ODBweDtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICB9XG4gIFxuICBzZWN0aW9uI3BvcnRmb2xpbyAjYm94Q29udGVudCB1bCBsaS5zdWJUaXR1bG97XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG4gIH1cbiAgXG4gIHNlY3Rpb24jcG9ydGZvbGlvICNib3hDb250ZW50IHVsIGxpLnN1YlRpdHVsbyBwe1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkMGQwZDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMGQwZDA7XG4gIH1cbiAgXG4gIHNlY3Rpb24jcG9ydGZvbGlvICNib3hDb250ZW50IHVsIGxpLnN1YlRpdHVsbyBoNHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gIH1cbiAgb2xkIHBvcnRmb2xpbyovXG4gIFxuICBzZWN0aW9uI3BvcnRmb2xpbyAjYm94Q29udGVudCBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5zZWN0aW9uI3BvcnRmb2xpbyAjYm94Q29udGVudCBzZWN0aW9uIGFydGljbGV7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2YjZiNmI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtby1ib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5zZWN0aW9uI3BvcnRmb2xpbyAjYm94Q29udGVudCBhcnRpY2xlIGhlYWRlci5zdWJUaXR1bG97XG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCAjNmI2YjZiO1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgIzZiNmI2Yjtcbn1cblxuc2VjdGlvbiNwb3J0Zm9saW8gI2JveENvbnRlbnQgaGVhZGVyLnN1YlRpdHVsbyBoMntcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuLyogIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNmI2YjZiO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzZiNmI2YjsqL1xufVxuXG5zZWN0aW9uI3BvcnRmb2xpbyAjYm94Q29udGVudCBoZWFkZXIuc3ViVGl0dWxvIGgyIHNwYW57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDAuNWVtIGF1dG8gMHB4IGF1dG87XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2YjZiNmI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtby1ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5zZWN0aW9uI3BvcnRmb2xpbyAjYm94Q29udGVudCBoZWFkZXIuc3ViVGl0dWxvIGg0e1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxLjBlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbnNlY3Rpb24jcG9ydGZvbGlvIGFydGljbGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuc2VjdGlvbiNwb3J0Zm9saW8gI2JveENvbnRlbnQgLmV4dHJhe1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogMzIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbiAgLyogU2tpbGxzXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIFxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCBmaWd1cmV7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG4gIFxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3VwZXJpb3IgZmlndXJle1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gIH1cbiAgXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IC5zdXBlcmlvciBmaWd1cmUgaW1ne1xuICAgIGJvcmRlcjogMHB4IHNvbGlkICMyNDM1NDA7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIC8qICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4OyovXG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgc2VjdGlvbiNza2lsbHMgI2JveENvbnRlbnQgLmV4dHJhe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbiAgXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IC5leHRyYSBmaWd1cmUgaW1ne1xuICAgIGJvcmRlcjogMHB4IHNvbGlkICMyNDM1NDA7XG4gICAgLypNZWRpZGFzIFJlc3BvbnNpdm8qL1xuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWF4LXdpZHRoOiA3MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDcwcHg7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgc2VjdGlvbiNza2lsbHMgI2JveENvbnRlbnQgc2VjdGlvbntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCBzZWN0aW9uIGFydGljbGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNmI2YjZiO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAtbXMtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cbiAgXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IC5zdWJUaXR1bG97XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IC5zdWJUaXR1bG8gaDJ7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgLypib3JkZXItYm90dG9tOiAxcHggc29saWQgIzZiNmI2YjsqL1xuICB9XG4gIFxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3ViVGl0dWxvIGgyIHNwYW57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAwLjVlbSBhdXRvIDBweCBhdXRvO1xuICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNmI2YjZiO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAtbXMtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IC5zdWJUaXR1bG8gaDIgc3BhbiBhe1xuICAgIGNvbG9yOiAjMjMzNTQwO1xuICB9XG4gIFxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3ViVGl0dWxvIGgyIHNwYW46aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6ICM2YjZiNmI7XG4gIH1cbiAgXG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IC5zdWJUaXR1bG8gaDI6aG92ZXIgc3Bhbjpob3ZlciBhLFxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCAuc3ViVGl0dWxvIGgyIHNwYW46aG92ZXIgYTpob3ZlcntcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgc2VjdGlvbiNza2lsbHMgI2JveENvbnRlbnQgc2VjdGlvbiBhcnRpY2xlIGZvb3Rlci5mb290ZXItaW5mb3JtYXRpb257XG4gICAgcGFkZGluZzogMHB4IDE1cHg7XG4gIH1cbiAgc2VjdGlvbiNza2lsbHMgI2JveENvbnRlbnQgc2VjdGlvbiBhcnRpY2xlIGZvb3Rlci5mb290ZXItaW5mb3JtYXRpb24gcHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLypcbiAgc2VjdGlvbiNza2lsbHMgI2JveENvbnRlbnQgLnN1YlRpdHVsbyBoNHt0ZXh0LWFsaWduOiBsZWZ0O21hcmdpbjogMTVweCBhdXRvO2ZvbnQtc2l6ZTogMS4xZW07fVxuICBzZWN0aW9uI3NraWxscyAjYm94Q29udGVudCB1bCBsaS5qZWt5bGxyYnt9XG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IHVsIGxpLmpla3lsbHJiIGZpZ3VyZXt9XG4gIHNlY3Rpb24jc2tpbGxzICNib3hDb250ZW50IHVsIGxpLmpla3lsbHJiIGZpZ3VyZSBpbWd7fVxuICAqL1xuXG4gICAgLyogQmxvZ1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBzZWN0aW9uI2Jsb2cgLmNvbnRhaW5lciBoNXtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDVweCBhdXRvO1xuICB9XG4gIFxuICBzZWN0aW9uI2Jsb2cgLmNvbnRhaW5lciAuYXZhdGFye1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgc2VjdGlvbiNibG9nIC5jb250YWluZXIgLnJvdy5saW5le1xuICAgIGJvcmRlcjogMHB4IHNvbGlkIHJlZDtcbiAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICBzZWN0aW9uI2Jsb2cgLmNvbnRhaW5lciAucm93LmxpbmUgc3Bhbi5kYXRhe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzZiNmI2YjtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG4gIH1cbiAgXG4gIHNlY3Rpb24jYmxvZyAuY29udGFpbmVyIC5yb3cubGluZSBzcGFuLnRhZ3N7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICBzZWN0aW9uI2Jsb2cgLmNvbnRhaW5lciAubGluZXtcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgIzZiNmI2YjtcbiAgfVxuICBcbiAgc2VjdGlvbiNibG9nIGg1IHRpbWV7XG4gICAgY29sb3I6ICM2YjZiNmI7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgc2VjdGlvbiNibG9nIGg1IHNwYW4ucmVhZGluZy10aW1le1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgXG4gIHNlY3Rpb24jYmxvZyAubGFiZWwtc3VjY2Vzc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY3NzIzO1xuICB9XG4gIFxuICAvKkNvbmZpZ3VyYcOnw6NvIGltYWdlbnMgZSBsZWdlbmRhcyovXG4gIGFydGljbGUjYmxvZyBmaWd1cmV7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QwZDBkMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgXG4gICAgLypNZWRpZGFzIFJlc3BvbnNpdm8qL1xuICAgIG1heC13aWR0aDogMzIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgXG4gIGFydGljbGUjYmxvZyBmaWd1cmUgaW1ne1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyNDM1NDA7XG4gIFxuICAgIC8qTWVkaWRhcyBSZXNwb25zaXZvKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG1heC13aWR0aDogMzIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyptYXgtaGVpZ2h0OiA0MjBweDsqL1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cbiAgXG4gIGFydGljbGUjYmxvZyBmaWd1cmUgZmlnY2FwdGlvbntcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgIGJvcmRlcjogMHB4IHNvbGlkICMyNDM1NDA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICBcbiAgYXJ0aWNsZSNibG9nIGZpZ3VyZXtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG4gIFxuICBhcnRpY2xlI2Jsb2cgZmlndXJlIGZpZ2NhcHRpb257XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICBcbiAgYXJ0aWNsZSNibG9nIGZpZ3VyZXtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDBkMGQwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC8qTWVkaWRhcyBSZXNwb25zaXZvKi9cbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC8qQ29uZmlndXJhw6fDo28gaW1hZ2VucyBlIGxlZ2VuZGFzKi9cbiAgXG4gIC8qQkxPRyovXG4gIFxuICAvKiBQT1NUXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIC5ibG9nLXBvc3QgaDN7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbiAgfVxuICBcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgLnJvdy5saW5le1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIC5yb3cubGluZSBzcGFuLmRhdGF7XG4gICB9XG4gIFxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciAucm93LmxpbmUgc3Bhbi50YWdze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgLmJsb2ctdGl0bGUgaDR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjNmI2YjZiO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciAuYmxvZy10aXRsZSBoNCBzcGFuLmNhdGVnb3J5e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICB9XG4gIFxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciAuYmxvZy10aXRsZSBoNCBzcGFuLmRhdGFUaW1le1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICB9XG4gIFxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciAuYmxvZy10aXRsZSBoNCBzcGFuLmxhYmVse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjc3MjM7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgfVxuICBcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgc2VjdGlvbntcbiAgXG4gIH1cbiAgXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIHNlY3Rpb24gaGVhZGVye1xuICAgIG1hcmdpbjogMHB4IGF1dG8gMTBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciBzZWN0aW9uIGFydGljbGV7XG4gIFxuICB9XG4gIFxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciBzZWN0aW9uIGFydGljbGUgcHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIH1cbiAgXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIHNlY3Rpb24gZm9vdGVye1xuICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZDBkMGQwO1xuICAgIG1hcmdpbjogMTBweCBhdXRvIDBweCBhdXRvO1xuICB9XG4gIFxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciBzZWN0aW9uIC5hc3NpZ257XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMGQwZDA7XG4gICAgbWFyZ2luOiAwcHggYXV0byAxMHB4IGF1dG87XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgfVxuICBcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgc2VjdGlvbiBmb290ZXIgaDR7XG4gICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgI2QwZDBkMDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgfVxuICBcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgc2VjdGlvbiBmb290ZXIgcHtcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgI2QwZDBkMDtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICB9XG4gIFxuICBzZWN0aW9uI3Bvc3QgLmNvbnRhaW5lciBzZWN0aW9uIGZvb3RlciB1bHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgc2VjdGlvbiNwb3N0IC5jb250YWluZXIgc2VjdGlvbiBmb290ZXIgdWwgbGl7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xuICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgXG4gIHNlY3Rpb24jcG9zdCAuY29udGFpbmVyIHNlY3Rpb24gZm9vdGVyIHVsIGxpIGF7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgfVxuICAvKlBPU1QqL1xuXG5cbiAgICAvKiBMQUJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgc2VjdGlvbiNsYWIgLmNvbnRhaW5lciAucGFuZWwgLnBhbmVsLWJvZHl7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICBzZWN0aW9uI2xhYiAuY29udGFpbmVyIC5wYW5lbCBwLnRpdHVsb0xhYntcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgbWFyZ2luOiAxMHB4IGF1dG8gMTVweCBhdXRvO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkMGQwZDA7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QwZDBkMDtcbiAgfVxuICBcbiAgc2VjdGlvbiNsYWIgLmNvbnRhaW5lciBzZWN0aW9uI2xhYlByb2plY3Rze1xuICAgIG1hcmdpbjogMjBweCBhdXRvIDBweCBhdXRvO1xuICB9XG4gIFxuICBzZWN0aW9uI2xhYiAuY29udGFpbmVyIHNlY3Rpb24jbGFiUHJvamVjdHMgYXJ0aWNsZXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNmI2YjZiO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAtbXMtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cbiAgXG4gIHNlY3Rpb24jbGFiIC5jb250YWluZXIgc2VjdGlvbiNsYWJQcm9qZWN0cyBoMntcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG8gMTBweCBhdXRvO1xuICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCAjNmI2YjZiO1xuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjNmI2YjZiO1xuICB9XG4gIFxuICBzZWN0aW9uI2xhYiAuY29udGFpbmVyIHNlY3Rpb24jbGFiUHJvamVjdHMgaDIgc3BhbntcbiAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbiAgfVxuICBcbiAgc2VjdGlvbiNsYWIgLmNvbnRhaW5lciBzZWN0aW9uI2xhYlByb2plY3RzIGg1IHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMGQwZDA7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAtby1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIG1hcmdpbjogMC41ZW0gMC4zZW07XG4gIH1cbiAiXX0= */", '', '']]

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

module.exports = __webpack_require__(/*! /home/brunogaudino/local-repositories/brunogaudino.github.io/bg-app/src/styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map