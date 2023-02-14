

function validateForm(f) {
    if(f.name.value == "" || f.name.value == null || (f.name.value.lenght < 3) ) 
       {
            alert("Nome inválido");

        }

    if(f.telefone.value == "" || f.telefone.value == null || (f.telefone.value.lenght < 11)) {
        alert("Insira um número de telefone com DDD");
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