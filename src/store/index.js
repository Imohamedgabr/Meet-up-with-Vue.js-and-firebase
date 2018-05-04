import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		loadedMeetups: [
				{
					imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg' , 
					id: 'afdawdag213', 
					title:'Meetup in New York',
					date: '2017-07-17'
				},
				{
					imageUrl: 'http://www.bestupforyou.com/wp-content/uploads/2014/10/How-to-plan-a-trip-to-Paris.jpg' , 
					id: '3dgf4344', 
					title:'Meetup in Paris',
					date: '2017-07-19'
				},
				{
					imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg' ,
					id: '32434gff13',
					title:'Meetup in New York',
					date: '2017-07-22'
				}
				],
		user: {
			id: 'asdw123asd',
			registeredMeetups: ['3dgf4344']
		}
	},
	mutations: {},
	actions: {},
	getters: {loadedMeetups(state){
		return state.loadedMeetups.sort((meetupA, meetupB) => {
			return meetupA.date > meetupB.date
		})
	},
	featuredMeetups(state, getters){
		return getters.loadedMeetups.slice(0,5)
	},
	loadedMeetup(state){
		return (meetupId) => {
			return state.loadedMeetups.find((meetup)=> {
				return meetup.id == meetupId
				})
			}
		}

	}

})