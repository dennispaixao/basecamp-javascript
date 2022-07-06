const BASE_URL = 'https://source.unsplash.com/600x400/?cat';

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
	
		return data.url;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
	img.src = await getCats();
};

loadImg();

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);
