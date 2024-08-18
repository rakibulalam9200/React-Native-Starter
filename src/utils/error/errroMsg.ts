import {UseFormSetError} from 'react-hook-form';
import {RtkRes} from '../../types/serverResponse';

export const setHookError = (
  err: RtkRes | undefined,
  setError: UseFormSetError<any>,
  setGlobalError?: React.Dispatch<React.SetStateAction<string>>,
) => {
  if (err) {
    if (err.error) {
      console.log(err.error, 'from SetHookError');
      return;
    }
    const errors = err?.data?.errors;
    if (errors) {
      Object.keys(errors).forEach(key => {
        setError(key, {
          type: 'manual',
          message: errors[key][0],
        });
      });
    }
    if (setGlobalError) {
      setGlobalError(err?.data?.message ?? '');
    }
    // console.log(err.error);
  }
};
