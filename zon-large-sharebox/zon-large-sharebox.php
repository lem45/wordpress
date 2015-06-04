<?php
/*
Plugin Name: ZEIT ONLINE Large Sharebox
Plugin URI: http://www.zeit.de/
Description: Ersetzt Default Share Leiste mit großen Facebook und Twitter Share Buttons
Version: 0.1
Author: Holger Wiebe
Author URI: http://holgerwiebe.net/
Update Server: http://holgerwiebe.net/download/wp/
Min WP Version: 4.2.2
Max WP Version: 4.2.2
*/



function addScript() {

	echo '<script type="text/javascript" src="http://blog.zeit.de/wp-content/plugins/zon-large-sharebox/includes/js/scripts.js" ></script>';
	echo '<link href="http://blog.zeit.de/wp-content/plugins/zon-large-sharebox/includes/styles/zon-share-box-styles.css" rel="stylesheet" type="text/css" />';
	echo "<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>";
}


add_action('wp_head', 'addScript');


?>