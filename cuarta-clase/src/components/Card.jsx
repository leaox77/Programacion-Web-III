import { useTheme } from "./ThemeContext"

export default function Card(){
    const {dark} = useTheme();

    return(
        <div
            style={{
                padding: "20px",
                background: dark ? "#333" : "#f4f4f4",
                color: dark ? "white" : "black"
            }}
        >
            <h3>Carta</h3>
            <p>Este componete esta usando contexto</p>
        </div>
    )
}