import { useState, useEffect } from 'react'

function useData() {
    const [demandData, setDemandData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await fetch("http://localhost:8080/data")
                .then(response => {
                    response.json().then(json => {
                        setDemandData(json)
                    })
                }).catch(error => {
                    console.log(error)
                })
        }
        fetchData()
    }, [demandData])

    var data = {
        labels: demandData?.map(item => item.x),
        datasets: [
            {
                label: "Demand",
                data: demandData?.map(item => item.y),
                borderColor: 'rgba(0, 0, 200, 0.2)',
            }
        ]
    }

    return {
        data
    }
}

export default useData