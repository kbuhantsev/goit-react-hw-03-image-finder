import { toast } from 'react-toastify';

export function save(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    toast.error('Set state error', { autoClose: 2000 });
  }
}

export function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    toast.error('Get state error', { autoClose: 2000 });
  }
}

export function remove(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    toast.error('Remove state error', { autoClose: 2000 });
  }
}
