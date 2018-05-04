<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 sm6 class="text-xs-center text-sm-right">

				<v-btn color="success" :to="{ path: '/meetups'}" large>
					Explore Meetups
				</v-btn>
				
			</v-flex class="text-xs-center text-sm-right">

			<v-flex xs12 sm6>
				<v-btn color="success" :to="{ path: '/meetup/new'}" large>
					Organize Meetups
				</v-btn>


			</v-flex>
		</v-layout>
		<v-layout row wrap  class="mt-2">
			<v-flex xs12>
				 <v-carousel style="cursor:pointer; ">
				    <v-carousel-item 
				    v-for="meetup in meetups" :src="meetup.imageUrl" 
				    :key="meetup.id"
				    @click="onLoadMeetup(meetup.id)">
				    	<div class="title">{{meetup.title }} </div>
				    </v-carousel-item>
				</v-carousel>
			</v-flex>
		</v-layout>

		<v-layout row wrap class="mt-2">
			<v-flex xs12 class="text-xs-center">
				<p>Join our awesome meetup</p>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default{
		data(){
			return {
				meetups: [
				{imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg' , id: 'afdawdag213', title:'Meetup in New York'},
				{imageUrl: 'http://www.bestupforyou.com/wp-content/uploads/2014/10/How-to-plan-a-trip-to-Paris.jpg' , id: '3dgf4344', title:'Meetup in Paris'},
				{imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg' , id: '32434gff13', title:'Meetup in New York'}
				]
			}
		},
		methods: {
			onLoadMeetup(id){
				this.$router.push('/meetups/'+id)
			}
		}
	}
</script>

<style scoped>
	.title{
		position:absolute;
		bottom: 50px;
		background-color: rgb(0,0,0,0.5);
		color: white;
		font-size: 2em;
		padding: 20px;
		margin-left: 50px;
	}
</style>