import { View, Text } from 'react-native'

const NewsOverview = (props) => {
const {title,description,image_url,content}=props.route.params
 console.log("title:"+title,"description:"+description,"image_url:"+image_url,"content:"+content)

  return (
    <View>
     
    </View>
  )
}

export default NewsOverview