/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {
  var header = document.querySelector('.navbar');
  var didScroll = false;
  var changeHeaderOn = 300;

	window.addEventListener( 'scroll', function( event ) {
		if( !didScroll ) {
			didScroll = true;
			setTimeout( scrollPage, 250 );
		}
	}, false );

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
		}
		else {
			classie.remove( header, 'navbar-shrink' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
})();
