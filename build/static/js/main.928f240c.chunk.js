(this["webpackJsonpboba-finder"]=this["webpackJsonpboba-finder"]||[]).push([[0],{114:function(e,t,a){e.exports=a(204)},119:function(e,t,a){},204:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),o=a.n(s),i=(a(119),a(9)),c=a(10),l=a(12),p=a(11),d=a(13),u=a(36),m=a(112),g=a(96),v=a.n(g),h=a(208),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"MapMarker",key:this.props.key},r.a.createElement(h.a,{className:"icon",twoToneColor:"#eb2f96"}))}}]),t}(n.Component),L=a(206),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).handleSearch=function(e){var t=a.state,n=t.autocompleteService,r=t.currentUserLatLng;if(e.length>0){var s={input:e,location:r,radius:3e4};n.getQueryPredictions(s,(function(e){if(e){var t=e.map((function(e){return Object(u.a)({},e,{value:e.description})}));a.setState({options:t,suggestion:e})}}))}},a.onSelect=function(e){var t=a.state,n=(t.mapsApi,t.map);a.state.geoCoderService.geocode({address:e},(function(t){var r=t[0].geometry.location,s=r.lat(),o=r.lng(),i={lat:s,lng:o};a.props.addSingleMarker(s,o,e,t[0].place_id),n.panTo(i),a.props.updateCurrentUserLatLng(i)}))},a.state={map:a.props.map,mapsApi:a.props.mapsApi,addSingleMarker:a.props.addSingleMarker,updateCurrentUserLatLng:a.props.updateCurrentUserLatLng,suggestions:[],options:[],currentUserLatLng:a.props.currentUserLatLng,autocompleteService:a.props.autocompleteService,geoCoderService:a.props.geoCoderService,mapsLoaded:a.props.mapsLoaded},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){this.setState({map:this.props.map,mapsApi:this.props.mapsApi,currentUserLatLng:this.props.currentUserLatLng,autocompleteService:this.props.autocompleteService,geoCoderService:this.props.geoCoderService,mapsLoaded:this.props.mapsLoaded})}},{key:"render",value:function(){var e=this.state.options;return r.a.createElement("div",{className:"MapAutoComplete"},r.a.createElement(L.a,{options:e,onSearch:this.handleSearch,onSelect:this.onSelect,style:{width:200},placeholder:"Enter where you at",disabled:!this.props.mapsLoaded}))}}]),t}(n.PureComponent),b=a(209),E=a(210),k=a(211),C=a(23),y=function(e){function t(e){var a;Object(i.a)(this,t),a=Object(l.a)(this,Object(p.a)(t).call(this,e));var n=e.place;return a.place=n,a.name=n.name,a.formatted_address=n.formatted_address,a.price_level=n.price_level,a.imageUrl=n.photos[0].getUrl(),a.open=n.opening_hours.isOpen(),a.rating=n.rating,a.user_ratings_total=n.user_ratings_total,a.distance=n.distance,a.duration=n.duration,a.navigate=e.navigate,a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=r.a.createElement("span",null,"\xa0\xb7\xa0");this.computeHeaderBgColor(this.rating);return r.a.createElement("div",{className:"PlaceCard",onClick:function(){return e.props.navigate(e.place)}},r.a.createElement("div",{className:"header"},this.name),r.a.createElement("img",{src:this.imageUrl,alt:this.name}),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"sub-header"},r.a.createElement("span",null,this.rating," Rating"),t,r.a.createElement("span",null,this.user_ratings_total," Reviews")),r.a.createElement("span",{className:"center"},this.formatted_address),r.a.createElement("div",{className:"multi-detail"},r.a.createElement("span",null,new Array(this.price_level).fill("$").join("")),t,this.open?r.a.createElement("div",null,r.a.createElement("span",null,"Open "),r.a.createElement(b.a,null)):r.a.createElement("div",null,r.a.createElement("span",null,"Closed "),r.a.createElement(E.a,null))),r.a.createElement("div",{className:"multi-detail footer"},r.a.createElement(k.a,{className:"icon"}),r.a.createElement("span",null,this.distance),t,r.a.createElement("span",null,this.duration))))}},{key:"computeHeaderBgColor",value:function(e){return e>=4?C.green[4]:e>=3?C.orange[4]:C.red[4]}}]),t}(n.PureComponent),w=a(207),O=a(212),j=a(213),U=a(214);var M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).addSingleMarker=function(e,t,n,r){var s=new Map;s.set(r,{lat:e,lng:t,name:n,id:r}),console.log('Added new "'.concat(n,'" Marker')),a.setState({markers:s})},a.addMarker=function(e,t,n,r){var s=function(e){var t=new Map;return e.forEach((function(e,a){t.set(a,Object(u.a)({},e))})),t}(a.state.markers);s.has(r)?(s.get(r).lat=e,s.get(r).lng=t,console.log('Updated "'.concat(n,'" Marker'))):(s.set(r,{lat:e,lng:t,name:n,id:r}),console.log('Added new "'.concat(n,'" Marker'))),a.setState({markers:s})},a.handleSearch=function(){a.setState({searchResults:[],markers:new Map});var e=a.state,t=e.mapsApi,n=e.directionService,r=e.placesService,s=e.currentUserLatLng,o={location:s,type:["restaurant","cafe","food","points_of_interest","establishment"],query:"boba, bubble, tea, milk, drinks, pearls",rankBy:t.places.RankBy.DISTANCE};r.textSearch(o,(function(e){for(var t=e.length<10?e.length:10,r=function(t){var r=e[t],o=r.formatted_address,i={origin:s,destination:o,travelMode:"DRIVING"};n.route(i,(function(e,t){if("OK"===t){var n=e.routes[0].legs[0];if(n)n.duration.value/60<30&&(a.addSearchResult(r,n.distance.text,n.duration.text),a.addMarker(r.geometry.location.lat(),r.geometry.location.lng(),r.name,r.place_id))}}))},o=0;o<t;o++)r(o)}))},a.getCurrentLocation=function(){var e=a.state.map;navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){var n={lat:t.coords.latitude,lng:t.coords.longitude};e.panTo(n),a.updateCurrentUserLatLng(n),a.addSingleMarker(n.lat,n.lng,"You","")}))},a.updateCurrentUserLatLng=function(e){var t=a.state.mapsApi;a.setState({currentUserLatLng:new t.LatLng(e.lat,e.lng)})},a.navigate=function(e){var t=a.state.currentUserLatLng,n="".concat(t.lat().toString(),",\n\t\t\t").concat(t.lng().toString()),r=new URL("https://www.google.com/maps/dir/");r.searchParams.set("api",1),r.searchParams.set("origin",n),r.searchParams.set("destination",e.formatted_address),r.searchParams.set("travelmode","driving"),window.open(r)},a.state={pos:e.pos,mapsLoaded:!1,map:{},mapsApi:{},searchResults:[],markers:new Map,currentUserLatLng:{},autocompleteService:{},placesService:{},geoCoderService:{},directionService:{}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){this.setState({pos:this.props.pos})}},{key:"render",value:function(){var e=this;return this.state.pos?r.a.createElement("div",{className:"MapContainer"},r.a.createElement("section",{className:"GoogleMapReact"},r.a.createElement("div",{className:"search"},r.a.createElement(w.a,{type:"primary",icon:r.a.createElement(j.a,null),onClick:this.getCurrentLocation,disabled:!this.state.mapsLoaded}),r.a.createElement(S,{currentUserLatLng:this.state.currentUserLatLng,autocompleteService:this.state.autocompleteService,geoCoderService:this.state.geoCoderService,mapsApi:this.state.mapsApi,map:this.state.map,addSingleMarker:this.addSingleMarker,updateCurrentUserLatLng:this.updateCurrentUserLatLng,mapsLoaded:this.state.mapsLoaded}),r.a.createElement(w.a,{type:"primary",icon:r.a.createElement(U.a,null),onClick:this.handleSearch,disabled:!this.state.mapsLoaded},"Find Boba")),r.a.createElement(v.a,{bootstrapURLKeys:{key:"AIzaSyBwQDKEdMSdwUt9-ep22TOncRz0XtgCSQw",libraries:["places","directions"]},defaultZoom:12,defaultCenter:{lat:37.774929,lng:-122.419418},yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(t){var a=t.map,n=t.maps;return e.apiHasLoaded(a,n)}},Array.from(this.state.markers.values()).map((function(e){return r.a.createElement(f,{name:e.name,key:e.id,lat:e.lat,lng:e.lng})})))),r.a.createElement("div",{className:"results"},this.state.searchResults.map((function(t){return r.a.createElement(y,{place:t,key:t.id,navigate:e.navigate})})))):r.a.createElement("div",{className:"Loading"},r.a.createElement(O.a,{className:"icon-large"}))}},{key:"apiHasLoaded",value:function(e,t){var a=this,n=37.774929,r=-122.41948;if(this.setState({mapsLoaded:!0,map:e,mapsApi:t,autocompleteService:new t.places.AutocompleteService,placesService:new t.places.PlacesService(e),directionService:new t.DirectionsService,geoCoderService:new t.Geocoder}),navigator.geolocation)navigator.geolocation.getCurrentPosition((function(s){n=s.coords.latitude,r=s.coords.longitude;var o={lat:n,lng:r};e.setCenter(o),a.setState({currentUserLatLng:new t.LatLng(n,r)})}));else{var s={lat:n,lng:r};e.setCenter(s),this.setState({currentUserLatLng:new t.LatLng(n,r)})}}},{key:"addSearchResult",value:function(e,t,a){var n=[].concat(Object(m.a)(this.state.searchResults),[Object(u.a)({},e,{distance:t,duration:a})]);n=n.sort((function(e,t){return t.rating-e.rating})),this.setState({searchResults:n})}}]),t}(r.a.PureComponent),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={pos:null},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(M,{pos:this.state.pos}))}},{key:"componentDidMount",value:function(){var e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){var a={lat:t.coords.latitude,lng:t.coords.longitude};e.setState({pos:a})}))}}]),t}(r.a.PureComponent);a(203),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[114,1,2]]]);
//# sourceMappingURL=main.928f240c.chunk.js.map