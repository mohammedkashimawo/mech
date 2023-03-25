<template> 
<div id="joeY">

ggggggggggggggggggggggggggggggggg                                                                                                                                          
{{ lete }}
<br>{{ fullu }}


{{ mad }}

<button @click="Lp">play in</button>

<button @click="sendEvent">let there be light</button>

</div>


</template>

<script>

import { computed } from '@vue/reactivity';
export default({
    name:'joeY',
    props:['lete','whatif'],
    emits:['closeMenu','submit'],
    setup(props,context,{emit}){



        function Lp(){
            alert("hello let uus go");
            emit('submit');
        }
        const fullu=computed(function(){
            return props.lete;})

            const mad = computed(function(){

                return props.whatif;
            })
            function sendEvent(){
               context.emit('closeMenu')

               
                document.getElementById("gatS").style.backgroundColor="red";
                alert(" i hardly understand this")
            }
return{fullu,sendEvent,mad,Lp,bad}
    }
})
</script>