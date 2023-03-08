import { useContext, useState } from "react";
import { photoContext } from "../photoscontext";
import "./header.css"
const Header = () => {
    const [center, setCenter] = useState("")
    const wordContext = useContext(photoContext);

    const handlBtnInput = (e) => {
        wordContext.setInputField(e.target.value);
    }
    const handleInputText = () => {
        wordContext.setInputField(center);
        console.log(wordContext.inputField)

    }

    return (
        <>
            <header>
                <h1>SnapShot</h1>
                <label htmlFor="search">
                    <input onChange={(e) => setCenter(e.target.value)} value={center} className="search" placeholder="enter any thing" />
                    <button onClick={handleInputText} className="search">Search</button>
                </label>
                <section>
                    <button onClick={(e) => { handlBtnInput(e) }} value="mountain">Mountain</button>
                    <button onClick={(e) => { handlBtnInput(e) }} value="bird">Bird</button>
                    <button onClick={(e) => { handlBtnInput(e) }} value="beaches">Beaches</button>
                    <button onClick={(e) => { handlBtnInput(e) }} value="food">Food</button>
                </section>

            </header>
        </>
    )
}
export default Header;