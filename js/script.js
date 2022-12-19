
 //Action Login JS

	    const dialog = document.querySelector('dialog');
	    const openBtn = document.querySelector('#openBtn');
	    const closeBtn = document.querySelector('#closeBtn');
		const signUp = document.querySelector('#signUp');
		const closeSignUp = document.querySelector('#closeSignUp');
		const forgetPass = document.querySelector('#forgetPass');
		const closeforgetPass = document.querySelector('#closeforgetPass');
	    openBtn.addEventListener('click', () => dialog.showModal());
	    closeBtn.addEventListener('click', () => dialog.close());
		closeSignUp.addEventListener('click', () => sign.close());
		signUp.addEventListener('click', () => sign.showModal());
		forgetPass.addEventListener('click', () => pass.showModal());
		closeforgetPass.addEventListener('click', () => pass.close());

       