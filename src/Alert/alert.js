import Swal from "sweetalert2"

export const winAlert=async ()=>{
    await Swal.fire({
        title:'YOU WIN!!!!',
        text:'CONGRATULATIONS!!!',
        allowOutsideClick:false,
        confirmButtonText:'PLAY AGAIN',
        imageUrl:'./trophy.png',
        imageHeight: 150,
    })
}

export const loseAlert= async (word)=>{
    await Swal.fire({
        title:'YOU LOSE',
        text:`THE ANSWER IS ${word}`,
        allowOutsideClick:false,
        confirmButtonText:'PLAY AGAIN',
    })
}