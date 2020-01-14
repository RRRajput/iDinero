<template>
<div id="app">
	<br>
	<h6 class="subtitle is-6">Search</h6>
	<input style="width:17em;" class="input is-rounded" type="text" v-model="chosen" list="friendData">
		<datalist id="friendData">
			<option v-for="friend in friends">{{friend}}</option>
		</datalist>
	</input>
	<br>
	<p id="error"> {{error}}</p>
	<br>
	<button class="button is-success is-rounded" v-on:click="submit">Done!</button>
  </div>
</template>

<script>
export default {
      data:() =>  ({
		chosen:'',
		friends:[],
		error:''
      }),
      methods: {
		submit: function(){
			if(this.friends.includes(this.chosen)){
				if(Object.keys(this.$parent.user_data).includes(this.chosen)){
					this.error = "Friend Already Exists";
				}else{
					let name = this.chosen;
					var dict = { "balance" : 0, "cat" : "f" };
					this.$set(this.$parent.user_data,name,dict);
					this.$set(this.$parent.data[name],this.$parent.user_name,dict);
					//this.$set(this.$parent.data[this.$parent.user_name],name,dict);
					console.log(this.$parent.data);
					this.$router.push({path:`/friends`});
				}
				
			}else{
				this.error = "No such friend found";
			}
			
		}
      },
     computed: {
		

     },
     created: function(){
		var u_data = Object.keys(this.$parent.persdata);
		for(let v in u_data){
			if(u_data[v] != this.$parent.user_name){
				this.friends.push(u_data[v]);
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

/*input {
	margin-right:20px;
	margin-left:20px;
}*/


/*div,li,br{
	color: white;
}
*/
</style>
