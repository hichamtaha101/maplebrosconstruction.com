import axios from 'axios';
axios.interceptors.response.use( 
	response => response.data,
	( err ) => ({ pass: false, data: err.response.data })
);
