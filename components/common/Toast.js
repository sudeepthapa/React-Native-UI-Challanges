import {  ToastAndroid } from "react-native";

class Toast {
  static showToastWithGravity(title) {    
    ToastAndroid.showWithGravityAndOffset(
      title,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  }
  static showToast = (title) => {
    ToastAndroid.show(title, ToastAndroid.SHORT);
  };
};

export default Toast;