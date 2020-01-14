<template>
	<div id="app">
		<br>
		<h6 class="subtitle is-6">Friend</h6>
		<input style="width:17em;" class="input is-rounded" type="text" v-model="chosen" list="friendData">
			<datalist id="friendData">
				<option v-for="friend in friends">{{friend}}</option>
			</datalist>
		</input>
		<br>
		<h6 class="subtitle is-6">Amount</h6>
		<input style="width:17em;" class="input is-rounded" type="number" v-model="amount"></input>
		<br>
		<input v-model="paid" type="checkbox"></input>
		<h6 class="subtitle is-6"><b> check this box if you paid </b></h6>
		<br>
		<p id="error"> {{error}}</p>
		<button class="button is-success is-rounded" v-on:click="submit">Done!</button>
	</div>
</template>
<script>
export default {
      data:() =>  ({
		chosen:'',
		friends:[],
		amount:0,
		paid:false,
		error:''
      }),
      methods: {
		submit: function(){
			if(this.friends.includes(this.chosen)){
				this.amount = parseFloat(this.amount);
				let val = parseFloat(this.$parent.user_data[this.chosen].balance)
				let amount = parseFloat(this.amount)
				let me = this.$parent.data[this.$parent.user_name];
				let them = this.$parent.data[this.chosen];
				if(this.paid){
					me[this.chosen] = {cat: "f", "balance":val+amount}
					them[this.$parent.user_name] = {cat: "f", "balance":val-amount}
				}else{
					me[this.chosen] = {cat: "f", "balance":val-amount}
					them[this.$parent.user_name] = {cat: "f", "balance":val+amount}
					
				}
				console.log(this.$parent.data);
				this.$router.push({path:`/friends`});
				
			}else{
				this.error = "No such friend found (Maybe you should add a friend first)";
			}
			
		}
      },
     computed: {
		

     },
     created: function(){
		var u_data = this.$parent.user_data;
		for(var v in u_data){
			if(u_data[v].cat=="f"){
				this.friends.push(v);
			}
		}
	}
  }
</script>

<style>
#app {
	vertical-align: middle;
	margin:auto;
	color: white;
}

.wrapper {
	text-align:center;
	margin-right:200px;
	margin-left:200px
}
#error {
	color:red;
}
#lst {
	float:right;
}

#vp {
	display:inline-block;
}

.is-rounded{
	width: 100px;
}

/*input {
	margin-right:20px;
	margin-left:20px;
}*/

/*body {
	background-image: url("https://i.ytimg.com/vi/2yKsDZrEF7U/maxresdefault.jpg");
}*/

/*div,li,br{
	color: white;
}*/

</style>
