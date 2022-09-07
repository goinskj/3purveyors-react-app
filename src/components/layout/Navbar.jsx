import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
    return (
        <nav className='navbar mb-12 shadow-lg'>
            <div className='container mx-auto'>
                <div className='flex-none px-2 mx-2'>
                    <FaGithub className='inline pr-2 text-3xl' />
                    <Link to='/' className='text-lg font-bold align-middle'>
                        {title}
                    </Link>
                </div>

                <Link to='/' className='text-lg pr-8 font-bold align-middle'>
                    Shop
                </Link>

                <Link to='/' className='text-lg pr-8 font-bold align-middle'>
                    Women
                </Link>

                <Link to='/' className='text-lg pr-8 font-bold align-middle'>
                    Men
                </Link>

                <Link to='/' className='text-lg pr-8 font-bold align-middle'>
                    New
                </Link>

                <Link to='/' className='text-lg pr-8 font-bold align-middle'>
                    Sale
                </Link>
                <div className='flex-1 px-2 mx-2'>
                    <div className='flex justify-end'>
                        <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                            Sign in
                        </Link>
                        <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                            Create account
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: '3 Purveyors',
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar