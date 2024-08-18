import {SerializedError} from '@reduxjs/toolkit';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';

export type ValidationErrors = {
  [key: string]: string[];
};

export type ServerResponse = {
  success: boolean;
  message: string;
  errors?: ValidationErrors;
  error?: string;
};

export type RtkRes = {
  data?: ServerResponse;
  error?: FetchBaseQueryError | SerializedError;
  status?: String;
};
