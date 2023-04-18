import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comments.module.css';
import { Avatar } from '../avatar/Avatar';
import { useState } from 'react';

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string)=> void;

}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount,] = useState(0);


    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }



    return (



        <div className={styles.comments}>
            <Avatar src="https://github.com/maykbrito.png"
                hasBorder={false}
            />
            <div className={styles.commentsBox}>
                <div className={styles.commentsContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>DIego Fernando</strong>
                            <time dateTime="2022-05-11 08:13:00" title='11 de maio 2022'>
                                Publicado cerca de 1 hora atrás
                            </time>

                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentarios'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}