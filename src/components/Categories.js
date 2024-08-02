import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {
    return (
        <div className='tbs-categories'>
            {categories.map((cat) => (
                <button
                    key={cat}
                    className={`tbs-category-button ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                >
                    {cat}
                </button>
            ))}
            <button onClick={() => setActiveCategory('')} className='tbs-category-button'>Reset</button>
        </div>
    )
}

export default Categories