function upDateUI(pBatteryLevel,pBatteryElement){    
    pBatteryElement.className =`energy-level-${pBatteryLevel}`;
     

}

let batteryLevel=0;
const plusButton= document.querySelector("#plus");
const reduceButton= document.querySelector("#reduce");
const batteryElement= document.querySelector("#battery");

plusButton.addEventListener("click",function(eventBilgisi){
if(batteryLevel<3){
    batteryLevel++;
}
upDateUI(batteryLevel,batteryElement);

});

reduceButton.addEventListener("click",function(eventBilgisi){
    if(batteryLevel>0){
        batteryLevel--;
    }
    upDateUI(batteryLevel,batteryElement);
});
   






