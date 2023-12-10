document.addEventListener('DOMContentLoaded', function(){
    // let elem = document.querySelectorAll('.autocomplete');
    // let elem = document.getElementById('autocomplete-input');

    let colap = document.querySelectorAll('.collapsible');
    let colap_instance = M.Collapsible.init(colap,{

    })

    let elem = document.querySelectorAll('.chips');
    let instance = M.Chips.init(elem,{
        placeholder: 'Enter Tag',
        secondaryPlaceholder: '+Tag',
        autocompleteOptions:{
            data:{
                apple: null,
                banana: null
            }
        }
    })

})