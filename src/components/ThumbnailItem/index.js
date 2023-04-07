import {List,Button,Image} from './styledComponents'

const ThumbnailItem=(props)=>{
    const {details,isActive,clickImg}=props
    const {id,thumbnailUrl,thumbnailAltText}=details
    const imageItem=()=>{
        clickImg(id)
    }

    return(
        <List>
            <Button type="button">
                <Image src={thumbnailUrl} alt={thumbnailAltText} active={!isActive} onClick={imageItem}/>
            </Button>
        </List>
    )
}

export default ThumbnailItem