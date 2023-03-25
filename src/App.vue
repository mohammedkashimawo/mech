<template>

  <div id="gatS"> 
    
    <div id="show1">

<div id="spanA" class="spanA">
  <i class="bi bi-geo-alt-fill"></i><i>P.0 box 1642 concord,NC 28026</i> 
  <i :class="{'bi bi-telephone':joy,'bi bi-telephone-outbound-fill':!joy}" style="margin-left:15px;" @click="joy=!joy"></i><i> 980-785-DENT</i>
</div>

<div id="spanB" class="spanB">
  <i class="bi bi-hourglass-split"></i><i>   Monday- Friday:8am-9pm, Saturday-Sunday:-10am-6pm</i>
</div>

<div id="spanC" class="spanC" >
  <i class="bi bi-facebook"></i>
  <i class="bi bi-twitter"></i>
  <i class="bi bi-instagram"></i>
  <i class="bi bi-envelope-open-fill"></i>
</div> </div>



<div id="show2">
  <span id="span2A"><img src="./assets/Dentl.png" class="img1"></span>
  
  <span id="span2B">    <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/">Abouts</router-link> 
    <router-link to="/">What is PDr</router-link>
    <router-link to="/">Hail Damage</router-link> 
    <router-link to="/">Motor cycle Pdr</router-link> 
    <router-link to="/">Extreme PDR</router-link> 
    <router-link to="/">Our Works</router-link> 
    <router-link to="/">Get a Qoute</router-link> 
    <router-link to="/">Contact Us</router-link> 
    
    <router-link to="/">FAQ's</router-link> 
    
    
   
  </nav></span>

  
  </div>
  


  <div id="show3"><span id="show3a"></span><span id="show3b"></span><span id="show3c"></span></div>







  <div id="show4">
<div id="show4a"><img src="./assets/Dent.png" class="img2"></div>
<div id="show4b">No wizards, No magicians ..Purely Master technicians</div>
<div id="show4c">

<span>Paintless Dent Removal</span><span>Hail Damage</span><span>Motorcycle PDr</span><br>
<div id="spe">
<span id="ki" style=""
><i class="fa-solid fa-screwdriver-wrench"></i></span>
<span ><i class="fa-solid fa-arrow-right"></i></span>
<span ><i class="fa-solid fa-car-burst"></i></span>
<span ><i class="fa-solid fa-arrow-right"></i></span>
<span ><i class="fa-solid fa-motorcycle"></i></span></div>
<br>
</div>
<div id="show4d"></div>


  </div>
  <div id="show5">
    
    <div id="show5a">What we Offer</div>
    <div id="show5b" align="justify">


<b>Dent Prodigy,LLC</b>is commited to delivering high quality Paintless Dent Repair for your vehicles that will it your budget and your busy schedule.We offer a mobile dent Repair service that will come to you - home or office. We offer our services to all Charlotte and the surronding area. From very small to large dent
, our PDR techniqueis complted with skill and professionalism while you,the customer, save time and money. PDRb is more than a skilled trade. It is both an art and craft.
Even with well over a decade of experience in the Auto Repair Industry, we push ourselves by continuing to improve our skills through constant research, practise,and education.






    </div>
    <span id="show5c"><button id="but1" @click="boj">Book a Session<i class="fa fa-book fa-fw" aria-hidden="true"></i></button></span></div>




  <div id="show6"> 
<span id ="why">Why Choose Us</span><br>
<table><tr><td>
  <span id="jj" style="background-color:none"><i class="fa-solid fa-comments-dollar"></i> COST<br><i></i></span>
  <br><i style="width:10vw;background-color:none;;display:inline-block;margin-top:-7%;margin-left:-8%;" align="justify">
    A dime spent dent in your car door can cost up to <i style="color:red;font-weight:bolder;">3-5 times</i> more to repair at a body shop compared to using PDR</i>
</td>
<td><span id="mm"><i class="bi bi-alarm-fill" style="margin-left:5px;"></i> Time and convenience</span><br><i style="width:10vw;background-color:none;;display:inline-block;margin-top:-7%;margin-left:-8%;" align="justify">
    A dime spent dent in your car door can cost up to <i style="color:red;font-weight:bolder;">3-5 times</i> more to repair at a body shop compared to using PDR</i>
</td>
<td><span id="nn"><i class="bi bi-clipboard-data"></i>Value</span><br>
  <i style="width:10vw;background-color:none;;display:inline-block;margin-top:-7%;margin-left:-8%;" align="justify">
    A dime spent dent in your car door can cost up to <i style="color:red;font-weight:bolder;">3-5 times</i> more to repair at a body shop compared to using PDR</i>
