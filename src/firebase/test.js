import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()

firestore.collection('users').doc('ADFROUetkLsdIFAjjm5z').collection('cartItems').doc('PFIcGv6kAZLeQDL80dL6')
firestore.doc('/users/ADFROUetkLsdIFAjjm5z/cartItems/PFIcGv6kAZLeQDL80dL6')
firestore.collection('users/ADFROUetkLsdIFAjjm5z/cartItems')