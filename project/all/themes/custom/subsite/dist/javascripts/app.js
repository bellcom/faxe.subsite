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
'use strict';

jQuery(document).ready(function ($) {

    /*
     * jQuery simple and accessible hide-show system (collapsible regions), using ARIA
     * @version v1.8.0   
     * Website: https://a11y.nicolas-hoffmann.net/hide-show/
     * License MIT: https://github.com/nico3333fr/jquery-accessible-hide-show-aria/blob/master/LICENSE
     */
    // loading expand paragraphs
    // these are recommended settings by a11y experts. You may update to fulfill your needs, but be sure of what you’re doing.
    var attr_control = 'data-controls',
        attr_expanded = 'aria-expanded',
        attr_labelledby = 'data-labelledby',
        attr_hidden = 'data-hidden',
        $expandmore = $('.js-expandmore'),
        $body = $('body'),
        delay = 1500,
        hash = window.location.hash.replace("#", ""),
        multiexpandable = true,
        expand_all_text = 'Expand All',
        collapse_all_text = 'Collapse All';

    if ($expandmore.length) {
        // if there are at least one :)
        $expandmore.each(function (index_to_expand) {
            var $this = $(this),
                index_lisible = index_to_expand + 1,
                options = $this.data(),
                $hideshow_prefix_classes = typeof options.hideshowPrefixClass !== 'undefined' ? options.hideshowPrefixClass + '-' : '',
                $to_expand = $this.next(".js-to_expand"),
                $expandmore_text = $this.html();

            $this.html('<button type="button" class="' + $hideshow_prefix_classes + 'expandmore__button js-expandmore-button"><span class="' + $hideshow_prefix_classes + 'expandmore__symbol" aria-hidden="true"></span>' + $expandmore_text + '</button>');
            var $button = $this.children('.js-expandmore-button');

            $to_expand.addClass($hideshow_prefix_classes + 'expandmore__to_expand').stop().delay(delay).queue(function () {
                var $this = $(this);
                if ($this.hasClass('js-first_load')) {
                    $this.removeClass('js-first_load');
                }
            });

            $button.attr('id', 'label_expand_' + index_lisible);
            $button.attr(attr_control, 'expand_' + index_lisible);
            $button.attr(attr_expanded, 'false');

            $to_expand.attr('id', 'expand_' + index_lisible);
            $to_expand.attr(attr_hidden, 'true');
            $to_expand.attr(attr_labelledby, 'label_expand_' + index_lisible);

            // quick tip to open (if it has class is-opened or if hash is in expand)
            if ($to_expand.hasClass('is-opened') || hash !== "" && $to_expand.find($("#" + hash)).length) {
                $button.addClass('is-opened').attr(attr_expanded, 'true');
                $to_expand.removeClass('is-opened').removeAttr(attr_hidden);
            }
        });
    }

    $body.on('click', '.js-expandmore-button', function (event) {
        var $this = $(this),
            $destination = $('#' + $this.attr(attr_control));

        if ($this.attr(attr_expanded) === 'false') {

            if (multiexpandable === false) {
                $('.js-expandmore-button').removeClass('is-opened').attr(attr_expanded, 'false');
                $('.js-to_expand').attr(attr_hidden, 'true');
            }

            $this.addClass('is-opened').attr(attr_expanded, 'true');
            $destination.removeAttr(attr_hidden);
        } else {
            $this.removeClass('is-opened').attr(attr_expanded, 'false');
            $destination.attr(attr_hidden, 'true');
        }

        event.preventDefault();
    });

    $body.on('click keydown', '.js-expandmore', function (event) {
        var $this = $(this),
            $target = $(event.target),
            $button_in = $this.find('.js-expandmore-button');

        if (!$target.is($button_in) && !$target.closest($button_in).length) {

            if (event.type === 'click') {
                $button_in.trigger('click');
                return false;
            }
            if (event.type === 'keydown' && (event.keyCode === 13 || event.keyCode === 32)) {
                $button_in.trigger('click');
                return false;
            }
        }
    });

    $body.on('click keydown', '.js-expandmore-all', function (event) {
        var $this = $(this),
            is_expanded = $this.attr('data-expand'),
            $all_buttons = $('.js-expandmore-button'),
            $all_destinations = $('.js-to_expand');

        if (event.type === 'click' || event.type === 'keydown' && (event.keyCode === 13 || event.keyCode === 32)) {
            if (is_expanded === 'true') {

                $all_buttons.addClass('is-opened').attr(attr_expanded, 'true');
                $all_destinations.removeAttr(attr_hidden);
                $this.attr('data-expand', 'false').html(collapse_all_text);
            } else {
                $all_buttons.removeClass('is-opened').attr(attr_expanded, 'false');
                $all_destinations.attr(attr_hidden, 'true');
                $this.attr('data-expand', 'true').html(expand_all_text);
            }
        }
    });
});
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

        console.log('Window width:' + window_width);
        console.log('Container width:' + container_width);
        console.log('Diff:' + diff);

        $form.css('width', diff + overlap_width);
    }
    _set_flexy_header_form_position();

    // Recalculate width of form when window is resized
    $(window).on('resize', function () {
        _set_flexy_header_form_position();
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5qcyIsImZsZXh5LWhlYWRlci5qcyIsImZsZXh5LW5hdmlnYXRpb24uanMiLCJqcXVlcnkuc2lkci5qcyIsImpxdWVyeS1hY2Nlc3NpYmxlLWhpZGUtc2hvdy1hcmlhLmpzIiwianF1ZXJ5LnNsaW5reS5qcyIsInBhY2UuanMiLCJhcHAuanMiXSwibmFtZXMiOlsialF1ZXJ5IiwiRXJyb3IiLCIkIiwidmVyc2lvbiIsImZuIiwianF1ZXJ5Iiwic3BsaXQiLCJ0cmFuc2l0aW9uRW5kIiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0cmFuc0VuZEV2ZW50TmFtZXMiLCJXZWJraXRUcmFuc2l0aW9uIiwiTW96VHJhbnNpdGlvbiIsIk9UcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsIm5hbWUiLCJzdHlsZSIsInVuZGVmaW5lZCIsImVuZCIsImVtdWxhdGVUcmFuc2l0aW9uRW5kIiwiZHVyYXRpb24iLCJjYWxsZWQiLCIkZWwiLCJvbmUiLCJjYWxsYmFjayIsInRyaWdnZXIiLCJzdXBwb3J0Iiwic2V0VGltZW91dCIsImV2ZW50Iiwic3BlY2lhbCIsImJzVHJhbnNpdGlvbkVuZCIsImJpbmRUeXBlIiwiZGVsZWdhdGVUeXBlIiwiaGFuZGxlIiwiZSIsInRhcmdldCIsImlzIiwiaGFuZGxlT2JqIiwiaGFuZGxlciIsImFwcGx5IiwiYXJndW1lbnRzIiwiZGlzbWlzcyIsIkFsZXJ0Iiwib24iLCJjbG9zZSIsIlZFUlNJT04iLCJUUkFOU0lUSU9OX0RVUkFUSU9OIiwicHJvdG90eXBlIiwiJHRoaXMiLCJzZWxlY3RvciIsImF0dHIiLCJyZXBsYWNlIiwiJHBhcmVudCIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwiY2xvc2VzdCIsIkV2ZW50IiwiaXNEZWZhdWx0UHJldmVudGVkIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVFbGVtZW50IiwiZGV0YWNoIiwicmVtb3ZlIiwiaGFzQ2xhc3MiLCJQbHVnaW4iLCJvcHRpb24iLCJlYWNoIiwiZGF0YSIsImNhbGwiLCJvbGQiLCJhbGVydCIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsIkJ1dHRvbiIsImVsZW1lbnQiLCJvcHRpb25zIiwiJGVsZW1lbnQiLCJleHRlbmQiLCJERUZBVUxUUyIsImlzTG9hZGluZyIsImxvYWRpbmdUZXh0Iiwic2V0U3RhdGUiLCJzdGF0ZSIsImQiLCJ2YWwiLCJyZXNldFRleHQiLCJwcm94eSIsImFkZENsYXNzIiwicHJvcCIsInJlbW92ZUF0dHIiLCJ0b2dnbGUiLCJjaGFuZ2VkIiwiJGlucHV0IiwiZmluZCIsInRvZ2dsZUNsYXNzIiwiYnV0dG9uIiwiJGJ0biIsImZpcnN0IiwidGVzdCIsInR5cGUiLCJDYXJvdXNlbCIsIiRpbmRpY2F0b3JzIiwicGF1c2VkIiwic2xpZGluZyIsImludGVydmFsIiwiJGFjdGl2ZSIsIiRpdGVtcyIsImtleWJvYXJkIiwia2V5ZG93biIsInBhdXNlIiwiZG9jdW1lbnRFbGVtZW50IiwiY3ljbGUiLCJ3cmFwIiwidGFnTmFtZSIsIndoaWNoIiwicHJldiIsIm5leHQiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJnZXRJdGVtSW5kZXgiLCJpdGVtIiwicGFyZW50IiwiY2hpbGRyZW4iLCJpbmRleCIsImdldEl0ZW1Gb3JEaXJlY3Rpb24iLCJkaXJlY3Rpb24iLCJhY3RpdmUiLCJhY3RpdmVJbmRleCIsIndpbGxXcmFwIiwiZGVsdGEiLCJpdGVtSW5kZXgiLCJlcSIsInRvIiwicG9zIiwidGhhdCIsInNsaWRlIiwiJG5leHQiLCJpc0N5Y2xpbmciLCJyZWxhdGVkVGFyZ2V0Iiwic2xpZGVFdmVudCIsIiRuZXh0SW5kaWNhdG9yIiwic2xpZEV2ZW50Iiwib2Zmc2V0V2lkdGgiLCJqb2luIiwiYWN0aW9uIiwiY2Fyb3VzZWwiLCJjbGlja0hhbmRsZXIiLCJocmVmIiwiJHRhcmdldCIsInNsaWRlSW5kZXgiLCJ3aW5kb3ciLCIkY2Fyb3VzZWwiLCJDb2xsYXBzZSIsIiR0cmlnZ2VyIiwiaWQiLCJ0cmFuc2l0aW9uaW5nIiwiZ2V0UGFyZW50IiwiYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzIiwiZGltZW5zaW9uIiwiaGFzV2lkdGgiLCJzaG93IiwiYWN0aXZlc0RhdGEiLCJhY3RpdmVzIiwic3RhcnRFdmVudCIsImNvbXBsZXRlIiwic2Nyb2xsU2l6ZSIsImNhbWVsQ2FzZSIsImhpZGUiLCJvZmZzZXRIZWlnaHQiLCJpIiwiZ2V0VGFyZ2V0RnJvbVRyaWdnZXIiLCJpc09wZW4iLCJjb2xsYXBzZSIsImJhY2tkcm9wIiwiRHJvcGRvd24iLCJjbGVhck1lbnVzIiwiY29udGFpbnMiLCJpc0FjdGl2ZSIsImluc2VydEFmdGVyIiwic3RvcFByb3BhZ2F0aW9uIiwiZGVzYyIsImRyb3Bkb3duIiwiTW9kYWwiLCIkYm9keSIsImJvZHkiLCIkZGlhbG9nIiwiJGJhY2tkcm9wIiwiaXNTaG93biIsIm9yaWdpbmFsQm9keVBhZCIsInNjcm9sbGJhcldpZHRoIiwiaWdub3JlQmFja2Ryb3BDbGljayIsInJlbW90ZSIsImxvYWQiLCJCQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OIiwiX3JlbGF0ZWRUYXJnZXQiLCJjaGVja1Njcm9sbGJhciIsInNldFNjcm9sbGJhciIsImVzY2FwZSIsInJlc2l6ZSIsImFwcGVuZFRvIiwic2Nyb2xsVG9wIiwiYWRqdXN0RGlhbG9nIiwiZW5mb3JjZUZvY3VzIiwib2ZmIiwiaGlkZU1vZGFsIiwiaGFzIiwiaGFuZGxlVXBkYXRlIiwicmVzZXRBZGp1c3RtZW50cyIsInJlc2V0U2Nyb2xsYmFyIiwicmVtb3ZlQmFja2Ryb3AiLCJhbmltYXRlIiwiZG9BbmltYXRlIiwiY3VycmVudFRhcmdldCIsImZvY3VzIiwiY2FsbGJhY2tSZW1vdmUiLCJtb2RhbElzT3ZlcmZsb3dpbmciLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjc3MiLCJwYWRkaW5nTGVmdCIsImJvZHlJc092ZXJmbG93aW5nIiwicGFkZGluZ1JpZ2h0IiwiZnVsbFdpbmRvd1dpZHRoIiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyaWdodCIsIk1hdGgiLCJhYnMiLCJsZWZ0IiwiY2xpZW50V2lkdGgiLCJtZWFzdXJlU2Nyb2xsYmFyIiwiYm9keVBhZCIsInBhcnNlSW50Iiwic2Nyb2xsRGl2IiwiY2xhc3NOYW1lIiwiYXBwZW5kIiwicmVtb3ZlQ2hpbGQiLCJtb2RhbCIsInNob3dFdmVudCIsIlRvb2x0aXAiLCJlbmFibGVkIiwidGltZW91dCIsImhvdmVyU3RhdGUiLCJpblN0YXRlIiwiaW5pdCIsImFuaW1hdGlvbiIsInBsYWNlbWVudCIsInRlbXBsYXRlIiwidGl0bGUiLCJkZWxheSIsImh0bWwiLCJjb250YWluZXIiLCJ2aWV3cG9ydCIsInBhZGRpbmciLCJnZXRPcHRpb25zIiwiJHZpZXdwb3J0IiwiaXNGdW5jdGlvbiIsImNsaWNrIiwiaG92ZXIiLCJjb25zdHJ1Y3RvciIsInRyaWdnZXJzIiwiZXZlbnRJbiIsImV2ZW50T3V0IiwiZW50ZXIiLCJsZWF2ZSIsIl9vcHRpb25zIiwiZml4VGl0bGUiLCJnZXREZWZhdWx0cyIsImdldERlbGVnYXRlT3B0aW9ucyIsImRlZmF1bHRzIiwia2V5IiwidmFsdWUiLCJvYmoiLCJzZWxmIiwidGlwIiwiY2xlYXJUaW1lb3V0IiwiaXNJblN0YXRlVHJ1ZSIsImhhc0NvbnRlbnQiLCJpbkRvbSIsIm93bmVyRG9jdW1lbnQiLCIkdGlwIiwidGlwSWQiLCJnZXRVSUQiLCJzZXRDb250ZW50IiwiYXV0b1Rva2VuIiwiYXV0b1BsYWNlIiwidG9wIiwiZGlzcGxheSIsImdldFBvc2l0aW9uIiwiYWN0dWFsV2lkdGgiLCJhY3R1YWxIZWlnaHQiLCJvcmdQbGFjZW1lbnQiLCJ2aWV3cG9ydERpbSIsImJvdHRvbSIsIndpZHRoIiwiY2FsY3VsYXRlZE9mZnNldCIsImdldENhbGN1bGF0ZWRPZmZzZXQiLCJhcHBseVBsYWNlbWVudCIsInByZXZIb3ZlclN0YXRlIiwib2Zmc2V0IiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImlzTmFOIiwic2V0T2Zmc2V0IiwidXNpbmciLCJwcm9wcyIsInJvdW5kIiwiZ2V0Vmlld3BvcnRBZGp1c3RlZERlbHRhIiwiaXNWZXJ0aWNhbCIsImFycm93RGVsdGEiLCJhcnJvd09mZnNldFBvc2l0aW9uIiwicmVwbGFjZUFycm93IiwiYXJyb3ciLCJnZXRUaXRsZSIsIiRlIiwiaXNCb2R5IiwiZWxSZWN0IiwiaXNTdmciLCJTVkdFbGVtZW50IiwiZWxPZmZzZXQiLCJzY3JvbGwiLCJvdXRlckRpbXMiLCJ2aWV3cG9ydFBhZGRpbmciLCJ2aWV3cG9ydERpbWVuc2lvbnMiLCJ0b3BFZGdlT2Zmc2V0IiwiYm90dG9tRWRnZU9mZnNldCIsImxlZnRFZGdlT2Zmc2V0IiwicmlnaHRFZGdlT2Zmc2V0IiwibyIsInByZWZpeCIsInJhbmRvbSIsImdldEVsZW1lbnRCeUlkIiwiJGFycm93IiwiZW5hYmxlIiwiZGlzYWJsZSIsInRvZ2dsZUVuYWJsZWQiLCJkZXN0cm95IiwicmVtb3ZlRGF0YSIsInRvb2x0aXAiLCJQb3BvdmVyIiwiY29udGVudCIsImdldENvbnRlbnQiLCJwb3BvdmVyIiwiU2Nyb2xsU3B5IiwiJHNjcm9sbEVsZW1lbnQiLCJvZmZzZXRzIiwidGFyZ2V0cyIsImFjdGl2ZVRhcmdldCIsInByb2Nlc3MiLCJyZWZyZXNoIiwiZ2V0U2Nyb2xsSGVpZ2h0IiwibWF4Iiwib2Zmc2V0TWV0aG9kIiwib2Zmc2V0QmFzZSIsImlzV2luZG93IiwibWFwIiwiJGhyZWYiLCJzb3J0IiwiYSIsImIiLCJwdXNoIiwibWF4U2Nyb2xsIiwiYWN0aXZhdGUiLCJjbGVhciIsInBhcmVudHMiLCJwYXJlbnRzVW50aWwiLCJzY3JvbGxzcHkiLCIkc3B5IiwiVGFiIiwiJHVsIiwiJHByZXZpb3VzIiwiaGlkZUV2ZW50IiwidGFiIiwiQWZmaXgiLCJjaGVja1Bvc2l0aW9uIiwiY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3AiLCJhZmZpeGVkIiwidW5waW4iLCJwaW5uZWRPZmZzZXQiLCJSRVNFVCIsImdldFN0YXRlIiwib2Zmc2V0VG9wIiwib2Zmc2V0Qm90dG9tIiwicG9zaXRpb24iLCJ0YXJnZXRIZWlnaHQiLCJpbml0aWFsaXppbmciLCJjb2xsaWRlclRvcCIsImNvbGxpZGVySGVpZ2h0IiwiZ2V0UGlubmVkT2Zmc2V0IiwiYWZmaXgiLCJhZmZpeFR5cGUiLCJmbGV4eV9oZWFkZXIiLCJwdWIiLCIkaGVhZGVyX3N0YXRpYyIsIiRoZWFkZXJfc3RpY2t5IiwidXBkYXRlX2ludGVydmFsIiwidG9sZXJhbmNlIiwidXB3YXJkIiwiZG93bndhcmQiLCJfZ2V0X29mZnNldF9mcm9tX2VsZW1lbnRzX2JvdHRvbSIsImNsYXNzZXMiLCJwaW5uZWQiLCJ1bnBpbm5lZCIsIndhc19zY3JvbGxlZCIsImxhc3RfZGlzdGFuY2VfZnJvbV90b3AiLCJyZWdpc3RlckV2ZW50SGFuZGxlcnMiLCJyZWdpc3RlckJvb3RFdmVudEhhbmRsZXJzIiwiZG9jdW1lbnRfd2FzX3Njcm9sbGVkIiwiZWxlbWVudF9oZWlnaHQiLCJvdXRlckhlaWdodCIsImVsZW1lbnRfb2Zmc2V0IiwiY3VycmVudF9kaXN0YW5jZV9mcm9tX3RvcCIsImZsZXh5X25hdmlnYXRpb24iLCJsYXlvdXRfY2xhc3NlcyIsInVwZ3JhZGUiLCIkbmF2aWdhdGlvbnMiLCJuYXZpZ2F0aW9uIiwiJG5hdmlnYXRpb24iLCIkbWVnYW1lbnVzIiwiZHJvcGRvd25fbWVnYW1lbnUiLCIkZHJvcGRvd25fbWVnYW1lbnUiLCJkcm9wZG93bl9oYXNfbWVnYW1lbnUiLCJpc191cGdyYWRlZCIsIm5hdmlnYXRpb25faGFzX21lZ2FtZW51IiwiJG1lZ2FtZW51IiwiaGFzX29iZnVzY2F0b3IiLCJvYmZ1c2NhdG9yIiwiYmFiZWxIZWxwZXJzIiwiY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIlR5cGVFcnJvciIsImNyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInNpZHJTdGF0dXMiLCJtb3ZpbmciLCJvcGVuZWQiLCJoZWxwZXIiLCJpc1VybCIsInN0ciIsInBhdHRlcm4iLCJSZWdFeHAiLCJhZGRQcmVmaXhlcyIsImFkZFByZWZpeCIsImF0dHJpYnV0ZSIsInRvUmVwbGFjZSIsInRyYW5zaXRpb25zIiwic3VwcG9ydGVkIiwicHJvcGVydHkiLCJwcmVmaXhlcyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyIiwidG9Mb3dlckNhc2UiLCIkJDIiLCJib2R5QW5pbWF0aW9uQ2xhc3MiLCJvcGVuQWN0aW9uIiwiY2xvc2VBY3Rpb24iLCJ0cmFuc2l0aW9uRW5kRXZlbnQiLCJNZW51Iiwib3BlbkNsYXNzIiwibWVudVdpZHRoIiwib3V0ZXJXaWR0aCIsInNwZWVkIiwic2lkZSIsImRpc3BsYWNlIiwidGltaW5nIiwibWV0aG9kIiwib25PcGVuQ2FsbGJhY2siLCJvbkNsb3NlQ2FsbGJhY2siLCJvbk9wZW5FbmRDYWxsYmFjayIsIm9uQ2xvc2VFbmRDYWxsYmFjayIsImdldEFuaW1hdGlvbiIsInByZXBhcmVCb2R5IiwiJGh0bWwiLCJvcGVuQm9keSIsImJvZHlBbmltYXRpb24iLCJxdWV1ZSIsIm9uQ2xvc2VCb2R5IiwicmVzZXRTdHlsZXMiLCJ1bmJpbmQiLCJjbG9zZUJvZHkiLCJfdGhpcyIsIm1vdmVCb2R5Iiwib25PcGVuTWVudSIsIm9wZW5NZW51IiwiX3RoaXMyIiwiJGl0ZW0iLCJtZW51QW5pbWF0aW9uIiwib25DbG9zZU1lbnUiLCJjbG9zZU1lbnUiLCJfdGhpczMiLCJtb3ZlTWVudSIsIm1vdmUiLCJvcGVuIiwiX3RoaXM0IiwiYWxyZWFkeU9wZW5lZE1lbnUiLCIkJDEiLCJleGVjdXRlIiwic2lkciIsImVycm9yIiwicHVibGljTWV0aG9kcyIsIm1ldGhvZE5hbWUiLCJtZXRob2RzIiwiZ2V0TWV0aG9kIiwiQXJyYXkiLCJzbGljZSIsIiQkMyIsImZpbGxDb250ZW50IiwiJHNpZGVNZW51Iiwic2V0dGluZ3MiLCJzb3VyY2UiLCJuZXdDb250ZW50IiwiZ2V0IiwiaHRtbENvbnRlbnQiLCJzZWxlY3RvcnMiLCJyZW5hbWluZyIsIiRodG1sQ29udGVudCIsImZuU2lkciIsImJpbmQiLCJvbk9wZW4iLCJvbkNsb3NlIiwib25PcGVuRW5kIiwib25DbG9zZUVuZCIsImZsYWciLCJyZWFkeSIsImF0dHJfY29udHJvbCIsImF0dHJfZXhwYW5kZWQiLCJhdHRyX2xhYmVsbGVkYnkiLCJhdHRyX2hpZGRlbiIsIiRleHBhbmRtb3JlIiwiaGFzaCIsImxvY2F0aW9uIiwibXVsdGlleHBhbmRhYmxlIiwiZXhwYW5kX2FsbF90ZXh0IiwiY29sbGFwc2VfYWxsX3RleHQiLCJpbmRleF90b19leHBhbmQiLCJpbmRleF9saXNpYmxlIiwiJGhpZGVzaG93X3ByZWZpeF9jbGFzc2VzIiwiaGlkZXNob3dQcmVmaXhDbGFzcyIsIiR0b19leHBhbmQiLCIkZXhwYW5kbW9yZV90ZXh0IiwiJGJ1dHRvbiIsInN0b3AiLCIkZGVzdGluYXRpb24iLCIkYnV0dG9uX2luIiwia2V5Q29kZSIsImlzX2V4cGFuZGVkIiwiJGFsbF9idXR0b25zIiwiJGFsbF9kZXN0aW5hdGlvbnMiLCJ0Iiwic2xpbmt5IiwicyIsImxhYmVsIiwibiIsInIiLCJsIiwicHJlcGVuZCIsInRleHQiLCJEYXRlIiwibm93IiwianVtcCIsImhvbWUiLCJjIiwiQWpheE1vbml0b3IiLCJCYXIiLCJEb2N1bWVudE1vbml0b3IiLCJFbGVtZW50TW9uaXRvciIsIkVsZW1lbnRUcmFja2VyIiwiRXZlbnRMYWdNb25pdG9yIiwiRXZlbnRlZCIsIkV2ZW50cyIsIk5vVGFyZ2V0RXJyb3IiLCJQYWNlIiwiUmVxdWVzdEludGVyY2VwdCIsIlNPVVJDRV9LRVlTIiwiU2NhbGVyIiwiU29ja2V0UmVxdWVzdFRyYWNrZXIiLCJYSFJSZXF1ZXN0VHJhY2tlciIsImF2Z0FtcGxpdHVkZSIsImJhciIsImNhbmNlbEFuaW1hdGlvbiIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGVmYXVsdE9wdGlvbnMiLCJleHRlbmROYXRpdmUiLCJnZXRGcm9tRE9NIiwiZ2V0SW50ZXJjZXB0IiwiaGFuZGxlUHVzaFN0YXRlIiwiaWdub3JlU3RhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXN1bHQiLCJydW5BbmltYXRpb24iLCJzY2FsZXJzIiwic2hvdWxkSWdub3JlVVJMIiwic2hvdWxkVHJhY2siLCJzb3VyY2VzIiwidW5pU2NhbGVyIiwiX1dlYlNvY2tldCIsIl9YRG9tYWluUmVxdWVzdCIsIl9YTUxIdHRwUmVxdWVzdCIsIl9pIiwiX2ludGVyY2VwdCIsIl9sZW4iLCJfcHVzaFN0YXRlIiwiX3JlZiIsIl9yZWYxIiwiX3JlcGxhY2VTdGF0ZSIsIl9fc2xpY2UiLCJfX2hhc1Byb3AiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fZXh0ZW5kcyIsImNoaWxkIiwiY3RvciIsIl9fc3VwZXJfXyIsIl9faW5kZXhPZiIsImluZGV4T2YiLCJjYXRjaHVwVGltZSIsImluaXRpYWxSYXRlIiwibWluVGltZSIsImdob3N0VGltZSIsIm1heFByb2dyZXNzUGVyRnJhbWUiLCJlYXNlRmFjdG9yIiwic3RhcnRPblBhZ2VMb2FkIiwicmVzdGFydE9uUHVzaFN0YXRlIiwicmVzdGFydE9uUmVxdWVzdEFmdGVyIiwiZWxlbWVudHMiLCJjaGVja0ludGVydmFsIiwiZXZlbnRMYWciLCJtaW5TYW1wbGVzIiwic2FtcGxlQ291bnQiLCJsYWdUaHJlc2hvbGQiLCJhamF4IiwidHJhY2tNZXRob2RzIiwidHJhY2tXZWJTb2NrZXRzIiwiaWdub3JlVVJMcyIsInBlcmZvcm1hbmNlIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsImxhc3QiLCJ0aWNrIiwiZGlmZiIsImFyZ3MiLCJvdXQiLCJhcnIiLCJjb3VudCIsInN1bSIsInYiLCJqc29uIiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsIkpTT04iLCJwYXJzZSIsIl9lcnJvciIsImNvbnNvbGUiLCJjdHgiLCJvbmNlIiwiX2Jhc2UiLCJiaW5kaW5ncyIsIl9yZXN1bHRzIiwic3BsaWNlIiwicGFjZU9wdGlvbnMiLCJfc3VwZXIiLCJwcm9ncmVzcyIsImdldEVsZW1lbnQiLCJ0YXJnZXRFbGVtZW50IiwiaW5uZXJIVE1MIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwiZmluaXNoIiwidXBkYXRlIiwicHJvZyIsInJlbmRlciIsInBhcmVudE5vZGUiLCJwcm9ncmVzc1N0ciIsInRyYW5zZm9ybSIsIl9qIiwiX2xlbjEiLCJfcmVmMiIsImxhc3RSZW5kZXJlZFByb2dyZXNzIiwic2V0QXR0cmlidXRlIiwiZG9uZSIsImJpbmRpbmciLCJYTUxIdHRwUmVxdWVzdCIsIlhEb21haW5SZXF1ZXN0IiwiV2ViU29ja2V0IiwiZnJvbSIsImlnbm9yZSIsInJldCIsInVuc2hpZnQiLCJzaGlmdCIsInRyYWNrIiwibW9uaXRvclhIUiIsInJlcSIsIl9vcGVuIiwidXJsIiwiYXN5bmMiLCJyZXF1ZXN0IiwiZmxhZ3MiLCJwcm90b2NvbHMiLCJfYXJnIiwiYWZ0ZXIiLCJydW5uaW5nIiwic3RpbGxBY3RpdmUiLCJfcmVmMyIsInJlYWR5U3RhdGUiLCJyZXN0YXJ0Iiwid2F0Y2giLCJ0cmFja2VyIiwic2l6ZSIsIl9vbnJlYWR5c3RhdGVjaGFuZ2UiLCJQcm9ncmVzc0V2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsImxlbmd0aENvbXB1dGFibGUiLCJsb2FkZWQiLCJ0b3RhbCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsImNoZWNrIiwic3RhdGVzIiwibG9hZGluZyIsImludGVyYWN0aXZlIiwiYXZnIiwicG9pbnRzIiwic2FtcGxlcyIsInNpbmNlTGFzdFVwZGF0ZSIsInJhdGUiLCJjYXRjaHVwIiwibGFzdFByb2dyZXNzIiwiZnJhbWVUaW1lIiwic2NhbGluZyIsInBvdyIsIm1pbiIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJyZXBsYWNlU3RhdGUiLCJfayIsIl9sZW4yIiwiX3JlZjQiLCJleHRyYVNvdXJjZXMiLCJzdGFydCIsImdvIiwiZW5xdWV1ZU5leHRGcmFtZSIsImoiLCJyZW1haW5pbmciLCJzY2FsZXIiLCJzY2FsZXJMaXN0IiwiZGVmaW5lIiwiYW1kIiwiZXhwb3J0cyIsIm1vZHVsZSIsIk1vZGVybml6ciIsInRvdWNoZXZlbnRzIiwiX3NldF9mbGV4eV9oZWFkZXJfZm9ybV9wb3NpdGlvbiIsIiRmb3JtIiwib3ZlcmxhcF93aWR0aCIsIndpbmRvd193aWR0aCIsImNvbnRhaW5lcl93aWR0aCIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7QUFNQSxJQUFJLE9BQU9BLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakMsUUFBTSxJQUFJQyxLQUFKLENBQVUseUNBQVYsQ0FBTjtBQUNEOztBQUVELENBQUMsVUFBVUMsQ0FBVixFQUFhO0FBQ1o7O0FBQ0EsTUFBSUMsVUFBVUQsRUFBRUUsRUFBRixDQUFLQyxNQUFMLENBQVlDLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsRUFBMEJBLEtBQTFCLENBQWdDLEdBQWhDLENBQWQ7QUFDQSxNQUFLSCxRQUFRLENBQVIsSUFBYSxDQUFiLElBQWtCQSxRQUFRLENBQVIsSUFBYSxDQUFoQyxJQUF1Q0EsUUFBUSxDQUFSLEtBQWMsQ0FBZCxJQUFtQkEsUUFBUSxDQUFSLEtBQWMsQ0FBakMsSUFBc0NBLFFBQVEsQ0FBUixJQUFhLENBQTFGLElBQWlHQSxRQUFRLENBQVIsSUFBYSxDQUFsSCxFQUFzSDtBQUNwSCxVQUFNLElBQUlGLEtBQUosQ0FBVSwyRkFBVixDQUFOO0FBQ0Q7QUFDRixDQU5BLENBTUNELE1BTkQsQ0FBRDs7QUFRQTs7Ozs7Ozs7QUFTQSxDQUFDLFVBQVVFLENBQVYsRUFBYTtBQUNaOztBQUVBO0FBQ0E7O0FBRUEsV0FBU0ssYUFBVCxHQUF5QjtBQUN2QixR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QUFHd00sVUFBVUMsV0FBYixFQUEwQjtBQUN0Qnp2QixVQUFFLHlCQUFGLEVBQTZCa1YsT0FBN0IsQ0FBcUMsTUFBckM7QUFDSCxLQUZELE1BR0s7QUFDRGxWLFVBQUUseUJBQUYsRUFBNkJrVixPQUE3QjtBQUNIOztBQUVEO0FBQ0EsYUFBU3dhLCtCQUFULEdBQTJDO0FBQ3ZDLFlBQUlDLFFBQVEzdkIsRUFBRSxxQkFBRixDQUFaO0FBQUEsWUFDSTR2QixnQkFBZ0IsR0FEcEI7QUFBQSxZQUN5QjtBQUNyQkMsdUJBQWU3dkIsRUFBRW9KLE1BQUYsRUFBVWlKLEtBQVYsRUFGbkI7QUFBQSxZQUdJeWQsa0JBQWtCOXZCLEVBQUUseUNBQUYsRUFBNkNxZCxVQUE3QyxFQUh0QjtBQUFBLFlBSUlvTCxPQUFRLENBQUNvSCxlQUFlQyxlQUFoQixJQUFtQyxDQUovQzs7QUFNQXhHLGdCQUFReUcsR0FBUixDQUFZLGtCQUFrQkYsWUFBOUI7QUFDQXZHLGdCQUFReUcsR0FBUixDQUFZLHFCQUFxQkQsZUFBakM7QUFDQXhHLGdCQUFReUcsR0FBUixDQUFZLFVBQVV0SCxJQUF0Qjs7QUFFQWtILGNBQU1uaUIsR0FBTixDQUFVLE9BQVYsRUFBb0JpYixPQUFPbUgsYUFBM0I7QUFDSDtBQUNERjs7QUFFQTtBQUNBMXZCLE1BQUVvSixNQUFGLEVBQVUxRyxFQUFWLENBQWEsUUFBYixFQUF1QixZQUFVO0FBQzdCZ3RCO0FBQ0gsS0FGRDtBQUdILENBckREIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQm9vdHN0cmFwIHYzLjMuNyAoaHR0cDovL2dldGJvb3RzdHJhcC5jb20pXG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE2IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG5cbmlmICh0eXBlb2YgalF1ZXJ5ID09PSAndW5kZWZpbmVkJykge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnknKVxufVxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgdmVyc2lvbiA9ICQuZm4uanF1ZXJ5LnNwbGl0KCcgJylbMF0uc3BsaXQoJy4nKVxuICBpZiAoKHZlcnNpb25bMF0gPCAyICYmIHZlcnNpb25bMV0gPCA5KSB8fCAodmVyc2lvblswXSA9PSAxICYmIHZlcnNpb25bMV0gPT0gOSAmJiB2ZXJzaW9uWzJdIDwgMSkgfHwgKHZlcnNpb25bMF0gPiAzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeSB2ZXJzaW9uIDEuOS4xIG9yIGhpZ2hlciwgYnV0IGxvd2VyIHRoYW4gdmVyc2lvbiA0JylcbiAgfVxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogdHJhbnNpdGlvbi5qcyB2My4zLjdcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI3RyYW5zaXRpb25zXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTYgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gQ1NTIFRSQU5TSVRJT04gU1VQUE9SVCAoU2hvdXRvdXQ6IGh0dHA6Ly93d3cubW9kZXJuaXpyLmNvbS8pXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoKSB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm9vdHN0cmFwJylcblxuICAgIHZhciB0cmFuc0VuZEV2ZW50TmFtZXMgPSB7XG4gICAgICBXZWJraXRUcmFuc2l0aW9uIDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICAgTW96VHJhbnNpdGlvbiAgICA6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgIE9UcmFuc2l0aW9uICAgICAgOiAnb1RyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmQnLFxuICAgICAgdHJhbnNpdGlvbiAgICAgICA6ICd0cmFuc2l0aW9uZW5kJ1xuICAgIH1cblxuICAgIGZvciAodmFyIG5hbWUgaW4gdHJhbnNFbmRFdmVudE5hbWVzKSB7XG4gICAgICBpZiAoZWwuc3R5bGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4geyBlbmQ6IHRyYW5zRW5kRXZlbnROYW1lc1tuYW1lXSB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlIC8vIGV4cGxpY2l0IGZvciBpZTggKCAgLl8uKVxuICB9XG5cbiAgLy8gaHR0cDovL2Jsb2cuYWxleG1hY2Nhdy5jb20vY3NzLXRyYW5zaXRpb25zXG4gICQuZm4uZW11bGF0ZVRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICB2YXIgY2FsbGVkID0gZmFsc2VcbiAgICB2YXIgJGVsID0gdGhpc1xuICAgICQodGhpcykub25lKCdic1RyYW5zaXRpb25FbmQnLCBmdW5jdGlvbiAoKSB7IGNhbGxlZCA9IHRydWUgfSlcbiAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IGlmICghY2FsbGVkKSAkKCRlbCkudHJpZ2dlcigkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQpIH1cbiAgICBzZXRUaW1lb3V0KGNhbGxiYWNrLCBkdXJhdGlvbilcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgJChmdW5jdGlvbiAoKSB7XG4gICAgJC5zdXBwb3J0LnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uRW5kKClcblxuICAgIGlmICghJC5zdXBwb3J0LnRyYW5zaXRpb24pIHJldHVyblxuXG4gICAgJC5ldmVudC5zcGVjaWFsLmJzVHJhbnNpdGlvbkVuZCA9IHtcbiAgICAgIGJpbmRUeXBlOiAkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsXG4gICAgICBkZWxlZ2F0ZVR5cGU6ICQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCxcbiAgICAgIGhhbmRsZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLmlzKHRoaXMpKSByZXR1cm4gZS5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiBhbGVydC5qcyB2My4zLjdcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI2FsZXJ0c1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE2IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIEFMRVJUIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBkaXNtaXNzID0gJ1tkYXRhLWRpc21pc3M9XCJhbGVydFwiXSdcbiAgdmFyIEFsZXJ0ICAgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAkKGVsKS5vbignY2xpY2snLCBkaXNtaXNzLCB0aGlzLmNsb3NlKVxuICB9XG5cbiAgQWxlcnQuVkVSU0lPTiA9ICczLjMuNydcblxuICBBbGVydC5UUkFOU0lUSU9OX0RVUkFUSU9OID0gMTUwXG5cbiAgQWxlcnQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgJHRoaXMgICAgPSAkKHRoaXMpXG4gICAgdmFyIHNlbGVjdG9yID0gJHRoaXMuYXR0cignZGF0YS10YXJnZXQnKVxuXG4gICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgc2VsZWN0b3IgPSAkdGhpcy5hdHRyKCdocmVmJylcbiAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IgJiYgc2VsZWN0b3IucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLywgJycpIC8vIHN0cmlwIGZvciBpZTdcbiAgICB9XG5cbiAgICB2YXIgJHBhcmVudCA9ICQoc2VsZWN0b3IgPT09ICcjJyA/IFtdIDogc2VsZWN0b3IpXG5cbiAgICBpZiAoZSkgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBpZiAoISRwYXJlbnQubGVuZ3RoKSB7XG4gICAgICAkcGFyZW50ID0gJHRoaXMuY2xvc2VzdCgnLmFsZXJ0JylcbiAgICB9XG5cbiAgICAkcGFyZW50LnRyaWdnZXIoZSA9ICQuRXZlbnQoJ2Nsb3NlLmJzLmFsZXJ0JykpXG5cbiAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICAkcGFyZW50LnJlbW92ZUNsYXNzKCdpbicpXG5cbiAgICBmdW5jdGlvbiByZW1vdmVFbGVtZW50KCkge1xuICAgICAgLy8gZGV0YWNoIGZyb20gcGFyZW50LCBmaXJlIGV2ZW50IHRoZW4gY2xlYW4gdXAgZGF0YVxuICAgICAgJHBhcmVudC5kZXRhY2goKS50cmlnZ2VyKCdjbG9zZWQuYnMuYWxlcnQnKS5yZW1vdmUoKVxuICAgIH1cblxuICAgICQuc3VwcG9ydC50cmFuc2l0aW9uICYmICRwYXJlbnQuaGFzQ2xhc3MoJ2ZhZGUnKSA/XG4gICAgICAkcGFyZW50XG4gICAgICAgIC5vbmUoJ2JzVHJhbnNpdGlvbkVuZCcsIHJlbW92ZUVsZW1lbnQpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChBbGVydC5UUkFOU0lUSU9OX0RVUkFUSU9OKSA6XG4gICAgICByZW1vdmVFbGVtZW50KClcbiAgfVxuXG5cbiAgLy8gQUxFUlQgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBQbHVnaW4ob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgPSAkdGhpcy5kYXRhKCdicy5hbGVydCcpXG5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMuYWxlcnQnLCAoZGF0YSA9IG5ldyBBbGVydCh0aGlzKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dLmNhbGwoJHRoaXMpXG4gICAgfSlcbiAgfVxuXG4gIHZhciBvbGQgPSAkLmZuLmFsZXJ0XG5cbiAgJC5mbi5hbGVydCAgICAgICAgICAgICA9IFBsdWdpblxuICAkLmZuLmFsZXJ0LkNvbnN0cnVjdG9yID0gQWxlcnRcblxuXG4gIC8vIEFMRVJUIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi5hbGVydC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4uYWxlcnQgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBBTEVSVCBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT09PVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljay5icy5hbGVydC5kYXRhLWFwaScsIGRpc21pc3MsIEFsZXJ0LnByb3RvdHlwZS5jbG9zZSlcblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogYnV0dG9uLmpzIHYzLjMuN1xuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jYnV0dG9uc1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE2IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIEJVVFRPTiBQVUJMSUMgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgQnV0dG9uID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ICA9ICQoZWxlbWVudClcbiAgICB0aGlzLm9wdGlvbnMgICA9ICQuZXh0ZW5kKHt9LCBCdXR0b24uREVGQVVMVFMsIG9wdGlvbnMpXG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuICB9XG5cbiAgQnV0dG9uLlZFUlNJT04gID0gJzMuMy43J1xuXG4gIEJ1dHRvbi5ERUZBVUxUUyA9IHtcbiAgICBsb2FkaW5nVGV4dDogJ2xvYWRpbmcuLi4nXG4gIH1cblxuICBCdXR0b24ucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgdmFyIGQgICAgPSAnZGlzYWJsZWQnXG4gICAgdmFyICRlbCAgPSB0aGlzLiRlbGVtZW50XG4gICAgdmFyIHZhbCAgPSAkZWwuaXMoJ2lucHV0JykgPyAndmFsJyA6ICdodG1sJ1xuICAgIHZhciBkYXRhID0gJGVsLmRhdGEoKVxuXG4gICAgc3RhdGUgKz0gJ1RleHQnXG5cbiAgICBpZiAoZGF0YS5yZXNldFRleHQgPT0gbnVsbCkgJGVsLmRhdGEoJ3Jlc2V0VGV4dCcsICRlbFt2YWxdKCkpXG5cbiAgICAvLyBwdXNoIHRvIGV2ZW50IGxvb3AgdG8gYWxsb3cgZm9ybXMgdG8gc3VibWl0XG4gICAgc2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uICgpIHtcbiAgICAgICRlbFt2YWxdKGRhdGFbc3RhdGVdID09IG51bGwgPyB0aGlzLm9wdGlvbnNbc3RhdGVdIDogZGF0YVtzdGF0ZV0pXG5cbiAgICAgIGlmIChzdGF0ZSA9PSAnbG9hZGluZ1RleHQnKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZVxuICAgICAgICAkZWwuYWRkQ2xhc3MoZCkuYXR0cihkLCBkKS5wcm9wKGQsIHRydWUpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNMb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcbiAgICAgICAgJGVsLnJlbW92ZUNsYXNzKGQpLnJlbW92ZUF0dHIoZCkucHJvcChkLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9LCB0aGlzKSwgMClcbiAgfVxuXG4gIEJ1dHRvbi5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjaGFuZ2VkID0gdHJ1ZVxuICAgIHZhciAkcGFyZW50ID0gdGhpcy4kZWxlbWVudC5jbG9zZXN0KCdbZGF0YS10b2dnbGU9XCJidXR0b25zXCJdJylcblxuICAgIGlmICgkcGFyZW50Lmxlbmd0aCkge1xuICAgICAgdmFyICRpbnB1dCA9IHRoaXMuJGVsZW1lbnQuZmluZCgnaW5wdXQnKVxuICAgICAgaWYgKCRpbnB1dC5wcm9wKCd0eXBlJykgPT0gJ3JhZGlvJykge1xuICAgICAgICBpZiAoJGlucHV0LnByb3AoJ2NoZWNrZWQnKSkgY2hhbmdlZCA9IGZhbHNlXG4gICAgICAgICRwYXJlbnQuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgfSBlbHNlIGlmICgkaW5wdXQucHJvcCgndHlwZScpID09ICdjaGVja2JveCcpIHtcbiAgICAgICAgaWYgKCgkaW5wdXQucHJvcCgnY2hlY2tlZCcpKSAhPT0gdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnYWN0aXZlJykpIGNoYW5nZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLiRlbGVtZW50LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgfVxuICAgICAgJGlucHV0LnByb3AoJ2NoZWNrZWQnLCB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdhY3RpdmUnKSlcbiAgICAgIGlmIChjaGFuZ2VkKSAkaW5wdXQudHJpZ2dlcignY2hhbmdlJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLXByZXNzZWQnLCAhdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnYWN0aXZlJykpXG4gICAgICB0aGlzLiRlbGVtZW50LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxuXG5cbiAgLy8gQlVUVE9OIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIFBsdWdpbihvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgICAgPSAkdGhpcy5kYXRhKCdicy5idXR0b24nKVxuICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvblxuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLmJ1dHRvbicsIChkYXRhID0gbmV3IEJ1dHRvbih0aGlzLCBvcHRpb25zKSkpXG5cbiAgICAgIGlmIChvcHRpb24gPT0gJ3RvZ2dsZScpIGRhdGEudG9nZ2xlKClcbiAgICAgIGVsc2UgaWYgKG9wdGlvbikgZGF0YS5zZXRTdGF0ZShvcHRpb24pXG4gICAgfSlcbiAgfVxuXG4gIHZhciBvbGQgPSAkLmZuLmJ1dHRvblxuXG4gICQuZm4uYnV0dG9uICAgICAgICAgICAgID0gUGx1Z2luXG4gICQuZm4uYnV0dG9uLkNvbnN0cnVjdG9yID0gQnV0dG9uXG5cblxuICAvLyBCVVRUT04gTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi5idXR0b24ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLmJ1dHRvbiA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIEJVVFRPTiBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT09PT1cblxuICAkKGRvY3VtZW50KVxuICAgIC5vbignY2xpY2suYnMuYnV0dG9uLmRhdGEtYXBpJywgJ1tkYXRhLXRvZ2dsZV49XCJidXR0b25cIl0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyICRidG4gPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuYnRuJylcbiAgICAgIFBsdWdpbi5jYWxsKCRidG4sICd0b2dnbGUnKVxuICAgICAgaWYgKCEoJChlLnRhcmdldCkuaXMoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXSwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykpKSB7XG4gICAgICAgIC8vIFByZXZlbnQgZG91YmxlIGNsaWNrIG9uIHJhZGlvcywgYW5kIHRoZSBkb3VibGUgc2VsZWN0aW9ucyAoc28gY2FuY2VsbGF0aW9uKSBvbiBjaGVja2JveGVzXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAvLyBUaGUgdGFyZ2V0IGNvbXBvbmVudCBzdGlsbCByZWNlaXZlIHRoZSBmb2N1c1xuICAgICAgICBpZiAoJGJ0bi5pcygnaW5wdXQsYnV0dG9uJykpICRidG4udHJpZ2dlcignZm9jdXMnKVxuICAgICAgICBlbHNlICRidG4uZmluZCgnaW5wdXQ6dmlzaWJsZSxidXR0b246dmlzaWJsZScpLmZpcnN0KCkudHJpZ2dlcignZm9jdXMnKVxuICAgICAgfVxuICAgIH0pXG4gICAgLm9uKCdmb2N1cy5icy5idXR0b24uZGF0YS1hcGkgYmx1ci5icy5idXR0b24uZGF0YS1hcGknLCAnW2RhdGEtdG9nZ2xlXj1cImJ1dHRvblwiXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuYnRuJykudG9nZ2xlQ2xhc3MoJ2ZvY3VzJywgL15mb2N1cyhpbik/JC8udGVzdChlLnR5cGUpKVxuICAgIH0pXG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IGNhcm91c2VsLmpzIHYzLjMuN1xuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jY2Fyb3VzZWxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNiBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBDQVJPVVNFTCBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgQ2Fyb3VzZWwgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgICAgPSAkKGVsZW1lbnQpXG4gICAgdGhpcy4kaW5kaWNhdG9ycyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnLmNhcm91c2VsLWluZGljYXRvcnMnKVxuICAgIHRoaXMub3B0aW9ucyAgICAgPSBvcHRpb25zXG4gICAgdGhpcy5wYXVzZWQgICAgICA9IG51bGxcbiAgICB0aGlzLnNsaWRpbmcgICAgID0gbnVsbFxuICAgIHRoaXMuaW50ZXJ2YWwgICAgPSBudWxsXG4gICAgdGhpcy4kYWN0aXZlICAgICA9IG51bGxcbiAgICB0aGlzLiRpdGVtcyAgICAgID0gbnVsbFxuXG4gICAgdGhpcy5vcHRpb25zLmtleWJvYXJkICYmIHRoaXMuJGVsZW1lbnQub24oJ2tleWRvd24uYnMuY2Fyb3VzZWwnLCAkLnByb3h5KHRoaXMua2V5ZG93biwgdGhpcykpXG5cbiAgICB0aGlzLm9wdGlvbnMucGF1c2UgPT0gJ2hvdmVyJyAmJiAhKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgJiYgdGhpcy4kZWxlbWVudFxuICAgICAgLm9uKCdtb3VzZWVudGVyLmJzLmNhcm91c2VsJywgJC5wcm94eSh0aGlzLnBhdXNlLCB0aGlzKSlcbiAgICAgIC5vbignbW91c2VsZWF2ZS5icy5jYXJvdXNlbCcsICQucHJveHkodGhpcy5jeWNsZSwgdGhpcykpXG4gIH1cblxuICBDYXJvdXNlbC5WRVJTSU9OICA9ICczLjMuNydcblxuICBDYXJvdXNlbC5UUkFOU0lUSU9OX0RVUkFUSU9OID0gNjAwXG5cbiAgQ2Fyb3VzZWwuREVGQVVMVFMgPSB7XG4gICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgcGF1c2U6ICdob3ZlcicsXG4gICAgd3JhcDogdHJ1ZSxcbiAgICBrZXlib2FyZDogdHJ1ZVxuICB9XG5cbiAgQ2Fyb3VzZWwucHJvdG90eXBlLmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGUudGFyZ2V0LnRhZ05hbWUpKSByZXR1cm5cbiAgICBzd2l0Y2ggKGUud2hpY2gpIHtcbiAgICAgIGNhc2UgMzc6IHRoaXMucHJldigpOyBicmVha1xuICAgICAgY2FzZSAzOTogdGhpcy5uZXh0KCk7IGJyZWFrXG4gICAgICBkZWZhdWx0OiByZXR1cm5cbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIENhcm91c2VsLnByb3RvdHlwZS5jeWNsZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgZSB8fCAodGhpcy5wYXVzZWQgPSBmYWxzZSlcblxuICAgIHRoaXMuaW50ZXJ2YWwgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxuXG4gICAgdGhpcy5vcHRpb25zLmludGVydmFsXG4gICAgICAmJiAhdGhpcy5wYXVzZWRcbiAgICAgICYmICh0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoJC5wcm94eSh0aGlzLm5leHQsIHRoaXMpLCB0aGlzLm9wdGlvbnMuaW50ZXJ2YWwpKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIENhcm91c2VsLnByb3RvdHlwZS5nZXRJdGVtSW5kZXggPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHRoaXMuJGl0ZW1zID0gaXRlbS5wYXJlbnQoKS5jaGlsZHJlbignLml0ZW0nKVxuICAgIHJldHVybiB0aGlzLiRpdGVtcy5pbmRleChpdGVtIHx8IHRoaXMuJGFjdGl2ZSlcbiAgfVxuXG4gIENhcm91c2VsLnByb3RvdHlwZS5nZXRJdGVtRm9yRGlyZWN0aW9uID0gZnVuY3Rpb24gKGRpcmVjdGlvbiwgYWN0aXZlKSB7XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXgoYWN0aXZlKVxuICAgIHZhciB3aWxsV3JhcCA9IChkaXJlY3Rpb24gPT0gJ3ByZXYnICYmIGFjdGl2ZUluZGV4ID09PSAwKVxuICAgICAgICAgICAgICAgIHx8IChkaXJlY3Rpb24gPT0gJ25leHQnICYmIGFjdGl2ZUluZGV4ID09ICh0aGlzLiRpdGVtcy5sZW5ndGggLSAxKSlcbiAgICBpZiAod2lsbFdyYXAgJiYgIXRoaXMub3B0aW9ucy53cmFwKSByZXR1cm4gYWN0aXZlXG4gICAgdmFyIGRlbHRhID0gZGlyZWN0aW9uID09ICdwcmV2JyA/IC0xIDogMVxuICAgIHZhciBpdGVtSW5kZXggPSAoYWN0aXZlSW5kZXggKyBkZWx0YSkgJSB0aGlzLiRpdGVtcy5sZW5ndGhcbiAgICByZXR1cm4gdGhpcy4kaXRlbXMuZXEoaXRlbUluZGV4KVxuICB9XG5cbiAgQ2Fyb3VzZWwucHJvdG90eXBlLnRvID0gZnVuY3Rpb24gKHBvcykge1xuICAgIHZhciB0aGF0ICAgICAgICA9IHRoaXNcbiAgICB2YXIgYWN0aXZlSW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleCh0aGlzLiRhY3RpdmUgPSB0aGlzLiRlbGVtZW50LmZpbmQoJy5pdGVtLmFjdGl2ZScpKVxuXG4gICAgaWYgKHBvcyA+ICh0aGlzLiRpdGVtcy5sZW5ndGggLSAxKSB8fCBwb3MgPCAwKSByZXR1cm5cblxuICAgIGlmICh0aGlzLnNsaWRpbmcpICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50Lm9uZSgnc2xpZC5icy5jYXJvdXNlbCcsIGZ1bmN0aW9uICgpIHsgdGhhdC50byhwb3MpIH0pIC8vIHllcywgXCJzbGlkXCJcbiAgICBpZiAoYWN0aXZlSW5kZXggPT0gcG9zKSByZXR1cm4gdGhpcy5wYXVzZSgpLmN5Y2xlKClcblxuICAgIHJldHVybiB0aGlzLnNsaWRlKHBvcyA+IGFjdGl2ZUluZGV4ID8gJ25leHQnIDogJ3ByZXYnLCB0aGlzLiRpdGVtcy5lcShwb3MpKVxuICB9XG5cbiAgQ2Fyb3VzZWwucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKGUpIHtcbiAgICBlIHx8ICh0aGlzLnBhdXNlZCA9IHRydWUpXG5cbiAgICBpZiAodGhpcy4kZWxlbWVudC5maW5kKCcubmV4dCwgLnByZXYnKS5sZW5ndGggJiYgJC5zdXBwb3J0LnRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcigkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQpXG4gICAgICB0aGlzLmN5Y2xlKHRydWUpXG4gICAgfVxuXG4gICAgdGhpcy5pbnRlcnZhbCA9IGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBDYXJvdXNlbC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zbGlkaW5nKSByZXR1cm5cbiAgICByZXR1cm4gdGhpcy5zbGlkZSgnbmV4dCcpXG4gIH1cblxuICBDYXJvdXNlbC5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zbGlkaW5nKSByZXR1cm5cbiAgICByZXR1cm4gdGhpcy5zbGlkZSgncHJldicpXG4gIH1cblxuICBDYXJvdXNlbC5wcm90b3R5cGUuc2xpZGUgPSBmdW5jdGlvbiAodHlwZSwgbmV4dCkge1xuICAgIHZhciAkYWN0aXZlICAgPSB0aGlzLiRlbGVtZW50LmZpbmQoJy5pdGVtLmFjdGl2ZScpXG4gICAgdmFyICRuZXh0ICAgICA9IG5leHQgfHwgdGhpcy5nZXRJdGVtRm9yRGlyZWN0aW9uKHR5cGUsICRhY3RpdmUpXG4gICAgdmFyIGlzQ3ljbGluZyA9IHRoaXMuaW50ZXJ2YWxcbiAgICB2YXIgZGlyZWN0aW9uID0gdHlwZSA9PSAnbmV4dCcgPyAnbGVmdCcgOiAncmlnaHQnXG4gICAgdmFyIHRoYXQgICAgICA9IHRoaXNcblxuICAgIGlmICgkbmV4dC5oYXNDbGFzcygnYWN0aXZlJykpIHJldHVybiAodGhpcy5zbGlkaW5nID0gZmFsc2UpXG5cbiAgICB2YXIgcmVsYXRlZFRhcmdldCA9ICRuZXh0WzBdXG4gICAgdmFyIHNsaWRlRXZlbnQgPSAkLkV2ZW50KCdzbGlkZS5icy5jYXJvdXNlbCcsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRUYXJnZXQsXG4gICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgIH0pXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKHNsaWRlRXZlbnQpXG4gICAgaWYgKHNsaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgdGhpcy5zbGlkaW5nID0gdHJ1ZVxuXG4gICAgaXNDeWNsaW5nICYmIHRoaXMucGF1c2UoKVxuXG4gICAgaWYgKHRoaXMuJGluZGljYXRvcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLiRpbmRpY2F0b3JzLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgIHZhciAkbmV4dEluZGljYXRvciA9ICQodGhpcy4kaW5kaWNhdG9ycy5jaGlsZHJlbigpW3RoaXMuZ2V0SXRlbUluZGV4KCRuZXh0KV0pXG4gICAgICAkbmV4dEluZGljYXRvciAmJiAkbmV4dEluZGljYXRvci5hZGRDbGFzcygnYWN0aXZlJylcbiAgICB9XG5cbiAgICB2YXIgc2xpZEV2ZW50ID0gJC5FdmVudCgnc2xpZC5icy5jYXJvdXNlbCcsIHsgcmVsYXRlZFRhcmdldDogcmVsYXRlZFRhcmdldCwgZGlyZWN0aW9uOiBkaXJlY3Rpb24gfSkgLy8geWVzLCBcInNsaWRcIlxuICAgIGlmICgkLnN1cHBvcnQudHJhbnNpdGlvbiAmJiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdzbGlkZScpKSB7XG4gICAgICAkbmV4dC5hZGRDbGFzcyh0eXBlKVxuICAgICAgJG5leHRbMF0ub2Zmc2V0V2lkdGggLy8gZm9yY2UgcmVmbG93XG4gICAgICAkYWN0aXZlLmFkZENsYXNzKGRpcmVjdGlvbilcbiAgICAgICRuZXh0LmFkZENsYXNzKGRpcmVjdGlvbilcbiAgICAgICRhY3RpdmVcbiAgICAgICAgLm9uZSgnYnNUcmFuc2l0aW9uRW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICRuZXh0LnJlbW92ZUNsYXNzKFt0eXBlLCBkaXJlY3Rpb25dLmpvaW4oJyAnKSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgJGFjdGl2ZS5yZW1vdmVDbGFzcyhbJ2FjdGl2ZScsIGRpcmVjdGlvbl0uam9pbignICcpKVxuICAgICAgICAgIHRoYXQuc2xpZGluZyA9IGZhbHNlXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0LiRlbGVtZW50LnRyaWdnZXIoc2xpZEV2ZW50KVxuICAgICAgICAgIH0sIDApXG4gICAgICAgIH0pXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChDYXJvdXNlbC5UUkFOU0lUSU9OX0RVUkFUSU9OKVxuICAgIH0gZWxzZSB7XG4gICAgICAkYWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgJG5leHQuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB0aGlzLnNsaWRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKHNsaWRFdmVudClcbiAgICB9XG5cbiAgICBpc0N5Y2xpbmcgJiYgdGhpcy5jeWNsZSgpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBDQVJPVVNFTCBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIFBsdWdpbihvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgICAgPSAkdGhpcy5kYXRhKCdicy5jYXJvdXNlbCcpXG4gICAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBDYXJvdXNlbC5ERUZBVUxUUywgJHRoaXMuZGF0YSgpLCB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvbilcbiAgICAgIHZhciBhY3Rpb24gID0gdHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJyA/IG9wdGlvbiA6IG9wdGlvbnMuc2xpZGVcblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy5jYXJvdXNlbCcsIChkYXRhID0gbmV3IENhcm91c2VsKHRoaXMsIG9wdGlvbnMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdudW1iZXInKSBkYXRhLnRvKG9wdGlvbilcbiAgICAgIGVsc2UgaWYgKGFjdGlvbikgZGF0YVthY3Rpb25dKClcbiAgICAgIGVsc2UgaWYgKG9wdGlvbnMuaW50ZXJ2YWwpIGRhdGEucGF1c2UoKS5jeWNsZSgpXG4gICAgfSlcbiAgfVxuXG4gIHZhciBvbGQgPSAkLmZuLmNhcm91c2VsXG5cbiAgJC5mbi5jYXJvdXNlbCAgICAgICAgICAgICA9IFBsdWdpblxuICAkLmZuLmNhcm91c2VsLkNvbnN0cnVjdG9yID0gQ2Fyb3VzZWxcblxuXG4gIC8vIENBUk9VU0VMIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi5jYXJvdXNlbC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4uY2Fyb3VzZWwgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBDQVJPVVNFTCBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT09PT09PVxuXG4gIHZhciBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBocmVmXG4gICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgdmFyICR0YXJnZXQgPSAkKCR0aGlzLmF0dHIoJ2RhdGEtdGFyZ2V0JykgfHwgKGhyZWYgPSAkdGhpcy5hdHRyKCdocmVmJykpICYmIGhyZWYucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLywgJycpKSAvLyBzdHJpcCBmb3IgaWU3XG4gICAgaWYgKCEkdGFyZ2V0Lmhhc0NsYXNzKCdjYXJvdXNlbCcpKSByZXR1cm5cbiAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCAkdGFyZ2V0LmRhdGEoKSwgJHRoaXMuZGF0YSgpKVxuICAgIHZhciBzbGlkZUluZGV4ID0gJHRoaXMuYXR0cignZGF0YS1zbGlkZS10bycpXG4gICAgaWYgKHNsaWRlSW5kZXgpIG9wdGlvbnMuaW50ZXJ2YWwgPSBmYWxzZVxuXG4gICAgUGx1Z2luLmNhbGwoJHRhcmdldCwgb3B0aW9ucylcblxuICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICAkdGFyZ2V0LmRhdGEoJ2JzLmNhcm91c2VsJykudG8oc2xpZGVJbmRleClcbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gICQoZG9jdW1lbnQpXG4gICAgLm9uKCdjbGljay5icy5jYXJvdXNlbC5kYXRhLWFwaScsICdbZGF0YS1zbGlkZV0nLCBjbGlja0hhbmRsZXIpXG4gICAgLm9uKCdjbGljay5icy5jYXJvdXNlbC5kYXRhLWFwaScsICdbZGF0YS1zbGlkZS10b10nLCBjbGlja0hhbmRsZXIpXG5cbiAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICQoJ1tkYXRhLXJpZGU9XCJjYXJvdXNlbFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRjYXJvdXNlbCA9ICQodGhpcylcbiAgICAgIFBsdWdpbi5jYWxsKCRjYXJvdXNlbCwgJGNhcm91c2VsLmRhdGEoKSlcbiAgICB9KVxuICB9KVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiBjb2xsYXBzZS5qcyB2My4zLjdcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI2NvbGxhcHNlXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTYgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKiBqc2hpbnQgbGF0ZWRlZjogZmFsc2UgKi9cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBDT0xMQVBTRSBQVUJMSUMgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBDb2xsYXBzZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWxlbWVudCAgICAgID0gJChlbGVtZW50KVxuICAgIHRoaXMub3B0aW9ucyAgICAgICA9ICQuZXh0ZW5kKHt9LCBDb2xsYXBzZS5ERUZBVUxUUywgb3B0aW9ucylcbiAgICB0aGlzLiR0cmlnZ2VyICAgICAgPSAkKCdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtocmVmPVwiIycgKyBlbGVtZW50LmlkICsgJ1wiXSwnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtkYXRhLXRhcmdldD1cIiMnICsgZWxlbWVudC5pZCArICdcIl0nKVxuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IG51bGxcblxuICAgIGlmICh0aGlzLm9wdGlvbnMucGFyZW50KSB7XG4gICAgICB0aGlzLiRwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuJGVsZW1lbnQsIHRoaXMuJHRyaWdnZXIpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy50b2dnbGUpIHRoaXMudG9nZ2xlKClcbiAgfVxuXG4gIENvbGxhcHNlLlZFUlNJT04gID0gJzMuMy43J1xuXG4gIENvbGxhcHNlLlRSQU5TSVRJT05fRFVSQVRJT04gPSAzNTBcblxuICBDb2xsYXBzZS5ERUZBVUxUUyA9IHtcbiAgICB0b2dnbGU6IHRydWVcbiAgfVxuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5kaW1lbnNpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhc1dpZHRoID0gdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnd2lkdGgnKVxuICAgIHJldHVybiBoYXNXaWR0aCA/ICd3aWR0aCcgOiAnaGVpZ2h0J1xuICB9XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbmluZyB8fCB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdpbicpKSByZXR1cm5cblxuICAgIHZhciBhY3RpdmVzRGF0YVxuICAgIHZhciBhY3RpdmVzID0gdGhpcy4kcGFyZW50ICYmIHRoaXMuJHBhcmVudC5jaGlsZHJlbignLnBhbmVsJykuY2hpbGRyZW4oJy5pbiwgLmNvbGxhcHNpbmcnKVxuXG4gICAgaWYgKGFjdGl2ZXMgJiYgYWN0aXZlcy5sZW5ndGgpIHtcbiAgICAgIGFjdGl2ZXNEYXRhID0gYWN0aXZlcy5kYXRhKCdicy5jb2xsYXBzZScpXG4gICAgICBpZiAoYWN0aXZlc0RhdGEgJiYgYWN0aXZlc0RhdGEudHJhbnNpdGlvbmluZykgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIHN0YXJ0RXZlbnQgPSAkLkV2ZW50KCdzaG93LmJzLmNvbGxhcHNlJylcbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICBpZiAoc3RhcnRFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICBpZiAoYWN0aXZlcyAmJiBhY3RpdmVzLmxlbmd0aCkge1xuICAgICAgUGx1Z2luLmNhbGwoYWN0aXZlcywgJ2hpZGUnKVxuICAgICAgYWN0aXZlc0RhdGEgfHwgYWN0aXZlcy5kYXRhKCdicy5jb2xsYXBzZScsIG51bGwpXG4gICAgfVxuXG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuZGltZW5zaW9uKClcblxuICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIC5yZW1vdmVDbGFzcygnY29sbGFwc2UnKVxuICAgICAgLmFkZENsYXNzKCdjb2xsYXBzaW5nJylbZGltZW5zaW9uXSgwKVxuICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuXG4gICAgdGhpcy4kdHJpZ2dlclxuICAgICAgLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKVxuICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gMVxuXG4gICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy4kZWxlbWVudFxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNpbmcnKVxuICAgICAgICAuYWRkQ2xhc3MoJ2NvbGxhcHNlIGluJylbZGltZW5zaW9uXSgnJylcbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IDBcbiAgICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgICAgLnRyaWdnZXIoJ3Nob3duLmJzLmNvbGxhcHNlJylcbiAgICB9XG5cbiAgICBpZiAoISQuc3VwcG9ydC50cmFuc2l0aW9uKSByZXR1cm4gY29tcGxldGUuY2FsbCh0aGlzKVxuXG4gICAgdmFyIHNjcm9sbFNpemUgPSAkLmNhbWVsQ2FzZShbJ3Njcm9sbCcsIGRpbWVuc2lvbl0uam9pbignLScpKVxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLm9uZSgnYnNUcmFuc2l0aW9uRW5kJywgJC5wcm94eShjb21wbGV0ZSwgdGhpcykpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoQ29sbGFwc2UuVFJBTlNJVElPTl9EVVJBVElPTilbZGltZW5zaW9uXSh0aGlzLiRlbGVtZW50WzBdW3Njcm9sbFNpemVdKVxuICB9XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbmluZyB8fCAhdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnaW4nKSkgcmV0dXJuXG5cbiAgICB2YXIgc3RhcnRFdmVudCA9ICQuRXZlbnQoJ2hpZGUuYnMuY29sbGFwc2UnKVxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihzdGFydEV2ZW50KVxuICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLmRpbWVuc2lvbigpXG5cbiAgICB0aGlzLiRlbGVtZW50W2RpbWVuc2lvbl0odGhpcy4kZWxlbWVudFtkaW1lbnNpb25dKCkpWzBdLm9mZnNldEhlaWdodFxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLmFkZENsYXNzKCdjb2xsYXBzaW5nJylcbiAgICAgIC5yZW1vdmVDbGFzcygnY29sbGFwc2UgaW4nKVxuICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcblxuICAgIHRoaXMuJHRyaWdnZXJcbiAgICAgIC5hZGRDbGFzcygnY29sbGFwc2VkJylcbiAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG5cbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSAxXG5cbiAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSAwXG4gICAgICB0aGlzLiRlbGVtZW50XG4gICAgICAgIC5yZW1vdmVDbGFzcygnY29sbGFwc2luZycpXG4gICAgICAgIC5hZGRDbGFzcygnY29sbGFwc2UnKVxuICAgICAgICAudHJpZ2dlcignaGlkZGVuLmJzLmNvbGxhcHNlJylcbiAgICB9XG5cbiAgICBpZiAoISQuc3VwcG9ydC50cmFuc2l0aW9uKSByZXR1cm4gY29tcGxldGUuY2FsbCh0aGlzKVxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgW2RpbWVuc2lvbl0oMClcbiAgICAgIC5vbmUoJ2JzVHJhbnNpdGlvbkVuZCcsICQucHJveHkoY29tcGxldGUsIHRoaXMpKVxuICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKENvbGxhcHNlLlRSQU5TSVRJT05fRFVSQVRJT04pXG4gIH1cblxuICBDb2xsYXBzZS5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXNbdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnaW4nKSA/ICdoaWRlJyA6ICdzaG93J10oKVxuICB9XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLmdldFBhcmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJCh0aGlzLm9wdGlvbnMucGFyZW50KVxuICAgICAgLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtcGFyZW50PVwiJyArIHRoaXMub3B0aW9ucy5wYXJlbnQgKyAnXCJdJylcbiAgICAgIC5lYWNoKCQucHJveHkoZnVuY3Rpb24gKGksIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyICRlbGVtZW50ID0gJChlbGVtZW50KVxuICAgICAgICB0aGlzLmFkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhnZXRUYXJnZXRGcm9tVHJpZ2dlcigkZWxlbWVudCksICRlbGVtZW50KVxuICAgICAgfSwgdGhpcykpXG4gICAgICAuZW5kKClcbiAgfVxuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MgPSBmdW5jdGlvbiAoJGVsZW1lbnQsICR0cmlnZ2VyKSB7XG4gICAgdmFyIGlzT3BlbiA9ICRlbGVtZW50Lmhhc0NsYXNzKCdpbicpXG5cbiAgICAkZWxlbWVudC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgICR0cmlnZ2VyXG4gICAgICAudG9nZ2xlQ2xhc3MoJ2NvbGxhcHNlZCcsICFpc09wZW4pXG4gICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGlzT3BlbilcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRhcmdldEZyb21UcmlnZ2VyKCR0cmlnZ2VyKSB7XG4gICAgdmFyIGhyZWZcbiAgICB2YXIgdGFyZ2V0ID0gJHRyaWdnZXIuYXR0cignZGF0YS10YXJnZXQnKVxuICAgICAgfHwgKGhyZWYgPSAkdHJpZ2dlci5hdHRyKCdocmVmJykpICYmIGhyZWYucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLywgJycpIC8vIHN0cmlwIGZvciBpZTdcblxuICAgIHJldHVybiAkKHRhcmdldClcbiAgfVxuXG5cbiAgLy8gQ09MTEFQU0UgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBQbHVnaW4ob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMuY29sbGFwc2UnKVxuICAgICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQ29sbGFwc2UuREVGQVVMVFMsICR0aGlzLmRhdGEoKSwgdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb24pXG5cbiAgICAgIGlmICghZGF0YSAmJiBvcHRpb25zLnRvZ2dsZSAmJiAvc2hvd3xoaWRlLy50ZXN0KG9wdGlvbikpIG9wdGlvbnMudG9nZ2xlID0gZmFsc2VcbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMuY29sbGFwc2UnLCAoZGF0YSA9IG5ldyBDb2xsYXBzZSh0aGlzLCBvcHRpb25zKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKClcbiAgICB9KVxuICB9XG5cbiAgdmFyIG9sZCA9ICQuZm4uY29sbGFwc2VcblxuICAkLmZuLmNvbGxhcHNlICAgICAgICAgICAgID0gUGx1Z2luXG4gICQuZm4uY29sbGFwc2UuQ29uc3RydWN0b3IgPSBDb2xsYXBzZVxuXG5cbiAgLy8gQ09MTEFQU0UgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLmNvbGxhcHNlLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi5jb2xsYXBzZSA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIENPTExBUFNFIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PT09PT09XG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrLmJzLmNvbGxhcHNlLmRhdGEtYXBpJywgJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcblxuICAgIGlmICghJHRoaXMuYXR0cignZGF0YS10YXJnZXQnKSkgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICB2YXIgJHRhcmdldCA9IGdldFRhcmdldEZyb21UcmlnZ2VyKCR0aGlzKVxuICAgIHZhciBkYXRhICAgID0gJHRhcmdldC5kYXRhKCdicy5jb2xsYXBzZScpXG4gICAgdmFyIG9wdGlvbiAgPSBkYXRhID8gJ3RvZ2dsZScgOiAkdGhpcy5kYXRhKClcblxuICAgIFBsdWdpbi5jYWxsKCR0YXJnZXQsIG9wdGlvbilcbiAgfSlcblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogZHJvcGRvd24uanMgdjMuMy43XG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyNkcm9wZG93bnNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNiBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBEUk9QRE9XTiBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgYmFja2Ryb3AgPSAnLmRyb3Bkb3duLWJhY2tkcm9wJ1xuICB2YXIgdG9nZ2xlICAgPSAnW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl0nXG4gIHZhciBEcm9wZG93biA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgJChlbGVtZW50KS5vbignY2xpY2suYnMuZHJvcGRvd24nLCB0aGlzLnRvZ2dsZSlcbiAgfVxuXG4gIERyb3Bkb3duLlZFUlNJT04gPSAnMy4zLjcnXG5cbiAgZnVuY3Rpb24gZ2V0UGFyZW50KCR0aGlzKSB7XG4gICAgdmFyIHNlbGVjdG9yID0gJHRoaXMuYXR0cignZGF0YS10YXJnZXQnKVxuXG4gICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgc2VsZWN0b3IgPSAkdGhpcy5hdHRyKCdocmVmJylcbiAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IgJiYgLyNbQS1aYS16XS8udGVzdChzZWxlY3RvcikgJiYgc2VsZWN0b3IucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLywgJycpIC8vIHN0cmlwIGZvciBpZTdcbiAgICB9XG5cbiAgICB2YXIgJHBhcmVudCA9IHNlbGVjdG9yICYmICQoc2VsZWN0b3IpXG5cbiAgICByZXR1cm4gJHBhcmVudCAmJiAkcGFyZW50Lmxlbmd0aCA/ICRwYXJlbnQgOiAkdGhpcy5wYXJlbnQoKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJNZW51cyhlKSB7XG4gICAgaWYgKGUgJiYgZS53aGljaCA9PT0gMykgcmV0dXJuXG4gICAgJChiYWNrZHJvcCkucmVtb3ZlKClcbiAgICAkKHRvZ2dsZSkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICAgICAgICA9ICQodGhpcylcbiAgICAgIHZhciAkcGFyZW50ICAgICAgID0gZ2V0UGFyZW50KCR0aGlzKVxuICAgICAgdmFyIHJlbGF0ZWRUYXJnZXQgPSB7IHJlbGF0ZWRUYXJnZXQ6IHRoaXMgfVxuXG4gICAgICBpZiAoISRwYXJlbnQuaGFzQ2xhc3MoJ29wZW4nKSkgcmV0dXJuXG5cbiAgICAgIGlmIChlICYmIGUudHlwZSA9PSAnY2xpY2snICYmIC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZS50YXJnZXQudGFnTmFtZSkgJiYgJC5jb250YWlucygkcGFyZW50WzBdLCBlLnRhcmdldCkpIHJldHVyblxuXG4gICAgICAkcGFyZW50LnRyaWdnZXIoZSA9ICQuRXZlbnQoJ2hpZGUuYnMuZHJvcGRvd24nLCByZWxhdGVkVGFyZ2V0KSlcblxuICAgICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgICAkdGhpcy5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICAgICRwYXJlbnQucmVtb3ZlQ2xhc3MoJ29wZW4nKS50cmlnZ2VyKCQuRXZlbnQoJ2hpZGRlbi5icy5kcm9wZG93bicsIHJlbGF0ZWRUYXJnZXQpKVxuICAgIH0pXG4gIH1cblxuICBEcm9wZG93bi5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG5cbiAgICBpZiAoJHRoaXMuaXMoJy5kaXNhYmxlZCwgOmRpc2FibGVkJykpIHJldHVyblxuXG4gICAgdmFyICRwYXJlbnQgID0gZ2V0UGFyZW50KCR0aGlzKVxuICAgIHZhciBpc0FjdGl2ZSA9ICRwYXJlbnQuaGFzQ2xhc3MoJ29wZW4nKVxuXG4gICAgY2xlYXJNZW51cygpXG5cbiAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmICEkcGFyZW50LmNsb3Nlc3QoJy5uYXZiYXItbmF2JykubGVuZ3RoKSB7XG4gICAgICAgIC8vIGlmIG1vYmlsZSB3ZSB1c2UgYSBiYWNrZHJvcCBiZWNhdXNlIGNsaWNrIGV2ZW50cyBkb24ndCBkZWxlZ2F0ZVxuICAgICAgICAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuICAgICAgICAgIC5hZGRDbGFzcygnZHJvcGRvd24tYmFja2Ryb3AnKVxuICAgICAgICAgIC5pbnNlcnRBZnRlcigkKHRoaXMpKVxuICAgICAgICAgIC5vbignY2xpY2snLCBjbGVhck1lbnVzKVxuICAgICAgfVxuXG4gICAgICB2YXIgcmVsYXRlZFRhcmdldCA9IHsgcmVsYXRlZFRhcmdldDogdGhpcyB9XG4gICAgICAkcGFyZW50LnRyaWdnZXIoZSA9ICQuRXZlbnQoJ3Nob3cuYnMuZHJvcGRvd24nLCByZWxhdGVkVGFyZ2V0KSlcblxuICAgICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgICAkdGhpc1xuICAgICAgICAudHJpZ2dlcignZm9jdXMnKVxuICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJylcblxuICAgICAgJHBhcmVudFxuICAgICAgICAudG9nZ2xlQ2xhc3MoJ29wZW4nKVxuICAgICAgICAudHJpZ2dlcigkLkV2ZW50KCdzaG93bi5icy5kcm9wZG93bicsIHJlbGF0ZWRUYXJnZXQpKVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgRHJvcGRvd24ucHJvdG90eXBlLmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmICghLygzOHw0MHwyN3wzMikvLnRlc3QoZS53aGljaCkgfHwgL2lucHV0fHRleHRhcmVhL2kudGVzdChlLnRhcmdldC50YWdOYW1lKSkgcmV0dXJuXG5cbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBpZiAoJHRoaXMuaXMoJy5kaXNhYmxlZCwgOmRpc2FibGVkJykpIHJldHVyblxuXG4gICAgdmFyICRwYXJlbnQgID0gZ2V0UGFyZW50KCR0aGlzKVxuICAgIHZhciBpc0FjdGl2ZSA9ICRwYXJlbnQuaGFzQ2xhc3MoJ29wZW4nKVxuXG4gICAgaWYgKCFpc0FjdGl2ZSAmJiBlLndoaWNoICE9IDI3IHx8IGlzQWN0aXZlICYmIGUud2hpY2ggPT0gMjcpIHtcbiAgICAgIGlmIChlLndoaWNoID09IDI3KSAkcGFyZW50LmZpbmQodG9nZ2xlKS50cmlnZ2VyKCdmb2N1cycpXG4gICAgICByZXR1cm4gJHRoaXMudHJpZ2dlcignY2xpY2snKVxuICAgIH1cblxuICAgIHZhciBkZXNjID0gJyBsaTpub3QoLmRpc2FibGVkKTp2aXNpYmxlIGEnXG4gICAgdmFyICRpdGVtcyA9ICRwYXJlbnQuZmluZCgnLmRyb3Bkb3duLW1lbnUnICsgZGVzYylcblxuICAgIGlmICghJGl0ZW1zLmxlbmd0aCkgcmV0dXJuXG5cbiAgICB2YXIgaW5kZXggPSAkaXRlbXMuaW5kZXgoZS50YXJnZXQpXG5cbiAgICBpZiAoZS53aGljaCA9PSAzOCAmJiBpbmRleCA+IDApICAgICAgICAgICAgICAgICBpbmRleC0tICAgICAgICAgLy8gdXBcbiAgICBpZiAoZS53aGljaCA9PSA0MCAmJiBpbmRleCA8ICRpdGVtcy5sZW5ndGggLSAxKSBpbmRleCsrICAgICAgICAgLy8gZG93blxuICAgIGlmICghfmluZGV4KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gMFxuXG4gICAgJGl0ZW1zLmVxKGluZGV4KS50cmlnZ2VyKCdmb2N1cycpXG4gIH1cblxuXG4gIC8vIERST1BET1dOIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gUGx1Z2luKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgID0gJHRoaXMuZGF0YSgnYnMuZHJvcGRvd24nKVxuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLmRyb3Bkb3duJywgKGRhdGEgPSBuZXcgRHJvcGRvd24odGhpcykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXS5jYWxsKCR0aGlzKVxuICAgIH0pXG4gIH1cblxuICB2YXIgb2xkID0gJC5mbi5kcm9wZG93blxuXG4gICQuZm4uZHJvcGRvd24gICAgICAgICAgICAgPSBQbHVnaW5cbiAgJC5mbi5kcm9wZG93bi5Db25zdHJ1Y3RvciA9IERyb3Bkb3duXG5cblxuICAvLyBEUk9QRE9XTiBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PT09PVxuXG4gICQuZm4uZHJvcGRvd24ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLmRyb3Bkb3duID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gQVBQTFkgVE8gU1RBTkRBUkQgRFJPUERPV04gRUxFTUVOVFNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAkKGRvY3VtZW50KVxuICAgIC5vbignY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGknLCBjbGVhck1lbnVzKVxuICAgIC5vbignY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGknLCAnLmRyb3Bkb3duIGZvcm0nLCBmdW5jdGlvbiAoZSkgeyBlLnN0b3BQcm9wYWdhdGlvbigpIH0pXG4gICAgLm9uKCdjbGljay5icy5kcm9wZG93bi5kYXRhLWFwaScsIHRvZ2dsZSwgRHJvcGRvd24ucHJvdG90eXBlLnRvZ2dsZSlcbiAgICAub24oJ2tleWRvd24uYnMuZHJvcGRvd24uZGF0YS1hcGknLCB0b2dnbGUsIERyb3Bkb3duLnByb3RvdHlwZS5rZXlkb3duKVxuICAgIC5vbigna2V5ZG93bi5icy5kcm9wZG93bi5kYXRhLWFwaScsICcuZHJvcGRvd24tbWVudScsIERyb3Bkb3duLnByb3RvdHlwZS5rZXlkb3duKVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiBtb2RhbC5qcyB2My4zLjdcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI21vZGFsc1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE2IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIE1PREFMIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBNb2RhbCA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zICAgICAgICAgICAgID0gb3B0aW9uc1xuICAgIHRoaXMuJGJvZHkgICAgICAgICAgICAgICA9ICQoZG9jdW1lbnQuYm9keSlcbiAgICB0aGlzLiRlbGVtZW50ICAgICAgICAgICAgPSAkKGVsZW1lbnQpXG4gICAgdGhpcy4kZGlhbG9nICAgICAgICAgICAgID0gdGhpcy4kZWxlbWVudC5maW5kKCcubW9kYWwtZGlhbG9nJylcbiAgICB0aGlzLiRiYWNrZHJvcCAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5pc1Nob3duICAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMub3JpZ2luYWxCb2R5UGFkICAgICA9IG51bGxcbiAgICB0aGlzLnNjcm9sbGJhcldpZHRoICAgICAgPSAwXG4gICAgdGhpcy5pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2VcblxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3RlKSB7XG4gICAgICB0aGlzLiRlbGVtZW50XG4gICAgICAgIC5maW5kKCcubW9kYWwtY29udGVudCcpXG4gICAgICAgIC5sb2FkKHRoaXMub3B0aW9ucy5yZW1vdGUsICQucHJveHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignbG9hZGVkLmJzLm1vZGFsJylcbiAgICAgICAgfSwgdGhpcykpXG4gICAgfVxuICB9XG5cbiAgTW9kYWwuVkVSU0lPTiAgPSAnMy4zLjcnXG5cbiAgTW9kYWwuVFJBTlNJVElPTl9EVVJBVElPTiA9IDMwMFxuICBNb2RhbC5CQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OID0gMTUwXG5cbiAgTW9kYWwuREVGQVVMVFMgPSB7XG4gICAgYmFja2Ryb3A6IHRydWUsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgc2hvdzogdHJ1ZVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uIChfcmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLmlzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhfcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKF9yZWxhdGVkVGFyZ2V0KSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgdmFyIGUgICAgPSAkLkV2ZW50KCdzaG93LmJzLm1vZGFsJywgeyByZWxhdGVkVGFyZ2V0OiBfcmVsYXRlZFRhcmdldCB9KVxuXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpXG5cbiAgICBpZiAodGhpcy5pc1Nob3duIHx8IGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgdGhpcy5pc1Nob3duID0gdHJ1ZVxuXG4gICAgdGhpcy5jaGVja1Njcm9sbGJhcigpXG4gICAgdGhpcy5zZXRTY3JvbGxiYXIoKVxuICAgIHRoaXMuJGJvZHkuYWRkQ2xhc3MoJ21vZGFsLW9wZW4nKVxuXG4gICAgdGhpcy5lc2NhcGUoKVxuICAgIHRoaXMucmVzaXplKClcblxuICAgIHRoaXMuJGVsZW1lbnQub24oJ2NsaWNrLmRpc21pc3MuYnMubW9kYWwnLCAnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJywgJC5wcm94eSh0aGlzLmhpZGUsIHRoaXMpKVxuXG4gICAgdGhpcy4kZGlhbG9nLm9uKCdtb3VzZWRvd24uZGlzbWlzcy5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQuJGVsZW1lbnQub25lKCdtb3VzZXVwLmRpc21pc3MuYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoJChlLnRhcmdldCkuaXModGhhdC4kZWxlbWVudCkpIHRoYXQuaWdub3JlQmFja2Ryb3BDbGljayA9IHRydWVcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuYmFja2Ryb3AoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRyYW5zaXRpb24gPSAkLnN1cHBvcnQudHJhbnNpdGlvbiAmJiB0aGF0LiRlbGVtZW50Lmhhc0NsYXNzKCdmYWRlJylcblxuICAgICAgaWYgKCF0aGF0LiRlbGVtZW50LnBhcmVudCgpLmxlbmd0aCkge1xuICAgICAgICB0aGF0LiRlbGVtZW50LmFwcGVuZFRvKHRoYXQuJGJvZHkpIC8vIGRvbid0IG1vdmUgbW9kYWxzIGRvbSBwb3NpdGlvblxuICAgICAgfVxuXG4gICAgICB0aGF0LiRlbGVtZW50XG4gICAgICAgIC5zaG93KClcbiAgICAgICAgLnNjcm9sbFRvcCgwKVxuXG4gICAgICB0aGF0LmFkanVzdERpYWxvZygpXG5cbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRoYXQuJGVsZW1lbnRbMF0ub2Zmc2V0V2lkdGggLy8gZm9yY2UgcmVmbG93XG4gICAgICB9XG5cbiAgICAgIHRoYXQuJGVsZW1lbnQuYWRkQ2xhc3MoJ2luJylcblxuICAgICAgdGhhdC5lbmZvcmNlRm9jdXMoKVxuXG4gICAgICB2YXIgZSA9ICQuRXZlbnQoJ3Nob3duLmJzLm1vZGFsJywgeyByZWxhdGVkVGFyZ2V0OiBfcmVsYXRlZFRhcmdldCB9KVxuXG4gICAgICB0cmFuc2l0aW9uID9cbiAgICAgICAgdGhhdC4kZGlhbG9nIC8vIHdhaXQgZm9yIG1vZGFsIHRvIHNsaWRlIGluXG4gICAgICAgICAgLm9uZSgnYnNUcmFuc2l0aW9uRW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC4kZWxlbWVudC50cmlnZ2VyKCdmb2N1cycpLnRyaWdnZXIoZSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChNb2RhbC5UUkFOU0lUSU9OX0RVUkFUSU9OKSA6XG4gICAgICAgIHRoYXQuJGVsZW1lbnQudHJpZ2dlcignZm9jdXMnKS50cmlnZ2VyKGUpXG4gICAgfSlcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZSkgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBlID0gJC5FdmVudCgnaGlkZS5icy5tb2RhbCcpXG5cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSlcblxuICAgIGlmICghdGhpcy5pc1Nob3duIHx8IGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgdGhpcy5pc1Nob3duID0gZmFsc2VcblxuICAgIHRoaXMuZXNjYXBlKClcbiAgICB0aGlzLnJlc2l6ZSgpXG5cbiAgICAkKGRvY3VtZW50KS5vZmYoJ2ZvY3VzaW4uYnMubW9kYWwnKVxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLnJlbW92ZUNsYXNzKCdpbicpXG4gICAgICAub2ZmKCdjbGljay5kaXNtaXNzLmJzLm1vZGFsJylcbiAgICAgIC5vZmYoJ21vdXNldXAuZGlzbWlzcy5icy5tb2RhbCcpXG5cbiAgICB0aGlzLiRkaWFsb2cub2ZmKCdtb3VzZWRvd24uZGlzbWlzcy5icy5tb2RhbCcpXG5cbiAgICAkLnN1cHBvcnQudHJhbnNpdGlvbiAmJiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdmYWRlJykgP1xuICAgICAgdGhpcy4kZWxlbWVudFxuICAgICAgICAub25lKCdic1RyYW5zaXRpb25FbmQnLCAkLnByb3h5KHRoaXMuaGlkZU1vZGFsLCB0aGlzKSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKE1vZGFsLlRSQU5TSVRJT05fRFVSQVRJT04pIDpcbiAgICAgIHRoaXMuaGlkZU1vZGFsKClcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5lbmZvcmNlRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJChkb2N1bWVudClcbiAgICAgIC5vZmYoJ2ZvY3VzaW4uYnMubW9kYWwnKSAvLyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICAgIC5vbignZm9jdXNpbi5icy5tb2RhbCcsICQucHJveHkoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50ICE9PSBlLnRhcmdldCAmJlxuICAgICAgICAgICAgdGhpcy4kZWxlbWVudFswXSAhPT0gZS50YXJnZXQgJiZcbiAgICAgICAgICAgICF0aGlzLiRlbGVtZW50LmhhcyhlLnRhcmdldCkubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdmb2N1cycpXG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpKVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLmVzY2FwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pc1Nob3duICYmIHRoaXMub3B0aW9ucy5rZXlib2FyZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC5vbigna2V5ZG93bi5kaXNtaXNzLmJzLm1vZGFsJywgJC5wcm94eShmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLndoaWNoID09IDI3ICYmIHRoaXMuaGlkZSgpXG4gICAgICB9LCB0aGlzKSlcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzU2hvd24pIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdrZXlkb3duLmRpc21pc3MuYnMubW9kYWwnKVxuICAgIH1cbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaXNTaG93bikge1xuICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuYnMubW9kYWwnLCAkLnByb3h5KHRoaXMuaGFuZGxlVXBkYXRlLCB0aGlzKSlcbiAgICB9IGVsc2Uge1xuICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplLmJzLm1vZGFsJylcbiAgICB9XG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUuaGlkZU1vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgIHRoaXMuJGVsZW1lbnQuaGlkZSgpXG4gICAgdGhpcy5iYWNrZHJvcChmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0LiRib2R5LnJlbW92ZUNsYXNzKCdtb2RhbC1vcGVuJylcbiAgICAgIHRoYXQucmVzZXRBZGp1c3RtZW50cygpXG4gICAgICB0aGF0LnJlc2V0U2Nyb2xsYmFyKClcbiAgICAgIHRoYXQuJGVsZW1lbnQudHJpZ2dlcignaGlkZGVuLmJzLm1vZGFsJylcbiAgICB9KVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLnJlbW92ZUJhY2tkcm9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJGJhY2tkcm9wICYmIHRoaXMuJGJhY2tkcm9wLnJlbW92ZSgpXG4gICAgdGhpcy4kYmFja2Ryb3AgPSBudWxsXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUuYmFja2Ryb3AgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICB2YXIgYW5pbWF0ZSA9IHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2ZhZGUnKSA/ICdmYWRlJyA6ICcnXG5cbiAgICBpZiAodGhpcy5pc1Nob3duICYmIHRoaXMub3B0aW9ucy5iYWNrZHJvcCkge1xuICAgICAgdmFyIGRvQW5pbWF0ZSA9ICQuc3VwcG9ydC50cmFuc2l0aW9uICYmIGFuaW1hdGVcblxuICAgICAgdGhpcy4kYmFja2Ryb3AgPSAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuICAgICAgICAuYWRkQ2xhc3MoJ21vZGFsLWJhY2tkcm9wICcgKyBhbmltYXRlKVxuICAgICAgICAuYXBwZW5kVG8odGhpcy4kYm9keSlcblxuICAgICAgdGhpcy4kZWxlbWVudC5vbignY2xpY2suZGlzbWlzcy5icy5tb2RhbCcsICQucHJveHkoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaWdub3JlQmFja2Ryb3BDbGljaykge1xuICAgICAgICAgIHRoaXMuaWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpIHJldHVyblxuICAgICAgICB0aGlzLm9wdGlvbnMuYmFja2Ryb3AgPT0gJ3N0YXRpYydcbiAgICAgICAgICA/IHRoaXMuJGVsZW1lbnRbMF0uZm9jdXMoKVxuICAgICAgICAgIDogdGhpcy5oaWRlKClcbiAgICAgIH0sIHRoaXMpKVxuXG4gICAgICBpZiAoZG9BbmltYXRlKSB0aGlzLiRiYWNrZHJvcFswXS5vZmZzZXRXaWR0aCAvLyBmb3JjZSByZWZsb3dcblxuICAgICAgdGhpcy4kYmFja2Ryb3AuYWRkQ2xhc3MoJ2luJylcblxuICAgICAgaWYgKCFjYWxsYmFjaykgcmV0dXJuXG5cbiAgICAgIGRvQW5pbWF0ZSA/XG4gICAgICAgIHRoaXMuJGJhY2tkcm9wXG4gICAgICAgICAgLm9uZSgnYnNUcmFuc2l0aW9uRW5kJywgY2FsbGJhY2spXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKE1vZGFsLkJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04pIDpcbiAgICAgICAgY2FsbGJhY2soKVxuXG4gICAgfSBlbHNlIGlmICghdGhpcy5pc1Nob3duICYmIHRoaXMuJGJhY2tkcm9wKSB7XG4gICAgICB0aGlzLiRiYWNrZHJvcC5yZW1vdmVDbGFzcygnaW4nKVxuXG4gICAgICB2YXIgY2FsbGJhY2tSZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoYXQucmVtb3ZlQmFja2Ryb3AoKVxuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgICAkLnN1cHBvcnQudHJhbnNpdGlvbiAmJiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdmYWRlJykgP1xuICAgICAgICB0aGlzLiRiYWNrZHJvcFxuICAgICAgICAgIC5vbmUoJ2JzVHJhbnNpdGlvbkVuZCcsIGNhbGxiYWNrUmVtb3ZlKVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChNb2RhbC5CQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OKSA6XG4gICAgICAgIGNhbGxiYWNrUmVtb3ZlKClcblxuICAgIH0gZWxzZSBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICAvLyB0aGVzZSBmb2xsb3dpbmcgbWV0aG9kcyBhcmUgdXNlZCB0byBoYW5kbGUgb3ZlcmZsb3dpbmcgbW9kYWxzXG5cbiAgTW9kYWwucHJvdG90eXBlLmhhbmRsZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFkanVzdERpYWxvZygpXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUuYWRqdXN0RGlhbG9nID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtb2RhbElzT3ZlcmZsb3dpbmcgPSB0aGlzLiRlbGVtZW50WzBdLnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcblxuICAgIHRoaXMuJGVsZW1lbnQuY3NzKHtcbiAgICAgIHBhZGRpbmdMZWZ0OiAgIXRoaXMuYm9keUlzT3ZlcmZsb3dpbmcgJiYgbW9kYWxJc092ZXJmbG93aW5nID8gdGhpcy5zY3JvbGxiYXJXaWR0aCA6ICcnLFxuICAgICAgcGFkZGluZ1JpZ2h0OiB0aGlzLmJvZHlJc092ZXJmbG93aW5nICYmICFtb2RhbElzT3ZlcmZsb3dpbmcgPyB0aGlzLnNjcm9sbGJhcldpZHRoIDogJydcbiAgICB9KVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLnJlc2V0QWRqdXN0bWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jc3Moe1xuICAgICAgcGFkZGluZ0xlZnQ6ICcnLFxuICAgICAgcGFkZGluZ1JpZ2h0OiAnJ1xuICAgIH0pXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUuY2hlY2tTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZ1bGxXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgaWYgKCFmdWxsV2luZG93V2lkdGgpIHsgLy8gd29ya2Fyb3VuZCBmb3IgbWlzc2luZyB3aW5kb3cuaW5uZXJXaWR0aCBpbiBJRThcbiAgICAgIHZhciBkb2N1bWVudEVsZW1lbnRSZWN0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBmdWxsV2luZG93V2lkdGggPSBkb2N1bWVudEVsZW1lbnRSZWN0LnJpZ2h0IC0gTWF0aC5hYnMoZG9jdW1lbnRFbGVtZW50UmVjdC5sZWZ0KVxuICAgIH1cbiAgICB0aGlzLmJvZHlJc092ZXJmbG93aW5nID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IGZ1bGxXaW5kb3dXaWR0aFxuICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGggPSB0aGlzLm1lYXN1cmVTY3JvbGxiYXIoKVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLnNldFNjcm9sbGJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYm9keVBhZCA9IHBhcnNlSW50KCh0aGlzLiRib2R5LmNzcygncGFkZGluZy1yaWdodCcpIHx8IDApLCAxMClcbiAgICB0aGlzLm9yaWdpbmFsQm9keVBhZCA9IGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0IHx8ICcnXG4gICAgaWYgKHRoaXMuYm9keUlzT3ZlcmZsb3dpbmcpIHRoaXMuJGJvZHkuY3NzKCdwYWRkaW5nLXJpZ2h0JywgYm9keVBhZCArIHRoaXMuc2Nyb2xsYmFyV2lkdGgpXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUucmVzZXRTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kYm9keS5jc3MoJ3BhZGRpbmctcmlnaHQnLCB0aGlzLm9yaWdpbmFsQm9keVBhZClcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5tZWFzdXJlU2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkgeyAvLyB0aHggd2Fsc2hcbiAgICB2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJ1xuICAgIHRoaXMuJGJvZHkuYXBwZW5kKHNjcm9sbERpdilcbiAgICB2YXIgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGhcbiAgICB0aGlzLiRib2R5WzBdLnJlbW92ZUNoaWxkKHNjcm9sbERpdilcbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGhcbiAgfVxuXG5cbiAgLy8gTU9EQUwgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBQbHVnaW4ob3B0aW9uLCBfcmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLm1vZGFsJylcbiAgICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe30sIE1vZGFsLkRFRkFVTFRTLCAkdGhpcy5kYXRhKCksIHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uKVxuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLm1vZGFsJywgKGRhdGEgPSBuZXcgTW9kYWwodGhpcywgb3B0aW9ucykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXShfcmVsYXRlZFRhcmdldClcbiAgICAgIGVsc2UgaWYgKG9wdGlvbnMuc2hvdykgZGF0YS5zaG93KF9yZWxhdGVkVGFyZ2V0KVxuICAgIH0pXG4gIH1cblxuICB2YXIgb2xkID0gJC5mbi5tb2RhbFxuXG4gICQuZm4ubW9kYWwgICAgICAgICAgICAgPSBQbHVnaW5cbiAgJC5mbi5tb2RhbC5Db25zdHJ1Y3RvciA9IE1vZGFsXG5cblxuICAvLyBNT0RBTCBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PVxuXG4gICQuZm4ubW9kYWwubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLm1vZGFsID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gTU9EQUwgREFUQS1BUElcbiAgLy8gPT09PT09PT09PT09PT1cblxuICAkKGRvY3VtZW50KS5vbignY2xpY2suYnMubW9kYWwuZGF0YS1hcGknLCAnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgIHZhciBocmVmICAgID0gJHRoaXMuYXR0cignaHJlZicpXG4gICAgdmFyICR0YXJnZXQgPSAkKCR0aGlzLmF0dHIoJ2RhdGEtdGFyZ2V0JykgfHwgKGhyZWYgJiYgaHJlZi5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLCAnJykpKSAvLyBzdHJpcCBmb3IgaWU3XG4gICAgdmFyIG9wdGlvbiAgPSAkdGFyZ2V0LmRhdGEoJ2JzLm1vZGFsJykgPyAndG9nZ2xlJyA6ICQuZXh0ZW5kKHsgcmVtb3RlOiAhLyMvLnRlc3QoaHJlZikgJiYgaHJlZiB9LCAkdGFyZ2V0LmRhdGEoKSwgJHRoaXMuZGF0YSgpKVxuXG4gICAgaWYgKCR0aGlzLmlzKCdhJykpIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgJHRhcmdldC5vbmUoJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoc2hvd0V2ZW50KSB7XG4gICAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm4gLy8gb25seSByZWdpc3RlciBmb2N1cyByZXN0b3JlciBpZiBtb2RhbCB3aWxsIGFjdHVhbGx5IGdldCBzaG93blxuICAgICAgJHRhcmdldC5vbmUoJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHRoaXMuaXMoJzp2aXNpYmxlJykgJiYgJHRoaXMudHJpZ2dlcignZm9jdXMnKVxuICAgICAgfSlcbiAgICB9KVxuICAgIFBsdWdpbi5jYWxsKCR0YXJnZXQsIG9wdGlvbiwgdGhpcylcbiAgfSlcblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogdG9vbHRpcC5qcyB2My4zLjdcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI3Rvb2x0aXBcbiAqIEluc3BpcmVkIGJ5IHRoZSBvcmlnaW5hbCBqUXVlcnkudGlwc3kgYnkgSmFzb24gRnJhbWVcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNiBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBUT09MVElQIFBVQkxJQyBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgVG9vbHRpcCA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy50eXBlICAgICAgID0gbnVsbFxuICAgIHRoaXMub3B0aW9ucyAgICA9IG51bGxcbiAgICB0aGlzLmVuYWJsZWQgICAgPSBudWxsXG4gICAgdGhpcy50aW1lb3V0ICAgID0gbnVsbFxuICAgIHRoaXMuaG92ZXJTdGF0ZSA9IG51bGxcbiAgICB0aGlzLiRlbGVtZW50ICAgPSBudWxsXG4gICAgdGhpcy5pblN0YXRlICAgID0gbnVsbFxuXG4gICAgdGhpcy5pbml0KCd0b29sdGlwJywgZWxlbWVudCwgb3B0aW9ucylcbiAgfVxuXG4gIFRvb2x0aXAuVkVSU0lPTiAgPSAnMy4zLjcnXG5cbiAgVG9vbHRpcC5UUkFOU0lUSU9OX0RVUkFUSU9OID0gMTUwXG5cbiAgVG9vbHRpcC5ERUZBVUxUUyA9IHtcbiAgICBhbmltYXRpb246IHRydWUsXG4gICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICBzZWxlY3RvcjogZmFsc2UsXG4gICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXG4gICAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcbiAgICB0aXRsZTogJycsXG4gICAgZGVsYXk6IDAsXG4gICAgaHRtbDogZmFsc2UsXG4gICAgY29udGFpbmVyOiBmYWxzZSxcbiAgICB2aWV3cG9ydDoge1xuICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgIHBhZGRpbmc6IDBcbiAgICB9XG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHR5cGUsIGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmVuYWJsZWQgICA9IHRydWVcbiAgICB0aGlzLnR5cGUgICAgICA9IHR5cGVcbiAgICB0aGlzLiRlbGVtZW50ICA9ICQoZWxlbWVudClcbiAgICB0aGlzLm9wdGlvbnMgICA9IHRoaXMuZ2V0T3B0aW9ucyhvcHRpb25zKVxuICAgIHRoaXMuJHZpZXdwb3J0ID0gdGhpcy5vcHRpb25zLnZpZXdwb3J0ICYmICQoJC5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy52aWV3cG9ydCkgPyB0aGlzLm9wdGlvbnMudmlld3BvcnQuY2FsbCh0aGlzLCB0aGlzLiRlbGVtZW50KSA6ICh0aGlzLm9wdGlvbnMudmlld3BvcnQuc2VsZWN0b3IgfHwgdGhpcy5vcHRpb25zLnZpZXdwb3J0KSlcbiAgICB0aGlzLmluU3RhdGUgICA9IHsgY2xpY2s6IGZhbHNlLCBob3ZlcjogZmFsc2UsIGZvY3VzOiBmYWxzZSB9XG5cbiAgICBpZiAodGhpcy4kZWxlbWVudFswXSBpbnN0YW5jZW9mIGRvY3VtZW50LmNvbnN0cnVjdG9yICYmICF0aGlzLm9wdGlvbnMuc2VsZWN0b3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHNlbGVjdG9yYCBvcHRpb24gbXVzdCBiZSBzcGVjaWZpZWQgd2hlbiBpbml0aWFsaXppbmcgJyArIHRoaXMudHlwZSArICcgb24gdGhlIHdpbmRvdy5kb2N1bWVudCBvYmplY3QhJylcbiAgICB9XG5cbiAgICB2YXIgdHJpZ2dlcnMgPSB0aGlzLm9wdGlvbnMudHJpZ2dlci5zcGxpdCgnICcpXG5cbiAgICBmb3IgKHZhciBpID0gdHJpZ2dlcnMubGVuZ3RoOyBpLS07KSB7XG4gICAgICB2YXIgdHJpZ2dlciA9IHRyaWdnZXJzW2ldXG5cbiAgICAgIGlmICh0cmlnZ2VyID09ICdjbGljaycpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vbignY2xpY2suJyArIHRoaXMudHlwZSwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCAkLnByb3h5KHRoaXMudG9nZ2xlLCB0aGlzKSlcbiAgICAgIH0gZWxzZSBpZiAodHJpZ2dlciAhPSAnbWFudWFsJykge1xuICAgICAgICB2YXIgZXZlbnRJbiAgPSB0cmlnZ2VyID09ICdob3ZlcicgPyAnbW91c2VlbnRlcicgOiAnZm9jdXNpbidcbiAgICAgICAgdmFyIGV2ZW50T3V0ID0gdHJpZ2dlciA9PSAnaG92ZXInID8gJ21vdXNlbGVhdmUnIDogJ2ZvY3Vzb3V0J1xuXG4gICAgICAgIHRoaXMuJGVsZW1lbnQub24oZXZlbnRJbiAgKyAnLicgKyB0aGlzLnR5cGUsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgJC5wcm94eSh0aGlzLmVudGVyLCB0aGlzKSlcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vbihldmVudE91dCArICcuJyArIHRoaXMudHlwZSwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCAkLnByb3h5KHRoaXMubGVhdmUsIHRoaXMpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucy5zZWxlY3RvciA/XG4gICAgICAodGhpcy5fb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMsIHsgdHJpZ2dlcjogJ21hbnVhbCcsIHNlbGVjdG9yOiAnJyB9KSkgOlxuICAgICAgdGhpcy5maXhUaXRsZSgpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5nZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gVG9vbHRpcC5ERUZBVUxUU1xuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmdldERlZmF1bHRzKCksIHRoaXMuJGVsZW1lbnQuZGF0YSgpLCBvcHRpb25zKVxuXG4gICAgaWYgKG9wdGlvbnMuZGVsYXkgJiYgdHlwZW9mIG9wdGlvbnMuZGVsYXkgPT0gJ251bWJlcicpIHtcbiAgICAgIG9wdGlvbnMuZGVsYXkgPSB7XG4gICAgICAgIHNob3c6IG9wdGlvbnMuZGVsYXksXG4gICAgICAgIGhpZGU6IG9wdGlvbnMuZGVsYXlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9uc1xuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZ2V0RGVsZWdhdGVPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zICA9IHt9XG4gICAgdmFyIGRlZmF1bHRzID0gdGhpcy5nZXREZWZhdWx0cygpXG5cbiAgICB0aGlzLl9vcHRpb25zICYmICQuZWFjaCh0aGlzLl9vcHRpb25zLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKGRlZmF1bHRzW2tleV0gIT0gdmFsdWUpIG9wdGlvbnNba2V5XSA9IHZhbHVlXG4gICAgfSlcblxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5lbnRlciA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgc2VsZiA9IG9iaiBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3IgP1xuICAgICAgb2JqIDogJChvYmouY3VycmVudFRhcmdldCkuZGF0YSgnYnMuJyArIHRoaXMudHlwZSlcblxuICAgIGlmICghc2VsZikge1xuICAgICAgc2VsZiA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG9iai5jdXJyZW50VGFyZ2V0LCB0aGlzLmdldERlbGVnYXRlT3B0aW9ucygpKVxuICAgICAgJChvYmouY3VycmVudFRhcmdldCkuZGF0YSgnYnMuJyArIHRoaXMudHlwZSwgc2VsZilcbiAgICB9XG5cbiAgICBpZiAob2JqIGluc3RhbmNlb2YgJC5FdmVudCkge1xuICAgICAgc2VsZi5pblN0YXRlW29iai50eXBlID09ICdmb2N1c2luJyA/ICdmb2N1cycgOiAnaG92ZXInXSA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50aXAoKS5oYXNDbGFzcygnaW4nKSB8fCBzZWxmLmhvdmVyU3RhdGUgPT0gJ2luJykge1xuICAgICAgc2VsZi5ob3ZlclN0YXRlID0gJ2luJ1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KHNlbGYudGltZW91dClcblxuICAgIHNlbGYuaG92ZXJTdGF0ZSA9ICdpbidcblxuICAgIGlmICghc2VsZi5vcHRpb25zLmRlbGF5IHx8ICFzZWxmLm9wdGlvbnMuZGVsYXkuc2hvdykgcmV0dXJuIHNlbGYuc2hvdygpXG5cbiAgICBzZWxmLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzZWxmLmhvdmVyU3RhdGUgPT0gJ2luJykgc2VsZi5zaG93KClcbiAgICB9LCBzZWxmLm9wdGlvbnMuZGVsYXkuc2hvdylcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmlzSW5TdGF0ZVRydWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuaW5TdGF0ZSkge1xuICAgICAgaWYgKHRoaXMuaW5TdGF0ZVtrZXldKSByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUubGVhdmUgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIHNlbGYgPSBvYmogaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yID9cbiAgICAgIG9iaiA6ICQob2JqLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2JzLicgKyB0aGlzLnR5cGUpXG5cbiAgICBpZiAoIXNlbGYpIHtcbiAgICAgIHNlbGYgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihvYmouY3VycmVudFRhcmdldCwgdGhpcy5nZXREZWxlZ2F0ZU9wdGlvbnMoKSlcbiAgICAgICQob2JqLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2JzLicgKyB0aGlzLnR5cGUsIHNlbGYpXG4gICAgfVxuXG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mICQuRXZlbnQpIHtcbiAgICAgIHNlbGYuaW5TdGF0ZVtvYmoudHlwZSA9PSAnZm9jdXNvdXQnID8gJ2ZvY3VzJyA6ICdob3ZlciddID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoc2VsZi5pc0luU3RhdGVUcnVlKCkpIHJldHVyblxuXG4gICAgY2xlYXJUaW1lb3V0KHNlbGYudGltZW91dClcblxuICAgIHNlbGYuaG92ZXJTdGF0ZSA9ICdvdXQnXG5cbiAgICBpZiAoIXNlbGYub3B0aW9ucy5kZWxheSB8fCAhc2VsZi5vcHRpb25zLmRlbGF5LmhpZGUpIHJldHVybiBzZWxmLmhpZGUoKVxuXG4gICAgc2VsZi50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2VsZi5ob3ZlclN0YXRlID09ICdvdXQnKSBzZWxmLmhpZGUoKVxuICAgIH0sIHNlbGYub3B0aW9ucy5kZWxheS5oaWRlKVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZSA9ICQuRXZlbnQoJ3Nob3cuYnMuJyArIHRoaXMudHlwZSlcblxuICAgIGlmICh0aGlzLmhhc0NvbnRlbnQoKSAmJiB0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihlKVxuXG4gICAgICB2YXIgaW5Eb20gPSAkLmNvbnRhaW5zKHRoaXMuJGVsZW1lbnRbMF0ub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMuJGVsZW1lbnRbMF0pXG4gICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCAhaW5Eb20pIHJldHVyblxuICAgICAgdmFyIHRoYXQgPSB0aGlzXG5cbiAgICAgIHZhciAkdGlwID0gdGhpcy50aXAoKVxuXG4gICAgICB2YXIgdGlwSWQgPSB0aGlzLmdldFVJRCh0aGlzLnR5cGUpXG5cbiAgICAgIHRoaXMuc2V0Q29udGVudCgpXG4gICAgICAkdGlwLmF0dHIoJ2lkJywgdGlwSWQpXG4gICAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXBJZClcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRpb24pICR0aXAuYWRkQ2xhc3MoJ2ZhZGUnKVxuXG4gICAgICB2YXIgcGxhY2VtZW50ID0gdHlwZW9mIHRoaXMub3B0aW9ucy5wbGFjZW1lbnQgPT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgIHRoaXMub3B0aW9ucy5wbGFjZW1lbnQuY2FsbCh0aGlzLCAkdGlwWzBdLCB0aGlzLiRlbGVtZW50WzBdKSA6XG4gICAgICAgIHRoaXMub3B0aW9ucy5wbGFjZW1lbnRcblxuICAgICAgdmFyIGF1dG9Ub2tlbiA9IC9cXHM/YXV0bz9cXHM/L2lcbiAgICAgIHZhciBhdXRvUGxhY2UgPSBhdXRvVG9rZW4udGVzdChwbGFjZW1lbnQpXG4gICAgICBpZiAoYXV0b1BsYWNlKSBwbGFjZW1lbnQgPSBwbGFjZW1lbnQucmVwbGFjZShhdXRvVG9rZW4sICcnKSB8fCAndG9wJ1xuXG4gICAgICAkdGlwXG4gICAgICAgIC5kZXRhY2goKVxuICAgICAgICAuY3NzKHsgdG9wOiAwLCBsZWZ0OiAwLCBkaXNwbGF5OiAnYmxvY2snIH0pXG4gICAgICAgIC5hZGRDbGFzcyhwbGFjZW1lbnQpXG4gICAgICAgIC5kYXRhKCdicy4nICsgdGhpcy50eXBlLCB0aGlzKVxuXG4gICAgICB0aGlzLm9wdGlvbnMuY29udGFpbmVyID8gJHRpcC5hcHBlbmRUbyh0aGlzLm9wdGlvbnMuY29udGFpbmVyKSA6ICR0aXAuaW5zZXJ0QWZ0ZXIodGhpcy4kZWxlbWVudClcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignaW5zZXJ0ZWQuYnMuJyArIHRoaXMudHlwZSlcblxuICAgICAgdmFyIHBvcyAgICAgICAgICA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgICAgdmFyIGFjdHVhbFdpZHRoICA9ICR0aXBbMF0ub2Zmc2V0V2lkdGhcbiAgICAgIHZhciBhY3R1YWxIZWlnaHQgPSAkdGlwWzBdLm9mZnNldEhlaWdodFxuXG4gICAgICBpZiAoYXV0b1BsYWNlKSB7XG4gICAgICAgIHZhciBvcmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRcbiAgICAgICAgdmFyIHZpZXdwb3J0RGltID0gdGhpcy5nZXRQb3NpdGlvbih0aGlzLiR2aWV3cG9ydClcblxuICAgICAgICBwbGFjZW1lbnQgPSBwbGFjZW1lbnQgPT0gJ2JvdHRvbScgJiYgcG9zLmJvdHRvbSArIGFjdHVhbEhlaWdodCA+IHZpZXdwb3J0RGltLmJvdHRvbSA/ICd0b3AnICAgIDpcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50ID09ICd0b3AnICAgICYmIHBvcy50b3AgICAgLSBhY3R1YWxIZWlnaHQgPCB2aWV3cG9ydERpbS50b3AgICAgPyAnYm90dG9tJyA6XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudCA9PSAncmlnaHQnICAmJiBwb3MucmlnaHQgICsgYWN0dWFsV2lkdGggID4gdmlld3BvcnREaW0ud2lkdGggID8gJ2xlZnQnICAgOlxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQgPT0gJ2xlZnQnICAgJiYgcG9zLmxlZnQgICAtIGFjdHVhbFdpZHRoICA8IHZpZXdwb3J0RGltLmxlZnQgICA/ICdyaWdodCcgIDpcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50XG5cbiAgICAgICAgJHRpcFxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhvcmdQbGFjZW1lbnQpXG4gICAgICAgICAgLmFkZENsYXNzKHBsYWNlbWVudClcbiAgICAgIH1cblxuICAgICAgdmFyIGNhbGN1bGF0ZWRPZmZzZXQgPSB0aGlzLmdldENhbGN1bGF0ZWRPZmZzZXQocGxhY2VtZW50LCBwb3MsIGFjdHVhbFdpZHRoLCBhY3R1YWxIZWlnaHQpXG5cbiAgICAgIHRoaXMuYXBwbHlQbGFjZW1lbnQoY2FsY3VsYXRlZE9mZnNldCwgcGxhY2VtZW50KVxuXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwcmV2SG92ZXJTdGF0ZSA9IHRoYXQuaG92ZXJTdGF0ZVxuICAgICAgICB0aGF0LiRlbGVtZW50LnRyaWdnZXIoJ3Nob3duLmJzLicgKyB0aGF0LnR5cGUpXG4gICAgICAgIHRoYXQuaG92ZXJTdGF0ZSA9IG51bGxcblxuICAgICAgICBpZiAocHJldkhvdmVyU3RhdGUgPT0gJ291dCcpIHRoYXQubGVhdmUodGhhdClcbiAgICAgIH1cblxuICAgICAgJC5zdXBwb3J0LnRyYW5zaXRpb24gJiYgdGhpcy4kdGlwLmhhc0NsYXNzKCdmYWRlJykgP1xuICAgICAgICAkdGlwXG4gICAgICAgICAgLm9uZSgnYnNUcmFuc2l0aW9uRW5kJywgY29tcGxldGUpXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRvb2x0aXAuVFJBTlNJVElPTl9EVVJBVElPTikgOlxuICAgICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuYXBwbHlQbGFjZW1lbnQgPSBmdW5jdGlvbiAob2Zmc2V0LCBwbGFjZW1lbnQpIHtcbiAgICB2YXIgJHRpcCAgID0gdGhpcy50aXAoKVxuICAgIHZhciB3aWR0aCAgPSAkdGlwWzBdLm9mZnNldFdpZHRoXG4gICAgdmFyIGhlaWdodCA9ICR0aXBbMF0ub2Zmc2V0SGVpZ2h0XG5cbiAgICAvLyBtYW51YWxseSByZWFkIG1hcmdpbnMgYmVjYXVzZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgaW5jbHVkZXMgZGlmZmVyZW5jZVxuICAgIHZhciBtYXJnaW5Ub3AgPSBwYXJzZUludCgkdGlwLmNzcygnbWFyZ2luLXRvcCcpLCAxMClcbiAgICB2YXIgbWFyZ2luTGVmdCA9IHBhcnNlSW50KCR0aXAuY3NzKCdtYXJnaW4tbGVmdCcpLCAxMClcblxuICAgIC8vIHdlIG11c3QgY2hlY2sgZm9yIE5hTiBmb3IgaWUgOC85XG4gICAgaWYgKGlzTmFOKG1hcmdpblRvcCkpICBtYXJnaW5Ub3AgID0gMFxuICAgIGlmIChpc05hTihtYXJnaW5MZWZ0KSkgbWFyZ2luTGVmdCA9IDBcblxuICAgIG9mZnNldC50b3AgICs9IG1hcmdpblRvcFxuICAgIG9mZnNldC5sZWZ0ICs9IG1hcmdpbkxlZnRcblxuICAgIC8vICQuZm4ub2Zmc2V0IGRvZXNuJ3Qgcm91bmQgcGl4ZWwgdmFsdWVzXG4gICAgLy8gc28gd2UgdXNlIHNldE9mZnNldCBkaXJlY3RseSB3aXRoIG91ciBvd24gZnVuY3Rpb24gQi0wXG4gICAgJC5vZmZzZXQuc2V0T2Zmc2V0KCR0aXBbMF0sICQuZXh0ZW5kKHtcbiAgICAgIHVzaW5nOiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgJHRpcC5jc3Moe1xuICAgICAgICAgIHRvcDogTWF0aC5yb3VuZChwcm9wcy50b3ApLFxuICAgICAgICAgIGxlZnQ6IE1hdGgucm91bmQocHJvcHMubGVmdClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LCBvZmZzZXQpLCAwKVxuXG4gICAgJHRpcC5hZGRDbGFzcygnaW4nKVxuXG4gICAgLy8gY2hlY2sgdG8gc2VlIGlmIHBsYWNpbmcgdGlwIGluIG5ldyBvZmZzZXQgY2F1c2VkIHRoZSB0aXAgdG8gcmVzaXplIGl0c2VsZlxuICAgIHZhciBhY3R1YWxXaWR0aCAgPSAkdGlwWzBdLm9mZnNldFdpZHRoXG4gICAgdmFyIGFjdHVhbEhlaWdodCA9ICR0aXBbMF0ub2Zmc2V0SGVpZ2h0XG5cbiAgICBpZiAocGxhY2VtZW50ID09ICd0b3AnICYmIGFjdHVhbEhlaWdodCAhPSBoZWlnaHQpIHtcbiAgICAgIG9mZnNldC50b3AgPSBvZmZzZXQudG9wICsgaGVpZ2h0IC0gYWN0dWFsSGVpZ2h0XG4gICAgfVxuXG4gICAgdmFyIGRlbHRhID0gdGhpcy5nZXRWaWV3cG9ydEFkanVzdGVkRGVsdGEocGxhY2VtZW50LCBvZmZzZXQsIGFjdHVhbFdpZHRoLCBhY3R1YWxIZWlnaHQpXG5cbiAgICBpZiAoZGVsdGEubGVmdCkgb2Zmc2V0LmxlZnQgKz0gZGVsdGEubGVmdFxuICAgIGVsc2Ugb2Zmc2V0LnRvcCArPSBkZWx0YS50b3BcblxuICAgIHZhciBpc1ZlcnRpY2FsICAgICAgICAgID0gL3RvcHxib3R0b20vLnRlc3QocGxhY2VtZW50KVxuICAgIHZhciBhcnJvd0RlbHRhICAgICAgICAgID0gaXNWZXJ0aWNhbCA/IGRlbHRhLmxlZnQgKiAyIC0gd2lkdGggKyBhY3R1YWxXaWR0aCA6IGRlbHRhLnRvcCAqIDIgLSBoZWlnaHQgKyBhY3R1YWxIZWlnaHRcbiAgICB2YXIgYXJyb3dPZmZzZXRQb3NpdGlvbiA9IGlzVmVydGljYWwgPyAnb2Zmc2V0V2lkdGgnIDogJ29mZnNldEhlaWdodCdcblxuICAgICR0aXAub2Zmc2V0KG9mZnNldClcbiAgICB0aGlzLnJlcGxhY2VBcnJvdyhhcnJvd0RlbHRhLCAkdGlwWzBdW2Fycm93T2Zmc2V0UG9zaXRpb25dLCBpc1ZlcnRpY2FsKVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUucmVwbGFjZUFycm93ID0gZnVuY3Rpb24gKGRlbHRhLCBkaW1lbnNpb24sIGlzVmVydGljYWwpIHtcbiAgICB0aGlzLmFycm93KClcbiAgICAgIC5jc3MoaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnLCA1MCAqICgxIC0gZGVsdGEgLyBkaW1lbnNpb24pICsgJyUnKVxuICAgICAgLmNzcyhpc1ZlcnRpY2FsID8gJ3RvcCcgOiAnbGVmdCcsICcnKVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuc2V0Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHRpcCAgPSB0aGlzLnRpcCgpXG4gICAgdmFyIHRpdGxlID0gdGhpcy5nZXRUaXRsZSgpXG5cbiAgICAkdGlwLmZpbmQoJy50b29sdGlwLWlubmVyJylbdGhpcy5vcHRpb25zLmh0bWwgPyAnaHRtbCcgOiAndGV4dCddKHRpdGxlKVxuICAgICR0aXAucmVtb3ZlQ2xhc3MoJ2ZhZGUgaW4gdG9wIGJvdHRvbSBsZWZ0IHJpZ2h0JylcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICB2YXIgJHRpcCA9ICQodGhpcy4kdGlwKVxuICAgIHZhciBlICAgID0gJC5FdmVudCgnaGlkZS5icy4nICsgdGhpcy50eXBlKVxuXG4gICAgZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBpZiAodGhhdC5ob3ZlclN0YXRlICE9ICdpbicpICR0aXAuZGV0YWNoKClcbiAgICAgIGlmICh0aGF0LiRlbGVtZW50KSB7IC8vIFRPRE86IENoZWNrIHdoZXRoZXIgZ3VhcmRpbmcgdGhpcyBjb2RlIHdpdGggdGhpcyBgaWZgIGlzIHJlYWxseSBuZWNlc3NhcnkuXG4gICAgICAgIHRoYXQuJGVsZW1lbnRcbiAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1kZXNjcmliZWRieScpXG4gICAgICAgICAgLnRyaWdnZXIoJ2hpZGRlbi5icy4nICsgdGhhdC50eXBlKVxuICAgICAgfVxuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihlKVxuXG4gICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgJHRpcC5yZW1vdmVDbGFzcygnaW4nKVxuXG4gICAgJC5zdXBwb3J0LnRyYW5zaXRpb24gJiYgJHRpcC5oYXNDbGFzcygnZmFkZScpID9cbiAgICAgICR0aXBcbiAgICAgICAgLm9uZSgnYnNUcmFuc2l0aW9uRW5kJywgY29tcGxldGUpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChUb29sdGlwLlRSQU5TSVRJT05fRFVSQVRJT04pIDpcbiAgICAgIGNvbXBsZXRlKClcblxuICAgIHRoaXMuaG92ZXJTdGF0ZSA9IG51bGxcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5maXhUaXRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGUgPSB0aGlzLiRlbGVtZW50XG4gICAgaWYgKCRlLmF0dHIoJ3RpdGxlJykgfHwgdHlwZW9mICRlLmF0dHIoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKSAhPSAnc3RyaW5nJykge1xuICAgICAgJGUuYXR0cignZGF0YS1vcmlnaW5hbC10aXRsZScsICRlLmF0dHIoJ3RpdGxlJykgfHwgJycpLmF0dHIoJ3RpdGxlJywgJycpXG4gICAgfVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuaGFzQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUaXRsZSgpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgkZWxlbWVudCkge1xuICAgICRlbGVtZW50ICAgPSAkZWxlbWVudCB8fCB0aGlzLiRlbGVtZW50XG5cbiAgICB2YXIgZWwgICAgID0gJGVsZW1lbnRbMF1cbiAgICB2YXIgaXNCb2R5ID0gZWwudGFnTmFtZSA9PSAnQk9EWSdcblxuICAgIHZhciBlbFJlY3QgICAgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGlmIChlbFJlY3Qud2lkdGggPT0gbnVsbCkge1xuICAgICAgLy8gd2lkdGggYW5kIGhlaWdodCBhcmUgbWlzc2luZyBpbiBJRTgsIHNvIGNvbXB1dGUgdGhlbSBtYW51YWxseTsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTQwOTNcbiAgICAgIGVsUmVjdCA9ICQuZXh0ZW5kKHt9LCBlbFJlY3QsIHsgd2lkdGg6IGVsUmVjdC5yaWdodCAtIGVsUmVjdC5sZWZ0LCBoZWlnaHQ6IGVsUmVjdC5ib3R0b20gLSBlbFJlY3QudG9wIH0pXG4gICAgfVxuICAgIHZhciBpc1N2ZyA9IHdpbmRvdy5TVkdFbGVtZW50ICYmIGVsIGluc3RhbmNlb2Ygd2luZG93LlNWR0VsZW1lbnRcbiAgICAvLyBBdm9pZCB1c2luZyAkLm9mZnNldCgpIG9uIFNWR3Mgc2luY2UgaXQgZ2l2ZXMgaW5jb3JyZWN0IHJlc3VsdHMgaW4galF1ZXJ5IDMuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMjAyODBcbiAgICB2YXIgZWxPZmZzZXQgID0gaXNCb2R5ID8geyB0b3A6IDAsIGxlZnQ6IDAgfSA6IChpc1N2ZyA/IG51bGwgOiAkZWxlbWVudC5vZmZzZXQoKSlcbiAgICB2YXIgc2Nyb2xsICAgID0geyBzY3JvbGw6IGlzQm9keSA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgOiAkZWxlbWVudC5zY3JvbGxUb3AoKSB9XG4gICAgdmFyIG91dGVyRGltcyA9IGlzQm9keSA/IHsgd2lkdGg6ICQod2luZG93KS53aWR0aCgpLCBoZWlnaHQ6ICQod2luZG93KS5oZWlnaHQoKSB9IDogbnVsbFxuXG4gICAgcmV0dXJuICQuZXh0ZW5kKHt9LCBlbFJlY3QsIHNjcm9sbCwgb3V0ZXJEaW1zLCBlbE9mZnNldClcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmdldENhbGN1bGF0ZWRPZmZzZXQgPSBmdW5jdGlvbiAocGxhY2VtZW50LCBwb3MsIGFjdHVhbFdpZHRoLCBhY3R1YWxIZWlnaHQpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50ID09ICdib3R0b20nID8geyB0b3A6IHBvcy50b3AgKyBwb3MuaGVpZ2h0LCAgIGxlZnQ6IHBvcy5sZWZ0ICsgcG9zLndpZHRoIC8gMiAtIGFjdHVhbFdpZHRoIC8gMiB9IDpcbiAgICAgICAgICAgcGxhY2VtZW50ID09ICd0b3AnICAgID8geyB0b3A6IHBvcy50b3AgLSBhY3R1YWxIZWlnaHQsIGxlZnQ6IHBvcy5sZWZ0ICsgcG9zLndpZHRoIC8gMiAtIGFjdHVhbFdpZHRoIC8gMiB9IDpcbiAgICAgICAgICAgcGxhY2VtZW50ID09ICdsZWZ0JyAgID8geyB0b3A6IHBvcy50b3AgKyBwb3MuaGVpZ2h0IC8gMiAtIGFjdHVhbEhlaWdodCAvIDIsIGxlZnQ6IHBvcy5sZWZ0IC0gYWN0dWFsV2lkdGggfSA6XG4gICAgICAgIC8qIHBsYWNlbWVudCA9PSAncmlnaHQnICovIHsgdG9wOiBwb3MudG9wICsgcG9zLmhlaWdodCAvIDIgLSBhY3R1YWxIZWlnaHQgLyAyLCBsZWZ0OiBwb3MubGVmdCArIHBvcy53aWR0aCB9XG5cbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmdldFZpZXdwb3J0QWRqdXN0ZWREZWx0YSA9IGZ1bmN0aW9uIChwbGFjZW1lbnQsIHBvcywgYWN0dWFsV2lkdGgsIGFjdHVhbEhlaWdodCkge1xuICAgIHZhciBkZWx0YSA9IHsgdG9wOiAwLCBsZWZ0OiAwIH1cbiAgICBpZiAoIXRoaXMuJHZpZXdwb3J0KSByZXR1cm4gZGVsdGFcblxuICAgIHZhciB2aWV3cG9ydFBhZGRpbmcgPSB0aGlzLm9wdGlvbnMudmlld3BvcnQgJiYgdGhpcy5vcHRpb25zLnZpZXdwb3J0LnBhZGRpbmcgfHwgMFxuICAgIHZhciB2aWV3cG9ydERpbWVuc2lvbnMgPSB0aGlzLmdldFBvc2l0aW9uKHRoaXMuJHZpZXdwb3J0KVxuXG4gICAgaWYgKC9yaWdodHxsZWZ0Ly50ZXN0KHBsYWNlbWVudCkpIHtcbiAgICAgIHZhciB0b3BFZGdlT2Zmc2V0ICAgID0gcG9zLnRvcCAtIHZpZXdwb3J0UGFkZGluZyAtIHZpZXdwb3J0RGltZW5zaW9ucy5zY3JvbGxcbiAgICAgIHZhciBib3R0b21FZGdlT2Zmc2V0ID0gcG9zLnRvcCArIHZpZXdwb3J0UGFkZGluZyAtIHZpZXdwb3J0RGltZW5zaW9ucy5zY3JvbGwgKyBhY3R1YWxIZWlnaHRcbiAgICAgIGlmICh0b3BFZGdlT2Zmc2V0IDwgdmlld3BvcnREaW1lbnNpb25zLnRvcCkgeyAvLyB0b3Agb3ZlcmZsb3dcbiAgICAgICAgZGVsdGEudG9wID0gdmlld3BvcnREaW1lbnNpb25zLnRvcCAtIHRvcEVkZ2VPZmZzZXRcbiAgICAgIH0gZWxzZSBpZiAoYm90dG9tRWRnZU9mZnNldCA+IHZpZXdwb3J0RGltZW5zaW9ucy50b3AgKyB2aWV3cG9ydERpbWVuc2lvbnMuaGVpZ2h0KSB7IC8vIGJvdHRvbSBvdmVyZmxvd1xuICAgICAgICBkZWx0YS50b3AgPSB2aWV3cG9ydERpbWVuc2lvbnMudG9wICsgdmlld3BvcnREaW1lbnNpb25zLmhlaWdodCAtIGJvdHRvbUVkZ2VPZmZzZXRcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxlZnRFZGdlT2Zmc2V0ICA9IHBvcy5sZWZ0IC0gdmlld3BvcnRQYWRkaW5nXG4gICAgICB2YXIgcmlnaHRFZGdlT2Zmc2V0ID0gcG9zLmxlZnQgKyB2aWV3cG9ydFBhZGRpbmcgKyBhY3R1YWxXaWR0aFxuICAgICAgaWYgKGxlZnRFZGdlT2Zmc2V0IDwgdmlld3BvcnREaW1lbnNpb25zLmxlZnQpIHsgLy8gbGVmdCBvdmVyZmxvd1xuICAgICAgICBkZWx0YS5sZWZ0ID0gdmlld3BvcnREaW1lbnNpb25zLmxlZnQgLSBsZWZ0RWRnZU9mZnNldFxuICAgICAgfSBlbHNlIGlmIChyaWdodEVkZ2VPZmZzZXQgPiB2aWV3cG9ydERpbWVuc2lvbnMucmlnaHQpIHsgLy8gcmlnaHQgb3ZlcmZsb3dcbiAgICAgICAgZGVsdGEubGVmdCA9IHZpZXdwb3J0RGltZW5zaW9ucy5sZWZ0ICsgdmlld3BvcnREaW1lbnNpb25zLndpZHRoIC0gcmlnaHRFZGdlT2Zmc2V0XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlbHRhXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5nZXRUaXRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGl0bGVcbiAgICB2YXIgJGUgPSB0aGlzLiRlbGVtZW50XG4gICAgdmFyIG8gID0gdGhpcy5vcHRpb25zXG5cbiAgICB0aXRsZSA9ICRlLmF0dHIoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKVxuICAgICAgfHwgKHR5cGVvZiBvLnRpdGxlID09ICdmdW5jdGlvbicgPyBvLnRpdGxlLmNhbGwoJGVbMF0pIDogIG8udGl0bGUpXG5cbiAgICByZXR1cm4gdGl0bGVcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmdldFVJRCA9IGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICBkbyBwcmVmaXggKz0gfn4oTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApXG4gICAgd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpXG4gICAgcmV0dXJuIHByZWZpeFxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUudGlwID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy4kdGlwKSB7XG4gICAgICB0aGlzLiR0aXAgPSAkKHRoaXMub3B0aW9ucy50ZW1wbGF0ZSlcbiAgICAgIGlmICh0aGlzLiR0aXAubGVuZ3RoICE9IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMudHlwZSArICcgYHRlbXBsYXRlYCBvcHRpb24gbXVzdCBjb25zaXN0IG9mIGV4YWN0bHkgMSB0b3AtbGV2ZWwgZWxlbWVudCEnKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy4kdGlwXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5hcnJvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuJGFycm93ID0gdGhpcy4kYXJyb3cgfHwgdGhpcy50aXAoKS5maW5kKCcudG9vbHRpcC1hcnJvdycpKVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZW5hYmxlZCA9IHRydWVcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2VcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLnRvZ2dsZUVuYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbmFibGVkID0gIXRoaXMuZW5hYmxlZFxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBpZiAoZSkge1xuICAgICAgc2VsZiA9ICQoZS5jdXJyZW50VGFyZ2V0KS5kYXRhKCdicy4nICsgdGhpcy50eXBlKVxuICAgICAgaWYgKCFzZWxmKSB7XG4gICAgICAgIHNlbGYgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihlLmN1cnJlbnRUYXJnZXQsIHRoaXMuZ2V0RGVsZWdhdGVPcHRpb25zKCkpXG4gICAgICAgICQoZS5jdXJyZW50VGFyZ2V0KS5kYXRhKCdicy4nICsgdGhpcy50eXBlLCBzZWxmKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlKSB7XG4gICAgICBzZWxmLmluU3RhdGUuY2xpY2sgPSAhc2VsZi5pblN0YXRlLmNsaWNrXG4gICAgICBpZiAoc2VsZi5pc0luU3RhdGVUcnVlKCkpIHNlbGYuZW50ZXIoc2VsZilcbiAgICAgIGVsc2Ugc2VsZi5sZWF2ZShzZWxmKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLnRpcCgpLmhhc0NsYXNzKCdpbicpID8gc2VsZi5sZWF2ZShzZWxmKSA6IHNlbGYuZW50ZXIoc2VsZilcbiAgICB9XG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpXG4gICAgdGhpcy5oaWRlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQuJGVsZW1lbnQub2ZmKCcuJyArIHRoYXQudHlwZSkucmVtb3ZlRGF0YSgnYnMuJyArIHRoYXQudHlwZSlcbiAgICAgIGlmICh0aGF0LiR0aXApIHtcbiAgICAgICAgdGhhdC4kdGlwLmRldGFjaCgpXG4gICAgICB9XG4gICAgICB0aGF0LiR0aXAgPSBudWxsXG4gICAgICB0aGF0LiRhcnJvdyA9IG51bGxcbiAgICAgIHRoYXQuJHZpZXdwb3J0ID0gbnVsbFxuICAgICAgdGhhdC4kZWxlbWVudCA9IG51bGxcbiAgICB9KVxuICB9XG5cblxuICAvLyBUT09MVElQIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBQbHVnaW4ob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMudG9vbHRpcCcpXG4gICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uXG5cbiAgICAgIGlmICghZGF0YSAmJiAvZGVzdHJveXxoaWRlLy50ZXN0KG9wdGlvbikpIHJldHVyblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy50b29sdGlwJywgKGRhdGEgPSBuZXcgVG9vbHRpcCh0aGlzLCBvcHRpb25zKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKClcbiAgICB9KVxuICB9XG5cbiAgdmFyIG9sZCA9ICQuZm4udG9vbHRpcFxuXG4gICQuZm4udG9vbHRpcCAgICAgICAgICAgICA9IFBsdWdpblxuICAkLmZuLnRvb2x0aXAuQ29uc3RydWN0b3IgPSBUb29sdGlwXG5cblxuICAvLyBUT09MVElQIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLnRvb2x0aXAubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLnRvb2x0aXAgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IHBvcG92ZXIuanMgdjMuMy43XG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyNwb3BvdmVyc1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE2IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFBPUE9WRVIgUFVCTElDIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBQb3BvdmVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmluaXQoJ3BvcG92ZXInLCBlbGVtZW50LCBvcHRpb25zKVxuICB9XG5cbiAgaWYgKCEkLmZuLnRvb2x0aXApIHRocm93IG5ldyBFcnJvcignUG9wb3ZlciByZXF1aXJlcyB0b29sdGlwLmpzJylcblxuICBQb3BvdmVyLlZFUlNJT04gID0gJzMuMy43J1xuXG4gIFBvcG92ZXIuREVGQVVMVFMgPSAkLmV4dGVuZCh7fSwgJC5mbi50b29sdGlwLkNvbnN0cnVjdG9yLkRFRkFVTFRTLCB7XG4gICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgIHRyaWdnZXI6ICdjbGljaycsXG4gICAgY29udGVudDogJycsXG4gICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+PGgzIGNsYXNzPVwicG9wb3Zlci10aXRsZVwiPjwvaDM+PGRpdiBjbGFzcz1cInBvcG92ZXItY29udGVudFwiPjwvZGl2PjwvZGl2PidcbiAgfSlcblxuXG4gIC8vIE5PVEU6IFBPUE9WRVIgRVhURU5EUyB0b29sdGlwLmpzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgUG9wb3Zlci5wcm90b3R5cGUgPSAkLmV4dGVuZCh7fSwgJC5mbi50b29sdGlwLkNvbnN0cnVjdG9yLnByb3RvdHlwZSlcblxuICBQb3BvdmVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBvcG92ZXJcblxuICBQb3BvdmVyLnByb3RvdHlwZS5nZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gUG9wb3Zlci5ERUZBVUxUU1xuICB9XG5cbiAgUG9wb3Zlci5wcm90b3R5cGUuc2V0Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHRpcCAgICA9IHRoaXMudGlwKClcbiAgICB2YXIgdGl0bGUgICA9IHRoaXMuZ2V0VGl0bGUoKVxuICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KClcblxuICAgICR0aXAuZmluZCgnLnBvcG92ZXItdGl0bGUnKVt0aGlzLm9wdGlvbnMuaHRtbCA/ICdodG1sJyA6ICd0ZXh0J10odGl0bGUpXG4gICAgJHRpcC5maW5kKCcucG9wb3Zlci1jb250ZW50JykuY2hpbGRyZW4oKS5kZXRhY2goKS5lbmQoKVsgLy8gd2UgdXNlIGFwcGVuZCBmb3IgaHRtbCBvYmplY3RzIHRvIG1haW50YWluIGpzIGV2ZW50c1xuICAgICAgdGhpcy5vcHRpb25zLmh0bWwgPyAodHlwZW9mIGNvbnRlbnQgPT0gJ3N0cmluZycgPyAnaHRtbCcgOiAnYXBwZW5kJykgOiAndGV4dCdcbiAgICBdKGNvbnRlbnQpXG5cbiAgICAkdGlwLnJlbW92ZUNsYXNzKCdmYWRlIHRvcCBib3R0b20gbGVmdCByaWdodCBpbicpXG5cbiAgICAvLyBJRTggZG9lc24ndCBhY2NlcHQgaGlkaW5nIHZpYSB0aGUgYDplbXB0eWAgcHNldWRvIHNlbGVjdG9yLCB3ZSBoYXZlIHRvIGRvXG4gICAgLy8gdGhpcyBtYW51YWxseSBieSBjaGVja2luZyB0aGUgY29udGVudHMuXG4gICAgaWYgKCEkdGlwLmZpbmQoJy5wb3BvdmVyLXRpdGxlJykuaHRtbCgpKSAkdGlwLmZpbmQoJy5wb3BvdmVyLXRpdGxlJykuaGlkZSgpXG4gIH1cblxuICBQb3BvdmVyLnByb3RvdHlwZS5oYXNDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmdldFRpdGxlKCkgfHwgdGhpcy5nZXRDb250ZW50KClcbiAgfVxuXG4gIFBvcG92ZXIucHJvdG90eXBlLmdldENvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRlID0gdGhpcy4kZWxlbWVudFxuICAgIHZhciBvICA9IHRoaXMub3B0aW9uc1xuXG4gICAgcmV0dXJuICRlLmF0dHIoJ2RhdGEtY29udGVudCcpXG4gICAgICB8fCAodHlwZW9mIG8uY29udGVudCA9PSAnZnVuY3Rpb24nID9cbiAgICAgICAgICAgIG8uY29udGVudC5jYWxsKCRlWzBdKSA6XG4gICAgICAgICAgICBvLmNvbnRlbnQpXG4gIH1cblxuICBQb3BvdmVyLnByb3RvdHlwZS5hcnJvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuJGFycm93ID0gdGhpcy4kYXJyb3cgfHwgdGhpcy50aXAoKS5maW5kKCcuYXJyb3cnKSlcbiAgfVxuXG5cbiAgLy8gUE9QT1ZFUiBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gUGx1Z2luKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLnBvcG92ZXInKVxuICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvblxuXG4gICAgICBpZiAoIWRhdGEgJiYgL2Rlc3Ryb3l8aGlkZS8udGVzdChvcHRpb24pKSByZXR1cm5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMucG9wb3ZlcicsIChkYXRhID0gbmV3IFBvcG92ZXIodGhpcywgb3B0aW9ucykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXSgpXG4gICAgfSlcbiAgfVxuXG4gIHZhciBvbGQgPSAkLmZuLnBvcG92ZXJcblxuICAkLmZuLnBvcG92ZXIgICAgICAgICAgICAgPSBQbHVnaW5cbiAgJC5mbi5wb3BvdmVyLkNvbnN0cnVjdG9yID0gUG9wb3ZlclxuXG5cbiAgLy8gUE9QT1ZFUiBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi5wb3BvdmVyLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi5wb3BvdmVyID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiBzY3JvbGxzcHkuanMgdjMuMy43XG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyNzY3JvbGxzcHlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNiBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBTQ1JPTExTUFkgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIFNjcm9sbFNweShlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy4kYm9keSAgICAgICAgICA9ICQoZG9jdW1lbnQuYm9keSlcbiAgICB0aGlzLiRzY3JvbGxFbGVtZW50ID0gJChlbGVtZW50KS5pcyhkb2N1bWVudC5ib2R5KSA/ICQod2luZG93KSA6ICQoZWxlbWVudClcbiAgICB0aGlzLm9wdGlvbnMgICAgICAgID0gJC5leHRlbmQoe30sIFNjcm9sbFNweS5ERUZBVUxUUywgb3B0aW9ucylcbiAgICB0aGlzLnNlbGVjdG9yICAgICAgID0gKHRoaXMub3B0aW9ucy50YXJnZXQgfHwgJycpICsgJyAubmF2IGxpID4gYSdcbiAgICB0aGlzLm9mZnNldHMgICAgICAgID0gW11cbiAgICB0aGlzLnRhcmdldHMgICAgICAgID0gW11cbiAgICB0aGlzLmFjdGl2ZVRhcmdldCAgID0gbnVsbFxuICAgIHRoaXMuc2Nyb2xsSGVpZ2h0ICAgPSAwXG5cbiAgICB0aGlzLiRzY3JvbGxFbGVtZW50Lm9uKCdzY3JvbGwuYnMuc2Nyb2xsc3B5JywgJC5wcm94eSh0aGlzLnByb2Nlc3MsIHRoaXMpKVxuICAgIHRoaXMucmVmcmVzaCgpXG4gICAgdGhpcy5wcm9jZXNzKClcbiAgfVxuXG4gIFNjcm9sbFNweS5WRVJTSU9OICA9ICczLjMuNydcblxuICBTY3JvbGxTcHkuREVGQVVMVFMgPSB7XG4gICAgb2Zmc2V0OiAxMFxuICB9XG5cbiAgU2Nyb2xsU3B5LnByb3RvdHlwZS5nZXRTY3JvbGxIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHNjcm9sbEVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0IHx8IE1hdGgubWF4KHRoaXMuJGJvZHlbMF0uc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0KVxuICB9XG5cbiAgU2Nyb2xsU3B5LnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aGF0ICAgICAgICAgID0gdGhpc1xuICAgIHZhciBvZmZzZXRNZXRob2QgID0gJ29mZnNldCdcbiAgICB2YXIgb2Zmc2V0QmFzZSAgICA9IDBcblxuICAgIHRoaXMub2Zmc2V0cyAgICAgID0gW11cbiAgICB0aGlzLnRhcmdldHMgICAgICA9IFtdXG4gICAgdGhpcy5zY3JvbGxIZWlnaHQgPSB0aGlzLmdldFNjcm9sbEhlaWdodCgpXG5cbiAgICBpZiAoISQuaXNXaW5kb3codGhpcy4kc2Nyb2xsRWxlbWVudFswXSkpIHtcbiAgICAgIG9mZnNldE1ldGhvZCA9ICdwb3NpdGlvbidcbiAgICAgIG9mZnNldEJhc2UgICA9IHRoaXMuJHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKClcbiAgICB9XG5cbiAgICB0aGlzLiRib2R5XG4gICAgICAuZmluZCh0aGlzLnNlbGVjdG9yKVxuICAgICAgLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkZWwgICA9ICQodGhpcylcbiAgICAgICAgdmFyIGhyZWYgID0gJGVsLmRhdGEoJ3RhcmdldCcpIHx8ICRlbC5hdHRyKCdocmVmJylcbiAgICAgICAgdmFyICRocmVmID0gL14jLi8udGVzdChocmVmKSAmJiAkKGhyZWYpXG5cbiAgICAgICAgcmV0dXJuICgkaHJlZlxuICAgICAgICAgICYmICRocmVmLmxlbmd0aFxuICAgICAgICAgICYmICRocmVmLmlzKCc6dmlzaWJsZScpXG4gICAgICAgICAgJiYgW1skaHJlZltvZmZzZXRNZXRob2RdKCkudG9wICsgb2Zmc2V0QmFzZSwgaHJlZl1dKSB8fCBudWxsXG4gICAgICB9KVxuICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGFbMF0gLSBiWzBdIH0pXG4gICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoYXQub2Zmc2V0cy5wdXNoKHRoaXNbMF0pXG4gICAgICAgIHRoYXQudGFyZ2V0cy5wdXNoKHRoaXNbMV0pXG4gICAgICB9KVxuICB9XG5cbiAgU2Nyb2xsU3B5LnByb3RvdHlwZS5wcm9jZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzY3JvbGxUb3AgICAgPSB0aGlzLiRzY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpICsgdGhpcy5vcHRpb25zLm9mZnNldFxuICAgIHZhciBzY3JvbGxIZWlnaHQgPSB0aGlzLmdldFNjcm9sbEhlaWdodCgpXG4gICAgdmFyIG1heFNjcm9sbCAgICA9IHRoaXMub3B0aW9ucy5vZmZzZXQgKyBzY3JvbGxIZWlnaHQgLSB0aGlzLiRzY3JvbGxFbGVtZW50LmhlaWdodCgpXG4gICAgdmFyIG9mZnNldHMgICAgICA9IHRoaXMub2Zmc2V0c1xuICAgIHZhciB0YXJnZXRzICAgICAgPSB0aGlzLnRhcmdldHNcbiAgICB2YXIgYWN0aXZlVGFyZ2V0ID0gdGhpcy5hY3RpdmVUYXJnZXRcbiAgICB2YXIgaVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsSGVpZ2h0ICE9IHNjcm9sbEhlaWdodCkge1xuICAgICAgdGhpcy5yZWZyZXNoKClcbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsVG9wID49IG1heFNjcm9sbCkge1xuICAgICAgcmV0dXJuIGFjdGl2ZVRhcmdldCAhPSAoaSA9IHRhcmdldHNbdGFyZ2V0cy5sZW5ndGggLSAxXSkgJiYgdGhpcy5hY3RpdmF0ZShpKVxuICAgIH1cblxuICAgIGlmIChhY3RpdmVUYXJnZXQgJiYgc2Nyb2xsVG9wIDwgb2Zmc2V0c1swXSkge1xuICAgICAgdGhpcy5hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgICByZXR1cm4gdGhpcy5jbGVhcigpXG4gICAgfVxuXG4gICAgZm9yIChpID0gb2Zmc2V0cy5sZW5ndGg7IGktLTspIHtcbiAgICAgIGFjdGl2ZVRhcmdldCAhPSB0YXJnZXRzW2ldXG4gICAgICAgICYmIHNjcm9sbFRvcCA+PSBvZmZzZXRzW2ldXG4gICAgICAgICYmIChvZmZzZXRzW2kgKyAxXSA9PT0gdW5kZWZpbmVkIHx8IHNjcm9sbFRvcCA8IG9mZnNldHNbaSArIDFdKVxuICAgICAgICAmJiB0aGlzLmFjdGl2YXRlKHRhcmdldHNbaV0pXG4gICAgfVxuICB9XG5cbiAgU2Nyb2xsU3B5LnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICB0aGlzLmFjdGl2ZVRhcmdldCA9IHRhcmdldFxuXG4gICAgdGhpcy5jbGVhcigpXG5cbiAgICB2YXIgc2VsZWN0b3IgPSB0aGlzLnNlbGVjdG9yICtcbiAgICAgICdbZGF0YS10YXJnZXQ9XCInICsgdGFyZ2V0ICsgJ1wiXSwnICtcbiAgICAgIHRoaXMuc2VsZWN0b3IgKyAnW2hyZWY9XCInICsgdGFyZ2V0ICsgJ1wiXSdcblxuICAgIHZhciBhY3RpdmUgPSAkKHNlbGVjdG9yKVxuICAgICAgLnBhcmVudHMoJ2xpJylcbiAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcblxuICAgIGlmIChhY3RpdmUucGFyZW50KCcuZHJvcGRvd24tbWVudScpLmxlbmd0aCkge1xuICAgICAgYWN0aXZlID0gYWN0aXZlXG4gICAgICAgIC5jbG9zZXN0KCdsaS5kcm9wZG93bicpXG4gICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICB9XG5cbiAgICBhY3RpdmUudHJpZ2dlcignYWN0aXZhdGUuYnMuc2Nyb2xsc3B5JylcbiAgfVxuXG4gIFNjcm9sbFNweS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzLnNlbGVjdG9yKVxuICAgICAgLnBhcmVudHNVbnRpbCh0aGlzLm9wdGlvbnMudGFyZ2V0LCAnLmFjdGl2ZScpXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gIH1cblxuXG4gIC8vIFNDUk9MTFNQWSBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBQbHVnaW4ob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMuc2Nyb2xsc3B5JylcbiAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb25cblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy5zY3JvbGxzcHknLCAoZGF0YSA9IG5ldyBTY3JvbGxTcHkodGhpcywgb3B0aW9ucykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXSgpXG4gICAgfSlcbiAgfVxuXG4gIHZhciBvbGQgPSAkLmZuLnNjcm9sbHNweVxuXG4gICQuZm4uc2Nyb2xsc3B5ICAgICAgICAgICAgID0gUGx1Z2luXG4gICQuZm4uc2Nyb2xsc3B5LkNvbnN0cnVjdG9yID0gU2Nyb2xsU3B5XG5cblxuICAvLyBTQ1JPTExTUFkgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi5zY3JvbGxzcHkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLnNjcm9sbHNweSA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIFNDUk9MTFNQWSBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT09PT09PT1cblxuICAkKHdpbmRvdykub24oJ2xvYWQuYnMuc2Nyb2xsc3B5LmRhdGEtYXBpJywgZnVuY3Rpb24gKCkge1xuICAgICQoJ1tkYXRhLXNweT1cInNjcm9sbFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRzcHkgPSAkKHRoaXMpXG4gICAgICBQbHVnaW4uY2FsbCgkc3B5LCAkc3B5LmRhdGEoKSlcbiAgICB9KVxuICB9KVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiB0YWIuanMgdjMuMy43XG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyN0YWJzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTYgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gVEFCIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgVGFiID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAvLyBqc2NzOmRpc2FibGUgcmVxdWlyZURvbGxhckJlZm9yZWpRdWVyeUFzc2lnbm1lbnRcbiAgICB0aGlzLmVsZW1lbnQgPSAkKGVsZW1lbnQpXG4gICAgLy8ganNjczplbmFibGUgcmVxdWlyZURvbGxhckJlZm9yZWpRdWVyeUFzc2lnbm1lbnRcbiAgfVxuXG4gIFRhYi5WRVJTSU9OID0gJzMuMy43J1xuXG4gIFRhYi5UUkFOU0lUSU9OX0RVUkFUSU9OID0gMTUwXG5cbiAgVGFiLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkdGhpcyAgICA9IHRoaXMuZWxlbWVudFxuICAgIHZhciAkdWwgICAgICA9ICR0aGlzLmNsb3Nlc3QoJ3VsOm5vdCguZHJvcGRvd24tbWVudSknKVxuICAgIHZhciBzZWxlY3RvciA9ICR0aGlzLmRhdGEoJ3RhcmdldCcpXG5cbiAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICBzZWxlY3RvciA9ICR0aGlzLmF0dHIoJ2hyZWYnKVxuICAgICAgc2VsZWN0b3IgPSBzZWxlY3RvciAmJiBzZWxlY3Rvci5yZXBsYWNlKC8uKig/PSNbXlxcc10qJCkvLCAnJykgLy8gc3RyaXAgZm9yIGllN1xuICAgIH1cblxuICAgIGlmICgkdGhpcy5wYXJlbnQoJ2xpJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSByZXR1cm5cblxuICAgIHZhciAkcHJldmlvdXMgPSAkdWwuZmluZCgnLmFjdGl2ZTpsYXN0IGEnKVxuICAgIHZhciBoaWRlRXZlbnQgPSAkLkV2ZW50KCdoaWRlLmJzLnRhYicsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6ICR0aGlzWzBdXG4gICAgfSlcbiAgICB2YXIgc2hvd0V2ZW50ID0gJC5FdmVudCgnc2hvdy5icy50YWInLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiAkcHJldmlvdXNbMF1cbiAgICB9KVxuXG4gICAgJHByZXZpb3VzLnRyaWdnZXIoaGlkZUV2ZW50KVxuICAgICR0aGlzLnRyaWdnZXIoc2hvd0V2ZW50KVxuXG4gICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgdmFyICR0YXJnZXQgPSAkKHNlbGVjdG9yKVxuXG4gICAgdGhpcy5hY3RpdmF0ZSgkdGhpcy5jbG9zZXN0KCdsaScpLCAkdWwpXG4gICAgdGhpcy5hY3RpdmF0ZSgkdGFyZ2V0LCAkdGFyZ2V0LnBhcmVudCgpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkcHJldmlvdXMudHJpZ2dlcih7XG4gICAgICAgIHR5cGU6ICdoaWRkZW4uYnMudGFiJyxcbiAgICAgICAgcmVsYXRlZFRhcmdldDogJHRoaXNbMF1cbiAgICAgIH0pXG4gICAgICAkdGhpcy50cmlnZ2VyKHtcbiAgICAgICAgdHlwZTogJ3Nob3duLmJzLnRhYicsXG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6ICRwcmV2aW91c1swXVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgVGFiLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBjb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgdmFyICRhY3RpdmUgICAgPSBjb250YWluZXIuZmluZCgnPiAuYWN0aXZlJylcbiAgICB2YXIgdHJhbnNpdGlvbiA9IGNhbGxiYWNrXG4gICAgICAmJiAkLnN1cHBvcnQudHJhbnNpdGlvblxuICAgICAgJiYgKCRhY3RpdmUubGVuZ3RoICYmICRhY3RpdmUuaGFzQ2xhc3MoJ2ZhZGUnKSB8fCAhIWNvbnRhaW5lci5maW5kKCc+IC5mYWRlJykubGVuZ3RoKVxuXG4gICAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICRhY3RpdmVcbiAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICAuZmluZCgnPiAuZHJvcGRvd24tbWVudSA+IC5hY3RpdmUnKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgLmVuZCgpXG4gICAgICAgIC5maW5kKCdbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKVxuICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG5cbiAgICAgIGVsZW1lbnRcbiAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAuZmluZCgnW2RhdGEtdG9nZ2xlPVwidGFiXCJdJylcbiAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIGVsZW1lbnRbMF0ub2Zmc2V0V2lkdGggLy8gcmVmbG93IGZvciB0cmFuc2l0aW9uXG4gICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ2luJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2ZhZGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5wYXJlbnQoJy5kcm9wZG93bi1tZW51JykubGVuZ3RoKSB7XG4gICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAuY2xvc2VzdCgnbGkuZHJvcGRvd24nKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgIC5lbmQoKVxuICAgICAgICAgIC5maW5kKCdbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXG4gICAgfVxuXG4gICAgJGFjdGl2ZS5sZW5ndGggJiYgdHJhbnNpdGlvbiA/XG4gICAgICAkYWN0aXZlXG4gICAgICAgIC5vbmUoJ2JzVHJhbnNpdGlvbkVuZCcsIG5leHQpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChUYWIuVFJBTlNJVElPTl9EVVJBVElPTikgOlxuICAgICAgbmV4dCgpXG5cbiAgICAkYWN0aXZlLnJlbW92ZUNsYXNzKCdpbicpXG4gIH1cblxuXG4gIC8vIFRBQiBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBQbHVnaW4ob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgPSAkdGhpcy5kYXRhKCdicy50YWInKVxuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLnRhYicsIChkYXRhID0gbmV3IFRhYih0aGlzKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKClcbiAgICB9KVxuICB9XG5cbiAgdmFyIG9sZCA9ICQuZm4udGFiXG5cbiAgJC5mbi50YWIgICAgICAgICAgICAgPSBQbHVnaW5cbiAgJC5mbi50YWIuQ29uc3RydWN0b3IgPSBUYWJcblxuXG4gIC8vIFRBQiBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT1cblxuICAkLmZuLnRhYi5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4udGFiID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gVEFCIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PVxuXG4gIHZhciBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIFBsdWdpbi5jYWxsKCQodGhpcyksICdzaG93JylcbiAgfVxuXG4gICQoZG9jdW1lbnQpXG4gICAgLm9uKCdjbGljay5icy50YWIuZGF0YS1hcGknLCAnW2RhdGEtdG9nZ2xlPVwidGFiXCJdJywgY2xpY2tIYW5kbGVyKVxuICAgIC5vbignY2xpY2suYnMudGFiLmRhdGEtYXBpJywgJ1tkYXRhLXRvZ2dsZT1cInBpbGxcIl0nLCBjbGlja0hhbmRsZXIpXG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IGFmZml4LmpzIHYzLjMuN1xuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jYWZmaXhcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNiBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBBRkZJWCBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgQWZmaXggPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBBZmZpeC5ERUZBVUxUUywgb3B0aW9ucylcblxuICAgIHRoaXMuJHRhcmdldCA9ICQodGhpcy5vcHRpb25zLnRhcmdldClcbiAgICAgIC5vbignc2Nyb2xsLmJzLmFmZml4LmRhdGEtYXBpJywgJC5wcm94eSh0aGlzLmNoZWNrUG9zaXRpb24sIHRoaXMpKVxuICAgICAgLm9uKCdjbGljay5icy5hZmZpeC5kYXRhLWFwaScsICAkLnByb3h5KHRoaXMuY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3AsIHRoaXMpKVxuXG4gICAgdGhpcy4kZWxlbWVudCAgICAgPSAkKGVsZW1lbnQpXG4gICAgdGhpcy5hZmZpeGVkICAgICAgPSBudWxsXG4gICAgdGhpcy51bnBpbiAgICAgICAgPSBudWxsXG4gICAgdGhpcy5waW5uZWRPZmZzZXQgPSBudWxsXG5cbiAgICB0aGlzLmNoZWNrUG9zaXRpb24oKVxuICB9XG5cbiAgQWZmaXguVkVSU0lPTiAgPSAnMy4zLjcnXG5cbiAgQWZmaXguUkVTRVQgICAgPSAnYWZmaXggYWZmaXgtdG9wIGFmZml4LWJvdHRvbSdcblxuICBBZmZpeC5ERUZBVUxUUyA9IHtcbiAgICBvZmZzZXQ6IDAsXG4gICAgdGFyZ2V0OiB3aW5kb3dcbiAgfVxuXG4gIEFmZml4LnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uIChzY3JvbGxIZWlnaHQsIGhlaWdodCwgb2Zmc2V0VG9wLCBvZmZzZXRCb3R0b20pIHtcbiAgICB2YXIgc2Nyb2xsVG9wICAgID0gdGhpcy4kdGFyZ2V0LnNjcm9sbFRvcCgpXG4gICAgdmFyIHBvc2l0aW9uICAgICA9IHRoaXMuJGVsZW1lbnQub2Zmc2V0KClcbiAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gdGhpcy4kdGFyZ2V0LmhlaWdodCgpXG5cbiAgICBpZiAob2Zmc2V0VG9wICE9IG51bGwgJiYgdGhpcy5hZmZpeGVkID09ICd0b3AnKSByZXR1cm4gc2Nyb2xsVG9wIDwgb2Zmc2V0VG9wID8gJ3RvcCcgOiBmYWxzZVxuXG4gICAgaWYgKHRoaXMuYWZmaXhlZCA9PSAnYm90dG9tJykge1xuICAgICAgaWYgKG9mZnNldFRvcCAhPSBudWxsKSByZXR1cm4gKHNjcm9sbFRvcCArIHRoaXMudW5waW4gPD0gcG9zaXRpb24udG9wKSA/IGZhbHNlIDogJ2JvdHRvbSdcbiAgICAgIHJldHVybiAoc2Nyb2xsVG9wICsgdGFyZ2V0SGVpZ2h0IDw9IHNjcm9sbEhlaWdodCAtIG9mZnNldEJvdHRvbSkgPyBmYWxzZSA6ICdib3R0b20nXG4gICAgfVxuXG4gICAgdmFyIGluaXRpYWxpemluZyAgID0gdGhpcy5hZmZpeGVkID09IG51bGxcbiAgICB2YXIgY29sbGlkZXJUb3AgICAgPSBpbml0aWFsaXppbmcgPyBzY3JvbGxUb3AgOiBwb3NpdGlvbi50b3BcbiAgICB2YXIgY29sbGlkZXJIZWlnaHQgPSBpbml0aWFsaXppbmcgPyB0YXJnZXRIZWlnaHQgOiBoZWlnaHRcblxuICAgIGlmIChvZmZzZXRUb3AgIT0gbnVsbCAmJiBzY3JvbGxUb3AgPD0gb2Zmc2V0VG9wKSByZXR1cm4gJ3RvcCdcbiAgICBpZiAob2Zmc2V0Qm90dG9tICE9IG51bGwgJiYgKGNvbGxpZGVyVG9wICsgY29sbGlkZXJIZWlnaHQgPj0gc2Nyb2xsSGVpZ2h0IC0gb2Zmc2V0Qm90dG9tKSkgcmV0dXJuICdib3R0b20nXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIEFmZml4LnByb3RvdHlwZS5nZXRQaW5uZWRPZmZzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucGlubmVkT2Zmc2V0KSByZXR1cm4gdGhpcy5waW5uZWRPZmZzZXRcbiAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKEFmZml4LlJFU0VUKS5hZGRDbGFzcygnYWZmaXgnKVxuICAgIHZhciBzY3JvbGxUb3AgPSB0aGlzLiR0YXJnZXQuc2Nyb2xsVG9wKClcbiAgICB2YXIgcG9zaXRpb24gID0gdGhpcy4kZWxlbWVudC5vZmZzZXQoKVxuICAgIHJldHVybiAodGhpcy5waW5uZWRPZmZzZXQgPSBwb3NpdGlvbi50b3AgLSBzY3JvbGxUb3ApXG4gIH1cblxuICBBZmZpeC5wcm90b3R5cGUuY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2V0VGltZW91dCgkLnByb3h5KHRoaXMuY2hlY2tQb3NpdGlvbiwgdGhpcyksIDEpXG4gIH1cblxuICBBZmZpeC5wcm90b3R5cGUuY2hlY2tQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuJGVsZW1lbnQuaXMoJzp2aXNpYmxlJykpIHJldHVyblxuXG4gICAgdmFyIGhlaWdodCAgICAgICA9IHRoaXMuJGVsZW1lbnQuaGVpZ2h0KClcbiAgICB2YXIgb2Zmc2V0ICAgICAgID0gdGhpcy5vcHRpb25zLm9mZnNldFxuICAgIHZhciBvZmZzZXRUb3AgICAgPSBvZmZzZXQudG9wXG4gICAgdmFyIG9mZnNldEJvdHRvbSA9IG9mZnNldC5ib3R0b21cbiAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gTWF0aC5tYXgoJChkb2N1bWVudCkuaGVpZ2h0KCksICQoZG9jdW1lbnQuYm9keSkuaGVpZ2h0KCkpXG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCAhPSAnb2JqZWN0JykgICAgICAgICBvZmZzZXRCb3R0b20gPSBvZmZzZXRUb3AgPSBvZmZzZXRcbiAgICBpZiAodHlwZW9mIG9mZnNldFRvcCA9PSAnZnVuY3Rpb24nKSAgICBvZmZzZXRUb3AgICAgPSBvZmZzZXQudG9wKHRoaXMuJGVsZW1lbnQpXG4gICAgaWYgKHR5cGVvZiBvZmZzZXRCb3R0b20gPT0gJ2Z1bmN0aW9uJykgb2Zmc2V0Qm90dG9tID0gb2Zmc2V0LmJvdHRvbSh0aGlzLiRlbGVtZW50KVxuXG4gICAgdmFyIGFmZml4ID0gdGhpcy5nZXRTdGF0ZShzY3JvbGxIZWlnaHQsIGhlaWdodCwgb2Zmc2V0VG9wLCBvZmZzZXRCb3R0b20pXG5cbiAgICBpZiAodGhpcy5hZmZpeGVkICE9IGFmZml4KSB7XG4gICAgICBpZiAodGhpcy51bnBpbiAhPSBudWxsKSB0aGlzLiRlbGVtZW50LmNzcygndG9wJywgJycpXG5cbiAgICAgIHZhciBhZmZpeFR5cGUgPSAnYWZmaXgnICsgKGFmZml4ID8gJy0nICsgYWZmaXggOiAnJylcbiAgICAgIHZhciBlICAgICAgICAgPSAkLkV2ZW50KGFmZml4VHlwZSArICcuYnMuYWZmaXgnKVxuXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSlcblxuICAgICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgICB0aGlzLmFmZml4ZWQgPSBhZmZpeFxuICAgICAgdGhpcy51bnBpbiA9IGFmZml4ID09ICdib3R0b20nID8gdGhpcy5nZXRQaW5uZWRPZmZzZXQoKSA6IG51bGxcblxuICAgICAgdGhpcy4kZWxlbWVudFxuICAgICAgICAucmVtb3ZlQ2xhc3MoQWZmaXguUkVTRVQpXG4gICAgICAgIC5hZGRDbGFzcyhhZmZpeFR5cGUpXG4gICAgICAgIC50cmlnZ2VyKGFmZml4VHlwZS5yZXBsYWNlKCdhZmZpeCcsICdhZmZpeGVkJykgKyAnLmJzLmFmZml4JylcbiAgICB9XG5cbiAgICBpZiAoYWZmaXggPT0gJ2JvdHRvbScpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQub2Zmc2V0KHtcbiAgICAgICAgdG9wOiBzY3JvbGxIZWlnaHQgLSBoZWlnaHQgLSBvZmZzZXRCb3R0b21cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cblxuICAvLyBBRkZJWCBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIFBsdWdpbihvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgICAgPSAkdGhpcy5kYXRhKCdicy5hZmZpeCcpXG4gICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uXG5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMuYWZmaXgnLCAoZGF0YSA9IG5ldyBBZmZpeCh0aGlzLCBvcHRpb25zKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKClcbiAgICB9KVxuICB9XG5cbiAgdmFyIG9sZCA9ICQuZm4uYWZmaXhcblxuICAkLmZuLmFmZml4ICAgICAgICAgICAgID0gUGx1Z2luXG4gICQuZm4uYWZmaXguQ29uc3RydWN0b3IgPSBBZmZpeFxuXG5cbiAgLy8gQUZGSVggTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT1cblxuICAkLmZuLmFmZml4Lm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi5hZmZpeCA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIEFGRklYIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PT09XG5cbiAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICQoJ1tkYXRhLXNweT1cImFmZml4XCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHNweSA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhID0gJHNweS5kYXRhKClcblxuICAgICAgZGF0YS5vZmZzZXQgPSBkYXRhLm9mZnNldCB8fCB7fVxuXG4gICAgICBpZiAoZGF0YS5vZmZzZXRCb3R0b20gIT0gbnVsbCkgZGF0YS5vZmZzZXQuYm90dG9tID0gZGF0YS5vZmZzZXRCb3R0b21cbiAgICAgIGlmIChkYXRhLm9mZnNldFRvcCAgICAhPSBudWxsKSBkYXRhLm9mZnNldC50b3AgICAgPSBkYXRhLm9mZnNldFRvcFxuXG4gICAgICBQbHVnaW4uY2FsbCgkc3B5LCBkYXRhKVxuICAgIH0pXG4gIH0pXG5cbn0oalF1ZXJ5KTtcbiIsIi8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gfCBGbGV4eSBoZWFkZXJcbi8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gfFxuLy8gfCBUaGlzIGpRdWVyeSBzY3JpcHQgaXMgd3JpdHRlbiBieVxuLy8gfFxuLy8gfCBNb3J0ZW4gTmlzc2VuXG4vLyB8IGhqZW1tZXNpZGVrb25nZW4uZGtcbi8vIHxcblxudmFyIGZsZXh5X2hlYWRlciA9IChmdW5jdGlvbiAoJCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBwdWIgPSB7fSxcbiAgICAgICAgJGhlYWRlcl9zdGF0aWMgPSAkKCcuZmxleHktaGVhZGVyLS1zdGF0aWMnKSxcbiAgICAgICAgJGhlYWRlcl9zdGlja3kgPSAkKCcuZmxleHktaGVhZGVyLS1zdGlja3knKSxcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHVwZGF0ZV9pbnRlcnZhbDogMTAwLFxuICAgICAgICAgICAgdG9sZXJhbmNlOiB7XG4gICAgICAgICAgICAgICAgdXB3YXJkOiAyMCxcbiAgICAgICAgICAgICAgICBkb3dud2FyZDogMTBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvZmZzZXQ6IF9nZXRfb2Zmc2V0X2Zyb21fZWxlbWVudHNfYm90dG9tKCRoZWFkZXJfc3RhdGljKSxcbiAgICAgICAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgICAgICAgICBwaW5uZWQ6IFwiZmxleHktaGVhZGVyLS1waW5uZWRcIixcbiAgICAgICAgICAgICAgICB1bnBpbm5lZDogXCJmbGV4eS1oZWFkZXItLXVucGlubmVkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2FzX3Njcm9sbGVkID0gZmFsc2UsXG4gICAgICAgIGxhc3RfZGlzdGFuY2VfZnJvbV90b3AgPSAwO1xuXG4gICAgLyoqXG4gICAgICogSW5zdGFudGlhdGVcbiAgICAgKi9cbiAgICBwdWIuaW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJlZ2lzdGVyRXZlbnRIYW5kbGVycygpO1xuICAgICAgICByZWdpc3RlckJvb3RFdmVudEhhbmRsZXJzKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGJvb3QgZXZlbnQgaGFuZGxlcnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZWdpc3RlckJvb3RFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICAkaGVhZGVyX3N0aWNreS5hZGRDbGFzcyhvcHRpb25zLmNsYXNzZXMudW5waW5uZWQpO1xuXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBpZiAod2FzX3Njcm9sbGVkKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRfd2FzX3Njcm9sbGVkKCk7XG5cbiAgICAgICAgICAgICAgICB3YXNfc2Nyb2xsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgb3B0aW9ucy51cGRhdGVfaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB3YXNfc2Nyb2xsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgb2Zmc2V0IGZyb20gZWxlbWVudCBib3R0b21cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZ2V0X29mZnNldF9mcm9tX2VsZW1lbnRzX2JvdHRvbSgkZWxlbWVudCkge1xuICAgICAgICB2YXIgZWxlbWVudF9oZWlnaHQgPSAkZWxlbWVudC5vdXRlckhlaWdodCh0cnVlKSxcbiAgICAgICAgICAgIGVsZW1lbnRfb2Zmc2V0ID0gJGVsZW1lbnQub2Zmc2V0KCkudG9wO1xuXG4gICAgICAgIHJldHVybiAoZWxlbWVudF9oZWlnaHQgKyBlbGVtZW50X29mZnNldCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG9jdW1lbnQgd2FzIHNjcm9sbGVkXG4gICAgICovXG4gICAgZnVuY3Rpb24gZG9jdW1lbnRfd2FzX3Njcm9sbGVkKCkge1xuICAgICAgICB2YXIgY3VycmVudF9kaXN0YW5jZV9mcm9tX3RvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAvLyBJZiBwYXN0IG9mZnNldFxuICAgICAgICBpZiAoY3VycmVudF9kaXN0YW5jZV9mcm9tX3RvcCA+PSBvcHRpb25zLm9mZnNldCkge1xuXG4gICAgICAgICAgICAvLyBEb3dud2FyZHMgc2Nyb2xsXG4gICAgICAgICAgICBpZiAoY3VycmVudF9kaXN0YW5jZV9mcm9tX3RvcCA+IGxhc3RfZGlzdGFuY2VfZnJvbV90b3ApIHtcblxuICAgICAgICAgICAgICAgIC8vIE9iZXkgdGhlIGRvd253YXJkIHRvbGVyYW5jZVxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhjdXJyZW50X2Rpc3RhbmNlX2Zyb21fdG9wIC0gbGFzdF9kaXN0YW5jZV9mcm9tX3RvcCkgPD0gb3B0aW9ucy50b2xlcmFuY2UuZG93bndhcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRoZWFkZXJfc3RpY2t5LnJlbW92ZUNsYXNzKG9wdGlvbnMuY2xhc3Nlcy5waW5uZWQpLmFkZENsYXNzKG9wdGlvbnMuY2xhc3Nlcy51bnBpbm5lZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwd2FyZHMgc2Nyb2xsXG4gICAgICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgICAgIC8vIE9iZXkgdGhlIHVwd2FyZCB0b2xlcmFuY2VcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoY3VycmVudF9kaXN0YW5jZV9mcm9tX3RvcCAtIGxhc3RfZGlzdGFuY2VfZnJvbV90b3ApIDw9IG9wdGlvbnMudG9sZXJhbmNlLnVwd2FyZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gV2UgYXJlIG5vdCBzY3JvbGxlZCBwYXN0IHRoZSBkb2N1bWVudCB3aGljaCBpcyBwb3NzaWJsZSBvbiB0aGUgTWFjXG4gICAgICAgICAgICAgICAgaWYgKChjdXJyZW50X2Rpc3RhbmNlX2Zyb21fdG9wICsgJCh3aW5kb3cpLmhlaWdodCgpKSA8ICQoZG9jdW1lbnQpLmhlaWdodCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICRoZWFkZXJfc3RpY2t5LnJlbW92ZUNsYXNzKG9wdGlvbnMuY2xhc3Nlcy51bnBpbm5lZCkuYWRkQ2xhc3Mob3B0aW9ucy5jbGFzc2VzLnBpbm5lZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm90IHBhc3Qgb2Zmc2V0XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJGhlYWRlcl9zdGlja3kucmVtb3ZlQ2xhc3Mob3B0aW9ucy5jbGFzc2VzLnBpbm5lZCkuYWRkQ2xhc3Mob3B0aW9ucy5jbGFzc2VzLnVucGlubmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RfZGlzdGFuY2VfZnJvbV90b3AgPSBjdXJyZW50X2Rpc3RhbmNlX2Zyb21fdG9wO1xuICAgIH1cblxuICAgIHJldHVybiBwdWI7XG59KShqUXVlcnkpO1xuIiwiLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB8IEZsZXh5IG5hdmlnYXRpb25cbi8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gfFxuLy8gfCBUaGlzIGpRdWVyeSBzY3JpcHQgaXMgd3JpdHRlbiBieVxuLy8gfFxuLy8gfCBNb3J0ZW4gTmlzc2VuXG4vLyB8IGhqZW1tZXNpZGVrb25nZW4uZGtcbi8vIHxcblxudmFyIGZsZXh5X25hdmlnYXRpb24gPSAoZnVuY3Rpb24gKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgcHViID0ge30sXG4gICAgICAgIGxheW91dF9jbGFzc2VzID0ge1xuICAgICAgICAgICAgJ25hdmlnYXRpb24nOiAnLmZsZXh5LW5hdmlnYXRpb24nLFxuICAgICAgICAgICAgJ29iZnVzY2F0b3InOiAnLmZsZXh5LW5hdmlnYXRpb25fX29iZnVzY2F0b3InLFxuICAgICAgICAgICAgJ2Ryb3Bkb3duJzogJy5mbGV4eS1uYXZpZ2F0aW9uX19pdGVtLS1kcm9wZG93bicsXG4gICAgICAgICAgICAnZHJvcGRvd25fbWVnYW1lbnUnOiAnLmZsZXh5LW5hdmlnYXRpb25fX2l0ZW1fX2Ryb3Bkb3duLW1lZ2FtZW51JyxcblxuICAgICAgICAgICAgJ2lzX3VwZ3JhZGVkJzogJ2lzLXVwZ3JhZGVkJyxcbiAgICAgICAgICAgICduYXZpZ2F0aW9uX2hhc19tZWdhbWVudSc6ICdoYXMtbWVnYW1lbnUnLFxuICAgICAgICAgICAgJ2Ryb3Bkb3duX2hhc19tZWdhbWVudSc6ICdmbGV4eS1uYXZpZ2F0aW9uX19pdGVtLS1kcm9wZG93bi13aXRoLW1lZ2FtZW51JyxcbiAgICAgICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluc3RhbnRpYXRlXG4gICAgICovXG4gICAgcHViLmluaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZWdpc3RlckV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgcmVnaXN0ZXJCb290RXZlbnRIYW5kbGVycygpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBib290IGV2ZW50IGhhbmRsZXJzXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJCb290RXZlbnRIYW5kbGVycygpIHtcblxuICAgICAgICAvLyBVcGdyYWRlXG4gICAgICAgIHVwZ3JhZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBldmVudCBoYW5kbGVyc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRIYW5kbGVycygpIHt9XG5cbiAgICAvKipcbiAgICAgKiBVcGdyYWRlIGVsZW1lbnRzLlxuICAgICAqIEFkZCBjbGFzc2VzIHRvIGVsZW1lbnRzLCBiYXNlZCB1cG9uIGF0dGFjaGVkIGNsYXNzZXMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gdXBncmFkZSgpIHtcbiAgICAgICAgdmFyICRuYXZpZ2F0aW9ucyA9ICQobGF5b3V0X2NsYXNzZXMubmF2aWdhdGlvbik7XG5cbiAgICAgICAgLy8gTmF2aWdhdGlvbnNcbiAgICAgICAgaWYgKCRuYXZpZ2F0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkbmF2aWdhdGlvbnMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciAkbmF2aWdhdGlvbiA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgICRtZWdhbWVudXMgPSAkbmF2aWdhdGlvbi5maW5kKGxheW91dF9jbGFzc2VzLmRyb3Bkb3duX21lZ2FtZW51KSxcbiAgICAgICAgICAgICAgICAgICAgJGRyb3Bkb3duX21lZ2FtZW51ID0gJG5hdmlnYXRpb24uZmluZChsYXlvdXRfY2xhc3Nlcy5kcm9wZG93bl9oYXNfbWVnYW1lbnUpO1xuXG4gICAgICAgICAgICAgICAgLy8gSGFzIGFscmVhZHkgYmVlbiB1cGdyYWRlZFxuICAgICAgICAgICAgICAgIGlmICgkbmF2aWdhdGlvbi5oYXNDbGFzcyhsYXlvdXRfY2xhc3Nlcy5pc191cGdyYWRlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEhhcyBtZWdhbWVudVxuICAgICAgICAgICAgICAgIGlmICgkbWVnYW1lbnVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJG5hdmlnYXRpb24uYWRkQ2xhc3MobGF5b3V0X2NsYXNzZXMubmF2aWdhdGlvbl9oYXNfbWVnYW1lbnUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJ1biB0aHJvdWdoIGFsbCBtZWdhbWVudXNcbiAgICAgICAgICAgICAgICAgICAgJG1lZ2FtZW51cy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG1lZ2FtZW51ID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNfb2JmdXNjYXRvciA9ICQoJ2h0bWwnKS5oYXNDbGFzcygnaGFzLW9iZnVzY2F0b3InKSA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJG1lZ2FtZW51LnBhcmVudHMobGF5b3V0X2NsYXNzZXMuZHJvcGRvd24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKGxheW91dF9jbGFzc2VzLmRyb3Bkb3duX2hhc19tZWdhbWVudSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaG92ZXIoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc19vYmZ1c2NhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmZ1c2NhdG9yLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc19vYmZ1c2NhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmZ1c2NhdG9yLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJcyB1cGdyYWRlZFxuICAgICAgICAgICAgICAgICRuYXZpZ2F0aW9uLmFkZENsYXNzKGxheW91dF9jbGFzc2VzLmlzX3VwZ3JhZGVkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHB1Yjtcbn0pKGpRdWVyeSk7XG4iLCIvKiEgc2lkciAtIHYyLjIuMSAtIDIwMTYtMDItMTdcbiAqIGh0dHA6Ly93d3cuYmVycmlhcnQuY29tL3NpZHIvXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtMjAxNiBBbGJlcnRvIFZhcmVsYTsgTGljZW5zZWQgTUlUICovXG5cbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgYmFiZWxIZWxwZXJzID0ge307XG5cbiAgYmFiZWxIZWxwZXJzLmNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfTtcblxuICBiYWJlbEhlbHBlcnMuY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgICB9O1xuICB9KCk7XG5cbiAgYmFiZWxIZWxwZXJzO1xuXG4gIHZhciBzaWRyU3RhdHVzID0ge1xuICAgIG1vdmluZzogZmFsc2UsXG4gICAgb3BlbmVkOiBmYWxzZVxuICB9O1xuXG4gIHZhciBoZWxwZXIgPSB7XG4gICAgLy8gQ2hlY2sgZm9yIHZhbGlkcyB1cmxzXG4gICAgLy8gRnJvbSA6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTcxNzA5My9jaGVjay1pZi1hLWphdmFzY3JpcHQtc3RyaW5nLWlzLWFuLXVybFxuXG4gICAgaXNVcmw6IGZ1bmN0aW9uIGlzVXJsKHN0cikge1xuICAgICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKCdeKGh0dHBzPzpcXFxcL1xcXFwvKT8nICsgLy8gcHJvdG9jb2xcbiAgICAgICcoKChbYS16XFxcXGRdKFthLXpcXFxcZC1dKlthLXpcXFxcZF0pKilcXFxcLj8pK1thLXpdezIsfXwnICsgLy8gZG9tYWluIG5hbWVcbiAgICAgICcoKFxcXFxkezEsM31cXFxcLil7M31cXFxcZHsxLDN9KSknICsgLy8gT1IgaXAgKHY0KSBhZGRyZXNzXG4gICAgICAnKFxcXFw6XFxcXGQrKT8oXFxcXC9bLWEtelxcXFxkJV8ufitdKikqJyArIC8vIHBvcnQgYW5kIHBhdGhcbiAgICAgICcoXFxcXD9bOyZhLXpcXFxcZCVfLn4rPS1dKik/JyArIC8vIHF1ZXJ5IHN0cmluZ1xuICAgICAgJyhcXFxcI1stYS16XFxcXGRfXSopPyQnLCAnaScpOyAvLyBmcmFnbWVudCBsb2NhdG9yXG5cbiAgICAgIGlmIChwYXR0ZXJuLnRlc3Qoc3RyKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvLyBBZGQgc2lkciBwcmVmaXhlc1xuICAgIGFkZFByZWZpeGVzOiBmdW5jdGlvbiBhZGRQcmVmaXhlcygkZWxlbWVudCkge1xuICAgICAgdGhpcy5hZGRQcmVmaXgoJGVsZW1lbnQsICdpZCcpO1xuICAgICAgdGhpcy5hZGRQcmVmaXgoJGVsZW1lbnQsICdjbGFzcycpO1xuICAgICAgJGVsZW1lbnQucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICB9LFxuICAgIGFkZFByZWZpeDogZnVuY3Rpb24gYWRkUHJlZml4KCRlbGVtZW50LCBhdHRyaWJ1dGUpIHtcbiAgICAgIHZhciB0b1JlcGxhY2UgPSAkZWxlbWVudC5hdHRyKGF0dHJpYnV0ZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgdG9SZXBsYWNlID09PSAnc3RyaW5nJyAmJiB0b1JlcGxhY2UgIT09ICcnICYmIHRvUmVwbGFjZSAhPT0gJ3NpZHItaW5uZXInKSB7XG4gICAgICAgICRlbGVtZW50LmF0dHIoYXR0cmlidXRlLCB0b1JlcGxhY2UucmVwbGFjZSgvKFtBLVphLXowLTlfLlxcLV0rKS9nLCAnc2lkci0nICsgYXR0cmlidXRlICsgJy0kMScpKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvLyBDaGVjayBpZiB0cmFuc2l0aW9ucyBpcyBzdXBwb3J0ZWRcbiAgICB0cmFuc2l0aW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICBzdHlsZSA9IGJvZHkuc3R5bGUsXG4gICAgICAgICAgc3VwcG9ydGVkID0gZmFsc2UsXG4gICAgICAgICAgcHJvcGVydHkgPSAndHJhbnNpdGlvbic7XG5cbiAgICAgIGlmIChwcm9wZXJ0eSBpbiBzdHlsZSkge1xuICAgICAgICBzdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgcHJlZml4ZXMgPSBbJ21veicsICd3ZWJraXQnLCAnbycsICdtcyddLFxuICAgICAgICAgICAgICBwcmVmaXggPSB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIGkgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcGVydHkuc3Vic3RyKDEpO1xuICAgICAgICAgIHN1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICAgICAgICAgICAgaWYgKHByZWZpeCArIHByb3BlcnR5IGluIHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0oKTtcbiAgICAgICAgICBwcm9wZXJ0eSA9IHN1cHBvcnRlZCA/ICctJyArIHByZWZpeC50b0xvd2VyQ2FzZSgpICsgJy0nICsgcHJvcGVydHkudG9Mb3dlckNhc2UoKSA6IG51bGw7XG4gICAgICAgIH0pKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1cHBvcnRlZDogc3VwcG9ydGVkLFxuICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHlcbiAgICAgIH07XG4gICAgfSgpXG4gIH07XG5cbiAgdmFyICQkMiA9IGpRdWVyeTtcblxuICB2YXIgYm9keUFuaW1hdGlvbkNsYXNzID0gJ3NpZHItYW5pbWF0aW5nJztcbiAgdmFyIG9wZW5BY3Rpb24gPSAnb3Blbic7XG4gIHZhciBjbG9zZUFjdGlvbiA9ICdjbG9zZSc7XG4gIHZhciB0cmFuc2l0aW9uRW5kRXZlbnQgPSAnd2Via2l0VHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZCBvVHJhbnNpdGlvbkVuZCBtc1RyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZCc7XG4gIHZhciBNZW51ID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1lbnUobmFtZSkge1xuICAgICAgYmFiZWxIZWxwZXJzLmNsYXNzQ2FsbENoZWNrKHRoaXMsIE1lbnUpO1xuXG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy5pdGVtID0gJCQyKCcjJyArIG5hbWUpO1xuICAgICAgdGhpcy5vcGVuQ2xhc3MgPSBuYW1lID09PSAnc2lkcicgPyAnc2lkci1vcGVuJyA6ICdzaWRyLW9wZW4gJyArIG5hbWUgKyAnLW9wZW4nO1xuICAgICAgdGhpcy5tZW51V2lkdGggPSB0aGlzLml0ZW0ub3V0ZXJXaWR0aCh0cnVlKTtcbiAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLml0ZW0uZGF0YSgnc3BlZWQnKTtcbiAgICAgIHRoaXMuc2lkZSA9IHRoaXMuaXRlbS5kYXRhKCdzaWRlJyk7XG4gICAgICB0aGlzLmRpc3BsYWNlID0gdGhpcy5pdGVtLmRhdGEoJ2Rpc3BsYWNlJyk7XG4gICAgICB0aGlzLnRpbWluZyA9IHRoaXMuaXRlbS5kYXRhKCd0aW1pbmcnKTtcbiAgICAgIHRoaXMubWV0aG9kID0gdGhpcy5pdGVtLmRhdGEoJ21ldGhvZCcpO1xuICAgICAgdGhpcy5vbk9wZW5DYWxsYmFjayA9IHRoaXMuaXRlbS5kYXRhKCdvbk9wZW4nKTtcbiAgICAgIHRoaXMub25DbG9zZUNhbGxiYWNrID0gdGhpcy5pdGVtLmRhdGEoJ29uQ2xvc2UnKTtcbiAgICAgIHRoaXMub25PcGVuRW5kQ2FsbGJhY2sgPSB0aGlzLml0ZW0uZGF0YSgnb25PcGVuRW5kJyk7XG4gICAgICB0aGlzLm9uQ2xvc2VFbmRDYWxsYmFjayA9IHRoaXMuaXRlbS5kYXRhKCdvbkNsb3NlRW5kJyk7XG4gICAgICB0aGlzLmJvZHkgPSAkJDIodGhpcy5pdGVtLmRhdGEoJ2JvZHknKSk7XG4gICAgfVxuXG4gICAgYmFiZWxIZWxwZXJzLmNyZWF0ZUNsYXNzKE1lbnUsIFt7XG4gICAgICBrZXk6ICdnZXRBbmltYXRpb24nLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFuaW1hdGlvbihhY3Rpb24sIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHt9LFxuICAgICAgICAgICAgcHJvcCA9IHRoaXMuc2lkZTtcblxuICAgICAgICBpZiAoYWN0aW9uID09PSAnb3BlbicgJiYgZWxlbWVudCA9PT0gJ2JvZHknKSB7XG4gICAgICAgICAgYW5pbWF0aW9uW3Byb3BdID0gdGhpcy5tZW51V2lkdGggKyAncHgnO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ2Nsb3NlJyAmJiBlbGVtZW50ID09PSAnbWVudScpIHtcbiAgICAgICAgICBhbmltYXRpb25bcHJvcF0gPSAnLScgKyB0aGlzLm1lbnVXaWR0aCArICdweCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYW5pbWF0aW9uW3Byb3BdID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhbmltYXRpb247XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncHJlcGFyZUJvZHknLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXBhcmVCb2R5KGFjdGlvbikge1xuICAgICAgICB2YXIgcHJvcCA9IGFjdGlvbiA9PT0gJ29wZW4nID8gJ2hpZGRlbicgOiAnJztcblxuICAgICAgICAvLyBQcmVwYXJlIHBhZ2UgaWYgY29udGFpbmVyIGlzIGJvZHlcbiAgICAgICAgaWYgKHRoaXMuYm9keS5pcygnYm9keScpKSB7XG4gICAgICAgICAgdmFyICRodG1sID0gJCQyKCdodG1sJyksXG4gICAgICAgICAgICAgIHNjcm9sbFRvcCA9ICRodG1sLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgICAgJGh0bWwuY3NzKCdvdmVyZmxvdy14JywgcHJvcCkuc2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdvcGVuQm9keScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb3BlbkJvZHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc3BsYWNlKSB7XG4gICAgICAgICAgdmFyIHRyYW5zaXRpb25zID0gaGVscGVyLnRyYW5zaXRpb25zLFxuICAgICAgICAgICAgICAkYm9keSA9IHRoaXMuYm9keTtcblxuICAgICAgICAgIGlmICh0cmFuc2l0aW9ucy5zdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgICRib2R5LmNzcyh0cmFuc2l0aW9ucy5wcm9wZXJ0eSwgdGhpcy5zaWRlICsgJyAnICsgdGhpcy5zcGVlZCAvIDEwMDAgKyAncyAnICsgdGhpcy50aW1pbmcpLmNzcyh0aGlzLnNpZGUsIDApLmNzcyh7XG4gICAgICAgICAgICAgIHdpZHRoOiAkYm9keS53aWR0aCgpLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkYm9keS5jc3ModGhpcy5zaWRlLCB0aGlzLm1lbnVXaWR0aCArICdweCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgYm9keUFuaW1hdGlvbiA9IHRoaXMuZ2V0QW5pbWF0aW9uKG9wZW5BY3Rpb24sICdib2R5Jyk7XG5cbiAgICAgICAgICAgICRib2R5LmNzcyh7XG4gICAgICAgICAgICAgIHdpZHRoOiAkYm9keS53aWR0aCgpLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgICAgICAgICAgfSkuYW5pbWF0ZShib2R5QW5pbWF0aW9uLCB7XG4gICAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuc3BlZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ29uQ2xvc2VCb2R5JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsb3NlQm9keSgpIHtcbiAgICAgICAgdmFyIHRyYW5zaXRpb25zID0gaGVscGVyLnRyYW5zaXRpb25zLFxuICAgICAgICAgICAgcmVzZXRTdHlsZXMgPSB7XG4gICAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICAgIHBvc2l0aW9uOiAnJyxcbiAgICAgICAgICByaWdodDogJycsXG4gICAgICAgICAgbGVmdDogJydcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodHJhbnNpdGlvbnMuc3VwcG9ydGVkKSB7XG4gICAgICAgICAgcmVzZXRTdHlsZXNbdHJhbnNpdGlvbnMucHJvcGVydHldID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJvZHkuY3NzKHJlc2V0U3R5bGVzKS51bmJpbmQodHJhbnNpdGlvbkVuZEV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjbG9zZUJvZHknLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlQm9keSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5kaXNwbGFjZSkge1xuICAgICAgICAgIGlmIChoZWxwZXIudHJhbnNpdGlvbnMuc3VwcG9ydGVkKSB7XG4gICAgICAgICAgICB0aGlzLmJvZHkuY3NzKHRoaXMuc2lkZSwgMCkub25lKHRyYW5zaXRpb25FbmRFdmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBfdGhpcy5vbkNsb3NlQm9keSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBib2R5QW5pbWF0aW9uID0gdGhpcy5nZXRBbmltYXRpb24oY2xvc2VBY3Rpb24sICdib2R5Jyk7XG5cbiAgICAgICAgICAgIHRoaXMuYm9keS5hbmltYXRlKGJvZHlBbmltYXRpb24sIHtcbiAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5zcGVlZCxcbiAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uQ2xvc2VCb2R5KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ21vdmVCb2R5JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBtb3ZlQm9keShhY3Rpb24pIHtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gb3BlbkFjdGlvbikge1xuICAgICAgICAgIHRoaXMub3BlbkJvZHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNsb3NlQm9keSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnb25PcGVuTWVudScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb25PcGVuTWVudShjYWxsYmFjaykge1xuICAgICAgICB2YXIgbmFtZSA9IHRoaXMubmFtZTtcblxuICAgICAgICBzaWRyU3RhdHVzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICBzaWRyU3RhdHVzLm9wZW5lZCA9IG5hbWU7XG5cbiAgICAgICAgdGhpcy5pdGVtLnVuYmluZCh0cmFuc2l0aW9uRW5kRXZlbnQpO1xuXG4gICAgICAgIHRoaXMuYm9keS5yZW1vdmVDbGFzcyhib2R5QW5pbWF0aW9uQ2xhc3MpLmFkZENsYXNzKHRoaXMub3BlbkNsYXNzKTtcblxuICAgICAgICB0aGlzLm9uT3BlbkVuZENhbGxiYWNrKCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNhbGxiYWNrKG5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnb3Blbk1lbnUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW5NZW51KGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciAkaXRlbSA9IHRoaXMuaXRlbTtcblxuICAgICAgICBpZiAoaGVscGVyLnRyYW5zaXRpb25zLnN1cHBvcnRlZCkge1xuICAgICAgICAgICRpdGVtLmNzcyh0aGlzLnNpZGUsIDApLm9uZSh0cmFuc2l0aW9uRW5kRXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMi5vbk9wZW5NZW51KGNhbGxiYWNrKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbWVudUFuaW1hdGlvbiA9IHRoaXMuZ2V0QW5pbWF0aW9uKG9wZW5BY3Rpb24sICdtZW51Jyk7XG5cbiAgICAgICAgICAkaXRlbS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKS5hbmltYXRlKG1lbnVBbmltYXRpb24sIHtcbiAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLnNwZWVkLFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICAgICAgICBfdGhpczIub25PcGVuTWVudShjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdvbkNsb3NlTWVudScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb25DbG9zZU1lbnUoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5pdGVtLmNzcyh7XG4gICAgICAgICAgbGVmdDogJycsXG4gICAgICAgICAgcmlnaHQ6ICcnXG4gICAgICAgIH0pLnVuYmluZCh0cmFuc2l0aW9uRW5kRXZlbnQpO1xuICAgICAgICAkJDIoJ2h0bWwnKS5jc3MoJ292ZXJmbG93LXgnLCAnJyk7XG5cbiAgICAgICAgc2lkclN0YXR1cy5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgc2lkclN0YXR1cy5vcGVuZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmJvZHkucmVtb3ZlQ2xhc3MoYm9keUFuaW1hdGlvbkNsYXNzKS5yZW1vdmVDbGFzcyh0aGlzLm9wZW5DbGFzcyk7XG5cbiAgICAgICAgdGhpcy5vbkNsb3NlRW5kQ2FsbGJhY2soKTtcblxuICAgICAgICAvLyBDYWxsYmFja1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2FsbGJhY2sobmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjbG9zZU1lbnUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlTWVudShjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuaXRlbTtcblxuICAgICAgICBpZiAoaGVscGVyLnRyYW5zaXRpb25zLnN1cHBvcnRlZCkge1xuICAgICAgICAgIGl0ZW0uY3NzKHRoaXMuc2lkZSwgJycpLm9uZSh0cmFuc2l0aW9uRW5kRXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMy5vbkNsb3NlTWVudShjYWxsYmFjayk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG1lbnVBbmltYXRpb24gPSB0aGlzLmdldEFuaW1hdGlvbihjbG9zZUFjdGlvbiwgJ21lbnUnKTtcblxuICAgICAgICAgIGl0ZW0uYW5pbWF0ZShtZW51QW5pbWF0aW9uLCB7XG4gICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5zcGVlZCxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgICAgICAgX3RoaXMzLm9uQ2xvc2VNZW51KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdtb3ZlTWVudScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbW92ZU1lbnUoYWN0aW9uLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmJvZHkuYWRkQ2xhc3MoYm9keUFuaW1hdGlvbkNsYXNzKTtcblxuICAgICAgICBpZiAoYWN0aW9uID09PSBvcGVuQWN0aW9uKSB7XG4gICAgICAgICAgdGhpcy5vcGVuTWVudShjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jbG9zZU1lbnUoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnbW92ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbW92ZShhY3Rpb24sIGNhbGxiYWNrKSB7XG4gICAgICAgIC8vIExvY2sgc2lkclxuICAgICAgICBzaWRyU3RhdHVzLm1vdmluZyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5wcmVwYXJlQm9keShhY3Rpb24pO1xuICAgICAgICB0aGlzLm1vdmVCb2R5KGFjdGlvbik7XG4gICAgICAgIHRoaXMubW92ZU1lbnUoYWN0aW9uLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnb3BlbicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb3BlbihjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAvLyBDaGVjayBpZiBpcyBhbHJlYWR5IG9wZW5lZCBvciBtb3ZpbmdcbiAgICAgICAgaWYgKHNpZHJTdGF0dXMub3BlbmVkID09PSB0aGlzLm5hbWUgfHwgc2lkclN0YXR1cy5tb3ZpbmcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBhbm90aGVyIG1lbnUgb3BlbmVkIGNsb3NlIGZpcnN0XG4gICAgICAgIGlmIChzaWRyU3RhdHVzLm9wZW5lZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICB2YXIgYWxyZWFkeU9wZW5lZE1lbnUgPSBuZXcgTWVudShzaWRyU3RhdHVzLm9wZW5lZCk7XG5cbiAgICAgICAgICBhbHJlYWR5T3BlbmVkTWVudS5jbG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpczQub3BlbihjYWxsYmFjayk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vdmUoJ29wZW4nLCBjYWxsYmFjayk7XG5cbiAgICAgICAgLy8gb25PcGVuIGNhbGxiYWNrXG4gICAgICAgIHRoaXMub25PcGVuQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjbG9zZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2UoY2FsbGJhY2spIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXMgYWxyZWFkeSBjbG9zZWQgb3IgbW92aW5nXG4gICAgICAgIGlmIChzaWRyU3RhdHVzLm9wZW5lZCAhPT0gdGhpcy5uYW1lIHx8IHNpZHJTdGF0dXMubW92aW5nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb3ZlKCdjbG9zZScsIGNhbGxiYWNrKTtcblxuICAgICAgICAvLyBvbkNsb3NlIGNhbGxiYWNrXG4gICAgICAgIHRoaXMub25DbG9zZUNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAndG9nZ2xlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGUoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHNpZHJTdGF0dXMub3BlbmVkID09PSB0aGlzLm5hbWUpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9wZW4oY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBNZW51O1xuICB9KCk7XG5cbiAgdmFyICQkMSA9IGpRdWVyeTtcblxuICBmdW5jdGlvbiBleGVjdXRlKGFjdGlvbiwgbmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2lkciA9IG5ldyBNZW51KG5hbWUpO1xuXG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgIGNhc2UgJ29wZW4nOlxuICAgICAgICBzaWRyLm9wZW4oY2FsbGJhY2spO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Nsb3NlJzpcbiAgICAgICAgc2lkci5jbG9zZShjYWxsYmFjayk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9nZ2xlJzpcbiAgICAgICAgc2lkci50b2dnbGUoY2FsbGJhY2spO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgICQkMS5lcnJvcignTWV0aG9kICcgKyBhY3Rpb24gKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5zaWRyJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpO1xuICB2YXIgJCA9IGpRdWVyeTtcbiAgdmFyIHB1YmxpY01ldGhvZHMgPSBbJ29wZW4nLCAnY2xvc2UnLCAndG9nZ2xlJ107XG4gIHZhciBtZXRob2ROYW1lO1xuICB2YXIgbWV0aG9kcyA9IHt9O1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gZ2V0TWV0aG9kKG1ldGhvZE5hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAvLyBDaGVjayBhcmd1bWVudHNcbiAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayA9IG5hbWU7XG4gICAgICAgIG5hbWUgPSAnc2lkcic7XG4gICAgICB9IGVsc2UgaWYgKCFuYW1lKSB7XG4gICAgICAgIG5hbWUgPSAnc2lkcic7XG4gICAgICB9XG5cbiAgICAgIGV4ZWN1dGUobWV0aG9kTmFtZSwgbmFtZSwgY2FsbGJhY2spO1xuICAgIH07XG4gIH07XG4gIGZvciAoaSA9IDA7IGkgPCBwdWJsaWNNZXRob2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgbWV0aG9kTmFtZSA9IHB1YmxpY01ldGhvZHNbaV07XG4gICAgbWV0aG9kc1ttZXRob2ROYW1lXSA9IGdldE1ldGhvZChtZXRob2ROYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNpZHIobWV0aG9kKSB7XG4gICAgaWYgKG1ldGhvZCA9PT0gJ3N0YXR1cycpIHtcbiAgICAgIHJldHVybiBzaWRyU3RhdHVzO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kc1ttZXRob2RdKSB7XG4gICAgICByZXR1cm4gbWV0aG9kc1ttZXRob2RdLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJyB8fCAhbWV0aG9kKSB7XG4gICAgICByZXR1cm4gbWV0aG9kcy50b2dnbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJC5lcnJvcignTWV0aG9kICcgKyBtZXRob2QgKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5zaWRyJyk7XG4gICAgfVxuICB9XG5cbiAgdmFyICQkMyA9IGpRdWVyeTtcblxuICBmdW5jdGlvbiBmaWxsQ29udGVudCgkc2lkZU1lbnUsIHNldHRpbmdzKSB7XG4gICAgLy8gVGhlIG1lbnUgY29udGVudFxuICAgIGlmICh0eXBlb2Ygc2V0dGluZ3Muc291cmNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgbmV3Q29udGVudCA9IHNldHRpbmdzLnNvdXJjZShuYW1lKTtcblxuICAgICAgJHNpZGVNZW51Lmh0bWwobmV3Q29udGVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2V0dGluZ3Muc291cmNlID09PSAnc3RyaW5nJyAmJiBoZWxwZXIuaXNVcmwoc2V0dGluZ3Muc291cmNlKSkge1xuICAgICAgJCQzLmdldChzZXR0aW5ncy5zb3VyY2UsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICRzaWRlTWVudS5odG1sKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2V0dGluZ3Muc291cmNlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGh0bWxDb250ZW50ID0gJycsXG4gICAgICAgICAgc2VsZWN0b3JzID0gc2V0dGluZ3Muc291cmNlLnNwbGl0KCcsJyk7XG5cbiAgICAgICQkMy5lYWNoKHNlbGVjdG9ycywgZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgIGh0bWxDb250ZW50ICs9ICc8ZGl2IGNsYXNzPVwic2lkci1pbm5lclwiPicgKyAkJDMoZWxlbWVudCkuaHRtbCgpICsgJzwvZGl2Pic7XG4gICAgICB9KTtcblxuICAgICAgLy8gUmVuYW1pbmcgaWRzIGFuZCBjbGFzc2VzXG4gICAgICBpZiAoc2V0dGluZ3MucmVuYW1pbmcpIHtcbiAgICAgICAgdmFyICRodG1sQ29udGVudCA9ICQkMygnPGRpdiAvPicpLmh0bWwoaHRtbENvbnRlbnQpO1xuXG4gICAgICAgICRodG1sQ29udGVudC5maW5kKCcqJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgJGVsZW1lbnQgPSAkJDMoZWxlbWVudCk7XG5cbiAgICAgICAgICBoZWxwZXIuYWRkUHJlZml4ZXMoJGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgaHRtbENvbnRlbnQgPSAkaHRtbENvbnRlbnQuaHRtbCgpO1xuICAgICAgfVxuXG4gICAgICAkc2lkZU1lbnUuaHRtbChodG1sQ29udGVudCk7XG4gICAgfSBlbHNlIGlmIChzZXR0aW5ncy5zb3VyY2UgIT09IG51bGwpIHtcbiAgICAgICQkMy5lcnJvcignSW52YWxpZCBTaWRyIFNvdXJjZScpO1xuICAgIH1cblxuICAgIHJldHVybiAkc2lkZU1lbnU7XG4gIH1cblxuICBmdW5jdGlvbiBmblNpZHIob3B0aW9ucykge1xuICAgIHZhciB0cmFuc2l0aW9ucyA9IGhlbHBlci50cmFuc2l0aW9ucyxcbiAgICAgICAgc2V0dGluZ3MgPSAkJDMuZXh0ZW5kKHtcbiAgICAgIG5hbWU6ICdzaWRyJywgLy8gTmFtZSBmb3IgdGhlICdzaWRyJ1xuICAgICAgc3BlZWQ6IDIwMCwgLy8gQWNjZXB0cyBzdGFuZGFyZCBqUXVlcnkgZWZmZWN0cyBzcGVlZHMgKGkuZS4gZmFzdCwgbm9ybWFsIG9yIG1pbGxpc2Vjb25kcylcbiAgICAgIHNpZGU6ICdsZWZ0JywgLy8gQWNjZXB0cyAnbGVmdCcgb3IgJ3JpZ2h0J1xuICAgICAgc291cmNlOiBudWxsLCAvLyBPdmVycmlkZSB0aGUgc291cmNlIG9mIHRoZSBjb250ZW50LlxuICAgICAgcmVuYW1pbmc6IHRydWUsIC8vIFRoZSBpZHMgYW5kIGNsYXNzZXMgd2lsbCBiZSBwcmVwZW5kZWQgd2l0aCBhIHByZWZpeCB3aGVuIGxvYWRpbmcgZXhpc3RlbnQgY29udGVudFxuICAgICAgYm9keTogJ2JvZHknLCAvLyBQYWdlIGNvbnRhaW5lciBzZWxlY3RvcixcbiAgICAgIGRpc3BsYWNlOiB0cnVlLCAvLyBEaXNwbGFjZSB0aGUgYm9keSBjb250ZW50IG9yIG5vdFxuICAgICAgdGltaW5nOiAnZWFzZScsIC8vIFRpbWluZyBmdW5jdGlvbiBmb3IgQ1NTIHRyYW5zaXRpb25zXG4gICAgICBtZXRob2Q6ICd0b2dnbGUnLCAvLyBUaGUgbWV0aG9kIHRvIGNhbGwgd2hlbiBlbGVtZW50IGlzIGNsaWNrZWRcbiAgICAgIGJpbmQ6ICd0b3VjaHN0YXJ0IGNsaWNrJywgLy8gVGhlIGV2ZW50KHMpIHRvIHRyaWdnZXIgdGhlIG1lbnVcbiAgICAgIG9uT3BlbjogZnVuY3Rpb24gb25PcGVuKCkge30sXG4gICAgICAvLyBDYWxsYmFjayB3aGVuIHNpZHIgc3RhcnQgb3BlbmluZ1xuICAgICAgb25DbG9zZTogZnVuY3Rpb24gb25DbG9zZSgpIHt9LFxuICAgICAgLy8gQ2FsbGJhY2sgd2hlbiBzaWRyIHN0YXJ0IGNsb3NpbmdcbiAgICAgIG9uT3BlbkVuZDogZnVuY3Rpb24gb25PcGVuRW5kKCkge30sXG4gICAgICAvLyBDYWxsYmFjayB3aGVuIHNpZHIgZW5kIG9wZW5pbmdcbiAgICAgIG9uQ2xvc2VFbmQ6IGZ1bmN0aW9uIG9uQ2xvc2VFbmQoKSB7fSAvLyBDYWxsYmFjayB3aGVuIHNpZHIgZW5kIGNsb3NpbmdcblxuICAgIH0sIG9wdGlvbnMpLFxuICAgICAgICBuYW1lID0gc2V0dGluZ3MubmFtZSxcbiAgICAgICAgJHNpZGVNZW51ID0gJCQzKCcjJyArIG5hbWUpO1xuXG4gICAgLy8gSWYgdGhlIHNpZGUgbWVudSBkbyBub3QgZXhpc3QgY3JlYXRlIGl0XG4gICAgaWYgKCRzaWRlTWVudS5sZW5ndGggPT09IDApIHtcbiAgICAgICRzaWRlTWVudSA9ICQkMygnPGRpdiAvPicpLmF0dHIoJ2lkJywgbmFtZSkuYXBwZW5kVG8oJCQzKCdib2R5JykpO1xuICAgIH1cblxuICAgIC8vIEFkZCB0cmFuc2l0aW9uIHRvIG1lbnUgaWYgYXJlIHN1cHBvcnRlZFxuICAgIGlmICh0cmFuc2l0aW9ucy5zdXBwb3J0ZWQpIHtcbiAgICAgICRzaWRlTWVudS5jc3ModHJhbnNpdGlvbnMucHJvcGVydHksIHNldHRpbmdzLnNpZGUgKyAnICcgKyBzZXR0aW5ncy5zcGVlZCAvIDEwMDAgKyAncyAnICsgc2V0dGluZ3MudGltaW5nKTtcbiAgICB9XG5cbiAgICAvLyBBZGRpbmcgc3R5bGVzIGFuZCBvcHRpb25zXG4gICAgJHNpZGVNZW51LmFkZENsYXNzKCdzaWRyJykuYWRkQ2xhc3Moc2V0dGluZ3Muc2lkZSkuZGF0YSh7XG4gICAgICBzcGVlZDogc2V0dGluZ3Muc3BlZWQsXG4gICAgICBzaWRlOiBzZXR0aW5ncy5zaWRlLFxuICAgICAgYm9keTogc2V0dGluZ3MuYm9keSxcbiAgICAgIGRpc3BsYWNlOiBzZXR0aW5ncy5kaXNwbGFjZSxcbiAgICAgIHRpbWluZzogc2V0dGluZ3MudGltaW5nLFxuICAgICAgbWV0aG9kOiBzZXR0aW5ncy5tZXRob2QsXG4gICAgICBvbk9wZW46IHNldHRpbmdzLm9uT3BlbixcbiAgICAgIG9uQ2xvc2U6IHNldHRpbmdzLm9uQ2xvc2UsXG4gICAgICBvbk9wZW5FbmQ6IHNldHRpbmdzLm9uT3BlbkVuZCxcbiAgICAgIG9uQ2xvc2VFbmQ6IHNldHRpbmdzLm9uQ2xvc2VFbmRcbiAgICB9KTtcblxuICAgICRzaWRlTWVudSA9IGZpbGxDb250ZW50KCRzaWRlTWVudSwgc2V0dGluZ3MpO1xuXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkJDModGhpcyksXG4gICAgICAgICAgZGF0YSA9ICR0aGlzLmRhdGEoJ3NpZHInKSxcbiAgICAgICAgICBmbGFnID0gZmFsc2U7XG5cbiAgICAgIC8vIElmIHRoZSBwbHVnaW4gaGFzbid0IGJlZW4gaW5pdGlhbGl6ZWQgeWV0XG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgc2lkclN0YXR1cy5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgc2lkclN0YXR1cy5vcGVuZWQgPSBmYWxzZTtcblxuICAgICAgICAkdGhpcy5kYXRhKCdzaWRyJywgbmFtZSk7XG5cbiAgICAgICAgJHRoaXMuYmluZChzZXR0aW5ncy5iaW5kLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgaWYgKCFmbGFnKSB7XG4gICAgICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgIHNpZHIoc2V0dGluZ3MubWV0aG9kLCBuYW1lKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGpRdWVyeS5zaWRyID0gc2lkcjtcbiAgalF1ZXJ5LmZuLnNpZHIgPSBmblNpZHI7XG5cbn0oKSk7IiwialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XHJcblxyXG4gICAgLypcclxuICAgICAqIGpRdWVyeSBzaW1wbGUgYW5kIGFjY2Vzc2libGUgaGlkZS1zaG93IHN5c3RlbSAoY29sbGFwc2libGUgcmVnaW9ucyksIHVzaW5nIEFSSUFcclxuICAgICAqIEB2ZXJzaW9uIHYxLjguMCAgIFxyXG4gICAgICogV2Vic2l0ZTogaHR0cHM6Ly9hMTF5Lm5pY29sYXMtaG9mZm1hbm4ubmV0L2hpZGUtc2hvdy9cclxuICAgICAqIExpY2Vuc2UgTUlUOiBodHRwczovL2dpdGh1Yi5jb20vbmljbzMzMzNmci9qcXVlcnktYWNjZXNzaWJsZS1oaWRlLXNob3ctYXJpYS9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAgICAgKi9cclxuICAgIC8vIGxvYWRpbmcgZXhwYW5kIHBhcmFncmFwaHNcclxuICAgIC8vIHRoZXNlIGFyZSByZWNvbW1lbmRlZCBzZXR0aW5ncyBieSBhMTF5IGV4cGVydHMuIFlvdSBtYXkgdXBkYXRlIHRvIGZ1bGZpbGwgeW91ciBuZWVkcywgYnV0IGJlIHN1cmUgb2Ygd2hhdCB5b3XigJlyZSBkb2luZy5cclxuICAgIHZhciBhdHRyX2NvbnRyb2wgPSAnZGF0YS1jb250cm9scycsXHJcbiAgICAgICAgYXR0cl9leHBhbmRlZCA9ICdhcmlhLWV4cGFuZGVkJyxcclxuICAgICAgICBhdHRyX2xhYmVsbGVkYnkgPSAnZGF0YS1sYWJlbGxlZGJ5JyxcclxuICAgICAgICBhdHRyX2hpZGRlbiA9ICdkYXRhLWhpZGRlbicsXHJcbiAgICAgICAgJGV4cGFuZG1vcmUgPSAkKCcuanMtZXhwYW5kbW9yZScpLFxyXG4gICAgICAgICRib2R5ID0gJCgnYm9keScpLFxyXG4gICAgICAgIGRlbGF5ID0gMTUwMCxcclxuICAgICAgICBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIiksXHJcbiAgICAgICAgbXVsdGlleHBhbmRhYmxlID0gdHJ1ZSxcclxuICAgICAgICBleHBhbmRfYWxsX3RleHQgPSAnRXhwYW5kIEFsbCcsXHJcbiAgICAgICAgY29sbGFwc2VfYWxsX3RleHQgPSAnQ29sbGFwc2UgQWxsJztcclxuXHJcblxyXG4gICAgaWYgKCRleHBhbmRtb3JlLmxlbmd0aCkgeyAvLyBpZiB0aGVyZSBhcmUgYXQgbGVhc3Qgb25lIDopXHJcbiAgICAgICAgJGV4cGFuZG1vcmUuZWFjaChmdW5jdGlvbihpbmRleF90b19leHBhbmQpIHtcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIGluZGV4X2xpc2libGUgPSBpbmRleF90b19leHBhbmQgKyAxLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9ICR0aGlzLmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICRoaWRlc2hvd19wcmVmaXhfY2xhc3NlcyA9IHR5cGVvZiBvcHRpb25zLmhpZGVzaG93UHJlZml4Q2xhc3MgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5oaWRlc2hvd1ByZWZpeENsYXNzICsgJy0nIDogJycsXHJcbiAgICAgICAgICAgICAgICAkdG9fZXhwYW5kID0gJHRoaXMubmV4dChcIi5qcy10b19leHBhbmRcIiksXHJcbiAgICAgICAgICAgICAgICAkZXhwYW5kbW9yZV90ZXh0ID0gJHRoaXMuaHRtbCgpO1xyXG5cclxuICAgICAgICAgICAgJHRoaXMuaHRtbCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCInICsgJGhpZGVzaG93X3ByZWZpeF9jbGFzc2VzICsgJ2V4cGFuZG1vcmVfX2J1dHRvbiBqcy1leHBhbmRtb3JlLWJ1dHRvblwiPjxzcGFuIGNsYXNzPVwiJyArICRoaWRlc2hvd19wcmVmaXhfY2xhc3NlcyArICdleHBhbmRtb3JlX19zeW1ib2xcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+JyArICRleHBhbmRtb3JlX3RleHQgKyAnPC9idXR0b24+Jyk7XHJcbiAgICAgICAgICAgIHZhciAkYnV0dG9uID0gJHRoaXMuY2hpbGRyZW4oJy5qcy1leHBhbmRtb3JlLWJ1dHRvbicpO1xyXG5cclxuICAgICAgICAgICAgJHRvX2V4cGFuZC5hZGRDbGFzcygkaGlkZXNob3dfcHJlZml4X2NsYXNzZXMgKyAnZXhwYW5kbW9yZV9fdG9fZXhwYW5kJykuc3RvcCgpLmRlbGF5KGRlbGF5KS5xdWV1ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHRoaXMuaGFzQ2xhc3MoJ2pzLWZpcnN0X2xvYWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdqcy1maXJzdF9sb2FkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGJ1dHRvbi5hdHRyKCdpZCcsICdsYWJlbF9leHBhbmRfJyArIGluZGV4X2xpc2libGUpO1xyXG4gICAgICAgICAgICAkYnV0dG9uLmF0dHIoYXR0cl9jb250cm9sLCAnZXhwYW5kXycgKyBpbmRleF9saXNpYmxlKTtcclxuICAgICAgICAgICAgJGJ1dHRvbi5hdHRyKGF0dHJfZXhwYW5kZWQsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgJHRvX2V4cGFuZC5hdHRyKCdpZCcsICdleHBhbmRfJyArIGluZGV4X2xpc2libGUpO1xyXG4gICAgICAgICAgICAkdG9fZXhwYW5kLmF0dHIoYXR0cl9oaWRkZW4sICd0cnVlJyk7XHJcbiAgICAgICAgICAgICR0b19leHBhbmQuYXR0cihhdHRyX2xhYmVsbGVkYnksICdsYWJlbF9leHBhbmRfJyArIGluZGV4X2xpc2libGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gcXVpY2sgdGlwIHRvIG9wZW4gKGlmIGl0IGhhcyBjbGFzcyBpcy1vcGVuZWQgb3IgaWYgaGFzaCBpcyBpbiBleHBhbmQpXHJcbiAgICAgICAgICAgIGlmICgkdG9fZXhwYW5kLmhhc0NsYXNzKCdpcy1vcGVuZWQnKSB8fCAoaGFzaCAhPT0gXCJcIiAmJiAkdG9fZXhwYW5kLmZpbmQoJChcIiNcIiArIGhhc2gpKS5sZW5ndGgpKSB7XHJcbiAgICAgICAgICAgICAgICAkYnV0dG9uLmFkZENsYXNzKCdpcy1vcGVuZWQnKS5hdHRyKGF0dHJfZXhwYW5kZWQsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICAkdG9fZXhwYW5kLnJlbW92ZUNsYXNzKCdpcy1vcGVuZWQnKS5yZW1vdmVBdHRyKGF0dHJfaGlkZGVuKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgJGJvZHkub24oJ2NsaWNrJywgJy5qcy1leHBhbmRtb3JlLWJ1dHRvbicsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgJGRlc3RpbmF0aW9uID0gJCgnIycgKyAkdGhpcy5hdHRyKGF0dHJfY29udHJvbCkpO1xyXG5cclxuICAgICAgICBpZiAoJHRoaXMuYXR0cihhdHRyX2V4cGFuZGVkKSA9PT0gJ2ZhbHNlJykge1xyXG5cclxuICAgICAgICAgICAgaWYgKG11bHRpZXhwYW5kYWJsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICQoJy5qcy1leHBhbmRtb3JlLWJ1dHRvbicpLnJlbW92ZUNsYXNzKCdpcy1vcGVuZWQnKS5hdHRyKGF0dHJfZXhwYW5kZWQsICdmYWxzZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmpzLXRvX2V4cGFuZCcpLmF0dHIoYXR0cl9oaWRkZW4sICd0cnVlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdpcy1vcGVuZWQnKS5hdHRyKGF0dHJfZXhwYW5kZWQsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICRkZXN0aW5hdGlvbi5yZW1vdmVBdHRyKGF0dHJfaGlkZGVuKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnaXMtb3BlbmVkJykuYXR0cihhdHRyX2V4cGFuZGVkLCAnZmFsc2UnKTtcclxuICAgICAgICAgICAgJGRlc3RpbmF0aW9uLmF0dHIoYXR0cl9oaWRkZW4sICd0cnVlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICRib2R5Lm9uKCdjbGljayBrZXlkb3duJywgJy5qcy1leHBhbmRtb3JlJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAkdGFyZ2V0ID0gJChldmVudC50YXJnZXQpLFxyXG4gICAgICAgICAgICAkYnV0dG9uX2luID0gJHRoaXMuZmluZCgnLmpzLWV4cGFuZG1vcmUtYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGlmICghJHRhcmdldC5pcygkYnV0dG9uX2luKSAmJiAhJHRhcmdldC5jbG9zZXN0KCRidXR0b25faW4pLmxlbmd0aCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcclxuICAgICAgICAgICAgICAgICRidXR0b25faW4udHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nICYmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAzMikpIHtcclxuICAgICAgICAgICAgICAgICRidXR0b25faW4udHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICRib2R5Lm9uKCdjbGljayBrZXlkb3duJywgJy5qcy1leHBhbmRtb3JlLWFsbCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgaXNfZXhwYW5kZWQgPSAkdGhpcy5hdHRyKCdkYXRhLWV4cGFuZCcpLFxyXG4gICAgICAgICAgICAkYWxsX2J1dHRvbnMgPSAkKCcuanMtZXhwYW5kbW9yZS1idXR0b24nKSxcclxuICAgICAgICAgICAgJGFsbF9kZXN0aW5hdGlvbnMgPSAkKCcuanMtdG9fZXhwYW5kJyk7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyB8fFxyXG4gICAgICAgICAgICAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nICYmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAzMikpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChpc19leHBhbmRlZCA9PT0gJ3RydWUnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJGFsbF9idXR0b25zLmFkZENsYXNzKCdpcy1vcGVuZWQnKS5hdHRyKGF0dHJfZXhwYW5kZWQsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICAkYWxsX2Rlc3RpbmF0aW9ucy5yZW1vdmVBdHRyKGF0dHJfaGlkZGVuKTtcclxuICAgICAgICAgICAgICAgICR0aGlzLmF0dHIoJ2RhdGEtZXhwYW5kJywgJ2ZhbHNlJykuaHRtbChjb2xsYXBzZV9hbGxfdGV4dCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkYWxsX2J1dHRvbnMucmVtb3ZlQ2xhc3MoJ2lzLW9wZW5lZCcpLmF0dHIoYXR0cl9leHBhbmRlZCwgJ2ZhbHNlJyk7XHJcbiAgICAgICAgICAgICAgICAkYWxsX2Rlc3RpbmF0aW9ucy5hdHRyKGF0dHJfaGlkZGVuLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgJHRoaXMuYXR0cignZGF0YS1leHBhbmQnLCAndHJ1ZScpLmh0bWwoZXhwYW5kX2FsbF90ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbn0pO1xyXG4iLCIhZnVuY3Rpb24oZSl7dmFyIHQ7ZS5mbi5zbGlua3k9ZnVuY3Rpb24oYSl7dmFyIHM9ZS5leHRlbmQoe2xhYmVsOlwiQmFja1wiLHRpdGxlOiExLHNwZWVkOjMwMCxyZXNpemU6ITB9LGEpLGk9ZSh0aGlzKSxuPWkuY2hpbGRyZW4oKS5maXJzdCgpO2kuYWRkQ2xhc3MoXCJzbGlua3ktbWVudVwiKTt2YXIgcj1mdW5jdGlvbihlLHQpe3ZhciBhPU1hdGgucm91bmQocGFyc2VJbnQobi5nZXQoMCkuc3R5bGUubGVmdCkpfHwwO24uY3NzKFwibGVmdFwiLGEtMTAwKmUrXCIlXCIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJnNldFRpbWVvdXQodCxzLnNwZWVkKX0sbD1mdW5jdGlvbihlKXtpLmhlaWdodChlLm91dGVySGVpZ2h0KCkpfSxkPWZ1bmN0aW9uKGUpe2kuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLGUrXCJtc1wiKSxuLmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIixlK1wibXNcIil9O2lmKGQocy5zcGVlZCksZShcImEgKyB1bFwiLGkpLnByZXYoKS5hZGRDbGFzcyhcIm5leHRcIiksZShcImxpID4gdWxcIixpKS5wcmVwZW5kKCc8bGkgY2xhc3M9XCJoZWFkZXJcIj4nKSxzLnRpdGxlPT09ITAmJmUoXCJsaSA+IHVsXCIsaSkuZWFjaChmdW5jdGlvbigpe3ZhciB0PWUodGhpcykucGFyZW50KCkuZmluZChcImFcIikuZmlyc3QoKS50ZXh0KCksYT1lKFwiPGgyPlwiKS50ZXh0KHQpO2UoXCI+IC5oZWFkZXJcIix0aGlzKS5hcHBlbmQoYSl9KSxzLnRpdGxlfHxzLmxhYmVsIT09ITApe3ZhciBvPWUoXCI8YT5cIikudGV4dChzLmxhYmVsKS5wcm9wKFwiaHJlZlwiLFwiI1wiKS5hZGRDbGFzcyhcImJhY2tcIik7ZShcIi5oZWFkZXJcIixpKS5hcHBlbmQobyl9ZWxzZSBlKFwibGkgPiB1bFwiLGkpLmVhY2goZnVuY3Rpb24oKXt2YXIgdD1lKHRoaXMpLnBhcmVudCgpLmZpbmQoXCJhXCIpLmZpcnN0KCkudGV4dCgpLGE9ZShcIjxhPlwiKS50ZXh0KHQpLnByb3AoXCJocmVmXCIsXCIjXCIpLmFkZENsYXNzKFwiYmFja1wiKTtlKFwiPiAuaGVhZGVyXCIsdGhpcykuYXBwZW5kKGEpfSk7ZShcImFcIixpKS5vbihcImNsaWNrXCIsZnVuY3Rpb24oYSl7aWYoISh0K3Muc3BlZWQ+RGF0ZS5ub3coKSkpe3Q9RGF0ZS5ub3coKTt2YXIgbj1lKHRoaXMpOy8jLy50ZXN0KHRoaXMuaHJlZikmJmEucHJldmVudERlZmF1bHQoKSxuLmhhc0NsYXNzKFwibmV4dFwiKT8oaS5maW5kKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxuLm5leHQoKS5zaG93KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIikscigxKSxzLnJlc2l6ZSYmbChuLm5leHQoKSkpOm4uaGFzQ2xhc3MoXCJiYWNrXCIpJiYocigtMSxmdW5jdGlvbigpe2kuZmluZChcIi5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksbi5wYXJlbnQoKS5wYXJlbnQoKS5oaWRlKCkucGFyZW50c1VudGlsKGksXCJ1bFwiKS5maXJzdCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpfSkscy5yZXNpemUmJmwobi5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnRzVW50aWwoaSxcInVsXCIpKSl9fSksdGhpcy5qdW1wPWZ1bmN0aW9uKHQsYSl7dD1lKHQpO3ZhciBuPWkuZmluZChcIi5hY3RpdmVcIik7bj1uLmxlbmd0aD4wP24ucGFyZW50c1VudGlsKGksXCJ1bFwiKS5sZW5ndGg6MCxpLmZpbmQoXCJ1bFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKS5oaWRlKCk7dmFyIG89dC5wYXJlbnRzVW50aWwoaSxcInVsXCIpO28uc2hvdygpLHQuc2hvdygpLmFkZENsYXNzKFwiYWN0aXZlXCIpLGE9PT0hMSYmZCgwKSxyKG8ubGVuZ3RoLW4pLHMucmVzaXplJiZsKHQpLGE9PT0hMSYmZChzLnNwZWVkKX0sdGhpcy5ob21lPWZ1bmN0aW9uKHQpe3Q9PT0hMSYmZCgwKTt2YXIgYT1pLmZpbmQoXCIuYWN0aXZlXCIpLG49YS5wYXJlbnRzVW50aWwoaSxcImxpXCIpLmxlbmd0aDtuPjAmJihyKC1uLGZ1bmN0aW9uKCl7YS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKX0pLHMucmVzaXplJiZsKGUoYS5wYXJlbnRzVW50aWwoaSxcImxpXCIpLmdldChuLTEpKS5wYXJlbnQoKSkpLHQ9PT0hMSYmZChzLnNwZWVkKX0sdGhpcy5kZXN0cm95PWZ1bmN0aW9uKCl7ZShcIi5oZWFkZXJcIixpKS5yZW1vdmUoKSxlKFwiYVwiLGkpLnJlbW92ZUNsYXNzKFwibmV4dFwiKS5vZmYoXCJjbGlja1wiKSxpLnJlbW92ZUNsYXNzKFwic2xpbmt5LW1lbnVcIikuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLFwiXCIpLG4uY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLFwiXCIpfTt2YXIgYz1pLmZpbmQoXCIuYWN0aXZlXCIpO3JldHVybiBjLmxlbmd0aD4wJiYoYy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSx0aGlzLmp1bXAoYywhMSkpLHRoaXN9fShqUXVlcnkpOyIsIihmdW5jdGlvbigpIHtcbiAgdmFyIEFqYXhNb25pdG9yLCBCYXIsIERvY3VtZW50TW9uaXRvciwgRWxlbWVudE1vbml0b3IsIEVsZW1lbnRUcmFja2VyLCBFdmVudExhZ01vbml0b3IsIEV2ZW50ZWQsIEV2ZW50cywgTm9UYXJnZXRFcnJvciwgUGFjZSwgUmVxdWVzdEludGVyY2VwdCwgU09VUkNFX0tFWVMsIFNjYWxlciwgU29ja2V0UmVxdWVzdFRyYWNrZXIsIFhIUlJlcXVlc3RUcmFja2VyLCBhbmltYXRpb24sIGF2Z0FtcGxpdHVkZSwgYmFyLCBjYW5jZWxBbmltYXRpb24sIGNhbmNlbEFuaW1hdGlvbkZyYW1lLCBkZWZhdWx0T3B0aW9ucywgZXh0ZW5kLCBleHRlbmROYXRpdmUsIGdldEZyb21ET00sIGdldEludGVyY2VwdCwgaGFuZGxlUHVzaFN0YXRlLCBpZ25vcmVTdGFjaywgaW5pdCwgbm93LCBvcHRpb25zLCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIHJlc3VsdCwgcnVuQW5pbWF0aW9uLCBzY2FsZXJzLCBzaG91bGRJZ25vcmVVUkwsIHNob3VsZFRyYWNrLCBzb3VyY2UsIHNvdXJjZXMsIHVuaVNjYWxlciwgX1dlYlNvY2tldCwgX1hEb21haW5SZXF1ZXN0LCBfWE1MSHR0cFJlcXVlc3QsIF9pLCBfaW50ZXJjZXB0LCBfbGVuLCBfcHVzaFN0YXRlLCBfcmVmLCBfcmVmMSwgX3JlcGxhY2VTdGF0ZSxcbiAgICBfX3NsaWNlID0gW10uc2xpY2UsXG4gICAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gICAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gICAgX19pbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7IGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHsgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTsgfSByZXR1cm4gLTE7IH07XG5cbiAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgY2F0Y2h1cFRpbWU6IDEwMCxcbiAgICBpbml0aWFsUmF0ZTogLjAzLFxuICAgIG1pblRpbWU6IDI1MCxcbiAgICBnaG9zdFRpbWU6IDEwMCxcbiAgICBtYXhQcm9ncmVzc1BlckZyYW1lOiAyMCxcbiAgICBlYXNlRmFjdG9yOiAxLjI1LFxuICAgIHN0YXJ0T25QYWdlTG9hZDogdHJ1ZSxcbiAgICByZXN0YXJ0T25QdXNoU3RhdGU6IHRydWUsXG4gICAgcmVzdGFydE9uUmVxdWVzdEFmdGVyOiA1MDAsXG4gICAgdGFyZ2V0OiAnYm9keScsXG4gICAgZWxlbWVudHM6IHtcbiAgICAgIGNoZWNrSW50ZXJ2YWw6IDEwMCxcbiAgICAgIHNlbGVjdG9yczogWydib2R5J11cbiAgICB9LFxuICAgIGV2ZW50TGFnOiB7XG4gICAgICBtaW5TYW1wbGVzOiAxMCxcbiAgICAgIHNhbXBsZUNvdW50OiAzLFxuICAgICAgbGFnVGhyZXNob2xkOiAzXG4gICAgfSxcbiAgICBhamF4OiB7XG4gICAgICB0cmFja01ldGhvZHM6IFsnR0VUJ10sXG4gICAgICB0cmFja1dlYlNvY2tldHM6IHRydWUsXG4gICAgICBpZ25vcmVVUkxzOiBbXVxuICAgIH1cbiAgfTtcblxuICBub3cgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3JlZjtcbiAgICByZXR1cm4gKF9yZWYgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwgPyB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIgPyBwZXJmb3JtYW5jZS5ub3coKSA6IHZvaWQgMCA6IHZvaWQgMCkgIT0gbnVsbCA/IF9yZWYgOiArKG5ldyBEYXRlKTtcbiAgfTtcblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbiAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lO1xuXG4gIGlmIChyZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT0gbnVsbCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgICByZXR1cm4gc2V0VGltZW91dChmbiwgNTApO1xuICAgIH07XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG4gICAgfTtcbiAgfVxuXG4gIHJ1bkFuaW1hdGlvbiA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgdmFyIGxhc3QsIHRpY2s7XG4gICAgbGFzdCA9IG5vdygpO1xuICAgIHRpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkaWZmO1xuICAgICAgZGlmZiA9IG5vdygpIC0gbGFzdDtcbiAgICAgIGlmIChkaWZmID49IDMzKSB7XG4gICAgICAgIGxhc3QgPSBub3coKTtcbiAgICAgICAgcmV0dXJuIGZuKGRpZmYsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQodGljaywgMzMgLSBkaWZmKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB0aWNrKCk7XG4gIH07XG5cbiAgcmVzdWx0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MsIGtleSwgb2JqO1xuICAgIG9iaiA9IGFyZ3VtZW50c1swXSwga2V5ID0gYXJndW1lbnRzWzFdLCBhcmdzID0gMyA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiBbXTtcbiAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0uYXBwbHkob2JqLCBhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgIH1cbiAgfTtcblxuICBleHRlbmQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIga2V5LCBvdXQsIHNvdXJjZSwgc291cmNlcywgdmFsLCBfaSwgX2xlbjtcbiAgICBvdXQgPSBhcmd1bWVudHNbMF0sIHNvdXJjZXMgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gc291cmNlcy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgc291cmNlID0gc291cmNlc1tfaV07XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgIGlmICghX19oYXNQcm9wLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICB2YWwgPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICBpZiAoKG91dFtrZXldICE9IG51bGwpICYmIHR5cGVvZiBvdXRba2V5XSA9PT0gJ29iamVjdCcgJiYgKHZhbCAhPSBudWxsKSAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZXh0ZW5kKG91dFtrZXldLCB2YWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXRba2V5XSA9IHZhbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfTtcblxuICBhdmdBbXBsaXR1ZGUgPSBmdW5jdGlvbihhcnIpIHtcbiAgICB2YXIgY291bnQsIHN1bSwgdiwgX2ksIF9sZW47XG4gICAgc3VtID0gY291bnQgPSAwO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gYXJyLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICB2ID0gYXJyW19pXTtcbiAgICAgIHN1bSArPSBNYXRoLmFicyh2KTtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiBzdW0gLyBjb3VudDtcbiAgfTtcblxuICBnZXRGcm9tRE9NID0gZnVuY3Rpb24oa2V5LCBqc29uKSB7XG4gICAgdmFyIGRhdGEsIGUsIGVsO1xuICAgIGlmIChrZXkgPT0gbnVsbCkge1xuICAgICAga2V5ID0gJ29wdGlvbnMnO1xuICAgIH1cbiAgICBpZiAoanNvbiA9PSBudWxsKSB7XG4gICAgICBqc29uID0gdHJ1ZTtcbiAgICB9XG4gICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcGFjZS1cIiArIGtleSArIFwiXVwiKTtcbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRhdGEgPSBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhY2UtXCIgKyBrZXkpO1xuICAgIGlmICghanNvbikge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAgIGUgPSBfZXJyb3I7XG4gICAgICByZXR1cm4gdHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZSAhPT0gbnVsbCA/IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwYXJzaW5nIGlubGluZSBwYWNlIG9wdGlvbnNcIiwgZSkgOiB2b2lkIDA7XG4gICAgfVxuICB9O1xuXG4gIEV2ZW50ZWQgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gRXZlbnRlZCgpIHt9XG5cbiAgICBFdmVudGVkLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyLCBjdHgsIG9uY2UpIHtcbiAgICAgIHZhciBfYmFzZTtcbiAgICAgIGlmIChvbmNlID09IG51bGwpIHtcbiAgICAgICAgb25jZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYmluZGluZ3MgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmJpbmRpbmdzID0ge307XG4gICAgICB9XG4gICAgICBpZiAoKF9iYXNlID0gdGhpcy5iaW5kaW5ncylbZXZlbnRdID09IG51bGwpIHtcbiAgICAgICAgX2Jhc2VbZXZlbnRdID0gW107XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5iaW5kaW5nc1tldmVudF0ucHVzaCh7XG4gICAgICAgIGhhbmRsZXI6IGhhbmRsZXIsXG4gICAgICAgIGN0eDogY3R4LFxuICAgICAgICBvbmNlOiBvbmNlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgRXZlbnRlZC5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyLCBjdHgpIHtcbiAgICAgIHJldHVybiB0aGlzLm9uKGV2ZW50LCBoYW5kbGVyLCBjdHgsIHRydWUpO1xuICAgIH07XG5cbiAgICBFdmVudGVkLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlcikge1xuICAgICAgdmFyIGksIF9yZWYsIF9yZXN1bHRzO1xuICAgICAgaWYgKCgoX3JlZiA9IHRoaXMuYmluZGluZ3MpICE9IG51bGwgPyBfcmVmW2V2ZW50XSA6IHZvaWQgMCkgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaGFuZGxlciA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBkZWxldGUgdGhpcy5iaW5kaW5nc1tldmVudF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpID0gMDtcbiAgICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgd2hpbGUgKGkgPCB0aGlzLmJpbmRpbmdzW2V2ZW50XS5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAodGhpcy5iaW5kaW5nc1tldmVudF1baV0uaGFuZGxlciA9PT0gaGFuZGxlcikge1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaCh0aGlzLmJpbmRpbmdzW2V2ZW50XS5zcGxpY2UoaSwgMSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfcmVzdWx0cy5wdXNoKGkrKyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgRXZlbnRlZC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MsIGN0eCwgZXZlbnQsIGhhbmRsZXIsIGksIG9uY2UsIF9yZWYsIF9yZWYxLCBfcmVzdWx0cztcbiAgICAgIGV2ZW50ID0gYXJndW1lbnRzWzBdLCBhcmdzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgOiBbXTtcbiAgICAgIGlmICgoX3JlZiA9IHRoaXMuYmluZGluZ3MpICE9IG51bGwgPyBfcmVmW2V2ZW50XSA6IHZvaWQgMCkge1xuICAgICAgICBpID0gMDtcbiAgICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgd2hpbGUgKGkgPCB0aGlzLmJpbmRpbmdzW2V2ZW50XS5sZW5ndGgpIHtcbiAgICAgICAgICBfcmVmMSA9IHRoaXMuYmluZGluZ3NbZXZlbnRdW2ldLCBoYW5kbGVyID0gX3JlZjEuaGFuZGxlciwgY3R4ID0gX3JlZjEuY3R4LCBvbmNlID0gX3JlZjEub25jZTtcbiAgICAgICAgICBoYW5kbGVyLmFwcGx5KGN0eCAhPSBudWxsID8gY3R4IDogdGhpcywgYXJncyk7XG4gICAgICAgICAgaWYgKG9uY2UpIHtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2godGhpcy5iaW5kaW5nc1tldmVudF0uc3BsaWNlKGksIDEpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChpKyspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBFdmVudGVkO1xuXG4gIH0pKCk7XG5cbiAgUGFjZSA9IHdpbmRvdy5QYWNlIHx8IHt9O1xuXG4gIHdpbmRvdy5QYWNlID0gUGFjZTtcblxuICBleHRlbmQoUGFjZSwgRXZlbnRlZC5wcm90b3R5cGUpO1xuXG4gIG9wdGlvbnMgPSBQYWNlLm9wdGlvbnMgPSBleHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCB3aW5kb3cucGFjZU9wdGlvbnMsIGdldEZyb21ET00oKSk7XG5cbiAgX3JlZiA9IFsnYWpheCcsICdkb2N1bWVudCcsICdldmVudExhZycsICdlbGVtZW50cyddO1xuICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICBzb3VyY2UgPSBfcmVmW19pXTtcbiAgICBpZiAob3B0aW9uc1tzb3VyY2VdID09PSB0cnVlKSB7XG4gICAgICBvcHRpb25zW3NvdXJjZV0gPSBkZWZhdWx0T3B0aW9uc1tzb3VyY2VdO1xuICAgIH1cbiAgfVxuXG4gIE5vVGFyZ2V0RXJyb3IgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5vVGFyZ2V0RXJyb3IsIF9zdXBlcik7XG5cbiAgICBmdW5jdGlvbiBOb1RhcmdldEVycm9yKCkge1xuICAgICAgX3JlZjEgPSBOb1RhcmdldEVycm9yLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIF9yZWYxO1xuICAgIH1cblxuICAgIHJldHVybiBOb1RhcmdldEVycm9yO1xuXG4gIH0pKEVycm9yKTtcblxuICBCYXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQmFyKCkge1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgfVxuXG4gICAgQmFyLnByb3RvdHlwZS5nZXRFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdGFyZ2V0RWxlbWVudDtcbiAgICAgIGlmICh0aGlzLmVsID09IG51bGwpIHtcbiAgICAgICAgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy50YXJnZXQpO1xuICAgICAgICBpZiAoIXRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgTm9UYXJnZXRFcnJvcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NOYW1lID0gXCJwYWNlIHBhY2UtYWN0aXZlXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUucmVwbGFjZSgvcGFjZS1kb25lL2csICcnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgKz0gJyBwYWNlLXJ1bm5pbmcnO1xuICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwicGFjZS1wcm9ncmVzc1wiPlxcbiAgPGRpdiBjbGFzcz1cInBhY2UtcHJvZ3Jlc3MtaW5uZXJcIj48L2Rpdj5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVwicGFjZS1hY3Rpdml0eVwiPjwvZGl2Pic7XG4gICAgICAgIGlmICh0YXJnZXRFbGVtZW50LmZpcnN0Q2hpbGQgIT0gbnVsbCkge1xuICAgICAgICAgIHRhcmdldEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHRhcmdldEVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZWw7XG4gICAgfTtcblxuICAgIEJhci5wcm90b3R5cGUuZmluaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZWw7XG4gICAgICBlbCA9IHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtYWN0aXZlJywgJycpO1xuICAgICAgZWwuY2xhc3NOYW1lICs9ICcgcGFjZS1pbmFjdGl2ZSc7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtcnVubmluZycsICcnKTtcbiAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSArPSAnIHBhY2UtZG9uZSc7XG4gICAgfTtcblxuICAgIEJhci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24ocHJvZykge1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IHByb2c7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXIoKTtcbiAgICB9O1xuXG4gICAgQmFyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZ2V0RWxlbWVudCgpKTtcbiAgICAgIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgICAgICBOb1RhcmdldEVycm9yID0gX2Vycm9yO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZWwgPSB2b2lkIDA7XG4gICAgfTtcblxuICAgIEJhci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZWwsIGtleSwgcHJvZ3Jlc3NTdHIsIHRyYW5zZm9ybSwgX2osIF9sZW4xLCBfcmVmMjtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMudGFyZ2V0KSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGVsID0gdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgICB0cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKFwiICsgdGhpcy5wcm9ncmVzcyArIFwiJSwgMCwgMClcIjtcbiAgICAgIF9yZWYyID0gWyd3ZWJraXRUcmFuc2Zvcm0nLCAnbXNUcmFuc2Zvcm0nLCAndHJhbnNmb3JtJ107XG4gICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgICAga2V5ID0gX3JlZjJbX2pdO1xuICAgICAgICBlbC5jaGlsZHJlblswXS5zdHlsZVtrZXldID0gdHJhbnNmb3JtO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmxhc3RSZW5kZXJlZFByb2dyZXNzIHx8IHRoaXMubGFzdFJlbmRlcmVkUHJvZ3Jlc3MgfCAwICE9PSB0aGlzLnByb2dyZXNzIHwgMCkge1xuICAgICAgICBlbC5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZ3Jlc3MtdGV4dCcsIFwiXCIgKyAodGhpcy5wcm9ncmVzcyB8IDApICsgXCIlXCIpO1xuICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSAxMDApIHtcbiAgICAgICAgICBwcm9ncmVzc1N0ciA9ICc5OSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvZ3Jlc3NTdHIgPSB0aGlzLnByb2dyZXNzIDwgMTAgPyBcIjBcIiA6IFwiXCI7XG4gICAgICAgICAgcHJvZ3Jlc3NTdHIgKz0gdGhpcy5wcm9ncmVzcyB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWwuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKCdkYXRhLXByb2dyZXNzJywgXCJcIiArIHByb2dyZXNzU3RyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmxhc3RSZW5kZXJlZFByb2dyZXNzID0gdGhpcy5wcm9ncmVzcztcbiAgICB9O1xuXG4gICAgQmFyLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9ncmVzcyA+PSAxMDA7XG4gICAgfTtcblxuICAgIHJldHVybiBCYXI7XG5cbiAgfSkoKTtcblxuICBFdmVudHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gRXZlbnRzKCkge1xuICAgICAgdGhpcy5iaW5kaW5ncyA9IHt9O1xuICAgIH1cblxuICAgIEV2ZW50cy5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKG5hbWUsIHZhbCkge1xuICAgICAgdmFyIGJpbmRpbmcsIF9qLCBfbGVuMSwgX3JlZjIsIF9yZXN1bHRzO1xuICAgICAgaWYgKHRoaXMuYmluZGluZ3NbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICBfcmVmMiA9IHRoaXMuYmluZGluZ3NbbmFtZV07XG4gICAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IF9yZWYyLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xuICAgICAgICAgIGJpbmRpbmcgPSBfcmVmMltfal07XG4gICAgICAgICAgX3Jlc3VsdHMucHVzaChiaW5kaW5nLmNhbGwodGhpcywgdmFsKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBFdmVudHMucHJvdG90eXBlLm9uID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICAgIHZhciBfYmFzZTtcbiAgICAgIGlmICgoX2Jhc2UgPSB0aGlzLmJpbmRpbmdzKVtuYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIF9iYXNlW25hbWVdID0gW107XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5iaW5kaW5nc1tuYW1lXS5wdXNoKGZuKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEV2ZW50cztcblxuICB9KSgpO1xuXG4gIF9YTUxIdHRwUmVxdWVzdCA9IHdpbmRvdy5YTUxIdHRwUmVxdWVzdDtcblxuICBfWERvbWFpblJlcXVlc3QgPSB3aW5kb3cuWERvbWFpblJlcXVlc3Q7XG5cbiAgX1dlYlNvY2tldCA9IHdpbmRvdy5XZWJTb2NrZXQ7XG5cbiAgZXh0ZW5kTmF0aXZlID0gZnVuY3Rpb24odG8sIGZyb20pIHtcbiAgICB2YXIgZSwga2V5LCBfcmVzdWx0cztcbiAgICBfcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoa2V5IGluIGZyb20ucHJvdG90eXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoKHRvW2tleV0gPT0gbnVsbCkgJiYgdHlwZW9mIGZyb21ba2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnR5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBfcmVzdWx0cy5wdXNoKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0bywga2V5LCB7XG4gICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyb20ucHJvdG90eXBlW2tleV07XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfcmVzdWx0cy5wdXNoKHRvW2tleV0gPSBmcm9tLnByb3RvdHlwZVtrZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3Jlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAgICAgZSA9IF9lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9yZXN1bHRzO1xuICB9O1xuXG4gIGlnbm9yZVN0YWNrID0gW107XG5cbiAgUGFjZS5pZ25vcmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncywgZm4sIHJldDtcbiAgICBmbiA9IGFyZ3VtZW50c1swXSwgYXJncyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gICAgaWdub3JlU3RhY2sudW5zaGlmdCgnaWdub3JlJyk7XG4gICAgcmV0ID0gZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgaWdub3JlU3RhY2suc2hpZnQoKTtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIFBhY2UudHJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncywgZm4sIHJldDtcbiAgICBmbiA9IGFyZ3VtZW50c1swXSwgYXJncyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gICAgaWdub3JlU3RhY2sudW5zaGlmdCgndHJhY2snKTtcbiAgICByZXQgPSBmbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICBpZ25vcmVTdGFjay5zaGlmdCgpO1xuICAgIHJldHVybiByZXQ7XG4gIH07XG5cbiAgc2hvdWxkVHJhY2sgPSBmdW5jdGlvbihtZXRob2QpIHtcbiAgICB2YXIgX3JlZjI7XG4gICAgaWYgKG1ldGhvZCA9PSBudWxsKSB7XG4gICAgICBtZXRob2QgPSAnR0VUJztcbiAgICB9XG4gICAgaWYgKGlnbm9yZVN0YWNrWzBdID09PSAndHJhY2snKSB7XG4gICAgICByZXR1cm4gJ2ZvcmNlJztcbiAgICB9XG4gICAgaWYgKCFpZ25vcmVTdGFjay5sZW5ndGggJiYgb3B0aW9ucy5hamF4KSB7XG4gICAgICBpZiAobWV0aG9kID09PSAnc29ja2V0JyAmJiBvcHRpb25zLmFqYXgudHJhY2tXZWJTb2NrZXRzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChfcmVmMiA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpLCBfX2luZGV4T2YuY2FsbChvcHRpb25zLmFqYXgudHJhY2tNZXRob2RzLCBfcmVmMikgPj0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIFJlcXVlc3RJbnRlcmNlcHQgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJlcXVlc3RJbnRlcmNlcHQsIF9zdXBlcik7XG5cbiAgICBmdW5jdGlvbiBSZXF1ZXN0SW50ZXJjZXB0KCkge1xuICAgICAgdmFyIG1vbml0b3JYSFIsXG4gICAgICAgIF90aGlzID0gdGhpcztcbiAgICAgIFJlcXVlc3RJbnRlcmNlcHQuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBtb25pdG9yWEhSID0gZnVuY3Rpb24ocmVxKSB7XG4gICAgICAgIHZhciBfb3BlbjtcbiAgICAgICAgX29wZW4gPSByZXEub3BlbjtcbiAgICAgICAgcmV0dXJuIHJlcS5vcGVuID0gZnVuY3Rpb24odHlwZSwgdXJsLCBhc3luYykge1xuICAgICAgICAgIGlmIChzaG91bGRUcmFjayh0eXBlKSkge1xuICAgICAgICAgICAgX3RoaXMudHJpZ2dlcigncmVxdWVzdCcsIHtcbiAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBfb3Blbi5hcHBseShyZXEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgd2luZG93LlhNTEh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24oZmxhZ3MpIHtcbiAgICAgICAgdmFyIHJlcTtcbiAgICAgICAgcmVxID0gbmV3IF9YTUxIdHRwUmVxdWVzdChmbGFncyk7XG4gICAgICAgIG1vbml0b3JYSFIocmVxKTtcbiAgICAgICAgcmV0dXJuIHJlcTtcbiAgICAgIH07XG4gICAgICB0cnkge1xuICAgICAgICBleHRlbmROYXRpdmUod2luZG93LlhNTEh0dHBSZXF1ZXN0LCBfWE1MSHR0cFJlcXVlc3QpO1xuICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7fVxuICAgICAgaWYgKF9YRG9tYWluUmVxdWVzdCAhPSBudWxsKSB7XG4gICAgICAgIHdpbmRvdy5YRG9tYWluUmVxdWVzdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciByZXE7XG4gICAgICAgICAgcmVxID0gbmV3IF9YRG9tYWluUmVxdWVzdDtcbiAgICAgICAgICBtb25pdG9yWEhSKHJlcSk7XG4gICAgICAgICAgcmV0dXJuIHJlcTtcbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBleHRlbmROYXRpdmUod2luZG93LlhEb21haW5SZXF1ZXN0LCBfWERvbWFpblJlcXVlc3QpO1xuICAgICAgICB9IGNhdGNoIChfZXJyb3IpIHt9XG4gICAgICB9XG4gICAgICBpZiAoKF9XZWJTb2NrZXQgIT0gbnVsbCkgJiYgb3B0aW9ucy5hamF4LnRyYWNrV2ViU29ja2V0cykge1xuICAgICAgICB3aW5kb3cuV2ViU29ja2V0ID0gZnVuY3Rpb24odXJsLCBwcm90b2NvbHMpIHtcbiAgICAgICAgICB2YXIgcmVxO1xuICAgICAgICAgIGlmIChwcm90b2NvbHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmVxID0gbmV3IF9XZWJTb2NrZXQodXJsLCBwcm90b2NvbHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXEgPSBuZXcgX1dlYlNvY2tldCh1cmwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2hvdWxkVHJhY2soJ3NvY2tldCcpKSB7XG4gICAgICAgICAgICBfdGhpcy50cmlnZ2VyKCdyZXF1ZXN0Jywge1xuICAgICAgICAgICAgICB0eXBlOiAnc29ja2V0JyxcbiAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgIHByb3RvY29sczogcHJvdG9jb2xzLFxuICAgICAgICAgICAgICByZXF1ZXN0OiByZXFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVxO1xuICAgICAgICB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGV4dGVuZE5hdGl2ZSh3aW5kb3cuV2ViU29ja2V0LCBfV2ViU29ja2V0KTtcbiAgICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7fVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZXF1ZXN0SW50ZXJjZXB0O1xuXG4gIH0pKEV2ZW50cyk7XG5cbiAgX2ludGVyY2VwdCA9IG51bGw7XG5cbiAgZ2V0SW50ZXJjZXB0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKF9pbnRlcmNlcHQgPT0gbnVsbCkge1xuICAgICAgX2ludGVyY2VwdCA9IG5ldyBSZXF1ZXN0SW50ZXJjZXB0O1xuICAgIH1cbiAgICByZXR1cm4gX2ludGVyY2VwdDtcbiAgfTtcblxuICBzaG91bGRJZ25vcmVVUkwgPSBmdW5jdGlvbih1cmwpIHtcbiAgICB2YXIgcGF0dGVybiwgX2osIF9sZW4xLCBfcmVmMjtcbiAgICBfcmVmMiA9IG9wdGlvbnMuYWpheC5pZ25vcmVVUkxzO1xuICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IF9yZWYyLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xuICAgICAgcGF0dGVybiA9IF9yZWYyW19qXTtcbiAgICAgIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKHBhdHRlcm4pICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGF0dGVybi50ZXN0KHVybCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgZ2V0SW50ZXJjZXB0KCkub24oJ3JlcXVlc3QnLCBmdW5jdGlvbihfYXJnKSB7XG4gICAgdmFyIGFmdGVyLCBhcmdzLCByZXF1ZXN0LCB0eXBlLCB1cmw7XG4gICAgdHlwZSA9IF9hcmcudHlwZSwgcmVxdWVzdCA9IF9hcmcucmVxdWVzdCwgdXJsID0gX2FyZy51cmw7XG4gICAgaWYgKHNob3VsZElnbm9yZVVSTCh1cmwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghUGFjZS5ydW5uaW5nICYmIChvcHRpb25zLnJlc3RhcnRPblJlcXVlc3RBZnRlciAhPT0gZmFsc2UgfHwgc2hvdWxkVHJhY2sodHlwZSkgPT09ICdmb3JjZScpKSB7XG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgYWZ0ZXIgPSBvcHRpb25zLnJlc3RhcnRPblJlcXVlc3RBZnRlciB8fCAwO1xuICAgICAgaWYgKHR5cGVvZiBhZnRlciA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGFmdGVyID0gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3RpbGxBY3RpdmUsIF9qLCBfbGVuMSwgX3JlZjIsIF9yZWYzLCBfcmVzdWx0cztcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzb2NrZXQnKSB7XG4gICAgICAgICAgc3RpbGxBY3RpdmUgPSByZXF1ZXN0LnJlYWR5U3RhdGUgPCAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0aWxsQWN0aXZlID0gKDAgPCAoX3JlZjIgPSByZXF1ZXN0LnJlYWR5U3RhdGUpICYmIF9yZWYyIDwgNCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0aWxsQWN0aXZlKSB7XG4gICAgICAgICAgUGFjZS5yZXN0YXJ0KCk7XG4gICAgICAgICAgX3JlZjMgPSBQYWNlLnNvdXJjZXM7XG4gICAgICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMy5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgICAgICAgIHNvdXJjZSA9IF9yZWYzW19qXTtcbiAgICAgICAgICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBamF4TW9uaXRvcikge1xuICAgICAgICAgICAgICBzb3VyY2Uud2F0Y2guYXBwbHkoc291cmNlLCBhcmdzKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgICAgfVxuICAgICAgfSwgYWZ0ZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgQWpheE1vbml0b3IgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQWpheE1vbml0b3IoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IFtdO1xuICAgICAgZ2V0SW50ZXJjZXB0KCkub24oJ3JlcXVlc3QnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLndhdGNoLmFwcGx5KF90aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgQWpheE1vbml0b3IucHJvdG90eXBlLndhdGNoID0gZnVuY3Rpb24oX2FyZykge1xuICAgICAgdmFyIHJlcXVlc3QsIHRyYWNrZXIsIHR5cGUsIHVybDtcbiAgICAgIHR5cGUgPSBfYXJnLnR5cGUsIHJlcXVlc3QgPSBfYXJnLnJlcXVlc3QsIHVybCA9IF9hcmcudXJsO1xuICAgICAgaWYgKHNob3VsZElnbm9yZVVSTCh1cmwpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSAnc29ja2V0Jykge1xuICAgICAgICB0cmFja2VyID0gbmV3IFNvY2tldFJlcXVlc3RUcmFja2VyKHJlcXVlc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhY2tlciA9IG5ldyBYSFJSZXF1ZXN0VHJhY2tlcihyZXF1ZXN0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRzLnB1c2godHJhY2tlcik7XG4gICAgfTtcblxuICAgIHJldHVybiBBamF4TW9uaXRvcjtcblxuICB9KSgpO1xuXG4gIFhIUlJlcXVlc3RUcmFja2VyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIFhIUlJlcXVlc3RUcmFja2VyKHJlcXVlc3QpIHtcbiAgICAgIHZhciBldmVudCwgc2l6ZSwgX2osIF9sZW4xLCBfb25yZWFkeXN0YXRlY2hhbmdlLCBfcmVmMixcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICBpZiAod2luZG93LlByb2dyZXNzRXZlbnQgIT0gbnVsbCkge1xuICAgICAgICBzaXplID0gbnVsbDtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIGlmIChldnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnByb2dyZXNzID0gMTAwICogZXZ0LmxvYWRlZCAvIGV2dC50b3RhbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnByb2dyZXNzID0gX3RoaXMucHJvZ3Jlc3MgKyAoMTAwIC0gX3RoaXMucHJvZ3Jlc3MpIC8gMjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgX3JlZjIgPSBbJ2xvYWQnLCAnYWJvcnQnLCAndGltZW91dCcsICdlcnJvciddO1xuICAgICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgICAgICBldmVudCA9IF9yZWYyW19qXTtcbiAgICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnByb2dyZXNzID0gMTAwO1xuICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX29ucmVhZHlzdGF0ZWNoYW5nZSA9IHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlO1xuICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBfcmVmMztcbiAgICAgICAgICBpZiAoKF9yZWYzID0gcmVxdWVzdC5yZWFkeVN0YXRlKSA9PT0gMCB8fCBfcmVmMyA9PT0gNCkge1xuICAgICAgICAgICAgX3RoaXMucHJvZ3Jlc3MgPSAxMDA7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT09IDMpIHtcbiAgICAgICAgICAgIF90aGlzLnByb2dyZXNzID0gNTA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0eXBlb2YgX29ucmVhZHlzdGF0ZWNoYW5nZSA9PT0gXCJmdW5jdGlvblwiID8gX29ucmVhZHlzdGF0ZWNoYW5nZS5hcHBseShudWxsLCBhcmd1bWVudHMpIDogdm9pZCAwO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBYSFJSZXF1ZXN0VHJhY2tlcjtcblxuICB9KSgpO1xuXG4gIFNvY2tldFJlcXVlc3RUcmFja2VyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIFNvY2tldFJlcXVlc3RUcmFja2VyKHJlcXVlc3QpIHtcbiAgICAgIHZhciBldmVudCwgX2osIF9sZW4xLCBfcmVmMixcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICBfcmVmMiA9IFsnZXJyb3InLCAnb3BlbiddO1xuICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjIubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICAgIGV2ZW50ID0gX3JlZjJbX2pdO1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9ncmVzcyA9IDEwMDtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBTb2NrZXRSZXF1ZXN0VHJhY2tlcjtcblxuICB9KSgpO1xuXG4gIEVsZW1lbnRNb25pdG9yID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEVsZW1lbnRNb25pdG9yKG9wdGlvbnMpIHtcbiAgICAgIHZhciBzZWxlY3RvciwgX2osIF9sZW4xLCBfcmVmMjtcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuICAgICAgdGhpcy5lbGVtZW50cyA9IFtdO1xuICAgICAgaWYgKG9wdGlvbnMuc2VsZWN0b3JzID09IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucy5zZWxlY3RvcnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIF9yZWYyID0gb3B0aW9ucy5zZWxlY3RvcnM7XG4gICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgICAgc2VsZWN0b3IgPSBfcmVmMltfal07XG4gICAgICAgIHRoaXMuZWxlbWVudHMucHVzaChuZXcgRWxlbWVudFRyYWNrZXIoc2VsZWN0b3IpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gRWxlbWVudE1vbml0b3I7XG5cbiAgfSkoKTtcblxuICBFbGVtZW50VHJhY2tlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBFbGVtZW50VHJhY2tlcihzZWxlY3Rvcikge1xuICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICB0aGlzLmNoZWNrKCk7XG4gICAgfVxuXG4gICAgRWxlbWVudFRyYWNrZXIucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9uZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5jaGVjaygpO1xuICAgICAgICB9KSwgb3B0aW9ucy5lbGVtZW50cy5jaGVja0ludGVydmFsKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgRWxlbWVudFRyYWNrZXIucHJvdG90eXBlLmRvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzID0gMTAwO1xuICAgIH07XG5cbiAgICByZXR1cm4gRWxlbWVudFRyYWNrZXI7XG5cbiAgfSkoKTtcblxuICBEb2N1bWVudE1vbml0b3IgPSAoZnVuY3Rpb24oKSB7XG4gICAgRG9jdW1lbnRNb25pdG9yLnByb3RvdHlwZS5zdGF0ZXMgPSB7XG4gICAgICBsb2FkaW5nOiAwLFxuICAgICAgaW50ZXJhY3RpdmU6IDUwLFxuICAgICAgY29tcGxldGU6IDEwMFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBEb2N1bWVudE1vbml0b3IoKSB7XG4gICAgICB2YXIgX29ucmVhZHlzdGF0ZWNoYW5nZSwgX3JlZjIsXG4gICAgICAgIF90aGlzID0gdGhpcztcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAoX3JlZjIgPSB0aGlzLnN0YXRlc1tkb2N1bWVudC5yZWFkeVN0YXRlXSkgIT0gbnVsbCA/IF9yZWYyIDogMTAwO1xuICAgICAgX29ucmVhZHlzdGF0ZWNoYW5nZSA9IGRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZTtcbiAgICAgIGRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoX3RoaXMuc3RhdGVzW2RvY3VtZW50LnJlYWR5U3RhdGVdICE9IG51bGwpIHtcbiAgICAgICAgICBfdGhpcy5wcm9ncmVzcyA9IF90aGlzLnN0YXRlc1tkb2N1bWVudC5yZWFkeVN0YXRlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwZW9mIF9vbnJlYWR5c3RhdGVjaGFuZ2UgPT09IFwiZnVuY3Rpb25cIiA/IF9vbnJlYWR5c3RhdGVjaGFuZ2UuYXBwbHkobnVsbCwgYXJndW1lbnRzKSA6IHZvaWQgMDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIERvY3VtZW50TW9uaXRvcjtcblxuICB9KSgpO1xuXG4gIEV2ZW50TGFnTW9uaXRvciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBFdmVudExhZ01vbml0b3IoKSB7XG4gICAgICB2YXIgYXZnLCBpbnRlcnZhbCwgbGFzdCwgcG9pbnRzLCBzYW1wbGVzLFxuICAgICAgICBfdGhpcyA9IHRoaXM7XG4gICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgIGF2ZyA9IDA7XG4gICAgICBzYW1wbGVzID0gW107XG4gICAgICBwb2ludHMgPSAwO1xuICAgICAgbGFzdCA9IG5vdygpO1xuICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRpZmY7XG4gICAgICAgIGRpZmYgPSBub3coKSAtIGxhc3QgLSA1MDtcbiAgICAgICAgbGFzdCA9IG5vdygpO1xuICAgICAgICBzYW1wbGVzLnB1c2goZGlmZik7XG4gICAgICAgIGlmIChzYW1wbGVzLmxlbmd0aCA+IG9wdGlvbnMuZXZlbnRMYWcuc2FtcGxlQ291bnQpIHtcbiAgICAgICAgICBzYW1wbGVzLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYXZnID0gYXZnQW1wbGl0dWRlKHNhbXBsZXMpO1xuICAgICAgICBpZiAoKytwb2ludHMgPj0gb3B0aW9ucy5ldmVudExhZy5taW5TYW1wbGVzICYmIGF2ZyA8IG9wdGlvbnMuZXZlbnRMYWcubGFnVGhyZXNob2xkKSB7XG4gICAgICAgICAgX3RoaXMucHJvZ3Jlc3MgPSAxMDA7XG4gICAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9ncmVzcyA9IDEwMCAqICgzIC8gKGF2ZyArIDMpKTtcbiAgICAgICAgfVxuICAgICAgfSwgNTApO1xuICAgIH1cblxuICAgIHJldHVybiBFdmVudExhZ01vbml0b3I7XG5cbiAgfSkoKTtcblxuICBTY2FsZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gU2NhbGVyKHNvdXJjZSkge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLmxhc3QgPSB0aGlzLnNpbmNlTGFzdFVwZGF0ZSA9IDA7XG4gICAgICB0aGlzLnJhdGUgPSBvcHRpb25zLmluaXRpYWxSYXRlO1xuICAgICAgdGhpcy5jYXRjaHVwID0gMDtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSB0aGlzLmxhc3RQcm9ncmVzcyA9IDA7XG4gICAgICBpZiAodGhpcy5zb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gcmVzdWx0KHRoaXMuc291cmNlLCAncHJvZ3Jlc3MnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTY2FsZXIucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbihmcmFtZVRpbWUsIHZhbCkge1xuICAgICAgdmFyIHNjYWxpbmc7XG4gICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgdmFsID0gcmVzdWx0KHRoaXMuc291cmNlLCAncHJvZ3Jlc3MnKTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWwgPj0gMTAwKSB7XG4gICAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodmFsID09PSB0aGlzLmxhc3QpIHtcbiAgICAgICAgdGhpcy5zaW5jZUxhc3RVcGRhdGUgKz0gZnJhbWVUaW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuc2luY2VMYXN0VXBkYXRlKSB7XG4gICAgICAgICAgdGhpcy5yYXRlID0gKHZhbCAtIHRoaXMubGFzdCkgLyB0aGlzLnNpbmNlTGFzdFVwZGF0ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhdGNodXAgPSAodmFsIC0gdGhpcy5wcm9ncmVzcykgLyBvcHRpb25zLmNhdGNodXBUaW1lO1xuICAgICAgICB0aGlzLnNpbmNlTGFzdFVwZGF0ZSA9IDA7XG4gICAgICAgIHRoaXMubGFzdCA9IHZhbDtcbiAgICAgIH1cbiAgICAgIGlmICh2YWwgPiB0aGlzLnByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgKz0gdGhpcy5jYXRjaHVwICogZnJhbWVUaW1lO1xuICAgICAgfVxuICAgICAgc2NhbGluZyA9IDEgLSBNYXRoLnBvdyh0aGlzLnByb2dyZXNzIC8gMTAwLCBvcHRpb25zLmVhc2VGYWN0b3IpO1xuICAgICAgdGhpcy5wcm9ncmVzcyArPSBzY2FsaW5nICogdGhpcy5yYXRlICogZnJhbWVUaW1lO1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IE1hdGgubWluKHRoaXMubGFzdFByb2dyZXNzICsgb3B0aW9ucy5tYXhQcm9ncmVzc1BlckZyYW1lLCB0aGlzLnByb2dyZXNzKTtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLm1heCgwLCB0aGlzLnByb2dyZXNzKTtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLm1pbigxMDAsIHRoaXMucHJvZ3Jlc3MpO1xuICAgICAgdGhpcy5sYXN0UHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzO1xuICAgICAgcmV0dXJuIHRoaXMucHJvZ3Jlc3M7XG4gICAgfTtcblxuICAgIHJldHVybiBTY2FsZXI7XG5cbiAgfSkoKTtcblxuICBzb3VyY2VzID0gbnVsbDtcblxuICBzY2FsZXJzID0gbnVsbDtcblxuICBiYXIgPSBudWxsO1xuXG4gIHVuaVNjYWxlciA9IG51bGw7XG5cbiAgYW5pbWF0aW9uID0gbnVsbDtcblxuICBjYW5jZWxBbmltYXRpb24gPSBudWxsO1xuXG4gIFBhY2UucnVubmluZyA9IGZhbHNlO1xuXG4gIGhhbmRsZVB1c2hTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChvcHRpb25zLnJlc3RhcnRPblB1c2hTdGF0ZSkge1xuICAgICAgcmV0dXJuIFBhY2UucmVzdGFydCgpO1xuICAgIH1cbiAgfTtcblxuICBpZiAod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlICE9IG51bGwpIHtcbiAgICBfcHVzaFN0YXRlID0gd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlO1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaGFuZGxlUHVzaFN0YXRlKCk7XG4gICAgICByZXR1cm4gX3B1c2hTdGF0ZS5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSAhPSBudWxsKSB7XG4gICAgX3JlcGxhY2VTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZTtcbiAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGhhbmRsZVB1c2hTdGF0ZSgpO1xuICAgICAgcmV0dXJuIF9yZXBsYWNlU3RhdGUuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIFNPVVJDRV9LRVlTID0ge1xuICAgIGFqYXg6IEFqYXhNb25pdG9yLFxuICAgIGVsZW1lbnRzOiBFbGVtZW50TW9uaXRvcixcbiAgICBkb2N1bWVudDogRG9jdW1lbnRNb25pdG9yLFxuICAgIGV2ZW50TGFnOiBFdmVudExhZ01vbml0b3JcbiAgfTtcblxuICAoaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0eXBlLCBfaiwgX2ssIF9sZW4xLCBfbGVuMiwgX3JlZjIsIF9yZWYzLCBfcmVmNDtcbiAgICBQYWNlLnNvdXJjZXMgPSBzb3VyY2VzID0gW107XG4gICAgX3JlZjIgPSBbJ2FqYXgnLCAnZWxlbWVudHMnLCAnZG9jdW1lbnQnLCAnZXZlbnRMYWcnXTtcbiAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgIHR5cGUgPSBfcmVmMltfal07XG4gICAgICBpZiAob3B0aW9uc1t0eXBlXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgc291cmNlcy5wdXNoKG5ldyBTT1VSQ0VfS0VZU1t0eXBlXShvcHRpb25zW3R5cGVdKSk7XG4gICAgICB9XG4gICAgfVxuICAgIF9yZWY0ID0gKF9yZWYzID0gb3B0aW9ucy5leHRyYVNvdXJjZXMpICE9IG51bGwgPyBfcmVmMyA6IFtdO1xuICAgIGZvciAoX2sgPSAwLCBfbGVuMiA9IF9yZWY0Lmxlbmd0aDsgX2sgPCBfbGVuMjsgX2srKykge1xuICAgICAgc291cmNlID0gX3JlZjRbX2tdO1xuICAgICAgc291cmNlcy5wdXNoKG5ldyBzb3VyY2Uob3B0aW9ucykpO1xuICAgIH1cbiAgICBQYWNlLmJhciA9IGJhciA9IG5ldyBCYXI7XG4gICAgc2NhbGVycyA9IFtdO1xuICAgIHJldHVybiB1bmlTY2FsZXIgPSBuZXcgU2NhbGVyO1xuICB9KSgpO1xuXG4gIFBhY2Uuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIFBhY2UudHJpZ2dlcignc3RvcCcpO1xuICAgIFBhY2UucnVubmluZyA9IGZhbHNlO1xuICAgIGJhci5kZXN0cm95KCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICBpZiAoYW5pbWF0aW9uICE9IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2YgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgfVxuICAgICAgYW5pbWF0aW9uID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGluaXQoKTtcbiAgfTtcblxuICBQYWNlLnJlc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICBQYWNlLnRyaWdnZXIoJ3Jlc3RhcnQnKTtcbiAgICBQYWNlLnN0b3AoKTtcbiAgICByZXR1cm4gUGFjZS5zdGFydCgpO1xuICB9O1xuXG4gIFBhY2UuZ28gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhcnQ7XG4gICAgUGFjZS5ydW5uaW5nID0gdHJ1ZTtcbiAgICBiYXIucmVuZGVyKCk7XG4gICAgc3RhcnQgPSBub3coKTtcbiAgICBjYW5jZWxBbmltYXRpb24gPSBmYWxzZTtcbiAgICByZXR1cm4gYW5pbWF0aW9uID0gcnVuQW5pbWF0aW9uKGZ1bmN0aW9uKGZyYW1lVGltZSwgZW5xdWV1ZU5leHRGcmFtZSkge1xuICAgICAgdmFyIGF2ZywgY291bnQsIGRvbmUsIGVsZW1lbnQsIGVsZW1lbnRzLCBpLCBqLCByZW1haW5pbmcsIHNjYWxlciwgc2NhbGVyTGlzdCwgc3VtLCBfaiwgX2ssIF9sZW4xLCBfbGVuMiwgX3JlZjI7XG4gICAgICByZW1haW5pbmcgPSAxMDAgLSBiYXIucHJvZ3Jlc3M7XG4gICAgICBjb3VudCA9IHN1bSA9IDA7XG4gICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIGZvciAoaSA9IF9qID0gMCwgX2xlbjEgPSBzb3VyY2VzLmxlbmd0aDsgX2ogPCBfbGVuMTsgaSA9ICsrX2opIHtcbiAgICAgICAgc291cmNlID0gc291cmNlc1tpXTtcbiAgICAgICAgc2NhbGVyTGlzdCA9IHNjYWxlcnNbaV0gIT0gbnVsbCA/IHNjYWxlcnNbaV0gOiBzY2FsZXJzW2ldID0gW107XG4gICAgICAgIGVsZW1lbnRzID0gKF9yZWYyID0gc291cmNlLmVsZW1lbnRzKSAhPSBudWxsID8gX3JlZjIgOiBbc291cmNlXTtcbiAgICAgICAgZm9yIChqID0gX2sgPSAwLCBfbGVuMiA9IGVsZW1lbnRzLmxlbmd0aDsgX2sgPCBfbGVuMjsgaiA9ICsrX2spIHtcbiAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudHNbal07XG4gICAgICAgICAgc2NhbGVyID0gc2NhbGVyTGlzdFtqXSAhPSBudWxsID8gc2NhbGVyTGlzdFtqXSA6IHNjYWxlckxpc3Rbal0gPSBuZXcgU2NhbGVyKGVsZW1lbnQpO1xuICAgICAgICAgIGRvbmUgJj0gc2NhbGVyLmRvbmU7XG4gICAgICAgICAgaWYgKHNjYWxlci5kb25lKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgICBzdW0gKz0gc2NhbGVyLnRpY2soZnJhbWVUaW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXZnID0gc3VtIC8gY291bnQ7XG4gICAgICBiYXIudXBkYXRlKHVuaVNjYWxlci50aWNrKGZyYW1lVGltZSwgYXZnKSk7XG4gICAgICBpZiAoYmFyLmRvbmUoKSB8fCBkb25lIHx8IGNhbmNlbEFuaW1hdGlvbikge1xuICAgICAgICBiYXIudXBkYXRlKDEwMCk7XG4gICAgICAgIFBhY2UudHJpZ2dlcignZG9uZScpO1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBiYXIuZmluaXNoKCk7XG4gICAgICAgICAgUGFjZS5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIFBhY2UudHJpZ2dlcignaGlkZScpO1xuICAgICAgICB9LCBNYXRoLm1heChvcHRpb25zLmdob3N0VGltZSwgTWF0aC5tYXgob3B0aW9ucy5taW5UaW1lIC0gKG5vdygpIC0gc3RhcnQpLCAwKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVucXVldWVOZXh0RnJhbWUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBQYWNlLnN0YXJ0ID0gZnVuY3Rpb24oX29wdGlvbnMpIHtcbiAgICBleHRlbmQob3B0aW9ucywgX29wdGlvbnMpO1xuICAgIFBhY2UucnVubmluZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGJhci5yZW5kZXIoKTtcbiAgICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAgIE5vVGFyZ2V0RXJyb3IgPSBfZXJyb3I7XG4gICAgfVxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhY2UnKSkge1xuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoUGFjZS5zdGFydCwgNTApO1xuICAgIH0gZWxzZSB7XG4gICAgICBQYWNlLnRyaWdnZXIoJ3N0YXJ0Jyk7XG4gICAgICByZXR1cm4gUGFjZS5nbygpO1xuICAgIH1cbiAgfTtcblxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsncGFjZSddLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBQYWNlO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gUGFjZTtcbiAgfSBlbHNlIHtcbiAgICBpZiAob3B0aW9ucy5zdGFydE9uUGFnZUxvYWQpIHtcbiAgICAgIFBhY2Uuc3RhcnQoKTtcbiAgICB9XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcbiIsImpRdWVyeShmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8gRmxleHkgaGVhZGVyXG4gICAgZmxleHlfaGVhZGVyLmluaXQoKTtcblxuICAgIC8vIFNpZHJcbiAgICAkKCcuc2xpbmt5LW1lbnUnKVxuICAgICAgICAuZmluZCgndWwsIGxpLCBhJylcbiAgICAgICAgLnJlbW92ZUNsYXNzKCk7XG5cbiAgICAkKCcuc2lkci10b2dnbGUtLXJpZ2h0Jykuc2lkcih7XG4gICAgICAgIG5hbWU6ICdzaWRyLW1haW4nLFxuICAgICAgICBzaWRlOiAncmlnaHQnLFxuICAgICAgICByZW5hbWluZzogZmFsc2UsXG4gICAgICAgIGJvZHk6ICcubGF5b3V0X193cmFwcGVyJyxcbiAgICAgICAgc291cmNlOiAnLnNpZHItc291cmNlLXByb3ZpZGVyJ1xuICAgIH0pO1xuXG4gICAgLy8gU2xpbmt5XG4gICAgJCgnLnNpZHIgLnNsaW5reS1tZW51Jykuc2xpbmt5KHtcbiAgICAgICAgdGl0bGU6IHRydWUsXG4gICAgICAgIGxhYmVsOiAnJ1xuICAgIH0pO1xuXG4gICAgLy8gRW5hYmxlIC8gZGlzYWJsZSBCb290c3RyYXAgdG9vbHRpcHMsIGJhc2VkIHVwb24gdG91Y2ggZXZlbnRzXG4gICAgaWYoTW9kZXJuaXpyLnRvdWNoZXZlbnRzKSB7XG4gICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCdoaWRlJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuICAgIH1cblxuICAgIC8vIEZsZXh5IGhlYWRlciBmb3JtXG4gICAgZnVuY3Rpb24gX3NldF9mbGV4eV9oZWFkZXJfZm9ybV9wb3NpdGlvbigpIHtcbiAgICAgICAgbGV0ICRmb3JtID0gJCgnLmZsZXh5LWhlYWRlcl9fZm9ybScpLFxuICAgICAgICAgICAgb3ZlcmxhcF93aWR0aCA9IDEyNSwgLy8gaW4gcGl4ZWxzIChhbHNvIHNldCBpbiBDU1MpXG4gICAgICAgICAgICB3aW5kb3dfd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKSxcbiAgICAgICAgICAgIGNvbnRhaW5lcl93aWR0aCA9ICQoJy5mbGV4eS1oZWFkZXJfX3Jvdy0tc2Vjb25kID4gLmNvbnRhaW5lcicpLm91dGVyV2lkdGgoKSxcbiAgICAgICAgICAgIGRpZmYgPSAoKHdpbmRvd193aWR0aCAtIGNvbnRhaW5lcl93aWR0aCkgLyAyKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnV2luZG93IHdpZHRoOicgKyB3aW5kb3dfd2lkdGgpO1xuICAgICAgICBjb25zb2xlLmxvZygnQ29udGFpbmVyIHdpZHRoOicgKyBjb250YWluZXJfd2lkdGgpO1xuICAgICAgICBjb25zb2xlLmxvZygnRGlmZjonICsgZGlmZik7XG5cbiAgICAgICAgJGZvcm0uY3NzKCd3aWR0aCcsIChkaWZmICsgb3ZlcmxhcF93aWR0aCkpO1xuICAgIH1cbiAgICBfc2V0X2ZsZXh5X2hlYWRlcl9mb3JtX3Bvc2l0aW9uKCk7XG5cbiAgICAvLyBSZWNhbGN1bGF0ZSB3aWR0aCBvZiBmb3JtIHdoZW4gd2luZG93IGlzIHJlc2l6ZWRcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgIF9zZXRfZmxleHlfaGVhZGVyX2Zvcm1fcG9zaXRpb24oKTtcbiAgICB9KTtcbn0pO1xuIl19
