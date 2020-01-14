<template>
<div id="app">
	<br>
	<h6 class="subtitle is-6">Group Name:&nbsp;
		<input style="width:15em;" class="input is-rounded" type="text" v-model="groupname"></input>
	</h6>
	<br>
	<h6 class="subtitle is-6">Note: Add people one by one and the amount they paid</h6>
	<br>
		<h6 class="subtitle is-6">Search &nbsp;
		<input style="width:15em;" class="input is-rounded" type="text" v-model="chosen" list="friendData">
			<datalist id="friendData">
				<option v-for="friend in friends">{{friend}}</option>
			</datalist>
		</input>
	</h6>
	<br>
	<h6 class="subtitle is-6">Amount &nbsp;
		<input style="width:13em;" class="input is-rounded" type="number" v-model="amount"></input>
	</h6>
	<button class="button is-success is-rounded" v-on:click="add">Add</button>
	<p id="error"> {{error}}</p>

	<ul>
		
		<li v-for="(value,key) in members">
			<p>{{key}} paid ${{value}} </p><button class="button is-danger is-rounded" v-on:click="remove(key)"> Remove</button>
		</li>
	</ul>
	<br>
	<h6 class="subtitle is-6">I paid &nbsp;
		<input style="width:13em;" class="input is-rounded" type="number" v-model="myamount"></input>
	</h6>
	<button class="button is-rounded" v-on:click="submit">Submit</button>
	<pie-chart v-bind:data="pChart"></pie-chart>
	<bar-chart v-bind:data="bChart"></bar-chart>
  </div>
</template>

<script>
export default {
      data:() =>  ({
		groupname:'',
		chosen:'',
		friends:[],
		error:'',
		amount:0,
		members:{},
		myamount:0
      }),
      methods: {
		add: function(){
			if(this.friends.includes(this.chosen)){
				this.$set(this.members,this.chosen,parseFloat(this.amount));
				this.chosen='';
				this.amount=0;
			}else{
				this.error = "Invalid Friend or Amount (Maybe you should add a friend first)";
			}
			
		},
		submit: function(){
			if(this.groupname !== ''){
				if(Object.keys(this.members).length !=0){
					this.members[this.$parent.user_name] = parseFloat(this.myamount);
					this.$set(this.$parent.groupdata,this.groupname,Object.keys(this.members));
					for(let key in this.members){
						console.log(key,this.member_share(key));
						let persona = this.$parent.data[key];
						let saved = {"cat":"g","balance":this.member_share(key),"paid":Object.keys(this.members)}
						this.$set(persona,this.groupname,saved);
						console.log(persona);
						console.log(this.$parent.data);
					}
					this.$router.push({path:`/groups`});
				}else{
					this.error ="No Member in the group";
				}
			}else{
				this.error = "No group name";
			}
		},
		remove: function(index){
			this.$delete(this.members,index);
		},
		member_share: function(key){
			let single_share = this.total_sum()/this.total_members;
			return (this.members[key]- single_share)/(this.total_members - 1);
		},
		total_sum: function(){
			let sum =0;
			for(let key in this.members){
				sum+=parseFloat(this.members[key]);
			}
			return sum;
		}
      },
     computed: {
		total_members: function(){
			return Object.keys(this.members).length;
		},
		pChart: function(){
			let ret = [['You',this.myamount]]
			for(let key in this.members){
				ret.push([key,this.members[key]]);
			}
			return ret;
		},
		bChart: function(){
			let tot = this.total_sum()/this.total_members;
			let ret = [['You', this.myamount - tot]];
			for(let key in this.members){
				ret.push([key,this.members[key] -tot]);
			}
			return ret;
		}
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

/*body {
	background-image: url("https://i.ytimg.com/vi/2yKsDZrEF7U/maxresdefault.jpg");
}*/

/*div,li,br{
	color: white;
}*/

</style>
