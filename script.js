let currentPlayer="X";
let array=Array(16).fill(null);

function checkWinner(){
if(

    (array[0] !==null     &&  array[0]==array[1]  && array[1]== array[2]  && array[3])    ||
    (array[4] !==null     &&  array[4]==array[5]  &&  array[5]== array[6]  && array[7]) ||
    (array[8] !==null     &&  array[8]==array[9]  && array[9]== array[10]  &&array[11]) ||
    (array[12] !==null     &&  array[12]==array[13] && array[13]== array[14] && array[15])||

    (array[0] !==null     &&  array[0]==array[4]  && array[4]== array[8]  && array[12]) ||
    (array[1] !==null     &&  array[1]==array[5]  && array[5]== array[9]  && array[13]) ||
    (array[2] !==null     &&  array[2]==array[6]  && array[6]== array[10]  && array[14]) ||
    (array[3] !==null     &&  array[3]==array[7]  &&  array[7]== array[11]  && array[15]) ||
    
    (array[0] !==null     &&  array[0]==array[5]  && array[5]== array[10]  && array[15]) ||
    (array[3] !==null     &&  array[3]==array[6]  && array[6]==  array[9] && array[12]) 
        
 
  
){
    document.write(`Winner is ${currentPlayer}`);
    return;
    
}
if (!array.some((e)=> e ===null)){
    document.write("It's a draw");
    return;

}


}

function handleClick(el){

    const id=Number(el.id);
    if(array[id] !==null)return;
   array[id]=currentPlayer;
   el.innerText=currentPlayer;
   checkWinner();
   currentPlayer=currentPlayer=== "X" ? "O" :"X"
  

}




   


    


    



    

