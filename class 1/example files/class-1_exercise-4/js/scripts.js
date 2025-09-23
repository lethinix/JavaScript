// start the form event handler on submit
document.getElementById('form').addEventListener('submit', function(e) {
	// prevent auto submission
	e.preventDefault();

	// get the prompt value
	const textprompt = document.getElementById('prompt').value;

	// show error if nothing provided
	if ( ! textprompt ) {
		document.getElementById('message').innerHTML = 'Please enter a prompt first';
	} else {
		// build the generator params
		let json = JSON.stringify({
				text_prompts: [
					{
						text: textprompt,
					},
				],
				cfg_scale: 7,
				height: 1024,
				width: 1024,
				steps: 30,
				samples: 1,
			});

		const apiKey = 'sk-sXqFPCq8PgwBE1JtPeSkFhGJ1djMlIR8maSi8wvQvYvnHtY3';
		const engineId = 'stable-diffusion-xl-1024-v1-0'

		fetch( `https://api.stability.ai/v1/generation/${engineId}/text-to-image`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: `${apiKey}`,
				},
				body: json,
			})
			.then(response => response.json())
			.then(json => {
				// once received, assign to img element and render
			 	let img =json.artifacts[0].base64;
				document.getElementById('image').setAttribute('src', 'data:image/jpeg;base64,'+img);
			})

		}

});
