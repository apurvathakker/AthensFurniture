(function(n,t,i,r){function f(){var t=n('<div class="scrollbar-width-tester" style="width:50px;height:50px;overflow-y:scroll;top:-200px;left:-200px;"><div style="height:100px;"><\/div>'),i=0,r=0;return n("body").append(t),i=n(t).innerWidth(),r=n("div",t).innerWidth(),t.remove(),i-r}function u(t,i){this.el=t;this.$el=n(t);this.$scrollContentEl;this.$contentEl;this.$track;this.$scrollbar;this.dragOffset;this.flashTimeout;this.scrollDirection="vert";this.scrollOffsetAttr="scrollTop";this.sizeAttr="height";this.scrollSizeAttr="scrollHeight";this.offsetAttr="top";this.options=n.extend({},u.DEFAULTS,i);this.init()}SCROLLBAR_WIDTH=f();u.DEFAULTS={wrapContent:!0,autoHide:!0};u.prototype.init=function(){if(SCROLLBAR_WIDTH===0){this.$el.css("overflow","auto");return}if((this.$el.data("simplebar-direction")==="horizontal"||this.$el.hasClass("simplebar horizontal"))&&(this.scrollDirection="horiz",this.scrollOffsetAttr="scrollLeft",this.sizeAttr="width",this.scrollSizeAttr="scrollWidth",this.offsetAttr="left"),this.options.wrapContent&&this.$el.wrapInner('<div class="simplebar-scroll-content"><div class="simplebar-content"><\/div><\/div>'),this.$contentEl=this.$el.find(".simplebar-content"),this.$el.prepend('<div class="simplebar-track"><div class="simplebar-scrollbar"><\/div><\/div>'),this.$track=this.$el.find(".simplebar-track"),this.$scrollbar=this.$el.find(".simplebar-scrollbar"),this.$scrollContentEl=this.$el.find(".simplebar-scroll-content"),this.resizeScrollContent(),this.options.autoHide)this.$el.on("mouseenter",n.proxy(this.flashScrollbar,this));this.$scrollbar.on("mousedown",n.proxy(this.startDrag,this));this.$scrollContentEl.on("scroll",n.proxy(this.startScroll,this));this.resizeScrollbar();this.options.autoHide||this.showScrollbar()};u.prototype.startDrag=function(t){t.preventDefault();var r=t.pageY;this.scrollDirection==="horiz"&&(r=t.pageX);this.dragOffset=r-this.$scrollbar.offset()[this.offsetAttr];n(i).on("mousemove",n.proxy(this.drag,this));n(i).on("mouseup",n.proxy(this.endDrag,this))};u.prototype.drag=function(n){n.preventDefault();var t=n.pageY,i=null,r=null,u=null;this.scrollDirection==="horiz"&&(t=n.pageX);i=t-this.$track.offset()[this.offsetAttr]-this.dragOffset;r=i/this.$track[this.sizeAttr]();u=r*this.$contentEl[0][this.scrollSizeAttr];this.$scrollContentEl[this.scrollOffsetAttr](u)};u.prototype.endDrag=function(){n(i).off("mousemove",this.drag);n(i).off("mouseup",this.endDrag)};u.prototype.resizeScrollbar=function(){var t=this.$contentEl[0][this.scrollSizeAttr],f=this.$scrollContentEl[this.scrollOffsetAttr](),n=this.$track[this.sizeAttr](),i=n/t,r=Math.round(i*f)+2,u=Math.floor(i*(n-2))-2;n<t?(this.scrollDirection==="vert"?this.$scrollbar.css({top:r,height:u}):this.$scrollbar.css({left:r,width:u}),this.$track.show()):this.$track.hide()};u.prototype.startScroll=function(n){this.$el.trigger(n);this.flashScrollbar()};u.prototype.flashScrollbar=function(){this.resizeScrollbar();this.showScrollbar()};u.prototype.showScrollbar=function(){(this.$scrollbar.addClass("visible"),this.options.autoHide)&&(typeof this.flashTimeout=="number"&&t.clearTimeout(this.flashTimeout),this.flashTimeout=t.setTimeout(n.proxy(this.hideScrollbar,this),1e3))};u.prototype.hideScrollbar=function(){this.$scrollbar.removeClass("visible");typeof this.flashTimeout=="number"&&t.clearTimeout(this.flashTimeout)};u.prototype.resizeScrollContent=function(){this.scrollDirection==="vert"?(this.$scrollContentEl.width(this.$el.width()+SCROLLBAR_WIDTH),this.$scrollContentEl.height(this.$el.height())):(this.$scrollContentEl.width(this.$el.width()),this.$scrollContentEl.height(this.$el.height()+SCROLLBAR_WIDTH))};u.prototype.recalculate=function(){this.resizeScrollContent();this.resizeScrollbar()};u.prototype.getScrollElement=function(){return typeof this.$scrollContentEl=="undefined"?this.$el:this.$scrollContentEl};u.prototype.getContentElement=function(){return typeof this.$contentEl=="undefined"?this.$el:this.$contentEl};n(t).on("load",function(){n("[data-simplebar-direction]").each(function(){n(this).simplebar()})});var e=n.fn.simplebar;n.fn.simplebar=function(t){var f=arguments,i;return typeof t=="undefined"||typeof t=="object"?this.each(function(){n.data(this,"simplebar")||n.data(this,"simplebar",new u(this,t))}):typeof t=="string"?(this.each(function(){var r=n.data(this,"simplebar");r instanceof u&&typeof r[t]=="function"&&(i=r[t].apply(r,Array.prototype.slice.call(f,1)));t==="destroy"&&n.data(this,"simplebar",null)}),i!==r?i:this):void 0};n.fn.simplebar.Constructor=u;n.fn.simplebar.noConflict=function(){return n.fn.simplebar=e,this}})(jQuery,window,document);