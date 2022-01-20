import React, { useState } from 'react';
import { IframeMessageProxy } from 'iframe-message-proxy';

export const App = () => {
    const [user, setUser] = useState();
    const getUser = async () => {
        const { response } = await IframeMessageProxy.sendMessage({
            action: 'getUser',
        });

        setUser(response);
    };

    return (
        <div>
            <h1>
                I'm fragment with <span style={{ color: 'blue' }}>React</span>.
                Click button to get user data from Satellite application
            </h1>
            <button onClick={getUser}>Get user</button>

            {user && (
                <>
                    <p>
                        <strong>Name: </strong>
                        {user.name}
                    </p>
                    <p>
                        <strong>Github: </strong>
                        <a href={user.github} target='_blank'>{user.github}</a>
                    </p>
                </>
            )}
        </div>
    );
};
