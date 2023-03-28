
import { useEffect, useState } from "react";
import NearRes from "./findNearRes";

export default function Control() {
    const [loading, setLoading] = useState(false);
    const [myData, setMydata] = useState([]);
    const [myResData, setMyResData] = useState([])


    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:6066/api/user')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result)
                setMydata(data.result)
                console.log(data.result)
            })
    }, [])
    // console.log(myData)

    // if (loading) return <h1>Loading...</h1>

    function getDataFromApi(path) {
        fetch('http://localhost:6066/api/res')
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setMyResData(data.result)
            });

    }
    const callFunc = (param) => {
        const path = ''
        if (param === 1) {
            path = ''
        } else if (param === 2) {
            path = ''
        } else {
            path = '0'
        }
    }
    return (
        <>
            <NearRes myData={myData} myResData={myResData} />
            <div className="control">
                <p onClick={() => callFunc(1)}>find restaurants</p>
                <p>near restaurants</p>
            </div>
        </>
    )
}