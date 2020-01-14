<template>
  <div id="app">
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
    	<p class="error">{{errorMessage}}</p>
        <div class="hero-body">
        <div class="container">
            <p class="title">Sign up</p>
            <div class="container has-text-centered">
              <div class="column is-4 is-offset-4">
      <!--       <div class="columns is-mobile is-centered">
            <div class="column is-two-fifths"> -->
            <div class="box">
                <div class="columns is-mobile is-centered">
                    <div class="column is-four-fifths">
            	<div class="forms">
            		<form @submit.prevent="checkSignup">
                        <div class="field">
                            <div class="control">
                        		Username:
                          		<input type="text" name="ID" class="input" v-model="username" required>
                            </div>
                        </div>
                    <div class="field">
                        <div class="control">
            		      Name:
              		    <input type="text" name="ID" class="input" v-model="name" required>
                        </div>
                    </div>
                    <div class="field">
                            <div class="control">
            		Age:
              		<input type="number" name="ID" class="input" v-model="age" required>
                    </div>
                </div>
                <div class="field">
                            <div class="control">
            		Email:
              		<input type="email" name="ID" class="input" v-model="email" required>
                    </div>
                </div>
                <div class="field">
                            <div class="control">
            		Phone:
              		<input type="phone" name="ID" class="input" v-model="phone" required>
                    </div>
                </div>
                <div class="field">
                            <div class="control">
            		Password:
              		<input type="password" name="ID" class="input" v-model="pass" required>
                    </div>
                </div>
                <div class="field">
                            <div class="control">
            		Retype Password:
              		<input type="password" name="ID" class="input" v-model="repass" required>
                    </div>
                </div>
            		<!-- <input type="submit" value="Done!"> -->
                    <button class="button is-block is-success is-large is-fullwidth">Submit</button>
            		</form>
            	</div>
           <!--  </div>
        </div> -->
      </div>
    </div>
            </div>
        </div>
      </div>
        </div>
    </div>
    </section>
  </div>


</template>

<script>
  export default {
      data:() =>  ({
		username:'',
		name:'',
		age:'',
		email:'',
		phone:'',
		pass:'',
		repass:'',
		errorMessage:''
      }),
      methods: {
		checkSignup: function(){
			if(this.checkUsername(this.username)){
				this.errorMessage="Username already exists";
			}else if(this.pass != this.repass){
				this.errorMessage="Recheck your password";
			}else{
				let chiave = this.username;
				let personal = {"age":this.age,"email":this.email,"name":this.name,"phone":this.phone}
				let passwd = this.pass;
				this.$parent.data[chiave] = {}
				this.$parent.logdata[chiave] = passwd
				this.$parent.persdata[chiave] = personal

				console.log(this.$parent.data);
				console.log(this.$parent.logdata);
				console.log(this.$parent.persdata);

				this.$router.push({path:`/`});
			}
		},
		checkUsername: function(uname){
			for(let key in this.$parent.logdata){
				if(uname == key){
					return true;
				}
			}
			return false;
		}
      },
    created: function(){
		this.$parent.title = 'Sign Up';
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

.wrapper {
	text-align:center;
	margin-right:200px;
	margin-left:200px
}

.error{
	color:red
}

#lst {
	float:right;
}

#vp {
	display:inline-block;
}



/*div {
	color: white;
}
h1{
	color: white;
}*/


</style>
