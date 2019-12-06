import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <div>
            about
            <button onClick={() => history.push('/')}>to todo</button>
        </div>
    )
}
