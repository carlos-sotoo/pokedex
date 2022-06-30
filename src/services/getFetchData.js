const getFetchData = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        if(res.ok){
            return data.results || data
        }
}

export default getFetchData