import React from 'react'

const ImageList = ({imageArr}) => {
  return (
    <div style={{paddingTop:"50px"}}>
        <h2>Header</h2>
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {imageArr.map((each,index)=>(
                <img src={each.urls.small} alt="imageUrl" key={index} />
            ))}

        </div>
    </div>
  )
}

export default ImageList