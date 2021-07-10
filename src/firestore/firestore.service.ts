import firebase from 'firebase';
import { MatSnackBarNotification } from 'src/app/notifications/types/MatSnackBarType';

export class FireStoreService {
  private FireStore;
  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCLCDcZyK4_hx8OcxuYLN9KWjDgWbjwn7A',
      authDomain: 'notificationsmodule-b1e0a.firebaseapp.com',
      projectId: 'notificationsmodule-b1e0a',
    });
    this.FireStore = firebase.firestore();
  }

  addNotification(data: MatSnackBarNotification) {
    return this.FireStore.collection('notifications').add(data);
  }
}
