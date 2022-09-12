import { useState } from 'react'

const Categories = ({ value, onChangeCategory }) => {
	const categories = [
		'Все',
		'Самые новые',
		'Старые',
		'Познавательные',
		'Смешные',
	]

	return (
		<div className='categories'>
			<ul>
				{categories.map((c, index) => (
					<li
						key={c}
						className={value === index ? 'active' : ''}
						onClick={() => onChangeCategory(index)}
					>
						{c}
					</li>
				))}
			</ul>
		</div>
	)
}
export default Categories
