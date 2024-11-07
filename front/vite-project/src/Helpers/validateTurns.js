export const validateTurns=(input)=>{
    const errors={};

    if(input.date){
        const [year, month, day]= input.date.split('-').map(Number);
        const valueDate= new Date(year, month-1, day);
        const currentDate= new Date();
        currentDate.setHours(0, 0, 0, 0);
        valueDate.setHours(0, 0, 0, 0);
        if(valueDate <= currentDate){  
            errors.date='La Fecha debe ser posterior a hoy'
        }else if (valueDate.getDay() === 0 || valueDate.getDay() === 6) { //0=omingo , 6=sabado
            errors.date = 'Reserva de turnos disponible solo de lunes a viernes';
        } else{errors.date=''}
    }
    if(input.time){
        const [hours, minuts]=input.time.split(':').map(Number);
        if(hours<9 || hours>17 || (hours===17 && minuts>0)){
            errors.time='La hora debe estar entre 09:00 a 17:00'}
         else{errors.time=''}
    }
    if(input.agePet>25){
        errors.agePet= 'Error: Edad promedio 25 años'
    }
    if(input.weigthPet>120){
        errors.weigthPet='Error: Peso promedio 120kg'
    }
    return errors
}