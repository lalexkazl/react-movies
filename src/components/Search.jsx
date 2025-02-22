import React, { useState } from 'react';

const Search = (props) => {
	const { searchMovies = Function.prototype } = props;
	const [search, setSearch] = useState('');
	const [type, setType] = useState('all');

	const handleKey = (event) => {
		if (event.key === 'Enter') {
			searchMovies(search, type);
		}
	};

	const handleFilter = (event) => {
		setType(event.target.dataset.type);
		searchMovies(search, event.target.dataset.type);
	};

	return (
		<div className="row">
			<div className="input-field">
				<input
					placeholder="search"
					type="search"
					id="email_inline"
					className="validate"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={handleKey}
				/>
				<button
					className="btn search-btn"
					onClick={() => searchMovies(search, type)}
				>
					Search
				</button>
			</div>
			<div>
				<label>
					<input
						className="with-gap"
						name="type"
						type="radio"
						data-type="all"
						checked={type === 'all'}
						onChange={handleFilter}
					/>
					<span>All</span>
				</label>
				<label>
					<input
						className="with-gap"
						name="type"
						type="radio"
						data-type="movie"
						checked={type === 'movie'}
						onChange={handleFilter}
					/>
					<span>Movies only</span>
				</label>
				<label>
					<input
						className="with-gap"
						name="type"
						type="radio"
						data-type="series"
						checked={type === 'series'}
						onChange={handleFilter}
					/>
					<span>Series only</span>
				</label>
			</div>
		</div>
	);
};

export { Search };
