if (typeof jQuery !== 'undefined') {
	
	var $jqry = jQuery.noConflict();

	// all jQuery-Code using $jqry
	
}
function fbshareCurrentPage()
    {window.open("https://www.facebook.com/sharer/sharer.php?u="+escape(window.location.href)+"&t=?wt_zmc=sm.ext.zonaudev.facebook.ref.zeitde.dskshare.link.x&utm_medium=sm&utm_source=facebook_zonaudev_ext&utm_campaign=ref&utm_content=zeitde_dskshare_link_x"+document.title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600'); }


function disableDefaultShareBar() {
	console.log("call disableDefaultShareBar")

	$jqry( document ).ready( function() {
		

			$jqry ( ".show_smk" ).css( "display" , "none");
			
			
			$newShareBox = '<div class="tb-newShareBox">';
			
			$newShareBox += '<a href="javascript:fbshareCurrentPage()" ><div class="tb-newShareButton tb-facebook">Auf Facebook teilen</div></a>';
			$newShareBox += '<a href="https://twitter.com/share" data-url="'+escape(window.location.href)+'?wt_zmc=sm.ext.zonaudev.twitter.ref.zeitde.dskshare.link.x&utm_medium=sm&utm_source=twitter_zonaudev_ext&utm_campaign=ref&utm_content=zeitde_dskshare_link_x" target="_blank" class=""><div class="tb-newShareButton tb-twitter">Twittern</div></a>';

			
			$newShareBox += '</div>'; // close tb-newShareBox
				
			
			$jqry( $newShareBox ).insertBefore( ".show_smk" );
			$jqry ( ".show_smk" ).remove();  // kill old social box
	});

}
disableDefaultShareBar();
