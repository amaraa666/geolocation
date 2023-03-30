
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
        let path = ''
        if (param === 1) {
            path = 'res'
        } else if (param === 2) {
            path = 'nearRes'
        } else {
            path = '0'
        }
        getDataFromApi(path)
    }
    return (
        <>
            <NearRes myData={myData} myResData={myResData} />
            <div className="control">
                <p onClick={() => callFunc("1")}>find restaurants</p>
                <p onClick={() => callFunc("2")}>near restaurants</p>
            </div>
        </>
    )
}