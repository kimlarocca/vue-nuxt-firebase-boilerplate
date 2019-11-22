import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
    const config = {
        // copy your config here from the firebase console
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({timestampsInSnapshots: true})
}
const fireDb = firebase.firestore()
export {fireDb}
