import React from 'react'

function ImageSlider(props) {
    return (
        <div>

                <div>
                        <img style={{ width: '10%', maxHeight: '200px' }}
                            src={`http://localhost:5000/${props.file}`} alt="pieceImage" />
                    </div>
        </div>
    )
}

export default ImageSlider;