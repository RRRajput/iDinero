<template>
<div id="app">
	<h3>{{groupname}}</h3>
	<ul>
	<li v-for="values in people"><u> <a v-on:click="openProf(values)">{{values}}</a></u></p></p></li>
	</ul>
  </div>
</template>

<script>
export default {
      data:() =>  ({
		people:[],
		groupname:''
      }),
      methods: {
		endDebt: function(indice){
			console.log(indice + " tolto");
			this.$delete(this.debts,indice);
			this.$delete(this.$parent.user_data,indice);
		},
		openProf: function(nome){
			if(nome != this.$parent.user_name){
				this.$router.push({path:`/profile#nome=${nome}`});
			}
		}
      },
     computed: {
		nomeUtente: function(){
			return this.$parent.user_name;
		}

     },
     created: function(){
		var url = window.location.hash
		this.groupname = url.substring(url.indexOf('=')+1,url.length);
		this.people = this.$parent.groupdata[this.groupname]
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
/*
div,li,h3{
	color: white;
}*/

</style>
