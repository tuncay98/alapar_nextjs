import Navbar from '@/navbar'
import Header from '@/header'

const Layout = ({children}) =>{
    return(
        <> 
        <Navbar></Navbar>
        <Header></Header>
        {children}
        </>
    );
}

export default Layout;