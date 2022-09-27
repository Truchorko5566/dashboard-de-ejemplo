const urlParams = new URLSearchParams(window.location.search);
const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    showCloseButton: true,
})


// ?invite=${title}&text=${optionalText}
let myParam = urlParams.get('invite');
if(myParam) {
    Toast.fire({
        icon: 'success',
        title: 'Thanks for inviting me',
        text: urlParams.get("text") || undefined 
    }).then(removeHistoryQuery)
}


// ?success=${title}&text=${optionalText}
myParam = urlParams.get('success');
if(myParam) {
        Toast.fire({
        icon: 'success',
        title: `${myParam}`,
        text: urlParams.get("text") || undefined 
    }).then(removeHistoryQuery)
}

// ?error=${title}&text=${optionalText}
myParam = urlParams.get('error');
if(myParam) {
    console.log(urlParams.get('error'))
    Toast.fire({
        icon: 'error',
        title: `${myParam}`,
        text: urlParams.get("text") || undefined
    }).then(removeHistoryQuery)
}


function removeHistoryQuery() {
    var newURL = location.href.split("?")[0];
    window.history.pushState('object', document.title, newURL);
    return true;
}