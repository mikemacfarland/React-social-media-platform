import StyledGrayCard from './styled/StyledGreyCard'
import styledSmall from './styled/StyledSmall'
import Post from './Post'
import {useState,useEffect} from 'react'


const Posts = ()=>{
    
    const getPosts = ()=>{fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(data => setPostData(data))
                    .catch(err => console.log(err))
    }
    
    const [postData,setPostData] = useState([])
    
    useEffect(()=>{
        getPosts()
    },[])
    
    // PAY ATTENTION TO USING CURLY BRACES IN MAP FUNCTION
    return(
    postData.map(data => 
        <StyledGrayCard key={data.id} style={{borderRadius:'10px',
                                marginBottom: '20px'
                                }}>
            <Post body={data.body} userId={data.userId}/>
        </StyledGrayCard>
    )
    )
}

export default Posts