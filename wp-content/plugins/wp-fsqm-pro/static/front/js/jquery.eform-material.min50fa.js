/*!
* eForm - WordPress Form Builder
*
* Autogenerated by Grunt on: 2018-03-31
* @version 3.8.0
* @author Swashata Ghosh (WPQuark)
* @license GPL-3.0
*/
!function(t,i,e,a){"use strict";var s="eFormMaterial",n={uiOnly:!1,propertyName:"value"};function l(i,e){this.element=i,this.jElement=t(this.element),this.settings=t.extend({},n,e),this._defaults=n,this._name=s,this.mainForm=this.jElement.find(".ipt_fsqm_main_form"),this.mainTab=this.jElement.find(".ipt_fsqm_main_tab"),this.tabNavWrap=this.mainTab.find(".ipt-eform-tab-nav-wrap").eq(0),this.tabNav=this.tabNavWrap.find("ul").eq(0),this.tabIndices=this.tabNav.find("> li"),this.tabScrollerLeft=this.tabNavWrap.find(".eform-tab-nav-left"),this.tabScrollerRight=this.tabNavWrap.find(".eform-tab-nav-right"),this.activeTabNotifier=this.mainTab.find(".eform-tab-active-notifier").eq(0),this.mainProgressBar=this.jElement.find(".ipt_fsqm_main_pb"),this.init()}l.prototype={init:function(){if(this.jElement.data("eFormUICompleted")){if(this.applyUI(),this.settings.uiOnly)return;this.applyED()}this.jElement.on("completedUI.eform",t.proxy(function(){this.applyUI(),this.settings.uiOnly||this.applyED()},this))},uiTabHandler:function(){this.mainTab.length&&(this._positionTabLavaLamp(),this._scrollMainTab(),this._checkTabScroller())},uiUpdateTextFields:function(){this._updateTextFields()},modValidationEngine:function(){this.mainForm.validationEngine("detach"),this.mainForm.validationEngine("attach",{promptPosition:"inline",onFieldFailure:function(i){var e=t(i);e.removeClass("invalid").removeClass("valid"),(e.hasClass("ipt_uif_text")||e.hasClass("ipt_uif_textarea")||e.hasClass("ipt_uif_select"))&&e.addClass("invalid").removeClass("valid")},onFieldSuccess:function(i){var e=t(i);e.removeClass("invalid").removeClass("valid"),(e.hasClass("ipt_uif_text")||e.hasClass("ipt_uif_textarea")||e.hasClass("ipt_uif_select"))&&""!=e.val()&&e.addClass("valid")}})},logEForm:function(){if(console&&console.log)try{var t=["background: #009688","color: #fff","line-height: 20px","box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)","text-align: center","padding: 10px 20px","border: 1px solid #00796b","line-height: 40px"].join(";");console.log("%cThis website is powered by eForm - Ultimate WordPress Form Builder. https://eform.live Amazing!",t)}catch(t){}},uiApplyLocationPicker:function(){var i=this;this.jElement.find(".ipt_uif_locationpicker").each(function(){i._updateTextFields(t(this))})},applyUI:function(){this.uiTabHandler(),this.uiUpdateTextFields(),this.modValidationEngine(),this.uiApplyLocationPicker(),this.logEForm()},edTabHandler:function(){if(this.mainTab.length){var e=this;this.mainTab.on("tabsactivate",function(t,i){setTimeout(function(){e._positionTabLavaLamp()},200),e._scrollMainTab(),e._checkTabScroller()}),t(i).on("resize",t.throttle(250,function(){e._positionTabLavaLamp(),e._checkTabScroller()})),this.tabNav.on("scroll checkTabScroll.eform iptUIFCShow iptUIFCHide",t.throttle(250,function(){e._checkTabScroller(),e._positionTabLavaLamp()})),this.tabNavWrap.on("click",".eform-tab-nav-right",function(){e._scrollTabNav("right")}),this.tabNavWrap.on("click",".eform-tab-nav-left",function(){e._scrollTabNav("left")})}},edApplyRipple:function(){Waves.attach(".eform-ripple",["waves-light"]),Waves.attach(".ipt_uif_button",["waves-light"]),Waves.init(),this.jElement.on("dataTablesCompleted.eform",function(){Waves.attach(".eform-ripple",["waves-light"]),Waves.attach(".ipt_uif_button",["waves-light"])})},edTextHandler:function(){var t=this;this.jElement.on("updateTextFields.eform datepickerClose.eform formReset.eform",function(){t._updateTextFields()})},edMaterialTextHandler:function(){var s="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";this.jElement.on("reset",function(i){var e=t(i.target);e.is("form")&&(e.find(s).removeClass("valid").removeClass("invalid"),e.find(s).each(function(){""===t(this).attr("value")&&t(this).siblings("label").removeClass("active")}))}),t(e).on("focus",s,function(){t(this).siblings("label, .prefix").addClass("active")}),t(e).on("blur",s,function(){var i=t(this),e=".prefix";0===i.val().length&&!0!==i[0].validity.badInput&&i.attr("placeholder")===a&&(e+=", label"),i.siblings(e).removeClass("active")});var n=t(".hiddendiv").first();n.length||(n=t('<div class="hiddendiv common"></div>'),t("body").append(n));var l=".materialize-textarea";function r(e){var a=e.css("font-family"),s=e.css("font-size"),l=e.css("line-height");s&&n.css("font-size",s),a&&n.css("font-family",a),l&&n.css("line-height",l),"off"===e.attr("wrap")&&n.css("overflow-wrap","normal").css("white-space","pre"),n.text(e.val()+"\n");var r=n.html().replace(/\n/g,"<br>");n.html(r),e.is(":visible")?n.css("width",e.width()):n.css("width",t(i).width()/2),e.css("height",n.height())}t(l).each(function(){var i=t(this);i.val().length&&r(i)}),this.jElement.on("keyup keydown autoresize",l,function(){r(t(this))});this.jElement.on("keyup.radio","input[type=radio], input[type=checkbox]",function(i){if(9===i.which){var e=t(this);return e.addClass("tabbed"),void e.one("blur",function(i){t(this).removeClass("tabbed")})}})},edLocationPicker:function(){var i=this;this.jElement.on("locationPicker.eform",".ipt_uif_locationpicker",function(){i._updateTextFields(t(this))})},applyED:function(){this.edTabHandler(),this.edApplyRipple(),this.edTextHandler(),this.edMaterialTextHandler(),this.edLocationPicker()},_positionTabLavaLamp:function(){var t=this._getActiveTabIndex(),i=t.offset(),e=this.tabNavWrap.offset(),a=t.width(),s=this.tabNavWrap.outerWidth(),n=(a-t.find("a").width())/2,l=i.left-e.left+n-10,r=s-l-a+2*n-20,o="left";parseFloat(this.activeTabNotifier.css("left"))<=l&&(o="right");var h=this;"left"==o?this.activeTabNotifier.css("left",l+"px"):this.activeTabNotifier.css("right",r+"px"),setTimeout(function(){"left"==o?h.activeTabNotifier.css("right",r+"px"):h.activeTabNotifier.css("left",l+"px")},100)},_scrollMainTab:function(){if(this._isTabScrollingNeeded()){var i=this,e=this._getActiveTabIndex(),a=0;this.tabIndices.each(function(){var i=t(this);return!!i.hasClass("iptUIFCHidden")||!i.is(e)&&void(a+=i.outerWidth())}),this.tabNav.animate({scrollLeft:a},100,function(){i.tabNav.trigger("checkTabScroll.eform")})}},_checkTabScroller:function(){if(!this._isTabScrollingNeeded())return this.tabNavWrap.addClass("scroll-not-needed"),this.tabScrollerLeft.addClass("disabled"),void this.tabScrollerRight.addClass("disabled");this.tabNavWrap.removeClass("scroll-not-needed");var t=this.tabNav.scrollLeft(),i=this._getTotalNavWidth(),e=this.tabNav.width();0===t?(this.tabScrollerLeft.addClass("disabled"),this.tabScrollerRight.removeClass("disabled")):t+e>=i?(this.tabScrollerLeft.removeClass("disabled"),this.tabScrollerRight.addClass("disabled")):(this.tabScrollerRight.removeClass("disabled"),this.tabScrollerLeft.removeClass("disabled"))},_scrollTabNav:function(t){if(a==t&&(t="right"),!this._isTabScrollingNeeded())return!1;var i=this.tabNav.scrollLeft(),e=this._getTotalNavWidth(),s=this.tabNav.width(),n=i,l=this;if(0===i){if("left"==t)return!1}else if(i+s>=e&&"right"==t)return!1;"left"==t?n-=100:n+=100,this.tabNav.animate({scrollLeft:n},100,function(){l.tabNav.trigger("checkTabScroll.eform")})},_isTabScrollingNeeded:function(){return this._getTotalNavWidth()>this.tabNavWrap.width()-this.mainTab.find(".eform-tab-nav").eq(0).width()},_getTotalNavWidth:function(){var i=0;return this.tabIndices.each(function(){var e=t(this);if(e.hasClass("iptUIFCHidden"))return!0;i+=e.outerWidth()}),i},_getActiveTabIndex:function(){var t=this.mainTab.tabs("option","active");return this.tabIndices.eq(t)},_getLastTabIndex:function(){var t=-1,i=!0,e=null;do{if(Math.abs(t)>this.tabIndices.length)return!1;this.tabIndices.eq(t).hasClass("iptUIFCHidden")?t--:(e=this.tabIndices.eq(t),console.log(e),i=!1)}while(i);return e},_getFirstTabIndex:function(){var t=0,i=!0,e=null;do{if(Math.abs(t)>this.tabIndices.length)return!1;this.tabIndices.eq(t).hasClass("iptUIFCHidden")?t++:(e=this.tabIndices.eq(t),i=!1)}while(i);return e},_updateTextFields:function(i){a==i&&(i=this.jElement),i.find("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each(function(i,e){t(e).val().length>0||e.autofocus||t(this).attr("placeholder")!==a||!0===t(e)[0].validity.badInput?t(this).siblings("label").addClass("active"):t(this).siblings("label").removeClass("active")})},yourOtherFunction:function(){}};var r={init:function(i){return this.each(function(){t.data(this,"plugin_"+s)||t.data(this,"plugin_"+s,new l(this,i))})}};t.fn[s]=function(i){return r[i]?r[i].apply(this,Array.prototype.slice.call(arguments,1)):("object"!=typeof i&&i?t.error("Method "+i+" does not exist on jQuery."+s):r.init.apply(this,arguments),this)}}(jQuery,window,document),jQuery(document).ready(function(t){t(".ipt_uif_front").eFormMaterial()});