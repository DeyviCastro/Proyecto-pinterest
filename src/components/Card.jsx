
export const Card = ({item}) => {

    // console.log(item)

    return (
        <div className="item">
            <div className="image">
                <img src={item.urls.small} alt={item.description} />
                <a className="btn-save">Guardar</a>
                <a className="icon-upload"><img src="/uploadicon.png" alt="" /></a>
                <a className="icon-dots"><img src="/dotsicon.png" alt="" /></a>

            </div>
            <p>{item.description}</p>
            <div>
                <img className='user' src={item.user.profile_image.small} alt="" />
                <span>{item.user.name}</span>
            </div>
        </div>
    )
}
