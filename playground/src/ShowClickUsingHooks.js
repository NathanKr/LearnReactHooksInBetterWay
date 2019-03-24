import React , {useState , useEffect} from 'react';

const ShowClickUsingHooks = () => {
    const [clicks,setClicks] = useState(0);
    const style = { width: "100%", height: "100vh" };

    useEffect(() => {
        document.title = `clicks : ${clicks}`;
    })

    return (
        <div style={style} onClick={() => setClicks(clicks+1)}>
            
        </div>
    );
};

export default ShowClickUsingHooks;