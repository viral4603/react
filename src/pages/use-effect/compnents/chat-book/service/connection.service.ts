const createConnection = () => {
    
    console.log('Room is created chat')

    const connect = (): void => {
        console.log('Room is connected with server')
    }

    const disconnect = (): void => {
        console.log('Room is disconnected with server')
    }

    return {
        connect, disconnect
    }
}

export default createConnection;