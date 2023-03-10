function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../app/service.service */
    "./src/app/service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function AppComponent_div_496_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 130);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var Data_r2 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r0.imgUrl + Data_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
      }
    }

    function AppComponent_div_520_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_520_div_4_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var img_r5 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r6.getImage(img_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 130);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var img_r5 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r4.imgUrl + img_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
      }
    }

    function AppComponent_div_520_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, AppComponent_div_520_div_4_Template, 3, 1, "div", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 133);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var Data_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("#", Data_r3.trip_name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", Data_r3.image);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(service) {
        _classCallCheck(this, AppComponent);

        this.service = service;
        this.title = 'resume';
        this.view = 0;
        this.imgUrl = this.service.imageUrl;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
          this.getTravelData();
          this.getViewCount();
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this = this;

          this.service.post('getSocialData', {}, 0).subscribe(function (res) {
            // console.log(res['response'])
            _this.socialData = res['response'];
          });
        }
      }, {
        key: "getTravelData",
        value: function getTravelData() {
          var _this2 = this;

          this.service.post('getTripData', {}, 0).subscribe(function (res) {
            // console.log(res['response'])
            _this2.tripData = res['response'];
          });
        }
      }, {
        key: "getViewCount",
        value: function getViewCount() {
          var _this3 = this;

          this.service.post('incrementView', {}, 0).subscribe(function (res) {
            // console.log(res['response'])
            _this3.view = res['response']['count'];
          });
        }
      }, {
        key: "getImage",
        value: function getImage(img) {
          console.log("getting image" + img);
          this.showImg = this.imgUrl + img;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]));
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 525,
      vars: 3,
      consts: [["id", "mainNav", 1, "navbar", "navbar-expand-lg", "bg-secondary", "text-uppercase", "fixed-top"], [1, "container"], ["href", "#page-top", 1, "navbar-brand", "js-scroll-trigger"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-toggler-right", "text-uppercase", "font-weight-bold", "bg-primary", "text-white", "rounded"], [1, "fas", "fa-bars"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "mx-0", "mx-lg-1"], ["href", "#portfolio", 1, "nav-link", "py-3", "px-0", "px-lg-3", "rounded", "js-scroll-trigger"], ["href", "#about", 1, "nav-link", "py-3", "px-0", "px-lg-3", "rounded", "js-scroll-trigger"], ["href", "#contact", 1, "nav-link", "py-3", "px-0", "px-lg-3", "rounded", "js-scroll-trigger"], [1, "masthead", "bg-primary", "text-white", "text-center"], [1, "container", "d-flex", "align-items-center", "flex-column"], ["src", "assets/img/personel1.png", "alt", "", 1, "masthead-avatar", "mb-5"], [1, "masthead-heading", "text-uppercase", "mb-0"], [1, "divider-custom", "divider-light"], [1, "divider-custom-line"], [1, "divider-custom-icon"], [1, "fas", "fa-star"], [1, "masthead-subheading", "font-weight-light", "mb-0"], ["id", "portfolio", 1, "page-section", "portfolio"], [1, "page-section-heading", "text-center", "text-uppercase", "text-secondary", "mb-0"], [1, "divider-custom"], [1, "row"], [1, "col-md-6", "col-lg-4", "mb-5"], ["data-toggle", "modal", "data-target", "#portfolioModal0", 1, "portfolio-item", "mx-auto"], [1, "portfolio-item-caption", "d-flex", "align-items-center", "justify-content-center", "h-100", "w-100"], [1, "portfolio-item-caption-content", "text-center", "text-white"], [1, "fas", "fa-plus", "fa-3x"], ["src", "assets/img/portfolio/familyNew.png", "alt", "", 1, "img-fluid"], ["data-toggle", "modal", "data-target", "#portfolioModal1", 1, "portfolio-item", "mx-auto"], ["src", "assets/img/portfolio/workExp.png", "alt", "", 1, "img-fluid"], ["data-toggle", "modal", "data-target", "#portfolioModal2", 1, "portfolio-item", "mx-auto"], ["src", "assets/img/portfolio/download.png", "alt", "", 1, "img-fluid"], ["data-toggle", "modal", "data-target", "#portfolioModal3", 1, "portfolio-item", "mx-auto"], ["src", "assets/img/portfolio/hobbi.png", "alt", "", 1, "img-fluid"], [1, "col-md-6", "col-lg-4", "mb-5", "mb-lg-0"], ["data-toggle", "modal", "data-target", "#portfolioModal4", 1, "portfolio-item", "mx-auto"], ["src", "assets/img/portfolio/college.png", "alt", "", 1, "img-fluid"], [1, "col-md-6", "col-lg-4", "mb-5", "mb-md-0"], ["data-toggle", "modal", "data-target", "#portfolioModal5", 1, "portfolio-item", "mx-auto"], ["src", "assets/img/portfolio/social.png", "alt", "", 1, "img-fluid"], [1, "col-md-6", "col-lg-4"], ["data-toggle", "modal", "data-target", "#portfolioModal6", 1, "portfolio-item", "mx-auto"], ["src", "assets/img/portfolio/travel.png", "alt", "", 1, "img-fluid"], ["id", "about", 1, "page-section", "bg-primary", "text-white", "mb-0"], [1, "page-section-heading", "text-center", "text-uppercase", "text-white"], [1, "col-lg-4", "ml-auto"], [1, "lead"], [1, "col-lg-4", "mr-auto"], ["id", "contact", 1, "page-section"], [1, "col-lg-8", "mx-auto"], ["id", "contactForm", "name", "sentMessage", "novalidate", "novalidate"], [1, "control-group"], [1, "form-group", "floating-label-form-group", "controls", "mb-0", "pb-2"], ["id", "name", "type", "text", "placeholder", "Name", "required", "required", "data-validation-required-message", "Please enter your name.", 1, "form-control"], [1, "help-block", "text-danger"], ["id", "email", "type", "email", "placeholder", "Email Address", "required", "required", "data-validation-required-message", "Please enter your email address.", 1, "form-control"], ["id", "phone", "type", "tel", "placeholder", "Phone Number", "required", "required", "data-validation-required-message", "Please enter your phone number.", 1, "form-control"], ["id", "message", "rows", "5", "placeholder", "Message", "required", "required", "data-validation-required-message", "Please enter a message.", 1, "form-control"], ["id", "success"], [1, "form-group"], ["id", "sendMessageButton", "type", "submit", 1, "btn", "btn-primary", "btn-xl"], [1, "footer", "text-center"], [1, "col-lg-4", "mb-5", "mb-lg-0"], [1, "text-uppercase", "mb-4"], [1, "lead", "mb-0"], ["href", "https://www.facebook.com/Vishallsharma91", 1, "btn", "btn-outline-light", "btn-social", "mx-1"], [1, "fab", "fa-fw", "fa-facebook-f"], ["href", "https://twitter.com/vishalims095", 1, "btn", "btn-outline-light", "btn-social", "mx-1"], [1, "fab", "fa-fw", "fa-twitter"], ["href", "https://www.linkedin.com/in/vishal-sharma-4330839a/", 1, "btn", "btn-outline-light", "btn-social", "mx-1"], [1, "fab", "fa-fw", "fa-linkedin-in"], ["href", "#!", 1, "btn", "btn-outline-light", "btn-social", "mx-1"], [1, "fab", "fa-fw", "fa-dribbble"], [1, "col-lg-4"], ["aria-hidden", "true", 1, "fa", "fa-eye"], [1, "copyright", "py-4", "text-center", "text-white"], [1, "scroll-to-top", "d-lg-none", "position-fixed"], ["href", "#page-top", 1, "js-scroll-trigger", "d-block", "text-center", "text-white", "rounded"], [1, "fa", "fa-chevron-up"], ["id", "portfolioModal0", "tabindex", "-1", "role", "dialog", "aria-labelledby", "portfolioModal1Labe0", "aria-hidden", "true", 1, "portfolio-modal", "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-xl"], [1, "modal-content"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "fas", "fa-times"], [1, "modal-body", "text-center"], [1, "row", "justify-content-center"], [1, "col-lg-8"], ["id", "portfolioModal1Labe0", 1, "portfolio-modal-title", "text-secondary", "text-uppercase", "mb-0"], ["src", "assets/img/portfolio/familyNew.png", "alt", "", "height", "30%", "width", "30%", 1, "img-fluid", "rounded", "mb-5"], [1, "mb-5"], ["align", "left"], [2, "margin-top", "0in", "margin-right", "0in", "margin-bottom", "10.0pt", "margin-left", "0in", "line-height", "120%", "font-size", "13px", "font-family", "\"Georgia\",\"serif\"", "font-style", "italic", "text-align", "center"], [2, "font-size", "21px", "line-height", "120%", "font-family", "\"Arial Black\",\"sans-serif\""], [2, "margin-top", "0in", "margin-right", "0in", "margin-bottom", "10.0pt", "margin-left", "0in", "line-height", "120%", "font-size", "13px", "font-family", "\"Georgia\",\"serif\"", "font-style", "italic"], [2, "font-size", "27px", "line-height", "120%"], [2, "font-size", "19px", "line-height", "120%"], [2, "font-size", "29px", "line-height", "120%", "font-family", "\"Arial Black\",\"sans-serif\""], ["data-dismiss", "modal", 1, "btn", "btn-primary"], [1, "fas", "fa-times", "fa-fw"], ["id", "portfolioModal1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "portfolioModal1Label", "aria-hidden", "true", 1, "portfolio-modal", "modal", "fade"], ["id", "portfolioModal1Label", 1, "portfolio-modal-title", "text-secondary", "text-uppercase", "mb-0"], ["src", "assets/img/portfolio/experience.png", "alt", "", "height", "30%", "width", "30%", 1, "img-fluid", "rounded", "mb-5"], ["id", "portfolioModal2", "tabindex", "-1", "role", "dialog", "aria-labelledby", "portfolioModal2Label", "aria-hidden", "true", 1, "portfolio-modal", "modal", "fade"], ["id", "portfolioModal2Label", 1, "portfolio-modal-title", "text-secondary", "text-uppercase", "mb-0"], ["src", "assets/img/portfolio/download.png", "height", "30%", "width", "30%", "alt", "", 1, "img-fluid", "rounded", "mb-5"], ["id", "portfolioModal3", "tabindex", "-1", "role", "dialog", "aria-labelledby", "portfolioModal3Label", "aria-hidden", "true", 1, "portfolio-modal", "modal", "fade"], ["id", "portfolioModal3Label", 1, "portfolio-modal-title", "text-secondary", "text-uppercase", "mb-0"], ["src", "assets/img/portfolio/hobbi.png", "alt", "", "height", "30%", "width", "30%", 1, "img-fluid", "rounded", "mb-5"], [1, "column"], ["src", "assets/img/portfolio/explorePlace.png", "alt", "Snow", "title", "Explore new Places", "height", "100%", "width", "100%"], ["src", "assets/img/portfolio/cooking.png", "alt", "Forest", "title", "Cook for Fun", "height", "100%", "width", "100%"], ["src", "assets/img/portfolio/writing.png", "alt", "Mountains", "title", "Writing", "height", "100%", "width", "100%"], ["src", "assets/img/portfolio/music.png", "alt", "Snow", "title", "Music", "height", "100%", "width", "100%"], ["src", "assets/img/portfolio/socialNew.png", "alt", "Forest", "title", "Social Work", "height", "100%", "width", "100%"], ["src", "assets/img/portfolio/volunteer.png", "alt", "Mountains", "title", "Volunteer", "height", "100%", "width", "100%"], ["id", "portfolioModal4", "tabindex", "-1", "role", "dialog", "aria-labelledby", "portfolioModal4Label", "aria-hidden", "true", 1, "portfolio-modal", "modal", "fade"], ["id", "portfolioModal4Label", 1, "portfolio-modal-title", "text-secondary", "text-uppercase", "mb-0"], ["src", "assets/img/portfolio/college.png", "height", "30%", "width", "30%", "alt", "", 1, "img-fluid", "rounded", "mb-5"], ["align", "center"], ["id", "portfolioModal5", "tabindex", "-1", "role", "dialog", "aria-labelledby", "portfolioModal5Label", "aria-hidden", "true", 1, "portfolio-modal", "modal", "fade"], ["id", "portfolioModal5Label", 1, "portfolio-modal-title", "text-secondary", "text-uppercase", "mb-0"], ["src", "assets/img/portfolio/social.png", "height", "30%", "width", "30%", "alt", "", 1, "img-fluid", "rounded", "mb-5"], ["class", "column", 4, "ngFor", "ngForOf"], ["id", "portfolioModal6", "tabindex", "-1", "role", "dialog", "aria-labelledby", "portfolioModal6Label", "aria-hidden", "true", 1, "portfolio-modal", "modal", "fade"], ["id", "portfolioModal6Label", 1, "portfolio-modal-title", "text-secondary", "text-uppercase", "mb-0"], ["src", "assets/img/portfolio/travel.png", "height", "30%", "width", "30%", "alt", "", 1, "img-fluid", "rounded", "mb-5"], ["class", "row", 4, "ngFor", "ngForOf"], ["alt", "Snow", "title", "Explore Love", "height", "80%", "width", "80%", 3, "src"], ["id", "selfie", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-body", "img-modal"], ["href", "JavaScript:void(0);", "data-toggle", "modal", "data-target", "#selfie", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Vishal Sharma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Menu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "header", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h1", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Full Stack Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Backend Developer - RHA Volunteer - Solo Traveller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "section", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h2", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "section", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "h2", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "p", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "IT professional with 4+ years of experience in Backend Node.js, Express js, Angular, Oracle, Mysql, Mongo. Cohesive team worker, having strong analytical, problem solving and interpersonal skills.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "p", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Technical expertise in MEAN Stack application development, application maintenance & bug fixing. Proficient in development using JavaScript. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "p", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "I also works as a volunteer in Robin Hood Army. The Robin Hood Army is a volunteer-based Zero funds organisation that works to get surplus food from restaurants to the less fortunate sections of society in cities across India and 12 other countries.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "p", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "I personally belive in \"Love all serve all help ever hurt never.\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "section", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "h2", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Contact Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "form", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](131, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](136, "textarea", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](138, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "footer", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "h4", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "p", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "BabuBank, JhaJha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](151, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "Bihar, 811308");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "h4", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Social Links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](157, "i", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](159, "i", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "a", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](161, "i", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "a", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](163, "i", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "h4", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Contact Info.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "p", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Email : vishallsharma07@gmail.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "Mobile : +91-9555011355");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](172, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "Copyright \xA9 www.vishalsharma.me 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](180, "i", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "button", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "span", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](186, "i", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "h5", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "Family Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](194, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](196, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](197, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](198, "img", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "p", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "span", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "BIO-DATA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "span", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "Full Name\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0\xA0: Vishal Sharma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "Gender\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0\xA0 \xA0 \xA0 \xA0 \xA0\xA0: Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "Date of Birth\xA0 \xA0\xA0\xA0 \xA0 \xA0 \xA0 \xA0\xA0: Oct/20/1994");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "Height\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0\xA0\xA0 \xA0 \xA0 \xA0 \xA0\xA0: 165 cm (5\u20194)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, "Complexion\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0\xA0: Fair");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "Caste\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0: Sharma (carpenter)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "Religion\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0\xA0 \xA0 \xA0 \xA0 \xA0\xA0: Hindu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "Education\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0: MCA (IMS Ghaziabad, 2015-2018)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "Job\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0\xA0 \xA0 \xA0 \xA0 \xA0\xA0: IT Analyst");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "Working In \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0\xA0: TCS, Noida V");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "Hobbies\xA0 \xA0\xA0\xA0 \xA0 \xA0 \xA0 \xA0\xA0\xA0 \xA0 \xA0 \xA0 \xA0\xA0: Travel, NGO Volunteer, Social works");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "span", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, "Family Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, "Father\u2019s Name\xA0\xA0 \xA0 \xA0 \xA0 \xA0\xA0\xA0 \xA0 \xA0 \xA0 \xA0\xA0: Dinesh Sharma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, "Father\u2019s Occupation \xA0 \xA0 \xA0 \xA0 \xA0: Retired");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "Mother\u2019s Name \xA0 \xA0 \xA0 \xA0\xA0\xA0 \xA0 \xA0 \xA0 \xA0\xA0: Nirmala Devi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "Mother\u2019s \xA0Occupation \xA0 \xA0 \xA0\xA0: House Wife");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "Brothers\xA0 \xA0 \xA0 \xA0 \xA0 \xA0\xA0\xA0 \xA0 \xA0 \xA0 \xA0\xA0\xA0 \xA0 \xA0 \xA0 \xA0\xA0: N/A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, "Sisters\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0\xA0\xA0 \xA0 \xA0 \xA0 \xA0\xA0\xA0 \xA0 \xA0 \xA0 \xA0\xA0: Nisha Sharma(unmarried)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "Contact No.\xA0 \xA0 \xA0\xA0\xA0 \xA0 \xA0 \xA0 \xA0\xA0\xA0 \xA0 \xA0 \xA0 \xA0\xA0: 9555011355");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, "Native Place\xA0 \xA0 \xA0\xA0 \xA0 \xA0 \xA0 \xA0\xA0\xA0 \xA0 \xA0 \xA0 \xA0\xA0: BabuBank, Jhajha, Bihar (811308)\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "Current Place \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 : Ghaziabad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "button", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](294, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "Close Window");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "button", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "span", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](301, "i", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "h5", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "Experience & Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](309, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](311, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](312, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](313, "img", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](317, "#Full Stack developer with 4+ years experience @TCS Noida (Feb/2022 - Present).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, "#MEAN Stack developer @Vinove Software & Services - Noida (Nov/2020 - Feb/2022)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, "#NodeJs developer @Fluper Ltd. - Noida (Jan/2018 - Nov/2020)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, "Skills ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](325, "1. Backend development like database design queries how to manage backend services.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](327, "2. How to create handle server AWS EC2, IAM, Lambda, S3, SQS, SNS, deployment and manage.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, "3. Angular 6+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, "4. Firebase queries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, "5. Database (mySql and Mongo DB)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335, "6. Also worked on ADO,ASP, MVC, LINQ (for support role)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, "7. Using Code repository GitHub, bitbucket, gitlab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](339, "8. Other Technologies : Redis, bigQuery, React (basic), CI/CD, payment gateways etc.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](341, "Certifications ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](343, "1. Oracle Autonomous Database Cloud 2019 Certified Specialist (Oracle)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](345, "2. AI Digital skill certification (Accenture)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, "3. .net and Oracle four months training (Agile Softech Pvt. Ltd.)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](349, "4. Microsoft .net certification (Microsoft)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "button", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](351, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](352, "Close Window");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "button", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "span", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](358, "i", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "h2", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](364, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](366, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](368, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](369, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](370, "img", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](373, "# 1. TangoRide : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](375, "Tangoride is a ridesharing and carpooling app, but it\u2019s also intended to be a gateway to a community of likeminded people. Drivers are able to offer instant or scheduled lifts to fellow passengers who are heading in a similar direction. This way, both parties are able to reduce the cost of their journey in a safe, social and enjoyable way - all whilst reducing traffic congestion and contributing to the environment.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "# 2. DoorStep : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](379, "DoorStep Dispatch is a food & package delivery management system. Browse through over 50 registered restaurants and order your favorite dishes. Pick your favorite restaurant and get your favorite meal delivered to you right at your doorstep in minutes. Receive and send items within minutes in your convenience. With the DoorStep Dispatch app you can TRACK your delivery in REAL-TIME giving you rock-solid ETA you can count on! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](381, "# 3. Mendopick : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](383, "MenDoPick is the latest delivery app that uses your mobile phone as your address. This means no more annoying phone calls asking for directions. Just share your location and we will deliver your package, whatever and wherever you are. You can schedule it now or we can deliver it later. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "button", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](385, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](386, "Close Window");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "button", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "span", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](392, "i", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](395, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "h2", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](398, "Hobbies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](400, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](402, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](403, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](404, "img", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](406, "\u201CPersistence. Perfection. Patience. Power. Prioritize your passion. It keeps you sane.\u201D\u2015 Criss Jami, Killosophy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](407, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](409, "img", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](411, "img", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](413, "img", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](415, "img", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](417, "img", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](418, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](419, "img", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](420, "button", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](421, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](422, "Close Window");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](423, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](426, "button", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "span", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](428, "i", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](429, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](431, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](432, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "h2", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](434, "Academic Qualification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](435, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](436, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](437, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](438, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](439, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](440, "img", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](442, " \"Education is the passport to the future, for tomorrow belongs to those who prepare for it today.\" \u2013 Malcolm X ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](443, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "h4", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](445, "1. Senior Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](446, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](447, "\u201CE.C. Railway High School, JhaJha, Graduated in 2009 With ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](449, "67%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](450, "\u201D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "h4", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](452, "2. Higher Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](454, "\u201CD.S.M. College, JhaJha, Graduated in 2011 With ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](455, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](456, "57%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](457, "\u201D \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "h4", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](459, "3. Bachelor's Degree");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](460, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](461, "\u201CIBC, Patna, Graduated in 2014 With ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](462, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](463, "68%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](464, "\u201D \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](465, "h4", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](466, "4. Master's Degree");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](467, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](468, "\u201CIMS, Ghaziabad, Graduated in 2018 With ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](469, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](470, "74%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](471, "\u201D \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "button", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](473, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](474, "Close Window");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](476, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](477, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](478, "button", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](479, "span", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](480, "i", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](481, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](482, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](484, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](485, "h2", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](486, "Social Life");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](487, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](488, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](490, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](491, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](492, "img", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](493, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](494, "\"Not all of us can do great things, but we can do small things with great love.\" - Mother Teresa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](496, AppComponent_div_496_Template, 2, 1, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](497, "button", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](498, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](499, "Close Window");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](500, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](501, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](502, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](503, "button", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](504, "span", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](505, "i", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](507, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](508, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](509, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](510, "h2", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](511, "Travel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](512, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](513, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](514, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](515, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](516, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](517, "img", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](518, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](519, " \u201CLife is short and the world is wide.\u201D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](520, AppComponent_div_520_Template, 12, 2, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](521, "button", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](522, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](523, "Close Window");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](524, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Total View : ", ctx.view, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](323);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.socialData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.tripData);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: [".column[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 33.33%;\r\n  padding: 5px;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0VBQW9FO0FBQ3BFO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFFQSx3Q0FBd0M7QUFDeEM7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRocmVlIGltYWdlIGNvbnRhaW5lcnMgKHVzZSAyNSUgZm9yIGZvdXIsIGFuZCA1MCUgZm9yIHR3bywgZXRjKSAqL1xyXG4uY29sdW1uIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMzMuMzMlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIGltYWdlIGNvbnRhaW5lcnMgKi9cclxuLnJvdzo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _app_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/service.service.ts":
  /*!************************************!*\
    !*** ./src/app/service.service.ts ***!
    \************************************/

  /*! exports provided: ServiceService */

  /***/
  function srcAppServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceService", function () {
      return ServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ServiceService = /*#__PURE__*/function () {
      function ServiceService(routetingPage, http) {
        _classCallCheck(this, ServiceService);

        this.routetingPage = routetingPage;
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.imageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].imageUrl;
      }

      _createClass(ServiceService, [{
        key: "navigatePage",
        value: function navigatePage(page) {
          this.routetingPage.navigate(['/' + page]);
        }
      }, {
        key: "post",
        value: function post(url, data, isHeader) {
          if (isHeader == 1) {
            console.log("header", this.headers);
            return this.http.post(this.baseUrl + url, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'access_token': localStorage.getItem('token')
              })
            });
          } else {
            return this.http.post(this.baseUrl + url, data);
          }
        }
      }, {
        key: "get",
        value: function get(url, isHeader) {
          if (isHeader == 1) {
            return this.http.get(this.baseUrl + url, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'access_token': localStorage.getItem('token')
              })
            });
          } else {
            return this.http.get(this.baseUrl + url);
          }
        }
      }]);

      return ServiceService;
    }();

    ServiceService.??fac = function ServiceService_Factory(t) {
      return new (t || ServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ServiceService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: ServiceService,
      factory: ServiceService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      baseUrl: 'http://18.178.232.203:3000/user/',
      imageUrl: "http://18.178.232.203:3000",
      // baseUrl : 'http://localhost:3000/user/',
      // imageUrl : "http://localhost:3000",
      production: true
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\resume\resume\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map