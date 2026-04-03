import { Link, NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  {
    label: 'Bird Species',
    path: '/bird-species',
    dropdown: [
      { label: 'Species Accounts', path: '/bird-species' },
    ],
  },
  {
    label: 'Migration',
    path: '/migration',
    dropdown: [
      { label: 'Migration Overview', path: '#' },
      { label: 'Spring Migration', path: '#' },
      { label: 'Fall Migration', path: '#' },
      { label: 'Migration Routes & Corridors', path: '#' },
      { label: 'Key Stopover Sites', path: '#' },
    ],
  },
  {
    label: 'Monitoring Programs',
    path: '/monitoring',
    dropdown: [
      { label: 'Programs Overview', path: '#' },
      { label: 'Breeding Bird Survey', path: '#' },
      { label: 'Christmas Bird Count', path: '#' },
      { label: 'eBird Illinois', path: '#' },
      { label: 'Volunteer Monitoring', path: '#' },
    ],
  },
  {
    label: 'Conservation',
    path: '/conservation',
    dropdown: [
      { label: 'Conservation Overview', path: '#' },
      { label: 'Threatened & Endangered Species', path: '#' },
      { label: 'Habitat Conservation', path: '#' },
      { label: 'Policy & Advocacy', path: '#' },
      { label: 'How to Help', path: '#' },
    ],
  },
  {
    label: 'Data Explorer',
    path: '/data-explorer',
    dropdown: [
      { label: 'Interactive Map', path: '#' },
      { label: 'Population Trends', path: '#' },
      { label: 'Historical Records', path: '#' },
      { label: 'Download Data', path: '#' },
      { label: 'About the Data', path: '#' },
    ],
  },
  {
    label: 'Education',
    path: '/education',
    dropdown: [
      { label: 'Getting Started with Birding', path: '#' },
      { label: 'Field Resources', path: '#' },
      { label: 'Volunteer Programs', path: '#' },
      { label: 'School & Youth Programs', path: '#' },
      { label: 'Events & Field Trips', path: '#' },
    ],
  },
  {
    label: 'Illinois BirdLab',
    path: '/birdlab',
    dropdown: [
      { label: 'About BirdLab', path: '#' },
      { label: 'Current Research', path: '#' },
      { label: 'Publications', path: '#' },
      { label: 'Meet the Team', path: '#' },
      { label: 'Collaborate With Us', path: '#' },
    ],
  },
]

function BlockI() {
  return (
    <svg
      className="block-i"
      width="20"
      height="28"
      viewBox="0 0 20 28"
      aria-hidden="true"
    >
      <rect x="0" y="0" width="20" height="5" />
      <rect x="6" y="5" width="8" height="18" />
      <rect x="0" y="23" width="20" height="5" />
    </svg>
  )
}

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__bar">
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo" aria-label="Illinois Bird Explorer home">
            <BlockI />
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Illinois Bird Explorer</span>
              <span className="navbar__logo-sub">University of Illinois</span>
            </div>
          </Link>

          <nav aria-label="Main navigation">
            <ul className="navbar__nav">
              {NAV_ITEMS.map((item) => (
                <li key={item.path} className="navbar__item">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
                    }
                    aria-haspopup="true"
                  >
                    {item.label}
                    <span className="navbar__chevron" aria-hidden="true" />
                  </NavLink>

                  <ul className="navbar__dropdown" role="menu">
                    {item.dropdown.map((drop) => (
                      <li key={drop.label} className="navbar__dropdown-item" role="none">
                        <a
                          href={drop.path}
                          className="navbar__dropdown-link"
                          role="menuitem"
                        >
                          {drop.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="navbar__accent" aria-hidden="true" />
    </header>
  )
}
