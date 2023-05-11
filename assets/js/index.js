(function () {
	$(document).on("click", "#panel_tab1", function() {
		$(this).addClass('bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10')
		$("#panel_tab2").removeClass('bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10')
		$("#panel_tab3").removeClass('bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10')
		$("#panel_tab4").removeClass('bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10')
		$("#panel_img1").show();
		$("#panel_img2").hide();
		$("#panel_img3").hide();
		$("#panel_img4").hide();

	});

	$(document).on("click", "#panel_tab2", function() {
		$(this).addClass('bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10')
		$("#panel_tab1").removeClass('bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10')
		$("#panel_tab3").removeClass('bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10')
		$("#panel_tab4").removeClass('bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10')
		$("#panel_img1").hide();
		$("#panel_img2").show();
		$("#panel_img3").hide();
		$("#panel_img4").hide();
	})

	$(document).on("click", "#panel_tab3" ,function() {
		$(this).addClass('bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10')
		$("#panel_tab1").removeClass('bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10')
		$("#panel_tab2").removeClass('bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10')
		$("#panel_tab4").removeClass('bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10')
		$("#panel_img1").hide();
		$("#panel_img2").hide();
		$("#panel_img3").show();
		$("#panel_img4").hide();
	})

	$(document).on("click", "#panel_tab4" ,function() {
		$(this).addClass('bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10')
		$("#panel_tab1").removeClass('bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10')
		$("#panel_tab2").removeClass('bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10')
		$("#panel_tab3").removeClass('bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10')
		$("#panel_img1").hide();
		$("#panel_img2").hide();
		$("#panel_img3").hide();
		$("#panel_img4").show();
	})
})();

$(document).ready(function()
{
  $('input').css("border","1px red");
});