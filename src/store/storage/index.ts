import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEY } from '../../constants';


export const storeAuthData = async (value:string) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY , value)
    } catch (e) {
      console.log(e)
    }
  }


export const getAuthData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY)
     return value
    } catch(e) {
        console.log(e)
    }
  }

  export const removeAuthValue = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY)
    } catch(e) {
   console.log(e)
    }
  
    console.log('Done.')
  }