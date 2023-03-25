<template>
  <div class="aboutA">
    <h1 ref>page not found{{ nom.aby }}</h1><button ref="re" @click="clicked">asgard</button>
    <input type="text" v-model="ab"/>
    <h2>{{ iko }}</h2>
    <input type="text" v-model="search"/>
    <p>{{ search }}</p>
    <p v-for="kile in bab" :key="kile.id">{{ kile }}</p>

    <button @click="stopcheck"> stop</button>


    <br>{{ com}}
  </div>
</template>

<script>
import { ref,computed,watch,watchEffect } from 'vue';
import {reactive} from 'vue'

export default({
  name:'aboutA',
  setup(){
    var ab=ref("222");//this makes the var = ab reactive;
    
    console.log(ab);
    const re =ref(null);
    let search =ref('')
    const bab =ref(['asg','asty','stupid','crazy','nonsenes,','whats']);
    const nom=reactive({dami:'bios',aby:"i love money"});
  var  ajanle = ref('bodyd')//one lovely thing about reactive using is that when being 
    //called to the otther side of the setup, you don not need to use .value


var maj = computed(()=>{
  return bab.value.filter((kile)=>kile.includes(search.value));
})

var com = computed(function(){
  return ajanle.value.toUpperCase();
})
var een =watch(search,function(){

  console.log('this is how to run a collation center');

});
watchEffect(function(){
  console.log("this is really changine",search.value)
})

var stopcheck=(search,function(){
  return een()}); 
    function clicked(){
      alert("you clicked me");
      ab.value="thanks for clickuinh us";
      console.log(re,re.value)
      nom.aby="did u fuck up";
      ajanle="baddest";
    }
    return{ab,clicked,re,nom,ajanle,bab,search,maj,com,een,stopcheck}

  }
})




</script>
