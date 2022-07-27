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
		imageTitle: 'Bleep Bloop',
		imageName: 'blank-project.jpg',
		imageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},{
		imageTitle: 'Bleep Bloop',
		imageName: 'blank-project.jpg',
		imageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},{
		imageTitle: 'Bleep Bloop',
		imageName: 'blank-project.jpg',
		imageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},{
		imageTitle: 'Bleep Bloop',
		imageName: 'blank-project.jpg',
		imageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},{
		imageTitle: 'Bleep Bloop',
		imageName: 'blank-project.jpg',
		imageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	}]
}));

export const services = [{
	title: 'Interior Renovations',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	icon: 'fa-solid fa-hammer',
	link: '/services',
	imageName: 'blank-project.jpg',
	hash: 'interior_renovations',
},
{
	title: 'Exterior Renovations',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	icon: 'fa-solid fa-paint-roller',
	link: '/services',
	imageName: 'blank-project.jpg',
	hash: 'exterior_renovations',
},
{
	title: 'Railings',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	icon: 'fa-solid fa-wrench',
	link: '/services',
	imageName: 'blank-project.jpg',
	hash: 'railings',
},
{
	title: 'Some Service',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	icon: 'fa-solid fa-toolbox',
	link: '/services',
	imageName: 'blank-project.jpg',
	hash: 'some_service',
}];

export const testimonials = [
	{
		author: 'John Smith',
		comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		imageUrl: '',
		stars: 5,
	},
	{
		author: 'Larry Lobster',
		comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		imageUrl: '',
		stars: 5,
	},
	{
		author: 'Bat Mane',
		comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		imageUrl: '',
		stars: 5,
	},
	{
		author: 'Scooter Mans',
		comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		imageUrl: '',
		stars: 5,
	}
]
