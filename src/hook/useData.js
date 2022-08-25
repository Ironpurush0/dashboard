import axios from 'axios'
import { useEffect, useState} from 'react'

const useData = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await axios.get(url)
                console.log(res.data)
                setData(res.data)
                setLoading(false)

            } catch (error) {
                alert(error.message)
            }
        }
        fetchData()
    } ,[url])
    return {data, loading}
}

export default useData