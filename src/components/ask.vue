<template>
    <div id="app">
        <br>
    	<ul style="list-style: none;">
        	<transition name="bounce">
        	<li v-for="(value,key) in debts">
                <h6 class="subtitle is-6">{{key}} owes you ${{value}}<br>
                    <button class="button is-link is-rounded" v-on:click="endDebt(key)">Already paid</button>
                </h6>
                <br>
            </li>
        	</transition>
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
			if(valore > 0){
				this.debts[v]=valore;
			}
		}
	}
  }
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

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
