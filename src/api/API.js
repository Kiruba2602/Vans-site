export const getVans = async (id) => {
    const url = id ? `/api/vans/${id}` : `/api/vans`;
    const response = await fetch(url);
    if(!response.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: response.statusText,
            status: response.status
        }
    }
    const data = await response.json();
    return data.vans;
}

export const getHostVans = async (id) => {
    const url = id ? `/api/host/vans/${id}` : `/api/host/vans`;
    const response = await fetch(url);
    if(!response.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: response.statusText,
            status: response.status
        }
    }
    const data = await response.json();
    return data.vans;
}

export const loginUser = async (creds) => {
    const response = await fetch('/api/login',
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(creds)
        }
    )

    const data = await response.json()

    if(!response.ok) {
        throw {
            message: data.message || "Failed to login",
            statusText: response.statusText,
            status: response.status
        }
    }
    
    return data; 
}