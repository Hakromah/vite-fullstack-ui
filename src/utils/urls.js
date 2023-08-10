export const STRAPI_API_TOKEN = import.meta.env.VITE_APP_API_TOKEN;

//https://forum.strapi.io/t/fetching-data-works-with-ip-address-but-not-with-localhost/25201 fetching

export const API_URL =
	import.meta.env.VITE_APP_API_URL || 'http://127.0.0.1:1337';
