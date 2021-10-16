import './bodycard.css'
function Card({ title, price, image }) {
    return (
        <div className='card'>
           
            <img src={image} alt={title} className="image" />
            <h1 id='heading'>
                {title}
            </h1>
            <p>
            {price}
            </p>
            <br />
            <button id='btn'>ADD</button>
        </div>
    )
}
export default Card