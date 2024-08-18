import {apiSlice} from '../api/apiSlice';

export const authSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    signin: builder.mutation({
      query: body => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
      //   invalidatesTags: [''],
    }),
    // send otp
    sendOtp: builder.mutation({
      query: body => ({
        url: '/auth/send-otp',
        method: 'POST',
        body,
      }),
      //   invalidatesTags: [''],
    }),
  }),
});

export const {useSigninMutation, useSendOtpMutation} = authSlice;
