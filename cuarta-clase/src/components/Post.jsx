import { useParams } from "react-router-dom";

function Post(){
    const { categoria, slug } = useParams()
    return <p>{categoria} / {slug}</p>
}

export default Post;