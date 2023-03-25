

import { ref } from 'vue';


var mon = ( ) => {

const isMenuOpen = ref(false)

var boj = async function(){
  var x =ref(2);
  if( await x < 20){console.log('fucn')}{console.log('bow')}//whT You do here is to put await on what is being checked.
}   ; 


    
    let bad = async function()
{
    await fetch('https://jsonplaceholder.typicode.com/posts')//you will only put the await on that will change or act as the data fetcher.
    //you can also use try and catch here effectively.
  .then((response) => console.log(response.body))
  //.then((json) => console.log(json));
}
return{bad,isMenuOpen,boj}}
export default mon

