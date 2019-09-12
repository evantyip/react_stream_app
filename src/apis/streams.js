import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-streams-api-server.herokuapp.com/'
});