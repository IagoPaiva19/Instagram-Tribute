import React from 'react'
import './style.css'

export function Story(){

    return(
        <div className="container">
            <div className="user-elements">
                
                <div className='photo'>
                    <img className='image-user-story' src='https://media-exp1.licdn.com/dms/image/D4D35AQH2qQEUhnVcdw/profile-framedphoto-shrink_200_200/0/1647375504121?e=1655330400&v=beta&t=S_AZ9Eoo4h9hHzg74qpZLeKSxx22PBFDSVb6AcvCRc4'/>
                </div>

                <span>Rian Paiva</span>

            </div>

            <div className="user-elements">
                
                <div className='photo'>
                    <img className='image-user-story' src="https://portaldogarrett.com.br/wp-content/uploads/elementor/thumbs/Logo-Instituto-PROA-pc20mgqantyzd97i23lr2gpdktcv2flfkeql7shy2g.png"/>
                </div>

                <span>InstitutoProa</span>

            </div>

            <div className="user-elements">
                
                <div className='photo'>
                    <img className='image-user-story' src="https://yt3.ggpht.com/ytc/AKedOLTnTjoDN70zAxQqnSOBfj9RxVQ5H0HMZXciBQHY=s900-c-k-c0x00ffffff-no-rj"/>
                </div>

                <span>Deschamps</span>

            </div>

            <div className="user-elements">
                
                <div className='photo'>
                    <img className='image-user-story' src="https://t.ctcdn.com.br/iN2qU4cmqF0GCP8EEDowIGQ9T-s=/400x400/smart/i489946.jpeg"/>
                </div>

                <span>Microsoft</span>

            </div>
            <div className="user-elements">
                
                <div className='photo'>
                    <img className='image-user-story' src="https://folhadefranca.com.br/wp-content/uploads/2022/04/Johnny-Depp-Reproducao-Redes-Sociais-2.jpg"/>
                </div>

                <span>JohnnyDepp</span>

            </div>
            <div className="user-elements">
                
                <div className='photo'>
                    <img className='image-user-story' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAaVBMVEX///8AAABnZ2d8fHzIyMibm5tubm6wsLA4ODjf39/19fUsLCyLi4tJSUk+Pj7S0tKjo6OpqalZWVm+vr4fHx+Tk5Pd3d3MzMzw8PB1dXWBgYExMTFPT0/m5uZUVFQWFhYkJCQPDw+3t7eXnuX4AAAElklEQVR4nO2a2XbqIBRAE632Gq01DjVqter/f+R1CIcxc7zDWns/tSEQNiFwAKMIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAivlcDury+bfr2o40rsvb365qS2obdhAcTX/lHEah9P3hmbgLZ0++n5mni+f/VylOMT/tF6uko2F7wWRtFBOqxlglzoL5lyo5b533ghrON5Muhu0FV2YxaZlgMHUoqRWCN8IjRT3D9oJLs5hzqWDgKRudWC0Yx+NQF6ll2FrwaJezKhWMv5y0q5FWRzCOQy+xjmFrwZldzne54E9mJW3NrPUEQ01YmaeLoFuQ38KmYHwwUyaXFoLBqla/w7aCK7cgfzKwBOOlTkimVoorOH2+7eS4Ta3vPD62MWwr+OGV5D3eFoyHkjC3EzxBY0BJRsaN81BFqgxbCn6p/Otv9Zc32zmCSiQahK8HBW+DmdGU76GqTDyO5vjQUlCK2L1JUVWC8dXOWk/wFvHInYeisMZh0VkwOav82+ig/nSnc0/wMRD5XapCMMouThPZqYE4p7ugnsaMKftcKRhPojf/YpWg8bSBV5PksH2F4Ell35gzvjNTBQTnAb9qwehH7nWTso9QBNBZcCLZ70OnDBqnAsFTHGAqXbtaUMd17uuaB0OczoJ7lfsxuX1KYfazRHDjTZo3JqJdLaifsLCuJ3Pvof0ISu7nuC3z9jgsOIvM2Uw9V4b/asFEsu3Ny9mH36q9CEpV8ghTD4zWZG+uB3eOXxo1EpSlpznKJM8SXiAokUj+xnQDb4oEo+/Y5H6liaDMSkbAp6rRv6D+ItQnL9+kNdnbK3oz/ny8h46CiWrm/gVlLX5WVyRwsyZ7W/B4kZueMWUTQckrXTST7L0LZjIr6Q4pHdBcFTl7MvLi8y+3gWAm1VWDTKIj1N4F9bpNL2L1PGBM9u6mkwpI8tV9A0FdfH5vYixIeheUik2v74KUZ0z23q7ayHpiA0G9QZVnNkOHvgW/4nL08/xtw/tkIUue+oJ6lFadxlxR9i04jMvRK/vAvujS+Lu+oF5gqUH0lYIVfsaXWbHxW1tQT0sySL9QsHqXR3R6EjzqtcRapbxQ0NlPCdGv4OqiS5YjELMWy7HFYJdYO2INBY3uUojqR60FjZu25gaOnmTLmvm+wjf6WUNBHTRvnZ2eT+lJqh5tBc/X1YNr6oToenOiWPDyjPe1YTNBHVKcvDQdkK66CRZhxBCFgmvVCGLYTFA3jL+Rrpf5y5cImk8sEvzRZyCqqs0Ef0lRZTXOg7FeBdfW8U2RoLkeTVsI6iFmH0jVY9e4d8GNnTcs+GNvrqfNBfU+WfBEUh/5Zr0KTjeZkzcouHbP6NKmgnqICZ4SGJtfD6WB9Z+HVLJccD7b+vvZIcGLvwOcNhTc7oZPdoEd5huZSh8+DloW5XdvVPLKKT1nthmlK/ellAgWnD39nz8j8QXXRb9U+D8FD55fwauOFqGD4X+fxcim4Jcmd2oeSAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPxRfgMWQja6iZMXMwAAAABJRU5ErkJggg=="/>
                </div>

                <span>AMD Brasil</span>

            </div>
            <div className="user-elements">
                
                <div className='photo'>
                    <img className='image-user-story' src="https://media-exp1.licdn.com/dms/image/C4E03AQEKlxyVeM8mRw/profile-displayphoto-shrink_800_800/0/1633724212582?e=1660176000&v=beta&t=7wkyMjNZTxn-XOqp9vP6DWEsIGQdJ4dGgf95ZPfnmFQ"/>
                </div>

                <span>Raian.N</span>

            </div>
            
        
            
        </div>

        
    )

}