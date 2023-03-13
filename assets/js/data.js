const dd = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.';

export const projects = [1,2,3,4,5,6,7].map( (v, i) => ({
	_id: `sed-ut-perspiciatis-unde-${i}`,
	thumbnail: 'blank-project.jpg',
	thumbnailAlt: 'blank-placeholder-image',
	featured: i === 0,
	title: i === 0 ? 'Featured Work' : 'Sed Ut Perspiciatis Uns',
	date: new Date(),
	category: 'Interior Renovations',
	summary: dd.length > 100 ? `${dd.slice(0, 100)}...` : dd,
	detail: dd,
	slides: [{
		imageTitle: 'Loren Ipsum',
		imageName: 'blank-project.jpg',
		imageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},{
		imageTitle: 'Loren Ipsum Dolar',
		imageName: 'blank-project.jpg',
		imageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},{
		imageTitle: 'Loren Ipsum',
		imageName: 'blank-project.jpg',
		imageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},{
		imageTitle: 'Loren Ipsum Dolar',
		imageName: 'blank-project.jpg',
		imageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},{
		imageTitle: 'Loren Ipsum Dolar',
		imageName: 'blank-project.jpg',
		imageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	}]
}));

export const services = [{
	title: 'Home Renovation',
	description: 'Want to update your kitchen, add a new bathroom, or create an open concept living space? Our renovation services can help transform your existing home into the space of your dreams.',
	icon: 'fa-solid fa-home',
	link: '/services',
	imageName: 'blank-project.jpg',
	hash: 'home_renovations',
},
{
	title: 'Exterior Renovations',
	description: 'Looking to improve your home\'s curb appeal or increase its energy efficiency? Our exterior renovation services can include upgrading your siding, windows, roofing, and more.',
	icon: 'fa-solid fa-paint-roller',
	link: '/services',
	imageName: 'blank-project.jpg',
	hash: 'exterior_renovations',
},
{
	title: 'Room Additions',
	description: 'Need more space for your growing family or want to add a home office or gym? Our team can help you add a new room to your home that seamlessly blends in with your existing space.',
	icon: 'fa-solid fa-plus',
	link: '/services',
	imageName: 'blank-project.jpg',
	hash: 'room_additions',
},
{
	title: 'Commercial Construction',
	description: 'We also offer commercial construction services for businesses looking to build new offices, retail spaces, or other commercial buildings.',
	icon: 'fa-solid fa-building',
	link: '/services',
	imageName: 'blank-project.jpg',
	hash: 'commercial_construction',
}];

export const testimonials = [
	{
		author: 'John Smith',
		comment: 'I used MBC Services to build my dream home, and I couldn\'t be happier with the results. From start to finish, their team was professional, knowledgeable, and dedicated to ensuring that my vision was brought to life.',
		imageUrl: '',
		stars: 5,
	},
	{
		author: 'Larry Lobster',
		comment: 'I hired this construction services company to renovate my outdated kitchen, and they exceeded all of my expectations. Their team of experts listened to my vision and worked with me to create a design that was not only beautiful but also functional. Their attention to detail was impeccable, and the final result was beyond anything I could have imagined. I would definitely recommend them to anyone looking to upgrade their home.',
		imageUrl: '',
		stars: 5,
	},
	{
		author: 'Bat Mane',
		comment: 'I have used MBC Services for several projects over the years, and they have consistently delivered exceptional workmanship and customer service. Their team is always professional, courteous, and responsive to my needs. They take pride in their work and go above and beyond to ensure that every project is completed to the highest standards.',
		imageUrl: '',
		stars: 5,
	},
	{
		author: 'Scooter Man',
		comment: 'MBC Services recently completed a major addition to my home, and I couldn\'t be happier with the results. Their team was highly skilled and knowledgeable, and they kept me informed every step of the way.',
		imageUrl: '',
		stars: 5,
	},
	{
		author: 'Melvin Yun',
		comment: 'I recently had the pleasure of working with MBC Services on a commercial construction project. Their team was highly professional, efficient, and delivered outstanding results. They worked tirelessly to ensure that the project was completed on time and within budget, and the finished product exceeded our expectations. I would highly recommend them for any commercial construction needs.',
		imageUrl: '',
		stars: 5,
	}
]
