import './BackDrop.css'

export const BackDrop = ({show , click}) => {
    // if show true maka div backdrop akan jalan
    return show && <div className='backDrop' onClick={click}>
            
        </div>
    
}

export default BackDrop;