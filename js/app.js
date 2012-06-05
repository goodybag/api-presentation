var slides = impress();
slides.init();

var routes = {
  "everything": function(slide){
    console.log("entering - everything");

  }
, "intro-1": function(slide){
    // Animate the arrow
    // this.animateArrow = setTimeout(function(){ $(slide).find('.arrow').addClass('animate-arrow'); }, 6000);
  }
}
, exitRoutes = {
  "everything": function(){
    console.log("exiting - everything");
  }
, "intro-1": function(slide){
    // Kill arrow animation
    // clearTimeout(this.animateArrow);
    // $(slide).find('.arrow').removeClass('animate-arrow');
  }
}, routeScope = {}; // shared scope between enter/exit routes
for (var key in routes) routeScope[key] = {};

$(document).on('impress:stepenter', function(e){
  routes.everything(e.target, e);
  var route = e.target.id;
  if (routes.hasOwnProperty(route)) routes[route].call(routeScope[route], e.target, e);
});

$(document).on('impress:stepleave', function(e){
  exitRoutes.everything();
  var route = e.target.id;
  if (exitRoutes.hasOwnProperty(route)) exitRoutes[route].call(routeScope[route], e.target, e);
});