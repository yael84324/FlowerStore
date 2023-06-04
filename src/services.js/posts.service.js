import axios from './axios'
export function getPosts() {
    return fetch('http://localhost:8000/products',{method:'GET'}) 
        .then(res => res.json())
        .then(data => data)
        .catch(err => { console.log(err) })
}
export function getClient(email, password) {
    const url = `http://localhost:8000/checkIfClientExist?email=${email}&password=${password}`;
    return fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => {
        console.log(err);
      });
  }

export async function updatePost(postToUpdate) {
    try {
        const response = await axios.put(`/posts/${postToUpdate.id}`, postToUpdate)
        return response.data
    } catch (error) {
        console.log(error);
    }

}

export function addPost(newPost) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(newPost),
    };

    return fetch('http://localhost:8000/products', requestOptions)
        .then(res => res.json())
        .then(data => data)
        .catch(err => { console.log(err) })

}

export function addClient(email, password) {
    const url = 'http://localhost:8000/add-client';
    const data = JSON.stringify({ email, password }); // convert the data to a JSON string
    const headers = { 'Content-Type': 'application/json' };
  
    return fetch(url, { method: 'POST', body: data, headers })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json(); // return the response body data as a JSON object
      })
      .then((data) => data)
      .catch((err) => {
        console.log(err);
        return null;
      });
  }
export function deletePosts(id) {
    return fetch(`http://localhost:8000/products/${id}`, { method: 'DELETE' })
        .then(res => res.json())
        .then(data => data)
        .catch(err => { console.log(err) })

}