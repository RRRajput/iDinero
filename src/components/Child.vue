<template>
<section class="hero is-link is-fullheight-with-navbar">
	<div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <p class="title">
            	iDinero
            </p>
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
    </nav>
  </div>
  <div class="hero-body">
    <div class="container">
      <p class="title">
        The easiest way to track debts with your friends!
      </p>
      <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-white">Login</h3>
                    <p class="subtitle has-text-white">Please login to proceed.</p>
                    <div class="box">
                        <form @submit.prevent="checkLogin">
                            <div class="field">
                                <div class="control">
                                    <input name="ID" class="input is-large" type="text" placeholder="Your Username" autofocus="" v-model="username">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input name="password" class="input is-large" type="password" placeholder="Your Password" v-model="password">
                                </div>
                            </div>
                            <div class="field">
                            </div>
                            <button @click="checkLogin" class="button is-block is-info is-large is-fullwidth">Login</button>
                        </form>
                    </div>
                    <p class="has-text-white">
                        <a @click="signuppage">Sign Up</a>
                    </p>
                </div>
</div>
    </div>
  </div>
</section>

</template>

<script>
  export default {
      data:() =>  ({
		username: '',
		password: '',
      }),
      methods: {
		checkLogin: function(){
			console.log(window.location.href);
			if(this.checkCred(this.username,this.password)){
				this.$parent.user_data = this.$parent.data[this.username];
				this.$parent.user_name = this.username;
				this.$router.push({path:`/home`});
				console.log(this.$parent.groupdata);
			}else{
				console.log('sbagliato');
			}
		},
		checkCred: function(uname,pass){
			let lData = this.$parent.logdata;
			for(let key in lData){
				if(uname==key && pass == lData[key]){
					return true;
				}
			}
			return false;
		},
		signuppage: function(){
			this.$router.push({path:`/signup`});
		}
      },
    created: function(){
		this.$parent.title = 'Login IDinero';
		this.$parent.logged = false;
		this.$parent.user_data={};
		this.$parent.user_name= '';
	}
  }
</script>

<style>
#app {
	vertical-align: middle;
	margin:auto;
}

/*.wrapper {
	text-align:center;
	margin-right:200px;
	margin-left:200px
}*/

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
	background-color: black;
}*/

/*div {
	color: black;
}*/

label{
	padding-top: 10px;
	color: black;
}


</style>
