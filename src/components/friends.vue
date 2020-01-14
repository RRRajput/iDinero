<template>
	<div id="app">
		<br>
		<ul style="list-style: none;">
			<li v-for="(value,key) in debts">
				<p><u>
					<div class="column">
					<div class="card equal-height">
					<div class="card-content is-flex is-horizontal-center">
					<figure class="image is-64x64"><img src="../assets/avatar.png"></figure>
					<br>
					<h5 class="subtitle is-5"><a v-on:click="openProf(key)">{{key}}</a></h5>
					</div>
					</div>
					</div>
				</u>
				</p>

				<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
				<h6 class="subtitle is-6" v-if="value<0"> You owe them ${{Math.abs(value)}}
	            <br>
		        <button class="button is-success is-rounded" v-on:click="endDebt(key)">Pay now!</button></h6>
				</transition>
				<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
				<h6 class="subtitle is-6" v-if="value>0"> They owe you ${{Math.abs(value)}}
		        <br>
		        <button class="button is-link is-rounded" v-on:click="endDebt(key)">Already paid</button></h6>
				</transition>
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
			this.$delete(this.debts,indice);
			this.$set(this.debts,indice,0);
			this.$set(this.$parent.user_data[indice],"balance",0);
		},
		openProf: function(nome){
			this.$router.push({path:`/profile#nome=${nome}`});
		}
      },
     computed: {
		

     },
     created: function(){
		var u_data = this.$parent.user_data;
		console.log(u_data);
		for(var v in u_data){
			if(u_data[v]["cat"] == "f"){
				this.debts[v]=u_data[v]["balance"];
			}
		}
	}
  }
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";





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

img {
  border-radius: 50%;
  width: 4%;
}

.is-horizontal-center{
	justify-content: center;
}

/*input {
	margin-right:20px;
	margin-left:20px;
}*/
/*
body {
	background-image: url("https://i.ytimg.com/vi/2yKsDZrEF7U/maxresdefault.jpg");
}*/

div,li{
	color: black;
}

</style>
