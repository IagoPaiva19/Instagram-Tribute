import React from 'react'
import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsEmojiSmile, BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

export function Post() {
    return (
        <>
        <div  >
            <header className="header-post">

                <div className="infos-post">
                    <img className='img-header-post' src="https://i.pinimg.com/originals/0b/55/a1/0b55a15e6f600e44a800787f3dbd7603.jpg" />
                    <p>John Cena</p>
                </div>

                <FiMoreHorizontal />

            </header>

            <div className="img-post" >

                <img src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2021/11/legiao_zsJOGjx7cH2u.png.jpeg" />


            </div>

            <div className="footer-post">
                <IconContext.Provider value={{ size: "30px" }}>

                    <section className="engagement-post">
                        <div className='icons-1'>
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>

                        </div>

                        <div className="icon"><BsBookmark /></div>


                    </section>
                </IconContext.Provider>

                <section className="like">
                    <span>61 curtidas</span>
                </section>

                <div className="legend">
                    <p>
                        <span>Kentaro Miura</span> A man of Culture i see!
                    </p>
                </div>

                <div className="time-post">
                    <time>1 HORA</time>
                </div>
                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>

        </div>

            

  
        </>

        
    )
}