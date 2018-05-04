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
				    :to="'/meetups/'+ meetup.id"
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
		computed: {
			meetups(){
				return this.$store.getters.featuredMeetups
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