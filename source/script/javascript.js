/*--------------------------------------------------------------
>>> SVG CODE START:
--------------------------------------------------------------*/

jQuery("img.img-svg").each(function () {
    var $img = jQuery(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    jQuery.get(imgURL, function (data) {
        var $svg = jQuery(data).find("svg");
        if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
            $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
        }
        $img.replaceWith($svg);
    }, "xml");
});

/*--------------------------------------------------------------
>>> SVG CODE END.
--------------------------------------------------------------*/


/*--------------------------------------------------------------
>>> TITLE SLIDER CODE START:
--------------------------------------------------------------*/

jQuery('.title-slider-image').owlCarousel({
    loop: true,
    touchDrag: false,
    mouseDrag: false,
    nav: false,
    dots: false,
    autoWidth: false,
    autoHeight: false,
    autoplay: false,
    items:1,
    smartSpeed: 1500,
})

jQuery('.title-slider-text').owlCarousel({
    loop: true,
    touchDrag: false,
    mouseDrag: false,
    nav: false,
    dots: false,
    autoWidth: false,
    autoHeight: false,
    autoplay: false,
    items:1,
    smartSpeed: 1500,
})

let owlTitleImageSlider = jQuery('.title-slider-image');
owlTitleImageSlider.owlCarousel();

let owlTitleTextSlider = jQuery('.title-slider-text');
owlTitleTextSlider.owlCarousel();

jQuery('#owl-title-prev').click(function() {
    owlTitleImageSlider.trigger('prev.owl.carousel');
    owlTitleTextSlider.trigger('prev.owl.carousel');
})

jQuery('#owl-title-next').click(function() {
    owlTitleImageSlider.trigger('next.owl.carousel');
    owlTitleTextSlider.trigger('next.owl.carousel');
})

/*--------------------------------------------------------------
>>> TITLE SLIDER CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> BENEFITS SLIDER CODE START:
--------------------------------------------------------------*/

jQuery('.benefits-slider').owlCarousel({
    loop: true,
    touchDrag: false,
    mouseDrag: false,
    nav: false,
    dots: true,
    autoWidth: false,
    autoHeight: false,
    autoplay: false,
    items:1,
    smartSpeed: 1500,
    dotsContainer: '.benefits-progress',
    onInitialized: function(e) {
        jQuery('.benefits-counter').text('01')
        jQuery('.benefits-number').text(' / ' + this.items().length)
    }
})

let owlBenefitsSlider = jQuery('.benefits-slider');
owlBenefitsSlider.owlCarousel();

jQuery('#owl-benefits-prev').click(function() {
    owlBenefitsSlider.trigger('prev.owl.carousel');
})

jQuery('#owl-benefits-next').click(function() {
    owlBenefitsSlider.trigger('next.owl.carousel');
})

jQuery('.benefits-slider').on('changed.owl.carousel', function(e) {
    jQuery('.benefits-counter').text('0' + ++e.page.index)
    jQuery('.benefits-number').text(' / ' + e.item.count)
});

/*--------------------------------------------------------------
>>> BENEFITS SLIDER CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> BURGER MENU CODE START:
--------------------------------------------------------------*/

jQuery('#desktop-menu-button').click(function(){

    jQuery(".section-menu").toggleClass("active");
    jQuery(".container-menu__background-01").toggleClass("active");
    jQuery(".container-menu__col-02").toggleClass("active");

    setTimeout(function(){
        jQuery('html').toggleClass("overflow");
    }, 300)
})

/*--------------------------------------------------------------
>>> BURGER MENU CODE END.
--------------------------------------------------------------*/


/*--------------------------------------------------------------
>>> INPUT ELEMENTS CODE START:
--------------------------------------------------------------*/

/* Custom selects code start: */

customSelect('.process-select select');

customSelect('.city-select select');


customSelect('.catalog-projects-select select');
customSelect('.catalog-type-select select');

customSelect('.catalog-sort-select select');

/* Custom selects code end: */


/* Range (Projects Panel) input code start: */

const projectsPanelRange = document.getElementById('projects-panel-range');

projectsPanelRange && noUiSlider.create(projectsPanelRange, {
    start: [0, 300],
    connect: true,
    range: {
        'min': 0,
        'max': 300
    },
    behaviour: 'tap-drag',
    tooltips: false,
});

const nodesProjectsPanel = [
    document.getElementById('projects-panel-lower-value'), // 0
    document.getElementById('projects-panel-upper-value')  // 1
];

projectsPanelRange && projectsPanelRange.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    nodesProjectsPanel[handle].innerHTML = `${values[handle].slice(0, -1)}`;
});

/* Range (Projects Panel) input code end. */


/* Range (Calculator) input's code start: */

const calculatorRange01 = document.getElementById('calculator-range-01');

