// if pagePath is in form of either '/' | '/blog' | '/my-post-title'
// this function takes the pagePath
// and returns either undefined | "Blog" | "My Post Title"
function cleanPageTitle(pagePath) {
	if (pagePath.length <= 1) {
		return;
	}
	const trimmedTitle = pagePath.replace(/\//g, '').replace(/-/g, ' ');
	const words = trimmedTitle.split(' ');
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].substr(1);
	}
	const cleanedPageTitle = words.join(' ');
	return cleanedPageTitle;
}

export default {
  cleanPageTitle
}