export const validate=(input)=>{
    const errors={};
    const textRegex= /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{1,35}$/;
    const emailRegex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const numberRegex= /^\d{1,11}$/;
    const userRegex= /^[a-zA-Z0-9]+$/;
    const passRegex= /^[a-zA-Z0-9!@#$%^&*()_+={}[\]:;"'<>,.?/\\~`|-]{8,}$/;
    //calculo de edad
    const currentDate = new Date();
    const birthdate = new Date(input.birthdate);
    const age = currentDate.getFullYear() - birthdate.getFullYear();
    const isAdult = age > 18 || (age === 18 && currentDate >= new Date(currentDate.getFullYear(), birthdate.getMonth(), birthdate.getDate()));


    if(!textRegex.test(input.name)){
        errors.name= 'nombre invalido'
    } else  if(!textRegex.test(input.lastName)){
        errors.lastName= 'apellido invalido'
    }else if(!emailRegex.test(input.email)){
        errors.email= 'email invalido'
    }else if(!input.birthdate){
        errors.birthdate= 'fecha de nacimiento es requerido'
    }else if(!isAdult){
        errors.birthdate= 'usuario debe ser mayor de 18 años'
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

export const validateLogin=(input)=>{
    const errors={};
    const userRegex= /^[a-zA-Z0-9]+$/;
    const passRegex= /^[a-zA-Z0-9!@#$%^&*()_+={}[\]:;"'<>,.?/\\~`|-]{8,}$/;

    if(!userRegex.test(input.username)){
        errors.username='usuario invalido'
    } else if(!passRegex.test(input.password)){
        errors.password='contraseña invalida'
    }
   return errors 
}