calculatorRange01 && noUiSlider.create(calculatorRange01, {
    start: 1000000,
    connect: true,
    range: {
        'min': 1000000,
        'max': 300000000
    },
    behaviour: 'tap-drag',
    tooltips: false,
});

const nodesCalculatorRange01 = [
    document.getElementById('calc-lower-value-01'), // 0
    document.getElementById('calc-upper-value-01')  // 1
];

calculatorRange01 && calculatorRange01.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    nodesCalculatorRange01[handle].innerHTML = `${values[handle].slice(0, -3)}`;
});

const calculatorRange02 = document.getElementById('calculator-range-02');

calculatorRange02 && noUiSlider.create(calculatorRange02, {
    start: 1000000,
    connect: true,
    range: {
        'min': 1000000,
        'max': 62000000
    },
    behaviour: 'tap-drag',
    tooltips: false,
});

const nodesCalculatorRange02 = [
    document.getElementById('calc-lower-value-02'), // 0
    document.getElementById('calc-upper-value-02')  // 1
];


calculatorRange02 && calculatorRange02.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    nodesCalculatorRange02[handle].innerHTML = `${values[handle].slice(0, -3)}`;
});

const calculatorRange03 = document.getElementById('calculator-range-03');

calculatorRange03 && noUiSlider.create(calculatorRange03, {
    start: 36,
    connect: true,
    range: {
        'min': 36,
        'max': 120
    },
    behaviour: 'tap-drag',
    tooltips: false,
});

const nodesCalculatorRange03 = [
    document.getElementById('calc-lower-value-03'), // 0
    document.getElementById('calc-upper-value-03')  // 1
];

calculatorRange03 && calculatorRange03.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    nodesCalculatorRange03[handle].innerHTML = `${values[handle].slice(0, -3)}`;
});

/* Range (Calculator) input's code end. */


/* Range (Filters) input's code start: */
/* Квартиры */

const filtersRange01 = document.getElementById('filters-range-01');

filtersRange01 && noUiSlider.create(filtersRange01, {
    start: [23.4, 168.9],
    connect: true,
    range: {
        'min': 23.4,
        'max': 168.9
    },
    behaviour: 'tap-drag',
    tooltips: false,
});

const nodesFiltersRange01 = [
    document.getElementById('filters-lower-value-01'), // 0
    document.getElementById('filters-upper-value-01')  // 1
];

filtersRange01 && filtersRange01.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    nodesFiltersRange01[handle].innerHTML = `${values[handle].slice(0, -1)}`;
});

const filtersRange02 = document.getElementById('filters-range-02');

filtersRange02 && noUiSlider.create(filtersRange02, {
    start: [19.6, 260.3],
    connect: true,
    range: {
        'min': 19.6,
        'max': 260.3
    },
    behaviour: 'tap-drag',
    tooltips: false,
});

const nodesFiltersRange02 = [
    document.getElementById('filters-lower-value-02'), // 0
    document.getElementById('filters-upper-value-02')  // 1
];

filtersRange02 && filtersRange02.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    nodesFiltersRange02[handle].innerHTML = `${values[handle].slice(0, -1)}`;
});

/* Range (Filters) input's code end. */


/* Range (Filters) input's code start: */
/* Помещения */

const filtersRange03 = document.getElementById('filters-range-03');

filtersRange03 && noUiSlider.create(filtersRange03, {
    start: [23.4, 104.7],
    connect: true,
    range: {
        'min': 23.4,
        'max': 104.7
    },
    behaviour: 'tap-drag',
    tooltips: false,
});

const nodesFiltersRange03 = [
    document.getElementById('filters-lower-value-03'), // 0
    document.getElementById('filters-upper-value-03')  // 1
];

filtersRange03 && filtersRange03.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    nodesFiltersRange03[handle].innerHTML = `${values[handle].slice(0, -1)}`;
});

const filtersRange04 = document.getElementById('filters-range-04');

filtersRange04 && noUiSlider.create(filtersRange04, {
    start: [13.5, 68.2],
    connect: true,
    range: {
        'min': 13.5,
        'max': 68.2
    },
    behaviour: 'tap-drag',
    tooltips: false,
});

const nodesFiltersRange04 = [
    document.getElementById('filters-lower-value-04'), // 0
    document.getElementById('filters-upper-value-04')  // 1
];

filtersRange04 && filtersRange04.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    nodesFiltersRange04[handle].innerHTML = `${values[handle].slice(0, -1)}`;
});

/* Range (Filters) input's code end. */


/* Range (Filters) input's code start: */
/* Машино-места */

const filtersRange05 = document.getElementById('filters-range-05');

filtersRange05 && noUiSlider.create(filtersRange05, {
    start: [13.6, 16.8],
    connect: true,
    range: {
        'min': 13.6,
        'max': 16.8
    },
    behaviour: 'tap-drag',
    tooltips: false,
});

