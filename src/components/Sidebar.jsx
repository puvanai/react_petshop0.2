function Sidebar(){
    return <>
    <div>
        <div className="bg-white">
            <i className="bi bi-bootstrap-fill my-2"></i>
            <span className="brand-name fs-4"></span>
        </div>
        <hr className="text-dark" />
        <div className="list-group list-group-flush">
            <a className="list-group-item list-group-item-action my-2">
                <i className="bi bi-speedometer2">
                    <span>Dashborad</span>
                </i>
            </a>
            <a className="list-group-item list-group-item-action my-2">
                <i className="bi bi-house">
                    <span>Home</span>
                </i>
            </a>
        </div>
    </div>
    </>
}

export default Sidebar