
//页头动态
var cbpAnimatedHeader = (function() {
  var b = document.documentElement,
  g = document.querySelector(".cbp-af-header"),
  e = false,
  a = 1;
  function f() {
    window.addEventListener("scroll",
    function(h) {
      if (!e) {
        e = true;
        setTimeout(d, 2)
      }
    },
    false)
  }
  function d() {
    var h = c();
    if (h >= a) {
      classie.add(g, "cbp-af-header-shrink")
    } else {
      classie.remove(g, "cbp-af-header-shrink")
    }
    e = false
  }
  function c() {
    return window.pageYOffset || b.scrollTop
  }
  f()
})();







//数值累加动态效果

	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}



  // custom formatting example
  $('#count-number , #count-number1 , #count-number2 , #count-number3').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
 

  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
  
  
  
  
  
  
  //气泡提示
  
  
  var Util = Util || {};

Util.stopBubble = function(e) {
	e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true
};



Util.getPOP = function(self, tar, wid) {
	var aTop = self.offset().top;
	var aLeft = self.offset().left;
	var aHeight = self.outerHeight();
	var aWidth = self.outerWidth();
	var tmpWidth = tar.width();
	var tmpHeight = tar.height();
	var tmpTop = aTop;
	var tmpLeft = aLeft + aWidth / 2;
	var up = tar.find('.ar_up');
	var upInner = tar.find('.ar_up_in');
	if (self.hasClass('ToolTipCols')) {
		tmpWidth = tar.width()
	} else {
		if (tmpWidth > wid) {
			tmpWidth = wid
		} else {
			tmpWidth = tar.width()
		}
	};
	var tipY = $(window).height() - (aTop + tmpHeight);
	var tipX = $(window).width() - (aLeft + tmpWidth);
	if (tipX < Util.ToolTip.x) {
		tmpLeft = tmpLeft - (tmpWidth - aWidth / 2) + 5;
		up.css({
			left: 'auto',
			right: 5 + 'px',
			marginLeft: '0'
		});
		upInner.css({
			left: 'auto',
			right: 5 + 'px',
			marginLeft: '0'
		})
	} else {
		if (tmpLeft < tmpWidth) {
			tmpLeft = tmpLeft - aWidth / 2 - 5;
			up.css({
				left: 5 + 'px',
				marginLeft: '0'
			});
			upInner.css({
				left: 5 + 'px',
				marginLeft: '0'
			})
		} else {
			tmpLeft = tmpLeft - tmpWidth / 2
		}
	};
	if (tipY < Util.ToolTip.y) {
		tmpTop = tmpTop - aHeight - tmpHeight;
		up.addClass('ar_down');
		upInner.addClass('ar_down_in')
	} else {
		tmpTop = tmpTop + aHeight + 12;
		if (self.hasClass('ToolTipCols')) {
			upInner.css({
				'border-color': 'transparent transparent #e8ecef transparent'
			})

		}
	};
	tar.css({
		position: 'absolute',
		top: tmpTop,
		left: tmpLeft,
		width: tmpWidth,
		zIndex: Util.ToolTip.zindex
	});
	tar.fadeIn('slow')
};


Util.ToolTip = {
	x: 20,
	y: 20,
	zindex:9999,
	timer: 200,
	toolClass: 'tool-tip',
	tipClass: 'ToolTips',
	tipID: 'ToolTip',
	wid: 300,
	hei: 0,
	init: function() {
		$('.' + Util.ToolTip.tipClass).bind('mouseenter',
		function(e) {
			Util.stopBubble(e);
			var self = $(this);
			var txt = self.attr('data-text');
			Util.ToolTip.createHTML(self, txt)
		}).click(function(e) {
			Util.stopBubble(e);
			var self = $(this);
			var txt = self.attr('data-text');
			if (typeof($('#' + Util.ToolTip.tipID)[0]) === 'undefined') {
				Util.ToolTip.createHTML(self, txt)
			};
			return false
		})
	},
	createHTML: function(self, txt) {
		if (! (txt == '' || txt == 'undefined' || txt == null)) {
			$('#' + Util.ToolTip.tipID).remove();
			var items = [],
			html = '';
			items = $.trim(txt).split("|");
			if (self.hasClass('ToolTipCol')) {
				html += '<div id="' + Util.ToolTip.tipID + '" class="' + Util.ToolTip.toolClass + '" style="position:absolute;left:-10000px;top:-10000px;display:block">';
				html += '<div class="items tool-tip-col">' + items + '</div>'
			} else if (self.hasClass('ToolTipCols')) {
				html += '<div id="' + Util.ToolTip.tipID + '" class="' + Util.ToolTip.toolClass + '" style="width:320px;display:none">';
				html += '<div class="items tool-tip-cols">';
				html += '<ul class="title"><li class="y_0">类型</li><li class="y_1">说明</li></ul>';
				html += '<ul>';
				for (var i = 0; i < items.length; i++) {
					html += '<li class="y_' + i + '">' + items[i] + '</li>'
				};
				html += '</ul>';

				html += '</div>'
			};
			html += '<b class="ar_up"></b><b class="ar_up_in"></b></div>';
			$('body').append(html);
			var tar = $('#' + Util.ToolTip.tipID);
			tar.show(function() {
				Util.getPOP(self, tar, Util.ToolTip.wid)
			});
			Util.getPOP(self, tar, Util.ToolTip.wid);
			tar.mouseleave(function() {
				tar.remove()
			});
			tar.click(function(e) {
				Util.stopBubble(e)
			});
			$(document).click(function() {
				tar.remove()
			})
		}
	}
};

$(function() {
	Util.ToolTip.init();
	$('input.input').focus(function() {
		$(this).addClass('focus')
	}).blur(function() {
		$(this).removeClass('focus')
	})
});