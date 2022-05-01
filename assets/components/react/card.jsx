import React from 'react';
// import {render} from 'react-dom';
import { createRoot } from 'react-dom/client';

function Card ({title, content}) {
    return (
        <div className="card">
            <div className="card-header">
                {title}
            </div>
            <div className="card-body">
                {content}
            </div>
        </div>
    )
}

const root3 = createRoot(document.getElementById('card'));
root3.render(<Card title="Card title" content="Card content"/>);