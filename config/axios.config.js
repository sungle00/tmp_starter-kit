import axios from "axios";

// Change this if using a different backend API
const baseURL 				= process.env.NEXT_PUBLIC_SITE_URL + "/api"; 

export const api 			= axios.create( {
		baseURL
	,
} );
