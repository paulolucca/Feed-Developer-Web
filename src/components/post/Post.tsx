import { Comment } from '../comments/Comments';
import { Avatar } from '../avatar/Avatar';
import styles from './Post.module.css';

import {format, formatDistanceToNow} from 'date-fns';
import ptBr from'date-fns/locale/pt-BR';
import { useState, FormEvent, ChangeEvent } from 'react';

const comments = [
  1,
  2,
];

interface Author {
  avatarUrl: string | undefined;
  name: string;
  role: string;
  avatarurl: string;
}

interface  Content {
  type: "paragraph" | "link";
  content: string;
}

interface PostProsps{
  author: Author;
  publishedAt: Date;
  content:Content [] ;
}

export function Post ({author, publishedAt, content}: PostProsps) {

  const [comments, setComments] = useState([
   'Poste muito bacana'
    
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format (publishedAt, `d 'de' LLLL 'às' HH:mm'h' `,{
    locale: ptBr,
    
  } )


  const publisheDateRelativeeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent ){
    event.preventDefault()

   // const newCommentText = event.target.comment.value

    setComments([...comments, newCommentText]);

    setNewCommentText('');
    

  }

  function handleNewCOmmentChange (event: ChangeEvent <HTMLTextAreaElement>){
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete: string ){
    const commentsWithoutDeleteDone = comments.filter(comment =>{
        return comment != commentToDelete

    } )


    setComments(commentsWithoutDeleteDone);
  }

  const isNewCommentEmpty = newCommentText.length == 0;


  return (

    <article className={styles.post}>
      <header>
        <div className={styles.author}>

          <Avatar src={author.avatarUrl}/>

          <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
          </div>
        </div>

        <time dateTime={publishedDateFormatted} title={publishedAt.toISOString()}>
          {publisheDateRelativeeToNow}
          
        </time>
      </header>

      <div className={styles.content}>
            {content.map(line =>{
              if(line.type === 'paragraph'){
                return <p key={line.content}> {line.content} </p>;
              } else if (line.type === 'link'){
                return <p key={line.content}> <a href=""> {line.content} </a></p>;
              }
            })}
          <a href="">
          Desenvolvedor Web 
          </a>
        

      
        <a href="">
          Desenvolvedor React
          </a>
        

        
        <a href="">
          Desenvolvedor Junior
          </a>
        
      </div>

      <div>

      <form onSubmit={handleCreateNewComment} className={styles.commemtForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
        name='comment'
        placeholder='Deixe um comentário'
        onChange={handleNewCOmmentChange}
        value={newCommentText}
        required
        />

        <footer>
          <button 
          type='submit' 
          disabled={isNewCommentEmpty}
          > 
           Publicar
           </button>
        </footer>
      </form>

      </div>

      
      <div className={styles.commentsList}>
        {comments.map(comment => {
          return (
                    <Comment 
                    key={comment} 
                    content={comment} 
                    onDeleteComment={deleteComment} 
                    />
                    )
        })}
      </div>
    </article>

  );
}

