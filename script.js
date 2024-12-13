const colorsDispo = ['blue','red','yellow','green'];
const validChoice = (color)=>{
    for (let i = 0; i < color.length; i++) {
        if(!colorsDispo.includes(color[i]))
        console.log('Mauvaise couleur:', color[i]);
        return false;
      }; 
      console.log('Les couleurs sont bonnes');
    return true; 
};
console.log(validChoice(['blue', 'green']));  
console.log(validChoice(['blue', 'white'])); 

    
    
