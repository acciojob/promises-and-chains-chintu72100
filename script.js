let age = document.querySelector("#age");
let name = document.querySelector("#name");
let btn = document.querySelector("#btn");




btn.addEventListener("click", (event)=>{
	event.preventDefault();
	if(age.value.length === 0 || name.value.length === 0){
			alert("inputs cannot be empty");
	}else{
        promiseResolve();
	}
})

function promiseResolve(){
    new Promise((res,rej)=>{
        if(age.value > 18){
            res();
        }
        else{
            rej();
        }
    }).then((data)=>{
        setTimeout(function(){
            alert(`Welcome ${name.value}. You can vote`);
        },4000)
    }).catch((err)=>{
        alert(`Oh Sorry ${name.value}. You are not old enough`);
    })
}