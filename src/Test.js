function Test() {
    let strArr = ["a", "b", "c"]

    return (
        <div>
            <h1>Test</h1>
            <ul>
                {strArr.map((str, index) => {
                    return <li>{str}</li>
                })}         
            </ul>
        </div>
    )
}

export default Test
