$(function($) {
  $('.skill-bar-in').each(function() {
      var $this = $(this);
      var width = $this.data('width');
      $this.animate({ width: width }, 2000); // 2000ms = 2 seconds
  });
});
$(document).ready(function() {
  var sections = $('section');
  var navItems = $('.nav-menu li');

  $(window).on('scroll', function() {
      var currentScroll = $(this).scrollTop();
      var currentSection;

      sections.each(function() {
          var sectionTop = $(this).offset().top - 50; // Adjust for navbar height
          if (currentScroll >= sectionTop) {
              currentSection = $(this);
          }
      });

      var id = currentSection && currentSection.length ? currentSection.attr('id') : '';

      navItems.removeClass('active');
      if (id) {
          $('.nav-menu li a[href="#' + id + '"]').parent().addClass('active');
      }
  });
});
$(document).ready(function() {
  $('.toggler-menu').click(function() {
      $('.header-left ').toggleClass('menu-open');
  });
});
$(document).ready(function() {
  $('.nav-link').click(function(event) {
      event.preventDefault(); // Prevent the default anchor click behavior
      var target = $(this).attr('href'); // Get the target section ID

      // Remove 'active' class from all nav links
      $('.nav-link').removeClass('active');
      // Add 'active' class to the clicked nav link
      $(this).addClass('active');

      // Scroll to the target section smoothly
      $('html, body').animate({
          scrollTop: $(target).offset().top
      }, 800);
  });
});


$(document).ready( function() {

	var itemSelector = '.grid-item'; 

	var $container = $('#container').isotope({
		itemSelector: itemSelector,
		masonry: {
		  columnWidth: itemSelector,
		  isFitWidth: true
		}
	});

	//Ascending order
	var responsiveIsotope = [
		[480, 7],
		[720, 10]
	];

	var itemsPerPageDefault = 12;
	var itemsPerPage = defineItemsPerPage();
	var currentNumberPages = 1;
	var currentPage = 1;
	var currentFilter = '*';
	var filterAtribute = 'data-filter';
	var pageAtribute = 'data-page';
	var pagerClass = 'isotope-pager';

	function changeFilter(selector) {
		$container.isotope({
			filter: selector
		});
	}
	function goToPage(n) {
		currentPage = n;

		var selector = itemSelector;
			selector += ( currentFilter != '*' ) ? '['+filterAtribute+'="'+currentFilter+'"]' : '';
			selector += '['+pageAtribute+'="'+currentPage+'"]';

		changeFilter(selector);
	}

	function defineItemsPerPage() {
		var pages = itemsPerPageDefault;

		for( var i = 0; i < responsiveIsotope.length; i++ ) {
			if( $(window).width() <= responsiveIsotope[i][0] ) {
				pages = responsiveIsotope[i][1];
				break;
			}

			

		}

		return pages;
	}
	
	function setPagination() {

		var SettingsPagesOnItems = function(){

			var itemsLength = $container.children(itemSelector).length;
			
			var pages = Math.ceil(itemsLength / itemsPerPage);
			var item = 1;
			var page = 1;
			var selector = itemSelector;
				selector += ( currentFilter != '*' ) ? '['+filterAtribute+'="'+currentFilter+'"]' : '';
			
			$container.children(selector).each(function(){
				if( item > itemsPerPage ) {
					page++;
					item = 1;
				}
				$(this).attr(pageAtribute, page);
				item++;
			});

			currentNumberPages = page;

		}();

		var CreatePagers = function() {

			var $isotopePager = ( $('.'+pagerClass).length == 0 ) ? $('<div class="'+pagerClass+'"></div>') : $('.'+pagerClass);

			$isotopePager.html('');
			
			for( var i = 0; i < currentNumberPages; i++ ) {
				var $pager = $('<a href="javascript:void(0);" class="pager" '+pageAtribute+'="'+(i+1)+'"></a>');
					$pager.html(i+1);
					
					$pager.click(function(){
						var page = $(this).eq(0).attr(pageAtribute);
						goToPage(page);
					});

				$pager.appendTo($isotopePager);
			}

			$container.after($isotopePager);

		}();

	}

	setPagination();
	goToPage(1);


	$('.filters ul li').click(function(){
		var filter = $(this).attr(filterAtribute);
		currentFilter = filter;

		setPagination();
		goToPage(1);


	});
	$(window).resize(function(){
		itemsPerPage = defineItemsPerPage();
		setPagination();
	});


});

 $(document).ready( function() {   

// filter items on button click
$('.filter-button-group').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $('.grid').isotope({ filter: filterValue });
  $('.filter-button-group li').removeClass('active');
  $(this).addClass('active');
});
    })

	



	