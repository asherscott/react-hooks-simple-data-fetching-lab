// create your App component here
import { useState, useEffect } from 'react';

function App() {
    const [dogUrl, setDogUrl] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(dog => {
            setDogUrl(dog.message);
            setLoaded(true);
        })
    }, [])

    if(!loaded) return <p>Loading...</p>
    return <img src={dogUrl} alt="A Random Dog"></img>
}

export default App;