
/*
 * Static / Simple Routes
 */

// var titlePrefix = 'Stephen Rivas JR | ';

exports.about = function(req, res) {
	res.render('about', { title: 'About', active: '/about' });
};

// this will move eventually to its own class for dynamic content
exports.blog = function(req, res) {
	res.render('blog', { title: 'Blog', active: '/blog' });
};

exports.contact = function(req, res) {
	res.render('contact', { title: 'Contact', active: '/contact' });
};

exports.index = function(req, res) {
	var headers = [ "Hi. I'm Stephen.", "I &hearts; Javascript.", "And my friends.", "Last quote." ];
	res.render('index', { title: 'Home', active: '/', headers: headers });
};

exports.resume = function(req, res) {
	res.render('resume', { title: 'Résumé', active: '/resume' });
};

exports.download = function(req, res) {
	var fileType;
	if(!req.params.fileType){
		fileType = 'pdf'; // default to pdf
	} else {
		fileType = req.params.fileType;
	}

	res.download('public/files/resume/stephen-rivas-jr-resume.'+fileType, 'stephen-rivas-jr-resume.'+fileType);
};

exports.work = function(req, res) {
	res.render('resume', { title: 'Work', active: '/work' });
};