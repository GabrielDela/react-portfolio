function Container({ children }){
    return (
        <div className="w-full h-full flex">
            <div className="w-full mx-auto sm:w-2/3 lg:w-2/3 h-full bg-neutral-800">
                { children }
            </div>
        </div>
    );
}

export default Container;