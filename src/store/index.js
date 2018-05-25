import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase';

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		loadedMeetups: [
				{
					imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg' , 
					id: 'afdawdag213', 
					title:'Meetup in New York',
					date: new Date(),
					location: 'New York',
					description: 'this is the big apple city'

				},
				{
					imageUrl: 'http://www.bestupforyou.com/wp-content/uploads/2014/10/How-to-plan-a-trip-to-Paris.jpg' , 
					id: '3dgf4344', 
					title:'Meetup in Paris',
					date: new Date(),
					location: 'Paris',
					description: 'this is sweet paris'
				}
				],
		user: null,
		loading = false,
		error = null
	},
	mutations: {
		createMeetup (state,payloud){
			state.loadedMeetups.push(payloud)
		},
		setUser(state,payload){
			state.user = payload
		},
		setLoading(state,payload){
			state.loading = payload
		},
		setError(state,payload){
			state.error = payload
		},
		clearError(state){
			state.error = null
		}
	},
	actions: {
		createMeetup({commit},payloud){
			const meetup = {
				title: payloud.title,
				location: payloud.location,
				imageUrl: payloud.imageUrl,
				description: payloud.description
			}
			// Reach out to firebase and store it
			commit('createMeetup', meetup)
		},
		signUserUp({commit},payload){
			commit('setLoading',true)
			commit('clearError')
			firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
			.then(
				user => {
					commit('setLoading',false)
					const newUser = {
						id: user.uid,
						registeredMeetups: []
					}
					commit('setUser', newUser)
				}
			)
			.catch(
				error => {
					commit('setLoading',false)
					commit('setError',error)
					console.log(error)
				}
			)
		},
		signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredMeetups: []
              // ,fbKeys: {}
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    clearError({commit}){
    	commit('clearError')
    }
	},
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
		},
		user(state){
			return state.user
		},
		loading(state){
			return state.loading
		},
		error(state){
			return state.error
		}

	}

})