const nodesFiltersRange05 = [
    document.getElementById('filters-lower-value-05'), // 0
    document.getElementById('filters-upper-value-05')  // 1
];

filtersRange05 && filtersRange05.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    nodesFiltersRange05[handle].innerHTML = `${values[handle].slice(0, -1)}`;
});

const filtersRange06 = document.getElementById('filters-range-06');

filtersRange06 && noUiSlider.create(filtersRange06, {
    start: [1.8, 7.9],
    connect: true,
    range: {
        'min': 1.8,
        'max': 7.9
    },
    behaviour: 'tap-drag',
    tooltips: false,
});

const nodesFiltersRange06 = [
    document.getElementById('filters-lower-value-06'), // 0
    document.getElementById('filters-upper-value-06')  // 1
];

filtersRange06 && filtersRange06.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    nodesFiltersRange06[handle].innerHTML = `${values[handle].slice(0, -1)}`;
});

/* Range (Filters) input's code end. */


/* Range (Filters) input's code start: */
/* Кладовые */

const filtersRange07 = document.getElementById('filters-range-07');

filtersRange07 && noUiSlider.create(filtersRange07, {
    start: [3.2, 4.9],
    connect: true,
    range: {
        'min': 3.2,
        'max': 4.9
    },
    behaviour: 'tap-drag',
    tooltips: false,
});

const nodesFiltersRange07 = [
    document.getElementById('filters-lower-value-07'), // 0
    document.getElementById('filters-upper-value-07')  // 1
];

filtersRange07 && filtersRange07.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    nodesFiltersRange07[handle].innerHTML = `${values[handle].slice(0, -1)}`;
});

const filtersRange08 = document.getElementById('filters-range-08');

filtersRange08 && noUiSlider.create(filtersRange08, {
    start: [2.9, 3.7],
    connect: true,
    range: {
        'min': 2.9,
        'max': 3.7
    },
    behaviour: 'tap-drag',
    tooltips: false,
});

const nodesFiltersRange08 = [
    document.getElementById('filters-lower-value-08'), // 0
    document.getElementById('filters-upper-value-08')  // 1
];

filtersRange08 && filtersRange08.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    nodesFiltersRange08[handle].innerHTML = `${values[handle].slice(0, -1)}`;
});

/* Range (Filters) input's code end. */


/*--------------------------------------------------------------
>>> INPUT ELEMENTS CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> PRESS SLIDER CODE START:
--------------------------------------------------------------*/

jQuery('.press-slider').owlCarousel({
    loop: true,
    touchDrag: true,
    mouseDrag: true,
    nav: false,
    dots: false,
    autoWidth: false,
    autoHeight: false,
    autoplay: false,
    items:3,
    smartSpeed: 1500,
    margin: 56
})

let owlPressSlider = jQuery('.press-slider');
owlPressSlider.owlCarousel();

jQuery('#owl-press-prev').click(function() {
    owlPressSlider.trigger('prev.owl.carousel');
})

jQuery('#owl-press-next').click(function() {
    owlPressSlider.trigger('next.owl.carousel');
})

/*--------------------------------------------------------------
>>> PRESS SLIDER CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> PROJECTS MAP OPTION CODE START:
--------------------------------------------------------------*/


jQuery('.projects-map__item').click(function(){
    jQuery(this).toggleClass("active");
})

jQuery('.projects-map-slider').owlCarousel({
    loop: true,
    touchDrag: false,
    mouseDrag: false,
    nav: false,
    dots: true,
    autoWidth: false,
    autoHeight: false,
    autoplay: true,
    items: 1,
    smartSpeed: 1500,
    dotsContainer: '.projects-map-slider__progress',
})

/*--------------------------------------------------------------
>>> PROJECTS MAP OPTION CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> SIMILAR CARDS SLIDER CODE START:
--------------------------------------------------------------*/

jQuery('.similar-slider').owlCarousel({
    loop: true,
    touchDrag: false,
    mouseDrag: false,
    nav: false,
    dots: false,
    autoWidth: false,
    autoHeight: false,
    autoplay: false,
    items:4,
    smartSpeed: 1500,
    margin: 32
})

let owlSimilarSlider = jQuery('.similar-slider');
owlSimilarSlider.owlCarousel();

jQuery('#owl-similar-prev').click(function() {
    owlSimilarSlider.trigger('prev.owl.carousel');
})

jQuery('#owl-similar-next').click(function() {
    owlSimilarSlider.trigger('next.owl.carousel');
})

/*--------------------------------------------------------------
>>> SIMILAR CARDS SLIDER CODE END.
--------------------------------------------------------------*/



jQuery('.open-plan').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-no-margins mfp-with-zoom plan-modal'
});