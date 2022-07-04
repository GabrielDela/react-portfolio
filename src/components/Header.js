import { useState } from 'react';

function Header() {
    let [opened, setOpened] = useState(false);

    return (
        <header className='fixed w-full bg-neutral-200 z-10' style={{ height: "10vh", top: "0px", left: '0px' }}>
            <div className='flex justify-around h-full hidden lg:flex'>
                <a href="#top" className='link text-2xl font-medium my-auto'>HAUT DE PAGE</a>
                <a href="#top" className='link text-2xl font-medium my-auto'>EXPÉRIENCES</a>
                <a href="#top" className='link text-2xl font-medium my-auto'>FORMATIONS</a>
                <a href="#top" className='link text-2xl font-medium my-auto'>CONTACT</a>
            </div>


            <div className='flex h-full lg:hidden'>
                <a href="#top" className='link text-2xl font-medium my-auto mx-4'>HAUT DE PAGE</a>
                <div onClick={() => setOpened(!opened)} className="space-y-2.5 my-auto ml-auto mx-4 cursor-pointer group">
                    <span className="block h-1 w-10 bg-neutral-600 group-hover:bg-neutral-900 transition"></span>
                    <span className="block h-1 w-10 bg-neutral-600 group-hover:bg-neutral-900 transition"></span>
                    <span className="block h-1 w-10 bg-neutral-600 group-hover:bg-neutral-900 transition"></span>
                </div>
            </div>

            {
                opened ? (
                    <div className='fixed top-0 left-0'>
                        <div className="fixed w-full h-full top-0 left-0 z-20">
                            <div className="flex flex-col h-1/3 m-auto justify-around items-center" style={{margin: "35vh 0"}}>
                                <a href="#top" onClick={() => setOpened(!opened)} className='link text-3xl font-medium my-auto'>HAUT DE PAGE</a>
                                <a href="#top" onClick={() => setOpened(!opened)} className='link text-3xl font-medium my-auto'>EXPÉRIENCES</a>
                                <a href="#top" onClick={() => setOpened(!opened)} className='link text-3xl font-medium my-auto'>FORMATIONS</a>
                                <a href="#top" onClick={() => setOpened(!opened)} className='link text-3xl font-medium my-auto'>CONTACT</a>
                            </div>
                        </div>
                        <div className="fixed w-full h-full bg-gray-500 opacity-80 top-0 left-0 z-10">
                        </div>


                    </div>
                ) : null

            }

            {/* <div className="fixed w-full h-full bg-gray-500 opacity-50 top-0 left-0 z-10">
            </div> */}
        </header>
    );
}

export default Header;

/* 
<Router>
    <NavBar></NavBar>
    <Container>
        <Routes>
            <Route exact path="/" element={<h1>Home Page</h1>} />
            <Route exact path="home" element={<Home />} />
        </Routes>
    </Container>
</Router> 
*/