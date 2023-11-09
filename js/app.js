var Open_menu_button = document.querySelector(".Open-menu-button");
var close_menu_button = document.querySelector(".close-menu-button");
let Dark_background = document.querySelector(".Dark_background");
var body = document.querySelector("body");
let sidenav = document.querySelector(".sidenav");

if (document.querySelector(".Open-menu-button") != null) {

    Open_menu_button.addEventListener("click", function () {
        sidenav.style.width = "250px";
        Dark_background.style.display = "block";
        body.classList.add("body")

    })
    close_menu_button.addEventListener("click", function () {
        sidenav.style.width = "0";
        Dark_background.style.display = "none";
        body.classList.remove("body")

    })
}
var Open_city_button = document.querySelector(".Open-city-button");
var select_city = document.querySelector(".select-city");
var close_elec_city_button = document.querySelector(".close-select-city-button");
var City_selection_section = document.querySelector(".City-selection-section");
if (document.querySelector(".Open-city-button") != null) {

    Open_city_button.addEventListener("click", function () {
        select_city.style.display = "block";
        Dark_background.style.display = "block";
        body.classList.add("body")

    })
    close_elec_city_button.addEventListener("click", function () {
        select_city.style.display = "none";
        Dark_background.style.display = "none";
        body.classList.remove("body")

    })
}

if (document.querySelector(".Choose-the-province") != null) {
    let containerData = {
        azarbayejanShargi: ["آذرشهر", "تیمورلو", "گوگان", "ممقان", "ایلخچی", "اسکو"],
        azarbayejanGarbi: ["قوشچی", "سیلوانه", "سرو", "سرو", "نوشین", "اشنویه"],
        ardebil: ["اردبیل", "هیر", "جعفر آباد ", "بیله سوار", "اسلام آباد", "اصلاندوز"],
        esfahan: ["آران و بیدگل", "سفید شهر", "نوش آباد", "ابوزید آباد", "زواره", "اردستان"],
        alborz: ["اشتهارد", "کوهسار", "چهارباغ", "شهر جدید هشتگرد", "گلسار", "هشتگرد"],
        elam: ["ایلام", "زرنه", "ایوان", "بدره", "بلاوه", "شباب"],
        boShehr: ["خارک", "بوشهر", "چغادک", "دلوار", "آباد", "اهرم"],
        khorasanShomali: ["شیروان", "فاروج", "بجنورد", "چناران شهر", "جمی", "گرمه"]
    }
    var Choose_the_province = document.querySelector(".Choose-the-province");
    Choose_the_province.addEventListener("click", function (event) {
        var Province_clicked = event.target.value;
        var your_province = containerData[Province_clicked];
        me_province = event.target.textContent;
        var city_me_name = document.querySelector(".city-me-name");
        var Department_of_provinces = document.querySelector(".Department_of_provinces");
        your_province.forEach(function (city) {
            Department_of_provinces.style.display = "none";
            var button = document.createElement("button");
            button.classList.add("flex", "items-center", "justify-between", "p-3", "w-full");
            let city_name = document.createElement("span");
            city_name.textContent = city;
            button.appendChild(city_name);
            let arrowIcon = document.createElement("i");
            arrowIcon.classList.add("fa-regular", "fa-chevron-up", "fa-rotate-270", "fa-lg");
            button.appendChild(arrowIcon);
            let containerCity = document.createElement("div");
            containerCity.appendChild(button)
            console.log(containerCity);
            Choose_the_province.appendChild(containerCity)
            // Department_of_provinces.innerHTML = "";
            button.addEventListener("click", function (event) {
                let city_me = event.target.textContent;
                city_me_name.innerHTML = `ارسال به ${me_province} , ${city_me}`
                Choose_the_province.style.display = "none";
                Dark_background.style.display = "none"
                body.classList.remove("body")

            })

        });


    })
}

