let SlidersArray = []

function sliderAdvantage() {
    $(".advantage").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        SlidersArray[index] = new Swiper(`.advantage[data-slider-id="${index}"] .swiper`, {
            slidesPerView: 1,
            spaceBetween: 30,
            observer: true,
            observeParents: true,
            pagination: {
                el: `.advantage[data-slider-id="${index}"] .swiper-pagination`,
                clickable: true,
            },
        })
    })
}

function sliderCertificates() {
    var swiper = new Swiper('.certificates .swiper', {
        slidesPerView: 4,
        spaceBetween: 22,
        pagination: {
            el: ".certificates .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 22,
            },
            401: {
                slidesPerView: 2,
                spaceBetween: 22,
            },
            769: {
                slidesPerView: 3,
                spaceBetween: 22,
            },
            993: {
                slidesPerView: 4,
                spaceBetween: 22,
            },
        }
    })
}

function sliderTeam() {
    var swiper = new Swiper('.team .swiper', {
        slidesPerView: 3,
        spaceBetween: 12,
        pagination: {
            el: ".team .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 12,
            },
            577: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            769: {
                slidesPerView: 3,
                spaceBetween: 12,
            },
        }
    })
}

function sliderReviews2() {
    var swiper = new Swiper('.reviews2 .swiper', {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
            el: ".reviews2 .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            577: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            993: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
        }
    })
}

$(document).ready(function() {

    sliderAdvantage();
    sliderCertificates();
    sliderTeam();
    sliderReviews2();

})


