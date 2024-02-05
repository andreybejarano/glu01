import SmallCard from "./SmallCard"

const data = [
    {
        title: 'Movies in Data Base',
        quantity: 21,
        color: 'primary',
        icon: 'fa-film'
    },
    {
        title: 'Total awards',
        quantity: 79,
        color: 'success',
        icon: 'fa-award'
    },
    {
        title: 'Actors quantity',
        quantity: 49,
        color: 'warning',
        icon: 'fa-user'
    }
]

function ContentRowMovies() {
    return (
        <div className="row">

            {/* <!-- Movies in Data Base --> */}
            {/* <!-- Total awards --> */}
            {/* <!-- Actors quantity --> */}
            {data.map((element, key) =>
                <SmallCard 
                    key={key} 
                    title={element.title} 
                    quantity={element.quantity} 
                    color={element.color} 
                    icon={element.icon} 
                />
            )}


        </div>
    )
}

export default ContentRowMovies