function l(){
    let arr=[1,2,3,4,"srk"];
    arr.forEach(
        function(item){
            console.log(item+2);// its changes the value of given array but not change the   given  array
        }
    )
    //console.log(item);

    
}
l();