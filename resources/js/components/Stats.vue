<template>
  <div class="bg-green">
    <h1 class="text-green-lighter"> About another</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
         series: 0,
	 lessons: 0,
      }; 
    }, 	  

    created() {
      axios.get('http://localhost:8001/api/stats').then(console.log);	    
    }
  };
</script>
