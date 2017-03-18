const { firebase } = window

const provider = new firebase.auth.GithubAuthProvider()
provider.addScope('public_repo')

const auth = () => firebase.auth().signInWithPopup(provider)
  .then(result => ({
    name: result.user.displayName,
    email: result.user.email,
    photo: result.user.photoURL,
    token: result.credential.accessToken
  }))

export default {
  auth
}
