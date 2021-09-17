import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    const promise = axiosWithAuth().get('/colors')
    const promiseData = promise.then(res => res.data).catch(err => console.log(err))
    return promiseData
}

export default fetchColorService;