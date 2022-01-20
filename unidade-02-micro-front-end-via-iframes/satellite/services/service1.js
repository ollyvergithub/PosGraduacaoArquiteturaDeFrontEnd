export const getUsers = ({ source, trackingProperties }) => {
    const messageResponse = {
        response: {
            name: 'Ollyver Ottoboni',
            github: 'https://github.com/ollyvergithub/',
        },
        trackingProperties,
    };

    source.postMessage(messageResponse, '*');
};
