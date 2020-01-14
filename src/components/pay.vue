<template>
    <div id="app">
        <br>
    	<ul style="list-style: none;">
        	<li v-for="(value,key) in debts">
                <h6 class="subtitle is-6">You owe {{key}} ${{value}}<br>
                    <button class="button is-success is-rounded" v-on:click="endDebt(key)">Pay now!</button>
                </h6>
                <br>
            </li>
    	</ul>
    </div>
</template>

<script>
export default {
      data:() =>  ({
		debts:{}
      }),
      methods: {
		endDebt: function(indice){
			console.log(indice + " tolto");
			this.$delete(this.debts,indice);
			this.$delete(this.$parent.user_data,indice);
		}
      },
     computed: {
		

     },
     created: function(){
		var u_data = this.$parent.user_data;
		for(var v in u_data){
			let valore = u_data[v]["balance"];
			if(valore < 0){
				this.debts[v]=Math.abs(valore);
			}
		}
	}
  }
</script>

<style>
#app {
	vertical-align: middle;
	margin:auto;
}

.wrapper {
	text-align:center;
	margin-right:200px;
	margin-left:200px
}

#lst {
	float:right;
}

#vp {
	display:inline-block;
}

/*input {
	margin-right:20px;
	margin-left:20px;
}*/

/*body {
	background-image: url("https://i.ytimg.com/vi/2yKsDZrEF7U/maxresdefault.jpg");
}*/

/*div,li{
	color: white;
}*/

</style>
