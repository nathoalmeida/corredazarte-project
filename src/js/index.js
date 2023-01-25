

function validateForm(f) {
    if(f.name.value == "" || f.name.value == null || (f.name.value.lenght < 3) ) 
       {
            alert("Nome inválido");
            f.name.focus();
            return false;
        }
}

const formName = document.getElementById("formName");
const telefone = document.getElementById("telefone");

function deleteInput(t) {
    t.addEventListener("click", () => {
        t.setAttribute("value", "");
    })
}

deleteInput(formName);
deleteInput(telefone);