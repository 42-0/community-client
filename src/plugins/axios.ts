import axios from 'axios';

const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

export const headers = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

const fileConfigs = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'multipart/form-data',
  },
};

export const axiosGet = async (url: string) => {
  const response = await axios.get(encodeURI(process.env.NEXT_PUBLIC_API_URL + url), headers);
  if (process.env.NODE_ENV === 'development') {
    console.log('response.data :', response.data);
  }
  return response;
};

export const axiosPost = async (url: string, body: any) => {
  const response = await axios.post(encodeURI(process.env.NEXT_PUBLIC_API_URL + url), body, headers);
  if (process.env.NODE_ENV === 'development') {
    console.log('response.data :', response.data);
  }
  return response;
};
//
// export const axiosPostFile = async (url: string, body: any) => {
//   const response = await axios.post(encodeURI(url), body, fileConfigs);
//   if (process.env.NODE_ENV === 'development') {
//     console.log('response.data :', response.data);
//   }
//   return response;
// };
//
// export const axiosPut = async (url: string, body: any) => {
//   const response = await axios.put(encodeURI(url), body, headers);
//   if (process.env.NODE_ENV === 'development') {
//     console.log('response.data :', response.data);
//   }
//   return response;
// };
//
// export const axiosPatch = async (url: string, body: any) => {
//   const response = await axios.patch(encodeURI(url), body, headers);
//   if (process.env.NODE_ENV === 'development') {
//     console.log('response :', response);
//   }
//   return response;
// };
//
// export const axiosDelete = async (url: string) => {
//   const response = await axios.delete(encodeURI(url), headers);
//   if (process.env.NODE_ENV === 'development') {
//     console.log('response.data :', response.data);
//   }
//   return response;
// };

export const axiosPostDefault = async (url: string, body: any) => {
  const response = await axios.post(encodeURI(process.env.NEXT_PUBLIC_API_URL + url), body);
  if (process.env.NODE_ENV === 'development') {
    console.log('response.data :', response.data);
  }
  return response;
};
