import auth from '@react-native-firebase/auth';

export const firebaseLogIn = (user, pwd) => {
  auth()
    .signInWithEmailAndPassword(user, pwd)
    .then(resp => {
      console.log('Response ==>', resp.user._user);

      alert('User LogIn');
    })
    .catch(err => alert(err.message));
};

export const firebaseSignUp = async (name, pwd) => {
  try {
    await auth()
      .createUserWithEmailAndPassword(name, pwd)
      .then(resp => {
        console.log(resp.user);
        alert('User account created & signed in!');
      });
  } catch (error) {
    alert(error.message);
  }
};

export const firebaseLogOut = () => {
  auth().signOut();
};
