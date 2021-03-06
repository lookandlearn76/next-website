import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.lazyImages = $('.lazyload');
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $('.large-hero__title');
    this.createHeaderWaypoint();
    this.pageSections = $('.page-section');
    this.HeaderLinks = $('.primary-nav a');
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
  //  this.refreshWaypoints();
  }

  //refreshWaypoints(){
  //  this.lazyImages.load(function(){
  //    Waypoint.refreshAll();
  //  });
  //}

  addSmoothScrolling() {
    this.HeaderLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass('site-header--dark');
        } else {
          that.siteHeader.removeClass('site-header--dark');
        }
        offset: '20%'
      }
    });
  }


  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each(function(){
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "down") {
          var sameHeadLink = currentPageSection.getAttribute('data-matching-link');
          that.HeaderLinks.removeClass('is-current-link');
          $(sameHeadLink).addClass('is-current-link');
          }
        },
        offset:"40%",
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "up") {
          var sameHeadLink = currentPageSection.getAttribute('data-matching-link');
          that.HeaderLinks.removeClass('is-current-link');
          $(sameHeadLink).addClass('is-current-link');
          }
        },
        offset:"-40%",
      });
    });
  }
}
export default StickyHeader;
