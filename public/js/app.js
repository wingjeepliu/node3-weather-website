console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('/weather?address=' + location).then((response) => {
        const pError = document.querySelector('#error');
        const pData =  document.querySelector('#data')
        response.json().then((data) => {
            if (data.error) {
                pError.textContent="Error"
                pData.innerhtml="";
            } else {
                // console.log(data.location, "--1")
                console.log(data.forecast, "--2")
                pError.textContent=data.location
        
                pData.textContent=data.forecast ;
                console.log(pData.textContent, "--3")
            }
        })
    })
})