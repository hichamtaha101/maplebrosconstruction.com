const dd = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.';

export const projects = Array(7).fill({
	_id: 'sed-ut-perspiciatis-unde',
	thumbnail: '',
	title: 'Sed ut perspiciatis unde',
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
})

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