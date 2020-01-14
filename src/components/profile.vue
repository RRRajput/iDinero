<template>
<div id="app">
	<p> Name : {{prof.name}}</p>
	<p> Age : {{prof.age}} </p>
	<p> Email : {{prof.email}} </p>
	<p> Phone : {{prof.phone}} </p>

	<div>
		<h4><u> Personal Debts:</u></h4>
		<p class="debt" v-if="balance<0"> You owe {{prof.name}} ${{Math.abs(balance)}} <button class="button is-success is-rounded" v-on:click="endDebt(prof.username)">Pay now!</button></p>
		<p class="debt" v-if="balance>0"> {{prof.name}} owes you ${{balance}} <button class="button is-link is-rounded" v-on:click="endDebt(prof.username)">Already paid</button></p>
	</div>
	<div>
		<h4><u> Group Debts: </u></h4>
		<ul>
			<li v-for="(value,key) in group">
				<p> They are a part of the group {{key}}</p>
				<p v-if="value<0"> You owe them ${{Math.abs(value)}} <button class="button is-success is-rounded" v-on:click="groupSettler(key)"> Pay now! </button></p>
				<p v-if="value>0"> They owe you ${{value}} <button class="button is-link is-rounded" v-on:click="groupSettler(key)"> Already paid </button></p>
			</li>
		</ul>
		<button class="button is-link is-rounded" v-if="Object.values(group).length!=0" v-on:click="settle()"> Transfer </button>
	</div>

  </div>
</template>

<script>

export default {
      data:() =>  ({
		prof : {
			username: '',
			name : '',
			age : '',
			email: '',
			phone: '',
		},
		balance: 0,
		group:{}
      }),
      methods: {
		getData: function(nome){
			console.log(this.$parent.persdata[nome]);
			this.$set(this.prof,'name',this.$parent.persdata[nome].name);
			this.$set(this.prof,'age',this.$parent.persdata[nome].age);
			this.$set(this.prof,'email',this.$parent.persdata[nome].email);
			this.$set(this.prof,'phone',this.$parent.persdata[nome].phone);
			this.prof.username = nome;
		},
		endDebt: function(indice){
			console.log(indice + " tolto");
			//this.$delete(this.debts,indice);
			this.$delete(this.$parent.user_data,indice);
			this.setBalance(this.prof.username);
		},
		groupBalance: function(){
			let gd = this.$parent.groupdata;
			let user_d = this.$parent.user_data;
			for(let key in  gd){
				if(gd[key] != undefined && user_d[key].paid != undefined){
					if(gd[key].includes(this.prof.username) && user_d[key].paid.includes(this.prof.username)){
						this.group[key] = (user_d[key].balance)/gd[key].length;
					}
				}
			}
		},
		setBalance: function(uname){
			if(uname in this.$parent.user_data){
				this.balance = this.$parent.user_data[uname].balance;
			}else{
				this.balance =0;		
			}
			this.groupBalance();
		},
		groupSettler: function(groupKey){
			this.$parent.user_data[groupKey].balance -= this.group[groupKey]
			this.$parent.user_data[groupKey].paid.splice( this.$parent.user_data[groupKey].paid.indexOf(this.prof.username),1)
			this.$delete(this.group,groupKey)
			this.groupBalance();
		},
		settle: function(){
			let sum =0;
			for(let key in this.group){
				let val = this.group[key];
				this.groupSettler(key);
				sum+=val;
			}
			this.$parent.user_data[this.prof.username].balance+=sum;
			this.setBalance(this.prof.username);
		}
      },
     computed: {
     },
     created: function(){
		var url = window.location.hash
		this.getData(url.substring(url.indexOf('=')+1,url.length));
		this.setBalance(this.prof.username);
		
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

.debt {
	color:red;
}

p {
	color:black;
}

/*input {
	margin-right:20px;
	margin-left:20px;
}*/

/*body {
	background-image: url("https://i.ytimg.com/vi/2yKsDZrEF7U/maxresdefault.jpg");
}*/

/*div,li,p{
	color: white;
}*/

</style>
