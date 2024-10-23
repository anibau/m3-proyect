export const validate=(input)=>{
    const errors={};
    const textRegex= /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{1,35}$/;
    const emailRegex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const numberRegex= /^[0-9]+$/;
    const userRegex= /^[a-zA-Z0-9]+$/;
    const passRegex= /^[a-zA-Z0-9!@#$%^&*()_+={}[\]:;"'<>,.?/\\~`|-]{8,}$/;

    if(!textRegex.test(input.name)){
        errors.name= 'nombre invalido'
    } else  if(!textRegex.test(input.lastName)){
        errors.lastName= 'apellido invalido'
    }else if(!emailRegex.test(input.email)){
        errors.email= 'email invalido'
    }else  if(!numberRegex.test(input.nDni)){
        errors.nDni= 'dni invalido'
    }else  if(!numberRegex.test(input.telefono)){
        errors.telefono= 'telefono invalido'
    }else  if(!userRegex.test(input.username)){
        errors.username= 'usuario invalido'
    }else  if(!passRegex.test(input.password)){
        errors.password= 'contraseña invalida (min 8 caracteres)'
    }else if(input.password2!== input.password){
        errors.password2='contraseña invalida'
    }
    
    return errors
}