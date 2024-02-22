import { useContext } from "react"
import { Text, View } from "react-native"
import MyContext from "../configs/MyContext"


const Home = ({route}) => {
    const [user, dispatch] = useContext(MyContext)

    return (
        <View>
            {user === null ? <>

                <Text>Hello! This is Home page</Text>

            </> : <>
                <Text>Hello {user.username}</Text>
            </>}
        </View>
        
        
    )
}

export default Home