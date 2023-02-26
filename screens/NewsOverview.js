import { View, Text } from 'react-native'
import DetailsCard from '../components/DetailsCard'

const NewsOverview = (props) => {
const {title,image_url,content}=props.route.params
//  console.log("title:"+title,"description:"+description,"image_url:"+image_url,"content:"+content)

  return (
    <DetailsCard content={content} image_url={image_url}  title={title}/>
  )
}

export default NewsOverview