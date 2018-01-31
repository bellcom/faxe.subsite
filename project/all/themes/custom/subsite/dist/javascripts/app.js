'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery');
}

+function ($) {
  'use strict';

  var version = $.fn.jquery.split(' ')[0].split('.');
  if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1 || version[0] > 3) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4');
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap');

    var transEndEventNames = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    };

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] };
      }
    }

    return false; // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false;
    var $el = this;
    $(this).one('bsTransitionEnd', function () {
      called = true;
    });
    var callback = function callback() {
      if (!called) $($el).trigger($.support.transition.end);
    };
    setTimeout(callback, duration);
    return this;
  };

  $(function () {
    $.support.transition = transitionEnd();

    if (!$.support.transition) return;

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function handle(e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      }
    };
  });
}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]';
  var Alert = function Alert(el) {
    $(el).on('click', dismiss, this.close);
  };

  Alert.VERSION = '3.3.7';

  Alert.TRANSITION_DURATION = 150;

  Alert.prototype.close = function (e) {
    var $this = $(this);
    var selector = $this.attr('data-target');

    if (!selector) {
      selector = $this.attr('href');
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector);

    if (e) e.preventDefault();

    if (!$parent.length) {
      $parent = $this.closest('.alert');
    }

    $parent.trigger(e = $.Event('close.bs.alert'));

    if (e.isDefaultPrevented()) return;

    $parent.removeClass('in');

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove();
    }

    $.support.transition && $parent.hasClass('fade') ? $parent.one('bsTransitionEnd', removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
  };

  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.alert');

      if (!data) $this.data('bs.alert', data = new Alert(this));
      if (typeof option == 'string') data[option].call($this);
    });
  }

  var old = $.fn.alert;

  $.fn.alert = Plugin;
  $.fn.alert.Constructor = Alert;

  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old;
    return this;
  };

  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close);
}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function Button(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Button.DEFAULTS, options);
    this.isLoading = false;
  };

  Button.VERSION = '3.3.7';

  Button.DEFAULTS = {
    loadingText: 'loading...'
  };

  Button.prototype.setState = function (state) {
    var d = 'disabled';
    var $el = this.$element;
    var val = $el.is('input') ? 'val' : 'html';
    var data = $el.data();

    state += 'Text';

    if (data.resetText == null) $el.data('resetText', $el[val]());

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state]);

      if (state == 'loadingText') {
        this.isLoading = true;
        $el.addClass(d).attr(d, d).prop(d, true);
      } else if (this.isLoading) {
        this.isLoading = false;
        $el.removeClass(d).removeAttr(d).prop(d, false);
      }
    }, this), 0);
  };

  Button.prototype.toggle = function () {
    var changed = true;
    var $parent = this.$element.closest('[data-toggle="buttons"]');

    if ($parent.length) {
      var $input = this.$element.find('input');
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false;
        $parent.find('.active').removeClass('active');
        this.$element.addClass('active');
      } else if ($input.prop('type') == 'checkbox') {
        if ($input.prop('checked') !== this.$element.hasClass('active')) changed = false;
        this.$element.toggleClass('active');
      }
      $input.prop('checked', this.$element.hasClass('active'));
      if (changed) $input.trigger('change');
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'));
      this.$element.toggleClass('active');
    }
  };

  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.button');
      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

      if (!data) $this.data('bs.button', data = new Button(this, options));

      if (option == 'toggle') data.toggle();else if (option) data.setState(option);
    });
  }

  var old = $.fn.button;

  $.fn.button = Plugin;
  $.fn.button.Constructor = Button;

  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old;
    return this;
  };

  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    var $btn = $(e.target).closest('.btn');
    Plugin.call($btn, 'toggle');
    if (!$(e.target).is('input[type="radio"], input[type="checkbox"]')) {
      // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
      e.preventDefault();
      // The target component still receive the focus
      if ($btn.is('input,button')) $btn.trigger('focus');else $btn.find('input:visible,button:visible').first().trigger('focus');
    }
  }).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type));
  });
}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function Carousel(element, options) {
    this.$element = $(element);
    this.$indicators = this.$element.find('.carousel-indicators');
    this.options = options;
    this.paused = null;
    this.sliding = null;
    this.interval = null;
    this.$active = null;
    this.$items = null;

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this));

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element.on('mouseenter.bs.carousel', $.proxy(this.pause, this)).on('mouseleave.bs.carousel', $.proxy(this.cycle, this));
  };

  Carousel.VERSION = '3.3.7';

  Carousel.TRANSITION_DURATION = 600;

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  };

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return;
    switch (e.which) {
      case 37:
        this.prev();break;
      case 39:
        this.next();break;
      default:
        return;
    }

    e.preventDefault();
  };

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false);

    this.interval && clearInterval(this.interval);

    this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));

    return this;
  };

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item');
    return this.$items.index(item || this.$active);
  };

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active);
    var willWrap = direction == 'prev' && activeIndex === 0 || direction == 'next' && activeIndex == this.$items.length - 1;
    if (willWrap && !this.options.wrap) return active;
    var delta = direction == 'prev' ? -1 : 1;
    var itemIndex = (activeIndex + delta) % this.$items.length;
    return this.$items.eq(itemIndex);
  };

  Carousel.prototype.to = function (pos) {
    var that = this;
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'));

    if (pos > this.$items.length - 1 || pos < 0) return;

    if (this.sliding) return this.$element.one('slid.bs.carousel', function () {
      that.to(pos);
    }); // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle();

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos));
  };

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true);

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end);
      this.cycle(true);
    }

    this.interval = clearInterval(this.interval);

    return this;
  };

  Carousel.prototype.next = function () {
    if (this.sliding) return;
    return this.slide('next');
  };

  Carousel.prototype.prev = function () {
    if (this.sliding) return;
    return this.slide('prev');
  };

  Carousel.prototype.slide = function (type, next) {
    var $active = this.$element.find('.item.active');
    var $next = next || this.getItemForDirection(type, $active);
    var isCycling = this.interval;
    var direction = type == 'next' ? 'left' : 'right';
    var that = this;

    if ($next.hasClass('active')) return this.sliding = false;

    var relatedTarget = $next[0];
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    });
    this.$element.trigger(slideEvent);
    if (slideEvent.isDefaultPrevented()) return;

    this.sliding = true;

    isCycling && this.pause();

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active');
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
      $nextIndicator && $nextIndicator.addClass('active');
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }); // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type);
      $next[0].offsetWidth; // force reflow
      $active.addClass(direction);
      $next.addClass(direction);
      $active.one('bsTransitionEnd', function () {
        $next.removeClass([type, direction].join(' ')).addClass('active');
        $active.removeClass(['active', direction].join(' '));
        that.sliding = false;
        setTimeout(function () {
          that.$element.trigger(slidEvent);
        }, 0);
      }).emulateTransitionEnd(Carousel.TRANSITION_DURATION);
    } else {
      $active.removeClass('active');
      $next.addClass('active');
      this.sliding = false;
      this.$element.trigger(slidEvent);
    }

    isCycling && this.cycle();

    return this;
  };

  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.carousel');
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);
      var action = typeof option == 'string' ? option : options.slide;

      if (!data) $this.data('bs.carousel', data = new Carousel(this, options));
      if (typeof option == 'number') data.to(option);else if (action) data[action]();else if (options.interval) data.pause().cycle();
    });
  }

  var old = $.fn.carousel;

  $.fn.carousel = Plugin;
  $.fn.carousel.Constructor = Carousel;

  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old;
    return this;
  };

  // CAROUSEL DATA-API
  // =================

  var clickHandler = function clickHandler(e) {
    var href;
    var $this = $(this);
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
    if (!$target.hasClass('carousel')) return;
    var options = $.extend({}, $target.data(), $this.data());
    var slideIndex = $this.attr('data-slide-to');
    if (slideIndex) options.interval = false;

    Plugin.call($target, options);

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex);
    }

    e.preventDefault();
  };

  $(document).on('click.bs.carousel.data-api', '[data-slide]', clickHandler).on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler);

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this);
      Plugin.call($carousel, $carousel.data());
    });
  });
}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function Collapse(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Collapse.DEFAULTS, options);
    this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
    this.transitioning = null;

    if (this.options.parent) {
      this.$parent = this.getParent();
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger);
    }

    if (this.options.toggle) this.toggle();
  };

  Collapse.VERSION = '3.3.7';

  Collapse.TRANSITION_DURATION = 350;

  Collapse.DEFAULTS = {
    toggle: true
  };

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width');
    return hasWidth ? 'width' : 'height';
  };

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return;

    var activesData;
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing');

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse');
      if (activesData && activesData.transitioning) return;
    }

    var startEvent = $.Event('show.bs.collapse');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented()) return;

    if (actives && actives.length) {
      Plugin.call(actives, 'hide');
      activesData || actives.data('bs.collapse', null);
    }

    var dimension = this.dimension();

    this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded', true);

    this.$trigger.removeClass('collapsed').attr('aria-expanded', true);

    this.transitioning = 1;

    var complete = function complete() {
      this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');
      this.transitioning = 0;
      this.$element.trigger('shown.bs.collapse');
    };

    if (!$.support.transition) return complete.call(this);

    var scrollSize = $.camelCase(['scroll', dimension].join('-'));

    this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
  };

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return;

    var startEvent = $.Event('hide.bs.collapse');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented()) return;

    var dimension = this.dimension();

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight;

    this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false);

    this.$trigger.addClass('collapsed').attr('aria-expanded', false);

    this.transitioning = 1;

    var complete = function complete() {
      this.transitioning = 0;
      this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse');
    };

    if (!$.support.transition) return complete.call(this);

    this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
  };

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']();
  };

  Collapse.prototype.getParent = function () {
    return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function (i, element) {
      var $element = $(element);
      this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
    }, this)).end();
  };

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in');

    $element.attr('aria-expanded', isOpen);
    $trigger.toggleClass('collapsed', !isOpen).attr('aria-expanded', isOpen);
  };

  function getTargetFromTrigger($trigger) {
    var href;
    var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); // strip for ie7

    return $(target);
  }

  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.collapse');
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
      if (!data) $this.data('bs.collapse', data = new Collapse(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.collapse;

  $.fn.collapse = Plugin;
  $.fn.collapse.Constructor = Collapse;

  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old;
    return this;
  };

  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this = $(this);

    if (!$this.attr('data-target')) e.preventDefault();

    var $target = getTargetFromTrigger($this);
    var data = $target.data('bs.collapse');
    var option = data ? 'toggle' : $this.data();

    Plugin.call($target, option);
  });
}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop';
  var toggle = '[data-toggle="dropdown"]';
  var Dropdown = function Dropdown(element) {
    $(element).on('click.bs.dropdown', this.toggle);
  };

  Dropdown.VERSION = '3.3.7';

  function getParent($this) {
    var selector = $this.attr('data-target');

    if (!selector) {
      selector = $this.attr('href');
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }

    var $parent = selector && $(selector);

    return $parent && $parent.length ? $parent : $this.parent();
  }

  function clearMenus(e) {
    if (e && e.which === 3) return;
    $(backdrop).remove();
    $(toggle).each(function () {
      var $this = $(this);
      var $parent = getParent($this);
      var relatedTarget = { relatedTarget: this };

      if (!$parent.hasClass('open')) return;

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return;

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget));

      if (e.isDefaultPrevented()) return;

      $this.attr('aria-expanded', 'false');
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget));
    });
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this);

    if ($this.is('.disabled, :disabled')) return;

    var $parent = getParent($this);
    var isActive = $parent.hasClass('open');

    clearMenus();

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click', clearMenus);
      }

      var relatedTarget = { relatedTarget: this };
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget));

      if (e.isDefaultPrevented()) return;

      $this.trigger('focus').attr('aria-expanded', 'true');

      $parent.toggleClass('open').trigger($.Event('shown.bs.dropdown', relatedTarget));
    }

    return false;
  };

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;

    var $this = $(this);

    e.preventDefault();
    e.stopPropagation();

    if ($this.is('.disabled, :disabled')) return;

    var $parent = getParent($this);
    var isActive = $parent.hasClass('open');

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus');
      return $this.trigger('click');
    }

    var desc = ' li:not(.disabled):visible a';
    var $items = $parent.find('.dropdown-menu' + desc);

    if (!$items.length) return;

    var index = $items.index(e.target);

    if (e.which == 38 && index > 0) index--; // up
    if (e.which == 40 && index < $items.length - 1) index++; // down
    if (!~index) index = 0;

    $items.eq(index).trigger('focus');
  };

  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.dropdown');

      if (!data) $this.data('bs.dropdown', data = new Dropdown(this));
      if (typeof option == 'string') data[option].call($this);
    });
  }

  var old = $.fn.dropdown;

  $.fn.dropdown = Plugin;
  $.fn.dropdown.Constructor = Dropdown;

  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old;
    return this;
  };

  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
    e.stopPropagation();
  }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown);
}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function Modal(element, options) {
    this.options = options;
    this.$body = $(document.body);
    this.$element = $(element);
    this.$dialog = this.$element.find('.modal-dialog');
    this.$backdrop = null;
    this.isShown = null;
    this.originalBodyPad = null;
    this.scrollbarWidth = 0;
    this.ignoreBackdropClick = false;

    if (this.options.remote) {
      this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
        this.$element.trigger('loaded.bs.modal');
      }, this));
    }
  };

  Modal.VERSION = '3.3.7';

  Modal.TRANSITION_DURATION = 300;
  Modal.BACKDROP_TRANSITION_DURATION = 150;

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  };

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget);
  };

  Modal.prototype.show = function (_relatedTarget) {
    var that = this;
    var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget });

    this.$element.trigger(e);

    if (this.isShown || e.isDefaultPrevented()) return;

    this.isShown = true;

    this.checkScrollbar();
    this.setScrollbar();
    this.$body.addClass('modal-open');

    this.escape();
    this.resize();

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
      });
    });

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade');

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body); // don't move modals dom position
      }

      that.$element.show().scrollTop(0);

      that.adjustDialog();

      if (transition) {
        that.$element[0].offsetWidth; // force reflow
      }

      that.$element.addClass('in');

      that.enforceFocus();

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });

      transition ? that.$dialog // wait for modal to slide in
      .one('bsTransitionEnd', function () {
        that.$element.trigger('focus').trigger(e);
      }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);
    });
  };

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault();

    e = $.Event('hide.bs.modal');

    this.$element.trigger(e);

    if (!this.isShown || e.isDefaultPrevented()) return;

    this.isShown = false;

    this.escape();
    this.resize();

    $(document).off('focusin.bs.modal');

    this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');

    this.$dialog.off('mousedown.dismiss.bs.modal');

    $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
  };

  Modal.prototype.enforceFocus = function () {
    $(document).off('focusin.bs.modal') // guard against infinite focus loop
    .on('focusin.bs.modal', $.proxy(function (e) {
      if (document !== e.target && this.$element[0] !== e.target && !this.$element.has(e.target).length) {
        this.$element.trigger('focus');
      }
    }, this));
  };

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide();
      }, this));
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal');
    }
  };

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this));
    } else {
      $(window).off('resize.bs.modal');
    }
  };

  Modal.prototype.hideModal = function () {
    var that = this;
    this.$element.hide();
    this.backdrop(function () {
      that.$body.removeClass('modal-open');
      that.resetAdjustments();
      that.resetScrollbar();
      that.$element.trigger('hidden.bs.modal');
    });
  };

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove();
    this.$backdrop = null;
  };

  Modal.prototype.backdrop = function (callback) {
    var that = this;
    var animate = this.$element.hasClass('fade') ? 'fade' : '';

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate;

      this.$backdrop = $(document.createElement('div')).addClass('modal-backdrop ' + animate).appendTo(this.$body);

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false;
          return;
        }
        if (e.target !== e.currentTarget) return;
        this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide();
      }, this));

      if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow

      this.$backdrop.addClass('in');

      if (!callback) return;

      doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in');

      var callbackRemove = function callbackRemove() {
        that.removeBackdrop();
        callback && callback();
      };
      $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
    } else if (callback) {
      callback();
    }
  };

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog();
  };

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;

    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    });
  };

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    });
  };

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth;
    if (!fullWindowWidth) {
      // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect();
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
    this.scrollbarWidth = this.measureScrollbar();
  };

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || '';
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
  };

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad);
  };

  Modal.prototype.measureScrollbar = function () {
    // thx walsh
    var scrollDiv = document.createElement('div');
    scrollDiv.className = 'modal-scrollbar-measure';
    this.$body.append(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    this.$body[0].removeChild(scrollDiv);
    return scrollbarWidth;
  };

  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.modal');
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);

      if (!data) $this.data('bs.modal', data = new Modal(this, options));
      if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);
    });
  }

  var old = $.fn.modal;

  $.fn.modal = Plugin;
  $.fn.modal.Constructor = Modal;

  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old;
    return this;
  };

  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this);
    var href = $this.attr('href');
    var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
    var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());

    if ($this.is('a')) e.preventDefault();

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus');
      });
    });
    Plugin.call($target, option, this);
  });
}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function Tooltip(element, options) {
    this.type = null;
    this.options = null;
    this.enabled = null;
    this.timeout = null;
    this.hoverState = null;
    this.$element = null;
    this.inState = null;

    this.init('tooltip', element, options);
  };

  Tooltip.VERSION = '3.3.7';

  Tooltip.TRANSITION_DURATION = 150;

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  };

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled = true;
    this.type = type;
    this.$element = $(element);
    this.options = this.getOptions(options);
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
    this.inState = { click: false, hover: false, focus: false };

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!');
    }

    var triggers = this.options.trigger.split(' ');

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i];

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
      } else if (trigger != 'manual') {
        var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin';
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';

        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this));
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));
      }
    }

    this.options.selector ? this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' }) : this.fixTitle();
  };

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS;
  };

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options);

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      };
    }

    return options;
  };

  Tooltip.prototype.getDelegateOptions = function () {
    var options = {};
    var defaults = this.getDefaults();

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value;
    });

    return options;
  };

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
      $(obj.currentTarget).data('bs.' + this.type, self);
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true;
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in';
      return;
    }

    clearTimeout(self.timeout);

    self.hoverState = 'in';

    if (!self.options.delay || !self.options.delay.show) return self.show();

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show();
    }, self.options.delay.show);
  };

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true;
    }

    return false;
  };

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
      $(obj.currentTarget).data('bs.' + this.type, self);
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false;
    }

    if (self.isInStateTrue()) return;

    clearTimeout(self.timeout);

    self.hoverState = 'out';

    if (!self.options.delay || !self.options.delay.hide) return self.hide();

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide();
    }, self.options.delay.hide);
  };

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type);

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e);

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (e.isDefaultPrevented() || !inDom) return;
      var that = this;

      var $tip = this.tip();

      var tipId = this.getUID(this.type);

      this.setContent();
      $tip.attr('id', tipId);
      this.$element.attr('aria-describedby', tipId);

      if (this.options.animation) $tip.addClass('fade');

      var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;

      var autoToken = /\s?auto?\s?/i;
      var autoPlace = autoToken.test(placement);
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top';

      $tip.detach().css({ top: 0, left: 0, display: 'block' }).addClass(placement).data('bs.' + this.type, this);

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
      this.$element.trigger('inserted.bs.' + this.type);

      var pos = this.getPosition();
      var actualWidth = $tip[0].offsetWidth;
      var actualHeight = $tip[0].offsetHeight;

      if (autoPlace) {
        var orgPlacement = placement;
        var viewportDim = this.getPosition(this.$viewport);

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top' : placement == 'top' && pos.top - actualHeight < viewportDim.top ? 'bottom' : placement == 'right' && pos.right + actualWidth > viewportDim.width ? 'left' : placement == 'left' && pos.left - actualWidth < viewportDim.left ? 'right' : placement;

        $tip.removeClass(orgPlacement).addClass(placement);
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);

      this.applyPlacement(calculatedOffset, placement);

      var complete = function complete() {
        var prevHoverState = that.hoverState;
        that.$element.trigger('shown.bs.' + that.type);
        that.hoverState = null;

        if (prevHoverState == 'out') that.leave(that);
      };

      $.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
    }
  };

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip = this.tip();
    var width = $tip[0].offsetWidth;
    var height = $tip[0].offsetHeight;

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10);
    var marginLeft = parseInt($tip.css('margin-left'), 10);

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop)) marginTop = 0;
    if (isNaN(marginLeft)) marginLeft = 0;

    offset.top += marginTop;
    offset.left += marginLeft;

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function using(props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        });
      }
    }, offset), 0);

    $tip.addClass('in');

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth = $tip[0].offsetWidth;
    var actualHeight = $tip[0].offsetHeight;

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight;
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);

    if (delta.left) offset.left += delta.left;else offset.top += delta.top;

    var isVertical = /top|bottom/.test(placement);
    var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight';

    $tip.offset(offset);
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
  };

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow().css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%').css(isVertical ? 'top' : 'left', '');
  };

  Tooltip.prototype.setContent = function () {
    var $tip = this.tip();
    var title = this.getTitle();

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title);
    $tip.removeClass('fade in top bottom left right');
  };

  Tooltip.prototype.hide = function (callback) {
    var that = this;
    var $tip = $(this.$tip);
    var e = $.Event('hide.bs.' + this.type);

    function complete() {
      if (that.hoverState != 'in') $tip.detach();
      if (that.$element) {
        // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + that.type);
      }
      callback && callback();
    }

    this.$element.trigger(e);

    if (e.isDefaultPrevented()) return;

    $tip.removeClass('in');

    $.support.transition && $tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();

    this.hoverState = null;

    return this;
  };

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element;
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '');
    }
  };

  Tooltip.prototype.hasContent = function () {
    return this.getTitle();
  };

  Tooltip.prototype.getPosition = function ($element) {
    $element = $element || this.$element;

    var el = $element[0];
    var isBody = el.tagName == 'BODY';

    var elRect = el.getBoundingClientRect();
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top });
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement;
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset = isBody ? { top: 0, left: 0 } : isSvg ? null : $element.offset();
    var scroll = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() };
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;

    return $.extend({}, elRect, scroll, outerDims, elOffset);
  };

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == 'top' ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == 'left' ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
    /* placement == 'right' */{ top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width };
  };

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 };
    if (!this.$viewport) return delta;

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
    var viewportDimensions = this.getPosition(this.$viewport);

    if (/right|left/.test(placement)) {
      var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
      if (topEdgeOffset < viewportDimensions.top) {
        // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset;
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
        // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
      }
    } else {
      var leftEdgeOffset = pos.left - viewportPadding;
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
      if (leftEdgeOffset < viewportDimensions.left) {
        // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset;
      } else if (rightEdgeOffset > viewportDimensions.right) {
        // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
      }
    }

    return delta;
  };

  Tooltip.prototype.getTitle = function () {
    var title;
    var $e = this.$element;
    var o = this.options;

    title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);

    return title;
  };

  Tooltip.prototype.getUID = function (prefix) {
    do {
      prefix += ~~(Math.random() * 1000000);
    } while (document.getElementById(prefix));
    return prefix;
  };

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template);
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!');
      }
    }
    return this.$tip;
  };

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
  };

  Tooltip.prototype.enable = function () {
    this.enabled = true;
  };

  Tooltip.prototype.disable = function () {
    this.enabled = false;
  };

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  };

  Tooltip.prototype.toggle = function (e) {
    var self = this;
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type);
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions());
        $(e.currentTarget).data('bs.' + this.type, self);
      }
    }

    if (e) {
      self.inState.click = !self.inState.click;
      if (self.isInStateTrue()) self.enter(self);else self.leave(self);
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self);
    }
  };

  Tooltip.prototype.destroy = function () {
    var that = this;
    clearTimeout(this.timeout);
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type);
      if (that.$tip) {
        that.$tip.detach();
      }
      that.$tip = null;
      that.$arrow = null;
      that.$viewport = null;
      that.$element = null;
    });
  };

  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.tooltip');
      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

      if (!data && /destroy|hide/.test(option)) return;
      if (!data) $this.data('bs.tooltip', data = new Tooltip(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.tooltip;

  $.fn.tooltip = Plugin;
  $.fn.tooltip.Constructor = Tooltip;

  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old;
    return this;
  };
}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function Popover(element, options) {
    this.init('popover', element, options);
  };

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js');

  Popover.VERSION = '3.3.7';

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  });

  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);

  Popover.prototype.constructor = Popover;

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS;
  };

  Popover.prototype.setContent = function () {
    var $tip = this.tip();
    var title = this.getTitle();
    var content = this.getContent();

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title);
    $tip.find('.popover-content').children().detach().end()[// we use append for html objects to maintain js events
    this.options.html ? typeof content == 'string' ? 'html' : 'append' : 'text'](content);

    $tip.removeClass('fade top bottom left right in');

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide();
  };

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  };

  Popover.prototype.getContent = function () {
    var $e = this.$element;
    var o = this.options;

    return $e.attr('data-content') || (typeof o.content == 'function' ? o.content.call($e[0]) : o.content);
  };

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow');
  };

  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.popover');
      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

      if (!data && /destroy|hide/.test(option)) return;
      if (!data) $this.data('bs.popover', data = new Popover(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.popover;

  $.fn.popover = Plugin;
  $.fn.popover.Constructor = Popover;

  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old;
    return this;
  };
}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body = $(document.body);
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element);
    this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
    this.selector = (this.options.target || '') + ' .nav li > a';
    this.offsets = [];
    this.targets = [];
    this.activeTarget = null;
    this.scrollHeight = 0;

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this));
    this.refresh();
    this.process();
  }

  ScrollSpy.VERSION = '3.3.7';

  ScrollSpy.DEFAULTS = {
    offset: 10
  };

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  };

  ScrollSpy.prototype.refresh = function () {
    var that = this;
    var offsetMethod = 'offset';
    var offsetBase = 0;

    this.offsets = [];
    this.targets = [];
    this.scrollHeight = this.getScrollHeight();

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position';
      offsetBase = this.$scrollElement.scrollTop();
    }

    this.$body.find(this.selector).map(function () {
      var $el = $(this);
      var href = $el.data('target') || $el.attr('href');
      var $href = /^#./.test(href) && $(href);

      return $href && $href.length && $href.is(':visible') && [[$href[offsetMethod]().top + offsetBase, href]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      that.offsets.push(this[0]);
      that.targets.push(this[1]);
    });
  };

  ScrollSpy.prototype.process = function () {
    var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
    var scrollHeight = this.getScrollHeight();
    var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
    var offsets = this.offsets;
    var targets = this.targets;
    var activeTarget = this.activeTarget;
    var i;

    if (this.scrollHeight != scrollHeight) {
      this.refresh();
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null;
      return this.clear();
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i]);
    }
  };

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target;

    this.clear();

    var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';

    var active = $(selector).parents('li').addClass('active');

    if (active.parent('.dropdown-menu').length) {
      active = active.closest('li.dropdown').addClass('active');
    }

    active.trigger('activate.bs.scrollspy');
  };

  ScrollSpy.prototype.clear = function () {
    $(this.selector).parentsUntil(this.options.target, '.active').removeClass('active');
  };

  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.scrollspy');
      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

      if (!data) $this.data('bs.scrollspy', data = new ScrollSpy(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.scrollspy;

  $.fn.scrollspy = Plugin;
  $.fn.scrollspy.Constructor = ScrollSpy;

  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old;
    return this;
  };

  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this);
      Plugin.call($spy, $spy.data());
    });
  });
}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function Tab(element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element);
    // jscs:enable requireDollarBeforejQueryAssignment
  };

  Tab.VERSION = '3.3.7';

  Tab.TRANSITION_DURATION = 150;

  Tab.prototype.show = function () {
    var $this = this.element;
    var $ul = $this.closest('ul:not(.dropdown-menu)');
    var selector = $this.data('target');

    if (!selector) {
      selector = $this.attr('href');
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return;

    var $previous = $ul.find('.active:last a');
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    });
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    });

    $previous.trigger(hideEvent);
    $this.trigger(showEvent);

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;

    var $target = $(selector);

    this.activate($this.closest('li'), $ul);
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      });
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      });
    });
  };

  Tab.prototype.activate = function (element, container, callback) {
    var $active = container.find('> .active');
    var transition = callback && $.support.transition && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length);

    function next() {
      $active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', false);

      element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', true);

      if (transition) {
        element[0].offsetWidth; // reflow for transition
        element.addClass('in');
      } else {
        element.removeClass('fade');
      }

      if (element.parent('.dropdown-menu').length) {
        element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', true);
      }

      callback && callback();
    }

    $active.length && transition ? $active.one('bsTransitionEnd', next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();

    $active.removeClass('in');
  };

  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.tab');

      if (!data) $this.data('bs.tab', data = new Tab(this));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.tab;

  $.fn.tab = Plugin;
  $.fn.tab.Constructor = Tab;

  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old;
    return this;
  };

  // TAB DATA-API
  // ============

  var clickHandler = function clickHandler(e) {
    e.preventDefault();
    Plugin.call($(this), 'show');
  };

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler).on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler);
}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function Affix(element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options);

    this.$target = $(this.options.target).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this));

    this.$element = $(element);
    this.affixed = null;
    this.unpin = null;
    this.pinnedOffset = null;

    this.checkPosition();
  };

  Affix.VERSION = '3.3.7';

  Affix.RESET = 'affix affix-top affix-bottom';

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  };

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop = this.$target.scrollTop();
    var position = this.$element.offset();
    var targetHeight = this.$target.height();

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false;

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : 'bottom';
      return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : 'bottom';
    }

    var initializing = this.affixed == null;
    var colliderTop = initializing ? scrollTop : position.top;
    var colliderHeight = initializing ? targetHeight : height;

    if (offsetTop != null && scrollTop <= offsetTop) return 'top';
    if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return 'bottom';

    return false;
  };

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(Affix.RESET).addClass('affix');
    var scrollTop = this.$target.scrollTop();
    var position = this.$element.offset();
    return this.pinnedOffset = position.top - scrollTop;
  };

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1);
  };

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return;

    var height = this.$element.height();
    var offset = this.options.offset;
    var offsetTop = offset.top;
    var offsetBottom = offset.bottom;
    var scrollHeight = Math.max($(document).height(), $(document.body).height());

    if ((typeof offset === 'undefined' ? 'undefined' : _typeof(offset)) != 'object') offsetBottom = offsetTop = offset;
    if (typeof offsetTop == 'function') offsetTop = offset.top(this.$element);
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element);

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '');

      var affixType = 'affix' + (affix ? '-' + affix : '');
      var e = $.Event(affixType + '.bs.affix');

      this.$element.trigger(e);

      if (e.isDefaultPrevented()) return;

      this.affixed = affix;
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null;

      this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix', 'affixed') + '.bs.affix');
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      });
    }
  };

  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.affix');
      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

      if (!data) $this.data('bs.affix', data = new Affix(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.affix;

  $.fn.affix = Plugin;
  $.fn.affix.Constructor = Affix;

  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old;
    return this;
  };

  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this);
      var data = $spy.data();

      data.offset = data.offset || {};

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
      if (data.offsetTop != null) data.offset.top = data.offsetTop;

      Plugin.call($spy, data);
    });
  });
}(jQuery);
'use strict';

// |--------------------------------------------------------------------------
// | Flexy header
// |--------------------------------------------------------------------------
// |
// | This jQuery script is written by
// |
// | Morten Nissen
// | hjemmesidekongen.dk
// |

var flexy_header = function ($) {
    'use strict';

    var pub = {},
        $header_static = $('.flexy-header--static'),
        $header_sticky = $('.flexy-header--sticky'),
        options = {
        update_interval: 100,
        tolerance: {
            upward: 20,
            downward: 10
        },
        offset: _get_offset_from_elements_bottom($header_static),
        classes: {
            pinned: "flexy-header--pinned",
            unpinned: "flexy-header--unpinned"
        }
    },
        was_scrolled = false,
        last_distance_from_top = 0;

    /**
     * Instantiate
     */
    pub.init = function (options) {
        registerEventHandlers();
        registerBootEventHandlers();
    };

    /**
     * Register boot event handlers
     */
    function registerBootEventHandlers() {
        $header_sticky.addClass(options.classes.unpinned);

        setInterval(function () {

            if (was_scrolled) {
                document_was_scrolled();

                was_scrolled = false;
            }
        }, options.update_interval);
    }

    /**
     * Register event handlers
     */
    function registerEventHandlers() {
        $(window).scroll(function (event) {
            was_scrolled = true;
        });
    }

    /**
     * Get offset from element bottom
     */
    function _get_offset_from_elements_bottom($element) {
        var element_height = $element.outerHeight(true),
            element_offset = $element.offset().top;

        return element_height + element_offset;
    }

    /**
     * Document was scrolled
     */
    function document_was_scrolled() {
        var current_distance_from_top = $(window).scrollTop();

        // If past offset
        if (current_distance_from_top >= options.offset) {

            // Downwards scroll
            if (current_distance_from_top > last_distance_from_top) {

                // Obey the downward tolerance
                if (Math.abs(current_distance_from_top - last_distance_from_top) <= options.tolerance.downward) {
                    return;
                }

                $header_sticky.removeClass(options.classes.pinned).addClass(options.classes.unpinned);
            }

            // Upwards scroll
            else {

                    // Obey the upward tolerance
                    if (Math.abs(current_distance_from_top - last_distance_from_top) <= options.tolerance.upward) {
                        return;
                    }

                    // We are not scrolled past the document which is possible on the Mac
                    if (current_distance_from_top + $(window).height() < $(document).height()) {
                        $header_sticky.removeClass(options.classes.unpinned).addClass(options.classes.pinned);
                    }
                }
        }

        // Not past offset
        else {
                $header_sticky.removeClass(options.classes.pinned).addClass(options.classes.unpinned);
            }

        last_distance_from_top = current_distance_from_top;
    }

    return pub;
}(jQuery);
'use strict';

// |--------------------------------------------------------------------------
// | Flexy navigation
// |--------------------------------------------------------------------------
// |
// | This jQuery script is written by
// |
// | Morten Nissen
// | hjemmesidekongen.dk
// |

var flexy_navigation = function ($) {
    'use strict';

    var pub = {},
        layout_classes = {
        'navigation': '.flexy-navigation',
        'obfuscator': '.flexy-navigation__obfuscator',
        'dropdown': '.flexy-navigation__item--dropdown',
        'dropdown_megamenu': '.flexy-navigation__item__dropdown-megamenu',

        'is_upgraded': 'is-upgraded',
        'navigation_has_megamenu': 'has-megamenu',
        'dropdown_has_megamenu': 'flexy-navigation__item--dropdown-with-megamenu'
    };

    /**
     * Instantiate
     */
    pub.init = function (options) {
        registerEventHandlers();
        registerBootEventHandlers();
    };

    /**
     * Register boot event handlers
     */
    function registerBootEventHandlers() {

        // Upgrade
        upgrade();
    }

    /**
     * Register event handlers
     */
    function registerEventHandlers() {}

    /**
     * Upgrade elements.
     * Add classes to elements, based upon attached classes.
     */
    function upgrade() {
        var $navigations = $(layout_classes.navigation);

        // Navigations
        if ($navigations.length > 0) {
            $navigations.each(function (index, element) {
                var $navigation = $(this),
                    $megamenus = $navigation.find(layout_classes.dropdown_megamenu),
                    $dropdown_megamenu = $navigation.find(layout_classes.dropdown_has_megamenu);

                // Has already been upgraded
                if ($navigation.hasClass(layout_classes.is_upgraded)) {
                    return;
                }

                // Has megamenu
                if ($megamenus.length > 0) {
                    $navigation.addClass(layout_classes.navigation_has_megamenu);

                    // Run through all megamenus
                    $megamenus.each(function (index, element) {
                        var $megamenu = $(this),
                            has_obfuscator = $('html').hasClass('has-obfuscator') ? true : false;

                        $megamenu.parents(layout_classes.dropdown).addClass(layout_classes.dropdown_has_megamenu).hover(function () {

                            if (has_obfuscator) {
                                obfuscator.show();
                            }
                        }, function () {

                            if (has_obfuscator) {
                                obfuscator.hide();
                            }
                        });
                    });
                }

                // Is upgraded
                $navigation.addClass(layout_classes.is_upgraded);
            });
        }
    }

    return pub;
}(jQuery);
"use strict";

/*! sidr - v2.2.1 - 2016-02-17
 * http://www.berriart.com/sidr/
 * Copyright (c) 2013-2016 Alberto Varela; Licensed MIT */

(function () {
  'use strict';

  var babelHelpers = {};

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  babelHelpers;

  var sidrStatus = {
    moving: false,
    opened: false
  };

  var helper = {
    // Check for valids urls
    // From : http://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-an-url

    isUrl: function isUrl(str) {
      var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

      if (pattern.test(str)) {
        return true;
      } else {
        return false;
      }
    },

    // Add sidr prefixes
    addPrefixes: function addPrefixes($element) {
      this.addPrefix($element, 'id');
      this.addPrefix($element, 'class');
      $element.removeAttr('style');
    },
    addPrefix: function addPrefix($element, attribute) {
      var toReplace = $element.attr(attribute);

      if (typeof toReplace === 'string' && toReplace !== '' && toReplace !== 'sidr-inner') {
        $element.attr(attribute, toReplace.replace(/([A-Za-z0-9_.\-]+)/g, 'sidr-' + attribute + '-$1'));
      }
    },

    // Check if transitions is supported
    transitions: function () {
      var body = document.body || document.documentElement,
          style = body.style,
          supported = false,
          property = 'transition';

      if (property in style) {
        supported = true;
      } else {
        (function () {
          var prefixes = ['moz', 'webkit', 'o', 'ms'],
              prefix = undefined,
              i = undefined;

          property = property.charAt(0).toUpperCase() + property.substr(1);
          supported = function () {
            for (i = 0; i < prefixes.length; i++) {
              prefix = prefixes[i];
              if (prefix + property in style) {
                return true;
              }
            }

            return false;
          }();
          property = supported ? '-' + prefix.toLowerCase() + '-' + property.toLowerCase() : null;
        })();
      }

      return {
        supported: supported,
        property: property
      };
    }()
  };

  var $$2 = jQuery;

  var bodyAnimationClass = 'sidr-animating';
  var openAction = 'open';
  var closeAction = 'close';
  var transitionEndEvent = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
  var Menu = function () {
    function Menu(name) {
      babelHelpers.classCallCheck(this, Menu);

      this.name = name;
      this.item = $$2('#' + name);
      this.openClass = name === 'sidr' ? 'sidr-open' : 'sidr-open ' + name + '-open';
      this.menuWidth = this.item.outerWidth(true);
      this.speed = this.item.data('speed');
      this.side = this.item.data('side');
      this.displace = this.item.data('displace');
      this.timing = this.item.data('timing');
      this.method = this.item.data('method');
      this.onOpenCallback = this.item.data('onOpen');
      this.onCloseCallback = this.item.data('onClose');
      this.onOpenEndCallback = this.item.data('onOpenEnd');
      this.onCloseEndCallback = this.item.data('onCloseEnd');
      this.body = $$2(this.item.data('body'));
    }

    babelHelpers.createClass(Menu, [{
      key: 'getAnimation',
      value: function getAnimation(action, element) {
        var animation = {},
            prop = this.side;

        if (action === 'open' && element === 'body') {
          animation[prop] = this.menuWidth + 'px';
        } else if (action === 'close' && element === 'menu') {
          animation[prop] = '-' + this.menuWidth + 'px';
        } else {
          animation[prop] = 0;
        }

        return animation;
      }
    }, {
      key: 'prepareBody',
      value: function prepareBody(action) {
        var prop = action === 'open' ? 'hidden' : '';

        // Prepare page if container is body
        if (this.body.is('body')) {
          var $html = $$2('html'),
              scrollTop = $html.scrollTop();

          $html.css('overflow-x', prop).scrollTop(scrollTop);
        }
      }
    }, {
      key: 'openBody',
      value: function openBody() {
        if (this.displace) {
          var transitions = helper.transitions,
              $body = this.body;

          if (transitions.supported) {
            $body.css(transitions.property, this.side + ' ' + this.speed / 1000 + 's ' + this.timing).css(this.side, 0).css({
              width: $body.width(),
              position: 'absolute'
            });
            $body.css(this.side, this.menuWidth + 'px');
          } else {
            var bodyAnimation = this.getAnimation(openAction, 'body');

            $body.css({
              width: $body.width(),
              position: 'absolute'
            }).animate(bodyAnimation, {
              queue: false,
              duration: this.speed
            });
          }
        }
      }
    }, {
      key: 'onCloseBody',
      value: function onCloseBody() {
        var transitions = helper.transitions,
            resetStyles = {
          width: '',
          position: '',
          right: '',
          left: ''
        };

        if (transitions.supported) {
          resetStyles[transitions.property] = '';
        }

        this.body.css(resetStyles).unbind(transitionEndEvent);
      }
    }, {
      key: 'closeBody',
      value: function closeBody() {
        var _this = this;

        if (this.displace) {
          if (helper.transitions.supported) {
            this.body.css(this.side, 0).one(transitionEndEvent, function () {
              _this.onCloseBody();
            });
          } else {
            var bodyAnimation = this.getAnimation(closeAction, 'body');

            this.body.animate(bodyAnimation, {
              queue: false,
              duration: this.speed,
              complete: function complete() {
                _this.onCloseBody();
              }
            });
          }
        }
      }
    }, {
      key: 'moveBody',
      value: function moveBody(action) {
        if (action === openAction) {
          this.openBody();
        } else {
          this.closeBody();
        }
      }
    }, {
      key: 'onOpenMenu',
      value: function onOpenMenu(callback) {
        var name = this.name;

        sidrStatus.moving = false;
        sidrStatus.opened = name;

        this.item.unbind(transitionEndEvent);

        this.body.removeClass(bodyAnimationClass).addClass(this.openClass);

        this.onOpenEndCallback();

        if (typeof callback === 'function') {
          callback(name);
        }
      }
    }, {
      key: 'openMenu',
      value: function openMenu(callback) {
        var _this2 = this;

        var $item = this.item;

        if (helper.transitions.supported) {
          $item.css(this.side, 0).one(transitionEndEvent, function () {
            _this2.onOpenMenu(callback);
          });
        } else {
          var menuAnimation = this.getAnimation(openAction, 'menu');

          $item.css('display', 'block').animate(menuAnimation, {
            queue: false,
            duration: this.speed,
            complete: function complete() {
              _this2.onOpenMenu(callback);
            }
          });
        }
      }
    }, {
      key: 'onCloseMenu',
      value: function onCloseMenu(callback) {
        this.item.css({
          left: '',
          right: ''
        }).unbind(transitionEndEvent);
        $$2('html').css('overflow-x', '');

        sidrStatus.moving = false;
        sidrStatus.opened = false;

        this.body.removeClass(bodyAnimationClass).removeClass(this.openClass);

        this.onCloseEndCallback();

        // Callback
        if (typeof callback === 'function') {
          callback(name);
        }
      }
    }, {
      key: 'closeMenu',
      value: function closeMenu(callback) {
        var _this3 = this;

        var item = this.item;

        if (helper.transitions.supported) {
          item.css(this.side, '').one(transitionEndEvent, function () {
            _this3.onCloseMenu(callback);
          });
        } else {
          var menuAnimation = this.getAnimation(closeAction, 'menu');

          item.animate(menuAnimation, {
            queue: false,
            duration: this.speed,
            complete: function complete() {
              _this3.onCloseMenu();
            }
          });
        }
      }
    }, {
      key: 'moveMenu',
      value: function moveMenu(action, callback) {
        this.body.addClass(bodyAnimationClass);

        if (action === openAction) {
          this.openMenu(callback);
        } else {
          this.closeMenu(callback);
        }
      }
    }, {
      key: 'move',
      value: function move(action, callback) {
        // Lock sidr
        sidrStatus.moving = true;

        this.prepareBody(action);
        this.moveBody(action);
        this.moveMenu(action, callback);
      }
    }, {
      key: 'open',
      value: function open(callback) {
        var _this4 = this;

        // Check if is already opened or moving
        if (sidrStatus.opened === this.name || sidrStatus.moving) {
          return;
        }

        // If another menu opened close first
        if (sidrStatus.opened !== false) {
          var alreadyOpenedMenu = new Menu(sidrStatus.opened);

          alreadyOpenedMenu.close(function () {
            _this4.open(callback);
          });

          return;
        }

        this.move('open', callback);

        // onOpen callback
        this.onOpenCallback();
      }
    }, {
      key: 'close',
      value: function close(callback) {
        // Check if is already closed or moving
        if (sidrStatus.opened !== this.name || sidrStatus.moving) {
          return;
        }

        this.move('close', callback);

        // onClose callback
        this.onCloseCallback();
      }
    }, {
      key: 'toggle',
      value: function toggle(callback) {
        if (sidrStatus.opened === this.name) {
          this.close(callback);
        } else {
          this.open(callback);
        }
      }
    }]);
    return Menu;
  }();

  var $$1 = jQuery;

  function execute(action, name, callback) {
    var sidr = new Menu(name);

    switch (action) {
      case 'open':
        sidr.open(callback);
        break;
      case 'close':
        sidr.close(callback);
        break;
      case 'toggle':
        sidr.toggle(callback);
        break;
      default:
        $$1.error('Method ' + action + ' does not exist on jQuery.sidr');
        break;
    }
  }

  var i;
  var $ = jQuery;
  var publicMethods = ['open', 'close', 'toggle'];
  var methodName;
  var methods = {};
  var getMethod = function getMethod(methodName) {
    return function (name, callback) {
      // Check arguments
      if (typeof name === 'function') {
        callback = name;
        name = 'sidr';
      } else if (!name) {
        name = 'sidr';
      }

      execute(methodName, name, callback);
    };
  };
  for (i = 0; i < publicMethods.length; i++) {
    methodName = publicMethods[i];
    methods[methodName] = getMethod(methodName);
  }

  function sidr(method) {
    if (method === 'status') {
      return sidrStatus;
    } else if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'function' || typeof method === 'string' || !method) {
      return methods.toggle.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sidr');
    }
  }

  var $$3 = jQuery;

  function fillContent($sideMenu, settings) {
    // The menu content
    if (typeof settings.source === 'function') {
      var newContent = settings.source(name);

      $sideMenu.html(newContent);
    } else if (typeof settings.source === 'string' && helper.isUrl(settings.source)) {
      $$3.get(settings.source, function (data) {
        $sideMenu.html(data);
      });
    } else if (typeof settings.source === 'string') {
      var htmlContent = '',
          selectors = settings.source.split(',');

      $$3.each(selectors, function (index, element) {
        htmlContent += '<div class="sidr-inner">' + $$3(element).html() + '</div>';
      });

      // Renaming ids and classes
      if (settings.renaming) {
        var $htmlContent = $$3('<div />').html(htmlContent);

        $htmlContent.find('*').each(function (index, element) {
          var $element = $$3(element);

          helper.addPrefixes($element);
        });
        htmlContent = $htmlContent.html();
      }

      $sideMenu.html(htmlContent);
    } else if (settings.source !== null) {
      $$3.error('Invalid Sidr Source');
    }

    return $sideMenu;
  }

  function fnSidr(options) {
    var transitions = helper.transitions,
        settings = $$3.extend({
      name: 'sidr', // Name for the 'sidr'
      speed: 200, // Accepts standard jQuery effects speeds (i.e. fast, normal or milliseconds)
      side: 'left', // Accepts 'left' or 'right'
      source: null, // Override the source of the content.
      renaming: true, // The ids and classes will be prepended with a prefix when loading existent content
      body: 'body', // Page container selector,
      displace: true, // Displace the body content or not
      timing: 'ease', // Timing function for CSS transitions
      method: 'toggle', // The method to call when element is clicked
      bind: 'touchstart click', // The event(s) to trigger the menu
      onOpen: function onOpen() {},
      // Callback when sidr start opening
      onClose: function onClose() {},
      // Callback when sidr start closing
      onOpenEnd: function onOpenEnd() {},
      // Callback when sidr end opening
      onCloseEnd: function onCloseEnd() {} // Callback when sidr end closing

    }, options),
        name = settings.name,
        $sideMenu = $$3('#' + name);

    // If the side menu do not exist create it
    if ($sideMenu.length === 0) {
      $sideMenu = $$3('<div />').attr('id', name).appendTo($$3('body'));
    }

    // Add transition to menu if are supported
    if (transitions.supported) {
      $sideMenu.css(transitions.property, settings.side + ' ' + settings.speed / 1000 + 's ' + settings.timing);
    }

    // Adding styles and options
    $sideMenu.addClass('sidr').addClass(settings.side).data({
      speed: settings.speed,
      side: settings.side,
      body: settings.body,
      displace: settings.displace,
      timing: settings.timing,
      method: settings.method,
      onOpen: settings.onOpen,
      onClose: settings.onClose,
      onOpenEnd: settings.onOpenEnd,
      onCloseEnd: settings.onCloseEnd
    });

    $sideMenu = fillContent($sideMenu, settings);

    return this.each(function () {
      var $this = $$3(this),
          data = $this.data('sidr'),
          flag = false;

      // If the plugin hasn't been initialized yet
      if (!data) {
        sidrStatus.moving = false;
        sidrStatus.opened = false;

        $this.data('sidr', name);

        $this.bind(settings.bind, function (event) {
          event.preventDefault();

          if (!flag) {
            flag = true;
            sidr(settings.method, name);

            setTimeout(function () {
              flag = false;
            }, 100);
          }
        });
      }
    });
  }

  jQuery.sidr = sidr;
  jQuery.fn.sidr = fnSidr;
})();
"use strict";

!function (e) {
  var t;e.fn.slinky = function (a) {
    var s = e.extend({ label: "Back", title: !1, speed: 300, resize: !0 }, a),
        i = e(this),
        n = i.children().first();i.addClass("slinky-menu");var r = function r(e, t) {
      var a = Math.round(parseInt(n.get(0).style.left)) || 0;n.css("left", a - 100 * e + "%"), "function" == typeof t && setTimeout(t, s.speed);
    },
        l = function l(e) {
      i.height(e.outerHeight());
    },
        d = function d(e) {
      i.css("transition-duration", e + "ms"), n.css("transition-duration", e + "ms");
    };if (d(s.speed), e("a + ul", i).prev().addClass("next"), e("li > ul", i).prepend('<li class="header">'), s.title === !0 && e("li > ul", i).each(function () {
      var t = e(this).parent().find("a").first().text(),
          a = e("<h2>").text(t);e("> .header", this).append(a);
    }), s.title || s.label !== !0) {
      var o = e("<a>").text(s.label).prop("href", "#").addClass("back");e(".header", i).append(o);
    } else e("li > ul", i).each(function () {
      var t = e(this).parent().find("a").first().text(),
          a = e("<a>").text(t).prop("href", "#").addClass("back");e("> .header", this).append(a);
    });e("a", i).on("click", function (a) {
      if (!(t + s.speed > Date.now())) {
        t = Date.now();var n = e(this);/#/.test(this.href) && a.preventDefault(), n.hasClass("next") ? (i.find(".active").removeClass("active"), n.next().show().addClass("active"), r(1), s.resize && l(n.next())) : n.hasClass("back") && (r(-1, function () {
          i.find(".active").removeClass("active"), n.parent().parent().hide().parentsUntil(i, "ul").first().addClass("active");
        }), s.resize && l(n.parent().parent().parentsUntil(i, "ul")));
      }
    }), this.jump = function (t, a) {
      t = e(t);var n = i.find(".active");n = n.length > 0 ? n.parentsUntil(i, "ul").length : 0, i.find("ul").removeClass("active").hide();var o = t.parentsUntil(i, "ul");o.show(), t.show().addClass("active"), a === !1 && d(0), r(o.length - n), s.resize && l(t), a === !1 && d(s.speed);
    }, this.home = function (t) {
      t === !1 && d(0);var a = i.find(".active"),
          n = a.parentsUntil(i, "li").length;n > 0 && (r(-n, function () {
        a.removeClass("active");
      }), s.resize && l(e(a.parentsUntil(i, "li").get(n - 1)).parent())), t === !1 && d(s.speed);
    }, this.destroy = function () {
      e(".header", i).remove(), e("a", i).removeClass("next").off("click"), i.removeClass("slinky-menu").css("transition-duration", ""), n.css("transition-duration", "");
    };var c = i.find(".active");return c.length > 0 && (c.removeClass("active"), this.jump(c, !1)), this;
  };
}(jQuery);
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  var AjaxMonitor,
      Bar,
      DocumentMonitor,
      ElementMonitor,
      ElementTracker,
      EventLagMonitor,
      Evented,
      Events,
      NoTargetError,
      Pace,
      RequestIntercept,
      SOURCE_KEYS,
      Scaler,
      SocketRequestTracker,
      XHRRequestTracker,
      animation,
      avgAmplitude,
      bar,
      cancelAnimation,
      cancelAnimationFrame,
      defaultOptions,
      _extend,
      extendNative,
      getFromDOM,
      getIntercept,
      handlePushState,
      ignoreStack,
      init,
      now,
      options,
      requestAnimationFrame,
      result,
      runAnimation,
      scalers,
      shouldIgnoreURL,
      shouldTrack,
      source,
      sources,
      uniScaler,
      _WebSocket,
      _XDomainRequest,
      _XMLHttpRequest,
      _i,
      _intercept,
      _len,
      _pushState,
      _ref,
      _ref1,
      _replaceState,
      __slice = [].slice,
      __hasProp = {}.hasOwnProperty,
      __extends = function __extends(child, parent) {
    for (var key in parent) {
      if (__hasProp.call(parent, key)) child[key] = parent[key];
    }function ctor() {
      this.constructor = child;
    }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
  },
      __indexOf = [].indexOf || function (item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (i in this && this[i] === item) return i;
    }return -1;
  };

  defaultOptions = {
    catchupTime: 100,
    initialRate: .03,
    minTime: 250,
    ghostTime: 100,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: true,
    restartOnPushState: true,
    restartOnRequestAfter: 500,
    target: 'body',
    elements: {
      checkInterval: 100,
      selectors: ['body']
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ['GET'],
      trackWebSockets: true,
      ignoreURLs: []
    }
  };

  now = function now() {
    var _ref;
    return (_ref = typeof performance !== "undefined" && performance !== null ? typeof performance.now === "function" ? performance.now() : void 0 : void 0) != null ? _ref : +new Date();
  };

  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

  if (requestAnimationFrame == null) {
    requestAnimationFrame = function requestAnimationFrame(fn) {
      return setTimeout(fn, 50);
    };
    cancelAnimationFrame = function cancelAnimationFrame(id) {
      return clearTimeout(id);
    };
  }

  runAnimation = function runAnimation(fn) {
    var last, _tick;
    last = now();
    _tick = function tick() {
      var diff;
      diff = now() - last;
      if (diff >= 33) {
        last = now();
        return fn(diff, function () {
          return requestAnimationFrame(_tick);
        });
      } else {
        return setTimeout(_tick, 33 - diff);
      }
    };
    return _tick();
  };

  result = function result() {
    var args, key, obj;
    obj = arguments[0], key = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
    if (typeof obj[key] === 'function') {
      return obj[key].apply(obj, args);
    } else {
      return obj[key];
    }
  };

  _extend = function extend() {
    var key, out, source, sources, val, _i, _len;
    out = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    for (_i = 0, _len = sources.length; _i < _len; _i++) {
      source = sources[_i];
      if (source) {
        for (key in source) {
          if (!__hasProp.call(source, key)) continue;
          val = source[key];
          if (out[key] != null && _typeof(out[key]) === 'object' && val != null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
            _extend(out[key], val);
          } else {
            out[key] = val;
          }
        }
      }
    }
    return out;
  };

  avgAmplitude = function avgAmplitude(arr) {
    var count, sum, v, _i, _len;
    sum = count = 0;
    for (_i = 0, _len = arr.length; _i < _len; _i++) {
      v = arr[_i];
      sum += Math.abs(v);
      count++;
    }
    return sum / count;
  };

  getFromDOM = function getFromDOM(key, json) {
    var data, e, el;
    if (key == null) {
      key = 'options';
    }
    if (json == null) {
      json = true;
    }
    el = document.querySelector("[data-pace-" + key + "]");
    if (!el) {
      return;
    }
    data = el.getAttribute("data-pace-" + key);
    if (!json) {
      return data;
    }
    try {
      return JSON.parse(data);
    } catch (_error) {
      e = _error;
      return typeof console !== "undefined" && console !== null ? console.error("Error parsing inline pace options", e) : void 0;
    }
  };

  Evented = function () {
    function Evented() {}

    Evented.prototype.on = function (event, handler, ctx, once) {
      var _base;
      if (once == null) {
        once = false;
      }
      if (this.bindings == null) {
        this.bindings = {};
      }
      if ((_base = this.bindings)[event] == null) {
        _base[event] = [];
      }
      return this.bindings[event].push({
        handler: handler,
        ctx: ctx,
        once: once
      });
    };

    Evented.prototype.once = function (event, handler, ctx) {
      return this.on(event, handler, ctx, true);
    };

    Evented.prototype.off = function (event, handler) {
      var i, _ref, _results;
      if (((_ref = this.bindings) != null ? _ref[event] : void 0) == null) {
        return;
      }
      if (handler == null) {
        return delete this.bindings[event];
      } else {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    Evented.prototype.trigger = function () {
      var args, ctx, event, handler, i, once, _ref, _ref1, _results;
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if ((_ref = this.bindings) != null ? _ref[event] : void 0) {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          _ref1 = this.bindings[event][i], handler = _ref1.handler, ctx = _ref1.ctx, once = _ref1.once;
          handler.apply(ctx != null ? ctx : this, args);
          if (once) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    return Evented;
  }();

  Pace = window.Pace || {};

  window.Pace = Pace;

  _extend(Pace, Evented.prototype);

  options = Pace.options = _extend({}, defaultOptions, window.paceOptions, getFromDOM());

  _ref = ['ajax', 'document', 'eventLag', 'elements'];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    source = _ref[_i];
    if (options[source] === true) {
      options[source] = defaultOptions[source];
    }
  }

  NoTargetError = function (_super) {
    __extends(NoTargetError, _super);

    function NoTargetError() {
      _ref1 = NoTargetError.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    return NoTargetError;
  }(Error);

  Bar = function () {
    function Bar() {
      this.progress = 0;
    }

    Bar.prototype.getElement = function () {
      var targetElement;
      if (this.el == null) {
        targetElement = document.querySelector(options.target);
        if (!targetElement) {
          throw new NoTargetError();
        }
        this.el = document.createElement('div');
        this.el.className = "pace pace-active";
        document.body.className = document.body.className.replace(/pace-done/g, '');
        document.body.className += ' pace-running';
        this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';
        if (targetElement.firstChild != null) {
          targetElement.insertBefore(this.el, targetElement.firstChild);
        } else {
          targetElement.appendChild(this.el);
        }
      }
      return this.el;
    };

    Bar.prototype.finish = function () {
      var el;
      el = this.getElement();
      el.className = el.className.replace('pace-active', '');
      el.className += ' pace-inactive';
      document.body.className = document.body.className.replace('pace-running', '');
      return document.body.className += ' pace-done';
    };

    Bar.prototype.update = function (prog) {
      this.progress = prog;
      return this.render();
    };

    Bar.prototype.destroy = function () {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (_error) {
        NoTargetError = _error;
      }
      return this.el = void 0;
    };

    Bar.prototype.render = function () {
      var el, key, progressStr, transform, _j, _len1, _ref2;
      if (document.querySelector(options.target) == null) {
        return false;
      }
      el = this.getElement();
      transform = "translate3d(" + this.progress + "%, 0, 0)";
      _ref2 = ['webkitTransform', 'msTransform', 'transform'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        key = _ref2[_j];
        el.children[0].style[key] = transform;
      }
      if (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) {
        el.children[0].setAttribute('data-progress-text', "" + (this.progress | 0) + "%");
        if (this.progress >= 100) {
          progressStr = '99';
        } else {
          progressStr = this.progress < 10 ? "0" : "";
          progressStr += this.progress | 0;
        }
        el.children[0].setAttribute('data-progress', "" + progressStr);
      }
      return this.lastRenderedProgress = this.progress;
    };

    Bar.prototype.done = function () {
      return this.progress >= 100;
    };

    return Bar;
  }();

  Events = function () {
    function Events() {
      this.bindings = {};
    }

    Events.prototype.trigger = function (name, val) {
      var binding, _j, _len1, _ref2, _results;
      if (this.bindings[name] != null) {
        _ref2 = this.bindings[name];
        _results = [];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          binding = _ref2[_j];
          _results.push(binding.call(this, val));
        }
        return _results;
      }
    };

    Events.prototype.on = function (name, fn) {
      var _base;
      if ((_base = this.bindings)[name] == null) {
        _base[name] = [];
      }
      return this.bindings[name].push(fn);
    };

    return Events;
  }();

  _XMLHttpRequest = window.XMLHttpRequest;

  _XDomainRequest = window.XDomainRequest;

  _WebSocket = window.WebSocket;

  extendNative = function extendNative(to, from) {
    var e, key, _results;
    _results = [];
    for (key in from.prototype) {
      try {
        if (to[key] == null && typeof from[key] !== 'function') {
          if (typeof Object.defineProperty === 'function') {
            _results.push(Object.defineProperty(to, key, {
              get: function get() {
                return from.prototype[key];
              },
              configurable: true,
              enumerable: true
            }));
          } else {
            _results.push(to[key] = from.prototype[key]);
          }
        } else {
          _results.push(void 0);
        }
      } catch (_error) {
        e = _error;
      }
    }
    return _results;
  };

  ignoreStack = [];

  Pace.ignore = function () {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('ignore');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  Pace.track = function () {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('track');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  shouldTrack = function shouldTrack(method) {
    var _ref2;
    if (method == null) {
      method = 'GET';
    }
    if (ignoreStack[0] === 'track') {
      return 'force';
    }
    if (!ignoreStack.length && options.ajax) {
      if (method === 'socket' && options.ajax.trackWebSockets) {
        return true;
      } else if (_ref2 = method.toUpperCase(), __indexOf.call(options.ajax.trackMethods, _ref2) >= 0) {
        return true;
      }
    }
    return false;
  };

  RequestIntercept = function (_super) {
    __extends(RequestIntercept, _super);

    function RequestIntercept() {
      var monitorXHR,
          _this = this;
      RequestIntercept.__super__.constructor.apply(this, arguments);
      monitorXHR = function monitorXHR(req) {
        var _open;
        _open = req.open;
        return req.open = function (type, url, async) {
          if (shouldTrack(type)) {
            _this.trigger('request', {
              type: type,
              url: url,
              request: req
            });
          }
          return _open.apply(req, arguments);
        };
      };
      window.XMLHttpRequest = function (flags) {
        var req;
        req = new _XMLHttpRequest(flags);
        monitorXHR(req);
        return req;
      };
      try {
        extendNative(window.XMLHttpRequest, _XMLHttpRequest);
      } catch (_error) {}
      if (_XDomainRequest != null) {
        window.XDomainRequest = function () {
          var req;
          req = new _XDomainRequest();
          monitorXHR(req);
          return req;
        };
        try {
          extendNative(window.XDomainRequest, _XDomainRequest);
        } catch (_error) {}
      }
      if (_WebSocket != null && options.ajax.trackWebSockets) {
        window.WebSocket = function (url, protocols) {
          var req;
          if (protocols != null) {
            req = new _WebSocket(url, protocols);
          } else {
            req = new _WebSocket(url);
          }
          if (shouldTrack('socket')) {
            _this.trigger('request', {
              type: 'socket',
              url: url,
              protocols: protocols,
              request: req
            });
          }
          return req;
        };
        try {
          extendNative(window.WebSocket, _WebSocket);
        } catch (_error) {}
      }
    }

    return RequestIntercept;
  }(Events);

  _intercept = null;

  getIntercept = function getIntercept() {
    if (_intercept == null) {
      _intercept = new RequestIntercept();
    }
    return _intercept;
  };

  shouldIgnoreURL = function shouldIgnoreURL(url) {
    var pattern, _j, _len1, _ref2;
    _ref2 = options.ajax.ignoreURLs;
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      pattern = _ref2[_j];
      if (typeof pattern === 'string') {
        if (url.indexOf(pattern) !== -1) {
          return true;
        }
      } else {
        if (pattern.test(url)) {
          return true;
        }
      }
    }
    return false;
  };

  getIntercept().on('request', function (_arg) {
    var after, args, request, type, url;
    type = _arg.type, request = _arg.request, url = _arg.url;
    if (shouldIgnoreURL(url)) {
      return;
    }
    if (!Pace.running && (options.restartOnRequestAfter !== false || shouldTrack(type) === 'force')) {
      args = arguments;
      after = options.restartOnRequestAfter || 0;
      if (typeof after === 'boolean') {
        after = 0;
      }
      return setTimeout(function () {
        var stillActive, _j, _len1, _ref2, _ref3, _results;
        if (type === 'socket') {
          stillActive = request.readyState < 2;
        } else {
          stillActive = 0 < (_ref2 = request.readyState) && _ref2 < 4;
        }
        if (stillActive) {
          Pace.restart();
          _ref3 = Pace.sources;
          _results = [];
          for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
            source = _ref3[_j];
            if (source instanceof AjaxMonitor) {
              source.watch.apply(source, args);
              break;
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        }
      }, after);
    }
  });

  AjaxMonitor = function () {
    function AjaxMonitor() {
      var _this = this;
      this.elements = [];
      getIntercept().on('request', function () {
        return _this.watch.apply(_this, arguments);
      });
    }

    AjaxMonitor.prototype.watch = function (_arg) {
      var request, tracker, type, url;
      type = _arg.type, request = _arg.request, url = _arg.url;
      if (shouldIgnoreURL(url)) {
        return;
      }
      if (type === 'socket') {
        tracker = new SocketRequestTracker(request);
      } else {
        tracker = new XHRRequestTracker(request);
      }
      return this.elements.push(tracker);
    };

    return AjaxMonitor;
  }();

  XHRRequestTracker = function () {
    function XHRRequestTracker(request) {
      var event,
          size,
          _j,
          _len1,
          _onreadystatechange,
          _ref2,
          _this = this;
      this.progress = 0;
      if (window.ProgressEvent != null) {
        size = null;
        request.addEventListener('progress', function (evt) {
          if (evt.lengthComputable) {
            return _this.progress = 100 * evt.loaded / evt.total;
          } else {
            return _this.progress = _this.progress + (100 - _this.progress) / 2;
          }
        }, false);
        _ref2 = ['load', 'abort', 'timeout', 'error'];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          event = _ref2[_j];
          request.addEventListener(event, function () {
            return _this.progress = 100;
          }, false);
        }
      } else {
        _onreadystatechange = request.onreadystatechange;
        request.onreadystatechange = function () {
          var _ref3;
          if ((_ref3 = request.readyState) === 0 || _ref3 === 4) {
            _this.progress = 100;
          } else if (request.readyState === 3) {
            _this.progress = 50;
          }
          return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
        };
      }
    }

    return XHRRequestTracker;
  }();

  SocketRequestTracker = function () {
    function SocketRequestTracker(request) {
      var event,
          _j,
          _len1,
          _ref2,
          _this = this;
      this.progress = 0;
      _ref2 = ['error', 'open'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        event = _ref2[_j];
        request.addEventListener(event, function () {
          return _this.progress = 100;
        }, false);
      }
    }

    return SocketRequestTracker;
  }();

  ElementMonitor = function () {
    function ElementMonitor(options) {
      var selector, _j, _len1, _ref2;
      if (options == null) {
        options = {};
      }
      this.elements = [];
      if (options.selectors == null) {
        options.selectors = [];
      }
      _ref2 = options.selectors;
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        selector = _ref2[_j];
        this.elements.push(new ElementTracker(selector));
      }
    }

    return ElementMonitor;
  }();

  ElementTracker = function () {
    function ElementTracker(selector) {
      this.selector = selector;
      this.progress = 0;
      this.check();
    }

    ElementTracker.prototype.check = function () {
      var _this = this;
      if (document.querySelector(this.selector)) {
        return this.done();
      } else {
        return setTimeout(function () {
          return _this.check();
        }, options.elements.checkInterval);
      }
    };

    ElementTracker.prototype.done = function () {
      return this.progress = 100;
    };

    return ElementTracker;
  }();

  DocumentMonitor = function () {
    DocumentMonitor.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    };

    function DocumentMonitor() {
      var _onreadystatechange,
          _ref2,
          _this = this;
      this.progress = (_ref2 = this.states[document.readyState]) != null ? _ref2 : 100;
      _onreadystatechange = document.onreadystatechange;
      document.onreadystatechange = function () {
        if (_this.states[document.readyState] != null) {
          _this.progress = _this.states[document.readyState];
        }
        return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
      };
    }

    return DocumentMonitor;
  }();

  EventLagMonitor = function () {
    function EventLagMonitor() {
      var avg,
          interval,
          last,
          points,
          samples,
          _this = this;
      this.progress = 0;
      avg = 0;
      samples = [];
      points = 0;
      last = now();
      interval = setInterval(function () {
        var diff;
        diff = now() - last - 50;
        last = now();
        samples.push(diff);
        if (samples.length > options.eventLag.sampleCount) {
          samples.shift();
        }
        avg = avgAmplitude(samples);
        if (++points >= options.eventLag.minSamples && avg < options.eventLag.lagThreshold) {
          _this.progress = 100;
          return clearInterval(interval);
        } else {
          return _this.progress = 100 * (3 / (avg + 3));
        }
      }, 50);
    }

    return EventLagMonitor;
  }();

  Scaler = function () {
    function Scaler(source) {
      this.source = source;
      this.last = this.sinceLastUpdate = 0;
      this.rate = options.initialRate;
      this.catchup = 0;
      this.progress = this.lastProgress = 0;
      if (this.source != null) {
        this.progress = result(this.source, 'progress');
      }
    }

    Scaler.prototype.tick = function (frameTime, val) {
      var scaling;
      if (val == null) {
        val = result(this.source, 'progress');
      }
      if (val >= 100) {
        this.done = true;
      }
      if (val === this.last) {
        this.sinceLastUpdate += frameTime;
      } else {
        if (this.sinceLastUpdate) {
          this.rate = (val - this.last) / this.sinceLastUpdate;
        }
        this.catchup = (val - this.progress) / options.catchupTime;
        this.sinceLastUpdate = 0;
        this.last = val;
      }
      if (val > this.progress) {
        this.progress += this.catchup * frameTime;
      }
      scaling = 1 - Math.pow(this.progress / 100, options.easeFactor);
      this.progress += scaling * this.rate * frameTime;
      this.progress = Math.min(this.lastProgress + options.maxProgressPerFrame, this.progress);
      this.progress = Math.max(0, this.progress);
      this.progress = Math.min(100, this.progress);
      this.lastProgress = this.progress;
      return this.progress;
    };

    return Scaler;
  }();

  sources = null;

  scalers = null;

  bar = null;

  uniScaler = null;

  animation = null;

  cancelAnimation = null;

  Pace.running = false;

  handlePushState = function handlePushState() {
    if (options.restartOnPushState) {
      return Pace.restart();
    }
  };

  if (window.history.pushState != null) {
    _pushState = window.history.pushState;
    window.history.pushState = function () {
      handlePushState();
      return _pushState.apply(window.history, arguments);
    };
  }

  if (window.history.replaceState != null) {
    _replaceState = window.history.replaceState;
    window.history.replaceState = function () {
      handlePushState();
      return _replaceState.apply(window.history, arguments);
    };
  }

  SOURCE_KEYS = {
    ajax: AjaxMonitor,
    elements: ElementMonitor,
    document: DocumentMonitor,
    eventLag: EventLagMonitor
  };

  (init = function init() {
    var type, _j, _k, _len1, _len2, _ref2, _ref3, _ref4;
    Pace.sources = sources = [];
    _ref2 = ['ajax', 'elements', 'document', 'eventLag'];
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      type = _ref2[_j];
      if (options[type] !== false) {
        sources.push(new SOURCE_KEYS[type](options[type]));
      }
    }
    _ref4 = (_ref3 = options.extraSources) != null ? _ref3 : [];
    for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
      source = _ref4[_k];
      sources.push(new source(options));
    }
    Pace.bar = bar = new Bar();
    scalers = [];
    return uniScaler = new Scaler();
  })();

  Pace.stop = function () {
    Pace.trigger('stop');
    Pace.running = false;
    bar.destroy();
    cancelAnimation = true;
    if (animation != null) {
      if (typeof cancelAnimationFrame === "function") {
        cancelAnimationFrame(animation);
      }
      animation = null;
    }
    return init();
  };

  Pace.restart = function () {
    Pace.trigger('restart');
    Pace.stop();
    return Pace.start();
  };

  Pace.go = function () {
    var start;
    Pace.running = true;
    bar.render();
    start = now();
    cancelAnimation = false;
    return animation = runAnimation(function (frameTime, enqueueNextFrame) {
      var avg, count, done, element, elements, i, j, remaining, scaler, scalerList, sum, _j, _k, _len1, _len2, _ref2;
      remaining = 100 - bar.progress;
      count = sum = 0;
      done = true;
      for (i = _j = 0, _len1 = sources.length; _j < _len1; i = ++_j) {
        source = sources[i];
        scalerList = scalers[i] != null ? scalers[i] : scalers[i] = [];
        elements = (_ref2 = source.elements) != null ? _ref2 : [source];
        for (j = _k = 0, _len2 = elements.length; _k < _len2; j = ++_k) {
          element = elements[j];
          scaler = scalerList[j] != null ? scalerList[j] : scalerList[j] = new Scaler(element);
          done &= scaler.done;
          if (scaler.done) {
            continue;
          }
          count++;
          sum += scaler.tick(frameTime);
        }
      }
      avg = sum / count;
      bar.update(uniScaler.tick(frameTime, avg));
      if (bar.done() || done || cancelAnimation) {
        bar.update(100);
        Pace.trigger('done');
        return setTimeout(function () {
          bar.finish();
          Pace.running = false;
          return Pace.trigger('hide');
        }, Math.max(options.ghostTime, Math.max(options.minTime - (now() - start), 0)));
      } else {
        return enqueueNextFrame();
      }
    });
  };

  Pace.start = function (_options) {
    _extend(options, _options);
    Pace.running = true;
    try {
      bar.render();
    } catch (_error) {
      NoTargetError = _error;
    }
    if (!document.querySelector('.pace')) {
      return setTimeout(Pace.start, 50);
    } else {
      Pace.trigger('start');
      return Pace.go();
    }
  };

  if (typeof define === 'function' && define.amd) {
    define(['pace'], function () {
      return Pace;
    });
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = Pace;
  } else {
    if (options.startOnPageLoad) {
      Pace.start();
    }
  }
}).call(undefined);
'use strict';

jQuery(function ($) {
    'use strict';

    // Flexy header

    flexy_header.init();

    // Sidr
    $('.slinky-menu').find('ul, li, a').removeClass();

    $('.sidr-toggle--right').sidr({
        name: 'sidr-main',
        side: 'right',
        renaming: false,
        body: '.layout__wrapper',
        source: '.sidr-source-provider'
    });

    // Slinky
    $('.sidr .slinky-menu').slinky({
        title: true,
        label: ''
    });

    // Enable / disable Bootstrap tooltips, based upon touch events
    if (Modernizr.touchevents) {
        $('[data-toggle="tooltip"]').tooltip('hide');
    } else {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // Flexy header form
    function _set_flexy_header_form_position() {
        var $form = $('.flexy-header__form'),
            overlap_width = 125,
            // in pixels (also set in CSS)
        window_width = $(window).width(),
            container_width = $('.flexy-header__row--second > .container').outerWidth(),
            diff = (window_width - container_width) / 2;

        $form.css('width', diff + overlap_width);
    }
    _set_flexy_header_form_position();

    // Recalculate width of form when window is resized
    $(window).on('resize', function () {
        _set_flexy_header_form_position();
    });

    $('.accordion__heading').on('click', function (event) {
        var $element = $(this),
            $parent = $element.parents('.accordion');

        $parent.toggleClass('open');
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5qcyIsImZsZXh5LWhlYWRlci5qcyIsImZsZXh5LW5hdmlnYXRpb24uanMiLCJqcXVlcnkuc2lkci5qcyIsImpxdWVyeS5zbGlua3kuanMiLCJwYWNlLmpzIiwiYXBwLmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsIkVycm9yIiwiJCIsInZlcnNpb24iLCJmbiIsImpxdWVyeSIsInNwbGl0IiwidHJhbnNpdGlvbkVuZCIsImVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHJhbnNFbmRFdmVudE5hbWVzIiwiV2Via2l0VHJhbnNpdGlvbiIsIk1velRyYW5zaXRpb24iLCJPVHJhbnNpdGlvbiIsInRyYW5zaXRpb24iLCJuYW1lIiwic3R5bGUiLCJ1bmRlZmluZWQiLCJlbmQiLCJlbXVsYXRlVHJhbnNpdGlvbkVuZCIsImR1cmF0aW9uIiwiY2FsbGVkIiwiJGVsIiwib25lIiwiY2FsbGJhY2siLCJ0cmlnZ2VyIiwic3VwcG9ydCIsInNldFRpbWVvdXQiLCJldmVudCIsInNwZWNpYWwiLCJic1RyYW5zaXRpb25FbmQiLCJiaW5kVHlwZSIsImRlbGVnYXRlVHlwZSIsImhhbmRsZSIsImUiLCJ0YXJnZXQiLCJpcyIsImhhbmRsZU9iaiIsImhhbmRsZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsImRpc21pc3MiLCJBbGVydCIsIm9uIiwiY2xvc2UiLCJWRVJTSU9OIiwiVFJBTlNJVElPTl9EVVJBVElPTiIsInByb3RvdHlwZSIsIiR0aGlzIiwic2VsZWN0b3IiLCJhdHRyIiwicmVwbGFjZSIsIiRwYXJlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsImNsb3Nlc3QiLCJFdmVudCIsImlzRGVmYXVsdFByZXZlbnRlZCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlRWxlbWVudCIsImRldGFjaCIsInJlbW92ZSIsImhhc0NsYXNzIiwiUGx1Z2luIiwib3B0aW9uIiwiZWFjaCIsImRhdGEiLCJjYWxsIiwib2xkIiwiYWxlcnQiLCJDb25zdHJ1Y3RvciIsIm5vQ29uZmxpY3QiLCJCdXR0b24iLCJlbGVtZW50Iiwib3B0aW9ucyIsIiRlbGVtZW50IiwiZXh0ZW5kIiwiREVGQVVMVFMiLCJpc0xvYWRpbmciLCJsb2FkaW5nVGV4dCIsInNldFN0YXRlIiwic3RhdGUiLCJkIiwidmFsIiwicmVzZXRUZXh0IiwicHJveHkiLCJhZGRDbGFzcyIsInByb3AiLCJyZW1vdmVBdHRyIiwidG9nZ2xlIiwiY2hhbmdlZCIsIiRpbnB1dCIsImZpbmQiLCJ0b2dnbGVDbGFzcyIsImJ1dHRvbiIsIiRidG4iLCJmaXJzdCIsInRlc3QiLCJ0eXBlIiwiQ2Fyb3VzZWwiLCIkaW5kaWNhdG9ycyIsInBhdXNlZCIsInNsaWRpbmciLCJpbnRlcnZhbCIsIiRhY3RpdmUiLCIkaXRlbXMiLCJrZXlib2FyZCIsImtleWRvd24iLCJwYXVzZSIsImRvY3VtZW50RWxlbWVudCIsImN5Y2xlIiwid3JhcCIsInRhZ05hbWUiLCJ3aGljaCIsInByZXYiLCJuZXh0IiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiZ2V0SXRlbUluZGV4IiwiaXRlbSIsInBhcmVudCIsImNoaWxkcmVuIiwiaW5kZXgiLCJnZXRJdGVtRm9yRGlyZWN0aW9uIiwiZGlyZWN0aW9uIiwiYWN0aXZlIiwiYWN0aXZlSW5kZXgiLCJ3aWxsV3JhcCIsImRlbHRhIiwiaXRlbUluZGV4IiwiZXEiLCJ0byIsInBvcyIsInRoYXQiLCJzbGlkZSIsIiRuZXh0IiwiaXNDeWNsaW5nIiwicmVsYXRlZFRhcmdldCIsInNsaWRlRXZlbnQiLCIkbmV4dEluZGljYXRvciIsInNsaWRFdmVudCIsIm9mZnNldFdpZHRoIiwiam9pbiIsImFjdGlvbiIsImNhcm91c2VsIiwiY2xpY2tIYW5kbGVyIiwiaHJlZiIsIiR0YXJnZXQiLCJzbGlkZUluZGV4Iiwid2luZG93IiwiJGNhcm91c2VsIiwiQ29sbGFwc2UiLCIkdHJpZ2dlciIsImlkIiwidHJhbnNpdGlvbmluZyIsImdldFBhcmVudCIsImFkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyIsImRpbWVuc2lvbiIsImhhc1dpZHRoIiwic2hvdyIsImFjdGl2ZXNEYXRhIiwiYWN0aXZlcyIsInN0YXJ0RXZlbnQiLCJjb21wbGV0ZSIsInNjcm9sbFNpemUiLCJjYW1lbENhc2UiLCJoaWRlIiwib2Zmc2V0SGVpZ2h0IiwiaSIsImdldFRhcmdldEZyb21UcmlnZ2VyIiwiaXNPcGVuIiwiY29sbGFwc2UiLCJiYWNrZHJvcCIsIkRyb3Bkb3duIiwiY2xlYXJNZW51cyIsImNvbnRhaW5zIiwiaXNBY3RpdmUiLCJpbnNlcnRBZnRlciIsInN0b3BQcm9wYWdhdGlvbiIsImRlc2MiLCJkcm9wZG93biIsIk1vZGFsIiwiJGJvZHkiLCJib2R5IiwiJGRpYWxvZyIsIiRiYWNrZHJvcCIsImlzU2hvd24iLCJvcmlnaW5hbEJvZHlQYWQiLCJzY3JvbGxiYXJXaWR0aCIsImlnbm9yZUJhY2tkcm9wQ2xpY2siLCJyZW1vdGUiLCJsb2FkIiwiQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTiIsIl9yZWxhdGVkVGFyZ2V0IiwiY2hlY2tTY3JvbGxiYXIiLCJzZXRTY3JvbGxiYXIiLCJlc2NhcGUiLCJyZXNpemUiLCJhcHBlbmRUbyIsInNjcm9sbFRvcCIsImFkanVzdERpYWxvZyIsImVuZm9yY2VGb2N1cyIsIm9mZiIsImhpZGVNb2RhbCIsImhhcyIsImhhbmRsZVVwZGF0ZSIsInJlc2V0QWRqdXN0bWVudHMiLCJyZXNldFNjcm9sbGJhciIsInJlbW92ZUJhY2tkcm9wIiwiYW5pbWF0ZSIsImRvQW5pbWF0ZSIsImN1cnJlbnRUYXJnZXQiLCJmb2N1cyIsImNhbGxiYWNrUmVtb3ZlIiwibW9kYWxJc092ZXJmbG93aW5nIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY3NzIiwicGFkZGluZ0xlZnQiLCJib2R5SXNPdmVyZmxvd2luZyIsInBhZGRpbmdSaWdodCIsImZ1bGxXaW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJkb2N1bWVudEVsZW1lbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmlnaHQiLCJNYXRoIiwiYWJzIiwibGVmdCIsImNsaWVudFdpZHRoIiwibWVhc3VyZVNjcm9sbGJhciIsImJvZHlQYWQiLCJwYXJzZUludCIsInNjcm9sbERpdiIsImNsYXNzTmFtZSIsImFwcGVuZCIsInJlbW92ZUNoaWxkIiwibW9kYWwiLCJzaG93RXZlbnQiLCJUb29sdGlwIiwiZW5hYmxlZCIsInRpbWVvdXQiLCJob3ZlclN0YXRlIiwiaW5TdGF0ZSIsImluaXQiLCJhbmltYXRpb24iLCJwbGFjZW1lbnQiLCJ0ZW1wbGF0ZSIsInRpdGxlIiwiZGVsYXkiLCJodG1sIiwiY29udGFpbmVyIiwidmlld3BvcnQiLCJwYWRkaW5nIiwiZ2V0T3B0aW9ucyIsIiR2aWV3cG9ydCIsImlzRnVuY3Rpb24iLCJjbGljayIsImhvdmVyIiwiY29uc3RydWN0b3IiLCJ0cmlnZ2VycyIsImV2ZW50SW4iLCJldmVudE91dCIsImVudGVyIiwibGVhdmUiLCJfb3B0aW9ucyIsImZpeFRpdGxlIiwiZ2V0RGVmYXVsdHMiLCJnZXREZWxlZ2F0ZU9wdGlvbnMiLCJkZWZhdWx0cyIsImtleSIsInZhbHVlIiwib2JqIiwic2VsZiIsInRpcCIsImNsZWFyVGltZW91dCIsImlzSW5TdGF0ZVRydWUiLCJoYXNDb250ZW50IiwiaW5Eb20iLCJvd25lckRvY3VtZW50IiwiJHRpcCIsInRpcElkIiwiZ2V0VUlEIiwic2V0Q29udGVudCIsImF1dG9Ub2tlbiIsImF1dG9QbGFjZSIsInRvcCIsImRpc3BsYXkiLCJnZXRQb3NpdGlvbiIsImFjdHVhbFdpZHRoIiwiYWN0dWFsSGVpZ2h0Iiwib3JnUGxhY2VtZW50Iiwidmlld3BvcnREaW0iLCJib3R0b20iLCJ3aWR0aCIsImNhbGN1bGF0ZWRPZmZzZXQiLCJnZXRDYWxjdWxhdGVkT2Zmc2V0IiwiYXBwbHlQbGFjZW1lbnQiLCJwcmV2SG92ZXJTdGF0ZSIsIm9mZnNldCIsImhlaWdodCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJpc05hTiIsInNldE9mZnNldCIsInVzaW5nIiwicHJvcHMiLCJyb3VuZCIsImdldFZpZXdwb3J0QWRqdXN0ZWREZWx0YSIsImlzVmVydGljYWwiLCJhcnJvd0RlbHRhIiwiYXJyb3dPZmZzZXRQb3NpdGlvbiIsInJlcGxhY2VBcnJvdyIsImFycm93IiwiZ2V0VGl0bGUiLCIkZSIsImlzQm9keSIsImVsUmVjdCIsImlzU3ZnIiwiU1ZHRWxlbWVudCIsImVsT2Zmc2V0Iiwic2Nyb2xsIiwib3V0ZXJEaW1zIiwidmlld3BvcnRQYWRkaW5nIiwidmlld3BvcnREaW1lbnNpb25zIiwidG9wRWRnZU9mZnNldCIsImJvdHRvbUVkZ2VPZmZzZXQiLCJsZWZ0RWRnZU9mZnNldCIsInJpZ2h0RWRnZU9mZnNldCIsIm8iLCJwcmVmaXgiLCJyYW5kb20iLCJnZXRFbGVtZW50QnlJZCIsIiRhcnJvdyIsImVuYWJsZSIsImRpc2FibGUiLCJ0b2dnbGVFbmFibGVkIiwiZGVzdHJveSIsInJlbW92ZURhdGEiLCJ0b29sdGlwIiwiUG9wb3ZlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwicG9wb3ZlciIsIlNjcm9sbFNweSIsIiRzY3JvbGxFbGVtZW50Iiwib2Zmc2V0cyIsInRhcmdldHMiLCJhY3RpdmVUYXJnZXQiLCJwcm9jZXNzIiwicmVmcmVzaCIsImdldFNjcm9sbEhlaWdodCIsIm1heCIsIm9mZnNldE1ldGhvZCIsIm9mZnNldEJhc2UiLCJpc1dpbmRvdyIsIm1hcCIsIiRocmVmIiwic29ydCIsImEiLCJiIiwicHVzaCIsIm1heFNjcm9sbCIsImFjdGl2YXRlIiwiY2xlYXIiLCJwYXJlbnRzIiwicGFyZW50c1VudGlsIiwic2Nyb2xsc3B5IiwiJHNweSIsIlRhYiIsIiR1bCIsIiRwcmV2aW91cyIsImhpZGVFdmVudCIsInRhYiIsIkFmZml4IiwiY2hlY2tQb3NpdGlvbiIsImNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wIiwiYWZmaXhlZCIsInVucGluIiwicGlubmVkT2Zmc2V0IiwiUkVTRVQiLCJnZXRTdGF0ZSIsIm9mZnNldFRvcCIsIm9mZnNldEJvdHRvbSIsInBvc2l0aW9uIiwidGFyZ2V0SGVpZ2h0IiwiaW5pdGlhbGl6aW5nIiwiY29sbGlkZXJUb3AiLCJjb2xsaWRlckhlaWdodCIsImdldFBpbm5lZE9mZnNldCIsImFmZml4IiwiYWZmaXhUeXBlIiwiZmxleHlfaGVhZGVyIiwicHViIiwiJGhlYWRlcl9zdGF0aWMiLCIkaGVhZGVyX3N0aWNreSIsInVwZGF0ZV9pbnRlcnZhbCIsInRvbGVyYW5jZSIsInVwd2FyZCIsImRvd253YXJkIiwiX2dldF9vZmZzZXRfZnJvbV9lbGVtZW50c19ib3R0b20iLCJjbGFzc2VzIiwicGlubmVkIiwidW5waW5uZWQiLCJ3YXNfc2Nyb2xsZWQiLCJsYXN0X2Rpc3RhbmNlX2Zyb21fdG9wIiwicmVnaXN0ZXJFdmVudEhhbmRsZXJzIiwicmVnaXN0ZXJCb290RXZlbnRIYW5kbGVycyIsImRvY3VtZW50X3dhc19zY3JvbGxlZCIsImVsZW1lbnRfaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJlbGVtZW50X29mZnNldCIsImN1cnJlbnRfZGlzdGFuY2VfZnJvbV90b3AiLCJmbGV4eV9uYXZpZ2F0aW9uIiwibGF5b3V0X2NsYXNzZXMiLCJ1cGdyYWRlIiwiJG5hdmlnYXRpb25zIiwibmF2aWdhdGlvbiIsIiRuYXZpZ2F0aW9uIiwiJG1lZ2FtZW51cyIsImRyb3Bkb3duX21lZ2FtZW51IiwiJGRyb3Bkb3duX21lZ2FtZW51IiwiZHJvcGRvd25faGFzX21lZ2FtZW51IiwiaXNfdXBncmFkZWQiLCJuYXZpZ2F0aW9uX2hhc19tZWdhbWVudSIsIiRtZWdhbWVudSIsImhhc19vYmZ1c2NhdG9yIiwib2JmdXNjYXRvciIsImJhYmVsSGVscGVycyIsImNsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJUeXBlRXJyb3IiLCJjcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJzaWRyU3RhdHVzIiwibW92aW5nIiwib3BlbmVkIiwiaGVscGVyIiwiaXNVcmwiLCJzdHIiLCJwYXR0ZXJuIiwiUmVnRXhwIiwiYWRkUHJlZml4ZXMiLCJhZGRQcmVmaXgiLCJhdHRyaWJ1dGUiLCJ0b1JlcGxhY2UiLCJ0cmFuc2l0aW9ucyIsInN1cHBvcnRlZCIsInByb3BlcnR5IiwicHJlZml4ZXMiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0ciIsInRvTG93ZXJDYXNlIiwiJCQyIiwiYm9keUFuaW1hdGlvbkNsYXNzIiwib3BlbkFjdGlvbiIsImNsb3NlQWN0aW9uIiwidHJhbnNpdGlvbkVuZEV2ZW50IiwiTWVudSIsIm9wZW5DbGFzcyIsIm1lbnVXaWR0aCIsIm91dGVyV2lkdGgiLCJzcGVlZCIsInNpZGUiLCJkaXNwbGFjZSIsInRpbWluZyIsIm1ldGhvZCIsIm9uT3BlbkNhbGxiYWNrIiwib25DbG9zZUNhbGxiYWNrIiwib25PcGVuRW5kQ2FsbGJhY2siLCJvbkNsb3NlRW5kQ2FsbGJhY2siLCJnZXRBbmltYXRpb24iLCJwcmVwYXJlQm9keSIsIiRodG1sIiwib3BlbkJvZHkiLCJib2R5QW5pbWF0aW9uIiwicXVldWUiLCJvbkNsb3NlQm9keSIsInJlc2V0U3R5bGVzIiwidW5iaW5kIiwiY2xvc2VCb2R5IiwiX3RoaXMiLCJtb3ZlQm9keSIsIm9uT3Blbk1lbnUiLCJvcGVuTWVudSIsIl90aGlzMiIsIiRpdGVtIiwibWVudUFuaW1hdGlvbiIsIm9uQ2xvc2VNZW51IiwiY2xvc2VNZW51IiwiX3RoaXMzIiwibW92ZU1lbnUiLCJtb3ZlIiwib3BlbiIsIl90aGlzNCIsImFscmVhZHlPcGVuZWRNZW51IiwiJCQxIiwiZXhlY3V0ZSIsInNpZHIiLCJlcnJvciIsInB1YmxpY01ldGhvZHMiLCJtZXRob2ROYW1lIiwibWV0aG9kcyIsImdldE1ldGhvZCIsIkFycmF5Iiwic2xpY2UiLCIkJDMiLCJmaWxsQ29udGVudCIsIiRzaWRlTWVudSIsInNldHRpbmdzIiwic291cmNlIiwibmV3Q29udGVudCIsImdldCIsImh0bWxDb250ZW50Iiwic2VsZWN0b3JzIiwicmVuYW1pbmciLCIkaHRtbENvbnRlbnQiLCJmblNpZHIiLCJiaW5kIiwib25PcGVuIiwib25DbG9zZSIsIm9uT3BlbkVuZCIsIm9uQ2xvc2VFbmQiLCJmbGFnIiwidCIsInNsaW5reSIsInMiLCJsYWJlbCIsIm4iLCJyIiwibCIsInByZXBlbmQiLCJ0ZXh0IiwiRGF0ZSIsIm5vdyIsImp1bXAiLCJob21lIiwiYyIsIkFqYXhNb25pdG9yIiwiQmFyIiwiRG9jdW1lbnRNb25pdG9yIiwiRWxlbWVudE1vbml0b3IiLCJFbGVtZW50VHJhY2tlciIsIkV2ZW50TGFnTW9uaXRvciIsIkV2ZW50ZWQiLCJFdmVudHMiLCJOb1RhcmdldEVycm9yIiwiUGFjZSIsIlJlcXVlc3RJbnRlcmNlcHQiLCJTT1VSQ0VfS0VZUyIsIlNjYWxlciIsIlNvY2tldFJlcXVlc3RUcmFja2VyIiwiWEhSUmVxdWVzdFRyYWNrZXIiLCJhdmdBbXBsaXR1ZGUiLCJiYXIiLCJjYW5jZWxBbmltYXRpb24iLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImRlZmF1bHRPcHRpb25zIiwiZXh0ZW5kTmF0aXZlIiwiZ2V0RnJvbURPTSIsImdldEludGVyY2VwdCIsImhhbmRsZVB1c2hTdGF0ZSIsImlnbm9yZVN0YWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVzdWx0IiwicnVuQW5pbWF0aW9uIiwic2NhbGVycyIsInNob3VsZElnbm9yZVVSTCIsInNob3VsZFRyYWNrIiwic291cmNlcyIsInVuaVNjYWxlciIsIl9XZWJTb2NrZXQiLCJfWERvbWFpblJlcXVlc3QiLCJfWE1MSHR0cFJlcXVlc3QiLCJfaSIsIl9pbnRlcmNlcHQiLCJfbGVuIiwiX3B1c2hTdGF0ZSIsIl9yZWYiLCJfcmVmMSIsIl9yZXBsYWNlU3RhdGUiLCJfX3NsaWNlIiwiX19oYXNQcm9wIiwiaGFzT3duUHJvcGVydHkiLCJfX2V4dGVuZHMiLCJjaGlsZCIsImN0b3IiLCJfX3N1cGVyX18iLCJfX2luZGV4T2YiLCJpbmRleE9mIiwiY2F0Y2h1cFRpbWUiLCJpbml0aWFsUmF0ZSIsIm1pblRpbWUiLCJnaG9zdFRpbWUiLCJtYXhQcm9ncmVzc1BlckZyYW1lIiwiZWFzZUZhY3RvciIsInN0YXJ0T25QYWdlTG9hZCIsInJlc3RhcnRPblB1c2hTdGF0ZSIsInJlc3RhcnRPblJlcXVlc3RBZnRlciIsImVsZW1lbnRzIiwiY2hlY2tJbnRlcnZhbCIsImV2ZW50TGFnIiwibWluU2FtcGxlcyIsInNhbXBsZUNvdW50IiwibGFnVGhyZXNob2xkIiwiYWpheCIsInRyYWNrTWV0aG9kcyIsInRyYWNrV2ViU29ja2V0cyIsImlnbm9yZVVSTHMiLCJwZXJmb3JtYW5jZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJsYXN0IiwidGljayIsImRpZmYiLCJhcmdzIiwib3V0IiwiYXJyIiwiY291bnQiLCJzdW0iLCJ2IiwianNvbiIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJKU09OIiwicGFyc2UiLCJfZXJyb3IiLCJjb25zb2xlIiwiY3R4Iiwib25jZSIsIl9iYXNlIiwiYmluZGluZ3MiLCJfcmVzdWx0cyIsInNwbGljZSIsInBhY2VPcHRpb25zIiwiX3N1cGVyIiwicHJvZ3Jlc3MiLCJnZXRFbGVtZW50IiwidGFyZ2V0RWxlbWVudCIsImlubmVySFRNTCIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsImZpbmlzaCIsInVwZGF0ZSIsInByb2ciLCJyZW5kZXIiLCJwYXJlbnROb2RlIiwicHJvZ3Jlc3NTdHIiLCJ0cmFuc2Zvcm0iLCJfaiIsIl9sZW4xIiwiX3JlZjIiLCJsYXN0UmVuZGVyZWRQcm9ncmVzcyIsInNldEF0dHJpYnV0ZSIsImRvbmUiLCJiaW5kaW5nIiwiWE1MSHR0cFJlcXVlc3QiLCJYRG9tYWluUmVxdWVzdCIsIldlYlNvY2tldCIsImZyb20iLCJpZ25vcmUiLCJyZXQiLCJ1bnNoaWZ0Iiwic2hpZnQiLCJ0cmFjayIsIm1vbml0b3JYSFIiLCJyZXEiLCJfb3BlbiIsInVybCIsImFzeW5jIiwicmVxdWVzdCIsImZsYWdzIiwicHJvdG9jb2xzIiwiX2FyZyIsImFmdGVyIiwicnVubmluZyIsInN0aWxsQWN0aXZlIiwiX3JlZjMiLCJyZWFkeVN0YXRlIiwicmVzdGFydCIsIndhdGNoIiwidHJhY2tlciIsInNpemUiLCJfb25yZWFkeXN0YXRlY2hhbmdlIiwiUHJvZ3Jlc3NFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJsZW5ndGhDb21wdXRhYmxlIiwibG9hZGVkIiwidG90YWwiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJjaGVjayIsInN0YXRlcyIsImxvYWRpbmciLCJpbnRlcmFjdGl2ZSIsImF2ZyIsInBvaW50cyIsInNhbXBsZXMiLCJzaW5jZUxhc3RVcGRhdGUiLCJyYXRlIiwiY2F0Y2h1cCIsImxhc3RQcm9ncmVzcyIsImZyYW1lVGltZSIsInNjYWxpbmciLCJwb3ciLCJtaW4iLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwicmVwbGFjZVN0YXRlIiwiX2siLCJfbGVuMiIsIl9yZWY0IiwiZXh0cmFTb3VyY2VzIiwic3RvcCIsInN0YXJ0IiwiZ28iLCJlbnF1ZXVlTmV4dEZyYW1lIiwiaiIsInJlbWFpbmluZyIsInNjYWxlciIsInNjYWxlckxpc3QiLCJkZWZpbmUiLCJhbWQiLCJleHBvcnRzIiwibW9kdWxlIiwiTW9kZXJuaXpyIiwidG91Y2hldmVudHMiLCJfc2V0X2ZsZXh5X2hlYWRlcl9mb3JtX3Bvc2l0aW9uIiwiJGZvcm0iLCJvdmVybGFwX3dpZHRoIiwid2luZG93X3dpZHRoIiwiY29udGFpbmVyX3dpZHRoIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7OztBQU1BLElBQUksT0FBT0EsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQyxRQUFNLElBQUlDLEtBQUosQ0FB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aWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBCb290c3RyYXAgdjMuMy43IChodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbSlcbiAqIENvcHlyaWdodCAyMDExLTIwMTYgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKi9cblxuaWYgKHR5cGVvZiBqUXVlcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gIHRocm93IG5ldyBFcnJvcignQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeScpXG59XG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciB2ZXJzaW9uID0gJC5mbi5qcXVlcnkuc3BsaXQoJyAnKVswXS5zcGxpdCgnLicpXG4gIGlmICgodmVyc2lvblswXSA8IDIgJiYgdmVyc2lvblsxXSA8IDkpIHx8ICh2ZXJzaW9uWzBdID09IDEgJiYgdmVyc2lvblsxXSA9PSA5ICYmIHZlcnNpb25bMl0gPCAxKSB8fCAodmVyc2lvblswXSA+IDMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCb290c3RyYXBcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgalF1ZXJ5IHZlcnNpb24gMS45LjEgb3IgaGlnaGVyLCBidXQgbG93ZXIgdGhhbiB2ZXJzaW9uIDQnKVxuICB9XG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiB0cmFuc2l0aW9uLmpzIHYzLjMuN1xuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jdHJhbnNpdGlvbnNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNiBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBDU1MgVFJBTlNJVElPTiBTVVBQT1JUIChTaG91dG91dDogaHR0cDovL3d3dy5tb2Rlcm5penIuY29tLylcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvbkVuZCgpIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib290c3RyYXAnKVxuXG4gICAgdmFyIHRyYW5zRW5kRXZlbnROYW1lcyA9IHtcbiAgICAgIFdlYmtpdFRyYW5zaXRpb24gOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgICBNb3pUcmFuc2l0aW9uICAgIDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgT1RyYW5zaXRpb24gICAgICA6ICdvVHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZCcsXG4gICAgICB0cmFuc2l0aW9uICAgICAgIDogJ3RyYW5zaXRpb25lbmQnXG4gICAgfVxuXG4gICAgZm9yICh2YXIgbmFtZSBpbiB0cmFuc0VuZEV2ZW50TmFtZXMpIHtcbiAgICAgIGlmIChlbC5zdHlsZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB7IGVuZDogdHJhbnNFbmRFdmVudE5hbWVzW25hbWVdIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2UgLy8gZXhwbGljaXQgZm9yIGllOCAoICAuXy4pXG4gIH1cblxuICAvLyBodHRwOi8vYmxvZy5hbGV4bWFjY2F3LmNvbS9jc3MtdHJhbnNpdGlvbnNcbiAgJC5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgIHZhciBjYWxsZWQgPSBmYWxzZVxuICAgIHZhciAkZWwgPSB0aGlzXG4gICAgJCh0aGlzKS5vbmUoJ2JzVHJhbnNpdGlvbkVuZCcsIGZ1bmN0aW9uICgpIHsgY2FsbGVkID0gdHJ1ZSB9KVxuICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgaWYgKCFjYWxsZWQpICQoJGVsKS50cmlnZ2VyKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCkgfVxuICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIGR1cmF0aW9uKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAkKGZ1bmN0aW9uICgpIHtcbiAgICAkLnN1cHBvcnQudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25FbmQoKVxuXG4gICAgaWYgKCEkLnN1cHBvcnQudHJhbnNpdGlvbikgcmV0dXJuXG5cbiAgICAkLmV2ZW50LnNwZWNpYWwuYnNUcmFuc2l0aW9uRW5kID0ge1xuICAgICAgYmluZFR5cGU6ICQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCxcbiAgICAgIGRlbGVnYXRlVHlwZTogJC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLFxuICAgICAgaGFuZGxlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoJChlLnRhcmdldCkuaXModGhpcykpIHJldHVybiBlLmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IGFsZXJ0LmpzIHYzLjMuN1xuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jYWxlcnRzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTYgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gQUxFUlQgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIGRpc21pc3MgPSAnW2RhdGEtZGlzbWlzcz1cImFsZXJ0XCJdJ1xuICB2YXIgQWxlcnQgICA9IGZ1bmN0aW9uIChlbCkge1xuICAgICQoZWwpLm9uKCdjbGljaycsIGRpc21pc3MsIHRoaXMuY2xvc2UpXG4gIH1cblxuICBBbGVydC5WRVJTSU9OID0gJzMuMy43J1xuXG4gIEFsZXJ0LlRSQU5TSVRJT05fRFVSQVRJT04gPSAxNTBcblxuICBBbGVydC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciAkdGhpcyAgICA9ICQodGhpcylcbiAgICB2YXIgc2VsZWN0b3IgPSAkdGhpcy5hdHRyKCdkYXRhLXRhcmdldCcpXG5cbiAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICBzZWxlY3RvciA9ICR0aGlzLmF0dHIoJ2hyZWYnKVxuICAgICAgc2VsZWN0b3IgPSBzZWxlY3RvciAmJiBzZWxlY3Rvci5yZXBsYWNlKC8uKig/PSNbXlxcc10qJCkvLCAnJykgLy8gc3RyaXAgZm9yIGllN1xuICAgIH1cblxuICAgIHZhciAkcGFyZW50ID0gJChzZWxlY3RvciA9PT0gJyMnID8gW10gOiBzZWxlY3RvcilcblxuICAgIGlmIChlKSBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmICghJHBhcmVudC5sZW5ndGgpIHtcbiAgICAgICRwYXJlbnQgPSAkdGhpcy5jbG9zZXN0KCcuYWxlcnQnKVxuICAgIH1cblxuICAgICRwYXJlbnQudHJpZ2dlcihlID0gJC5FdmVudCgnY2xvc2UuYnMuYWxlcnQnKSlcblxuICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgICRwYXJlbnQucmVtb3ZlQ2xhc3MoJ2luJylcblxuICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoKSB7XG4gICAgICAvLyBkZXRhY2ggZnJvbSBwYXJlbnQsIGZpcmUgZXZlbnQgdGhlbiBjbGVhbiB1cCBkYXRhXG4gICAgICAkcGFyZW50LmRldGFjaCgpLnRyaWdnZXIoJ2Nsb3NlZC5icy5hbGVydCcpLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgJC5zdXBwb3J0LnRyYW5zaXRpb24gJiYgJHBhcmVudC5oYXNDbGFzcygnZmFkZScpID9cbiAgICAgICRwYXJlbnRcbiAgICAgICAgLm9uZSgnYnNUcmFuc2l0aW9uRW5kJywgcmVtb3ZlRWxlbWVudClcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKEFsZXJ0LlRSQU5TSVRJT05fRFVSQVRJT04pIDpcbiAgICAgIHJlbW92ZUVsZW1lbnQoKVxuICB9XG5cblxuICAvLyBBTEVSVCBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIFBsdWdpbihvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICA9ICR0aGlzLmRhdGEoJ2JzLmFsZXJ0JylcblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy5hbGVydCcsIChkYXRhID0gbmV3IEFsZXJ0KHRoaXMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0uY2FsbCgkdGhpcylcbiAgICB9KVxuICB9XG5cbiAgdmFyIG9sZCA9ICQuZm4uYWxlcnRcblxuICAkLmZuLmFsZXJ0ICAgICAgICAgICAgID0gUGx1Z2luXG4gICQuZm4uYWxlcnQuQ29uc3RydWN0b3IgPSBBbGVydFxuXG5cbiAgLy8gQUxFUlQgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT1cblxuICAkLmZuLmFsZXJ0Lm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi5hbGVydCA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIEFMRVJUIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PT09XG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrLmJzLmFsZXJ0LmRhdGEtYXBpJywgZGlzbWlzcywgQWxlcnQucHJvdG90eXBlLmNsb3NlKVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiBidXR0b24uanMgdjMuMy43XG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyNidXR0b25zXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTYgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gQlVUVE9OIFBVQkxJQyBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBCdXR0b24gPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgID0gJChlbGVtZW50KVxuICAgIHRoaXMub3B0aW9ucyAgID0gJC5leHRlbmQoe30sIEJ1dHRvbi5ERUZBVUxUUywgb3B0aW9ucylcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gIH1cblxuICBCdXR0b24uVkVSU0lPTiAgPSAnMy4zLjcnXG5cbiAgQnV0dG9uLkRFRkFVTFRTID0ge1xuICAgIGxvYWRpbmdUZXh0OiAnbG9hZGluZy4uLidcbiAgfVxuXG4gIEJ1dHRvbi5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICB2YXIgZCAgICA9ICdkaXNhYmxlZCdcbiAgICB2YXIgJGVsICA9IHRoaXMuJGVsZW1lbnRcbiAgICB2YXIgdmFsICA9ICRlbC5pcygnaW5wdXQnKSA/ICd2YWwnIDogJ2h0bWwnXG4gICAgdmFyIGRhdGEgPSAkZWwuZGF0YSgpXG5cbiAgICBzdGF0ZSArPSAnVGV4dCdcblxuICAgIGlmIChkYXRhLnJlc2V0VGV4dCA9PSBudWxsKSAkZWwuZGF0YSgncmVzZXRUZXh0JywgJGVsW3ZhbF0oKSlcblxuICAgIC8vIHB1c2ggdG8gZXZlbnQgbG9vcCB0byBhbGxvdyBmb3JtcyB0byBzdWJtaXRcbiAgICBzZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24gKCkge1xuICAgICAgJGVsW3ZhbF0oZGF0YVtzdGF0ZV0gPT0gbnVsbCA/IHRoaXMub3B0aW9uc1tzdGF0ZV0gOiBkYXRhW3N0YXRlXSlcblxuICAgICAgaWYgKHN0YXRlID09ICdsb2FkaW5nVGV4dCcpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlXG4gICAgICAgICRlbC5hZGRDbGFzcyhkKS5hdHRyKGQsIGQpLnByb3AoZCwgdHJ1ZSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0xvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAkZWwucmVtb3ZlQ2xhc3MoZCkucmVtb3ZlQXR0cihkKS5wcm9wKGQsIGZhbHNlKVxuICAgICAgfVxuICAgIH0sIHRoaXMpLCAwKVxuICB9XG5cbiAgQnV0dG9uLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNoYW5nZWQgPSB0cnVlXG4gICAgdmFyICRwYXJlbnQgPSB0aGlzLiRlbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0nKVxuXG4gICAgaWYgKCRwYXJlbnQubGVuZ3RoKSB7XG4gICAgICB2YXIgJGlucHV0ID0gdGhpcy4kZWxlbWVudC5maW5kKCdpbnB1dCcpXG4gICAgICBpZiAoJGlucHV0LnByb3AoJ3R5cGUnKSA9PSAncmFkaW8nKSB7XG4gICAgICAgIGlmICgkaW5wdXQucHJvcCgnY2hlY2tlZCcpKSBjaGFuZ2VkID0gZmFsc2VcbiAgICAgICAgJHBhcmVudC5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB9IGVsc2UgaWYgKCRpbnB1dC5wcm9wKCd0eXBlJykgPT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBpZiAoKCRpbnB1dC5wcm9wKCdjaGVja2VkJykpICE9PSB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdhY3RpdmUnKSkgY2hhbmdlZCA9IGZhbHNlXG4gICAgICAgIHRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB9XG4gICAgICAkaW5wdXQucHJvcCgnY2hlY2tlZCcsIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpKVxuICAgICAgaWYgKGNoYW5nZWQpICRpbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2FyaWEtcHJlc3NlZCcsICF0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdhY3RpdmUnKSlcbiAgICAgIHRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG5cblxuICAvLyBCVVRUT04gUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gUGx1Z2luKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLmJ1dHRvbicpXG4gICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uXG5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMuYnV0dG9uJywgKGRhdGEgPSBuZXcgQnV0dG9uKHRoaXMsIG9wdGlvbnMpKSlcblxuICAgICAgaWYgKG9wdGlvbiA9PSAndG9nZ2xlJykgZGF0YS50b2dnbGUoKVxuICAgICAgZWxzZSBpZiAob3B0aW9uKSBkYXRhLnNldFN0YXRlKG9wdGlvbilcbiAgICB9KVxuICB9XG5cbiAgdmFyIG9sZCA9ICQuZm4uYnV0dG9uXG5cbiAgJC5mbi5idXR0b24gICAgICAgICAgICAgPSBQbHVnaW5cbiAgJC5mbi5idXR0b24uQ29uc3RydWN0b3IgPSBCdXR0b25cblxuXG4gIC8vIEJVVFRPTiBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLmJ1dHRvbi5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4uYnV0dG9uID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gQlVUVE9OIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PT09PVxuXG4gICQoZG9jdW1lbnQpXG4gICAgLm9uKCdjbGljay5icy5idXR0b24uZGF0YS1hcGknLCAnW2RhdGEtdG9nZ2xlXj1cImJ1dHRvblwiXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgJGJ0biA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5idG4nKVxuICAgICAgUGx1Z2luLmNhbGwoJGJ0biwgJ3RvZ2dsZScpXG4gICAgICBpZiAoISgkKGUudGFyZ2V0KS5pcygnaW5wdXRbdHlwZT1cInJhZGlvXCJdLCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSkpIHtcbiAgICAgICAgLy8gUHJldmVudCBkb3VibGUgY2xpY2sgb24gcmFkaW9zLCBhbmQgdGhlIGRvdWJsZSBzZWxlY3Rpb25zIChzbyBjYW5jZWxsYXRpb24pIG9uIGNoZWNrYm94ZXNcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIC8vIFRoZSB0YXJnZXQgY29tcG9uZW50IHN0aWxsIHJlY2VpdmUgdGhlIGZvY3VzXG4gICAgICAgIGlmICgkYnRuLmlzKCdpbnB1dCxidXR0b24nKSkgJGJ0bi50cmlnZ2VyKCdmb2N1cycpXG4gICAgICAgIGVsc2UgJGJ0bi5maW5kKCdpbnB1dDp2aXNpYmxlLGJ1dHRvbjp2aXNpYmxlJykuZmlyc3QoKS50cmlnZ2VyKCdmb2N1cycpXG4gICAgICB9XG4gICAgfSlcbiAgICAub24oJ2ZvY3VzLmJzLmJ1dHRvbi5kYXRhLWFwaSBibHVyLmJzLmJ1dHRvbi5kYXRhLWFwaScsICdbZGF0YS10b2dnbGVePVwiYnV0dG9uXCJdJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5idG4nKS50b2dnbGVDbGFzcygnZm9jdXMnLCAvXmZvY3VzKGluKT8kLy50ZXN0KGUudHlwZSkpXG4gICAgfSlcblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogY2Fyb3VzZWwuanMgdjMuMy43XG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyNjYXJvdXNlbFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE2IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIENBUk9VU0VMIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBDYXJvdXNlbCA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWxlbWVudCAgICA9ICQoZWxlbWVudClcbiAgICB0aGlzLiRpbmRpY2F0b3JzID0gdGhpcy4kZWxlbWVudC5maW5kKCcuY2Fyb3VzZWwtaW5kaWNhdG9ycycpXG4gICAgdGhpcy5vcHRpb25zICAgICA9IG9wdGlvbnNcbiAgICB0aGlzLnBhdXNlZCAgICAgID0gbnVsbFxuICAgIHRoaXMuc2xpZGluZyAgICAgPSBudWxsXG4gICAgdGhpcy5pbnRlcnZhbCAgICA9IG51bGxcbiAgICB0aGlzLiRhY3RpdmUgICAgID0gbnVsbFxuICAgIHRoaXMuJGl0ZW1zICAgICAgPSBudWxsXG5cbiAgICB0aGlzLm9wdGlvbnMua2V5Ym9hcmQgJiYgdGhpcy4kZWxlbWVudC5vbigna2V5ZG93bi5icy5jYXJvdXNlbCcsICQucHJveHkodGhpcy5rZXlkb3duLCB0aGlzKSlcblxuICAgIHRoaXMub3B0aW9ucy5wYXVzZSA9PSAnaG92ZXInICYmICEoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSAmJiB0aGlzLiRlbGVtZW50XG4gICAgICAub24oJ21vdXNlZW50ZXIuYnMuY2Fyb3VzZWwnLCAkLnByb3h5KHRoaXMucGF1c2UsIHRoaXMpKVxuICAgICAgLm9uKCdtb3VzZWxlYXZlLmJzLmNhcm91c2VsJywgJC5wcm94eSh0aGlzLmN5Y2xlLCB0aGlzKSlcbiAgfVxuXG4gIENhcm91c2VsLlZFUlNJT04gID0gJzMuMy43J1xuXG4gIENhcm91c2VsLlRSQU5TSVRJT05fRFVSQVRJT04gPSA2MDBcblxuICBDYXJvdXNlbC5ERUZBVUxUUyA9IHtcbiAgICBpbnRlcnZhbDogNTAwMCxcbiAgICBwYXVzZTogJ2hvdmVyJyxcbiAgICB3cmFwOiB0cnVlLFxuICAgIGtleWJvYXJkOiB0cnVlXG4gIH1cblxuICBDYXJvdXNlbC5wcm90b3R5cGUua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZS50YXJnZXQudGFnTmFtZSkpIHJldHVyblxuICAgIHN3aXRjaCAoZS53aGljaCkge1xuICAgICAgY2FzZSAzNzogdGhpcy5wcmV2KCk7IGJyZWFrXG4gICAgICBjYXNlIDM5OiB0aGlzLm5leHQoKTsgYnJlYWtcbiAgICAgIGRlZmF1bHQ6IHJldHVyblxuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgQ2Fyb3VzZWwucHJvdG90eXBlLmN5Y2xlID0gZnVuY3Rpb24gKGUpIHtcbiAgICBlIHx8ICh0aGlzLnBhdXNlZCA9IGZhbHNlKVxuXG4gICAgdGhpcy5pbnRlcnZhbCAmJiBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXG5cbiAgICB0aGlzLm9wdGlvbnMuaW50ZXJ2YWxcbiAgICAgICYmICF0aGlzLnBhdXNlZFxuICAgICAgJiYgKHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgkLnByb3h5KHRoaXMubmV4dCwgdGhpcyksIHRoaXMub3B0aW9ucy5pbnRlcnZhbCkpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgQ2Fyb3VzZWwucHJvdG90eXBlLmdldEl0ZW1JbmRleCA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgdGhpcy4kaXRlbXMgPSBpdGVtLnBhcmVudCgpLmNoaWxkcmVuKCcuaXRlbScpXG4gICAgcmV0dXJuIHRoaXMuJGl0ZW1zLmluZGV4KGl0ZW0gfHwgdGhpcy4kYWN0aXZlKVxuICB9XG5cbiAgQ2Fyb3VzZWwucHJvdG90eXBlLmdldEl0ZW1Gb3JEaXJlY3Rpb24gPSBmdW5jdGlvbiAoZGlyZWN0aW9uLCBhY3RpdmUpIHtcbiAgICB2YXIgYWN0aXZlSW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChhY3RpdmUpXG4gICAgdmFyIHdpbGxXcmFwID0gKGRpcmVjdGlvbiA9PSAncHJldicgJiYgYWN0aXZlSW5kZXggPT09IDApXG4gICAgICAgICAgICAgICAgfHwgKGRpcmVjdGlvbiA9PSAnbmV4dCcgJiYgYWN0aXZlSW5kZXggPT0gKHRoaXMuJGl0ZW1zLmxlbmd0aCAtIDEpKVxuICAgIGlmICh3aWxsV3JhcCAmJiAhdGhpcy5vcHRpb25zLndyYXApIHJldHVybiBhY3RpdmVcbiAgICB2YXIgZGVsdGEgPSBkaXJlY3Rpb24gPT0gJ3ByZXYnID8gLTEgOiAxXG4gICAgdmFyIGl0ZW1JbmRleCA9IChhY3RpdmVJbmRleCArIGRlbHRhKSAlIHRoaXMuJGl0ZW1zLmxlbmd0aFxuICAgIHJldHVybiB0aGlzLiRpdGVtcy5lcShpdGVtSW5kZXgpXG4gIH1cblxuICBDYXJvdXNlbC5wcm90b3R5cGUudG8gPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgdmFyIHRoYXQgICAgICAgID0gdGhpc1xuICAgIHZhciBhY3RpdmVJbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KHRoaXMuJGFjdGl2ZSA9IHRoaXMuJGVsZW1lbnQuZmluZCgnLml0ZW0uYWN0aXZlJykpXG5cbiAgICBpZiAocG9zID4gKHRoaXMuJGl0ZW1zLmxlbmd0aCAtIDEpIHx8IHBvcyA8IDApIHJldHVyblxuXG4gICAgaWYgKHRoaXMuc2xpZGluZykgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQub25lKCdzbGlkLmJzLmNhcm91c2VsJywgZnVuY3Rpb24gKCkgeyB0aGF0LnRvKHBvcykgfSkgLy8geWVzLCBcInNsaWRcIlxuICAgIGlmIChhY3RpdmVJbmRleCA9PSBwb3MpIHJldHVybiB0aGlzLnBhdXNlKCkuY3ljbGUoKVxuXG4gICAgcmV0dXJuIHRoaXMuc2xpZGUocG9zID4gYWN0aXZlSW5kZXggPyAnbmV4dCcgOiAncHJldicsIHRoaXMuJGl0ZW1zLmVxKHBvcykpXG4gIH1cblxuICBDYXJvdXNlbC5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoZSkge1xuICAgIGUgfHwgKHRoaXMucGF1c2VkID0gdHJ1ZSlcblxuICAgIGlmICh0aGlzLiRlbGVtZW50LmZpbmQoJy5uZXh0LCAucHJldicpLmxlbmd0aCAmJiAkLnN1cHBvcnQudHJhbnNpdGlvbikge1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZClcbiAgICAgIHRoaXMuY3ljbGUodHJ1ZSlcbiAgICB9XG5cbiAgICB0aGlzLmludGVydmFsID0gY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIENhcm91c2VsLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnNsaWRpbmcpIHJldHVyblxuICAgIHJldHVybiB0aGlzLnNsaWRlKCduZXh0JylcbiAgfVxuXG4gIENhcm91c2VsLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnNsaWRpbmcpIHJldHVyblxuICAgIHJldHVybiB0aGlzLnNsaWRlKCdwcmV2JylcbiAgfVxuXG4gIENhcm91c2VsLnByb3RvdHlwZS5zbGlkZSA9IGZ1bmN0aW9uICh0eXBlLCBuZXh0KSB7XG4gICAgdmFyICRhY3RpdmUgICA9IHRoaXMuJGVsZW1lbnQuZmluZCgnLml0ZW0uYWN0aXZlJylcbiAgICB2YXIgJG5leHQgICAgID0gbmV4dCB8fCB0aGlzLmdldEl0ZW1Gb3JEaXJlY3Rpb24odHlwZSwgJGFjdGl2ZSlcbiAgICB2YXIgaXNDeWNsaW5nID0gdGhpcy5pbnRlcnZhbFxuICAgIHZhciBkaXJlY3Rpb24gPSB0eXBlID09ICduZXh0JyA/ICdsZWZ0JyA6ICdyaWdodCdcbiAgICB2YXIgdGhhdCAgICAgID0gdGhpc1xuXG4gICAgaWYgKCRuZXh0Lmhhc0NsYXNzKCdhY3RpdmUnKSkgcmV0dXJuICh0aGlzLnNsaWRpbmcgPSBmYWxzZSlcblxuICAgIHZhciByZWxhdGVkVGFyZ2V0ID0gJG5leHRbMF1cbiAgICB2YXIgc2xpZGVFdmVudCA9ICQuRXZlbnQoJ3NsaWRlLmJzLmNhcm91c2VsJywge1xuICAgICAgcmVsYXRlZFRhcmdldDogcmVsYXRlZFRhcmdldCxcbiAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgfSlcbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoc2xpZGVFdmVudClcbiAgICBpZiAoc2xpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICB0aGlzLnNsaWRpbmcgPSB0cnVlXG5cbiAgICBpc0N5Y2xpbmcgJiYgdGhpcy5wYXVzZSgpXG5cbiAgICBpZiAodGhpcy4kaW5kaWNhdG9ycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuJGluZGljYXRvcnMuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgdmFyICRuZXh0SW5kaWNhdG9yID0gJCh0aGlzLiRpbmRpY2F0b3JzLmNoaWxkcmVuKClbdGhpcy5nZXRJdGVtSW5kZXgoJG5leHQpXSlcbiAgICAgICRuZXh0SW5kaWNhdG9yICYmICRuZXh0SW5kaWNhdG9yLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIHZhciBzbGlkRXZlbnQgPSAkLkV2ZW50KCdzbGlkLmJzLmNhcm91c2VsJywgeyByZWxhdGVkVGFyZ2V0OiByZWxhdGVkVGFyZ2V0LCBkaXJlY3Rpb246IGRpcmVjdGlvbiB9KSAvLyB5ZXMsIFwic2xpZFwiXG4gICAgaWYgKCQuc3VwcG9ydC50cmFuc2l0aW9uICYmIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ3NsaWRlJykpIHtcbiAgICAgICRuZXh0LmFkZENsYXNzKHR5cGUpXG4gICAgICAkbmV4dFswXS5vZmZzZXRXaWR0aCAvLyBmb3JjZSByZWZsb3dcbiAgICAgICRhY3RpdmUuYWRkQ2xhc3MoZGlyZWN0aW9uKVxuICAgICAgJG5leHQuYWRkQ2xhc3MoZGlyZWN0aW9uKVxuICAgICAgJGFjdGl2ZVxuICAgICAgICAub25lKCdic1RyYW5zaXRpb25FbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJG5leHQucmVtb3ZlQ2xhc3MoW3R5cGUsIGRpcmVjdGlvbl0uam9pbignICcpKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAkYWN0aXZlLnJlbW92ZUNsYXNzKFsnYWN0aXZlJywgZGlyZWN0aW9uXS5qb2luKCcgJykpXG4gICAgICAgICAgdGhhdC5zbGlkaW5nID0gZmFsc2VcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQuJGVsZW1lbnQudHJpZ2dlcihzbGlkRXZlbnQpXG4gICAgICAgICAgfSwgMClcbiAgICAgICAgfSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKENhcm91c2VsLlRSQU5TSVRJT05fRFVSQVRJT04pXG4gICAgfSBlbHNlIHtcbiAgICAgICRhY3RpdmUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAkbmV4dC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgIHRoaXMuc2xpZGluZyA9IGZhbHNlXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoc2xpZEV2ZW50KVxuICAgIH1cblxuICAgIGlzQ3ljbGluZyAmJiB0aGlzLmN5Y2xlKClcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIENBUk9VU0VMIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gUGx1Z2luKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLmNhcm91c2VsJylcbiAgICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe30sIENhcm91c2VsLkRFRkFVTFRTLCAkdGhpcy5kYXRhKCksIHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uKVxuICAgICAgdmFyIGFjdGlvbiAgPSB0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnID8gb3B0aW9uIDogb3B0aW9ucy5zbGlkZVxuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLmNhcm91c2VsJywgKGRhdGEgPSBuZXcgQ2Fyb3VzZWwodGhpcywgb3B0aW9ucykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ251bWJlcicpIGRhdGEudG8ob3B0aW9uKVxuICAgICAgZWxzZSBpZiAoYWN0aW9uKSBkYXRhW2FjdGlvbl0oKVxuICAgICAgZWxzZSBpZiAob3B0aW9ucy5pbnRlcnZhbCkgZGF0YS5wYXVzZSgpLmN5Y2xlKClcbiAgICB9KVxuICB9XG5cbiAgdmFyIG9sZCA9ICQuZm4uY2Fyb3VzZWxcblxuICAkLmZuLmNhcm91c2VsICAgICAgICAgICAgID0gUGx1Z2luXG4gICQuZm4uY2Fyb3VzZWwuQ29uc3RydWN0b3IgPSBDYXJvdXNlbFxuXG5cbiAgLy8gQ0FST1VTRUwgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLmNhcm91c2VsLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi5jYXJvdXNlbCA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIENBUk9VU0VMIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PT09PT09XG5cbiAgdmFyIGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGhyZWZcbiAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICB2YXIgJHRhcmdldCA9ICQoJHRoaXMuYXR0cignZGF0YS10YXJnZXQnKSB8fCAoaHJlZiA9ICR0aGlzLmF0dHIoJ2hyZWYnKSkgJiYgaHJlZi5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLCAnJykpIC8vIHN0cmlwIGZvciBpZTdcbiAgICBpZiAoISR0YXJnZXQuaGFzQ2xhc3MoJ2Nhcm91c2VsJykpIHJldHVyblxuICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe30sICR0YXJnZXQuZGF0YSgpLCAkdGhpcy5kYXRhKCkpXG4gICAgdmFyIHNsaWRlSW5kZXggPSAkdGhpcy5hdHRyKCdkYXRhLXNsaWRlLXRvJylcbiAgICBpZiAoc2xpZGVJbmRleCkgb3B0aW9ucy5pbnRlcnZhbCA9IGZhbHNlXG5cbiAgICBQbHVnaW4uY2FsbCgkdGFyZ2V0LCBvcHRpb25zKVxuXG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgICR0YXJnZXQuZGF0YSgnYnMuY2Fyb3VzZWwnKS50byhzbGlkZUluZGV4KVxuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgJChkb2N1bWVudClcbiAgICAub24oJ2NsaWNrLmJzLmNhcm91c2VsLmRhdGEtYXBpJywgJ1tkYXRhLXNsaWRlXScsIGNsaWNrSGFuZGxlcilcbiAgICAub24oJ2NsaWNrLmJzLmNhcm91c2VsLmRhdGEtYXBpJywgJ1tkYXRhLXNsaWRlLXRvXScsIGNsaWNrSGFuZGxlcilcblxuICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnW2RhdGEtcmlkZT1cImNhcm91c2VsXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGNhcm91c2VsID0gJCh0aGlzKVxuICAgICAgUGx1Z2luLmNhbGwoJGNhcm91c2VsLCAkY2Fyb3VzZWwuZGF0YSgpKVxuICAgIH0pXG4gIH0pXG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IGNvbGxhcHNlLmpzIHYzLjMuN1xuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jY29sbGFwc2VcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNiBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qIGpzaGludCBsYXRlZGVmOiBmYWxzZSAqL1xuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIENPTExBUFNFIFBVQkxJQyBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIENvbGxhcHNlID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ICAgICAgPSAkKGVsZW1lbnQpXG4gICAgdGhpcy5vcHRpb25zICAgICAgID0gJC5leHRlbmQoe30sIENvbGxhcHNlLkRFRkFVTFRTLCBvcHRpb25zKVxuICAgIHRoaXMuJHRyaWdnZXIgICAgICA9ICQoJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2hyZWY9XCIjJyArIGVsZW1lbnQuaWQgKyAnXCJdLCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtdGFyZ2V0PVwiIycgKyBlbGVtZW50LmlkICsgJ1wiXScpXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gbnVsbFxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wYXJlbnQpIHtcbiAgICAgIHRoaXMuJHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50KClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy4kZWxlbWVudCwgdGhpcy4kdHJpZ2dlcilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnRvZ2dsZSkgdGhpcy50b2dnbGUoKVxuICB9XG5cbiAgQ29sbGFwc2UuVkVSU0lPTiAgPSAnMy4zLjcnXG5cbiAgQ29sbGFwc2UuVFJBTlNJVElPTl9EVVJBVElPTiA9IDM1MFxuXG4gIENvbGxhcHNlLkRFRkFVTFRTID0ge1xuICAgIHRvZ2dsZTogdHJ1ZVxuICB9XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLmRpbWVuc2lvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFzV2lkdGggPSB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCd3aWR0aCcpXG4gICAgcmV0dXJuIGhhc1dpZHRoID8gJ3dpZHRoJyA6ICdoZWlnaHQnXG4gIH1cblxuICBDb2xsYXBzZS5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy50cmFuc2l0aW9uaW5nIHx8IHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2luJykpIHJldHVyblxuXG4gICAgdmFyIGFjdGl2ZXNEYXRhXG4gICAgdmFyIGFjdGl2ZXMgPSB0aGlzLiRwYXJlbnQgJiYgdGhpcy4kcGFyZW50LmNoaWxkcmVuKCcucGFuZWwnKS5jaGlsZHJlbignLmluLCAuY29sbGFwc2luZycpXG5cbiAgICBpZiAoYWN0aXZlcyAmJiBhY3RpdmVzLmxlbmd0aCkge1xuICAgICAgYWN0aXZlc0RhdGEgPSBhY3RpdmVzLmRhdGEoJ2JzLmNvbGxhcHNlJylcbiAgICAgIGlmIChhY3RpdmVzRGF0YSAmJiBhY3RpdmVzRGF0YS50cmFuc2l0aW9uaW5nKSByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgc3RhcnRFdmVudCA9ICQuRXZlbnQoJ3Nob3cuYnMuY29sbGFwc2UnKVxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihzdGFydEV2ZW50KVxuICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgIGlmIChhY3RpdmVzICYmIGFjdGl2ZXMubGVuZ3RoKSB7XG4gICAgICBQbHVnaW4uY2FsbChhY3RpdmVzLCAnaGlkZScpXG4gICAgICBhY3RpdmVzRGF0YSB8fCBhY3RpdmVzLmRhdGEoJ2JzLmNvbGxhcHNlJywgbnVsbClcbiAgICB9XG5cbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5kaW1lbnNpb24oKVxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLnJlbW92ZUNsYXNzKCdjb2xsYXBzZScpXG4gICAgICAuYWRkQ2xhc3MoJ2NvbGxhcHNpbmcnKVtkaW1lbnNpb25dKDApXG4gICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICB0aGlzLiR0cmlnZ2VyXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlZCcpXG4gICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSAxXG5cbiAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLiRlbGVtZW50XG4gICAgICAgIC5yZW1vdmVDbGFzcygnY29sbGFwc2luZycpXG4gICAgICAgIC5hZGRDbGFzcygnY29sbGFwc2UgaW4nKVtkaW1lbnNpb25dKCcnKVxuICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gMFxuICAgICAgdGhpcy4kZWxlbWVudFxuICAgICAgICAudHJpZ2dlcignc2hvd24uYnMuY29sbGFwc2UnKVxuICAgIH1cblxuICAgIGlmICghJC5zdXBwb3J0LnRyYW5zaXRpb24pIHJldHVybiBjb21wbGV0ZS5jYWxsKHRoaXMpXG5cbiAgICB2YXIgc2Nyb2xsU2l6ZSA9ICQuY2FtZWxDYXNlKFsnc2Nyb2xsJywgZGltZW5zaW9uXS5qb2luKCctJykpXG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAub25lKCdic1RyYW5zaXRpb25FbmQnLCAkLnByb3h5KGNvbXBsZXRlLCB0aGlzKSlcbiAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChDb2xsYXBzZS5UUkFOU0lUSU9OX0RVUkFUSU9OKVtkaW1lbnNpb25dKHRoaXMuJGVsZW1lbnRbMF1bc2Nyb2xsU2l6ZV0pXG4gIH1cblxuICBDb2xsYXBzZS5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy50cmFuc2l0aW9uaW5nIHx8ICF0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdpbicpKSByZXR1cm5cblxuICAgIHZhciBzdGFydEV2ZW50ID0gJC5FdmVudCgnaGlkZS5icy5jb2xsYXBzZScpXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKHN0YXJ0RXZlbnQpXG4gICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuZGltZW5zaW9uKClcblxuICAgIHRoaXMuJGVsZW1lbnRbZGltZW5zaW9uXSh0aGlzLiRlbGVtZW50W2RpbWVuc2lvbl0oKSlbMF0ub2Zmc2V0SGVpZ2h0XG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAuYWRkQ2xhc3MoJ2NvbGxhcHNpbmcnKVxuICAgICAgLnJlbW92ZUNsYXNzKCdjb2xsYXBzZSBpbicpXG4gICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuXG4gICAgdGhpcy4kdHJpZ2dlclxuICAgICAgLmFkZENsYXNzKCdjb2xsYXBzZWQnKVxuICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcblxuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IDFcblxuICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IDBcbiAgICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgICAgLnJlbW92ZUNsYXNzKCdjb2xsYXBzaW5nJylcbiAgICAgICAgLmFkZENsYXNzKCdjb2xsYXBzZScpXG4gICAgICAgIC50cmlnZ2VyKCdoaWRkZW4uYnMuY29sbGFwc2UnKVxuICAgIH1cblxuICAgIGlmICghJC5zdXBwb3J0LnRyYW5zaXRpb24pIHJldHVybiBjb21wbGV0ZS5jYWxsKHRoaXMpXG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICBbZGltZW5zaW9uXSgwKVxuICAgICAgLm9uZSgnYnNUcmFuc2l0aW9uRW5kJywgJC5wcm94eShjb21wbGV0ZSwgdGhpcykpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoQ29sbGFwc2UuVFJBTlNJVElPTl9EVVJBVElPTilcbiAgfVxuXG4gIENvbGxhcHNlLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpc1t0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdpbicpID8gJ2hpZGUnIDogJ3Nob3cnXSgpXG4gIH1cblxuICBDb2xsYXBzZS5wcm90b3R5cGUuZ2V0UGFyZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAkKHRoaXMub3B0aW9ucy5wYXJlbnQpXG4gICAgICAuZmluZCgnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1bZGF0YS1wYXJlbnQ9XCInICsgdGhpcy5vcHRpb25zLnBhcmVudCArICdcIl0nKVxuICAgICAgLmVhY2goJC5wcm94eShmdW5jdGlvbiAoaSwgZWxlbWVudCkge1xuICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKGVsZW1lbnQpXG4gICAgICAgIHRoaXMuYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKGdldFRhcmdldEZyb21UcmlnZ2VyKCRlbGVtZW50KSwgJGVsZW1lbnQpXG4gICAgICB9LCB0aGlzKSlcbiAgICAgIC5lbmQoKVxuICB9XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLmFkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyA9IGZ1bmN0aW9uICgkZWxlbWVudCwgJHRyaWdnZXIpIHtcbiAgICB2YXIgaXNPcGVuID0gJGVsZW1lbnQuaGFzQ2xhc3MoJ2luJylcblxuICAgICRlbGVtZW50LmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBpc09wZW4pXG4gICAgJHRyaWdnZXJcbiAgICAgIC50b2dnbGVDbGFzcygnY29sbGFwc2VkJywgIWlzT3BlbilcbiAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VGFyZ2V0RnJvbVRyaWdnZXIoJHRyaWdnZXIpIHtcbiAgICB2YXIgaHJlZlxuICAgIHZhciB0YXJnZXQgPSAkdHJpZ2dlci5hdHRyKCdkYXRhLXRhcmdldCcpXG4gICAgICB8fCAoaHJlZiA9ICR0cmlnZ2VyLmF0dHIoJ2hyZWYnKSkgJiYgaHJlZi5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLCAnJykgLy8gc3RyaXAgZm9yIGllN1xuXG4gICAgcmV0dXJuICQodGFyZ2V0KVxuICB9XG5cblxuICAvLyBDT0xMQVBTRSBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIFBsdWdpbihvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgICAgPSAkdGhpcy5kYXRhKCdicy5jb2xsYXBzZScpXG4gICAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBDb2xsYXBzZS5ERUZBVUxUUywgJHRoaXMuZGF0YSgpLCB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvbilcblxuICAgICAgaWYgKCFkYXRhICYmIG9wdGlvbnMudG9nZ2xlICYmIC9zaG93fGhpZGUvLnRlc3Qob3B0aW9uKSkgb3B0aW9ucy50b2dnbGUgPSBmYWxzZVxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy5jb2xsYXBzZScsIChkYXRhID0gbmV3IENvbGxhcHNlKHRoaXMsIG9wdGlvbnMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0oKVxuICAgIH0pXG4gIH1cblxuICB2YXIgb2xkID0gJC5mbi5jb2xsYXBzZVxuXG4gICQuZm4uY29sbGFwc2UgICAgICAgICAgICAgPSBQbHVnaW5cbiAgJC5mbi5jb2xsYXBzZS5Db25zdHJ1Y3RvciA9IENvbGxhcHNlXG5cblxuICAvLyBDT0xMQVBTRSBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PT09PVxuXG4gICQuZm4uY29sbGFwc2Uubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLmNvbGxhcHNlID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gQ09MTEFQU0UgREFUQS1BUElcbiAgLy8gPT09PT09PT09PT09PT09PT1cblxuICAkKGRvY3VtZW50KS5vbignY2xpY2suYnMuY29sbGFwc2UuZGF0YS1hcGknLCAnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0nLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuXG4gICAgaWYgKCEkdGhpcy5hdHRyKCdkYXRhLXRhcmdldCcpKSBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIHZhciAkdGFyZ2V0ID0gZ2V0VGFyZ2V0RnJvbVRyaWdnZXIoJHRoaXMpXG4gICAgdmFyIGRhdGEgICAgPSAkdGFyZ2V0LmRhdGEoJ2JzLmNvbGxhcHNlJylcbiAgICB2YXIgb3B0aW9uICA9IGRhdGEgPyAndG9nZ2xlJyA6ICR0aGlzLmRhdGEoKVxuXG4gICAgUGx1Z2luLmNhbGwoJHRhcmdldCwgb3B0aW9uKVxuICB9KVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiBkcm9wZG93bi5qcyB2My4zLjdcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI2Ryb3Bkb3duc1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE2IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIERST1BET1dOIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBiYWNrZHJvcCA9ICcuZHJvcGRvd24tYmFja2Ryb3AnXG4gIHZhciB0b2dnbGUgICA9ICdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXSdcbiAgdmFyIERyb3Bkb3duID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAkKGVsZW1lbnQpLm9uKCdjbGljay5icy5kcm9wZG93bicsIHRoaXMudG9nZ2xlKVxuICB9XG5cbiAgRHJvcGRvd24uVkVSU0lPTiA9ICczLjMuNydcblxuICBmdW5jdGlvbiBnZXRQYXJlbnQoJHRoaXMpIHtcbiAgICB2YXIgc2VsZWN0b3IgPSAkdGhpcy5hdHRyKCdkYXRhLXRhcmdldCcpXG5cbiAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICBzZWxlY3RvciA9ICR0aGlzLmF0dHIoJ2hyZWYnKVxuICAgICAgc2VsZWN0b3IgPSBzZWxlY3RvciAmJiAvI1tBLVphLXpdLy50ZXN0KHNlbGVjdG9yKSAmJiBzZWxlY3Rvci5yZXBsYWNlKC8uKig/PSNbXlxcc10qJCkvLCAnJykgLy8gc3RyaXAgZm9yIGllN1xuICAgIH1cblxuICAgIHZhciAkcGFyZW50ID0gc2VsZWN0b3IgJiYgJChzZWxlY3RvcilcblxuICAgIHJldHVybiAkcGFyZW50ICYmICRwYXJlbnQubGVuZ3RoID8gJHBhcmVudCA6ICR0aGlzLnBhcmVudCgpXG4gIH1cblxuICBmdW5jdGlvbiBjbGVhck1lbnVzKGUpIHtcbiAgICBpZiAoZSAmJiBlLndoaWNoID09PSAzKSByZXR1cm5cbiAgICAkKGJhY2tkcm9wKS5yZW1vdmUoKVxuICAgICQodG9nZ2xlKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgICAgICAgID0gJCh0aGlzKVxuICAgICAgdmFyICRwYXJlbnQgICAgICAgPSBnZXRQYXJlbnQoJHRoaXMpXG4gICAgICB2YXIgcmVsYXRlZFRhcmdldCA9IHsgcmVsYXRlZFRhcmdldDogdGhpcyB9XG5cbiAgICAgIGlmICghJHBhcmVudC5oYXNDbGFzcygnb3BlbicpKSByZXR1cm5cblxuICAgICAgaWYgKGUgJiYgZS50eXBlID09ICdjbGljaycgJiYgL2lucHV0fHRleHRhcmVhL2kudGVzdChlLnRhcmdldC50YWdOYW1lKSAmJiAkLmNvbnRhaW5zKCRwYXJlbnRbMF0sIGUudGFyZ2V0KSkgcmV0dXJuXG5cbiAgICAgICRwYXJlbnQudHJpZ2dlcihlID0gJC5FdmVudCgnaGlkZS5icy5kcm9wZG93bicsIHJlbGF0ZWRUYXJnZXQpKVxuXG4gICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICAgICR0aGlzLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuICAgICAgJHBhcmVudC5yZW1vdmVDbGFzcygnb3BlbicpLnRyaWdnZXIoJC5FdmVudCgnaGlkZGVuLmJzLmRyb3Bkb3duJywgcmVsYXRlZFRhcmdldCkpXG4gICAgfSlcbiAgfVxuXG4gIERyb3Bkb3duLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciAkdGhpcyA9ICQodGhpcylcblxuICAgIGlmICgkdGhpcy5pcygnLmRpc2FibGVkLCA6ZGlzYWJsZWQnKSkgcmV0dXJuXG5cbiAgICB2YXIgJHBhcmVudCAgPSBnZXRQYXJlbnQoJHRoaXMpXG4gICAgdmFyIGlzQWN0aXZlID0gJHBhcmVudC5oYXNDbGFzcygnb3BlbicpXG5cbiAgICBjbGVhck1lbnVzKClcblxuICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgISRwYXJlbnQuY2xvc2VzdCgnLm5hdmJhci1uYXYnKS5sZW5ndGgpIHtcbiAgICAgICAgLy8gaWYgbW9iaWxlIHdlIHVzZSBhIGJhY2tkcm9wIGJlY2F1c2UgY2xpY2sgZXZlbnRzIGRvbid0IGRlbGVnYXRlXG4gICAgICAgICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gICAgICAgICAgLmFkZENsYXNzKCdkcm9wZG93bi1iYWNrZHJvcCcpXG4gICAgICAgICAgLmluc2VydEFmdGVyKCQodGhpcykpXG4gICAgICAgICAgLm9uKCdjbGljaycsIGNsZWFyTWVudXMpXG4gICAgICB9XG5cbiAgICAgIHZhciByZWxhdGVkVGFyZ2V0ID0geyByZWxhdGVkVGFyZ2V0OiB0aGlzIH1cbiAgICAgICRwYXJlbnQudHJpZ2dlcihlID0gJC5FdmVudCgnc2hvdy5icy5kcm9wZG93bicsIHJlbGF0ZWRUYXJnZXQpKVxuXG4gICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICAgICR0aGlzXG4gICAgICAgIC50cmlnZ2VyKCdmb2N1cycpXG4gICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxuXG4gICAgICAkcGFyZW50XG4gICAgICAgIC50b2dnbGVDbGFzcygnb3BlbicpXG4gICAgICAgIC50cmlnZ2VyKCQuRXZlbnQoJ3Nob3duLmJzLmRyb3Bkb3duJywgcmVsYXRlZFRhcmdldCkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBEcm9wZG93bi5wcm90b3R5cGUua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKCEvKDM4fDQwfDI3fDMyKS8udGVzdChlLndoaWNoKSB8fCAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGUudGFyZ2V0LnRhZ05hbWUpKSByZXR1cm5cblxuICAgIHZhciAkdGhpcyA9ICQodGhpcylcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGlmICgkdGhpcy5pcygnLmRpc2FibGVkLCA6ZGlzYWJsZWQnKSkgcmV0dXJuXG5cbiAgICB2YXIgJHBhcmVudCAgPSBnZXRQYXJlbnQoJHRoaXMpXG4gICAgdmFyIGlzQWN0aXZlID0gJHBhcmVudC5oYXNDbGFzcygnb3BlbicpXG5cbiAgICBpZiAoIWlzQWN0aXZlICYmIGUud2hpY2ggIT0gMjcgfHwgaXNBY3RpdmUgJiYgZS53aGljaCA9PSAyNykge1xuICAgICAgaWYgKGUud2hpY2ggPT0gMjcpICRwYXJlbnQuZmluZCh0b2dnbGUpLnRyaWdnZXIoJ2ZvY3VzJylcbiAgICAgIHJldHVybiAkdGhpcy50cmlnZ2VyKCdjbGljaycpXG4gICAgfVxuXG4gICAgdmFyIGRlc2MgPSAnIGxpOm5vdCguZGlzYWJsZWQpOnZpc2libGUgYSdcbiAgICB2YXIgJGl0ZW1zID0gJHBhcmVudC5maW5kKCcuZHJvcGRvd24tbWVudScgKyBkZXNjKVxuXG4gICAgaWYgKCEkaXRlbXMubGVuZ3RoKSByZXR1cm5cblxuICAgIHZhciBpbmRleCA9ICRpdGVtcy5pbmRleChlLnRhcmdldClcblxuICAgIGlmIChlLndoaWNoID09IDM4ICYmIGluZGV4ID4gMCkgICAgICAgICAgICAgICAgIGluZGV4LS0gICAgICAgICAvLyB1cFxuICAgIGlmIChlLndoaWNoID09IDQwICYmIGluZGV4IDwgJGl0ZW1zLmxlbmd0aCAtIDEpIGluZGV4KysgICAgICAgICAvLyBkb3duXG4gICAgaWYgKCF+aW5kZXgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAwXG5cbiAgICAkaXRlbXMuZXEoaW5kZXgpLnRyaWdnZXIoJ2ZvY3VzJylcbiAgfVxuXG5cbiAgLy8gRFJPUERPV04gUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBQbHVnaW4ob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgPSAkdGhpcy5kYXRhKCdicy5kcm9wZG93bicpXG5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMuZHJvcGRvd24nLCAoZGF0YSA9IG5ldyBEcm9wZG93bih0aGlzKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dLmNhbGwoJHRoaXMpXG4gICAgfSlcbiAgfVxuXG4gIHZhciBvbGQgPSAkLmZuLmRyb3Bkb3duXG5cbiAgJC5mbi5kcm9wZG93biAgICAgICAgICAgICA9IFBsdWdpblxuICAkLmZuLmRyb3Bkb3duLkNvbnN0cnVjdG9yID0gRHJvcGRvd25cblxuXG4gIC8vIERST1BET1dOIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi5kcm9wZG93bi5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4uZHJvcGRvd24gPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBBUFBMWSBUTyBTVEFOREFSRCBEUk9QRE9XTiBFTEVNRU5UU1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICQoZG9jdW1lbnQpXG4gICAgLm9uKCdjbGljay5icy5kcm9wZG93bi5kYXRhLWFwaScsIGNsZWFyTWVudXMpXG4gICAgLm9uKCdjbGljay5icy5kcm9wZG93bi5kYXRhLWFwaScsICcuZHJvcGRvd24gZm9ybScsIGZ1bmN0aW9uIChlKSB7IGUuc3RvcFByb3BhZ2F0aW9uKCkgfSlcbiAgICAub24oJ2NsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpJywgdG9nZ2xlLCBEcm9wZG93bi5wcm90b3R5cGUudG9nZ2xlKVxuICAgIC5vbigna2V5ZG93bi5icy5kcm9wZG93bi5kYXRhLWFwaScsIHRvZ2dsZSwgRHJvcGRvd24ucHJvdG90eXBlLmtleWRvd24pXG4gICAgLm9uKCdrZXlkb3duLmJzLmRyb3Bkb3duLmRhdGEtYXBpJywgJy5kcm9wZG93bi1tZW51JywgRHJvcGRvd24ucHJvdG90eXBlLmtleWRvd24pXG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IG1vZGFsLmpzIHYzLjMuN1xuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jbW9kYWxzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTYgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gTU9EQUwgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIE1vZGFsID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgICAgICAgICAgICAgPSBvcHRpb25zXG4gICAgdGhpcy4kYm9keSAgICAgICAgICAgICAgID0gJChkb2N1bWVudC5ib2R5KVxuICAgIHRoaXMuJGVsZW1lbnQgICAgICAgICAgICA9ICQoZWxlbWVudClcbiAgICB0aGlzLiRkaWFsb2cgICAgICAgICAgICAgPSB0aGlzLiRlbGVtZW50LmZpbmQoJy5tb2RhbC1kaWFsb2cnKVxuICAgIHRoaXMuJGJhY2tkcm9wICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLmlzU2hvd24gICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5vcmlnaW5hbEJvZHlQYWQgICAgID0gbnVsbFxuICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGggICAgICA9IDBcbiAgICB0aGlzLmlnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdGUpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgICAgLmZpbmQoJy5tb2RhbC1jb250ZW50JylcbiAgICAgICAgLmxvYWQodGhpcy5vcHRpb25zLnJlbW90ZSwgJC5wcm94eShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdsb2FkZWQuYnMubW9kYWwnKVxuICAgICAgICB9LCB0aGlzKSlcbiAgICB9XG4gIH1cblxuICBNb2RhbC5WRVJTSU9OICA9ICczLjMuNydcblxuICBNb2RhbC5UUkFOU0lUSU9OX0RVUkFUSU9OID0gMzAwXG4gIE1vZGFsLkJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04gPSAxNTBcblxuICBNb2RhbC5ERUZBVUxUUyA9IHtcbiAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICBzaG93OiB0cnVlXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKF9yZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KF9yZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoX3JlbGF0ZWRUYXJnZXQpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICB2YXIgZSAgICA9ICQuRXZlbnQoJ3Nob3cuYnMubW9kYWwnLCB7IHJlbGF0ZWRUYXJnZXQ6IF9yZWxhdGVkVGFyZ2V0IH0pXG5cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSlcblxuICAgIGlmICh0aGlzLmlzU2hvd24gfHwgZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICB0aGlzLmlzU2hvd24gPSB0cnVlXG5cbiAgICB0aGlzLmNoZWNrU2Nyb2xsYmFyKClcbiAgICB0aGlzLnNldFNjcm9sbGJhcigpXG4gICAgdGhpcy4kYm9keS5hZGRDbGFzcygnbW9kYWwtb3BlbicpXG5cbiAgICB0aGlzLmVzY2FwZSgpXG4gICAgdGhpcy5yZXNpemUoKVxuXG4gICAgdGhpcy4kZWxlbWVudC5vbignY2xpY2suZGlzbWlzcy5icy5tb2RhbCcsICdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLCAkLnByb3h5KHRoaXMuaGlkZSwgdGhpcykpXG5cbiAgICB0aGlzLiRkaWFsb2cub24oJ21vdXNlZG93bi5kaXNtaXNzLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC4kZWxlbWVudC5vbmUoJ21vdXNldXAuZGlzbWlzcy5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICgkKGUudGFyZ2V0KS5pcyh0aGF0LiRlbGVtZW50KSkgdGhhdC5pZ25vcmVCYWNrZHJvcENsaWNrID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5iYWNrZHJvcChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdHJhbnNpdGlvbiA9ICQuc3VwcG9ydC50cmFuc2l0aW9uICYmIHRoYXQuJGVsZW1lbnQuaGFzQ2xhc3MoJ2ZhZGUnKVxuXG4gICAgICBpZiAoIXRoYXQuJGVsZW1lbnQucGFyZW50KCkubGVuZ3RoKSB7XG4gICAgICAgIHRoYXQuJGVsZW1lbnQuYXBwZW5kVG8odGhhdC4kYm9keSkgLy8gZG9uJ3QgbW92ZSBtb2RhbHMgZG9tIHBvc2l0aW9uXG4gICAgICB9XG5cbiAgICAgIHRoYXQuJGVsZW1lbnRcbiAgICAgICAgLnNob3coKVxuICAgICAgICAuc2Nyb2xsVG9wKDApXG5cbiAgICAgIHRoYXQuYWRqdXN0RGlhbG9nKClcblxuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgdGhhdC4kZWxlbWVudFswXS5vZmZzZXRXaWR0aCAvLyBmb3JjZSByZWZsb3dcbiAgICAgIH1cblxuICAgICAgdGhhdC4kZWxlbWVudC5hZGRDbGFzcygnaW4nKVxuXG4gICAgICB0aGF0LmVuZm9yY2VGb2N1cygpXG5cbiAgICAgIHZhciBlID0gJC5FdmVudCgnc2hvd24uYnMubW9kYWwnLCB7IHJlbGF0ZWRUYXJnZXQ6IF9yZWxhdGVkVGFyZ2V0IH0pXG5cbiAgICAgIHRyYW5zaXRpb24gP1xuICAgICAgICB0aGF0LiRkaWFsb2cgLy8gd2FpdCBmb3IgbW9kYWwgdG8gc2xpZGUgaW5cbiAgICAgICAgICAub25lKCdic1RyYW5zaXRpb25FbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0LiRlbGVtZW50LnRyaWdnZXIoJ2ZvY3VzJykudHJpZ2dlcihlKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKE1vZGFsLlRSQU5TSVRJT05fRFVSQVRJT04pIDpcbiAgICAgICAgdGhhdC4kZWxlbWVudC50cmlnZ2VyKCdmb2N1cycpLnRyaWdnZXIoZSlcbiAgICB9KVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlKSBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGUgPSAkLkV2ZW50KCdoaWRlLmJzLm1vZGFsJylcblxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihlKVxuXG4gICAgaWYgKCF0aGlzLmlzU2hvd24gfHwgZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICB0aGlzLmlzU2hvd24gPSBmYWxzZVxuXG4gICAgdGhpcy5lc2NhcGUoKVxuICAgIHRoaXMucmVzaXplKClcblxuICAgICQoZG9jdW1lbnQpLm9mZignZm9jdXNpbi5icy5tb2RhbCcpXG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAucmVtb3ZlQ2xhc3MoJ2luJylcbiAgICAgIC5vZmYoJ2NsaWNrLmRpc21pc3MuYnMubW9kYWwnKVxuICAgICAgLm9mZignbW91c2V1cC5kaXNtaXNzLmJzLm1vZGFsJylcblxuICAgIHRoaXMuJGRpYWxvZy5vZmYoJ21vdXNlZG93bi5kaXNtaXNzLmJzLm1vZGFsJylcblxuICAgICQuc3VwcG9ydC50cmFuc2l0aW9uICYmIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2ZhZGUnKSA/XG4gICAgICB0aGlzLiRlbGVtZW50XG4gICAgICAgIC5vbmUoJ2JzVHJhbnNpdGlvbkVuZCcsICQucHJveHkodGhpcy5oaWRlTW9kYWwsIHRoaXMpKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoTW9kYWwuVFJBTlNJVElPTl9EVVJBVElPTikgOlxuICAgICAgdGhpcy5oaWRlTW9kYWwoKVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLmVuZm9yY2VGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAkKGRvY3VtZW50KVxuICAgICAgLm9mZignZm9jdXNpbi5icy5tb2RhbCcpIC8vIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgICAgLm9uKCdmb2N1c2luLmJzLm1vZGFsJywgJC5wcm94eShmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQgIT09IGUudGFyZ2V0ICYmXG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50WzBdICE9PSBlLnRhcmdldCAmJlxuICAgICAgICAgICAgIXRoaXMuJGVsZW1lbnQuaGFzKGUudGFyZ2V0KS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2ZvY3VzJylcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcykpXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUuZXNjYXBlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlzU2hvd24gJiYgdGhpcy5vcHRpb25zLmtleWJvYXJkKSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lm9uKCdrZXlkb3duLmRpc21pc3MuYnMubW9kYWwnLCAkLnByb3h5KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUud2hpY2ggPT0gMjcgJiYgdGhpcy5oaWRlKClcbiAgICAgIH0sIHRoaXMpKVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNTaG93bikge1xuICAgICAgdGhpcy4kZWxlbWVudC5vZmYoJ2tleWRvd24uZGlzbWlzcy5icy5tb2RhbCcpXG4gICAgfVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pc1Nob3duKSB7XG4gICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5icy5tb2RhbCcsICQucHJveHkodGhpcy5oYW5kbGVVcGRhdGUsIHRoaXMpKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuYnMubW9kYWwnKVxuICAgIH1cbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5oaWRlTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgdGhpcy4kZWxlbWVudC5oaWRlKClcbiAgICB0aGlzLmJhY2tkcm9wKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQuJGJvZHkucmVtb3ZlQ2xhc3MoJ21vZGFsLW9wZW4nKVxuICAgICAgdGhhdC5yZXNldEFkanVzdG1lbnRzKClcbiAgICAgIHRoYXQucmVzZXRTY3JvbGxiYXIoKVxuICAgICAgdGhhdC4kZWxlbWVudC50cmlnZ2VyKCdoaWRkZW4uYnMubW9kYWwnKVxuICAgIH0pXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUucmVtb3ZlQmFja2Ryb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kYmFja2Ryb3AgJiYgdGhpcy4kYmFja2Ryb3AucmVtb3ZlKClcbiAgICB0aGlzLiRiYWNrZHJvcCA9IG51bGxcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5iYWNrZHJvcCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgIHZhciBhbmltYXRlID0gdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnZmFkZScpID8gJ2ZhZGUnIDogJydcblxuICAgIGlmICh0aGlzLmlzU2hvd24gJiYgdGhpcy5vcHRpb25zLmJhY2tkcm9wKSB7XG4gICAgICB2YXIgZG9BbmltYXRlID0gJC5zdXBwb3J0LnRyYW5zaXRpb24gJiYgYW5pbWF0ZVxuXG4gICAgICB0aGlzLiRiYWNrZHJvcCA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gICAgICAgIC5hZGRDbGFzcygnbW9kYWwtYmFja2Ryb3AgJyArIGFuaW1hdGUpXG4gICAgICAgIC5hcHBlbmRUbyh0aGlzLiRib2R5KVxuXG4gICAgICB0aGlzLiRlbGVtZW50Lm9uKCdjbGljay5kaXNtaXNzLmJzLm1vZGFsJywgJC5wcm94eShmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAodGhpcy5pZ25vcmVCYWNrZHJvcENsaWNrKSB7XG4gICAgICAgICAgdGhpcy5pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2VcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQgIT09IGUuY3VycmVudFRhcmdldCkgcmV0dXJuXG4gICAgICAgIHRoaXMub3B0aW9ucy5iYWNrZHJvcCA9PSAnc3RhdGljJ1xuICAgICAgICAgID8gdGhpcy4kZWxlbWVudFswXS5mb2N1cygpXG4gICAgICAgICAgOiB0aGlzLmhpZGUoKVxuICAgICAgfSwgdGhpcykpXG5cbiAgICAgIGlmIChkb0FuaW1hdGUpIHRoaXMuJGJhY2tkcm9wWzBdLm9mZnNldFdpZHRoIC8vIGZvcmNlIHJlZmxvd1xuXG4gICAgICB0aGlzLiRiYWNrZHJvcC5hZGRDbGFzcygnaW4nKVxuXG4gICAgICBpZiAoIWNhbGxiYWNrKSByZXR1cm5cblxuICAgICAgZG9BbmltYXRlID9cbiAgICAgICAgdGhpcy4kYmFja2Ryb3BcbiAgICAgICAgICAub25lKCdic1RyYW5zaXRpb25FbmQnLCBjYWxsYmFjaylcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoTW9kYWwuQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTikgOlxuICAgICAgICBjYWxsYmFjaygpXG5cbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzU2hvd24gJiYgdGhpcy4kYmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuJGJhY2tkcm9wLnJlbW92ZUNsYXNzKCdpbicpXG5cbiAgICAgIHZhciBjYWxsYmFja1JlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhhdC5yZW1vdmVCYWNrZHJvcCgpXG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICAgICQuc3VwcG9ydC50cmFuc2l0aW9uICYmIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2ZhZGUnKSA/XG4gICAgICAgIHRoaXMuJGJhY2tkcm9wXG4gICAgICAgICAgLm9uZSgnYnNUcmFuc2l0aW9uRW5kJywgY2FsbGJhY2tSZW1vdmUpXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKE1vZGFsLkJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04pIDpcbiAgICAgICAgY2FsbGJhY2tSZW1vdmUoKVxuXG4gICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIC8vIHRoZXNlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcblxuICBNb2RhbC5wcm90b3R5cGUuaGFuZGxlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYWRqdXN0RGlhbG9nKClcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5hZGp1c3REaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1vZGFsSXNPdmVyZmxvd2luZyA9IHRoaXMuJGVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuXG4gICAgdGhpcy4kZWxlbWVudC5jc3Moe1xuICAgICAgcGFkZGluZ0xlZnQ6ICAhdGhpcy5ib2R5SXNPdmVyZmxvd2luZyAmJiBtb2RhbElzT3ZlcmZsb3dpbmcgPyB0aGlzLnNjcm9sbGJhcldpZHRoIDogJycsXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoaXMuYm9keUlzT3ZlcmZsb3dpbmcgJiYgIW1vZGFsSXNPdmVyZmxvd2luZyA/IHRoaXMuc2Nyb2xsYmFyV2lkdGggOiAnJ1xuICAgIH0pXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUucmVzZXRBZGp1c3RtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRlbGVtZW50LmNzcyh7XG4gICAgICBwYWRkaW5nTGVmdDogJycsXG4gICAgICBwYWRkaW5nUmlnaHQ6ICcnXG4gICAgfSlcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5jaGVja1Njcm9sbGJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZnVsbFdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgICBpZiAoIWZ1bGxXaW5kb3dXaWR0aCkgeyAvLyB3b3JrYXJvdW5kIGZvciBtaXNzaW5nIHdpbmRvdy5pbm5lcldpZHRoIGluIElFOFxuICAgICAgdmFyIGRvY3VtZW50RWxlbWVudFJlY3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGZ1bGxXaW5kb3dXaWR0aCA9IGRvY3VtZW50RWxlbWVudFJlY3QucmlnaHQgLSBNYXRoLmFicyhkb2N1bWVudEVsZW1lbnRSZWN0LmxlZnQpXG4gICAgfVxuICAgIHRoaXMuYm9keUlzT3ZlcmZsb3dpbmcgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgZnVsbFdpbmRvd1dpZHRoXG4gICAgdGhpcy5zY3JvbGxiYXJXaWR0aCA9IHRoaXMubWVhc3VyZVNjcm9sbGJhcigpXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUuc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBib2R5UGFkID0gcGFyc2VJbnQoKHRoaXMuJGJvZHkuY3NzKCdwYWRkaW5nLXJpZ2h0JykgfHwgMCksIDEwKVxuICAgIHRoaXMub3JpZ2luYWxCb2R5UGFkID0gZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgfHwgJydcbiAgICBpZiAodGhpcy5ib2R5SXNPdmVyZmxvd2luZykgdGhpcy4kYm9keS5jc3MoJ3BhZGRpbmctcmlnaHQnLCBib2R5UGFkICsgdGhpcy5zY3JvbGxiYXJXaWR0aClcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5yZXNldFNjcm9sbGJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRib2R5LmNzcygncGFkZGluZy1yaWdodCcsIHRoaXMub3JpZ2luYWxCb2R5UGFkKVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLm1lYXN1cmVTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7IC8vIHRoeCB3YWxzaFxuICAgIHZhciBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNjcm9sbERpdi5jbGFzc05hbWUgPSAnbW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUnXG4gICAgdGhpcy4kYm9keS5hcHBlbmQoc2Nyb2xsRGl2KVxuICAgIHZhciBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aFxuICAgIHRoaXMuJGJvZHlbMF0ucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KVxuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aFxuICB9XG5cblxuICAvLyBNT0RBTCBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIFBsdWdpbihvcHRpb24sIF9yZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMubW9kYWwnKVxuICAgICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgTW9kYWwuREVGQVVMVFMsICR0aGlzLmRhdGEoKSwgdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb24pXG5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMubW9kYWwnLCAoZGF0YSA9IG5ldyBNb2RhbCh0aGlzLCBvcHRpb25zKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKF9yZWxhdGVkVGFyZ2V0KVxuICAgICAgZWxzZSBpZiAob3B0aW9ucy5zaG93KSBkYXRhLnNob3coX3JlbGF0ZWRUYXJnZXQpXG4gICAgfSlcbiAgfVxuXG4gIHZhciBvbGQgPSAkLmZuLm1vZGFsXG5cbiAgJC5mbi5tb2RhbCAgICAgICAgICAgICA9IFBsdWdpblxuICAkLmZuLm1vZGFsLkNvbnN0cnVjdG9yID0gTW9kYWxcblxuXG4gIC8vIE1PREFMIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi5tb2RhbC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4ubW9kYWwgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBNT0RBTCBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT09PVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljay5icy5tb2RhbC5kYXRhLWFwaScsICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgdmFyIGhyZWYgICAgPSAkdGhpcy5hdHRyKCdocmVmJylcbiAgICB2YXIgJHRhcmdldCA9ICQoJHRoaXMuYXR0cignZGF0YS10YXJnZXQnKSB8fCAoaHJlZiAmJiBocmVmLnJlcGxhY2UoLy4qKD89I1teXFxzXSskKS8sICcnKSkpIC8vIHN0cmlwIGZvciBpZTdcbiAgICB2YXIgb3B0aW9uICA9ICR0YXJnZXQuZGF0YSgnYnMubW9kYWwnKSA/ICd0b2dnbGUnIDogJC5leHRlbmQoeyByZW1vdGU6ICEvIy8udGVzdChocmVmKSAmJiBocmVmIH0sICR0YXJnZXQuZGF0YSgpLCAkdGhpcy5kYXRhKCkpXG5cbiAgICBpZiAoJHRoaXMuaXMoJ2EnKSkgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAkdGFyZ2V0Lm9uZSgnc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uIChzaG93RXZlbnQpIHtcbiAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVybiAvLyBvbmx5IHJlZ2lzdGVyIGZvY3VzIHJlc3RvcmVyIGlmIG1vZGFsIHdpbGwgYWN0dWFsbHkgZ2V0IHNob3duXG4gICAgICAkdGFyZ2V0Lm9uZSgnaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkdGhpcy5pcygnOnZpc2libGUnKSAmJiAkdGhpcy50cmlnZ2VyKCdmb2N1cycpXG4gICAgICB9KVxuICAgIH0pXG4gICAgUGx1Z2luLmNhbGwoJHRhcmdldCwgb3B0aW9uLCB0aGlzKVxuICB9KVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiB0b29sdGlwLmpzIHYzLjMuN1xuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jdG9vbHRpcFxuICogSW5zcGlyZWQgYnkgdGhlIG9yaWdpbmFsIGpRdWVyeS50aXBzeSBieSBKYXNvbiBGcmFtZVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE2IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFRPT0xUSVAgUFVCTElDIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBUb29sdGlwID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgICAgICAgPSBudWxsXG4gICAgdGhpcy5vcHRpb25zICAgID0gbnVsbFxuICAgIHRoaXMuZW5hYmxlZCAgICA9IG51bGxcbiAgICB0aGlzLnRpbWVvdXQgICAgPSBudWxsXG4gICAgdGhpcy5ob3ZlclN0YXRlID0gbnVsbFxuICAgIHRoaXMuJGVsZW1lbnQgICA9IG51bGxcbiAgICB0aGlzLmluU3RhdGUgICAgPSBudWxsXG5cbiAgICB0aGlzLmluaXQoJ3Rvb2x0aXAnLCBlbGVtZW50LCBvcHRpb25zKVxuICB9XG5cbiAgVG9vbHRpcC5WRVJTSU9OICA9ICczLjMuNydcblxuICBUb29sdGlwLlRSQU5TSVRJT05fRFVSQVRJT04gPSAxNTBcblxuICBUb29sdGlwLkRFRkFVTFRTID0ge1xuICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgIHNlbGVjdG9yOiBmYWxzZSxcbiAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+JyxcbiAgICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBkZWxheTogMCxcbiAgICBodG1sOiBmYWxzZSxcbiAgICBjb250YWluZXI6IGZhbHNlLFxuICAgIHZpZXdwb3J0OiB7XG4gICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgcGFkZGluZzogMFxuICAgIH1cbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAodHlwZSwgZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuZW5hYmxlZCAgID0gdHJ1ZVxuICAgIHRoaXMudHlwZSAgICAgID0gdHlwZVxuICAgIHRoaXMuJGVsZW1lbnQgID0gJChlbGVtZW50KVxuICAgIHRoaXMub3B0aW9ucyAgID0gdGhpcy5nZXRPcHRpb25zKG9wdGlvbnMpXG4gICAgdGhpcy4kdmlld3BvcnQgPSB0aGlzLm9wdGlvbnMudmlld3BvcnQgJiYgJCgkLmlzRnVuY3Rpb24odGhpcy5vcHRpb25zLnZpZXdwb3J0KSA/IHRoaXMub3B0aW9ucy52aWV3cG9ydC5jYWxsKHRoaXMsIHRoaXMuJGVsZW1lbnQpIDogKHRoaXMub3B0aW9ucy52aWV3cG9ydC5zZWxlY3RvciB8fCB0aGlzLm9wdGlvbnMudmlld3BvcnQpKVxuICAgIHRoaXMuaW5TdGF0ZSAgID0geyBjbGljazogZmFsc2UsIGhvdmVyOiBmYWxzZSwgZm9jdXM6IGZhbHNlIH1cblxuICAgIGlmICh0aGlzLiRlbGVtZW50WzBdIGluc3RhbmNlb2YgZG9jdW1lbnQuY29uc3RydWN0b3IgJiYgIXRoaXMub3B0aW9ucy5zZWxlY3Rvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgc2VsZWN0b3JgIG9wdGlvbiBtdXN0IGJlIHNwZWNpZmllZCB3aGVuIGluaXRpYWxpemluZyAnICsgdGhpcy50eXBlICsgJyBvbiB0aGUgd2luZG93LmRvY3VtZW50IG9iamVjdCEnKVxuICAgIH1cblxuICAgIHZhciB0cmlnZ2VycyA9IHRoaXMub3B0aW9ucy50cmlnZ2VyLnNwbGl0KCcgJylcblxuICAgIGZvciAodmFyIGkgPSB0cmlnZ2Vycy5sZW5ndGg7IGktLTspIHtcbiAgICAgIHZhciB0cmlnZ2VyID0gdHJpZ2dlcnNbaV1cblxuICAgICAgaWYgKHRyaWdnZXIgPT0gJ2NsaWNrJykge1xuICAgICAgICB0aGlzLiRlbGVtZW50Lm9uKCdjbGljay4nICsgdGhpcy50eXBlLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsICQucHJveHkodGhpcy50b2dnbGUsIHRoaXMpKVxuICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9ICdtYW51YWwnKSB7XG4gICAgICAgIHZhciBldmVudEluICA9IHRyaWdnZXIgPT0gJ2hvdmVyJyA/ICdtb3VzZWVudGVyJyA6ICdmb2N1c2luJ1xuICAgICAgICB2YXIgZXZlbnRPdXQgPSB0cmlnZ2VyID09ICdob3ZlcicgPyAnbW91c2VsZWF2ZScgOiAnZm9jdXNvdXQnXG5cbiAgICAgICAgdGhpcy4kZWxlbWVudC5vbihldmVudEluICArICcuJyArIHRoaXMudHlwZSwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCAkLnByb3h5KHRoaXMuZW50ZXIsIHRoaXMpKVxuICAgICAgICB0aGlzLiRlbGVtZW50Lm9uKGV2ZW50T3V0ICsgJy4nICsgdGhpcy50eXBlLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsICQucHJveHkodGhpcy5sZWF2ZSwgdGhpcykpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zLnNlbGVjdG9yID9cbiAgICAgICh0aGlzLl9vcHRpb25zID0gJC5leHRlbmQoe30sIHRoaXMub3B0aW9ucywgeyB0cmlnZ2VyOiAnbWFudWFsJywgc2VsZWN0b3I6ICcnIH0pKSA6XG4gICAgICB0aGlzLmZpeFRpdGxlKClcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmdldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBUb29sdGlwLkRFRkFVTFRTXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5nZXRPcHRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gJC5leHRlbmQoe30sIHRoaXMuZ2V0RGVmYXVsdHMoKSwgdGhpcy4kZWxlbWVudC5kYXRhKCksIG9wdGlvbnMpXG5cbiAgICBpZiAob3B0aW9ucy5kZWxheSAmJiB0eXBlb2Ygb3B0aW9ucy5kZWxheSA9PSAnbnVtYmVyJykge1xuICAgICAgb3B0aW9ucy5kZWxheSA9IHtcbiAgICAgICAgc2hvdzogb3B0aW9ucy5kZWxheSxcbiAgICAgICAgaGlkZTogb3B0aW9ucy5kZWxheVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5nZXREZWxlZ2F0ZU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgID0ge31cbiAgICB2YXIgZGVmYXVsdHMgPSB0aGlzLmdldERlZmF1bHRzKClcblxuICAgIHRoaXMuX29wdGlvbnMgJiYgJC5lYWNoKHRoaXMuX29wdGlvbnMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAoZGVmYXVsdHNba2V5XSAhPSB2YWx1ZSkgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgICB9KVxuXG4gICAgcmV0dXJuIG9wdGlvbnNcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmVudGVyID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciBzZWxmID0gb2JqIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3RvciA/XG4gICAgICBvYmogOiAkKG9iai5jdXJyZW50VGFyZ2V0KS5kYXRhKCdicy4nICsgdGhpcy50eXBlKVxuXG4gICAgaWYgKCFzZWxmKSB7XG4gICAgICBzZWxmID0gbmV3IHRoaXMuY29uc3RydWN0b3Iob2JqLmN1cnJlbnRUYXJnZXQsIHRoaXMuZ2V0RGVsZWdhdGVPcHRpb25zKCkpXG4gICAgICAkKG9iai5jdXJyZW50VGFyZ2V0KS5kYXRhKCdicy4nICsgdGhpcy50eXBlLCBzZWxmKVxuICAgIH1cblxuICAgIGlmIChvYmogaW5zdGFuY2VvZiAkLkV2ZW50KSB7XG4gICAgICBzZWxmLmluU3RhdGVbb2JqLnR5cGUgPT0gJ2ZvY3VzaW4nID8gJ2ZvY3VzJyA6ICdob3ZlciddID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmIChzZWxmLnRpcCgpLmhhc0NsYXNzKCdpbicpIHx8IHNlbGYuaG92ZXJTdGF0ZSA9PSAnaW4nKSB7XG4gICAgICBzZWxmLmhvdmVyU3RhdGUgPSAnaW4nXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQoc2VsZi50aW1lb3V0KVxuXG4gICAgc2VsZi5ob3ZlclN0YXRlID0gJ2luJ1xuXG4gICAgaWYgKCFzZWxmLm9wdGlvbnMuZGVsYXkgfHwgIXNlbGYub3B0aW9ucy5kZWxheS5zaG93KSByZXR1cm4gc2VsZi5zaG93KClcblxuICAgIHNlbGYudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuaG92ZXJTdGF0ZSA9PSAnaW4nKSBzZWxmLnNob3coKVxuICAgIH0sIHNlbGYub3B0aW9ucy5kZWxheS5zaG93KVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuaXNJblN0YXRlVHJ1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5pblN0YXRlKSB7XG4gICAgICBpZiAodGhpcy5pblN0YXRlW2tleV0pIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5sZWF2ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgc2VsZiA9IG9iaiBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3IgP1xuICAgICAgb2JqIDogJChvYmouY3VycmVudFRhcmdldCkuZGF0YSgnYnMuJyArIHRoaXMudHlwZSlcblxuICAgIGlmICghc2VsZikge1xuICAgICAgc2VsZiA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG9iai5jdXJyZW50VGFyZ2V0LCB0aGlzLmdldERlbGVnYXRlT3B0aW9ucygpKVxuICAgICAgJChvYmouY3VycmVudFRhcmdldCkuZGF0YSgnYnMuJyArIHRoaXMudHlwZSwgc2VsZilcbiAgICB9XG5cbiAgICBpZiAob2JqIGluc3RhbmNlb2YgJC5FdmVudCkge1xuICAgICAgc2VsZi5pblN0YXRlW29iai50eXBlID09ICdmb2N1c291dCcgPyAnZm9jdXMnIDogJ2hvdmVyJ10gPSBmYWxzZVxuICAgIH1cblxuICAgIGlmIChzZWxmLmlzSW5TdGF0ZVRydWUoKSkgcmV0dXJuXG5cbiAgICBjbGVhclRpbWVvdXQoc2VsZi50aW1lb3V0KVxuXG4gICAgc2VsZi5ob3ZlclN0YXRlID0gJ291dCdcblxuICAgIGlmICghc2VsZi5vcHRpb25zLmRlbGF5IHx8ICFzZWxmLm9wdGlvbnMuZGVsYXkuaGlkZSkgcmV0dXJuIHNlbGYuaGlkZSgpXG5cbiAgICBzZWxmLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzZWxmLmhvdmVyU3RhdGUgPT0gJ291dCcpIHNlbGYuaGlkZSgpXG4gICAgfSwgc2VsZi5vcHRpb25zLmRlbGF5LmhpZGUpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlID0gJC5FdmVudCgnc2hvdy5icy4nICsgdGhpcy50eXBlKVxuXG4gICAgaWYgKHRoaXMuaGFzQ29udGVudCgpICYmIHRoaXMuZW5hYmxlZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpXG5cbiAgICAgIHZhciBpbkRvbSA9ICQuY29udGFpbnModGhpcy4kZWxlbWVudFswXS5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgdGhpcy4kZWxlbWVudFswXSlcbiAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8ICFpbkRvbSkgcmV0dXJuXG4gICAgICB2YXIgdGhhdCA9IHRoaXNcblxuICAgICAgdmFyICR0aXAgPSB0aGlzLnRpcCgpXG5cbiAgICAgIHZhciB0aXBJZCA9IHRoaXMuZ2V0VUlEKHRoaXMudHlwZSlcblxuICAgICAgdGhpcy5zZXRDb250ZW50KClcbiAgICAgICR0aXAuYXR0cignaWQnLCB0aXBJZClcbiAgICAgIHRoaXMuJGVsZW1lbnQuYXR0cignYXJpYS1kZXNjcmliZWRieScsIHRpcElkKVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGlvbikgJHRpcC5hZGRDbGFzcygnZmFkZScpXG5cbiAgICAgIHZhciBwbGFjZW1lbnQgPSB0eXBlb2YgdGhpcy5vcHRpb25zLnBsYWNlbWVudCA9PSAnZnVuY3Rpb24nID9cbiAgICAgICAgdGhpcy5vcHRpb25zLnBsYWNlbWVudC5jYWxsKHRoaXMsICR0aXBbMF0sIHRoaXMuJGVsZW1lbnRbMF0pIDpcbiAgICAgICAgdGhpcy5vcHRpb25zLnBsYWNlbWVudFxuXG4gICAgICB2YXIgYXV0b1Rva2VuID0gL1xccz9hdXRvP1xccz8vaVxuICAgICAgdmFyIGF1dG9QbGFjZSA9IGF1dG9Ub2tlbi50ZXN0KHBsYWNlbWVudClcbiAgICAgIGlmIChhdXRvUGxhY2UpIHBsYWNlbWVudCA9IHBsYWNlbWVudC5yZXBsYWNlKGF1dG9Ub2tlbiwgJycpIHx8ICd0b3AnXG5cbiAgICAgICR0aXBcbiAgICAgICAgLmRldGFjaCgpXG4gICAgICAgIC5jc3MoeyB0b3A6IDAsIGxlZnQ6IDAsIGRpc3BsYXk6ICdibG9jaycgfSlcbiAgICAgICAgLmFkZENsYXNzKHBsYWNlbWVudClcbiAgICAgICAgLmRhdGEoJ2JzLicgKyB0aGlzLnR5cGUsIHRoaXMpXG5cbiAgICAgIHRoaXMub3B0aW9ucy5jb250YWluZXIgPyAkdGlwLmFwcGVuZFRvKHRoaXMub3B0aW9ucy5jb250YWluZXIpIDogJHRpcC5pbnNlcnRBZnRlcih0aGlzLiRlbGVtZW50KVxuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdpbnNlcnRlZC5icy4nICsgdGhpcy50eXBlKVxuXG4gICAgICB2YXIgcG9zICAgICAgICAgID0gdGhpcy5nZXRQb3NpdGlvbigpXG4gICAgICB2YXIgYWN0dWFsV2lkdGggID0gJHRpcFswXS5vZmZzZXRXaWR0aFxuICAgICAgdmFyIGFjdHVhbEhlaWdodCA9ICR0aXBbMF0ub2Zmc2V0SGVpZ2h0XG5cbiAgICAgIGlmIChhdXRvUGxhY2UpIHtcbiAgICAgICAgdmFyIG9yZ1BsYWNlbWVudCA9IHBsYWNlbWVudFxuICAgICAgICB2YXIgdmlld3BvcnREaW0gPSB0aGlzLmdldFBvc2l0aW9uKHRoaXMuJHZpZXdwb3J0KVxuXG4gICAgICAgIHBsYWNlbWVudCA9IHBsYWNlbWVudCA9PSAnYm90dG9tJyAmJiBwb3MuYm90dG9tICsgYWN0dWFsSGVpZ2h0ID4gdmlld3BvcnREaW0uYm90dG9tID8gJ3RvcCcgICAgOlxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQgPT0gJ3RvcCcgICAgJiYgcG9zLnRvcCAgICAtIGFjdHVhbEhlaWdodCA8IHZpZXdwb3J0RGltLnRvcCAgICA/ICdib3R0b20nIDpcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50ID09ICdyaWdodCcgICYmIHBvcy5yaWdodCAgKyBhY3R1YWxXaWR0aCAgPiB2aWV3cG9ydERpbS53aWR0aCAgPyAnbGVmdCcgICA6XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudCA9PSAnbGVmdCcgICAmJiBwb3MubGVmdCAgIC0gYWN0dWFsV2lkdGggIDwgdmlld3BvcnREaW0ubGVmdCAgID8gJ3JpZ2h0JyAgOlxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnRcblxuICAgICAgICAkdGlwXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKG9yZ1BsYWNlbWVudClcbiAgICAgICAgICAuYWRkQ2xhc3MocGxhY2VtZW50KVxuICAgICAgfVxuXG4gICAgICB2YXIgY2FsY3VsYXRlZE9mZnNldCA9IHRoaXMuZ2V0Q2FsY3VsYXRlZE9mZnNldChwbGFjZW1lbnQsIHBvcywgYWN0dWFsV2lkdGgsIGFjdHVhbEhlaWdodClcblxuICAgICAgdGhpcy5hcHBseVBsYWNlbWVudChjYWxjdWxhdGVkT2Zmc2V0LCBwbGFjZW1lbnQpXG5cbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHByZXZIb3ZlclN0YXRlID0gdGhhdC5ob3ZlclN0YXRlXG4gICAgICAgIHRoYXQuJGVsZW1lbnQudHJpZ2dlcignc2hvd24uYnMuJyArIHRoYXQudHlwZSlcbiAgICAgICAgdGhhdC5ob3ZlclN0YXRlID0gbnVsbFxuXG4gICAgICAgIGlmIChwcmV2SG92ZXJTdGF0ZSA9PSAnb3V0JykgdGhhdC5sZWF2ZSh0aGF0KVxuICAgICAgfVxuXG4gICAgICAkLnN1cHBvcnQudHJhbnNpdGlvbiAmJiB0aGlzLiR0aXAuaGFzQ2xhc3MoJ2ZhZGUnKSA/XG4gICAgICAgICR0aXBcbiAgICAgICAgICAub25lKCdic1RyYW5zaXRpb25FbmQnLCBjb21wbGV0ZSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoVG9vbHRpcC5UUkFOU0lUSU9OX0RVUkFUSU9OKSA6XG4gICAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5hcHBseVBsYWNlbWVudCA9IGZ1bmN0aW9uIChvZmZzZXQsIHBsYWNlbWVudCkge1xuICAgIHZhciAkdGlwICAgPSB0aGlzLnRpcCgpXG4gICAgdmFyIHdpZHRoICA9ICR0aXBbMF0ub2Zmc2V0V2lkdGhcbiAgICB2YXIgaGVpZ2h0ID0gJHRpcFswXS5vZmZzZXRIZWlnaHRcblxuICAgIC8vIG1hbnVhbGx5IHJlYWQgbWFyZ2lucyBiZWNhdXNlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBpbmNsdWRlcyBkaWZmZXJlbmNlXG4gICAgdmFyIG1hcmdpblRvcCA9IHBhcnNlSW50KCR0aXAuY3NzKCdtYXJnaW4tdG9wJyksIDEwKVxuICAgIHZhciBtYXJnaW5MZWZ0ID0gcGFyc2VJbnQoJHRpcC5jc3MoJ21hcmdpbi1sZWZ0JyksIDEwKVxuXG4gICAgLy8gd2UgbXVzdCBjaGVjayBmb3IgTmFOIGZvciBpZSA4LzlcbiAgICBpZiAoaXNOYU4obWFyZ2luVG9wKSkgIG1hcmdpblRvcCAgPSAwXG4gICAgaWYgKGlzTmFOKG1hcmdpbkxlZnQpKSBtYXJnaW5MZWZ0ID0gMFxuXG4gICAgb2Zmc2V0LnRvcCAgKz0gbWFyZ2luVG9wXG4gICAgb2Zmc2V0LmxlZnQgKz0gbWFyZ2luTGVmdFxuXG4gICAgLy8gJC5mbi5vZmZzZXQgZG9lc24ndCByb3VuZCBwaXhlbCB2YWx1ZXNcbiAgICAvLyBzbyB3ZSB1c2Ugc2V0T2Zmc2V0IGRpcmVjdGx5IHdpdGggb3VyIG93biBmdW5jdGlvbiBCLTBcbiAgICAkLm9mZnNldC5zZXRPZmZzZXQoJHRpcFswXSwgJC5leHRlbmQoe1xuICAgICAgdXNpbmc6IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAkdGlwLmNzcyh7XG4gICAgICAgICAgdG9wOiBNYXRoLnJvdW5kKHByb3BzLnRvcCksXG4gICAgICAgICAgbGVmdDogTWF0aC5yb3VuZChwcm9wcy5sZWZ0KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sIG9mZnNldCksIDApXG5cbiAgICAkdGlwLmFkZENsYXNzKCdpbicpXG5cbiAgICAvLyBjaGVjayB0byBzZWUgaWYgcGxhY2luZyB0aXAgaW4gbmV3IG9mZnNldCBjYXVzZWQgdGhlIHRpcCB0byByZXNpemUgaXRzZWxmXG4gICAgdmFyIGFjdHVhbFdpZHRoICA9ICR0aXBbMF0ub2Zmc2V0V2lkdGhcbiAgICB2YXIgYWN0dWFsSGVpZ2h0ID0gJHRpcFswXS5vZmZzZXRIZWlnaHRcblxuICAgIGlmIChwbGFjZW1lbnQgPT0gJ3RvcCcgJiYgYWN0dWFsSGVpZ2h0ICE9IGhlaWdodCkge1xuICAgICAgb2Zmc2V0LnRvcCA9IG9mZnNldC50b3AgKyBoZWlnaHQgLSBhY3R1YWxIZWlnaHRcbiAgICB9XG5cbiAgICB2YXIgZGVsdGEgPSB0aGlzLmdldFZpZXdwb3J0QWRqdXN0ZWREZWx0YShwbGFjZW1lbnQsIG9mZnNldCwgYWN0dWFsV2lkdGgsIGFjdHVhbEhlaWdodClcblxuICAgIGlmIChkZWx0YS5sZWZ0KSBvZmZzZXQubGVmdCArPSBkZWx0YS5sZWZ0XG4gICAgZWxzZSBvZmZzZXQudG9wICs9IGRlbHRhLnRvcFxuXG4gICAgdmFyIGlzVmVydGljYWwgICAgICAgICAgPSAvdG9wfGJvdHRvbS8udGVzdChwbGFjZW1lbnQpXG4gICAgdmFyIGFycm93RGVsdGEgICAgICAgICAgPSBpc1ZlcnRpY2FsID8gZGVsdGEubGVmdCAqIDIgLSB3aWR0aCArIGFjdHVhbFdpZHRoIDogZGVsdGEudG9wICogMiAtIGhlaWdodCArIGFjdHVhbEhlaWdodFxuICAgIHZhciBhcnJvd09mZnNldFBvc2l0aW9uID0gaXNWZXJ0aWNhbCA/ICdvZmZzZXRXaWR0aCcgOiAnb2Zmc2V0SGVpZ2h0J1xuXG4gICAgJHRpcC5vZmZzZXQob2Zmc2V0KVxuICAgIHRoaXMucmVwbGFjZUFycm93KGFycm93RGVsdGEsICR0aXBbMF1bYXJyb3dPZmZzZXRQb3NpdGlvbl0sIGlzVmVydGljYWwpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5yZXBsYWNlQXJyb3cgPSBmdW5jdGlvbiAoZGVsdGEsIGRpbWVuc2lvbiwgaXNWZXJ0aWNhbCkge1xuICAgIHRoaXMuYXJyb3coKVxuICAgICAgLmNzcyhpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCcsIDUwICogKDEgLSBkZWx0YSAvIGRpbWVuc2lvbikgKyAnJScpXG4gICAgICAuY3NzKGlzVmVydGljYWwgPyAndG9wJyA6ICdsZWZ0JywgJycpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5zZXRDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkdGlwICA9IHRoaXMudGlwKClcbiAgICB2YXIgdGl0bGUgPSB0aGlzLmdldFRpdGxlKClcblxuICAgICR0aXAuZmluZCgnLnRvb2x0aXAtaW5uZXInKVt0aGlzLm9wdGlvbnMuaHRtbCA/ICdodG1sJyA6ICd0ZXh0J10odGl0bGUpXG4gICAgJHRpcC5yZW1vdmVDbGFzcygnZmFkZSBpbiB0b3AgYm90dG9tIGxlZnQgcmlnaHQnKVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgIHZhciAkdGlwID0gJCh0aGlzLiR0aXApXG4gICAgdmFyIGUgICAgPSAkLkV2ZW50KCdoaWRlLmJzLicgKyB0aGlzLnR5cGUpXG5cbiAgICBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgIGlmICh0aGF0LmhvdmVyU3RhdGUgIT0gJ2luJykgJHRpcC5kZXRhY2goKVxuICAgICAgaWYgKHRoYXQuJGVsZW1lbnQpIHsgLy8gVE9ETzogQ2hlY2sgd2hldGhlciBndWFyZGluZyB0aGlzIGNvZGUgd2l0aCB0aGlzIGBpZmAgaXMgcmVhbGx5IG5lY2Vzc2FyeS5cbiAgICAgICAgdGhhdC4kZWxlbWVudFxuICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWRlc2NyaWJlZGJ5JylcbiAgICAgICAgICAudHJpZ2dlcignaGlkZGVuLmJzLicgKyB0aGF0LnR5cGUpXG4gICAgICB9XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpXG5cbiAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICAkdGlwLnJlbW92ZUNsYXNzKCdpbicpXG5cbiAgICAkLnN1cHBvcnQudHJhbnNpdGlvbiAmJiAkdGlwLmhhc0NsYXNzKCdmYWRlJykgP1xuICAgICAgJHRpcFxuICAgICAgICAub25lKCdic1RyYW5zaXRpb25FbmQnLCBjb21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRvb2x0aXAuVFJBTlNJVElPTl9EVVJBVElPTikgOlxuICAgICAgY29tcGxldGUoKVxuXG4gICAgdGhpcy5ob3ZlclN0YXRlID0gbnVsbFxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmZpeFRpdGxlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkZSA9IHRoaXMuJGVsZW1lbnRcbiAgICBpZiAoJGUuYXR0cigndGl0bGUnKSB8fCB0eXBlb2YgJGUuYXR0cignZGF0YS1vcmlnaW5hbC10aXRsZScpICE9ICdzdHJpbmcnKSB7XG4gICAgICAkZS5hdHRyKCdkYXRhLW9yaWdpbmFsLXRpdGxlJywgJGUuYXR0cigndGl0bGUnKSB8fCAnJykuYXR0cigndGl0bGUnLCAnJylcbiAgICB9XG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5oYXNDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmdldFRpdGxlKClcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmdldFBvc2l0aW9uID0gZnVuY3Rpb24gKCRlbGVtZW50KSB7XG4gICAgJGVsZW1lbnQgICA9ICRlbGVtZW50IHx8IHRoaXMuJGVsZW1lbnRcblxuICAgIHZhciBlbCAgICAgPSAkZWxlbWVudFswXVxuICAgIHZhciBpc0JvZHkgPSBlbC50YWdOYW1lID09ICdCT0RZJ1xuXG4gICAgdmFyIGVsUmVjdCAgICA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgaWYgKGVsUmVjdC53aWR0aCA9PSBudWxsKSB7XG4gICAgICAvLyB3aWR0aCBhbmQgaGVpZ2h0IGFyZSBtaXNzaW5nIGluIElFOCwgc28gY29tcHV0ZSB0aGVtIG1hbnVhbGx5OyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xNDA5M1xuICAgICAgZWxSZWN0ID0gJC5leHRlbmQoe30sIGVsUmVjdCwgeyB3aWR0aDogZWxSZWN0LnJpZ2h0IC0gZWxSZWN0LmxlZnQsIGhlaWdodDogZWxSZWN0LmJvdHRvbSAtIGVsUmVjdC50b3AgfSlcbiAgICB9XG4gICAgdmFyIGlzU3ZnID0gd2luZG93LlNWR0VsZW1lbnQgJiYgZWwgaW5zdGFuY2VvZiB3aW5kb3cuU1ZHRWxlbWVudFxuICAgIC8vIEF2b2lkIHVzaW5nICQub2Zmc2V0KCkgb24gU1ZHcyBzaW5jZSBpdCBnaXZlcyBpbmNvcnJlY3QgcmVzdWx0cyBpbiBqUXVlcnkgMy5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8yMDI4MFxuICAgIHZhciBlbE9mZnNldCAgPSBpc0JvZHkgPyB7IHRvcDogMCwgbGVmdDogMCB9IDogKGlzU3ZnID8gbnVsbCA6ICRlbGVtZW50Lm9mZnNldCgpKVxuICAgIHZhciBzY3JvbGwgICAgPSB7IHNjcm9sbDogaXNCb2R5ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA6ICRlbGVtZW50LnNjcm9sbFRvcCgpIH1cbiAgICB2YXIgb3V0ZXJEaW1zID0gaXNCb2R5ID8geyB3aWR0aDogJCh3aW5kb3cpLndpZHRoKCksIGhlaWdodDogJCh3aW5kb3cpLmhlaWdodCgpIH0gOiBudWxsXG5cbiAgICByZXR1cm4gJC5leHRlbmQoe30sIGVsUmVjdCwgc2Nyb2xsLCBvdXRlckRpbXMsIGVsT2Zmc2V0KVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZ2V0Q2FsY3VsYXRlZE9mZnNldCA9IGZ1bmN0aW9uIChwbGFjZW1lbnQsIHBvcywgYWN0dWFsV2lkdGgsIGFjdHVhbEhlaWdodCkge1xuICAgIHJldHVybiBwbGFjZW1lbnQgPT0gJ2JvdHRvbScgPyB7IHRvcDogcG9zLnRvcCArIHBvcy5oZWlnaHQsICAgbGVmdDogcG9zLmxlZnQgKyBwb3Mud2lkdGggLyAyIC0gYWN0dWFsV2lkdGggLyAyIH0gOlxuICAgICAgICAgICBwbGFjZW1lbnQgPT0gJ3RvcCcgICAgPyB7IHRvcDogcG9zLnRvcCAtIGFjdHVhbEhlaWdodCwgbGVmdDogcG9zLmxlZnQgKyBwb3Mud2lkdGggLyAyIC0gYWN0dWFsV2lkdGggLyAyIH0gOlxuICAgICAgICAgICBwbGFjZW1lbnQgPT0gJ2xlZnQnICAgPyB7IHRvcDogcG9zLnRvcCArIHBvcy5oZWlnaHQgLyAyIC0gYWN0dWFsSGVpZ2h0IC8gMiwgbGVmdDogcG9zLmxlZnQgLSBhY3R1YWxXaWR0aCB9IDpcbiAgICAgICAgLyogcGxhY2VtZW50ID09ICdyaWdodCcgKi8geyB0b3A6IHBvcy50b3AgKyBwb3MuaGVpZ2h0IC8gMiAtIGFjdHVhbEhlaWdodCAvIDIsIGxlZnQ6IHBvcy5sZWZ0ICsgcG9zLndpZHRoIH1cblxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZ2V0Vmlld3BvcnRBZGp1c3RlZERlbHRhID0gZnVuY3Rpb24gKHBsYWNlbWVudCwgcG9zLCBhY3R1YWxXaWR0aCwgYWN0dWFsSGVpZ2h0KSB7XG4gICAgdmFyIGRlbHRhID0geyB0b3A6IDAsIGxlZnQ6IDAgfVxuICAgIGlmICghdGhpcy4kdmlld3BvcnQpIHJldHVybiBkZWx0YVxuXG4gICAgdmFyIHZpZXdwb3J0UGFkZGluZyA9IHRoaXMub3B0aW9ucy52aWV3cG9ydCAmJiB0aGlzLm9wdGlvbnMudmlld3BvcnQucGFkZGluZyB8fCAwXG4gICAgdmFyIHZpZXdwb3J0RGltZW5zaW9ucyA9IHRoaXMuZ2V0UG9zaXRpb24odGhpcy4kdmlld3BvcnQpXG5cbiAgICBpZiAoL3JpZ2h0fGxlZnQvLnRlc3QocGxhY2VtZW50KSkge1xuICAgICAgdmFyIHRvcEVkZ2VPZmZzZXQgICAgPSBwb3MudG9wIC0gdmlld3BvcnRQYWRkaW5nIC0gdmlld3BvcnREaW1lbnNpb25zLnNjcm9sbFxuICAgICAgdmFyIGJvdHRvbUVkZ2VPZmZzZXQgPSBwb3MudG9wICsgdmlld3BvcnRQYWRkaW5nIC0gdmlld3BvcnREaW1lbnNpb25zLnNjcm9sbCArIGFjdHVhbEhlaWdodFxuICAgICAgaWYgKHRvcEVkZ2VPZmZzZXQgPCB2aWV3cG9ydERpbWVuc2lvbnMudG9wKSB7IC8vIHRvcCBvdmVyZmxvd1xuICAgICAgICBkZWx0YS50b3AgPSB2aWV3cG9ydERpbWVuc2lvbnMudG9wIC0gdG9wRWRnZU9mZnNldFxuICAgICAgfSBlbHNlIGlmIChib3R0b21FZGdlT2Zmc2V0ID4gdmlld3BvcnREaW1lbnNpb25zLnRvcCArIHZpZXdwb3J0RGltZW5zaW9ucy5oZWlnaHQpIHsgLy8gYm90dG9tIG92ZXJmbG93XG4gICAgICAgIGRlbHRhLnRvcCA9IHZpZXdwb3J0RGltZW5zaW9ucy50b3AgKyB2aWV3cG9ydERpbWVuc2lvbnMuaGVpZ2h0IC0gYm90dG9tRWRnZU9mZnNldFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbGVmdEVkZ2VPZmZzZXQgID0gcG9zLmxlZnQgLSB2aWV3cG9ydFBhZGRpbmdcbiAgICAgIHZhciByaWdodEVkZ2VPZmZzZXQgPSBwb3MubGVmdCArIHZpZXdwb3J0UGFkZGluZyArIGFjdHVhbFdpZHRoXG4gICAgICBpZiAobGVmdEVkZ2VPZmZzZXQgPCB2aWV3cG9ydERpbWVuc2lvbnMubGVmdCkgeyAvLyBsZWZ0IG92ZXJmbG93XG4gICAgICAgIGRlbHRhLmxlZnQgPSB2aWV3cG9ydERpbWVuc2lvbnMubGVmdCAtIGxlZnRFZGdlT2Zmc2V0XG4gICAgICB9IGVsc2UgaWYgKHJpZ2h0RWRnZU9mZnNldCA+IHZpZXdwb3J0RGltZW5zaW9ucy5yaWdodCkgeyAvLyByaWdodCBvdmVyZmxvd1xuICAgICAgICBkZWx0YS5sZWZ0ID0gdmlld3BvcnREaW1lbnNpb25zLmxlZnQgKyB2aWV3cG9ydERpbWVuc2lvbnMud2lkdGggLSByaWdodEVkZ2VPZmZzZXRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVsdGFcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmdldFRpdGxlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aXRsZVxuICAgIHZhciAkZSA9IHRoaXMuJGVsZW1lbnRcbiAgICB2YXIgbyAgPSB0aGlzLm9wdGlvbnNcblxuICAgIHRpdGxlID0gJGUuYXR0cignZGF0YS1vcmlnaW5hbC10aXRsZScpXG4gICAgICB8fCAodHlwZW9mIG8udGl0bGUgPT0gJ2Z1bmN0aW9uJyA/IG8udGl0bGUuY2FsbCgkZVswXSkgOiAgby50aXRsZSlcblxuICAgIHJldHVybiB0aXRsZVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZ2V0VUlEID0gZnVuY3Rpb24gKHByZWZpeCkge1xuICAgIGRvIHByZWZpeCArPSB+fihNYXRoLnJhbmRvbSgpICogMTAwMDAwMClcbiAgICB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSlcbiAgICByZXR1cm4gcHJlZml4XG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS50aXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLiR0aXApIHtcbiAgICAgIHRoaXMuJHRpcCA9ICQodGhpcy5vcHRpb25zLnRlbXBsYXRlKVxuICAgICAgaWYgKHRoaXMuJHRpcC5sZW5ndGggIT0gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy50eXBlICsgJyBgdGVtcGxhdGVgIG9wdGlvbiBtdXN0IGNvbnNpc3Qgb2YgZXhhY3RseSAxIHRvcC1sZXZlbCBlbGVtZW50IScpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLiR0aXBcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmFycm93ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodGhpcy4kYXJyb3cgPSB0aGlzLiRhcnJvdyB8fCB0aGlzLnRpcCgpLmZpbmQoJy50b29sdGlwLWFycm93JykpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUudG9nZ2xlRW5hYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVuYWJsZWQgPSAhdGhpcy5lbmFibGVkXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIGlmIChlKSB7XG4gICAgICBzZWxmID0gJChlLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2JzLicgKyB0aGlzLnR5cGUpXG4gICAgICBpZiAoIXNlbGYpIHtcbiAgICAgICAgc2VsZiA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGUuY3VycmVudFRhcmdldCwgdGhpcy5nZXREZWxlZ2F0ZU9wdGlvbnMoKSlcbiAgICAgICAgJChlLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2JzLicgKyB0aGlzLnR5cGUsIHNlbGYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGUpIHtcbiAgICAgIHNlbGYuaW5TdGF0ZS5jbGljayA9ICFzZWxmLmluU3RhdGUuY2xpY2tcbiAgICAgIGlmIChzZWxmLmlzSW5TdGF0ZVRydWUoKSkgc2VsZi5lbnRlcihzZWxmKVxuICAgICAgZWxzZSBzZWxmLmxlYXZlKHNlbGYpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYudGlwKCkuaGFzQ2xhc3MoJ2luJykgPyBzZWxmLmxlYXZlKHNlbGYpIDogc2VsZi5lbnRlcihzZWxmKVxuICAgIH1cbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dClcbiAgICB0aGlzLmhpZGUoZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC4kZWxlbWVudC5vZmYoJy4nICsgdGhhdC50eXBlKS5yZW1vdmVEYXRhKCdicy4nICsgdGhhdC50eXBlKVxuICAgICAgaWYgKHRoYXQuJHRpcCkge1xuICAgICAgICB0aGF0LiR0aXAuZGV0YWNoKClcbiAgICAgIH1cbiAgICAgIHRoYXQuJHRpcCA9IG51bGxcbiAgICAgIHRoYXQuJGFycm93ID0gbnVsbFxuICAgICAgdGhhdC4kdmlld3BvcnQgPSBudWxsXG4gICAgICB0aGF0LiRlbGVtZW50ID0gbnVsbFxuICAgIH0pXG4gIH1cblxuXG4gIC8vIFRPT0xUSVAgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIFBsdWdpbihvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgICAgPSAkdGhpcy5kYXRhKCdicy50b29sdGlwJylcbiAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb25cblxuICAgICAgaWYgKCFkYXRhICYmIC9kZXN0cm95fGhpZGUvLnRlc3Qob3B0aW9uKSkgcmV0dXJuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLnRvb2x0aXAnLCAoZGF0YSA9IG5ldyBUb29sdGlwKHRoaXMsIG9wdGlvbnMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0oKVxuICAgIH0pXG4gIH1cblxuICB2YXIgb2xkID0gJC5mbi50b29sdGlwXG5cbiAgJC5mbi50b29sdGlwICAgICAgICAgICAgID0gUGx1Z2luXG4gICQuZm4udG9vbHRpcC5Db25zdHJ1Y3RvciA9IFRvb2x0aXBcblxuXG4gIC8vIFRPT0xUSVAgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT09PVxuXG4gICQuZm4udG9vbHRpcC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4udG9vbHRpcCA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogcG9wb3Zlci5qcyB2My4zLjdcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI3BvcG92ZXJzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTYgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gUE9QT1ZFUiBQVUJMSUMgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIFBvcG92ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuaW5pdCgncG9wb3ZlcicsIGVsZW1lbnQsIG9wdGlvbnMpXG4gIH1cblxuICBpZiAoISQuZm4udG9vbHRpcCkgdGhyb3cgbmV3IEVycm9yKCdQb3BvdmVyIHJlcXVpcmVzIHRvb2x0aXAuanMnKVxuXG4gIFBvcG92ZXIuVkVSU0lPTiAgPSAnMy4zLjcnXG5cbiAgUG9wb3Zlci5ERUZBVUxUUyA9ICQuZXh0ZW5kKHt9LCAkLmZuLnRvb2x0aXAuQ29uc3RydWN0b3IuREVGQVVMVFMsIHtcbiAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgdHJpZ2dlcjogJ2NsaWNrJyxcbiAgICBjb250ZW50OiAnJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj48aDMgY2xhc3M9XCJwb3BvdmVyLXRpdGxlXCI+PC9oMz48ZGl2IGNsYXNzPVwicG9wb3Zlci1jb250ZW50XCI+PC9kaXY+PC9kaXY+J1xuICB9KVxuXG5cbiAgLy8gTk9URTogUE9QT1ZFUiBFWFRFTkRTIHRvb2x0aXAuanNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBQb3BvdmVyLnByb3RvdHlwZSA9ICQuZXh0ZW5kKHt9LCAkLmZuLnRvb2x0aXAuQ29uc3RydWN0b3IucHJvdG90eXBlKVxuXG4gIFBvcG92ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUG9wb3ZlclxuXG4gIFBvcG92ZXIucHJvdG90eXBlLmdldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBQb3BvdmVyLkRFRkFVTFRTXG4gIH1cblxuICBQb3BvdmVyLnByb3RvdHlwZS5zZXRDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkdGlwICAgID0gdGhpcy50aXAoKVxuICAgIHZhciB0aXRsZSAgID0gdGhpcy5nZXRUaXRsZSgpXG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKVxuXG4gICAgJHRpcC5maW5kKCcucG9wb3Zlci10aXRsZScpW3RoaXMub3B0aW9ucy5odG1sID8gJ2h0bWwnIDogJ3RleHQnXSh0aXRsZSlcbiAgICAkdGlwLmZpbmQoJy5wb3BvdmVyLWNvbnRlbnQnKS5jaGlsZHJlbigpLmRldGFjaCgpLmVuZCgpWyAvLyB3ZSB1c2UgYXBwZW5kIGZvciBodG1sIG9iamVjdHMgdG8gbWFpbnRhaW4ganMgZXZlbnRzXG4gICAgICB0aGlzLm9wdGlvbnMuaHRtbCA/ICh0eXBlb2YgY29udGVudCA9PSAnc3RyaW5nJyA/ICdodG1sJyA6ICdhcHBlbmQnKSA6ICd0ZXh0J1xuICAgIF0oY29udGVudClcblxuICAgICR0aXAucmVtb3ZlQ2xhc3MoJ2ZhZGUgdG9wIGJvdHRvbSBsZWZ0IHJpZ2h0IGluJylcblxuICAgIC8vIElFOCBkb2Vzbid0IGFjY2VwdCBoaWRpbmcgdmlhIHRoZSBgOmVtcHR5YCBwc2V1ZG8gc2VsZWN0b3IsIHdlIGhhdmUgdG8gZG9cbiAgICAvLyB0aGlzIG1hbnVhbGx5IGJ5IGNoZWNraW5nIHRoZSBjb250ZW50cy5cbiAgICBpZiAoISR0aXAuZmluZCgnLnBvcG92ZXItdGl0bGUnKS5odG1sKCkpICR0aXAuZmluZCgnLnBvcG92ZXItdGl0bGUnKS5oaWRlKClcbiAgfVxuXG4gIFBvcG92ZXIucHJvdG90eXBlLmhhc0NvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGUoKSB8fCB0aGlzLmdldENvbnRlbnQoKVxuICB9XG5cbiAgUG9wb3Zlci5wcm90b3R5cGUuZ2V0Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGUgPSB0aGlzLiRlbGVtZW50XG4gICAgdmFyIG8gID0gdGhpcy5vcHRpb25zXG5cbiAgICByZXR1cm4gJGUuYXR0cignZGF0YS1jb250ZW50JylcbiAgICAgIHx8ICh0eXBlb2Ygby5jb250ZW50ID09ICdmdW5jdGlvbicgP1xuICAgICAgICAgICAgby5jb250ZW50LmNhbGwoJGVbMF0pIDpcbiAgICAgICAgICAgIG8uY29udGVudClcbiAgfVxuXG4gIFBvcG92ZXIucHJvdG90eXBlLmFycm93ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodGhpcy4kYXJyb3cgPSB0aGlzLiRhcnJvdyB8fCB0aGlzLnRpcCgpLmZpbmQoJy5hcnJvdycpKVxuICB9XG5cblxuICAvLyBQT1BPVkVSIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBQbHVnaW4ob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMucG9wb3ZlcicpXG4gICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uXG5cbiAgICAgIGlmICghZGF0YSAmJiAvZGVzdHJveXxoaWRlLy50ZXN0KG9wdGlvbikpIHJldHVyblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy5wb3BvdmVyJywgKGRhdGEgPSBuZXcgUG9wb3Zlcih0aGlzLCBvcHRpb25zKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKClcbiAgICB9KVxuICB9XG5cbiAgdmFyIG9sZCA9ICQuZm4ucG9wb3ZlclxuXG4gICQuZm4ucG9wb3ZlciAgICAgICAgICAgICA9IFBsdWdpblxuICAkLmZuLnBvcG92ZXIuQ29uc3RydWN0b3IgPSBQb3BvdmVyXG5cblxuICAvLyBQT1BPVkVSIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLnBvcG92ZXIubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLnBvcG92ZXIgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IHNjcm9sbHNweS5qcyB2My4zLjdcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI3Njcm9sbHNweVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE2IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFNDUk9MTFNQWSBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gU2Nyb2xsU3B5KGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRib2R5ICAgICAgICAgID0gJChkb2N1bWVudC5ib2R5KVxuICAgIHRoaXMuJHNjcm9sbEVsZW1lbnQgPSAkKGVsZW1lbnQpLmlzKGRvY3VtZW50LmJvZHkpID8gJCh3aW5kb3cpIDogJChlbGVtZW50KVxuICAgIHRoaXMub3B0aW9ucyAgICAgICAgPSAkLmV4dGVuZCh7fSwgU2Nyb2xsU3B5LkRFRkFVTFRTLCBvcHRpb25zKVxuICAgIHRoaXMuc2VsZWN0b3IgICAgICAgPSAodGhpcy5vcHRpb25zLnRhcmdldCB8fCAnJykgKyAnIC5uYXYgbGkgPiBhJ1xuICAgIHRoaXMub2Zmc2V0cyAgICAgICAgPSBbXVxuICAgIHRoaXMudGFyZ2V0cyAgICAgICAgPSBbXVxuICAgIHRoaXMuYWN0aXZlVGFyZ2V0ICAgPSBudWxsXG4gICAgdGhpcy5zY3JvbGxIZWlnaHQgICA9IDBcblxuICAgIHRoaXMuJHNjcm9sbEVsZW1lbnQub24oJ3Njcm9sbC5icy5zY3JvbGxzcHknLCAkLnByb3h5KHRoaXMucHJvY2VzcywgdGhpcykpXG4gICAgdGhpcy5yZWZyZXNoKClcbiAgICB0aGlzLnByb2Nlc3MoKVxuICB9XG5cbiAgU2Nyb2xsU3B5LlZFUlNJT04gID0gJzMuMy43J1xuXG4gIFNjcm9sbFNweS5ERUZBVUxUUyA9IHtcbiAgICBvZmZzZXQ6IDEwXG4gIH1cblxuICBTY3JvbGxTcHkucHJvdG90eXBlLmdldFNjcm9sbEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy4kc2Nyb2xsRWxlbWVudFswXS5zY3JvbGxIZWlnaHQgfHwgTWF0aC5tYXgodGhpcy4kYm9keVswXS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpXG4gIH1cblxuICBTY3JvbGxTcHkucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRoYXQgICAgICAgICAgPSB0aGlzXG4gICAgdmFyIG9mZnNldE1ldGhvZCAgPSAnb2Zmc2V0J1xuICAgIHZhciBvZmZzZXRCYXNlICAgID0gMFxuXG4gICAgdGhpcy5vZmZzZXRzICAgICAgPSBbXVxuICAgIHRoaXMudGFyZ2V0cyAgICAgID0gW11cbiAgICB0aGlzLnNjcm9sbEhlaWdodCA9IHRoaXMuZ2V0U2Nyb2xsSGVpZ2h0KClcblxuICAgIGlmICghJC5pc1dpbmRvdyh0aGlzLiRzY3JvbGxFbGVtZW50WzBdKSkge1xuICAgICAgb2Zmc2V0TWV0aG9kID0gJ3Bvc2l0aW9uJ1xuICAgICAgb2Zmc2V0QmFzZSAgID0gdGhpcy4kc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AoKVxuICAgIH1cblxuICAgIHRoaXMuJGJvZHlcbiAgICAgIC5maW5kKHRoaXMuc2VsZWN0b3IpXG4gICAgICAubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRlbCAgID0gJCh0aGlzKVxuICAgICAgICB2YXIgaHJlZiAgPSAkZWwuZGF0YSgndGFyZ2V0JykgfHwgJGVsLmF0dHIoJ2hyZWYnKVxuICAgICAgICB2YXIgJGhyZWYgPSAvXiMuLy50ZXN0KGhyZWYpICYmICQoaHJlZilcblxuICAgICAgICByZXR1cm4gKCRocmVmXG4gICAgICAgICAgJiYgJGhyZWYubGVuZ3RoXG4gICAgICAgICAgJiYgJGhyZWYuaXMoJzp2aXNpYmxlJylcbiAgICAgICAgICAmJiBbWyRocmVmW29mZnNldE1ldGhvZF0oKS50b3AgKyBvZmZzZXRCYXNlLCBocmVmXV0pIHx8IG51bGxcbiAgICAgIH0pXG4gICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYVswXSAtIGJbMF0gfSlcbiAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhhdC5vZmZzZXRzLnB1c2godGhpc1swXSlcbiAgICAgICAgdGhhdC50YXJnZXRzLnB1c2godGhpc1sxXSlcbiAgICAgIH0pXG4gIH1cblxuICBTY3JvbGxTcHkucHJvdG90eXBlLnByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNjcm9sbFRvcCAgICA9IHRoaXMuJHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKCkgKyB0aGlzLm9wdGlvbnMub2Zmc2V0XG4gICAgdmFyIHNjcm9sbEhlaWdodCA9IHRoaXMuZ2V0U2Nyb2xsSGVpZ2h0KClcbiAgICB2YXIgbWF4U2Nyb2xsICAgID0gdGhpcy5vcHRpb25zLm9mZnNldCArIHNjcm9sbEhlaWdodCAtIHRoaXMuJHNjcm9sbEVsZW1lbnQuaGVpZ2h0KClcbiAgICB2YXIgb2Zmc2V0cyAgICAgID0gdGhpcy5vZmZzZXRzXG4gICAgdmFyIHRhcmdldHMgICAgICA9IHRoaXMudGFyZ2V0c1xuICAgIHZhciBhY3RpdmVUYXJnZXQgPSB0aGlzLmFjdGl2ZVRhcmdldFxuICAgIHZhciBpXG5cbiAgICBpZiAodGhpcy5zY3JvbGxIZWlnaHQgIT0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICB0aGlzLnJlZnJlc2goKVxuICAgIH1cblxuICAgIGlmIChzY3JvbGxUb3AgPj0gbWF4U2Nyb2xsKSB7XG4gICAgICByZXR1cm4gYWN0aXZlVGFyZ2V0ICE9IChpID0gdGFyZ2V0c1t0YXJnZXRzLmxlbmd0aCAtIDFdKSAmJiB0aGlzLmFjdGl2YXRlKGkpXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZVRhcmdldCAmJiBzY3JvbGxUb3AgPCBvZmZzZXRzWzBdKSB7XG4gICAgICB0aGlzLmFjdGl2ZVRhcmdldCA9IG51bGxcbiAgICAgIHJldHVybiB0aGlzLmNsZWFyKClcbiAgICB9XG5cbiAgICBmb3IgKGkgPSBvZmZzZXRzLmxlbmd0aDsgaS0tOykge1xuICAgICAgYWN0aXZlVGFyZ2V0ICE9IHRhcmdldHNbaV1cbiAgICAgICAgJiYgc2Nyb2xsVG9wID49IG9mZnNldHNbaV1cbiAgICAgICAgJiYgKG9mZnNldHNbaSArIDFdID09PSB1bmRlZmluZWQgfHwgc2Nyb2xsVG9wIDwgb2Zmc2V0c1tpICsgMV0pXG4gICAgICAgICYmIHRoaXMuYWN0aXZhdGUodGFyZ2V0c1tpXSlcbiAgICB9XG4gIH1cblxuICBTY3JvbGxTcHkucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHRoaXMuYWN0aXZlVGFyZ2V0ID0gdGFyZ2V0XG5cbiAgICB0aGlzLmNsZWFyKClcblxuICAgIHZhciBzZWxlY3RvciA9IHRoaXMuc2VsZWN0b3IgK1xuICAgICAgJ1tkYXRhLXRhcmdldD1cIicgKyB0YXJnZXQgKyAnXCJdLCcgK1xuICAgICAgdGhpcy5zZWxlY3RvciArICdbaHJlZj1cIicgKyB0YXJnZXQgKyAnXCJdJ1xuXG4gICAgdmFyIGFjdGl2ZSA9ICQoc2VsZWN0b3IpXG4gICAgICAucGFyZW50cygnbGknKVxuICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuXG4gICAgaWYgKGFjdGl2ZS5wYXJlbnQoJy5kcm9wZG93bi1tZW51JykubGVuZ3RoKSB7XG4gICAgICBhY3RpdmUgPSBhY3RpdmVcbiAgICAgICAgLmNsb3Nlc3QoJ2xpLmRyb3Bkb3duJylcbiAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIGFjdGl2ZS50cmlnZ2VyKCdhY3RpdmF0ZS5icy5zY3JvbGxzcHknKVxuICB9XG5cbiAgU2Nyb2xsU3B5LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMuc2VsZWN0b3IpXG4gICAgICAucGFyZW50c1VudGlsKHRoaXMub3B0aW9ucy50YXJnZXQsICcuYWN0aXZlJylcbiAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgfVxuXG5cbiAgLy8gU0NST0xMU1BZIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIFBsdWdpbihvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgICAgPSAkdGhpcy5kYXRhKCdicy5zY3JvbGxzcHknKVxuICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvblxuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLnNjcm9sbHNweScsIChkYXRhID0gbmV3IFNjcm9sbFNweSh0aGlzLCBvcHRpb25zKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKClcbiAgICB9KVxuICB9XG5cbiAgdmFyIG9sZCA9ICQuZm4uc2Nyb2xsc3B5XG5cbiAgJC5mbi5zY3JvbGxzcHkgICAgICAgICAgICAgPSBQbHVnaW5cbiAgJC5mbi5zY3JvbGxzcHkuQ29uc3RydWN0b3IgPSBTY3JvbGxTcHlcblxuXG4gIC8vIFNDUk9MTFNQWSBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLnNjcm9sbHNweS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4uc2Nyb2xsc3B5ID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gU0NST0xMU1BZIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PT09PT09PVxuXG4gICQod2luZG93KS5vbignbG9hZC5icy5zY3JvbGxzcHkuZGF0YS1hcGknLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnW2RhdGEtc3B5PVwic2Nyb2xsXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHNweSA9ICQodGhpcylcbiAgICAgIFBsdWdpbi5jYWxsKCRzcHksICRzcHkuZGF0YSgpKVxuICAgIH0pXG4gIH0pXG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IHRhYi5qcyB2My4zLjdcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI3RhYnNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNiBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBUQUIgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBUYWIgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIGpzY3M6ZGlzYWJsZSByZXF1aXJlRG9sbGFyQmVmb3JlalF1ZXJ5QXNzaWdubWVudFxuICAgIHRoaXMuZWxlbWVudCA9ICQoZWxlbWVudClcbiAgICAvLyBqc2NzOmVuYWJsZSByZXF1aXJlRG9sbGFyQmVmb3JlalF1ZXJ5QXNzaWdubWVudFxuICB9XG5cbiAgVGFiLlZFUlNJT04gPSAnMy4zLjcnXG5cbiAgVGFiLlRSQU5TSVRJT05fRFVSQVRJT04gPSAxNTBcblxuICBUYWIucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICR0aGlzICAgID0gdGhpcy5lbGVtZW50XG4gICAgdmFyICR1bCAgICAgID0gJHRoaXMuY2xvc2VzdCgndWw6bm90KC5kcm9wZG93bi1tZW51KScpXG4gICAgdmFyIHNlbGVjdG9yID0gJHRoaXMuZGF0YSgndGFyZ2V0JylcblxuICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgIHNlbGVjdG9yID0gJHRoaXMuYXR0cignaHJlZicpXG4gICAgICBzZWxlY3RvciA9IHNlbGVjdG9yICYmIHNlbGVjdG9yLnJlcGxhY2UoLy4qKD89I1teXFxzXSokKS8sICcnKSAvLyBzdHJpcCBmb3IgaWU3XG4gICAgfVxuXG4gICAgaWYgKCR0aGlzLnBhcmVudCgnbGknKS5oYXNDbGFzcygnYWN0aXZlJykpIHJldHVyblxuXG4gICAgdmFyICRwcmV2aW91cyA9ICR1bC5maW5kKCcuYWN0aXZlOmxhc3QgYScpXG4gICAgdmFyIGhpZGVFdmVudCA9ICQuRXZlbnQoJ2hpZGUuYnMudGFiJywge1xuICAgICAgcmVsYXRlZFRhcmdldDogJHRoaXNbMF1cbiAgICB9KVxuICAgIHZhciBzaG93RXZlbnQgPSAkLkV2ZW50KCdzaG93LmJzLnRhYicsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6ICRwcmV2aW91c1swXVxuICAgIH0pXG5cbiAgICAkcHJldmlvdXMudHJpZ2dlcihoaWRlRXZlbnQpXG4gICAgJHRoaXMudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICB2YXIgJHRhcmdldCA9ICQoc2VsZWN0b3IpXG5cbiAgICB0aGlzLmFjdGl2YXRlKCR0aGlzLmNsb3Nlc3QoJ2xpJyksICR1bClcbiAgICB0aGlzLmFjdGl2YXRlKCR0YXJnZXQsICR0YXJnZXQucGFyZW50KCksIGZ1bmN0aW9uICgpIHtcbiAgICAgICRwcmV2aW91cy50cmlnZ2VyKHtcbiAgICAgICAgdHlwZTogJ2hpZGRlbi5icy50YWInLFxuICAgICAgICByZWxhdGVkVGFyZ2V0OiAkdGhpc1swXVxuICAgICAgfSlcbiAgICAgICR0aGlzLnRyaWdnZXIoe1xuICAgICAgICB0eXBlOiAnc2hvd24uYnMudGFiJyxcbiAgICAgICAgcmVsYXRlZFRhcmdldDogJHByZXZpb3VzWzBdXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBUYWIucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICB2YXIgJGFjdGl2ZSAgICA9IGNvbnRhaW5lci5maW5kKCc+IC5hY3RpdmUnKVxuICAgIHZhciB0cmFuc2l0aW9uID0gY2FsbGJhY2tcbiAgICAgICYmICQuc3VwcG9ydC50cmFuc2l0aW9uXG4gICAgICAmJiAoJGFjdGl2ZS5sZW5ndGggJiYgJGFjdGl2ZS5oYXNDbGFzcygnZmFkZScpIHx8ICEhY29udGFpbmVyLmZpbmQoJz4gLmZhZGUnKS5sZW5ndGgpXG5cbiAgICBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgJGFjdGl2ZVxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgIC5maW5kKCc+IC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZScpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICAuZW5kKClcbiAgICAgICAgLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScpXG4gICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcblxuICAgICAgZWxlbWVudFxuICAgICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgIC5maW5kKCdbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKVxuICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcblxuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgZWxlbWVudFswXS5vZmZzZXRXaWR0aCAvLyByZWZsb3cgZm9yIHRyYW5zaXRpb25cbiAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnaW4nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcygnZmFkZScpXG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50LnBhcmVudCgnLmRyb3Bkb3duLW1lbnUnKS5sZW5ndGgpIHtcbiAgICAgICAgZWxlbWVudFxuICAgICAgICAgIC5jbG9zZXN0KCdsaS5kcm9wZG93bicpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgLmVuZCgpXG4gICAgICAgICAgLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgICB9XG5cbiAgICAkYWN0aXZlLmxlbmd0aCAmJiB0cmFuc2l0aW9uID9cbiAgICAgICRhY3RpdmVcbiAgICAgICAgLm9uZSgnYnNUcmFuc2l0aW9uRW5kJywgbmV4dClcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRhYi5UUkFOU0lUSU9OX0RVUkFUSU9OKSA6XG4gICAgICBuZXh0KClcblxuICAgICRhY3RpdmUucmVtb3ZlQ2xhc3MoJ2luJylcbiAgfVxuXG5cbiAgLy8gVEFCIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIFBsdWdpbihvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICA9ICR0aGlzLmRhdGEoJ2JzLnRhYicpXG5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMudGFiJywgKGRhdGEgPSBuZXcgVGFiKHRoaXMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0oKVxuICAgIH0pXG4gIH1cblxuICB2YXIgb2xkID0gJC5mbi50YWJcblxuICAkLmZuLnRhYiAgICAgICAgICAgICA9IFBsdWdpblxuICAkLmZuLnRhYi5Db25zdHJ1Y3RvciA9IFRhYlxuXG5cbiAgLy8gVEFCIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PVxuXG4gICQuZm4udGFiLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi50YWIgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBUQUIgREFUQS1BUElcbiAgLy8gPT09PT09PT09PT09XG5cbiAgdmFyIGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgUGx1Z2luLmNhbGwoJCh0aGlzKSwgJ3Nob3cnKVxuICB9XG5cbiAgJChkb2N1bWVudClcbiAgICAub24oJ2NsaWNrLmJzLnRhYi5kYXRhLWFwaScsICdbZGF0YS10b2dnbGU9XCJ0YWJcIl0nLCBjbGlja0hhbmRsZXIpXG4gICAgLm9uKCdjbGljay5icy50YWIuZGF0YS1hcGknLCAnW2RhdGEtdG9nZ2xlPVwicGlsbFwiXScsIGNsaWNrSGFuZGxlcilcblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogYWZmaXguanMgdjMuMy43XG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyNhZmZpeFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE2IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIEFGRklYIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBBZmZpeCA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIEFmZml4LkRFRkFVTFRTLCBvcHRpb25zKVxuXG4gICAgdGhpcy4kdGFyZ2V0ID0gJCh0aGlzLm9wdGlvbnMudGFyZ2V0KVxuICAgICAgLm9uKCdzY3JvbGwuYnMuYWZmaXguZGF0YS1hcGknLCAkLnByb3h5KHRoaXMuY2hlY2tQb3NpdGlvbiwgdGhpcykpXG4gICAgICAub24oJ2NsaWNrLmJzLmFmZml4LmRhdGEtYXBpJywgICQucHJveHkodGhpcy5jaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcCwgdGhpcykpXG5cbiAgICB0aGlzLiRlbGVtZW50ICAgICA9ICQoZWxlbWVudClcbiAgICB0aGlzLmFmZml4ZWQgICAgICA9IG51bGxcbiAgICB0aGlzLnVucGluICAgICAgICA9IG51bGxcbiAgICB0aGlzLnBpbm5lZE9mZnNldCA9IG51bGxcblxuICAgIHRoaXMuY2hlY2tQb3NpdGlvbigpXG4gIH1cblxuICBBZmZpeC5WRVJTSU9OICA9ICczLjMuNydcblxuICBBZmZpeC5SRVNFVCAgICA9ICdhZmZpeCBhZmZpeC10b3AgYWZmaXgtYm90dG9tJ1xuXG4gIEFmZml4LkRFRkFVTFRTID0ge1xuICAgIG9mZnNldDogMCxcbiAgICB0YXJnZXQ6IHdpbmRvd1xuICB9XG5cbiAgQWZmaXgucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24gKHNjcm9sbEhlaWdodCwgaGVpZ2h0LCBvZmZzZXRUb3AsIG9mZnNldEJvdHRvbSkge1xuICAgIHZhciBzY3JvbGxUb3AgICAgPSB0aGlzLiR0YXJnZXQuc2Nyb2xsVG9wKClcbiAgICB2YXIgcG9zaXRpb24gICAgID0gdGhpcy4kZWxlbWVudC5vZmZzZXQoKVxuICAgIHZhciB0YXJnZXRIZWlnaHQgPSB0aGlzLiR0YXJnZXQuaGVpZ2h0KClcblxuICAgIGlmIChvZmZzZXRUb3AgIT0gbnVsbCAmJiB0aGlzLmFmZml4ZWQgPT0gJ3RvcCcpIHJldHVybiBzY3JvbGxUb3AgPCBvZmZzZXRUb3AgPyAndG9wJyA6IGZhbHNlXG5cbiAgICBpZiAodGhpcy5hZmZpeGVkID09ICdib3R0b20nKSB7XG4gICAgICBpZiAob2Zmc2V0VG9wICE9IG51bGwpIHJldHVybiAoc2Nyb2xsVG9wICsgdGhpcy51bnBpbiA8PSBwb3NpdGlvbi50b3ApID8gZmFsc2UgOiAnYm90dG9tJ1xuICAgICAgcmV0dXJuIChzY3JvbGxUb3AgKyB0YXJnZXRIZWlnaHQgPD0gc2Nyb2xsSGVpZ2h0IC0gb2Zmc2V0Qm90dG9tKSA/IGZhbHNlIDogJ2JvdHRvbSdcbiAgICB9XG5cbiAgICB2YXIgaW5pdGlhbGl6aW5nICAgPSB0aGlzLmFmZml4ZWQgPT0gbnVsbFxuICAgIHZhciBjb2xsaWRlclRvcCAgICA9IGluaXRpYWxpemluZyA/IHNjcm9sbFRvcCA6IHBvc2l0aW9uLnRvcFxuICAgIHZhciBjb2xsaWRlckhlaWdodCA9IGluaXRpYWxpemluZyA/IHRhcmdldEhlaWdodCA6IGhlaWdodFxuXG4gICAgaWYgKG9mZnNldFRvcCAhPSBudWxsICYmIHNjcm9sbFRvcCA8PSBvZmZzZXRUb3ApIHJldHVybiAndG9wJ1xuICAgIGlmIChvZmZzZXRCb3R0b20gIT0gbnVsbCAmJiAoY29sbGlkZXJUb3AgKyBjb2xsaWRlckhlaWdodCA+PSBzY3JvbGxIZWlnaHQgLSBvZmZzZXRCb3R0b20pKSByZXR1cm4gJ2JvdHRvbSdcblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgQWZmaXgucHJvdG90eXBlLmdldFBpbm5lZE9mZnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5waW5uZWRPZmZzZXQpIHJldHVybiB0aGlzLnBpbm5lZE9mZnNldFxuICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoQWZmaXguUkVTRVQpLmFkZENsYXNzKCdhZmZpeCcpXG4gICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuJHRhcmdldC5zY3JvbGxUb3AoKVxuICAgIHZhciBwb3NpdGlvbiAgPSB0aGlzLiRlbGVtZW50Lm9mZnNldCgpXG4gICAgcmV0dXJuICh0aGlzLnBpbm5lZE9mZnNldCA9IHBvc2l0aW9uLnRvcCAtIHNjcm9sbFRvcClcbiAgfVxuXG4gIEFmZml4LnByb3RvdHlwZS5jaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRUaW1lb3V0KCQucHJveHkodGhpcy5jaGVja1Bvc2l0aW9uLCB0aGlzKSwgMSlcbiAgfVxuXG4gIEFmZml4LnByb3RvdHlwZS5jaGVja1Bvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy4kZWxlbWVudC5pcygnOnZpc2libGUnKSkgcmV0dXJuXG5cbiAgICB2YXIgaGVpZ2h0ICAgICAgID0gdGhpcy4kZWxlbWVudC5oZWlnaHQoKVxuICAgIHZhciBvZmZzZXQgICAgICAgPSB0aGlzLm9wdGlvbnMub2Zmc2V0XG4gICAgdmFyIG9mZnNldFRvcCAgICA9IG9mZnNldC50b3BcbiAgICB2YXIgb2Zmc2V0Qm90dG9tID0gb2Zmc2V0LmJvdHRvbVxuICAgIHZhciBzY3JvbGxIZWlnaHQgPSBNYXRoLm1heCgkKGRvY3VtZW50KS5oZWlnaHQoKSwgJChkb2N1bWVudC5ib2R5KS5oZWlnaHQoKSlcblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ICE9ICdvYmplY3QnKSAgICAgICAgIG9mZnNldEJvdHRvbSA9IG9mZnNldFRvcCA9IG9mZnNldFxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0VG9wID09ICdmdW5jdGlvbicpICAgIG9mZnNldFRvcCAgICA9IG9mZnNldC50b3AodGhpcy4kZWxlbWVudClcbiAgICBpZiAodHlwZW9mIG9mZnNldEJvdHRvbSA9PSAnZnVuY3Rpb24nKSBvZmZzZXRCb3R0b20gPSBvZmZzZXQuYm90dG9tKHRoaXMuJGVsZW1lbnQpXG5cbiAgICB2YXIgYWZmaXggPSB0aGlzLmdldFN0YXRlKHNjcm9sbEhlaWdodCwgaGVpZ2h0LCBvZmZzZXRUb3AsIG9mZnNldEJvdHRvbSlcblxuICAgIGlmICh0aGlzLmFmZml4ZWQgIT0gYWZmaXgpIHtcbiAgICAgIGlmICh0aGlzLnVucGluICE9IG51bGwpIHRoaXMuJGVsZW1lbnQuY3NzKCd0b3AnLCAnJylcblxuICAgICAgdmFyIGFmZml4VHlwZSA9ICdhZmZpeCcgKyAoYWZmaXggPyAnLScgKyBhZmZpeCA6ICcnKVxuICAgICAgdmFyIGUgICAgICAgICA9ICQuRXZlbnQoYWZmaXhUeXBlICsgJy5icy5hZmZpeCcpXG5cbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihlKVxuXG4gICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICAgIHRoaXMuYWZmaXhlZCA9IGFmZml4XG4gICAgICB0aGlzLnVucGluID0gYWZmaXggPT0gJ2JvdHRvbScgPyB0aGlzLmdldFBpbm5lZE9mZnNldCgpIDogbnVsbFxuXG4gICAgICB0aGlzLiRlbGVtZW50XG4gICAgICAgIC5yZW1vdmVDbGFzcyhBZmZpeC5SRVNFVClcbiAgICAgICAgLmFkZENsYXNzKGFmZml4VHlwZSlcbiAgICAgICAgLnRyaWdnZXIoYWZmaXhUeXBlLnJlcGxhY2UoJ2FmZml4JywgJ2FmZml4ZWQnKSArICcuYnMuYWZmaXgnKVxuICAgIH1cblxuICAgIGlmIChhZmZpeCA9PSAnYm90dG9tJykge1xuICAgICAgdGhpcy4kZWxlbWVudC5vZmZzZXQoe1xuICAgICAgICB0b3A6IHNjcm9sbEhlaWdodCAtIGhlaWdodCAtIG9mZnNldEJvdHRvbVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuXG4gIC8vIEFGRklYIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gUGx1Z2luKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLmFmZml4JylcbiAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb25cblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy5hZmZpeCcsIChkYXRhID0gbmV3IEFmZml4KHRoaXMsIG9wdGlvbnMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0oKVxuICAgIH0pXG4gIH1cblxuICB2YXIgb2xkID0gJC5mbi5hZmZpeFxuXG4gICQuZm4uYWZmaXggICAgICAgICAgICAgPSBQbHVnaW5cbiAgJC5mbi5hZmZpeC5Db25zdHJ1Y3RvciA9IEFmZml4XG5cblxuICAvLyBBRkZJWCBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PVxuXG4gICQuZm4uYWZmaXgubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLmFmZml4ID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gQUZGSVggREFUQS1BUElcbiAgLy8gPT09PT09PT09PT09PT1cblxuICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnW2RhdGEtc3B5PVwiYWZmaXhcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkc3B5ID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgPSAkc3B5LmRhdGEoKVxuXG4gICAgICBkYXRhLm9mZnNldCA9IGRhdGEub2Zmc2V0IHx8IHt9XG5cbiAgICAgIGlmIChkYXRhLm9mZnNldEJvdHRvbSAhPSBudWxsKSBkYXRhLm9mZnNldC5ib3R0b20gPSBkYXRhLm9mZnNldEJvdHRvbVxuICAgICAgaWYgKGRhdGEub2Zmc2V0VG9wICAgICE9IG51bGwpIGRhdGEub2Zmc2V0LnRvcCAgICA9IGRhdGEub2Zmc2V0VG9wXG5cbiAgICAgIFBsdWdpbi5jYWxsKCRzcHksIGRhdGEpXG4gICAgfSlcbiAgfSlcblxufShqUXVlcnkpO1xuIiwiLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB8IEZsZXh5IGhlYWRlclxuLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB8XG4vLyB8IFRoaXMgalF1ZXJ5IHNjcmlwdCBpcyB3cml0dGVuIGJ5XG4vLyB8XG4vLyB8IE1vcnRlbiBOaXNzZW5cbi8vIHwgaGplbW1lc2lkZWtvbmdlbi5ka1xuLy8gfFxuXG52YXIgZmxleHlfaGVhZGVyID0gKGZ1bmN0aW9uICgkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIHB1YiA9IHt9LFxuICAgICAgICAkaGVhZGVyX3N0YXRpYyA9ICQoJy5mbGV4eS1oZWFkZXItLXN0YXRpYycpLFxuICAgICAgICAkaGVhZGVyX3N0aWNreSA9ICQoJy5mbGV4eS1oZWFkZXItLXN0aWNreScpLFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgdXBkYXRlX2ludGVydmFsOiAxMDAsXG4gICAgICAgICAgICB0b2xlcmFuY2U6IHtcbiAgICAgICAgICAgICAgICB1cHdhcmQ6IDIwLFxuICAgICAgICAgICAgICAgIGRvd253YXJkOiAxMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9mZnNldDogX2dldF9vZmZzZXRfZnJvbV9lbGVtZW50c19ib3R0b20oJGhlYWRlcl9zdGF0aWMpLFxuICAgICAgICAgICAgY2xhc3Nlczoge1xuICAgICAgICAgICAgICAgIHBpbm5lZDogXCJmbGV4eS1oZWFkZXItLXBpbm5lZFwiLFxuICAgICAgICAgICAgICAgIHVucGlubmVkOiBcImZsZXh5LWhlYWRlci0tdW5waW5uZWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXNfc2Nyb2xsZWQgPSBmYWxzZSxcbiAgICAgICAgbGFzdF9kaXN0YW5jZV9mcm9tX3RvcCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBJbnN0YW50aWF0ZVxuICAgICAqL1xuICAgIHB1Yi5pbml0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmVnaXN0ZXJFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIHJlZ2lzdGVyQm9vdEV2ZW50SGFuZGxlcnMoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYm9vdCBldmVudCBoYW5kbGVyc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyQm9vdEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgICRoZWFkZXJfc3RpY2t5LmFkZENsYXNzKG9wdGlvbnMuY2xhc3Nlcy51bnBpbm5lZCk7XG5cbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGlmICh3YXNfc2Nyb2xsZWQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudF93YXNfc2Nyb2xsZWQoKTtcblxuICAgICAgICAgICAgICAgIHdhc19zY3JvbGxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBvcHRpb25zLnVwZGF0ZV9pbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZWdpc3RlckV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHdhc19zY3JvbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBvZmZzZXQgZnJvbSBlbGVtZW50IGJvdHRvbVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9nZXRfb2Zmc2V0X2Zyb21fZWxlbWVudHNfYm90dG9tKCRlbGVtZW50KSB7XG4gICAgICAgIHZhciBlbGVtZW50X2hlaWdodCA9ICRlbGVtZW50Lm91dGVySGVpZ2h0KHRydWUpLFxuICAgICAgICAgICAgZWxlbWVudF9vZmZzZXQgPSAkZWxlbWVudC5vZmZzZXQoKS50b3A7XG5cbiAgICAgICAgcmV0dXJuIChlbGVtZW50X2hlaWdodCArIGVsZW1lbnRfb2Zmc2V0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEb2N1bWVudCB3YXMgc2Nyb2xsZWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkb2N1bWVudF93YXNfc2Nyb2xsZWQoKSB7XG4gICAgICAgIHZhciBjdXJyZW50X2Rpc3RhbmNlX2Zyb21fdG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgIC8vIElmIHBhc3Qgb2Zmc2V0XG4gICAgICAgIGlmIChjdXJyZW50X2Rpc3RhbmNlX2Zyb21fdG9wID49IG9wdGlvbnMub2Zmc2V0KSB7XG5cbiAgICAgICAgICAgIC8vIERvd253YXJkcyBzY3JvbGxcbiAgICAgICAgICAgIGlmIChjdXJyZW50X2Rpc3RhbmNlX2Zyb21fdG9wID4gbGFzdF9kaXN0YW5jZV9mcm9tX3RvcCkge1xuXG4gICAgICAgICAgICAgICAgLy8gT2JleSB0aGUgZG93bndhcmQgdG9sZXJhbmNlXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGN1cnJlbnRfZGlzdGFuY2VfZnJvbV90b3AgLSBsYXN0X2Rpc3RhbmNlX2Zyb21fdG9wKSA8PSBvcHRpb25zLnRvbGVyYW5jZS5kb3dud2FyZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJGhlYWRlcl9zdGlja3kucmVtb3ZlQ2xhc3Mob3B0aW9ucy5jbGFzc2VzLnBpbm5lZCkuYWRkQ2xhc3Mob3B0aW9ucy5jbGFzc2VzLnVucGlubmVkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXB3YXJkcyBzY3JvbGxcbiAgICAgICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgLy8gT2JleSB0aGUgdXB3YXJkIHRvbGVyYW5jZVxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhjdXJyZW50X2Rpc3RhbmNlX2Zyb21fdG9wIC0gbGFzdF9kaXN0YW5jZV9mcm9tX3RvcCkgPD0gb3B0aW9ucy50b2xlcmFuY2UudXB3YXJkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBXZSBhcmUgbm90IHNjcm9sbGVkIHBhc3QgdGhlIGRvY3VtZW50IHdoaWNoIGlzIHBvc3NpYmxlIG9uIHRoZSBNYWNcbiAgICAgICAgICAgICAgICBpZiAoKGN1cnJlbnRfZGlzdGFuY2VfZnJvbV90b3AgKyAkKHdpbmRvdykuaGVpZ2h0KCkpIDwgJChkb2N1bWVudCkuaGVpZ2h0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgJGhlYWRlcl9zdGlja3kucmVtb3ZlQ2xhc3Mob3B0aW9ucy5jbGFzc2VzLnVucGlubmVkKS5hZGRDbGFzcyhvcHRpb25zLmNsYXNzZXMucGlubmVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOb3QgcGFzdCBvZmZzZXRcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAkaGVhZGVyX3N0aWNreS5yZW1vdmVDbGFzcyhvcHRpb25zLmNsYXNzZXMucGlubmVkKS5hZGRDbGFzcyhvcHRpb25zLmNsYXNzZXMudW5waW5uZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFzdF9kaXN0YW5jZV9mcm9tX3RvcCA9IGN1cnJlbnRfZGlzdGFuY2VfZnJvbV90b3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHB1Yjtcbn0pKGpRdWVyeSk7XG4iLCIvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHwgRmxleHkgbmF2aWdhdGlvblxuLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB8XG4vLyB8IFRoaXMgalF1ZXJ5IHNjcmlwdCBpcyB3cml0dGVuIGJ5XG4vLyB8XG4vLyB8IE1vcnRlbiBOaXNzZW5cbi8vIHwgaGplbW1lc2lkZWtvbmdlbi5ka1xuLy8gfFxuXG52YXIgZmxleHlfbmF2aWdhdGlvbiA9IChmdW5jdGlvbiAoJCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBwdWIgPSB7fSxcbiAgICAgICAgbGF5b3V0X2NsYXNzZXMgPSB7XG4gICAgICAgICAgICAnbmF2aWdhdGlvbic6ICcuZmxleHktbmF2aWdhdGlvbicsXG4gICAgICAgICAgICAnb2JmdXNjYXRvcic6ICcuZmxleHktbmF2aWdhdGlvbl9fb2JmdXNjYXRvcicsXG4gICAgICAgICAgICAnZHJvcGRvd24nOiAnLmZsZXh5LW5hdmlnYXRpb25fX2l0ZW0tLWRyb3Bkb3duJyxcbiAgICAgICAgICAgICdkcm9wZG93bl9tZWdhbWVudSc6ICcuZmxleHktbmF2aWdhdGlvbl9faXRlbV9fZHJvcGRvd24tbWVnYW1lbnUnLFxuXG4gICAgICAgICAgICAnaXNfdXBncmFkZWQnOiAnaXMtdXBncmFkZWQnLFxuICAgICAgICAgICAgJ25hdmlnYXRpb25faGFzX21lZ2FtZW51JzogJ2hhcy1tZWdhbWVudScsXG4gICAgICAgICAgICAnZHJvcGRvd25faGFzX21lZ2FtZW51JzogJ2ZsZXh5LW5hdmlnYXRpb25fX2l0ZW0tLWRyb3Bkb3duLXdpdGgtbWVnYW1lbnUnLFxuICAgICAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5zdGFudGlhdGVcbiAgICAgKi9cbiAgICBwdWIuaW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJlZ2lzdGVyRXZlbnRIYW5kbGVycygpO1xuICAgICAgICByZWdpc3RlckJvb3RFdmVudEhhbmRsZXJzKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGJvb3QgZXZlbnQgaGFuZGxlcnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZWdpc3RlckJvb3RFdmVudEhhbmRsZXJzKCkge1xuXG4gICAgICAgIC8vIFVwZ3JhZGVcbiAgICAgICAgdXBncmFkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJFdmVudEhhbmRsZXJzKCkge31cblxuICAgIC8qKlxuICAgICAqIFVwZ3JhZGUgZWxlbWVudHMuXG4gICAgICogQWRkIGNsYXNzZXMgdG8gZWxlbWVudHMsIGJhc2VkIHVwb24gYXR0YWNoZWQgY2xhc3Nlcy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1cGdyYWRlKCkge1xuICAgICAgICB2YXIgJG5hdmlnYXRpb25zID0gJChsYXlvdXRfY2xhc3Nlcy5uYXZpZ2F0aW9uKTtcblxuICAgICAgICAvLyBOYXZpZ2F0aW9uc1xuICAgICAgICBpZiAoJG5hdmlnYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICRuYXZpZ2F0aW9ucy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyICRuYXZpZ2F0aW9uID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgJG1lZ2FtZW51cyA9ICRuYXZpZ2F0aW9uLmZpbmQobGF5b3V0X2NsYXNzZXMuZHJvcGRvd25fbWVnYW1lbnUpLFxuICAgICAgICAgICAgICAgICAgICAkZHJvcGRvd25fbWVnYW1lbnUgPSAkbmF2aWdhdGlvbi5maW5kKGxheW91dF9jbGFzc2VzLmRyb3Bkb3duX2hhc19tZWdhbWVudSk7XG5cbiAgICAgICAgICAgICAgICAvLyBIYXMgYWxyZWFkeSBiZWVuIHVwZ3JhZGVkXG4gICAgICAgICAgICAgICAgaWYgKCRuYXZpZ2F0aW9uLmhhc0NsYXNzKGxheW91dF9jbGFzc2VzLmlzX3VwZ3JhZGVkKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSGFzIG1lZ2FtZW51XG4gICAgICAgICAgICAgICAgaWYgKCRtZWdhbWVudXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAkbmF2aWdhdGlvbi5hZGRDbGFzcyhsYXlvdXRfY2xhc3Nlcy5uYXZpZ2F0aW9uX2hhc19tZWdhbWVudSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUnVuIHRocm91Z2ggYWxsIG1lZ2FtZW51c1xuICAgICAgICAgICAgICAgICAgICAkbWVnYW1lbnVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkbWVnYW1lbnUgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc19vYmZ1c2NhdG9yID0gJCgnaHRtbCcpLmhhc0NsYXNzKCdoYXMtb2JmdXNjYXRvcicpID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkbWVnYW1lbnUucGFyZW50cyhsYXlvdXRfY2xhc3Nlcy5kcm9wZG93bilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MobGF5b3V0X2NsYXNzZXMuZHJvcGRvd25faGFzX21lZ2FtZW51KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ob3ZlcihmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzX29iZnVzY2F0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iZnVzY2F0b3Iuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzX29iZnVzY2F0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iZnVzY2F0b3IuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElzIHVwZ3JhZGVkXG4gICAgICAgICAgICAgICAgJG5hdmlnYXRpb24uYWRkQ2xhc3MobGF5b3V0X2NsYXNzZXMuaXNfdXBncmFkZWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHViO1xufSkoalF1ZXJ5KTtcbiIsIi8qISBzaWRyIC0gdjIuMi4xIC0gMjAxNi0wMi0xN1xuICogaHR0cDovL3d3dy5iZXJyaWFydC5jb20vc2lkci9cbiAqIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IEFsYmVydG8gVmFyZWxhOyBMaWNlbnNlZCBNSVQgKi9cblxuKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBiYWJlbEhlbHBlcnMgPSB7fTtcblxuICBiYWJlbEhlbHBlcnMuY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9O1xuXG4gIGJhYmVsSGVscGVycy5jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgIH07XG4gIH0oKTtcblxuICBiYWJlbEhlbHBlcnM7XG5cbiAgdmFyIHNpZHJTdGF0dXMgPSB7XG4gICAgbW92aW5nOiBmYWxzZSxcbiAgICBvcGVuZWQ6IGZhbHNlXG4gIH07XG5cbiAgdmFyIGhlbHBlciA9IHtcbiAgICAvLyBDaGVjayBmb3IgdmFsaWRzIHVybHNcbiAgICAvLyBGcm9tIDogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NzE3MDkzL2NoZWNrLWlmLWEtamF2YXNjcmlwdC1zdHJpbmctaXMtYW4tdXJsXG5cbiAgICBpc1VybDogZnVuY3Rpb24gaXNVcmwoc3RyKSB7XG4gICAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoJ14oaHR0cHM/OlxcXFwvXFxcXC8pPycgKyAvLyBwcm90b2NvbFxuICAgICAgJygoKFthLXpcXFxcZF0oW2EtelxcXFxkLV0qW2EtelxcXFxkXSkqKVxcXFwuPykrW2Etel17Mix9fCcgKyAvLyBkb21haW4gbmFtZVxuICAgICAgJygoXFxcXGR7MSwzfVxcXFwuKXszfVxcXFxkezEsM30pKScgKyAvLyBPUiBpcCAodjQpIGFkZHJlc3NcbiAgICAgICcoXFxcXDpcXFxcZCspPyhcXFxcL1stYS16XFxcXGQlXy5+K10qKSonICsgLy8gcG9ydCBhbmQgcGF0aFxuICAgICAgJyhcXFxcP1s7JmEtelxcXFxkJV8ufis9LV0qKT8nICsgLy8gcXVlcnkgc3RyaW5nXG4gICAgICAnKFxcXFwjWy1hLXpcXFxcZF9dKik/JCcsICdpJyk7IC8vIGZyYWdtZW50IGxvY2F0b3JcblxuICAgICAgaWYgKHBhdHRlcm4udGVzdChzdHIpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8vIEFkZCBzaWRyIHByZWZpeGVzXG4gICAgYWRkUHJlZml4ZXM6IGZ1bmN0aW9uIGFkZFByZWZpeGVzKCRlbGVtZW50KSB7XG4gICAgICB0aGlzLmFkZFByZWZpeCgkZWxlbWVudCwgJ2lkJyk7XG4gICAgICB0aGlzLmFkZFByZWZpeCgkZWxlbWVudCwgJ2NsYXNzJyk7XG4gICAgICAkZWxlbWVudC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgIH0sXG4gICAgYWRkUHJlZml4OiBmdW5jdGlvbiBhZGRQcmVmaXgoJGVsZW1lbnQsIGF0dHJpYnV0ZSkge1xuICAgICAgdmFyIHRvUmVwbGFjZSA9ICRlbGVtZW50LmF0dHIoYXR0cmlidXRlKTtcblxuICAgICAgaWYgKHR5cGVvZiB0b1JlcGxhY2UgPT09ICdzdHJpbmcnICYmIHRvUmVwbGFjZSAhPT0gJycgJiYgdG9SZXBsYWNlICE9PSAnc2lkci1pbm5lcicpIHtcbiAgICAgICAgJGVsZW1lbnQuYXR0cihhdHRyaWJ1dGUsIHRvUmVwbGFjZS5yZXBsYWNlKC8oW0EtWmEtejAtOV8uXFwtXSspL2csICdzaWRyLScgKyBhdHRyaWJ1dGUgKyAnLSQxJykpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8vIENoZWNrIGlmIHRyYW5zaXRpb25zIGlzIHN1cHBvcnRlZFxuICAgIHRyYW5zaXRpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICAgIHN0eWxlID0gYm9keS5zdHlsZSxcbiAgICAgICAgICBzdXBwb3J0ZWQgPSBmYWxzZSxcbiAgICAgICAgICBwcm9wZXJ0eSA9ICd0cmFuc2l0aW9uJztcblxuICAgICAgaWYgKHByb3BlcnR5IGluIHN0eWxlKSB7XG4gICAgICAgIHN1cHBvcnRlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBwcmVmaXhlcyA9IFsnbW96JywgJ3dlYmtpdCcsICdvJywgJ21zJ10sXG4gICAgICAgICAgICAgIHByZWZpeCA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgaSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eS5zdWJzdHIoMSk7XG4gICAgICAgICAgc3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgICAgICAgICAgICBpZiAocHJlZml4ICsgcHJvcGVydHkgaW4gc3R5bGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSgpO1xuICAgICAgICAgIHByb3BlcnR5ID0gc3VwcG9ydGVkID8gJy0nICsgcHJlZml4LnRvTG93ZXJDYXNlKCkgKyAnLScgKyBwcm9wZXJ0eS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbiAgICAgICAgfSkoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VwcG9ydGVkOiBzdXBwb3J0ZWQsXG4gICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eVxuICAgICAgfTtcbiAgICB9KClcbiAgfTtcblxuICB2YXIgJCQyID0galF1ZXJ5O1xuXG4gIHZhciBib2R5QW5pbWF0aW9uQ2xhc3MgPSAnc2lkci1hbmltYXRpbmcnO1xuICB2YXIgb3BlbkFjdGlvbiA9ICdvcGVuJztcbiAgdmFyIGNsb3NlQWN0aW9uID0gJ2Nsb3NlJztcbiAgdmFyIHRyYW5zaXRpb25FbmRFdmVudCA9ICd3ZWJraXRUcmFuc2l0aW9uRW5kIG90cmFuc2l0aW9uZW5kIG9UcmFuc2l0aW9uRW5kIG1zVHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kJztcbiAgdmFyIE1lbnUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWVudShuYW1lKSB7XG4gICAgICBiYWJlbEhlbHBlcnMuY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVudSk7XG5cbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICB0aGlzLml0ZW0gPSAkJDIoJyMnICsgbmFtZSk7XG4gICAgICB0aGlzLm9wZW5DbGFzcyA9IG5hbWUgPT09ICdzaWRyJyA/ICdzaWRyLW9wZW4nIDogJ3NpZHItb3BlbiAnICsgbmFtZSArICctb3Blbic7XG4gICAgICB0aGlzLm1lbnVXaWR0aCA9IHRoaXMuaXRlbS5vdXRlcldpZHRoKHRydWUpO1xuICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuaXRlbS5kYXRhKCdzcGVlZCcpO1xuICAgICAgdGhpcy5zaWRlID0gdGhpcy5pdGVtLmRhdGEoJ3NpZGUnKTtcbiAgICAgIHRoaXMuZGlzcGxhY2UgPSB0aGlzLml0ZW0uZGF0YSgnZGlzcGxhY2UnKTtcbiAgICAgIHRoaXMudGltaW5nID0gdGhpcy5pdGVtLmRhdGEoJ3RpbWluZycpO1xuICAgICAgdGhpcy5tZXRob2QgPSB0aGlzLml0ZW0uZGF0YSgnbWV0aG9kJyk7XG4gICAgICB0aGlzLm9uT3BlbkNhbGxiYWNrID0gdGhpcy5pdGVtLmRhdGEoJ29uT3BlbicpO1xuICAgICAgdGhpcy5vbkNsb3NlQ2FsbGJhY2sgPSB0aGlzLml0ZW0uZGF0YSgnb25DbG9zZScpO1xuICAgICAgdGhpcy5vbk9wZW5FbmRDYWxsYmFjayA9IHRoaXMuaXRlbS5kYXRhKCdvbk9wZW5FbmQnKTtcbiAgICAgIHRoaXMub25DbG9zZUVuZENhbGxiYWNrID0gdGhpcy5pdGVtLmRhdGEoJ29uQ2xvc2VFbmQnKTtcbiAgICAgIHRoaXMuYm9keSA9ICQkMih0aGlzLml0ZW0uZGF0YSgnYm9keScpKTtcbiAgICB9XG5cbiAgICBiYWJlbEhlbHBlcnMuY3JlYXRlQ2xhc3MoTWVudSwgW3tcbiAgICAgIGtleTogJ2dldEFuaW1hdGlvbicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QW5pbWF0aW9uKGFjdGlvbiwgZWxlbWVudCkge1xuICAgICAgICB2YXIgYW5pbWF0aW9uID0ge30sXG4gICAgICAgICAgICBwcm9wID0gdGhpcy5zaWRlO1xuXG4gICAgICAgIGlmIChhY3Rpb24gPT09ICdvcGVuJyAmJiBlbGVtZW50ID09PSAnYm9keScpIHtcbiAgICAgICAgICBhbmltYXRpb25bcHJvcF0gPSB0aGlzLm1lbnVXaWR0aCArICdweCc7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnY2xvc2UnICYmIGVsZW1lbnQgPT09ICdtZW51Jykge1xuICAgICAgICAgIGFuaW1hdGlvbltwcm9wXSA9ICctJyArIHRoaXMubWVudVdpZHRoICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbmltYXRpb25bcHJvcF0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdwcmVwYXJlQm9keScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJlcGFyZUJvZHkoYWN0aW9uKSB7XG4gICAgICAgIHZhciBwcm9wID0gYWN0aW9uID09PSAnb3BlbicgPyAnaGlkZGVuJyA6ICcnO1xuXG4gICAgICAgIC8vIFByZXBhcmUgcGFnZSBpZiBjb250YWluZXIgaXMgYm9keVxuICAgICAgICBpZiAodGhpcy5ib2R5LmlzKCdib2R5JykpIHtcbiAgICAgICAgICB2YXIgJGh0bWwgPSAkJDIoJ2h0bWwnKSxcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wID0gJGh0bWwuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAkaHRtbC5jc3MoJ292ZXJmbG93LXgnLCBwcm9wKS5zY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ29wZW5Cb2R5JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuQm9keSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzcGxhY2UpIHtcbiAgICAgICAgICB2YXIgdHJhbnNpdGlvbnMgPSBoZWxwZXIudHJhbnNpdGlvbnMsXG4gICAgICAgICAgICAgICRib2R5ID0gdGhpcy5ib2R5O1xuXG4gICAgICAgICAgaWYgKHRyYW5zaXRpb25zLnN1cHBvcnRlZCkge1xuICAgICAgICAgICAgJGJvZHkuY3NzKHRyYW5zaXRpb25zLnByb3BlcnR5LCB0aGlzLnNpZGUgKyAnICcgKyB0aGlzLnNwZWVkIC8gMTAwMCArICdzICcgKyB0aGlzLnRpbWluZykuY3NzKHRoaXMuc2lkZSwgMCkuY3NzKHtcbiAgICAgICAgICAgICAgd2lkdGg6ICRib2R5LndpZHRoKCksXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICRib2R5LmNzcyh0aGlzLnNpZGUsIHRoaXMubWVudVdpZHRoICsgJ3B4Jyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBib2R5QW5pbWF0aW9uID0gdGhpcy5nZXRBbmltYXRpb24ob3BlbkFjdGlvbiwgJ2JvZHknKTtcblxuICAgICAgICAgICAgJGJvZHkuY3NzKHtcbiAgICAgICAgICAgICAgd2lkdGg6ICRib2R5LndpZHRoKCksXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgICAgICAgICB9KS5hbmltYXRlKGJvZHlBbmltYXRpb24sIHtcbiAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5zcGVlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnb25DbG9zZUJvZHknLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xvc2VCb2R5KCkge1xuICAgICAgICB2YXIgdHJhbnNpdGlvbnMgPSBoZWxwZXIudHJhbnNpdGlvbnMsXG4gICAgICAgICAgICByZXNldFN0eWxlcyA9IHtcbiAgICAgICAgICB3aWR0aDogJycsXG4gICAgICAgICAgcG9zaXRpb246ICcnLFxuICAgICAgICAgIHJpZ2h0OiAnJyxcbiAgICAgICAgICBsZWZ0OiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0cmFuc2l0aW9ucy5zdXBwb3J0ZWQpIHtcbiAgICAgICAgICByZXNldFN0eWxlc1t0cmFuc2l0aW9ucy5wcm9wZXJ0eV0gPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYm9keS5jc3MocmVzZXRTdHlsZXMpLnVuYmluZCh0cmFuc2l0aW9uRW5kRXZlbnQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2Nsb3NlQm9keScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VCb2R5KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLmRpc3BsYWNlKSB7XG4gICAgICAgICAgaWYgKGhlbHBlci50cmFuc2l0aW9ucy5zdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keS5jc3ModGhpcy5zaWRlLCAwKS5vbmUodHJhbnNpdGlvbkVuZEV2ZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIF90aGlzLm9uQ2xvc2VCb2R5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGJvZHlBbmltYXRpb24gPSB0aGlzLmdldEFuaW1hdGlvbihjbG9zZUFjdGlvbiwgJ2JvZHknKTtcblxuICAgICAgICAgICAgdGhpcy5ib2R5LmFuaW1hdGUoYm9keUFuaW1hdGlvbiwge1xuICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLnNwZWVkLFxuICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub25DbG9zZUJvZHkoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnbW92ZUJvZHknLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG1vdmVCb2R5KGFjdGlvbikge1xuICAgICAgICBpZiAoYWN0aW9uID09PSBvcGVuQWN0aW9uKSB7XG4gICAgICAgICAgdGhpcy5vcGVuQm9keSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xvc2VCb2R5KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdvbk9wZW5NZW51JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbk9wZW5NZW51KGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5uYW1lO1xuXG4gICAgICAgIHNpZHJTdGF0dXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgIHNpZHJTdGF0dXMub3BlbmVkID0gbmFtZTtcblxuICAgICAgICB0aGlzLml0ZW0udW5iaW5kKHRyYW5zaXRpb25FbmRFdmVudCk7XG5cbiAgICAgICAgdGhpcy5ib2R5LnJlbW92ZUNsYXNzKGJvZHlBbmltYXRpb25DbGFzcykuYWRkQ2xhc3ModGhpcy5vcGVuQ2xhc3MpO1xuXG4gICAgICAgIHRoaXMub25PcGVuRW5kQ2FsbGJhY2soKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2FsbGJhY2sobmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdvcGVuTWVudScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb3Blbk1lbnUoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyICRpdGVtID0gdGhpcy5pdGVtO1xuXG4gICAgICAgIGlmIChoZWxwZXIudHJhbnNpdGlvbnMuc3VwcG9ydGVkKSB7XG4gICAgICAgICAgJGl0ZW0uY3NzKHRoaXMuc2lkZSwgMCkub25lKHRyYW5zaXRpb25FbmRFdmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMyLm9uT3Blbk1lbnUoY2FsbGJhY2spO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBtZW51QW5pbWF0aW9uID0gdGhpcy5nZXRBbmltYXRpb24ob3BlbkFjdGlvbiwgJ21lbnUnKTtcblxuICAgICAgICAgICRpdGVtLmNzcygnZGlzcGxheScsICdibG9jaycpLmFuaW1hdGUobWVudUFuaW1hdGlvbiwge1xuICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuc3BlZWQsXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgICAgICAgIF90aGlzMi5vbk9wZW5NZW51KGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ29uQ2xvc2VNZW51JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsb3NlTWVudShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLml0ZW0uY3NzKHtcbiAgICAgICAgICBsZWZ0OiAnJyxcbiAgICAgICAgICByaWdodDogJydcbiAgICAgICAgfSkudW5iaW5kKHRyYW5zaXRpb25FbmRFdmVudCk7XG4gICAgICAgICQkMignaHRtbCcpLmNzcygnb3ZlcmZsb3cteCcsICcnKTtcblxuICAgICAgICBzaWRyU3RhdHVzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICBzaWRyU3RhdHVzLm9wZW5lZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYm9keS5yZW1vdmVDbGFzcyhib2R5QW5pbWF0aW9uQ2xhc3MpLnJlbW92ZUNsYXNzKHRoaXMub3BlbkNsYXNzKTtcblxuICAgICAgICB0aGlzLm9uQ2xvc2VFbmRDYWxsYmFjaygpO1xuXG4gICAgICAgIC8vIENhbGxiYWNrXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjYWxsYmFjayhuYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2Nsb3NlTWVudScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VNZW51KGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5pdGVtO1xuXG4gICAgICAgIGlmIChoZWxwZXIudHJhbnNpdGlvbnMuc3VwcG9ydGVkKSB7XG4gICAgICAgICAgaXRlbS5jc3ModGhpcy5zaWRlLCAnJykub25lKHRyYW5zaXRpb25FbmRFdmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMzLm9uQ2xvc2VNZW51KGNhbGxiYWNrKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbWVudUFuaW1hdGlvbiA9IHRoaXMuZ2V0QW5pbWF0aW9uKGNsb3NlQWN0aW9uLCAnbWVudScpO1xuXG4gICAgICAgICAgaXRlbS5hbmltYXRlKG1lbnVBbmltYXRpb24sIHtcbiAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLnNwZWVkLFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICAgICAgICBfdGhpczMub25DbG9zZU1lbnUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ21vdmVNZW51JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBtb3ZlTWVudShhY3Rpb24sIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuYm9keS5hZGRDbGFzcyhib2R5QW5pbWF0aW9uQ2xhc3MpO1xuXG4gICAgICAgIGlmIChhY3Rpb24gPT09IG9wZW5BY3Rpb24pIHtcbiAgICAgICAgICB0aGlzLm9wZW5NZW51KGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNsb3NlTWVudShjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdtb3ZlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBtb3ZlKGFjdGlvbiwgY2FsbGJhY2spIHtcbiAgICAgICAgLy8gTG9jayBzaWRyXG4gICAgICAgIHNpZHJTdGF0dXMubW92aW5nID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnByZXBhcmVCb2R5KGFjdGlvbik7XG4gICAgICAgIHRoaXMubW92ZUJvZHkoYWN0aW9uKTtcbiAgICAgICAgdGhpcy5tb3ZlTWVudShhY3Rpb24sIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdvcGVuJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGlzIGFscmVhZHkgb3BlbmVkIG9yIG1vdmluZ1xuICAgICAgICBpZiAoc2lkclN0YXR1cy5vcGVuZWQgPT09IHRoaXMubmFtZSB8fCBzaWRyU3RhdHVzLm1vdmluZykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGFub3RoZXIgbWVudSBvcGVuZWQgY2xvc2UgZmlyc3RcbiAgICAgICAgaWYgKHNpZHJTdGF0dXMub3BlbmVkICE9PSBmYWxzZSkge1xuICAgICAgICAgIHZhciBhbHJlYWR5T3BlbmVkTWVudSA9IG5ldyBNZW51KHNpZHJTdGF0dXMub3BlbmVkKTtcblxuICAgICAgICAgIGFscmVhZHlPcGVuZWRNZW51LmNsb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzNC5vcGVuKGNhbGxiYWNrKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW92ZSgnb3BlbicsIGNhbGxiYWNrKTtcblxuICAgICAgICAvLyBvbk9wZW4gY2FsbGJhY2tcbiAgICAgICAgdGhpcy5vbk9wZW5DYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2Nsb3NlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZShjYWxsYmFjaykge1xuICAgICAgICAvLyBDaGVjayBpZiBpcyBhbHJlYWR5IGNsb3NlZCBvciBtb3ZpbmdcbiAgICAgICAgaWYgKHNpZHJTdGF0dXMub3BlbmVkICE9PSB0aGlzLm5hbWUgfHwgc2lkclN0YXR1cy5tb3ZpbmcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vdmUoJ2Nsb3NlJywgY2FsbGJhY2spO1xuXG4gICAgICAgIC8vIG9uQ2xvc2UgY2FsbGJhY2tcbiAgICAgICAgdGhpcy5vbkNsb3NlQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICd0b2dnbGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZShjYWxsYmFjaykge1xuICAgICAgICBpZiAoc2lkclN0YXR1cy5vcGVuZWQgPT09IHRoaXMubmFtZSkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub3BlbihjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIE1lbnU7XG4gIH0oKTtcblxuICB2YXIgJCQxID0galF1ZXJ5O1xuXG4gIGZ1bmN0aW9uIGV4ZWN1dGUoYWN0aW9uLCBuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBzaWRyID0gbmV3IE1lbnUobmFtZSk7XG5cbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgY2FzZSAnb3Blbic6XG4gICAgICAgIHNpZHIub3BlbihjYWxsYmFjayk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xvc2UnOlxuICAgICAgICBzaWRyLmNsb3NlKGNhbGxiYWNrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b2dnbGUnOlxuICAgICAgICBzaWRyLnRvZ2dsZShjYWxsYmFjayk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgJCQxLmVycm9yKCdNZXRob2QgJyArIGFjdGlvbiArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnNpZHInKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIGk7XG4gIHZhciAkID0galF1ZXJ5O1xuICB2YXIgcHVibGljTWV0aG9kcyA9IFsnb3BlbicsICdjbG9zZScsICd0b2dnbGUnXTtcbiAgdmFyIG1ldGhvZE5hbWU7XG4gIHZhciBtZXRob2RzID0ge307XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiBnZXRNZXRob2QobWV0aG9kTmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICAgIC8vIENoZWNrIGFyZ3VtZW50c1xuICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmFtZTtcbiAgICAgICAgbmFtZSA9ICdzaWRyJztcbiAgICAgIH0gZWxzZSBpZiAoIW5hbWUpIHtcbiAgICAgICAgbmFtZSA9ICdzaWRyJztcbiAgICAgIH1cblxuICAgICAgZXhlY3V0ZShtZXRob2ROYW1lLCBuYW1lLCBjYWxsYmFjayk7XG4gICAgfTtcbiAgfTtcbiAgZm9yIChpID0gMDsgaSA8IHB1YmxpY01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICBtZXRob2ROYW1lID0gcHVibGljTWV0aG9kc1tpXTtcbiAgICBtZXRob2RzW21ldGhvZE5hbWVdID0gZ2V0TWV0aG9kKG1ldGhvZE5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2lkcihtZXRob2QpIHtcbiAgICBpZiAobWV0aG9kID09PSAnc3RhdHVzJykge1xuICAgICAgcmV0dXJuIHNpZHJTdGF0dXM7XG4gICAgfSBlbHNlIGlmIChtZXRob2RzW21ldGhvZF0pIHtcbiAgICAgIHJldHVybiBtZXRob2RzW21ldGhvZF0uYXBwbHkodGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbWV0aG9kID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBtZXRob2QgPT09ICdzdHJpbmcnIHx8ICFtZXRob2QpIHtcbiAgICAgIHJldHVybiBtZXRob2RzLnRvZ2dsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkLmVycm9yKCdNZXRob2QgJyArIG1ldGhvZCArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnNpZHInKTtcbiAgICB9XG4gIH1cblxuICB2YXIgJCQzID0galF1ZXJ5O1xuXG4gIGZ1bmN0aW9uIGZpbGxDb250ZW50KCRzaWRlTWVudSwgc2V0dGluZ3MpIHtcbiAgICAvLyBUaGUgbWVudSBjb250ZW50XG4gICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5zb3VyY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBuZXdDb250ZW50ID0gc2V0dGluZ3Muc291cmNlKG5hbWUpO1xuXG4gICAgICAkc2lkZU1lbnUuaHRtbChuZXdDb250ZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZXR0aW5ncy5zb3VyY2UgPT09ICdzdHJpbmcnICYmIGhlbHBlci5pc1VybChzZXR0aW5ncy5zb3VyY2UpKSB7XG4gICAgICAkJDMuZ2V0KHNldHRpbmdzLnNvdXJjZSwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgJHNpZGVNZW51Lmh0bWwoZGF0YSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZXR0aW5ncy5zb3VyY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgaHRtbENvbnRlbnQgPSAnJyxcbiAgICAgICAgICBzZWxlY3RvcnMgPSBzZXR0aW5ncy5zb3VyY2Uuc3BsaXQoJywnKTtcblxuICAgICAgJCQzLmVhY2goc2VsZWN0b3JzLCBmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgaHRtbENvbnRlbnQgKz0gJzxkaXYgY2xhc3M9XCJzaWRyLWlubmVyXCI+JyArICQkMyhlbGVtZW50KS5odG1sKCkgKyAnPC9kaXY+JztcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZW5hbWluZyBpZHMgYW5kIGNsYXNzZXNcbiAgICAgIGlmIChzZXR0aW5ncy5yZW5hbWluZykge1xuICAgICAgICB2YXIgJGh0bWxDb250ZW50ID0gJCQzKCc8ZGl2IC8+JykuaHRtbChodG1sQ29udGVudCk7XG5cbiAgICAgICAgJGh0bWxDb250ZW50LmZpbmQoJyonKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgIHZhciAkZWxlbWVudCA9ICQkMyhlbGVtZW50KTtcblxuICAgICAgICAgIGhlbHBlci5hZGRQcmVmaXhlcygkZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBodG1sQ29udGVudCA9ICRodG1sQ29udGVudC5odG1sKCk7XG4gICAgICB9XG5cbiAgICAgICRzaWRlTWVudS5odG1sKGh0bWxDb250ZW50KTtcbiAgICB9IGVsc2UgaWYgKHNldHRpbmdzLnNvdXJjZSAhPT0gbnVsbCkge1xuICAgICAgJCQzLmVycm9yKCdJbnZhbGlkIFNpZHIgU291cmNlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRzaWRlTWVudTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZuU2lkcihvcHRpb25zKSB7XG4gICAgdmFyIHRyYW5zaXRpb25zID0gaGVscGVyLnRyYW5zaXRpb25zLFxuICAgICAgICBzZXR0aW5ncyA9ICQkMy5leHRlbmQoe1xuICAgICAgbmFtZTogJ3NpZHInLCAvLyBOYW1lIGZvciB0aGUgJ3NpZHInXG4gICAgICBzcGVlZDogMjAwLCAvLyBBY2NlcHRzIHN0YW5kYXJkIGpRdWVyeSBlZmZlY3RzIHNwZWVkcyAoaS5lLiBmYXN0LCBub3JtYWwgb3IgbWlsbGlzZWNvbmRzKVxuICAgICAgc2lkZTogJ2xlZnQnLCAvLyBBY2NlcHRzICdsZWZ0JyBvciAncmlnaHQnXG4gICAgICBzb3VyY2U6IG51bGwsIC8vIE92ZXJyaWRlIHRoZSBzb3VyY2Ugb2YgdGhlIGNvbnRlbnQuXG4gICAgICByZW5hbWluZzogdHJ1ZSwgLy8gVGhlIGlkcyBhbmQgY2xhc3NlcyB3aWxsIGJlIHByZXBlbmRlZCB3aXRoIGEgcHJlZml4IHdoZW4gbG9hZGluZyBleGlzdGVudCBjb250ZW50XG4gICAgICBib2R5OiAnYm9keScsIC8vIFBhZ2UgY29udGFpbmVyIHNlbGVjdG9yLFxuICAgICAgZGlzcGxhY2U6IHRydWUsIC8vIERpc3BsYWNlIHRoZSBib2R5IGNvbnRlbnQgb3Igbm90XG4gICAgICB0aW1pbmc6ICdlYXNlJywgLy8gVGltaW5nIGZ1bmN0aW9uIGZvciBDU1MgdHJhbnNpdGlvbnNcbiAgICAgIG1ldGhvZDogJ3RvZ2dsZScsIC8vIFRoZSBtZXRob2QgdG8gY2FsbCB3aGVuIGVsZW1lbnQgaXMgY2xpY2tlZFxuICAgICAgYmluZDogJ3RvdWNoc3RhcnQgY2xpY2snLCAvLyBUaGUgZXZlbnQocykgdG8gdHJpZ2dlciB0aGUgbWVudVxuICAgICAgb25PcGVuOiBmdW5jdGlvbiBvbk9wZW4oKSB7fSxcbiAgICAgIC8vIENhbGxiYWNrIHdoZW4gc2lkciBzdGFydCBvcGVuaW5nXG4gICAgICBvbkNsb3NlOiBmdW5jdGlvbiBvbkNsb3NlKCkge30sXG4gICAgICAvLyBDYWxsYmFjayB3aGVuIHNpZHIgc3RhcnQgY2xvc2luZ1xuICAgICAgb25PcGVuRW5kOiBmdW5jdGlvbiBvbk9wZW5FbmQoKSB7fSxcbiAgICAgIC8vIENhbGxiYWNrIHdoZW4gc2lkciBlbmQgb3BlbmluZ1xuICAgICAgb25DbG9zZUVuZDogZnVuY3Rpb24gb25DbG9zZUVuZCgpIHt9IC8vIENhbGxiYWNrIHdoZW4gc2lkciBlbmQgY2xvc2luZ1xuXG4gICAgfSwgb3B0aW9ucyksXG4gICAgICAgIG5hbWUgPSBzZXR0aW5ncy5uYW1lLFxuICAgICAgICAkc2lkZU1lbnUgPSAkJDMoJyMnICsgbmFtZSk7XG5cbiAgICAvLyBJZiB0aGUgc2lkZSBtZW51IGRvIG5vdCBleGlzdCBjcmVhdGUgaXRcbiAgICBpZiAoJHNpZGVNZW51Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgJHNpZGVNZW51ID0gJCQzKCc8ZGl2IC8+JykuYXR0cignaWQnLCBuYW1lKS5hcHBlbmRUbygkJDMoJ2JvZHknKSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHRyYW5zaXRpb24gdG8gbWVudSBpZiBhcmUgc3VwcG9ydGVkXG4gICAgaWYgKHRyYW5zaXRpb25zLnN1cHBvcnRlZCkge1xuICAgICAgJHNpZGVNZW51LmNzcyh0cmFuc2l0aW9ucy5wcm9wZXJ0eSwgc2V0dGluZ3Muc2lkZSArICcgJyArIHNldHRpbmdzLnNwZWVkIC8gMTAwMCArICdzICcgKyBzZXR0aW5ncy50aW1pbmcpO1xuICAgIH1cblxuICAgIC8vIEFkZGluZyBzdHlsZXMgYW5kIG9wdGlvbnNcbiAgICAkc2lkZU1lbnUuYWRkQ2xhc3MoJ3NpZHInKS5hZGRDbGFzcyhzZXR0aW5ncy5zaWRlKS5kYXRhKHtcbiAgICAgIHNwZWVkOiBzZXR0aW5ncy5zcGVlZCxcbiAgICAgIHNpZGU6IHNldHRpbmdzLnNpZGUsXG4gICAgICBib2R5OiBzZXR0aW5ncy5ib2R5LFxuICAgICAgZGlzcGxhY2U6IHNldHRpbmdzLmRpc3BsYWNlLFxuICAgICAgdGltaW5nOiBzZXR0aW5ncy50aW1pbmcsXG4gICAgICBtZXRob2Q6IHNldHRpbmdzLm1ldGhvZCxcbiAgICAgIG9uT3Blbjogc2V0dGluZ3Mub25PcGVuLFxuICAgICAgb25DbG9zZTogc2V0dGluZ3Mub25DbG9zZSxcbiAgICAgIG9uT3BlbkVuZDogc2V0dGluZ3Mub25PcGVuRW5kLFxuICAgICAgb25DbG9zZUVuZDogc2V0dGluZ3Mub25DbG9zZUVuZFxuICAgIH0pO1xuXG4gICAgJHNpZGVNZW51ID0gZmlsbENvbnRlbnQoJHNpZGVNZW51LCBzZXR0aW5ncyk7XG5cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQkMyh0aGlzKSxcbiAgICAgICAgICBkYXRhID0gJHRoaXMuZGF0YSgnc2lkcicpLFxuICAgICAgICAgIGZsYWcgPSBmYWxzZTtcblxuICAgICAgLy8gSWYgdGhlIHBsdWdpbiBoYXNuJ3QgYmVlbiBpbml0aWFsaXplZCB5ZXRcbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBzaWRyU3RhdHVzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICBzaWRyU3RhdHVzLm9wZW5lZCA9IGZhbHNlO1xuXG4gICAgICAgICR0aGlzLmRhdGEoJ3NpZHInLCBuYW1lKTtcblxuICAgICAgICAkdGhpcy5iaW5kKHNldHRpbmdzLmJpbmQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBpZiAoIWZsYWcpIHtcbiAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgc2lkcihzZXR0aW5ncy5tZXRob2QsIG5hbWUpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgalF1ZXJ5LnNpZHIgPSBzaWRyO1xuICBqUXVlcnkuZm4uc2lkciA9IGZuU2lkcjtcblxufSgpKTsiLCIhZnVuY3Rpb24oZSl7dmFyIHQ7ZS5mbi5zbGlua3k9ZnVuY3Rpb24oYSl7dmFyIHM9ZS5leHRlbmQoe2xhYmVsOlwiQmFja1wiLHRpdGxlOiExLHNwZWVkOjMwMCxyZXNpemU6ITB9LGEpLGk9ZSh0aGlzKSxuPWkuY2hpbGRyZW4oKS5maXJzdCgpO2kuYWRkQ2xhc3MoXCJzbGlua3ktbWVudVwiKTt2YXIgcj1mdW5jdGlvbihlLHQpe3ZhciBhPU1hdGgucm91bmQocGFyc2VJbnQobi5nZXQoMCkuc3R5bGUubGVmdCkpfHwwO24uY3NzKFwibGVmdFwiLGEtMTAwKmUrXCIlXCIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJnNldFRpbWVvdXQodCxzLnNwZWVkKX0sbD1mdW5jdGlvbihlKXtpLmhlaWdodChlLm91dGVySGVpZ2h0KCkpfSxkPWZ1bmN0aW9uKGUpe2kuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLGUrXCJtc1wiKSxuLmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIixlK1wibXNcIil9O2lmKGQocy5zcGVlZCksZShcImEgKyB1bFwiLGkpLnByZXYoKS5hZGRDbGFzcyhcIm5leHRcIiksZShcImxpID4gdWxcIixpKS5wcmVwZW5kKCc8bGkgY2xhc3M9XCJoZWFkZXJcIj4nKSxzLnRpdGxlPT09ITAmJmUoXCJsaSA+IHVsXCIsaSkuZWFjaChmdW5jdGlvbigpe3ZhciB0PWUodGhpcykucGFyZW50KCkuZmluZChcImFcIikuZmlyc3QoKS50ZXh0KCksYT1lKFwiPGgyPlwiKS50ZXh0KHQpO2UoXCI+IC5oZWFkZXJcIix0aGlzKS5hcHBlbmQoYSl9KSxzLnRpdGxlfHxzLmxhYmVsIT09ITApe3ZhciBvPWUoXCI8YT5cIikudGV4dChzLmxhYmVsKS5wcm9wKFwiaHJlZlwiLFwiI1wiKS5hZGRDbGFzcyhcImJhY2tcIik7ZShcIi5oZWFkZXJcIixpKS5hcHBlbmQobyl9ZWxzZSBlKFwibGkgPiB1bFwiLGkpLmVhY2goZnVuY3Rpb24oKXt2YXIgdD1lKHRoaXMpLnBhcmVudCgpLmZpbmQoXCJhXCIpLmZpcnN0KCkudGV4dCgpLGE9ZShcIjxhPlwiKS50ZXh0KHQpLnByb3AoXCJocmVmXCIsXCIjXCIpLmFkZENsYXNzKFwiYmFja1wiKTtlKFwiPiAuaGVhZGVyXCIsdGhpcykuYXBwZW5kKGEpfSk7ZShcImFcIixpKS5vbihcImNsaWNrXCIsZnVuY3Rpb24oYSl7aWYoISh0K3Muc3BlZWQ+RGF0ZS5ub3coKSkpe3Q9RGF0ZS5ub3coKTt2YXIgbj1lKHRoaXMpOy8jLy50ZXN0KHRoaXMuaHJlZikmJmEucHJldmVudERlZmF1bHQoKSxuLmhhc0NsYXNzKFwibmV4dFwiKT8oaS5maW5kKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxuLm5leHQoKS5zaG93KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIikscigxKSxzLnJlc2l6ZSYmbChuLm5leHQoKSkpOm4uaGFzQ2xhc3MoXCJiYWNrXCIpJiYocigtMSxmdW5jdGlvbigpe2kuZmluZChcIi5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksbi5wYXJlbnQoKS5wYXJlbnQoKS5oaWRlKCkucGFyZW50c1VudGlsKGksXCJ1bFwiKS5maXJzdCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpfSkscy5yZXNpemUmJmwobi5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnRzVW50aWwoaSxcInVsXCIpKSl9fSksdGhpcy5qdW1wPWZ1bmN0aW9uKHQsYSl7dD1lKHQpO3ZhciBuPWkuZmluZChcIi5hY3RpdmVcIik7bj1uLmxlbmd0aD4wP24ucGFyZW50c1VudGlsKGksXCJ1bFwiKS5sZW5ndGg6MCxpLmZpbmQoXCJ1bFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKS5oaWRlKCk7dmFyIG89dC5wYXJlbnRzVW50aWwoaSxcInVsXCIpO28uc2hvdygpLHQuc2hvdygpLmFkZENsYXNzKFwiYWN0aXZlXCIpLGE9PT0hMSYmZCgwKSxyKG8ubGVuZ3RoLW4pLHMucmVzaXplJiZsKHQpLGE9PT0hMSYmZChzLnNwZWVkKX0sdGhpcy5ob21lPWZ1bmN0aW9uKHQpe3Q9PT0hMSYmZCgwKTt2YXIgYT1pLmZpbmQoXCIuYWN0aXZlXCIpLG49YS5wYXJlbnRzVW50aWwoaSxcImxpXCIpLmxlbmd0aDtuPjAmJihyKC1uLGZ1bmN0aW9uKCl7YS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKX0pLHMucmVzaXplJiZsKGUoYS5wYXJlbnRzVW50aWwoaSxcImxpXCIpLmdldChuLTEpKS5wYXJlbnQoKSkpLHQ9PT0hMSYmZChzLnNwZWVkKX0sdGhpcy5kZXN0cm95PWZ1bmN0aW9uKCl7ZShcIi5oZWFkZXJcIixpKS5yZW1vdmUoKSxlKFwiYVwiLGkpLnJlbW92ZUNsYXNzKFwibmV4dFwiKS5vZmYoXCJjbGlja1wiKSxpLnJlbW92ZUNsYXNzKFwic2xpbmt5LW1lbnVcIikuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLFwiXCIpLG4uY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLFwiXCIpfTt2YXIgYz1pLmZpbmQoXCIuYWN0aXZlXCIpO3JldHVybiBjLmxlbmd0aD4wJiYoYy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSx0aGlzLmp1bXAoYywhMSkpLHRoaXN9fShqUXVlcnkpOyIsIihmdW5jdGlvbigpIHtcbiAgdmFyIEFqYXhNb25pdG9yLCBCYXIsIERvY3VtZW50TW9uaXRvciwgRWxlbWVudE1vbml0b3IsIEVsZW1lbnRUcmFja2VyLCBFdmVudExhZ01vbml0b3IsIEV2ZW50ZWQsIEV2ZW50cywgTm9UYXJnZXRFcnJvciwgUGFjZSwgUmVxdWVzdEludGVyY2VwdCwgU09VUkNFX0tFWVMsIFNjYWxlciwgU29ja2V0UmVxdWVzdFRyYWNrZXIsIFhIUlJlcXVlc3RUcmFja2VyLCBhbmltYXRpb24sIGF2Z0FtcGxpdHVkZSwgYmFyLCBjYW5jZWxBbmltYXRpb24sIGNhbmNlbEFuaW1hdGlvbkZyYW1lLCBkZWZhdWx0T3B0aW9ucywgZXh0ZW5kLCBleHRlbmROYXRpdmUsIGdldEZyb21ET00sIGdldEludGVyY2VwdCwgaGFuZGxlUHVzaFN0YXRlLCBpZ25vcmVTdGFjaywgaW5pdCwgbm93LCBvcHRpb25zLCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIHJlc3VsdCwgcnVuQW5pbWF0aW9uLCBzY2FsZXJzLCBzaG91bGRJZ25vcmVVUkwsIHNob3VsZFRyYWNrLCBzb3VyY2UsIHNvdXJjZXMsIHVuaVNjYWxlciwgX1dlYlNvY2tldCwgX1hEb21haW5SZXF1ZXN0LCBfWE1MSHR0cFJlcXVlc3QsIF9pLCBfaW50ZXJjZXB0LCBfbGVuLCBfcHVzaFN0YXRlLCBfcmVmLCBfcmVmMSwgX3JlcGxhY2VTdGF0ZSxcbiAgICBfX3NsaWNlID0gW10uc2xpY2UsXG4gICAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gICAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gICAgX19pbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7IGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHsgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTsgfSByZXR1cm4gLTE7IH07XG5cbiAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgY2F0Y2h1cFRpbWU6IDEwMCxcbiAgICBpbml0aWFsUmF0ZTogLjAzLFxuICAgIG1pblRpbWU6IDI1MCxcbiAgICBnaG9zdFRpbWU6IDEwMCxcbiAgICBtYXhQcm9ncmVzc1BlckZyYW1lOiAyMCxcbiAgICBlYXNlRmFjdG9yOiAxLjI1LFxuICAgIHN0YXJ0T25QYWdlTG9hZDogdHJ1ZSxcbiAgICByZXN0YXJ0T25QdXNoU3RhdGU6IHRydWUsXG4gICAgcmVzdGFydE9uUmVxdWVzdEFmdGVyOiA1MDAsXG4gICAgdGFyZ2V0OiAnYm9keScsXG4gICAgZWxlbWVudHM6IHtcbiAgICAgIGNoZWNrSW50ZXJ2YWw6IDEwMCxcbiAgICAgIHNlbGVjdG9yczogWydib2R5J11cbiAgICB9LFxuICAgIGV2ZW50TGFnOiB7XG4gICAgICBtaW5TYW1wbGVzOiAxMCxcbiAgICAgIHNhbXBsZUNvdW50OiAzLFxuICAgICAgbGFnVGhyZXNob2xkOiAzXG4gICAgfSxcbiAgICBhamF4OiB7XG4gICAgICB0cmFja01ldGhvZHM6IFsnR0VUJ10sXG4gICAgICB0cmFja1dlYlNvY2tldHM6IHRydWUsXG4gICAgICBpZ25vcmVVUkxzOiBbXVxuICAgIH1cbiAgfTtcblxuICBub3cgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3JlZjtcbiAgICByZXR1cm4gKF9yZWYgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwgPyB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIgPyBwZXJmb3JtYW5jZS5ub3coKSA6IHZvaWQgMCA6IHZvaWQgMCkgIT0gbnVsbCA/IF9yZWYgOiArKG5ldyBEYXRlKTtcbiAgfTtcblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbiAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lO1xuXG4gIGlmIChyZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT0gbnVsbCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgICByZXR1cm4gc2V0VGltZW91dChmbiwgNTApO1xuICAgIH07XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG4gICAgfTtcbiAgfVxuXG4gIHJ1bkFuaW1hdGlvbiA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgdmFyIGxhc3QsIHRpY2s7XG4gICAgbGFzdCA9IG5vdygpO1xuICAgIHRpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkaWZmO1xuICAgICAgZGlmZiA9IG5vdygpIC0gbGFzdDtcbiAgICAgIGlmIChkaWZmID49IDMzKSB7XG4gICAgICAgIGxhc3QgPSBub3coKTtcbiAgICAgICAgcmV0dXJuIGZuKGRpZmYsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQodGljaywgMzMgLSBkaWZmKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB0aWNrKCk7XG4gIH07XG5cbiAgcmVzdWx0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MsIGtleSwgb2JqO1xuICAgIG9iaiA9IGFyZ3VtZW50c1swXSwga2V5ID0gYXJndW1lbnRzWzFdLCBhcmdzID0gMyA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiBbXTtcbiAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0uYXBwbHkob2JqLCBhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgIH1cbiAgfTtcblxuICBleHRlbmQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIga2V5LCBvdXQsIHNvdXJjZSwgc291cmNlcywgdmFsLCBfaSwgX2xlbjtcbiAgICBvdXQgPSBhcmd1bWVudHNbMF0sIHNvdXJjZXMgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gc291cmNlcy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgc291cmNlID0gc291cmNlc1tfaV07XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgIGlmICghX19oYXNQcm9wLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICB2YWwgPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICBpZiAoKG91dFtrZXldICE9IG51bGwpICYmIHR5cGVvZiBvdXRba2V5XSA9PT0gJ29iamVjdCcgJiYgKHZhbCAhPSBudWxsKSAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZXh0ZW5kKG91dFtrZXldLCB2YWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXRba2V5XSA9IHZhbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfTtcblxuICBhdmdBbXBsaXR1ZGUgPSBmdW5jdGlvbihhcnIpIHtcbiAgICB2YXIgY291bnQsIHN1bSwgdiwgX2ksIF9sZW47XG4gICAgc3VtID0gY291bnQgPSAwO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gYXJyLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICB2ID0gYXJyW19pXTtcbiAgICAgIHN1bSArPSBNYXRoLmFicyh2KTtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiBzdW0gLyBjb3VudDtcbiAgfTtcblxuICBnZXRGcm9tRE9NID0gZnVuY3Rpb24oa2V5LCBqc29uKSB7XG4gICAgdmFyIGRhdGEsIGUsIGVsO1xuICAgIGlmIChrZXkgPT0gbnVsbCkge1xuICAgICAga2V5ID0gJ29wdGlvbnMnO1xuICAgIH1cbiAgICBpZiAoanNvbiA9PSBudWxsKSB7XG4gICAgICBqc29uID0gdHJ1ZTtcbiAgICB9XG4gICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcGFjZS1cIiArIGtleSArIFwiXVwiKTtcbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRhdGEgPSBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhY2UtXCIgKyBrZXkpO1xuICAgIGlmICghanNvbikge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAgIGUgPSBfZXJyb3I7XG4gICAgICByZXR1cm4gdHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZSAhPT0gbnVsbCA/IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwYXJzaW5nIGlubGluZSBwYWNlIG9wdGlvbnNcIiwgZSkgOiB2b2lkIDA7XG4gICAgfVxuICB9O1xuXG4gIEV2ZW50ZWQgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gRXZlbnRlZCgpIHt9XG5cbiAgICBFdmVudGVkLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyLCBjdHgsIG9uY2UpIHtcbiAgICAgIHZhciBfYmFzZTtcbiAgICAgIGlmIChvbmNlID09IG51bGwpIHtcbiAgICAgICAgb25jZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYmluZGluZ3MgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmJpbmRpbmdzID0ge307XG4gICAgICB9XG4gICAgICBpZiAoKF9iYXNlID0gdGhpcy5iaW5kaW5ncylbZXZlbnRdID09IG51bGwpIHtcbiAgICAgICAgX2Jhc2VbZXZlbnRdID0gW107XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5iaW5kaW5nc1tldmVudF0ucHVzaCh7XG4gICAgICAgIGhhbmRsZXI6IGhhbmRsZXIsXG4gICAgICAgIGN0eDogY3R4LFxuICAgICAgICBvbmNlOiBvbmNlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgRXZlbnRlZC5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyLCBjdHgpIHtcbiAgICAgIHJldHVybiB0aGlzLm9uKGV2ZW50LCBoYW5kbGVyLCBjdHgsIHRydWUpO1xuICAgIH07XG5cbiAgICBFdmVudGVkLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlcikge1xuICAgICAgdmFyIGksIF9yZWYsIF9yZXN1bHRzO1xuICAgICAgaWYgKCgoX3JlZiA9IHRoaXMuYmluZGluZ3MpICE9IG51bGwgPyBfcmVmW2V2ZW50XSA6IHZvaWQgMCkgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaGFuZGxlciA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBkZWxldGUgdGhpcy5iaW5kaW5nc1tldmVudF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpID0gMDtcbiAgICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgd2hpbGUgKGkgPCB0aGlzLmJpbmRpbmdzW2V2ZW50XS5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAodGhpcy5iaW5kaW5nc1tldmVudF1baV0uaGFuZGxlciA9PT0gaGFuZGxlcikge1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaCh0aGlzLmJpbmRpbmdzW2V2ZW50XS5zcGxpY2UoaSwgMSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfcmVzdWx0cy5wdXNoKGkrKyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgRXZlbnRlZC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MsIGN0eCwgZXZlbnQsIGhhbmRsZXIsIGksIG9uY2UsIF9yZWYsIF9yZWYxLCBfcmVzdWx0cztcbiAgICAgIGV2ZW50ID0gYXJndW1lbnRzWzBdLCBhcmdzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgOiBbXTtcbiAgICAgIGlmICgoX3JlZiA9IHRoaXMuYmluZGluZ3MpICE9IG51bGwgPyBfcmVmW2V2ZW50XSA6IHZvaWQgMCkge1xuICAgICAgICBpID0gMDtcbiAgICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgd2hpbGUgKGkgPCB0aGlzLmJpbmRpbmdzW2V2ZW50XS5sZW5ndGgpIHtcbiAgICAgICAgICBfcmVmMSA9IHRoaXMuYmluZGluZ3NbZXZlbnRdW2ldLCBoYW5kbGVyID0gX3JlZjEuaGFuZGxlciwgY3R4ID0gX3JlZjEuY3R4LCBvbmNlID0gX3JlZjEub25jZTtcbiAgICAgICAgICBoYW5kbGVyLmFwcGx5KGN0eCAhPSBudWxsID8gY3R4IDogdGhpcywgYXJncyk7XG4gICAgICAgICAgaWYgKG9uY2UpIHtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2godGhpcy5iaW5kaW5nc1tldmVudF0uc3BsaWNlKGksIDEpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChpKyspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBFdmVudGVkO1xuXG4gIH0pKCk7XG5cbiAgUGFjZSA9IHdpbmRvdy5QYWNlIHx8IHt9O1xuXG4gIHdpbmRvdy5QYWNlID0gUGFjZTtcblxuICBleHRlbmQoUGFjZSwgRXZlbnRlZC5wcm90b3R5cGUpO1xuXG4gIG9wdGlvbnMgPSBQYWNlLm9wdGlvbnMgPSBleHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCB3aW5kb3cucGFjZU9wdGlvbnMsIGdldEZyb21ET00oKSk7XG5cbiAgX3JlZiA9IFsnYWpheCcsICdkb2N1bWVudCcsICdldmVudExhZycsICdlbGVtZW50cyddO1xuICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICBzb3VyY2UgPSBfcmVmW19pXTtcbiAgICBpZiAob3B0aW9uc1tzb3VyY2VdID09PSB0cnVlKSB7XG4gICAgICBvcHRpb25zW3NvdXJjZV0gPSBkZWZhdWx0T3B0aW9uc1tzb3VyY2VdO1xuICAgIH1cbiAgfVxuXG4gIE5vVGFyZ2V0RXJyb3IgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5vVGFyZ2V0RXJyb3IsIF9zdXBlcik7XG5cbiAgICBmdW5jdGlvbiBOb1RhcmdldEVycm9yKCkge1xuICAgICAgX3JlZjEgPSBOb1RhcmdldEVycm9yLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIF9yZWYxO1xuICAgIH1cblxuICAgIHJldHVybiBOb1RhcmdldEVycm9yO1xuXG4gIH0pKEVycm9yKTtcblxuICBCYXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQmFyKCkge1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgfVxuXG4gICAgQmFyLnByb3RvdHlwZS5nZXRFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdGFyZ2V0RWxlbWVudDtcbiAgICAgIGlmICh0aGlzLmVsID09IG51bGwpIHtcbiAgICAgICAgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy50YXJnZXQpO1xuICAgICAgICBpZiAoIXRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgTm9UYXJnZXRFcnJvcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NOYW1lID0gXCJwYWNlIHBhY2UtYWN0aXZlXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUucmVwbGFjZSgvcGFjZS1kb25lL2csICcnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgKz0gJyBwYWNlLXJ1bm5pbmcnO1xuICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwicGFjZS1wcm9ncmVzc1wiPlxcbiAgPGRpdiBjbGFzcz1cInBhY2UtcHJvZ3Jlc3MtaW5uZXJcIj48L2Rpdj5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVwicGFjZS1hY3Rpdml0eVwiPjwvZGl2Pic7XG4gICAgICAgIGlmICh0YXJnZXRFbGVtZW50LmZpcnN0Q2hpbGQgIT0gbnVsbCkge1xuICAgICAgICAgIHRhcmdldEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHRhcmdldEVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZWw7XG4gICAgfTtcblxuICAgIEJhci5wcm90b3R5cGUuZmluaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZWw7XG4gICAgICBlbCA9IHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtYWN0aXZlJywgJycpO1xuICAgICAgZWwuY2xhc3NOYW1lICs9ICcgcGFjZS1pbmFjdGl2ZSc7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtcnVubmluZycsICcnKTtcbiAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSArPSAnIHBhY2UtZG9uZSc7XG4gICAgfTtcblxuICAgIEJhci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24ocHJvZykge1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IHByb2c7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXIoKTtcbiAgICB9O1xuXG4gICAgQmFyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZ2V0RWxlbWVudCgpKTtcbiAgICAgIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgICAgICBOb1RhcmdldEVycm9yID0gX2Vycm9yO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZWwgPSB2b2lkIDA7XG4gICAgfTtcblxuICAgIEJhci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZWwsIGtleSwgcHJvZ3Jlc3NTdHIsIHRyYW5zZm9ybSwgX2osIF9sZW4xLCBfcmVmMjtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMudGFyZ2V0KSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGVsID0gdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgICB0cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKFwiICsgdGhpcy5wcm9ncmVzcyArIFwiJSwgMCwgMClcIjtcbiAgICAgIF9yZWYyID0gWyd3ZWJraXRUcmFuc2Zvcm0nLCAnbXNUcmFuc2Zvcm0nLCAndHJhbnNmb3JtJ107XG4gICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgICAga2V5ID0gX3JlZjJbX2pdO1xuICAgICAgICBlbC5jaGlsZHJlblswXS5zdHlsZVtrZXldID0gdHJhbnNmb3JtO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmxhc3RSZW5kZXJlZFByb2dyZXNzIHx8IHRoaXMubGFzdFJlbmRlcmVkUHJvZ3Jlc3MgfCAwICE9PSB0aGlzLnByb2dyZXNzIHwgMCkge1xuICAgICAgICBlbC5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZ3Jlc3MtdGV4dCcsIFwiXCIgKyAodGhpcy5wcm9ncmVzcyB8IDApICsgXCIlXCIpO1xuICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSAxMDApIHtcbiAgICAgICAgICBwcm9ncmVzc1N0ciA9ICc5OSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvZ3Jlc3NTdHIgPSB0aGlzLnByb2dyZXNzIDwgMTAgPyBcIjBcIiA6IFwiXCI7XG4gICAgICAgICAgcHJvZ3Jlc3NTdHIgKz0gdGhpcy5wcm9ncmVzcyB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWwuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKCdkYXRhLXByb2dyZXNzJywgXCJcIiArIHByb2dyZXNzU3RyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmxhc3RSZW5kZXJlZFByb2dyZXNzID0gdGhpcy5wcm9ncmVzcztcbiAgICB9O1xuXG4gICAgQmFyLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9ncmVzcyA+PSAxMDA7XG4gICAgfTtcblxuICAgIHJldHVybiBCYXI7XG5cbiAgfSkoKTtcblxuICBFdmVudHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gRXZlbnRzKCkge1xuICAgICAgdGhpcy5iaW5kaW5ncyA9IHt9O1xuICAgIH1cblxuICAgIEV2ZW50cy5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKG5hbWUsIHZhbCkge1xuICAgICAgdmFyIGJpbmRpbmcsIF9qLCBfbGVuMSwgX3JlZjIsIF9yZXN1bHRzO1xuICAgICAgaWYgKHRoaXMuYmluZGluZ3NbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICBfcmVmMiA9IHRoaXMuYmluZGluZ3NbbmFtZV07XG4gICAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IF9yZWYyLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xuICAgICAgICAgIGJpbmRpbmcgPSBfcmVmMltfal07XG4gICAgICAgICAgX3Jlc3VsdHMucHVzaChiaW5kaW5nLmNhbGwodGhpcywgdmFsKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBFdmVudHMucHJvdG90eXBlLm9uID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICAgIHZhciBfYmFzZTtcbiAgICAgIGlmICgoX2Jhc2UgPSB0aGlzLmJpbmRpbmdzKVtuYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIF9iYXNlW25hbWVdID0gW107XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5iaW5kaW5nc1tuYW1lXS5wdXNoKGZuKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEV2ZW50cztcblxuICB9KSgpO1xuXG4gIF9YTUxIdHRwUmVxdWVzdCA9IHdpbmRvdy5YTUxIdHRwUmVxdWVzdDtcblxuICBfWERvbWFpblJlcXVlc3QgPSB3aW5kb3cuWERvbWFpblJlcXVlc3Q7XG5cbiAgX1dlYlNvY2tldCA9IHdpbmRvdy5XZWJTb2NrZXQ7XG5cbiAgZXh0ZW5kTmF0aXZlID0gZnVuY3Rpb24odG8sIGZyb20pIHtcbiAgICB2YXIgZSwga2V5LCBfcmVzdWx0cztcbiAgICBfcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoa2V5IGluIGZyb20ucHJvdG90eXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoKHRvW2tleV0gPT0gbnVsbCkgJiYgdHlwZW9mIGZyb21ba2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnR5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBfcmVzdWx0cy5wdXNoKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0bywga2V5LCB7XG4gICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyb20ucHJvdG90eXBlW2tleV07XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfcmVzdWx0cy5wdXNoKHRvW2tleV0gPSBmcm9tLnByb3RvdHlwZVtrZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3Jlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAgICAgZSA9IF9lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9yZXN1bHRzO1xuICB9O1xuXG4gIGlnbm9yZVN0YWNrID0gW107XG5cbiAgUGFjZS5pZ25vcmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncywgZm4sIHJldDtcbiAgICBmbiA9IGFyZ3VtZW50c1swXSwgYXJncyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gICAgaWdub3JlU3RhY2sudW5zaGlmdCgnaWdub3JlJyk7XG4gICAgcmV0ID0gZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgaWdub3JlU3RhY2suc2hpZnQoKTtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIFBhY2UudHJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncywgZm4sIHJldDtcbiAgICBmbiA9IGFyZ3VtZW50c1swXSwgYXJncyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gICAgaWdub3JlU3RhY2sudW5zaGlmdCgndHJhY2snKTtcbiAgICByZXQgPSBmbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICBpZ25vcmVTdGFjay5zaGlmdCgpO1xuICAgIHJldHVybiByZXQ7XG4gIH07XG5cbiAgc2hvdWxkVHJhY2sgPSBmdW5jdGlvbihtZXRob2QpIHtcbiAgICB2YXIgX3JlZjI7XG4gICAgaWYgKG1ldGhvZCA9PSBudWxsKSB7XG4gICAgICBtZXRob2QgPSAnR0VUJztcbiAgICB9XG4gICAgaWYgKGlnbm9yZVN0YWNrWzBdID09PSAndHJhY2snKSB7XG4gICAgICByZXR1cm4gJ2ZvcmNlJztcbiAgICB9XG4gICAgaWYgKCFpZ25vcmVTdGFjay5sZW5ndGggJiYgb3B0aW9ucy5hamF4KSB7XG4gICAgICBpZiAobWV0aG9kID09PSAnc29ja2V0JyAmJiBvcHRpb25zLmFqYXgudHJhY2tXZWJTb2NrZXRzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChfcmVmMiA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpLCBfX2luZGV4T2YuY2FsbChvcHRpb25zLmFqYXgudHJhY2tNZXRob2RzLCBfcmVmMikgPj0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIFJlcXVlc3RJbnRlcmNlcHQgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJlcXVlc3RJbnRlcmNlcHQsIF9zdXBlcik7XG5cbiAgICBmdW5jdGlvbiBSZXF1ZXN0SW50ZXJjZXB0KCkge1xuICAgICAgdmFyIG1vbml0b3JYSFIsXG4gICAgICAgIF90aGlzID0gdGhpcztcbiAgICAgIFJlcXVlc3RJbnRlcmNlcHQuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBtb25pdG9yWEhSID0gZnVuY3Rpb24ocmVxKSB7XG4gICAgICAgIHZhciBfb3BlbjtcbiAgICAgICAgX29wZW4gPSByZXEub3BlbjtcbiAgICAgICAgcmV0dXJuIHJlcS5vcGVuID0gZnVuY3Rpb24odHlwZSwgdXJsLCBhc3luYykge1xuICAgICAgICAgIGlmIChzaG91bGRUcmFjayh0eXBlKSkge1xuICAgICAgICAgICAgX3RoaXMudHJpZ2dlcigncmVxdWVzdCcsIHtcbiAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBfb3Blbi5hcHBseShyZXEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgd2luZG93LlhNTEh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24oZmxhZ3MpIHtcbiAgICAgICAgdmFyIHJlcTtcbiAgICAgICAgcmVxID0gbmV3IF9YTUxIdHRwUmVxdWVzdChmbGFncyk7XG4gICAgICAgIG1vbml0b3JYSFIocmVxKTtcbiAgICAgICAgcmV0dXJuIHJlcTtcbiAgICAgIH07XG4gICAgICB0cnkge1xuICAgICAgICBleHRlbmROYXRpdmUod2luZG93LlhNTEh0dHBSZXF1ZXN0LCBfWE1MSHR0cFJlcXVlc3QpO1xuICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7fVxuICAgICAgaWYgKF9YRG9tYWluUmVxdWVzdCAhPSBudWxsKSB7XG4gICAgICAgIHdpbmRvdy5YRG9tYWluUmVxdWVzdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciByZXE7XG4gICAgICAgICAgcmVxID0gbmV3IF9YRG9tYWluUmVxdWVzdDtcbiAgICAgICAgICBtb25pdG9yWEhSKHJlcSk7XG4gICAgICAgICAgcmV0dXJuIHJlcTtcbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBleHRlbmROYXRpdmUod2luZG93LlhEb21haW5SZXF1ZXN0LCBfWERvbWFpblJlcXVlc3QpO1xuICAgICAgICB9IGNhdGNoIChfZXJyb3IpIHt9XG4gICAgICB9XG4gICAgICBpZiAoKF9XZWJTb2NrZXQgIT0gbnVsbCkgJiYgb3B0aW9ucy5hamF4LnRyYWNrV2ViU29ja2V0cykge1xuICAgICAgICB3aW5kb3cuV2ViU29ja2V0ID0gZnVuY3Rpb24odXJsLCBwcm90b2NvbHMpIHtcbiAgICAgICAgICB2YXIgcmVxO1xuICAgICAgICAgIGlmIChwcm90b2NvbHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmVxID0gbmV3IF9XZWJTb2NrZXQodXJsLCBwcm90b2NvbHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXEgPSBuZXcgX1dlYlNvY2tldCh1cmwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2hvdWxkVHJhY2soJ3NvY2tldCcpKSB7XG4gICAgICAgICAgICBfdGhpcy50cmlnZ2VyKCdyZXF1ZXN0Jywge1xuICAgICAgICAgICAgICB0eXBlOiAnc29ja2V0JyxcbiAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgIHByb3RvY29sczogcHJvdG9jb2xzLFxuICAgICAgICAgICAgICByZXF1ZXN0OiByZXFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVxO1xuICAgICAgICB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGV4dGVuZE5hdGl2ZSh3aW5kb3cuV2ViU29ja2V0LCBfV2ViU29ja2V0KTtcbiAgICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7fVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZXF1ZXN0SW50ZXJjZXB0O1xuXG4gIH0pKEV2ZW50cyk7XG5cbiAgX2ludGVyY2VwdCA9IG51bGw7XG5cbiAgZ2V0SW50ZXJjZXB0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKF9pbnRlcmNlcHQgPT0gbnVsbCkge1xuICAgICAgX2ludGVyY2VwdCA9IG5ldyBSZXF1ZXN0SW50ZXJjZXB0O1xuICAgIH1cbiAgICByZXR1cm4gX2ludGVyY2VwdDtcbiAgfTtcblxuICBzaG91bGRJZ25vcmVVUkwgPSBmdW5jdGlvbih1cmwpIHtcbiAgICB2YXIgcGF0dGVybiwgX2osIF9sZW4xLCBfcmVmMjtcbiAgICBfcmVmMiA9IG9wdGlvbnMuYWpheC5pZ25vcmVVUkxzO1xuICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IF9yZWYyLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xuICAgICAgcGF0dGVybiA9IF9yZWYyW19qXTtcbiAgICAgIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKHBhdHRlcm4pICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGF0dGVybi50ZXN0KHVybCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgZ2V0SW50ZXJjZXB0KCkub24oJ3JlcXVlc3QnLCBmdW5jdGlvbihfYXJnKSB7XG4gICAgdmFyIGFmdGVyLCBhcmdzLCByZXF1ZXN0LCB0eXBlLCB1cmw7XG4gICAgdHlwZSA9IF9hcmcudHlwZSwgcmVxdWVzdCA9IF9hcmcucmVxdWVzdCwgdXJsID0gX2FyZy51cmw7XG4gICAgaWYgKHNob3VsZElnbm9yZVVSTCh1cmwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghUGFjZS5ydW5uaW5nICYmIChvcHRpb25zLnJlc3RhcnRPblJlcXVlc3RBZnRlciAhPT0gZmFsc2UgfHwgc2hvdWxkVHJhY2sodHlwZSkgPT09ICdmb3JjZScpKSB7XG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgYWZ0ZXIgPSBvcHRpb25zLnJlc3RhcnRPblJlcXVlc3RBZnRlciB8fCAwO1xuICAgICAgaWYgKHR5cGVvZiBhZnRlciA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGFmdGVyID0gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3RpbGxBY3RpdmUsIF9qLCBfbGVuMSwgX3JlZjIsIF9yZWYzLCBfcmVzdWx0cztcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzb2NrZXQnKSB7XG4gICAgICAgICAgc3RpbGxBY3RpdmUgPSByZXF1ZXN0LnJlYWR5U3RhdGUgPCAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0aWxsQWN0aXZlID0gKDAgPCAoX3JlZjIgPSByZXF1ZXN0LnJlYWR5U3RhdGUpICYmIF9yZWYyIDwgNCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0aWxsQWN0aXZlKSB7XG4gICAgICAgICAgUGFjZS5yZXN0YXJ0KCk7XG4gICAgICAgICAgX3JlZjMgPSBQYWNlLnNvdXJjZXM7XG4gICAgICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMy5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgICAgICAgIHNvdXJjZSA9IF9yZWYzW19qXTtcbiAgICAgICAgICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBamF4TW9uaXRvcikge1xuICAgICAgICAgICAgICBzb3VyY2Uud2F0Y2guYXBwbHkoc291cmNlLCBhcmdzKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgICAgfVxuICAgICAgfSwgYWZ0ZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgQWpheE1vbml0b3IgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQWpheE1vbml0b3IoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IFtdO1xuICAgICAgZ2V0SW50ZXJjZXB0KCkub24oJ3JlcXVlc3QnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLndhdGNoLmFwcGx5KF90aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgQWpheE1vbml0b3IucHJvdG90eXBlLndhdGNoID0gZnVuY3Rpb24oX2FyZykge1xuICAgICAgdmFyIHJlcXVlc3QsIHRyYWNrZXIsIHR5cGUsIHVybDtcbiAgICAgIHR5cGUgPSBfYXJnLnR5cGUsIHJlcXVlc3QgPSBfYXJnLnJlcXVlc3QsIHVybCA9IF9hcmcudXJsO1xuICAgICAgaWYgKHNob3VsZElnbm9yZVVSTCh1cmwpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSAnc29ja2V0Jykge1xuICAgICAgICB0cmFja2VyID0gbmV3IFNvY2tldFJlcXVlc3RUcmFja2VyKHJlcXVlc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhY2tlciA9IG5ldyBYSFJSZXF1ZXN0VHJhY2tlcihyZXF1ZXN0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRzLnB1c2godHJhY2tlcik7XG4gICAgfTtcblxuICAgIHJldHVybiBBamF4TW9uaXRvcjtcblxuICB9KSgpO1xuXG4gIFhIUlJlcXVlc3RUcmFja2VyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIFhIUlJlcXVlc3RUcmFja2VyKHJlcXVlc3QpIHtcbiAgICAgIHZhciBldmVudCwgc2l6ZSwgX2osIF9sZW4xLCBfb25yZWFkeXN0YXRlY2hhbmdlLCBfcmVmMixcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICBpZiAod2luZG93LlByb2dyZXNzRXZlbnQgIT0gbnVsbCkge1xuICAgICAgICBzaXplID0gbnVsbDtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIGlmIChldnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnByb2dyZXNzID0gMTAwICogZXZ0LmxvYWRlZCAvIGV2dC50b3RhbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnByb2dyZXNzID0gX3RoaXMucHJvZ3Jlc3MgKyAoMTAwIC0gX3RoaXMucHJvZ3Jlc3MpIC8gMjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgX3JlZjIgPSBbJ2xvYWQnLCAnYWJvcnQnLCAndGltZW91dCcsICdlcnJvciddO1xuICAgICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgICAgICBldmVudCA9IF9yZWYyW19qXTtcbiAgICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnByb2dyZXNzID0gMTAwO1xuICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX29ucmVhZHlzdGF0ZWNoYW5nZSA9IHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlO1xuICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBfcmVmMztcbiAgICAgICAgICBpZiAoKF9yZWYzID0gcmVxdWVzdC5yZWFkeVN0YXRlKSA9PT0gMCB8fCBfcmVmMyA9PT0gNCkge1xuICAgICAgICAgICAgX3RoaXMucHJvZ3Jlc3MgPSAxMDA7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT09IDMpIHtcbiAgICAgICAgICAgIF90aGlzLnByb2dyZXNzID0gNTA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0eXBlb2YgX29ucmVhZHlzdGF0ZWNoYW5nZSA9PT0gXCJmdW5jdGlvblwiID8gX29ucmVhZHlzdGF0ZWNoYW5nZS5hcHBseShudWxsLCBhcmd1bWVudHMpIDogdm9pZCAwO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBYSFJSZXF1ZXN0VHJhY2tlcjtcblxuICB9KSgpO1xuXG4gIFNvY2tldFJlcXVlc3RUcmFja2VyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIFNvY2tldFJlcXVlc3RUcmFja2VyKHJlcXVlc3QpIHtcbiAgICAgIHZhciBldmVudCwgX2osIF9sZW4xLCBfcmVmMixcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICBfcmVmMiA9IFsnZXJyb3InLCAnb3BlbiddO1xuICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjIubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICAgIGV2ZW50ID0gX3JlZjJbX2pdO1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9ncmVzcyA9IDEwMDtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBTb2NrZXRSZXF1ZXN0VHJhY2tlcjtcblxuICB9KSgpO1xuXG4gIEVsZW1lbnRNb25pdG9yID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEVsZW1lbnRNb25pdG9yKG9wdGlvbnMpIHtcbiAgICAgIHZhciBzZWxlY3RvciwgX2osIF9sZW4xLCBfcmVmMjtcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuICAgICAgdGhpcy5lbGVtZW50cyA9IFtdO1xuICAgICAgaWYgKG9wdGlvbnMuc2VsZWN0b3JzID09IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucy5zZWxlY3RvcnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIF9yZWYyID0gb3B0aW9ucy5zZWxlY3RvcnM7XG4gICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgICAgc2VsZWN0b3IgPSBfcmVmMltfal07XG4gICAgICAgIHRoaXMuZWxlbWVudHMucHVzaChuZXcgRWxlbWVudFRyYWNrZXIoc2VsZWN0b3IpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gRWxlbWVudE1vbml0b3I7XG5cbiAgfSkoKTtcblxuICBFbGVtZW50VHJhY2tlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBFbGVtZW50VHJhY2tlcihzZWxlY3Rvcikge1xuICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICB0aGlzLmNoZWNrKCk7XG4gICAgfVxuXG4gICAgRWxlbWVudFRyYWNrZXIucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9uZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5jaGVjaygpO1xuICAgICAgICB9KSwgb3B0aW9ucy5lbGVtZW50cy5jaGVja0ludGVydmFsKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgRWxlbWVudFRyYWNrZXIucHJvdG90eXBlLmRvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzID0gMTAwO1xuICAgIH07XG5cbiAgICByZXR1cm4gRWxlbWVudFRyYWNrZXI7XG5cbiAgfSkoKTtcblxuICBEb2N1bWVudE1vbml0b3IgPSAoZnVuY3Rpb24oKSB7XG4gICAgRG9jdW1lbnRNb25pdG9yLnByb3RvdHlwZS5zdGF0ZXMgPSB7XG4gICAgICBsb2FkaW5nOiAwLFxuICAgICAgaW50ZXJhY3RpdmU6IDUwLFxuICAgICAgY29tcGxldGU6IDEwMFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBEb2N1bWVudE1vbml0b3IoKSB7XG4gICAgICB2YXIgX29ucmVhZHlzdGF0ZWNoYW5nZSwgX3JlZjIsXG4gICAgICAgIF90aGlzID0gdGhpcztcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAoX3JlZjIgPSB0aGlzLnN0YXRlc1tkb2N1bWVudC5yZWFkeVN0YXRlXSkgIT0gbnVsbCA/IF9yZWYyIDogMTAwO1xuICAgICAgX29ucmVhZHlzdGF0ZWNoYW5nZSA9IGRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZTtcbiAgICAgIGRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoX3RoaXMuc3RhdGVzW2RvY3VtZW50LnJlYWR5U3RhdGVdICE9IG51bGwpIHtcbiAgICAgICAgICBfdGhpcy5wcm9ncmVzcyA9IF90aGlzLnN0YXRlc1tkb2N1bWVudC5yZWFkeVN0YXRlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwZW9mIF9vbnJlYWR5c3RhdGVjaGFuZ2UgPT09IFwiZnVuY3Rpb25cIiA/IF9vbnJlYWR5c3RhdGVjaGFuZ2UuYXBwbHkobnVsbCwgYXJndW1lbnRzKSA6IHZvaWQgMDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIERvY3VtZW50TW9uaXRvcjtcblxuICB9KSgpO1xuXG4gIEV2ZW50TGFnTW9uaXRvciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBFdmVudExhZ01vbml0b3IoKSB7XG4gICAgICB2YXIgYXZnLCBpbnRlcnZhbCwgbGFzdCwgcG9pbnRzLCBzYW1wbGVzLFxuICAgICAgICBfdGhpcyA9IHRoaXM7XG4gICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgIGF2ZyA9IDA7XG4gICAgICBzYW1wbGVzID0gW107XG4gICAgICBwb2ludHMgPSAwO1xuICAgICAgbGFzdCA9IG5vdygpO1xuICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRpZmY7XG4gICAgICAgIGRpZmYgPSBub3coKSAtIGxhc3QgLSA1MDtcbiAgICAgICAgbGFzdCA9IG5vdygpO1xuICAgICAgICBzYW1wbGVzLnB1c2goZGlmZik7XG4gICAgICAgIGlmIChzYW1wbGVzLmxlbmd0aCA+IG9wdGlvbnMuZXZlbnRMYWcuc2FtcGxlQ291bnQpIHtcbiAgICAgICAgICBzYW1wbGVzLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYXZnID0gYXZnQW1wbGl0dWRlKHNhbXBsZXMpO1xuICAgICAgICBpZiAoKytwb2ludHMgPj0gb3B0aW9ucy5ldmVudExhZy5taW5TYW1wbGVzICYmIGF2ZyA8IG9wdGlvbnMuZXZlbnRMYWcubGFnVGhyZXNob2xkKSB7XG4gICAgICAgICAgX3RoaXMucHJvZ3Jlc3MgPSAxMDA7XG4gICAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9ncmVzcyA9IDEwMCAqICgzIC8gKGF2ZyArIDMpKTtcbiAgICAgICAgfVxuICAgICAgfSwgNTApO1xuICAgIH1cblxuICAgIHJldHVybiBFdmVudExhZ01vbml0b3I7XG5cbiAgfSkoKTtcblxuICBTY2FsZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gU2NhbGVyKHNvdXJjZSkge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLmxhc3QgPSB0aGlzLnNpbmNlTGFzdFVwZGF0ZSA9IDA7XG4gICAgICB0aGlzLnJhdGUgPSBvcHRpb25zLmluaXRpYWxSYXRlO1xuICAgICAgdGhpcy5jYXRjaHVwID0gMDtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSB0aGlzLmxhc3RQcm9ncmVzcyA9IDA7XG4gICAgICBpZiAodGhpcy5zb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gcmVzdWx0KHRoaXMuc291cmNlLCAncHJvZ3Jlc3MnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTY2FsZXIucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbihmcmFtZVRpbWUsIHZhbCkge1xuICAgICAgdmFyIHNjYWxpbmc7XG4gICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgdmFsID0gcmVzdWx0KHRoaXMuc291cmNlLCAncHJvZ3Jlc3MnKTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWwgPj0gMTAwKSB7XG4gICAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodmFsID09PSB0aGlzLmxhc3QpIHtcbiAgICAgICAgdGhpcy5zaW5jZUxhc3RVcGRhdGUgKz0gZnJhbWVUaW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuc2luY2VMYXN0VXBkYXRlKSB7XG4gICAgICAgICAgdGhpcy5yYXRlID0gKHZhbCAtIHRoaXMubGFzdCkgLyB0aGlzLnNpbmNlTGFzdFVwZGF0ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhdGNodXAgPSAodmFsIC0gdGhpcy5wcm9ncmVzcykgLyBvcHRpb25zLmNhdGNodXBUaW1lO1xuICAgICAgICB0aGlzLnNpbmNlTGFzdFVwZGF0ZSA9IDA7XG4gICAgICAgIHRoaXMubGFzdCA9IHZhbDtcbiAgICAgIH1cbiAgICAgIGlmICh2YWwgPiB0aGlzLnByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgKz0gdGhpcy5jYXRjaHVwICogZnJhbWVUaW1lO1xuICAgICAgfVxuICAgICAgc2NhbGluZyA9IDEgLSBNYXRoLnBvdyh0aGlzLnByb2dyZXNzIC8gMTAwLCBvcHRpb25zLmVhc2VGYWN0b3IpO1xuICAgICAgdGhpcy5wcm9ncmVzcyArPSBzY2FsaW5nICogdGhpcy5yYXRlICogZnJhbWVUaW1lO1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IE1hdGgubWluKHRoaXMubGFzdFByb2dyZXNzICsgb3B0aW9ucy5tYXhQcm9ncmVzc1BlckZyYW1lLCB0aGlzLnByb2dyZXNzKTtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLm1heCgwLCB0aGlzLnByb2dyZXNzKTtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLm1pbigxMDAsIHRoaXMucHJvZ3Jlc3MpO1xuICAgICAgdGhpcy5sYXN0UHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzO1xuICAgICAgcmV0dXJuIHRoaXMucHJvZ3Jlc3M7XG4gICAgfTtcblxuICAgIHJldHVybiBTY2FsZXI7XG5cbiAgfSkoKTtcblxuICBzb3VyY2VzID0gbnVsbDtcblxuICBzY2FsZXJzID0gbnVsbDtcblxuICBiYXIgPSBudWxsO1xuXG4gIHVuaVNjYWxlciA9IG51bGw7XG5cbiAgYW5pbWF0aW9uID0gbnVsbDtcblxuICBjYW5jZWxBbmltYXRpb24gPSBudWxsO1xuXG4gIFBhY2UucnVubmluZyA9IGZhbHNlO1xuXG4gIGhhbmRsZVB1c2hTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChvcHRpb25zLnJlc3RhcnRPblB1c2hTdGF0ZSkge1xuICAgICAgcmV0dXJuIFBhY2UucmVzdGFydCgpO1xuICAgIH1cbiAgfTtcblxuICBpZiAod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlICE9IG51bGwpIHtcbiAgICBfcHVzaFN0YXRlID0gd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlO1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaGFuZGxlUHVzaFN0YXRlKCk7XG4gICAgICByZXR1cm4gX3B1c2hTdGF0ZS5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSAhPSBudWxsKSB7XG4gICAgX3JlcGxhY2VTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZTtcbiAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGhhbmRsZVB1c2hTdGF0ZSgpO1xuICAgICAgcmV0dXJuIF9yZXBsYWNlU3RhdGUuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIFNPVVJDRV9LRVlTID0ge1xuICAgIGFqYXg6IEFqYXhNb25pdG9yLFxuICAgIGVsZW1lbnRzOiBFbGVtZW50TW9uaXRvcixcbiAgICBkb2N1bWVudDogRG9jdW1lbnRNb25pdG9yLFxuICAgIGV2ZW50TGFnOiBFdmVudExhZ01vbml0b3JcbiAgfTtcblxuICAoaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0eXBlLCBfaiwgX2ssIF9sZW4xLCBfbGVuMiwgX3JlZjIsIF9yZWYzLCBfcmVmNDtcbiAgICBQYWNlLnNvdXJjZXMgPSBzb3VyY2VzID0gW107XG4gICAgX3JlZjIgPSBbJ2FqYXgnLCAnZWxlbWVudHMnLCAnZG9jdW1lbnQnLCAnZXZlbnRMYWcnXTtcbiAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgIHR5cGUgPSBfcmVmMltfal07XG4gICAgICBpZiAob3B0aW9uc1t0eXBlXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgc291cmNlcy5wdXNoKG5ldyBTT1VSQ0VfS0VZU1t0eXBlXShvcHRpb25zW3R5cGVdKSk7XG4gICAgICB9XG4gICAgfVxuICAgIF9yZWY0ID0gKF9yZWYzID0gb3B0aW9ucy5leHRyYVNvdXJjZXMpICE9IG51bGwgPyBfcmVmMyA6IFtdO1xuICAgIGZvciAoX2sgPSAwLCBfbGVuMiA9IF9yZWY0Lmxlbmd0aDsgX2sgPCBfbGVuMjsgX2srKykge1xuICAgICAgc291cmNlID0gX3JlZjRbX2tdO1xuICAgICAgc291cmNlcy5wdXNoKG5ldyBzb3VyY2Uob3B0aW9ucykpO1xuICAgIH1cbiAgICBQYWNlLmJhciA9IGJhciA9IG5ldyBCYXI7XG4gICAgc2NhbGVycyA9IFtdO1xuICAgIHJldHVybiB1bmlTY2FsZXIgPSBuZXcgU2NhbGVyO1xuICB9KSgpO1xuXG4gIFBhY2Uuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIFBhY2UudHJpZ2dlcignc3RvcCcpO1xuICAgIFBhY2UucnVubmluZyA9IGZhbHNlO1xuICAgIGJhci5kZXN0cm95KCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICBpZiAoYW5pbWF0aW9uICE9IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2YgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgfVxuICAgICAgYW5pbWF0aW9uID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGluaXQoKTtcbiAgfTtcblxuICBQYWNlLnJlc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICBQYWNlLnRyaWdnZXIoJ3Jlc3RhcnQnKTtcbiAgICBQYWNlLnN0b3AoKTtcbiAgICByZXR1cm4gUGFjZS5zdGFydCgpO1xuICB9O1xuXG4gIFBhY2UuZ28gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhcnQ7XG4gICAgUGFjZS5ydW5uaW5nID0gdHJ1ZTtcbiAgICBiYXIucmVuZGVyKCk7XG4gICAgc3RhcnQgPSBub3coKTtcbiAgICBjYW5jZWxBbmltYXRpb24gPSBmYWxzZTtcbiAgICByZXR1cm4gYW5pbWF0aW9uID0gcnVuQW5pbWF0aW9uKGZ1bmN0aW9uKGZyYW1lVGltZSwgZW5xdWV1ZU5leHRGcmFtZSkge1xuICAgICAgdmFyIGF2ZywgY291bnQsIGRvbmUsIGVsZW1lbnQsIGVsZW1lbnRzLCBpLCBqLCByZW1haW5pbmcsIHNjYWxlciwgc2NhbGVyTGlzdCwgc3VtLCBfaiwgX2ssIF9sZW4xLCBfbGVuMiwgX3JlZjI7XG4gICAgICByZW1haW5pbmcgPSAxMDAgLSBiYXIucHJvZ3Jlc3M7XG4gICAgICBjb3VudCA9IHN1bSA9IDA7XG4gICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIGZvciAoaSA9IF9qID0gMCwgX2xlbjEgPSBzb3VyY2VzLmxlbmd0aDsgX2ogPCBfbGVuMTsgaSA9ICsrX2opIHtcbiAgICAgICAgc291cmNlID0gc291cmNlc1tpXTtcbiAgICAgICAgc2NhbGVyTGlzdCA9IHNjYWxlcnNbaV0gIT0gbnVsbCA/IHNjYWxlcnNbaV0gOiBzY2FsZXJzW2ldID0gW107XG4gICAgICAgIGVsZW1lbnRzID0gKF9yZWYyID0gc291cmNlLmVsZW1lbnRzKSAhPSBudWxsID8gX3JlZjIgOiBbc291cmNlXTtcbiAgICAgICAgZm9yIChqID0gX2sgPSAwLCBfbGVuMiA9IGVsZW1lbnRzLmxlbmd0aDsgX2sgPCBfbGVuMjsgaiA9ICsrX2spIHtcbiAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudHNbal07XG4gICAgICAgICAgc2NhbGVyID0gc2NhbGVyTGlzdFtqXSAhPSBudWxsID8gc2NhbGVyTGlzdFtqXSA6IHNjYWxlckxpc3Rbal0gPSBuZXcgU2NhbGVyKGVsZW1lbnQpO1xuICAgICAgICAgIGRvbmUgJj0gc2NhbGVyLmRvbmU7XG4gICAgICAgICAgaWYgKHNjYWxlci5kb25lKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgICBzdW0gKz0gc2NhbGVyLnRpY2soZnJhbWVUaW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXZnID0gc3VtIC8gY291bnQ7XG4gICAgICBiYXIudXBkYXRlKHVuaVNjYWxlci50aWNrKGZyYW1lVGltZSwgYXZnKSk7XG4gICAgICBpZiAoYmFyLmRvbmUoKSB8fCBkb25lIHx8IGNhbmNlbEFuaW1hdGlvbikge1xuICAgICAgICBiYXIudXBkYXRlKDEwMCk7XG4gICAgICAgIFBhY2UudHJpZ2dlcignZG9uZScpO1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBiYXIuZmluaXNoKCk7XG4gICAgICAgICAgUGFjZS5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIFBhY2UudHJpZ2dlcignaGlkZScpO1xuICAgICAgICB9LCBNYXRoLm1heChvcHRpb25zLmdob3N0VGltZSwgTWF0aC5tYXgob3B0aW9ucy5taW5UaW1lIC0gKG5vdygpIC0gc3RhcnQpLCAwKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVucXVldWVOZXh0RnJhbWUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBQYWNlLnN0YXJ0ID0gZnVuY3Rpb24oX29wdGlvbnMpIHtcbiAgICBleHRlbmQob3B0aW9ucywgX29wdGlvbnMpO1xuICAgIFBhY2UucnVubmluZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGJhci5yZW5kZXIoKTtcbiAgICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAgIE5vVGFyZ2V0RXJyb3IgPSBfZXJyb3I7XG4gICAgfVxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhY2UnKSkge1xuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoUGFjZS5zdGFydCwgNTApO1xuICAgIH0gZWxzZSB7XG4gICAgICBQYWNlLnRyaWdnZXIoJ3N0YXJ0Jyk7XG4gICAgICByZXR1cm4gUGFjZS5nbygpO1xuICAgIH1cbiAgfTtcblxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsncGFjZSddLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBQYWNlO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gUGFjZTtcbiAgfSBlbHNlIHtcbiAgICBpZiAob3B0aW9ucy5zdGFydE9uUGFnZUxvYWQpIHtcbiAgICAgIFBhY2Uuc3RhcnQoKTtcbiAgICB9XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcbiIsImpRdWVyeShmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8gRmxleHkgaGVhZGVyXG4gICAgZmxleHlfaGVhZGVyLmluaXQoKTtcblxuICAgIC8vIFNpZHJcbiAgICAkKCcuc2xpbmt5LW1lbnUnKVxuICAgICAgICAuZmluZCgndWwsIGxpLCBhJylcbiAgICAgICAgLnJlbW92ZUNsYXNzKCk7XG5cbiAgICAkKCcuc2lkci10b2dnbGUtLXJpZ2h0Jykuc2lkcih7XG4gICAgICAgIG5hbWU6ICdzaWRyLW1haW4nLFxuICAgICAgICBzaWRlOiAncmlnaHQnLFxuICAgICAgICByZW5hbWluZzogZmFsc2UsXG4gICAgICAgIGJvZHk6ICcubGF5b3V0X193cmFwcGVyJyxcbiAgICAgICAgc291cmNlOiAnLnNpZHItc291cmNlLXByb3ZpZGVyJ1xuICAgIH0pO1xuXG4gICAgLy8gU2xpbmt5XG4gICAgJCgnLnNpZHIgLnNsaW5reS1tZW51Jykuc2xpbmt5KHtcbiAgICAgICAgdGl0bGU6IHRydWUsXG4gICAgICAgIGxhYmVsOiAnJ1xuICAgIH0pO1xuXG4gICAgLy8gRW5hYmxlIC8gZGlzYWJsZSBCb290c3RyYXAgdG9vbHRpcHMsIGJhc2VkIHVwb24gdG91Y2ggZXZlbnRzXG4gICAgaWYoTW9kZXJuaXpyLnRvdWNoZXZlbnRzKSB7XG4gICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCdoaWRlJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuICAgIH1cblxuICAgIC8vIEZsZXh5IGhlYWRlciBmb3JtXG4gICAgZnVuY3Rpb24gX3NldF9mbGV4eV9oZWFkZXJfZm9ybV9wb3NpdGlvbigpIHtcbiAgICAgICAgbGV0ICRmb3JtID0gJCgnLmZsZXh5LWhlYWRlcl9fZm9ybScpLFxuICAgICAgICAgICAgb3ZlcmxhcF93aWR0aCA9IDEyNSwgLy8gaW4gcGl4ZWxzIChhbHNvIHNldCBpbiBDU1MpXG4gICAgICAgICAgICB3aW5kb3dfd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKSxcbiAgICAgICAgICAgIGNvbnRhaW5lcl93aWR0aCA9ICQoJy5mbGV4eS1oZWFkZXJfX3Jvdy0tc2Vjb25kID4gLmNvbnRhaW5lcicpLm91dGVyV2lkdGgoKSxcbiAgICAgICAgICAgIGRpZmYgPSAoKHdpbmRvd193aWR0aCAtIGNvbnRhaW5lcl93aWR0aCkgLyAyKTtcblxuICAgICAgICAkZm9ybS5jc3MoJ3dpZHRoJywgKGRpZmYgKyBvdmVybGFwX3dpZHRoKSk7XG4gICAgfVxuICAgIF9zZXRfZmxleHlfaGVhZGVyX2Zvcm1fcG9zaXRpb24oKTtcblxuICAgIC8vIFJlY2FsY3VsYXRlIHdpZHRoIG9mIGZvcm0gd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKXtcbiAgICAgICAgX3NldF9mbGV4eV9oZWFkZXJfZm9ybV9wb3NpdGlvbigpO1xuICAgIH0pO1xuXG4gICAgJCgnLmFjY29yZGlvbl9faGVhZGluZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGxldCAkZWxlbWVudCA9ICQodGhpcyksXG4gICAgICAgICAgICAkcGFyZW50ID0gJGVsZW1lbnQucGFyZW50cygnLmFjY29yZGlvbicpO1xuXG4gICAgICAgICRwYXJlbnQudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICB9KTtcbn0pO1xuIl19
