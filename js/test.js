document.addEventListener('DOMContentLoaded', function() {
    // let elem = document.querySelectorAll('.slider');

    let elem2 = document.getElementById('toast');
    elem2.addEventListener('click',function(event){
        event.preventDefault();
        M.toast({
            html:'<span>Privet</span>',

        })
    });
})