</td>
</tr></table>

<div id="scalable">

<span style="background-color:none"><i class="fa-solid fa-comments-dollar"></i> COST<i></i></span>
<br>
<i align="justify">
  A dime spent dent in your car door can cost up to <i style="color:red;font-weight:bolder;">3-5 times</i>
   more to repair at a body shop compared to using PDR</i>
   <br>
   <span><i class="bi bi-alarm-fill" style="margin-left:5px;"></i> Time and convenience</span><br>

<i align="justify">
  A dime spent dent in your car door can cost up to <i style="color:red;font-weight:bolder;">3-5 times</i> more to repair at a body shop compared to using PDR</i>
<br>
<span><i class="bi bi-clipboard-data"></i>Value</span><br>
<i  align="justify">
  A dime spent dent in your car door can cost up to <i style="color:red;font-weight:bolder;">3-5 times</i>
   more to repair at a body shop compared to using PDR</i>



</div> 


  </div> 
  
  
  <div id="show7">
<div id="show7a">
<span id="spam"></span><span id="spam">GET IN TOUCH</span><span id="spam"></span>

</div>
<div id="show7b"><input type="text" placeholder="Name" id="chief" @click="just" ref="bol" v-model="name"/>
  <input type="text"  placeholder="Email" id="chief" v-model="name2"/>
  <input type="text" id="chief"  placeholder="Request" v-model="name3"/>
<p><input type="text" id="chief"  placeholder="subject" v-model="name4"/>
<input type="text" id="chief"  placeholder="Adress" v-model="name5"/>
<input type="text" id="chief"  placeholder="Phone no" v-model="name6"/></p>
<p><textarea type="textarea" id="chief2" rows="4.7" cols="35" width="200px" placeholder="7" v-model="name7"></textarea>
  <button id="smoke" class="smoke" @click="bug">Submit</button>
</p>


</div>

  </div>
  
<div id="show8">

<div><span>Information</span><ul><li>Home</li><li>Abouts</li><li>FAQ's</li><li>Contact-us</li></ul></div>

<div><span>How we do it</span><ul><li>Motorcycle PDR</li><li>Hand Damae</li><li>Extreme PDR</li><li>What is PDR</li></ul></div>

<div><span>Contact</span><ul><li>Email</li><li>Twitter</li><li>Phone</li><li>Facebook</li></ul></div>


</div></div>
  
</template>

<script src="">

//import boY from './boY.vue'
import {ref} from 'vue'
import composable from './composable'
import anime from 'animejs'

export default({
  name:"gatS",
  data:function(){
    return{
'bi bi-telephone':false,
joy:true,
    //  lete:'this time is tough but allah knows',
      //whatif:'if the code does not belong here, then ehy pu some efforts t waste here',
    }
  },
  mounted(){
 
    anime({
      targets:'#show3',
      keyframes: [
    {translateX: '-100%',delay:4000},
    {translateX: '-200%',delay:4000},
    {translateX: '-200%'},
    {translateX: '-100%',delay:4000},
    {translateX: '-0%',delay:4000},
    
  ],
  duration: 30000,
  delay:4000,
  easing: 'linear',
  loop: true
    })
  },
  //components:{boY},
  setup(){
   
var {bad,isMenuOpen,boj} =composable();


var arr =new Array();

console.log(arr.length);


//const bol=ref(null);console.log(bol);
var a=ref(null);
var name =ref(null);
//var name=ref(null);
var name2=ref(null);
var name3=ref(null);
var name4=ref(null);
var name5=ref(null);
var name6=ref(null);
var name7=ref(null);

const bug=async ()=>{
 



  arr.push(name.value);
  arr.push(name6.value)
  arr.push(name2.value)
  arr.push(name3.value)
  arr.push(name4.value)
  arr.push(name5.value);
  
  alert(name.value);
  /*await axios.post('https://majid-baa06-default-rtdb.firebaseio.com/posts.json', {    title: name.value,
body:arr.value
  }).then(alert('thanks for your messages'))*/
  name.value="";
  name2.value=""
  name3.value="";
  name4.value=""
  name5.value="";
  name6.value=""
  name7.value="";
  
 console.log(arr);
console.log(name.value)
alert(name.value)
}

  
    return{bad,a,isMenuOpen,boj,name,name2,name3,name4,name5,name6,name7,bug}
 },
  methods:{
    just:function(){this.$refs.bol.value = ""}
  }
})


</script >

<style>
@import './first.css';
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");
@import './css/fontawesome.css';
@import './css/fontawesome.min.css';
@import './css/all.min.css';
@import './css/regular.css';
@import './css/regular.min.css';



</style>
