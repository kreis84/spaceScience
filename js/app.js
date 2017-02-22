$(document).ready(
function()
{
	$('nav li').on('click', function()
	{
		$('nav li').each(function(){ $(this).removeClass('selectedNav');});
		$(this).addClass('selectedNav');
	});
});

