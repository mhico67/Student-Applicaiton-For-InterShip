const scriptURL = 'https://script.google.com/macros/s/AKfycbx3lvOYaN9gQt0E7MT4BicEWWtm_UmqsZdtSDKkPJ3NvBxAzDOjAmpXXEshStkEToFFfA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventxDefault()
  let grade = document.getElementById("grade-applied").value;
  let banking = 'For those who are enrolling in Grade 11 and below\nThis is the online banking account\n \nBANK NAME: CHINA BANKING COPORTATION\nNAME: STONYHURST SOUTHVILLE INTERNATIONAL SCHOOL, INC.\nACCOUNT NO.: 282-0017-912\n \nThank you! Form is submitted';
  
if (grade === "Grade 12") {
                //window.location.href = "admin.html"; // Redirect to admin page
                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thank you! Form is submitted" ))
                .then(() => { window.location.reload(); })
                .catch(error => console.error('Error!', error.message))
            } else {
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => alert(banking))
              .then(() => { window.location.reload(); })
              .catch(error => console.error('Error!', error.message))
                
            }
})
