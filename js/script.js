function greeting(){
    alert('¡Bienvenido a la pagina!')
    let name= prompt("¿Cúal es tu nombre?","Heber Espinoza")
        if(name==""){
            alert('Ingresa un nombre por favor')
            greeting()
        }else{
            alert('Que tengas una linda experiencia ' + name)
        }

}
greeting()