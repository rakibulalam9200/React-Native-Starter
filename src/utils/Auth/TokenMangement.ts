import * as Keychain from 'react-native-keychain';

export const storeToken = async (token: string) => {
  try {
    await Keychain.setGenericPassword('authToken', token);
    console.log('Token stored successfully');
  } catch (error) {
    console.error('Could not store token', error);
  }
};

export const getToken = async (): Promise<string | null> => {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      console.log('Token retrieved successfully');
      return credentials.password;
    } else {
      // console.log('No token found');
      return null;
    }
  } catch (error) {
    console.error('Could not retrieve token', error);
    return null;
  }
};

export const deleteToken = async () => {
  try {
    await Keychain.resetGenericPassword();
    console.log('Token deleted successfully');
  } catch (error) {
    console.error('Could not delete token', error);
  }
};
