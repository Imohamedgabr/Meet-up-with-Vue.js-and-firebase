<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 sm10 md8 offset-sm1 offset-md2>
				<v-card class="info">
					<v-container fluid>
						<v-layout row>
							<v-flex xs5 sm4 md3>
								<v-card-media
			                      src="https://upload.wikimedia.org/wikipedia/commons/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg"
			                      height="130px"
			                    ></v-card-media>
			                    <v-flex xs7 sm8 and md9>
			                    	<v-card-title primary-title>
			                    		<div>
						               		 <h5 class="white--text mb-0">My Meet up</h5>
						                	<div>7th july 2017.</div>
						                </div>
						              </v-card-title>
						              <v-card-actions>
						              	<v-icon left light>arrow_forward</v-icon>
						              	<v-btn flat to="/meetups/1" >View Meetup</v-btn>
						              </v-card-actions>
			                    </v-flex>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>