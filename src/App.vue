<template>

<div id="app">
  <h1></h1>
	<div v-if="logged">
  	<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <p class="title">
            	iDinero
      </p>
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{'is-active': isOpen}">
    <div class="navbar-start">
      <a class="navbar-item">
        <router-link to="/home" class="has-text-black">Home</router-link>
      </a>
      <a class="navbar-item">
        <router-link to="/friends" class="has-text-black">Friends</router-link>
      </a>
      <a class="navbar-item">
        <router-link to="/groups" class="has-text-black">Groups</router-link>
      </a>
      <a class="navbar-item">
        <router-link to="/" class="has-text-black">Log Out</router-link>
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
      </div>
    </div>
  </div>
</nav>
	</div>
	<div v-if="logged">
  	<section class="hero is-info">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                    {{title}}
                    </h1>
                </div>
			</div>
			<div class="tabs is-boxed is-centered main-menu" id="nav">
                <ul>
                    <li data-target="pane-1" id="1">
                        <a>
                            <span><router-link to="/pay" class="has-text-white">Owed by you</router-link></span>
                        </a>
                    </li>
                    <li data-target="pane-2" id="2">
                        <a>
                            <span><router-link to="/ask" class="has-text-white">Owed by others</router-link></span>
                        </a>
                    </li>
                    <li data-target="pane-3" id="3">
                        <a>
                            <span><router-link to="/debtfriend" class="has-text-white">Add Debt</router-link></span>
                        </a>
                    </li>
                    <li data-target="pane-4" id="4">
                        <a>
                            <span><router-link to="/addfriend" class="has-text-white">Add Friend</router-link></span>
                        </a>
                    </li>
                    <li data-target="pane-5" id="5">
                        <a>
                            <span><router-link to="/addgroup" class="has-text-white">Make a Group</router-link></span>
                        </a>
                    </li>
                </ul>
</div>
	</section>
	</div>
	<transition name="router-anim" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
  	<router-view>
	</router-view>
	</transition>
  <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>iDinero</strong> by <a>Rehan, Camilo and Daniel</a>.
    </p>
    <div class="container">
<h4 class="text-center">Contact us</h4>
<hr>
  <div class="row">
    <div class="col-sm-8">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.5632248034017!2d7.067192207282566!3d43.615635079876405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22dae297f1be6add!2sEURECOM!5e0!3m2!1ses-419!2sfr!4v1547909229012" width="100%" height="320" frameborder="0" style="border:0" allowfullscreen></iframe>
     <!--  <GmapMap
  :center="{lat:43.6144, lng:7.0711}"
  :zoom="12"
  map-type-id="terrain"
  style="width: 100%; height: 320px">
    <GmapMarker
    :position="{lat:43.6144, lng:7.0711}"
    :clickable="true"
    :draggable="true"
  />
</GmapMap> -->
    </div>
    <div class="col-sm-4" id="contact2">
        <h5>Location and Contact</h5>
        <hr align="left" width="50%">
        <h6 class="pt-2">Location</h6>
        Campus SophiaTech, 450 Route des Chappes, 06410 Biot<br>
        <h6 class="pt-2">Email</h6>
        <a>contact@idinero.com</a><br>
      </div>
  </div>
</div>
  </div>
</footer>
</div>
</template>

<script>
import data from './data/data.json';
import PersData from './data/personal_data.json';
import groupData from './data/group_data.json';
import LoginData from './data/login.json';

export default {
  name: 'app',
 
  // https://vuejs.org/2016/02/06/common-gotchas/#Why-does-data-need-to-be-a-function
  data: () => ({
	title:'',
        logged:false,
	data:data,
	persdata: PersData,
	user_data: {},
	groupdata:groupData,
	user_name: '',
	logdata: LoginData,
  isOpen: false
  }),
  metaInfo: {
      title: 'iDinero',
      titleTemplate: '%s | iDinero',
      meta:[
	{charset:"utf-8"},
	{name:"keywords",content:"Calculator, balance, excel, roommate, accounting, transaction, expenses, tracking, holiday, trip, report, cost"},
	{name:"description",content:"The solution for organizing group expenses - Perfect when you organize group activities like trips, holidays, meals or when you share flat expenses with roommates"},
	{name:"theme-color",content:"#0000ff"},
	{name:"google",content:"notranslate"},
	{property:"og:url",content:"https://www.idinero.com/"},
	{property:"og:title",content:"iDinero"},
	{property:"og:description",content:"iDinero - The easiest way to track debts with your friends!"},
	{property:"og:type",content:"website"},
	{property:"og:locale",content:"en"},
	{property:"og:site_name",content:"idinero.com"},
	{name:"twitter:card",content:"iDinero - The easiest way to track debts with your friends!"},
	{name:"twitter:site",content:"@idinero"},
	{name:"twitter:creator",content:"@idinero"},
	]
    }

}
</script>
<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";




#app {



  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  margin-top: 60px;
}
router-link {
	margin-left:20px;
	margin-right:20px;
}
</style>
