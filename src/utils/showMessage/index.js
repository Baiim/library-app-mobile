import {showMessage as showToast} from 'react-native-flash-message';
import COLOR from '../color';

export const showMessage = (message, type) => {
  showToast({
    message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? COLOR.green : COLOR.red,
  });
};
