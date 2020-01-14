<template>
    <div id="app">
        <div class="container">
            <div class="table">
              <table class="table is-responsive">
                <tbody>
                  <tr>
                    <td><h5 class="subtitle is-5 has-text-centered">You owe</h5></td>
                  </tr>
                  <tr>
                    <td><h6 class="subtitle is-6 has-text-centered">${{owe}}</h6></td>
                  </tr>
                  <tr>
                    <td class="has-text-centered"><button class="button is-success is-rounded" v-on:click="PayPage">Pay Now</button></td>
                  </tr>
                  <tr>
                    <td><h5 class="subtitle is-5 has-text-centered">You are owed</h5></td>
                  </tr>
                  <tr>
                    <td><h6 class="subtitle is-6 has-text-centered">${{owed}}</h6></td>
                  </tr>
                  <tr>
                    <td class="has-text-centered"><button class="button is-info is-rounded" v-on:click="AskPage">Demand</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
      data:() =>  ({
		owe: 0,
		owed: 0
      }),
      methods: {
		PayPage: function(){
			this.$parent.debt=true;
			this.$router.push({path:`/pay`});
		},
		AskPage: function(){
			this.$parent.debt=true;
			this.$router.push({path:`/ask`});
		},
		createUser: function(key){
			this.$parent.data[key] = {};
		}
      },
     computed: {
		BalanceMoney: function(){
			return this.owed-this.owe;
		}

     },
     mounted(){
		this.$root.$on('paid', amount => {
			console.log(amount + " paid");
			this.owe= this.owe - amount;
		});
		
		this.$root.$on('settled', amount => {
			console.log(amount + " settled");
			this.owed= this.owed - amount;
		});
     },
     created: function(){
		var u_data = this.$parent.user_data;
		this.$parent.logged=true;
		this.$parent.title = `Welcome ${this.$parent.persdata[this.$parent.user_name].name}`;
		this.owe =0;
		this.owed =0;
		if(!(this.$parent.user_name in this.$parent.data)){
			this.createUser(this.$parent.user_name);
			this.$parent.user_data = this.$parent.data[this.$parent.user_name];
			console.log(this.$parent.data);
			console.log(this.$parent.user_data);
		}
		for(var v in u_data){
			let valore = u_data[v]["balance"];
			if(valore > 0){
				this.owed+=valore
			}else if(valore < 0){
				this.owe+=Math.abs(valore);
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

.table {
      margin-left: auto;
      margin-right: auto;
}

.container {
    margin:center;
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

/*div {
	color: black;
}*/
</style>
