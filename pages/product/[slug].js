import {useRouter} from 'next/router'

const Product =()=>{
    const router = useRouter();
    const {slug} = router.query;
    return (
        <>
            <p>slug value : {slug}</p>
        </>
    )
}

export default Product;