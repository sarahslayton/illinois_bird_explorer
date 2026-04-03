import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { SPECIES } from '../data/species'

const STATUS_FILTERS = [
  { value: 'all',        label: 'All Species' },
  { value: 'breeder',    label: 'Breeders' },
  { value: 'migrant',    label: 'Migrants' },
  { value: 'endangered', label: 'State Endangered' },
]

export default function BirdSpeciesPage() {
  const [query, setQuery]             = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return SPECIES.filter((s) => {
      const matchesQuery =
        !q ||
        s.common.toLowerCase().includes(q) ||
        s.scientific.toLowerCase().includes(q)

      const matchesStatus =
        statusFilter === 'all' ||
        (statusFilter === 'endangered'
          ? s.stateList === 'Endangered'
          : s.status === statusFilter)

      return matchesQuery && matchesStatus
    })
  }, [query, statusFilter])

  return (
    <div className="species-page">

      {/* Page header */}
      <div className="species-page__header">
        <div className="species-page__header-inner">
          <span className="species-page__kicker">Illinois Bird Explorer</span>
          <h1 className="species-page__title">Species Accounts</h1>
          <p className="species-page__subtitle">
            Identification, ecology, and distribution information for birds documented across Illinois.
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="species-page__controls">
        <div className="species-page__controls-inner">

          <div className="species-search">
            <svg className="species-search__icon" viewBox="0 0 20 20" aria-hidden="true">
              <circle cx="8.5" cy="8.5" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
              <line x1="13" y1="13" x2="18" y2="18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
            <input
              className="species-search__input"
              type="search"
              placeholder="Search by common or scientific name…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search species"
            />
          </div>

          <div className="species-filters" role="group" aria-label="Filter by status">
            {STATUS_FILTERS.map((f) => (
              <button
                key={f.value}
                className={`species-filter-btn${statusFilter === f.value ? ' species-filter-btn--active' : ''}`}
                onClick={() => setStatusFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <p className="species-page__count">
            {filtered.length} {filtered.length === 1 ? 'species' : 'species'} shown
          </p>
        </div>
      </div>

      {/* Species grid */}
      <div className="species-page__body">
        <div className="species-page__body-inner">
          {filtered.length === 0 ? (
            <p className="species-page__empty">No species match your search.</p>
          ) : (
            <ul className="species-grid">
              {filtered.map((s) => (
                <li key={s.common}>
                  <Link
                    to={`/bird-species/${s.photo}`}
                    className="species-card"
                  >
                    <div className="species-card__photo-wrap">
                      <img
                        className="species-card__photo"
                        src={`/species_photos/${s.photo}.jpg`}
                        alt={s.common}
                        loading="lazy"
                        onError={(e) => { e.currentTarget.classList.add('species-card__photo--missing') }}
                      />
                    </div>
                    <div className="species-card__body">
                      <p className="species-card__common">{s.common}</p>
                      <p className="species-card__scientific">{s.scientific}</p>
                      <div className="species-card__badges">
                        <span className={`species-badge species-badge--${s.status}`}>
                          {s.status.charAt(0).toUpperCase() + s.status.slice(1)}
                        </span>
                        {s.stateList && (
                          <span className="species-badge species-badge--endangered">
                            IL {s.stateList}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

    </div>
  )
}
