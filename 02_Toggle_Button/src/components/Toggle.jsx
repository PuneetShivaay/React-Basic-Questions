import { useState } from "react";

function Toggle() {

    const [toggleIsOn, setToggleIsOn] = useState(false)

    const handleToggle = () => {
        setToggleIsOn(!toggleIsOn)
        console.log("Current Toggle Value is: ", toggleIsOn)
    }

    return (
        <>
            <h5>This is Toggle Button</h5>
            <button onClick={handleToggle}>
                {toggleIsOn ? "Turn On" : "Turn Off"}
            </button>
        </>
    )
}

export default Toggle;