<template>
<div id="app">
	<br>
		<ul style="list-style: none;">
			<li v-for="(value,key) in debts">
				<p><u>
					<h5 class="subtitle is-5"><a v-on:click="openProf(key)">{{key}}</a></h5>
				</u></p>
				<h6 class="subtitle is-6" v-if="value<0">You owe them ${{Math.abs(value)}}
					<br>
					<button class="button is-success is-rounded" v-on:click="endDebt(key)">Pay now!</button>
				</h6>
				<h6 class="subtitle is-6" v-if="value>0">They owe you ${{Math.abs(value)}}
					<br>
					<button class="button is-link is-rounded" v-on:click="endDebt(key)">Already paid</button>
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
		},
		openProf: function(nome){
			this.$router.push({path:`/onegroup#gnome=${nome}`});
		}
      },
     computed: {
		

     },
     created: function(){
		var u_data = this.$parent.user_data;
		for(var v in u_data){
			if(u_data[v]["cat"] == "g"){
				this.debts[v]=u_data[v]["balance"];
			}
		}
		console.log(this.debts);
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
