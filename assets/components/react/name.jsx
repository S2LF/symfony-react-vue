import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import {render} from 'react-dom';
import { createRoot } from 'react-dom/client';




// create a react functionnale component
function Name () {

    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect (() => {
        setLoading(true);
        const fetchName = async () => {
            try {
                const result = await axios(home_data_route);
                setDatas(result.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchName()
    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading && datas.map(data => (
                <div key={data.id}>
                    <h1>Hello {data.name}</h1>
                </div>
            ))}            
        </div>
    );
};

// ReactDOM.render(<App name="Syl20"/>, document.getElementById('app'));
const root = createRoot(document.getElementById('name'));
root.render(<Name/>);