if (document.querySelector(".main-slider") != null) {
    var Main_Slider = new Swiper(".main-slider", {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
var more_services = document.querySelector(".more-services");
var section_services = document.querySelector(".section-services");
var close_btn_section_services = document.querySelector(".close-btn-section-services");
if (document.querySelector(".more-services") != null) {
    more_services.addEventListener("click", function () {
        section_services.style.display = "block"
        Dark_background.style.display = "block";
        body.classList.add("body")

    })
    close_btn_section_services.addEventListener("click", function () {
        section_services.style.display = "none"
        Dark_background.style.display = "none";
        body.classList.remove("body")

    })

}

if (document.querySelector(".swiper-Amazing-offer") != null) {
    var swiper_Amazing_offer = new Swiper(".swiper-Amazing-offer", {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 2,
        freeMode: true,



        pagination: {
            el: ".swiper-pagination",
            type: "fraction"
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
}
if (document.querySelector(".swiper-Digikala_categories") != null) {
    var swiper_Digikala_categories = new Swiper(".swiper-Digikala_categories", {
        slidesPerView: "auto",
        spaceBetween: 1,
        centeredSlides: false,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
if (document.querySelector(".swiper-Digikala-offer") != null) {
    var swiper_Digikala_offer = new Swiper(".swiper-Digikala-offer", {
        slidesPerView: "auto",
        spaceBetween: 2,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
if (document.querySelector(".swiper_The_most_popular_brands") != null) {
    var swiper_The_most_popular_brands = new Swiper(".swiper_The_most_popular_brands", {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 2,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    });
}
if (document.querySelector(".swiper_Best_selling_products") != null) {
    var swiper_Best_selling_products = new Swiper(".swiper_Best_selling_products", {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 10,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
        },

    });
}

var countDownDate = new Date("november 30, 2023 15:45:25").getTime();
let Remaining_discount = document.getElementById("timer-aty")
if (document.getElementById("timer-aty") != null) {
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);


        document.getElementById("timer-aty").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer-aty").innerHTML = "0";
        }
    }, 1000);

}
if (document.querySelector(".swiper_The_hottest_last_few_hours") != null) {
    var swiper_The_hottest_last_few_hours = new Swiper(".swiper_The_hottest_last_few_hours", {
        slidesPerView: "auto",
        centeredSlides: false,
        freeMode: true,
        spaceBetween: 2,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    });
}




if (document.querySelector(".scrollButton") != null) {
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.querySelector('.scrollButton').addEventListener('click', scrollToTop);
}





var emailInput = document.querySelector(".email-input");
if (document.querySelector(".email-input") != null) {
    emailInput.addEventListener("keyup", function () {
        var errorMessageEmail = document.querySelector(".error-message");
        var email = emailInput.value;
        var send_email_btn = document.querySelector(".send-email");

        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailPattern.test(email)) {
            errorMessageEmail.textContent = "پست الکترونیک وارد شده درست نیست "
            send_email_btn.classList.remove("send-email-btn")

        } else {
            errorMessageEmail.textContent = " ";
            send_email_btn.classList.add("send-email-btn")
            send_email_btn.classList.remove("pointer-events-none")

        }
        if (email == "") {
            errorMessageEmail.textContent = "اینجا را خالی نگذارید"
        }
    })
}



if (document.querySelector(".Dark_background") != null) {
    Dark_background.addEventListener("click", function () {
        Dark_background.style.display = "none";
        sidenav.style.width = "0"
        select_city.style.display = "none"
        section_services.style.display = "none"
        body.classList.remove("body")


    })

}
if (document.querySelector(".Registration-input") != null) {
    var Registration_input = document.querySelector(".Registration-input");
    Registration_input.addEventListener("keyup", function () {
        var errorMessage = document.querySelector(".error-message");
        var inputValue = Registration_input.value;
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var mobilePattern = /^(09\d{9})$/;

        if (emailPattern.test(inputValue) || mobilePattern.test(inputValue)) {
            errorMessage.textContent = "";
            Registration_input.classList.remove("border-red")

        } else {
            errorMessage.textContent = "لطفا یک آدرس ایمیل یا شماره موبایل معتبر وارد کنید.";
            Registration_input.classList.add("border-red")
        }


    })

}

var swiper = new Swiper(".Swiper_Displays_the_page_the_user_is_on", {
    slidesPerView: "aotu",
    spaceBetween: 1,
    centeredSlides: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const colors = document.querySelectorAll(".color");
const selectedColor = document.getElementById("selectedColor");
colors.forEach(color => {
    color.addEventListener("click", function () {
        const colorName = color.getAttribute("data-color");
        selectedColor.textContent = colorName;

    });
});
function openTab(tabName) {
    // مخفی کردن تمام تب‌ها
    var tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(function (tab) {
        tab.classList.remove("active-tabs");
    });

    document.querySelector("." + tabName).classList.add("active-tabs");
}
