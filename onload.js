// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

window.onload = function() {
	var oauth = ChromeExOAuth.initBackgroundPage({
		'request_url': 'http://github.com/login/oauth/authorize',
		'authorize_url': 'http://github.com/login/oauth/authorize',
		'access_url': 'http://github.com/login/oauth/authorize',
		'consumer_key': 'bf911c31a6434561bfc0',
		'consumer_secret': 'c57cbb929d9f4335e32b1cdee343bdca85abb32d',
		'scope': 'user repo public_repo',
		'app_name': "recon"
	});
	// oauth.authorize(function() {
	//   alert("auth");
	// });
}
