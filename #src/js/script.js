$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
    });
});



let service = function() {
    let service_item = document.querySelectorAll('.service-names-item');

    service_item.forEach(item => {
        item.addEventListener('click', service_func);
    });



    function service_func() {
        this.classList.toggle('is-active');
    }

    // function selectChoose() {
    //     let text = this.innerText,
    //         select = this.closest('.select'),
    //         currentText = select.querySelector('.select-current')
    //     currentText.innerText = text;
    //     select.classList.remove('is-active');
    // }

    // this.parentElement.classList.toggle('is-active');
};

service();