import React from 'react'
import './style.css'

export function Suggestion() {

       

    return (
        <div className="container-suggestion">
            <div className="header-suggestion" >
                <img src={`https://media-exp1.licdn.com/dms/image/D4D35AQHk_4FZ4lgH2A/profile-framedphoto-shrink_200_200/0/1648494274632?e=1655326800&v=beta&t=iSiXnBt4j8uBE041IC7LazaPIF6Z4dbLnVuYxnu7r3Q`} />

                <div className="user-infos-suggestion" >

                    <div className="infos" >
                        <span>Iago de Paiva</span>
                        <p>I.Paiva</p>
                    </div>

                    <button className="switch" >Mudar</button>

                </div>
            </div>

            <div className="header-main-suggestion" >

                <p>Sugestões para você</p>

                <span>Ver tudo</span>

            </div>

            <div className="user-suggestion" >

                
                     <div className="infos-suggestion" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHSCm6Vu6DxCWXsnqDzl6SYXfrLQyHJ0bAnA&usqp=CAU" />
    
                        <div className="info-suggestion" >
                            <span>Kentaro Miura</span>
                            <p>Seguido por John Cena</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>
                    <div className="infos-suggestion" >
                        <img src="https://pbs.twimg.com/profile_images/1391841406969319426/hhUm1Rwa_400x400.jpg" />
    
                        <div className="info-suggestion" >
                            <span>Luciano Hang</span>
                            <p>Seguido por John Cena</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>
                    <div className="infos-suggestion" >
                        <img src="https://i.discogs.com/m8hzUO-f0-s7xFx7D4Amp2szU4ZVPxvZ91FhjOHlH3M/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTUxMDM3/NTMtMTY0NTA5ODUw/My0yODEyLmpwZWc.jpeg" />
    
                        <div className="info-suggestion" >
                            <span>Tatiana Shmailyuk</span>
                            <p>Seguido por John Cena</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>
                    <div className="infos-suggestion" >
                        <img src="https://t.ctcdn.com.br/IFvswOVy57rDAEBc5_ox062Me0c=/400x400/smart/filters:format(webp)/i490763.jpeg" />
    
                        <div className="info-suggestion" >
                            <span>Bill Gates</span>
                            <p>Seguido por John Cena</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>
                   
                
               

            </div>

            <footer className="footer-suggestion" >
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

                <p>&copy; 2022 INSTAGRAM FROM META</p>

            </footer>
        </div>
    )
}