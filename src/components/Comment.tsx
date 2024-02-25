import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import Avatar from "./Avatar"
import { useState } from "react"

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void
}

export default function Comment(props:CommentProps){

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        console.log("deletado")
        props.onDeleteComment(props.content)
    }

    function handleLikeIt(){
        setLikeCount(likeCount + 1)
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/scowp.png" alt=""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Campolongo</strong>
                            <time title="11 de Maio às 08:13" dateTime="2024-02-18 16:30:00">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{props.content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeIt}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}